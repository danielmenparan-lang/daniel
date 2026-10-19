(() => {
  const CAPACITY = 99;
  const STORAGE_KEY = "trailhead-beta-v1";
  const BASE_JOINED = 71;

  const joinedCountEl = document.getElementById("joined-count");
  const eyebrowEl = document.getElementById("spots-eyebrow");
  const form = document.getElementById("beta-form");
  const emailInput = document.getElementById("email");
  const joinBtn = document.getElementById("join-btn");
  const formHint = document.getElementById("form-hint");
  const formStatus = document.getElementById("form-status");
  const header = document.querySelector(".site-header");

  function readState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return { joined: BASE_JOINED, emails: [] };
      }
      const parsed = JSON.parse(raw);
      const emails = Array.isArray(parsed.emails) ? parsed.emails : [];
      const joined = Math.min(
        CAPACITY,
        Math.max(BASE_JOINED, Number(parsed.joined) || BASE_JOINED)
      );
      return { joined, emails };
    } catch {
      return { joined: BASE_JOINED, emails: [] };
    }
  }

  function writeState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function spotsLeft(joined) {
    return Math.max(0, CAPACITY - joined);
  }

  function render(state) {
    const left = spotsLeft(state.joined);
    joinedCountEl.textContent = String(state.joined);

    if (left === 0) {
      eyebrowEl.textContent = "Beta is full — waitlist closed";
      emailInput.disabled = true;
      joinBtn.disabled = true;
      joinBtn.textContent = "Spots filled";
      formHint.textContent = "All 99 seats are taken. Thanks for the interest.";
      return;
    }

    const spotWord = left === 1 ? "spot" : "spots";
    const countSpan = document.createElement("span");
    countSpan.id = "spots-left";
    countSpan.textContent = String(left);
    eyebrowEl.replaceChildren(
      document.createTextNode("Hurry — only "),
      countSpan,
      document.createTextNode(` ${spotWord} left`)
    );
  }

  function flashEyebrow() {
    eyebrowEl.classList.remove("is-pulse");
    // force reflow so animation can replay
    void eyebrowEl.offsetWidth;
    eyebrowEl.classList.add("is-pulse");
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  let state = readState();
  render(state);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "";
    formStatus.classList.remove("is-error");

    const email = emailInput.value.trim().toLowerCase();

    if (!isValidEmail(email)) {
      formStatus.textContent = "Enter a valid email to join.";
      formStatus.classList.add("is-error");
      emailInput.focus();
      return;
    }

    state = readState();

    if (state.emails.includes(email)) {
      formStatus.textContent = "You’re already on the beta list with this email.";
      render(state);
      return;
    }

    if (spotsLeft(state.joined) <= 0) {
      formStatus.textContent = "Sorry — the beta just filled up.";
      formStatus.classList.add("is-error");
      render(state);
      return;
    }

    state.joined = Math.min(CAPACITY, state.joined + 1);
    state.emails.push(email);
    writeState(state);
    render(state);
    flashEyebrow();

    const left = spotsLeft(state.joined);
    emailInput.value = "";
    emailInput.disabled = true;
    joinBtn.disabled = true;
    joinBtn.textContent = "You’re in";

    if (left === 0) {
      formStatus.textContent = "You’re in — that was the last seat.";
    } else if (left === 1) {
      formStatus.textContent =
        "You’re in. Hurry to join — only 1 spot left for everyone else.";
    } else {
      formStatus.textContent = `You’re in. Hurry to join — only ${left} spots left.`;
    }
  });

  // Sticky header border
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".steps li, .preview");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
})();
