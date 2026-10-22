(() => {
  const form = document.querySelector("#join-form");
  const error = document.querySelector("#error");
  const submit = document.querySelector("#submit");
  const done = document.querySelector("#done");
  const doneEmail = document.querySelector("#done-email");
  const header = document.querySelector(".site-header");

  // Non-JS / HTML POST fallback lands here after Netlify accepts the form.
  if (new URLSearchParams(window.location.search).has("joined")) {
    form.hidden = true;
    done.hidden = false;
  }

  function showError(message) {
    error.hidden = false;
    error.textContent = message;
  }

  function clearError() {
    error.hidden = true;
    error.textContent = "";
  }

  function encode(data) {
    return new URLSearchParams(data).toString();
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearError();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const built = document.querySelector("#built").value.trim();
    const botcheck = form.querySelector("[name=botcheck]").checked;

    if (botcheck) {
      form.hidden = true;
      done.hidden = false;
      return;
    }

    if (name.length < 2 || name.length > 80) {
      showError("Enter your name.");
      document.querySelector("#name").focus();
      return;
    }

    if (email.length > 120 || !/^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(email)) {
      showError("That email doesn’t look right.");
      document.querySelector("#email").focus();
      return;
    }

    if (built.length < 2 || built.length > 280) {
      showError("Tell us briefly what you built.");
      document.querySelector("#built").focus();
      return;
    }

    submit.disabled = true;
    submit.textContent = "Sending…";

    const payload = {
      "form-name": form.getAttribute("name") || "pilot-signup",
      name,
      email,
      built,
      "bot-field": "",
    };

    try {
      // Same-origin Netlify Forms POST — avoids third-party CORS failures.
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });

      if (!response.ok) {
        showError("That didn’t send. Try again in a moment.");
        submit.disabled = false;
        submit.textContent = "Request early access";
        return;
      }

      form.hidden = true;
      done.hidden = false;
      doneEmail.textContent = `We’ll reach you at ${email}.`;
    } catch {
      showError("That didn’t send. Try again in a moment.");
      submit.disabled = false;
      submit.textContent = "Request early access";
    }
  });

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const revealEls = document.querySelectorAll(".catch-list li, .steps li");
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
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
})();
