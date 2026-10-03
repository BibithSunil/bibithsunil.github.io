/* ============================================================
   Portfolio interactivity — vanilla JS, no dependencies
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 1. Hero typewriter ---------- */
  const typedLine = document.getElementById("typedLine");
  const phrases = [
    "cybersecurity_analyst --enabled",
    "nmap -sV -sC target.lab",
    "wireshark -i eth0 -w capture.pcap",
    "whoami  →  future SOC analyst",
    "sudo apt install security+ && ./cert --pass",
  ];

  if (typedLine) {
    let phrase = 0,
      char = 0,
      deleting = false;

    const tick = () => {
      const current = phrases[phrase];
      if (!deleting) {
        char++;
        typedLine.textContent = current.slice(0, char);
        if (char === current.length) {
          deleting = true;
          setTimeout(tick, 2200); // pause at full phrase
          return;
        }
      } else {
        char--;
        typedLine.textContent = current.slice(0, char);
        if (char === 0) {
          deleting = false;
          phrase = (phrase + 1) % phrases.length;
        }
      }
      // speed: a bit slower while revealing, faster while deleting
      setTimeout(tick, deleting ? 30 : 60);
    };

    tick();
  }

  /* ---------- 2. Mobile nav toggle ---------- */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });

    // close the menu after tapping a link
    menu.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- 3. Scroll-reveal on sections ---------- */
  const revealables = document.querySelectorAll(".section, .project-card, .lab-card, .edu-card");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealables.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  /* ---------- 4. Active nav link on scroll ---------- */
  const navLinks = document.querySelectorAll(".nav-menu a[href^='#']");
  const sections = [...navLinks]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && navLinks.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.removeAttribute("data-active"));
            const match = [...navLinks].find(
              (l) => l.getAttribute("href") === "#" + entry.target.id
            );
            if (match) match.setAttribute("data-active", "true");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- 5. Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 6. GitHub link placeholder guard ---------- */
  const gitHubLink = document.getElementById("githubLink");
  if (gitHubLink && gitHubLink.getAttribute("href") === "#") {
    gitHubLink.addEventListener("click", (e) => {
      e.preventDefault();
      gitHubLink.textContent = "Add your GitHub URL in index.html";
      gitHubLink.style.color = "var(--warn)";
    });
  }
})();