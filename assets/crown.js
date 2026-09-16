/* Teagan's Crown - shared "Crown" layer: atmosphere + gilded headline. */
(function(){
  var rm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function atmos(){
    if (document.querySelector('.crown-atmos')) return;
    var a = document.createElement('div');
    a.className = 'crown-atmos';
    a.setAttribute('aria-hidden', 'true');
    a.innerHTML = '<i class="ca-b1"></i><i class="ca-b2"></i><i class="ca-b3"></i><i class="ca-rays"></i><i class="ca-stars"></i>';
    if (!rm) {
      for (var i = 0; i < 22; i++) {
        var m = document.createElement('span');
        var s = (1.5 + Math.random() * 3.2).toFixed(1) + 'px';
        m.className = 'ca-mote';
        m.style.left = (Math.random() * 100).toFixed(1) + '%';
        m.style.width = m.style.height = s;
        m.style.animationDuration = (11 + Math.random() * 15).toFixed(1) + 's';
        m.style.animationDelay = (-Math.random() * 16).toFixed(1) + 's';
        a.appendChild(m);
      }
    }
    document.body.insertBefore(a, document.body.firstChild);
  }
  function gild(){
    var h = document.querySelector('main h1');
    if (!h || h.querySelector('em, span, i, .crown-em')) return;
    var words = h.textContent.trim().split(/\s+/);
    if (words.length < 3) return;
    var n = words[words.length - 1].replace(/[^A-Za-z]/g, '').length < 4 ? 2 : 1;
    var tail = words.slice(-n).join(' '), head = words.slice(0, -n).join(' ');
    h.textContent = head + ' ';
    var e = document.createElement('span');
    e.className = 'crown-em';
    e.textContent = tail;
    h.appendChild(e);
  }
  function run(){ atmos(); gild(); }
  if (document.readyState !== 'loading') run(); else document.addEventListener('DOMContentLoaded', run);
})();
