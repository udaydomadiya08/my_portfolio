// Main application logic
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // ========== VIDEO BACKGROUND AUTOPLAY CHECK ==========
  const bgVideo = document.getElementById('bg-video');
  if (bgVideo) {
    bgVideo.play().catch(() => {
      bgVideo.muted = true;
      bgVideo.play().catch(e => console.log('Video autoplay prevented:', e));
    });
  }

  // ========== NAVBAR SCROLL (OFF-THREAD INTERSECTION OBSERVER) ==========
  const navbar = document.getElementById('navbar');
  const heroSection = document.getElementById('hero');
  if (navbar && heroSection && 'IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navbar.classList.remove('scrolled');
        } else {
          navbar.classList.add('scrolled');
        }
      });
    }, { rootMargin: '-70px 0px 0px 0px' });
    navObserver.observe(heroSection);
  } else if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ========== MOBILE MENU TOGGLE & DRAWER ==========
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !mobileDrawer.classList.contains('hidden');
      if (isOpen) {
        mobileDrawer.classList.add('hidden');
        mobileMenuBtn.classList.remove('active');
      } else {
        mobileDrawer.classList.remove('hidden');
        mobileMenuBtn.classList.add('active');
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
        mobileMenuBtn.classList.remove('active');
      });
    });

    // Close drawer when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        mobileDrawer.classList.add('hidden');
        mobileMenuBtn.classList.remove('active');
      }
    });
  }

  // Pause background video when tab is hidden to save 100% resources
  document.addEventListener('visibilitychange', () => {
    if (bgVideo) {
      if (document.hidden) {
        bgVideo.pause();
      } else {
        bgVideo.play().catch(() => {});
      }
    }
  });

  // ========== LANGUAGE HELPER ==========
  function getLangClass(lang) {
    const map = {
      'Python': 'lang-python',
      'JavaScript': 'lang-javascript',
      'TypeScript': 'lang-typescript',
      'Kotlin': 'lang-kotlin',
      'Shell': 'lang-shell',
      'C++': 'lang-cpp',
      'Jupyter Notebook': 'lang-jupyter',
      'Markdown': 'lang-other',
      'Other': 'lang-other'
    };
    return map[lang] || 'lang-other';
  }

  // ========== RENDER TOP 10 PROJECTS ==========
  const topGrid = document.getElementById('top-projects-grid');

  TOP_PROJECTS.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card top cursor-pointer group';
    card.dataset.index = index;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="rank-badge">#${project.rank}</div>
      
      <div class="flex items-start gap-4 mb-5">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-rose-500/10 flex items-center justify-center text-2xl shrink-0 border border-orange-500/20 shadow-inner group-hover:scale-110 transition-transform">
          ${getIcon(project.tags)}
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="font-display text-xl sm:text-2xl font-bold mb-1 pr-12 truncate text-white group-hover:text-amber-200 transition-colors">${project.name}</h3>
          <p class="text-sm text-amber-400 font-semibold tracking-wide">${project.highlight}</p>
        </div>
      </div>

      <p class="text-white/70 text-sm sm:text-base leading-relaxed mb-6">${project.description}</p>

      <div class="flex flex-wrap items-center gap-3 mb-6">
        <span class="lang-pill">
          <span class="lang-dot ${getLangClass(project.language)}"></span>
          ${project.language}
        </span>
        ${project.stars > 0 ? `<span class="lang-pill text-amber-300">⭐ ${project.stars}</span>` : ''}
        ${project.forks > 0 ? `<span class="lang-pill text-orange-300">🍴 ${project.forks}</span>` : ''}
        ${project.tags.map(t => `<span class="lang-pill">${t}</span>`).join('')}
      </div>

      <div class="flex items-center gap-4 pt-2">
        <button class="inspect-btn inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl bg-orange-500/15 hover:bg-orange-500/30 border border-orange-500/30 text-amber-300 transition-all shadow-sm">
          <span>🔍</span> Inspect Architecture
        </button>
        <a href="${project.url}" target="_blank" rel="noopener"
           class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/70 hover:text-white transition group-repo-link"
           onclick="event.stopPropagation()">
          GitHub
          <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </div>
    `;

    // Click card to open Architecture Deep-Dive modal
    card.addEventListener('click', (e) => {
      openProjectModal(project);
    });

    topGrid.appendChild(card);
  });

  // ========== RENDER ALL REPOS ==========
  const allGrid = document.getElementById('all-repos-grid');

  ALL_REPOS.forEach((repo, index) => {
    const card = document.createElement('div');
    card.className = 'repo-card group';
    card.dataset.lang = repo.language;
    card.dataset.category = repo.category || 'Other';
    card.dataset.name = repo.name.toLowerCase();

    card.innerHTML = `
      <div class="flex items-start justify-between gap-3 mb-3">
        <h4 class="font-semibold text-white group-hover:text-amber-300 transition truncate">${repo.name}</h4>
        <span class="lang-pill shrink-0">
          <span class="lang-dot ${getLangClass(repo.language)}"></span>
          ${repo.language === 'Jupyter Notebook' ? 'Jupyter' : repo.language}
        </span>
      </div>
      <p class="text-sm text-white/55 line-clamp-2 leading-relaxed mb-4">${repo.description}</p>
      <div class="flex items-center gap-3 text-xs text-white/40 mt-auto">
        ${repo.stars > 0 ? `<span class="text-amber-300">⭐ ${repo.stars}</span>` : ''}
        ${repo.forks > 0 ? `<span class="text-orange-300">🍴 ${repo.forks}</span>` : ''}
        <a href="${repo.url}" target="_blank" rel="noopener" class="ml-auto text-amber-400/80 group-hover:text-orange-400 font-medium transition" onclick="event.stopPropagation()">
          Open ↗
        </a>
      </div>
    `;

    card.addEventListener('click', () => {
      // Find matching top project or fallback to generic modal info
      const topMatch = TOP_PROJECTS.find(p => p.name === repo.name);
      if (topMatch) {
        openProjectModal(topMatch);
      } else {
        openGenericRepoModal(repo);
      }
    });

    allGrid.appendChild(card);
  });

  // ========== 3. ARCHITECTURE DEEP-DIVE MODAL LOGIC ==========
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCard = document.getElementById('modal-card');
  const modalRank = document.getElementById('modal-rank');
  const modalLang = document.getElementById('modal-lang');
  const modalHighlight = document.getElementById('modal-highlight');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalPipeline = document.getElementById('modal-pipeline');
  const modalChallenges = document.getElementById('modal-challenges');
  const modalTechTags = document.getElementById('modal-tech-tags');
  const modalGithubLink = document.getElementById('modal-github-link');
  const modalCopyBtn = document.getElementById('modal-copy-btn');
  const copyText = document.getElementById('copy-text');

  let currentRepoUrl = '';

  function openProjectModal(project) {
    currentRepoUrl = project.url;
    modalRank.textContent = `#${project.rank}`;
    modalLang.innerHTML = `<span class="lang-dot ${getLangClass(project.language)}"></span> ${project.language}`;
    modalHighlight.textContent = project.highlight || 'Featured Project';
    modalTitle.textContent = project.name;
    modalDesc.textContent = project.description;

    // Build Pipeline Steps
    const pipeline = project.architecture || ["Input Query", "Preprocessing Engine", "Core Reasoning", "Safety Verification", "Output Result"];
    modalPipeline.innerHTML = pipeline.map((step, idx) => `
      <div class="pipeline-step">
        <span class="step-number">Stage 0${idx + 1}</span>
        <span class="step-label">${step}</span>
      </div>
    `).join('');

    // Challenges
    modalChallenges.textContent = project.challenges || "Engineering low-latency deterministic workflows while maintaining strict accuracy and privacy.";

    // Tech Tags
    const tags = project.keyTech || project.tags || [];
    modalTechTags.innerHTML = tags.map(t => `<span class="lang-pill text-xs">${t}</span>`).join('');

    // Links & Copy
    modalGithubLink.href = project.url;
    copyText.textContent = 'Copy Git Clone';

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openGenericRepoModal(repo) {
    currentRepoUrl = repo.url;
    modalRank.textContent = `REPO`;
    modalLang.innerHTML = `<span class="lang-dot ${getLangClass(repo.language)}"></span> ${repo.language}`;
    modalHighlight.textContent = repo.category || 'Open Source';
    modalTitle.textContent = repo.name;
    modalDesc.textContent = repo.description;

    modalPipeline.innerHTML = `
      <div class="pipeline-step"><span class="step-number">Phase 01</span><span class="step-label">Source Setup</span></div>
      <div class="pipeline-step"><span class="step-number">Phase 02</span><span class="step-label">Core Logic</span></div>
      <div class="pipeline-step"><span class="step-number">Phase 03</span><span class="step-label">Execution</span></div>
    `;

    modalChallenges.textContent = "Engineered for clean modularity, reproducibility, and production deployment.";
    modalTechTags.innerHTML = (repo.tags || [repo.language]).map(t => `<span class="lang-pill text-xs">${t}</span>`).join('');

    modalGithubLink.href = repo.url;
    copyText.textContent = 'Copy Git Clone';

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeModal();
  });

  modalCopyBtn.addEventListener('click', () => {
    if (currentRepoUrl) {
      navigator.clipboard.writeText(`git clone ${currentRepoUrl}.git`).then(() => {
        copyText.textContent = 'Copied to Clipboard! ✓';
        setTimeout(() => { copyText.textContent = 'Copy Git Clone'; }, 2200);
      });
    }
  });

  // ========== 2. TECH STACK ORBIT CLICK -> DIRECT FILTER REDIRECT ==========
  const interactiveTechElements = document.querySelectorAll('.skill-orb, .orbit-badge-btn');
  interactiveTechElements.forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const techId = el.dataset.techId;
      const techMatch = TECH_STACK.find(t => t.id === techId);
      const filterTag = techMatch ? (techMatch.tag || 'AI') : (el.dataset.tag || 'AI');

      // Trigger filter in archive
      const targetBtn = Array.from(document.querySelectorAll('.filter-btn')).find(b => b.dataset.filter === filterTag);
      if (targetBtn) {
        targetBtn.click();
      }

      // Smoothly redirect/scroll to the filtered archive section
      const archiveSection = document.getElementById('archive');
      if (archiveSection) {
        archiveSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const orbitCoreBtn = document.getElementById('orbit-core-btn');
  if (orbitCoreBtn) {
    orbitCoreBtn.addEventListener('click', () => {
      const allBtn = Array.from(document.querySelectorAll('.filter-btn')).find(b => b.dataset.filter === 'all');
      if (allBtn) allBtn.click();
      const archiveSection = document.getElementById('archive');
      if (archiveSection) {
        archiveSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ========== 5. STAR CONSTELLATION & 53 MASTER IDEAS LOGIC ==========
  if (typeof MASTER_IDEAS !== 'undefined' && MASTER_IDEAS.length > 0) {
    const linesGroup = document.getElementById('constellation-lines');
    const starsGroup = document.getElementById('constellation-stars');
    const hudTooltip = document.getElementById('star-hud-tooltip');
    const svgWrapper = document.getElementById('constellation-svg-wrapper');
    const svgElem = document.getElementById('constellation-svg');
    const ideasGrid = document.getElementById('ideas-cards-grid');
    const ideasSearch = document.getElementById('ideas-search');
    const ideasCount = document.getElementById('ideas-count');
    const ideasCardFilters = document.querySelectorAll('#ideas-card-filters .filter-btn');
    const clusterFilters = document.querySelectorAll('#constellation-cluster-filters .cluster-btn');

    // 1. Draw Constellation Connecting Filaments
    if (linesGroup && typeof CONSTELLATION_LINES !== 'undefined') {
      let linesSvg = '';
      CONSTELLATION_LINES.forEach(([fromId, toId]) => {
        const fromStar = MASTER_IDEAS.find(s => s.id === fromId);
        const toStar = MASTER_IDEAS.find(s => s.id === toId);
        if (fromStar && toStar) {
          linesSvg += `<line class="constellation-line" data-from="${fromId}" data-to="${toId}"
            x1="${fromStar.x}" y1="${fromStar.y}" x2="${toStar.x}" y2="${toStar.y}" />`;
        }
      });
      linesGroup.innerHTML = linesSvg;
    }

    // 2. Draw 53 Star Nodes
    if (starsGroup) {
      let starsSvg = '';
      MASTER_IDEAS.forEach(idea => {
        const rCore = Math.max(3.5, idea.magnitude * 0.55);
        const rHalo = rCore * 2.6;
        starsSvg += `
          <g class="constellation-star" id="svg-star-${idea.id}" data-id="${idea.id}" data-category="${idea.category}" transform="translate(${idea.x}, ${idea.y})">
            <!-- Invisible Touch Hitbox for finger taps on mobile -->
            <circle class="star-touch-hitbox" cx="0" cy="0" r="24" fill="transparent" pointer-events="all" />
            <!-- Radiant Halo -->
            <circle class="star-halo" cx="0" cy="0" r="${rHalo}" fill="${idea.color}" opacity="0.36" />
            <!-- Intense Starlight Core -->
            <circle class="star-core" cx="0" cy="0" r="${rCore}" fill="${idea.color}" />
            <!-- Star Label -->
            <text class="star-label" x="${rCore + 5}" y="3">${idea.rank}. ${idea.shortTitle}</text>
          </g>
        `;
      });
      starsGroup.innerHTML = starsSvg;
    }

    // Interactive Star Hover, Touch & Click Listeners
    const allStars = document.querySelectorAll('.constellation-star');
    const allLines = document.querySelectorAll('.constellation-line');

    allStars.forEach(starEl => {
      const id = starEl.dataset.id;
      const idea = MASTER_IDEAS.find(i => i.id === id);
      if (!idea) return;

      function showStarTooltip() {
        // Brighten connected filaments
        allLines.forEach(line => {
          if (line.dataset.from === id || line.dataset.to === id) {
            line.classList.add('active');
          } else {
            line.classList.remove('active');
          }
        });

        // Position HUD Tooltip with boundary clamping for mobile & desktop
        if (hudTooltip && svgElem && svgWrapper) {
          const pt = svgElem.createSVGPoint();
          pt.x = idea.x;
          pt.y = idea.y;
          const screenPt = pt.matrixTransform(svgElem.getScreenCTM());
          const wrapperRect = svgWrapper.getBoundingClientRect();
          let posX = screenPt.x - wrapperRect.left;
          let posY = screenPt.y - wrapperRect.top;

          const tooltipWidth = hudTooltip.offsetWidth || 260;
          const halfW = tooltipWidth / 2;

          // Boundary clamping to prevent clipping off screen edges
          if (posX - halfW < 12) posX = halfW + 12;
          if (posX + halfW > wrapperRect.width - 12) posX = wrapperRect.width - halfW - 12;

          if (posY < 130) {
            hudTooltip.style.transform = 'translate(-50%, 15px)';
          } else {
            hudTooltip.style.transform = 'translate(-50%, -120%)';
          }

          hudTooltip.querySelector('.hud-rank').textContent = `#${idea.rank}`;
          hudTooltip.querySelector('.hud-type').textContent = idea.type;
          hudTooltip.querySelector('.hud-title').textContent = idea.title;
          hudTooltip.querySelector('.hud-desc').textContent = idea.description;

          hudTooltip.style.left = `${posX}px`;
          hudTooltip.style.top = `${posY}px`;
          hudTooltip.classList.remove('opacity-0', 'pointer-events-none');
        }
      }

      function hideStarTooltip() {
        allLines.forEach(line => line.classList.remove('active'));
        if (hudTooltip) {
          hudTooltip.classList.add('opacity-0', 'pointer-events-none');
        }
      }

      starEl.addEventListener('mouseenter', showStarTooltip);
      starEl.addEventListener('touchstart', showStarTooltip, { passive: true });

      starEl.addEventListener('mouseleave', hideStarTooltip);

      // Click / Tap: Warp to Dossier Card below
      starEl.addEventListener('click', () => {
        hideStarTooltip();
        warpToIdeaCard(idea.id);
      });
    });

    // Warp Function: scrolls to card and flashes highlight
    function warpToIdeaCard(ideaId) {
      const card = document.getElementById(`idea-card-${ideaId}`);
      if (!card) return;

      // If currently filtered out, reset filter to 'all' or idea's category
      if (card.classList.contains('hidden')) {
        const catBtn = Array.from(ideasCardFilters).find(b => b.dataset.filter === card.dataset.category) ||
                       Array.from(ideasCardFilters).find(b => b.dataset.filter === 'all');
        if (catBtn) catBtn.click();
      }

      // Smooth scroll to card
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Trigger pulse warp animation
      card.classList.remove('highlight-warp');
      void card.offsetWidth; // Force reflow
      card.classList.add('highlight-warp');
    }

    // 3. Cluster Filters for the Star Constellation
    clusterFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        clusterFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cluster = btn.dataset.cluster;

        allStars.forEach(star => {
          const starCat = star.dataset.category;
          if (cluster === 'all' || starCat === cluster) {
            star.classList.remove('dimmed');
            star.classList.add('active');
          } else {
            star.classList.add('dimmed');
            star.classList.remove('active');
          }
        });

        allLines.forEach(line => {
          const fromStar = MASTER_IDEAS.find(s => s.id === line.dataset.from);
          const toStar = MASTER_IDEAS.find(s => s.id === line.dataset.to);
          if (cluster === 'all') {
            line.classList.remove('dimmed');
          } else if (fromStar && toStar && (fromStar.category === cluster || toStar.category === cluster)) {
            line.classList.remove('dimmed');
          } else {
            line.classList.add('dimmed');
          }
        });
      });
    });

    // 4. Render All 53 Dossier Bento Cards
    if (ideasGrid) {
      let cardsHtml = '';
      MASTER_IDEAS.forEach(idea => {
        cardsHtml += `
          <div class="idea-card" id="idea-card-${idea.id}" data-id="${idea.id}" data-category="${idea.category}">
            <div class="flex items-start justify-between gap-3 mb-3">
              <div class="flex items-center gap-2.5">
                <span class="idea-rank-badge">#${idea.rank}</span>
                <span class="idea-type-pill" style="border-color: ${idea.color}40; color: ${idea.color};">${idea.type}</span>
              </div>
              <button class="warp-to-star-btn text-xs text-white/40 hover:text-amber-300 transition flex items-center gap-1" data-id="${idea.id}" title="Inspect in Star Constellation">
                <span>✦</span> Star Map
              </button>
            </div>

            <h4 class="font-display text-lg font-bold text-white mb-2 leading-snug group-hover:text-amber-200 transition-colors">${idea.title}</h4>
            <p class="text-sm text-white/70 leading-relaxed mb-4">${idea.description}</p>

            <div class="idea-potential-box">
              <span class="text-xs font-semibold text-amber-300 block mb-0.5">Potential &amp; Strategic Rationale:</span>
              ${idea.potential}
            </div>

            <div class="flex items-center justify-between pt-3 mt-4 border-t border-white/5 text-xs text-white/40">
              <span class="font-mono text-[11px] text-white/50">${idea.categoryLabel}</span>
              <span class="text-amber-400 font-medium">Rank #${idea.rank} of 53</span>
            </div>
          </div>
        `;
      });
      ideasGrid.innerHTML = cardsHtml;

      // Click "Star Map" on any card to scroll back up and focus star in the SVG
      document.querySelectorAll('.warp-to-star-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const starId = btn.dataset.id;
          const starEl = document.getElementById(`svg-star-${starId}`);
          const constSec = document.getElementById('constellation-svg-wrapper');
          if (constSec) {
            constSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          if (starEl) {
            starEl.dispatchEvent(new MouseEvent('mouseenter'));
            setTimeout(() => {
              starEl.dispatchEvent(new MouseEvent('mouseleave'));
            }, 3000);
          }
        });
      });
    }

    // 5. Search & Filter Cards Logic
    function filterIdeaCards() {
      const query = (ideasSearch ? ideasSearch.value.trim().toLowerCase() : '');
      const activeFilterBtn = document.querySelector('#ideas-card-filters .filter-btn.active');
      const activeCat = activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';

      let visibleCount = 0;
      document.querySelectorAll('.idea-card').forEach(card => {
        const id = card.dataset.id;
        const cat = card.dataset.category;
        const idea = MASTER_IDEAS.find(i => i.id === id);
        if (!idea) return;

        const matchesCat = (activeCat === 'all' || cat === activeCat);
        const matchesQuery = !query || 
          idea.title.toLowerCase().includes(query) ||
          idea.description.toLowerCase().includes(query) ||
          idea.potential.toLowerCase().includes(query) ||
          idea.type.toLowerCase().includes(query);

        if (matchesCat && matchesQuery) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (ideasCount) {
        ideasCount.textContent = `${visibleCount} of 53`;
      }
    }

    if (ideasSearch) {
      ideasSearch.addEventListener('input', filterIdeaCards);
    }

    ideasCardFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        ideasCardFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterIdeaCards();
      });
    });
  }

  // ========== RENDER RESUME JOURNEY (INTERACTIVE COSMIC TIMELINE) ==========
  const journeyGrid = document.getElementById('journey-cards-grid');
  if (journeyGrid && typeof RESUME_JOURNEY !== 'undefined') {
    function getCategoryMeta(cat) {
      switch(cat) {
        case 'industry':
          return {
            label: 'Industry & Experience',
            badgeClass: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
            dotColor: 'bg-amber-400',
            icon: '💼',
            glowGradient: 'bg-amber-500'
          };
        case 'education':
          return {
            label: 'Academic Foundation',
            badgeClass: 'bg-sky-500/15 text-sky-300 border border-sky-500/30',
            dotColor: 'bg-sky-400',
            icon: '🎓',
            glowGradient: 'bg-sky-500'
          };
        case 'research':
          return {
            label: 'AI Research & Hackathon',
            badgeClass: 'bg-rose-500/15 text-rose-300 border border-rose-500/30',
            dotColor: 'bg-rose-400',
            icon: '🚀',
            glowGradient: 'bg-rose-500'
          };
        default:
          return {
            label: 'Milestone',
            badgeClass: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
            dotColor: 'bg-amber-400',
            icon: '✦',
            glowGradient: 'bg-amber-500'
          };
      }
    }

    function renderTimeline(filter = 'all') {
      journeyGrid.innerHTML = '';
      
      const filteredItems = RESUME_JOURNEY.filter(item => filter === 'all' || item.category === filter);

      filteredItems.forEach((item, idx) => {
        const side = idx % 2 === 0 ? 'left' : 'right';
        const meta = getCategoryMeta(item.category);
        
        const entry = document.createElement('div');
        entry.className = `timeline-item timeline-side-${side}`;
        entry.dataset.category = item.category;

        entry.innerHTML = `
          <!-- Center Node on Vertical Spine -->
          <div class="timeline-marker" title="${item.period} · ${item.role}">
            <div class="timeline-marker-pulse"></div>
            <div class="timeline-marker-orb ${item.category}">
              <span>${meta.icon}</span>
            </div>
          </div>

          <!-- Horizontal Branch Connector -->
          <div class="timeline-branch"></div>

          <!-- Main Dossier Card -->
          <div class="timeline-card-wrapper">
            <div class="timeline-card group">
              <div class="timeline-card-glow ${meta.glowGradient}"></div>

              <!-- Top Row: Date Pill & Status / Badge -->
              <div class="flex items-center justify-between gap-2.5 mb-3.5 flex-wrap">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="timeline-tag-pill inline-flex items-center gap-1.5 font-mono shrink-0 whitespace-nowrap">
                    <span class="w-1.5 h-1.5 rounded-full ${meta.dotColor} animate-pulse shrink-0"></span>
                    <span>${item.period}</span>
                  </span>
                  <span class="text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full font-medium shrink-0 whitespace-nowrap ${meta.badgeClass}">
                    ${meta.label}
                  </span>
                </div>
                <span class="text-[11px] sm:text-xs text-amber-300 font-mono font-semibold bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 shadow-sm shrink-0 whitespace-nowrap">
                  ${item.badge}
                </span>
              </div>

              <!-- Role / Title -->
              <h3 class="font-display text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-tight group-hover:text-amber-200 transition-colors">
                ${item.role}
              </h3>

              <!-- Organization & Impact Metric Row -->
              <div class="flex items-center justify-between gap-2 mb-3.5 flex-wrap">
                <div class="flex items-center gap-1.5 text-sm font-semibold text-orange-400">
                  <svg class="w-4 h-4 text-orange-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                  <span>${item.organization}</span>
                </div>
                ${item.metric ? `
                  <div class="text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span>⚡</span> ${item.metric}
                  </div>
                ` : ''}
              </div>

              <!-- Description -->
              <p class="text-sm text-white/70 leading-relaxed mb-4">
                ${item.description}
              </p>

              <!-- Key Accomplishments / Deliverables Bullet Points -->
              <ul class="space-y-2 mb-5 text-xs sm:text-sm text-white/60">
                ${item.highlights.map(h => `
                  <li class="flex items-start gap-2.5 leading-relaxed">
                    <span class="text-amber-400 mt-1 shrink-0 font-bold text-xs">▸</span>
                    <span>${h}</span>
                  </li>
                `).join('')}
              </ul>

              <!-- Tech Stack Badges -->
              <div class="flex flex-wrap gap-2 pt-3.5 border-t border-white/10 mt-auto">
                ${item.tech.map(t => `<span class="lang-pill text-[11px] font-medium tracking-wide">${t}</span>`).join('')}
              </div>
            </div>
          </div>

          <!-- Opposite Side Floating Date Callout (Desktop Only) -->
          <div class="timeline-opposite-callout hidden md:flex">
            <div class="timeline-callout-inner">
              <div class="text-xs uppercase tracking-widest text-amber-400 font-mono font-bold mb-1">${item.period}</div>
              <div class="text-sm font-display font-medium text-white/85 leading-snug">${item.role}</div>
              <div class="text-xs text-white/50 mt-1">${item.organization}</div>
              ${item.metric ? `<div class="text-[10px] font-mono text-emerald-400/90 mt-1.5 flex items-center gap-1"><span>⚡</span> ${item.metric}</div>` : ''}
            </div>
          </div>
        `;

        journeyGrid.appendChild(entry);
      });

      // Quick GSAP smooth entrance if GSAP is available
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(
          journeyGrid.querySelectorAll('.timeline-item'),
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.06, ease: 'power2.out' }
        );
      }
    }

    // Initial render
    renderTimeline('all');

    // Journey filters
    const jFilterBtns = document.querySelectorAll('.journey-btn');
    jFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        jFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.jfilter;
        renderTimeline(filter);
      });
    });
  }

  // ========== RENDER CORE SKILLS ARSENAL ==========
  const skillsGrid = document.getElementById('core-skills-grid');
  const skillsSearch = document.getElementById('skills-search-input');
  const skillFilterBtns = document.querySelectorAll('.skill-filter-btn');

  if (skillsGrid && typeof CORE_SKILLS !== 'undefined') {
    function renderSkillsCards(filter = 'all', query = '') {
      skillsGrid.innerHTML = '';
      const cleanQuery = (query || '').trim().toLowerCase();

      CORE_SKILLS.forEach(domain => {
        // Filter by cluster
        const matchesFilter = (filter === 'all' || domain.category === filter || domain.id === filter);
        
        // Filter by search query
        const matchingSkills = domain.skills.filter(s => s.toLowerCase().includes(cleanQuery));
        const matchesDomain = domain.group.toLowerCase().includes(cleanQuery) || domain.description.toLowerCase().includes(cleanQuery);
        const matchesSearch = !cleanQuery || matchesDomain || matchingSkills.length > 0;

        if (!matchesFilter || !matchesSearch) return;

        const card = document.createElement('div');
        card.className = 'skill-domain-card group';
        card.dataset.category = domain.category;
        card.dataset.id = domain.id;

        card.innerHTML = `
          <div class="skill-domain-card-glow" style="background: ${domain.accent};"></div>

          <!-- Card Header -->
          <div class="flex items-start justify-between gap-3 mb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl border shadow-sm shrink-0"
                   style="background: ${domain.accent}15; border-color: ${domain.accent}35; color: ${domain.accent};">
                ${domain.icon}
              </div>
              <div>
                <h3 class="font-display text-lg font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                  ${domain.group}
                </h3>
                <span class="text-[11px] font-mono text-white/40 block mt-0.5">
                  ${domain.skills.length} core competencies
                </span>
              </div>
            </div>
          </div>

          <p class="text-xs text-white/60 leading-relaxed mb-4">
            ${domain.description}
          </p>

          <!-- Skill Badges Container -->
          <div class="flex flex-wrap gap-2 pt-3 border-t border-white/5">
            ${domain.skills.map(skill => {
              const isMatch = cleanQuery && skill.toLowerCase().includes(cleanQuery);
              return `<span class="skill-item-pill ${isMatch ? 'highlight' : ''}" title="${skill}">${skill}</span>`;
            }).join('')}
          </div>
        `;

        skillsGrid.appendChild(card);
      });

      if (skillsGrid.children.length === 0) {
        skillsGrid.innerHTML = `
          <div class="col-span-full py-12 text-center text-white/50 text-sm">
            <p class="text-2xl mb-2">🔍</p>
            No skills matched your search. Try "Python", "RAG", "FastAPI", or "Valuation".
          </div>
        `;
      }
    }

    // Initial render
    renderSkillsCards();

    // Search input event
    if (skillsSearch) {
      skillsSearch.addEventListener('input', () => {
        const activeBtn = document.querySelector('.skill-filter-btn.active');
        const activeFilter = activeBtn ? activeBtn.dataset.filter : 'all';
        renderSkillsCards(activeFilter, skillsSearch.value);
      });
    }

    // Cluster filter buttons event
    skillFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        skillFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        renderSkillsCards(filter, skillsSearch ? skillsSearch.value : '');
      });
    });
  }

  // ========== 1. SINGULARITY TERMINAL (HUD / CLI) ==========
  const terminalModal = document.getElementById('terminal-modal');
  const terminalCloseBtn = document.getElementById('terminal-close-btn');
  const terminalTriggerBtn = document.getElementById('terminal-trigger-btn');
  const navTerminalBtn = document.getElementById('nav-terminal-btn');
  const heroTerminalBtn = document.getElementById('hero-terminal-btn');
  const terminalInput = document.getElementById('terminal-input');
  const terminalHistory = document.getElementById('terminal-history');
  const terminalBody = document.getElementById('terminal-body');

  let cmdHistory = [];
  let historyIndex = -1;

  function openTerminal() {
    terminalModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      terminalInput.focus();
    }, 100);
  }

  function closeTerminal() {
    terminalModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (terminalTriggerBtn) terminalTriggerBtn.addEventListener('click', openTerminal);
  if (navTerminalBtn) navTerminalBtn.addEventListener('click', openTerminal);
  if (heroTerminalBtn) heroTerminalBtn.addEventListener('click', openTerminal);
  if (terminalCloseBtn) terminalCloseBtn.addEventListener('click', closeTerminal);

  // Quick command chips for mobile & fast clicking
  const terminalChips = document.querySelectorAll('.terminal-chip');
  terminalChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const cmd = chip.dataset.cmd;
      if (cmd) {
        executeCommand(cmd);
      }
    });
  });

  terminalModal.addEventListener('click', (e) => {
    if (e.target === terminalModal) closeTerminal();
  });

  // Global Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (terminalModal.classList.contains('active')) closeTerminal();
      if (projectModal.classList.contains('active')) closeModal();
    }
    if (e.key === '`' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      if (terminalModal.classList.contains('active')) closeTerminal();
      else openTerminal();
    }
  });

  // Terminal Command Execution
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawInput = terminalInput.value.trim();
      terminalInput.value = '';
      if (!rawInput) return;

      cmdHistory.push(rawInput);
      historyIndex = cmdHistory.length;

      executeCommand(rawInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIndex > 0) {
        historyIndex--;
        terminalInput.value = cmdHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < cmdHistory.length - 1) {
        historyIndex++;
        terminalInput.value = cmdHistory[historyIndex];
      } else {
        historyIndex = cmdHistory.length;
        terminalInput.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      autoCompleteCommand(terminalInput.value.trim());
    }
  });

  function printOutput(html, isCommand = false) {
    const row = document.createElement('div');
    row.className = isCommand ? 'terminal-output text-orange-300 font-semibold mt-2' : 'terminal-output text-white/80';
    row.innerHTML = html;
    terminalHistory.appendChild(row);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  const VALID_COMMANDS = ['help', 'whoami', 'resume', 'experience', 'education', 'skills', 'ideas', 'constellation', 'projects', 'top', 'story', 'contact', 'linkedin', 'github', 'warp', 'clear', 'exit'];

  function autoCompleteCommand(partial) {
    const match = VALID_COMMANDS.find(cmd => cmd.startsWith(partial.toLowerCase()));
    if (match) terminalInput.value = match;
  }

  function executeCommand(input) {
    printOutput(`visitor@singularity:~$ ${input}`, true);
    const parts = input.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts[1];

    switch (cmd) {
      case 'help':
        printOutput(`
<span class="text-amber-400 font-bold">AVAILABLE COMMANDS:</span>
  <span class="text-orange-300">whoami</span>       - Profile, dual CSE + MBA background &amp; mission
  <span class="text-orange-300">resume</span>       - Verified track record from official resume
  <span class="text-orange-300">experience</span>   - Internships (AMI Life Science valuation engine, Kodacy)
  <span class="text-orange-300">education</span>    - Nirma University B.Tech CSE (79.6%) &amp; MBA Finance &amp; Digital Transformation &amp; Analytics (76.6%)
  <span class="text-orange-300">skills</span>       - Core tech stack &amp; capabilities
  <span class="text-orange-300">ideas</span>        - Master Inventory of all 53 ranked ideas &amp; inventions
  <span class="text-orange-300">projects</span>     - Ranked list of public repositories
  <span class="text-orange-300">top</span>          - Deep dive into Top 3 featured projects
  <span class="text-orange-300">story</span>        - The builder odyssey &amp; quantitative engineering journey
  <span class="text-orange-300">contact</span>      - Interactive social links
  <span class="text-orange-300">linkedin</span>     - Open Uday's LinkedIn profile in new tab
  <span class="text-orange-300">github</span>       - Open Uday's GitHub profile in new tab
  <span class="text-orange-300">warp</span>         - Accelerate cosmic background simulation
  <span class="text-orange-300">clear</span>        - Clear terminal screen
  <span class="text-orange-300">exit</span>         - Close terminal HUD`);
        break;

      case 'whoami':
        printOutput(`
<span class="text-amber-300 font-bold">Uday Domadiya</span> — AI Systems Engineer &amp; Quantitative Strategist
• Dual Background: B.Tech Computer Science Engineering (79.6%) + MBA (Finance &amp; Digital Transformation &amp; Analytics) (76.6%) at Nirma University
• Track Record:
  ▸ Built Automated M&amp;A Valuation Engine at AMI Life Science (< 2 mins vs 3-5 days manual, 301 metrics)
  ▸ Exoplanet Detection AI Model for NASA Space Apps Challenge
  ▸ Multimodal Research Paper Synthesizer at MINeD Hackathon
  ▸ Developer of privorai (Local LLM privacy firewall) &amp; SafeGuardian_AI
• GitHub: <a href="https://github.com/udaydomadiya08" target="_blank" class="text-cyan-400 underline">github.com/udaydomadiya08</a>
• LinkedIn: <a href="https://www.linkedin.com/in/udaydomadiya08" target="_blank" class="text-cyan-400 underline">linkedin.com/in/udaydomadiya08</a>`);
        break;

      case 'resume':
      case 'cv':
        printOutput(`
<span class="text-amber-400 font-bold">UDAY DOMADIYA — OFFICIAL RESUME RECORD</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<span class="text-orange-300 font-bold">[EXPERIENCE]</span>
• <span class="text-white font-semibold">AMI Life Science</span> (Apr 2026 – Jun 2026) | Finance &amp; Strategy Intern
  - Built Python valuation engine automating M&amp;A screening across 301 financial fields.
  - Integrated SEC EDGAR, NSE XBRL, Yahoo Finance, and annual reports via BM25 + Gemini.
  - Slashed valuation cycle from 3-5 days to under 2 minutes (100% field coverage).
• <span class="text-white font-semibold">Kodacy</span> (Jul 2025 – Aug 2025) | AI Developer Intern
  - Developed and deployed real-world ML predictive models (TensorFlow, scikit-learn).

<span class="text-orange-300 font-bold">[EDUCATION]</span>
• <span class="text-white font-semibold">MBA (Finance Major, Digital Transformation &amp; Analytics Minor)</span> — Nirma Univ IMNU (2025-2027) | 76.60%
• <span class="text-white font-semibold">B.Tech (Computer Science &amp; Engineering)</span> — Nirma Univ ITNU (2022-2025) | 79.60%

<span class="text-orange-300 font-bold">[COMPETITIVE &amp; HACKATHONS]</span>
• <span class="text-white font-semibold">NASA Space Apps Challenge</span> — Exoplanet detection model on NASA transit data
• <span class="text-white font-semibold">MINeD Hackathon</span> — Multimodal research paper to PPT &amp; voice synthesizer

<span class="text-amber-300 font-bold">📥 DOWNLOAD OFFICIAL RESUME (PDF):</span>
• <a href="assets/Uday_Domadiya_Resume.pdf" download="Uday_Domadiya_Resume.pdf" target="_blank" class="text-orange-400 underline font-semibold hover:text-amber-300">Uday_Domadiya_Resume.pdf (Click to Download)</a>`);
        break;

      case 'experience':
        printOutput(`
<span class="text-amber-400 font-bold">PROFESSIONAL INTERNSHIPS:</span>
1. <span class="text-white font-bold">AMI Life Science</span> (Apr 2026 – Jun 2026)
   Role: Finance &amp; Strategy Intern
   Impact: Delivered v16 of automated pharma M&amp;A valuation engine. 301 fields auto-populated using BM25+Gemini RAG. Processing time reduced from 3-5 days to < 2 minutes with 100% field coverage.

2. <span class="text-white font-bold">Kodacy</span> (Jul 2025 – Aug 2025)
   Role: AI Developer Intern
   Impact: Trained and optimized predictive ML models using Python, pandas, scikit-learn, and TensorFlow.`);
        break;

      case 'education':
        printOutput(`
<span class="text-amber-400 font-bold">ACADEMIC FOUNDATIONS:</span>
• <span class="text-white font-bold">Institute of Management, Nirma University (IMNU)</span>
  MBA in Finance (Major) &amp; Digital Transformation &amp; Analytics (Minor) [2025–2027] — 76.60%
• <span class="text-white font-bold">Institute of Technology, Nirma University (ITNU)</span>
  B.Tech in Computer Science &amp; Engineering [2022–2025] — 79.60%
• <span class="text-white font-bold">Sabari Vidyalaya, Vadodara</span>
  XII (GHSEB): 74.77% | X (GHSEB): 88.67%`);
        break;

      case 'skills':
        let skillsOut = '<span class="text-amber-400 font-bold">CORE TECHNICAL ARSENAL (11 DISCIPLINES · 97+ COMPETENCIES):</span><br><br>';
        if (typeof CORE_SKILLS !== 'undefined') {
          CORE_SKILLS.forEach(d => {
            skillsOut += `<span class="text-orange-400 font-semibold">${d.icon} ${d.group}:</span><br><span class="text-white/80">${d.skills.join(', ')}</span><br><br>`;
          });
        }
        printOutput(skillsOut);
        break;

      case 'projects':
      case 'repos':
        let projList = '<span class="text-amber-400 font-bold">TOP RANKED REPOSITORIES:</span><br>';
        TOP_PROJECTS.forEach(p => {
          projList += `<span class="text-orange-400">#${p.rank}</span> <span class="font-semibold text-white">${p.name}</span> (${p.language}) — <a href="${p.url}" target="_blank" class="text-cyan-400 underline">view repo ↗</a><br>`;
        });
        printOutput(projList);
        break;

      case 'top':
        let top3 = '<span class="text-amber-400 font-bold">TOP 3 FEATURED PROJECTS:</span><br>';
        TOP_PROJECTS.slice(0, 3).forEach(p => {
          top3 += `
<span class="text-orange-400 font-bold">#${p.rank} ${p.name}</span> [${p.language}]
• ${p.description}
• Pipeline: ${(p.architecture || []).join(' ➔ ')}
• <a href="${p.url}" target="_blank" class="text-cyan-400 underline">GitHub Link ↗</a><br>`;
        });
        printOutput(top3);
        break;

      case 'story':
        printOutput(`
<span class="text-amber-300 font-bold">THE SINGULARITY JOURNEY:</span>
From B.Tech CSE (79.6%) to MBA in Finance &amp; Digital Transformation &amp; Analytics (76.6%) at Nirma University.
"I don't just write algorithms; I turn machine intelligence into high-stakes, production-ready systems."
• From training neural models to spot exoplanets in NASA astrophysical data...
• To engineering the M&A valuation engine at AMI Life Science that auto-populates 301 financial metrics and cuts multi-day valuations to under 2 minutes...
• To authoring open agent standards (agent.md, TRUST.md) and local privacy firewalls (privorai).`);
        break;

      case 'contact':
        printOutput(`
<span class="text-amber-400 font-bold">CONNECT WITH UDAY:</span>
• LinkedIn: <a href="https://www.linkedin.com/in/udaydomadiya08" target="_blank" class="text-cyan-400 underline">https://www.linkedin.com/in/udaydomadiya08</a>
• GitHub:   <a href="https://github.com/udaydomadiya08" target="_blank" class="text-cyan-400 underline">https://github.com/udaydomadiya08</a>`);
        break;

      case 'linkedin':
        window.open('https://www.linkedin.com/in/udaydomadiya08', '_blank');
        printOutput('Opening LinkedIn in a new tab...');
        break;

      case 'github':
        window.open('https://github.com/udaydomadiya08', '_blank');
        printOutput('Opening GitHub in a new tab...');
        break;

      case 'ideas':
      case 'constellation':
        let ideasOut = '<span class="text-amber-400 font-bold">MASTER INVENTORY · 53 IDEAS &amp; INVENTIONS:</span><br>';
        ideasOut += '<span class="text-white/60">Ranked by real-world impact, technical depth, and originality:</span><br><br>';
        if (typeof MASTER_IDEAS !== 'undefined') {
          MASTER_IDEAS.slice(0, 8).forEach(i => {
            ideasOut += `<span class="text-orange-400">#${i.rank}</span> <span class="text-white font-semibold">${i.title}</span> [${i.categoryLabel}]<br>  <span class="text-white/50 text-xs">${i.description.substring(0, 110)}...</span><br>`;
          });
          ideasOut += `<br><span class="text-amber-300 font-mono">✦ 45 more ideas plotted in the interactive Star Constellation map.</span><br>`;
          ideasOut += `Explore the full celestial map at <a href="#ideas" class="text-cyan-400 underline" onclick="closeTerminal()">#ideas</a>.<br>`;
        }
        printOutput(ideasOut);
        break;

      case 'warp':
        const video = document.getElementById('bg-video');
        if (video) {
          video.playbackRate = video.playbackRate === 1 ? 2.5 : 1;
          printOutput(`<span class="text-amber-300 font-bold">🌌 WARP DRIVE ENGAGED:</span> Relativistic simulation speed set to ${video.playbackRate}x!`);
        } else {
          printOutput('Simulation engine running at standard 1.0x.');
        }
        break;

      case 'clear':
        terminalHistory.innerHTML = '';
        break;

      case 'exit':
      case 'quit':
        closeTerminal();
        break;

      default:
        printOutput(`command not found: ${cmd}. Type <span class="text-amber-300 font-semibold">'help'</span> for list of commands.`);
    }
  }

  // ========== FILTERS ==========
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      document.querySelectorAll('.repo-card').forEach(card => {
        const lang = card.dataset.lang;
        const cat = card.dataset.category;
        let show = false;

        if (filter === 'all') show = true;
        else if (filter === 'AI') show = cat === 'AI';
        else if (filter === 'Privacy') show = cat === 'Privacy';
        else show = lang === filter || (filter === 'Python' && lang === 'Jupyter Notebook');

        if (show) {
          card.classList.remove('hidden');
          gsap.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Pause orbit animations when Stack section is out of viewport (saves GPU cycles)
  const stackSection = document.getElementById('stack');
  const orbitStage = document.getElementById('orbit-stage');
  if (stackSection && orbitStage && 'IntersectionObserver' in window) {
    const orbitObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          orbitStage.classList.remove('orbit-paused');
        } else {
          orbitStage.classList.add('orbit-paused');
        }
      });
    }, { rootMargin: '100px 0px 100px 0px' });
    orbitObserver.observe(stackSection);
  }

  // Smooth scroll handler for anchor links (prevents global CSS smooth scroll fight)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Hero entrance
  gsap.from('#hero h1', {
    opacity: 0,
    y: 40,
    duration: 1.1,
    ease: 'power3.out',
    delay: 0.2
  });
  gsap.from('#hero p', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out',
    delay: 0.45
  });
  gsap.from('#hero a, #hero button', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.7
  });

  // Helper icon function
  function getIcon(tags) {
    if (tags.includes('Privacy')) return '🛡️';
    if (tags.includes('Voice') || tags.includes('Agents')) return '🤖';
    if (tags.includes('Research')) return '🔬';
    if (tags.includes('Healthcare') || tags.includes('GNN')) return '🧬';
    if (tags.includes('Standards') || tags.includes('Trust')) return '📜';
    if (tags.includes('Generative') || tags.includes('PDF')) return '📚';
    if (tags.includes('Vision') || tags.includes('Spatial')) return '🏠';
    if (tags.includes('Finance')) return '💹';
    if (tags.includes('Media')) return '🎬';
    return '⚡';
  }
});
