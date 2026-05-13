(function () {
  'use strict';

  // ─── Theme toggle ───
  var THEME_KEY = 'aiinfra-theme';

  function getPreferredTheme() {
    var stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  }

  applyTheme(getPreferredTheme());
  window.toggleTheme = toggleTheme;

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'light' : 'dark');
    }
  });

  // ─── Tab switching for architecture diagrams ───
  function showArch(type) {
    document.getElementById('arch-on').classList.remove('active');
    document.getElementById('arch-cloud').classList.remove('active');
    document.getElementById('tab-on').classList.remove('active-on');
    document.getElementById('tab-cloud').classList.remove('active-cloud');
    if (type === 'on') {
      document.getElementById('arch-on').classList.add('active');
      document.getElementById('tab-on').classList.add('active-on');
    } else {
      document.getElementById('arch-cloud').classList.add('active');
      document.getElementById('tab-cloud').classList.add('active-cloud');
    }
  }
  window.showArch = showArch;

  // ─── Smooth scroll ───
  function scrollToSection(id) {
    var el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
  window.scrollToSection = scrollToSection;

  // ─── Intersection Observer for fade-in animations ───
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.compare-col, .service-card, .tl-item, .metric-card').forEach(function (el, i) {
    el.style.transitionDelay = (i * 0.06) + 's';
    observer.observe(el);
  });

  // ─── Metric bar animation ───
  var barObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.metric-fill').forEach(function (bar) {
          var width = bar.style.width;
          bar.style.width = '0';
          setTimeout(function () { bar.style.width = width; }, 100);
        });
      }
    });
  }, { threshold: 0.3 });

  var metricsGrid = document.getElementById('metrics-grid');
  if (metricsGrid) {
    barObserver.observe(metricsGrid);
  }

  // ─── Nav active state on scroll ───
  var sectionIds = ['overview', 'arch-compare', 'architecture', 'services', 'comparison', 'decision'];
  var navMapping = [
    { tab: 0, sections: ['overview', 'arch-compare'] },
    { tab: 1, sections: ['architecture'] },
    { tab: 2, sections: ['services'] },
    { tab: 3, sections: ['comparison'] },
    { tab: 4, sections: ['decision'] }
  ];

  var navTabs = document.querySelectorAll('.nav-tab');

  function updateActiveNav() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var windowH = window.innerHeight;
    var docH = document.documentElement.scrollHeight;
    var activeIndex = 0;

    if (scrollY + windowH >= docH - 50) {
      activeIndex = navTabs.length - 1;
    } else {
      for (var i = sectionIds.length - 1; i >= 0; i--) {
        var sec = document.getElementById(sectionIds[i]);
        if (sec && scrollY >= sec.offsetTop - 120) {
          for (var j = 0; j < navMapping.length; j++) {
            if (navMapping[j].sections.indexOf(sectionIds[i]) !== -1) {
              activeIndex = navMapping[j].tab;
              break;
            }
          }
          break;
        }
      }
    }

    navTabs.forEach(function (t) { t.classList.remove('active'); });
    if (navTabs[activeIndex]) {
      navTabs[activeIndex].classList.add('active');
    }
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // ─── Nav button click handlers ───
  var tabTargets = ['overview', 'architecture', 'services', 'comparison', 'decision'];
  navTabs.forEach(function (tab, i) {
    if (tabTargets[i]) {
      tab.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(tabTargets[i]);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
})();
