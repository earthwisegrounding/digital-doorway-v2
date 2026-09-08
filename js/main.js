/* Digital Doorway — "The Threshold"
   Three small behaviours. Nothing else. */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  /* ---------- 1. The aperture: a warm light that follows the pointer ---------- */
  var hero = document.querySelector(".hero");

  if (hero && finePointer.matches && !reduced.matches) {
    var tx = 0, ty = 0, cx = 0, cy = 0, primed = false, ticking = false;

    var place = function () {
      ticking = false;
      // ease toward the pointer so the light has weight
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      hero.style.setProperty("--ax", cx.toFixed(1) + "px");
      hero.style.setProperty("--ay", cy.toFixed(1) + "px");
      if (Math.abs(tx - cx) > 0.4 || Math.abs(ty - cy) > 0.4) {
        ticking = true;
        requestAnimationFrame(place);
      }
    };

    var onMove = function (e) {
      var r = hero.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!primed) { cx = tx; cy = ty; primed = true; }
      if (!ticking) { ticking = true; requestAnimationFrame(place); }
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    // the door closes when the pointer leaves the page
    document.addEventListener("pointerleave", function () {
      hero.style.removeProperty("--ax");
      hero.style.removeProperty("--ay");
      primed = false;
    });

    // hide the hint once they've understood it
    var hint = hero.querySelector(".hero__hint");
    if (hint) {
      window.addEventListener("pointermove", function once() {
        hint.style.transition = "opacity .6s ease";
        hint.style.opacity = "0";
        window.removeEventListener("pointermove", once);
      }, { once: true, passive: true });
    }
  }

  /* ---------- 2. Reveal on entry, staggered by sibling order ---------- */
  if (!reduced.matches && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var group = el.parentElement ? el.parentElement.children : [];
        var i = Math.min(Array.prototype.indexOf.call(group, el), 5);
        el.style.transitionDelay = (i * 70) + "ms";
        el.classList.add("in");
        io.unobserve(el);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.15 });

    document.querySelectorAll(".reveal, .marker, .schedule li").forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal, .marker, .schedule li").forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ---------- 3. Masthead hairline once you've left the hero's top ---------- */
  var masthead = document.getElementById("masthead");
  if (masthead && "IntersectionObserver" in window) {
    var sentinel = document.createElement("div");
    sentinel.style.cssText = "position:absolute;top:0;left:0;width:1px;height:80px;pointer-events:none;";
    document.body.prepend(sentinel);
    new IntersectionObserver(function (e) {
      masthead.classList.toggle("is-stuck", !e[0].isIntersecting);
    }).observe(sentinel);
  }

  /* ---------- 4. Enquiry form → a drafted email, honestly labelled ---------- */
  var form = document.getElementById("enquiry");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (n) { return (form.elements[n].value || "").trim(); };
      var name = get("name"), biz = get("biz"), msg = get("msg");
      var note = document.getElementById("form-note");

      if (!name || !biz) {
        note.textContent = "Just your name and business, then we can draft it.";
        (name ? form.elements.biz : form.elements.name).focus();
        return;
      }

      var body =
        "Hello,\n\n" + msg + "\n\n" +
        "— " + name + "\n" + biz + "\n";

      note.textContent = "Opening your email app…";
      window.location.href =
        "mailto:hello@digitaldoorway.example" +
        "?subject=" + encodeURIComponent("Project enquiry — " + biz) +
        "&body=" + encodeURIComponent(body);
    });
  }
})();
