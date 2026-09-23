// Mobile navigation toggle
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Search + chip filters for the Publications and Presentations pages.
// Entries: <li class="entry" data-type="journal" data-themes="hurricanes wind">
// Chips:   <button class="chip" data-group="type" data-value="journal">
(function () {
  var root = document.querySelector('[data-filter-root]');
  if (!root) return;
  var search = root.querySelector('.search');
  var chips = root.querySelectorAll('.chip');
  var entries = document.querySelectorAll('.entry');
  var groups = document.querySelectorAll('.year-group, .filter-section');
  var counter = root.querySelector('.count');
  var state = { type: 'all', theme: 'all', q: '' };

  function apply() {
    var shown = 0;
    var q = state.q.trim().toLowerCase();
    entries.forEach(function (el) {
      var okType = state.type === 'all' || el.dataset.type === state.type;
      var okTheme = state.theme === 'all' || (' ' + (el.dataset.themes || '') + ' ').indexOf(' ' + state.theme + ' ') > -1;
      var okQ = !q || el.textContent.toLowerCase().indexOf(q) > -1;
      var show = okType && okTheme && okQ;
      el.hidden = !show;
      if (show) shown++;
    });
    groups.forEach(function (g) {
      g.hidden = !g.querySelector('.entry:not([hidden])');
    });
    if (counter) counter.textContent = 'Showing ' + shown + ' of ' + entries.length;
  }

  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      var group = c.dataset.group;
      state[group] = c.dataset.value;
      root.querySelectorAll('.chip[data-group="' + group + '"]').forEach(function (o) {
        o.setAttribute('aria-pressed', o === c ? 'true' : 'false');
      });
      apply();
    });
  });
  if (search) search.addEventListener('input', function () { state.q = search.value; apply(); });

  // Allow deep links like publications.html?theme=wind
  var params = new URLSearchParams(location.search);
  ['type', 'theme'].forEach(function (g) {
    var v = params.get(g);
    var chip = v && root.querySelector('.chip[data-group="' + g + '"][data-value="' + v + '"]');
    if (chip) chip.click();
  });
  apply();
})();
