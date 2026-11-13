// Theme toggle, typing meters and copy buttons for the portfolio.
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function systemIsDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function currentTheme() {
    return root.getAttribute('data-theme') || (systemIsDark() ? 'dark' : 'light');
  }
  function paintToggle() {
    toggle.textContent = currentTheme() === 'dark' ? 'Light' : 'Dark';
  }

  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);
  } catch (e) { /* storage blocked, keep system theme */ }
  paintToggle();

  toggle.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    paintToggle();
  });

  // Typing meters: fill each bar to its words-per-minute value on a 0 to 60 scale.
  var MAX_WPM = 60;
  function fill(bar) {
    var wpm = parseFloat(bar.getAttribute('data-wpm'));
    bar.style.width = Math.min(100, (wpm / MAX_WPM) * 100) + '%';
  }
  var bars = document.querySelectorAll('.scale i');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { fill(entry.target); io.unobserve(entry.target); }
      });
    }, { threshold: 0.4 });
    bars.forEach(function (bar) { io.observe(bar); });
  } else {
    bars.forEach(fill);
  }

  // Copy buttons for email and phone.
  document.querySelectorAll('.copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var el = document.getElementById(btn.getAttribute('data-target'));
      var text = el.textContent.trim();
      function fallback() {
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        btn.textContent = 'Selected';
      }
      try {
        navigator.clipboard.writeText(text).then(function () { btn.textContent = 'Copied'; }, fallback);
      } catch (e) { fallback(); }
      setTimeout(function () { btn.textContent = 'Copy'; }, 1800);
    });
  });
})();
