// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  // Dynamic copyright year
  const yearSpan = document.getElementById("copyright-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      document.getElementById("main-nav").classList.toggle("active");
    });
  }

  // FAQ Accordion
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    });
  });

  // Form validation
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      let valid = true;
      const requiredFields = this.querySelectorAll("[required]");

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = "#F44336";

          // Add error message if not already present
          if (
            !field.nextElementSibling ||
            !field.nextElementSibling.classList.contains("error-message")
          ) {
            const errorMsg = document.createElement("div");
            errorMsg.className = "error-message";
            errorMsg.style.color = "#F44336";
            errorMsg.style.fontSize = "0.8rem";
            errorMsg.style.marginTop = "0.25rem";
            errorMsg.textContent = "This field is required";
            field.parentNode.appendChild(errorMsg);
          }
        } else {
          field.style.borderColor = "";

          // Remove error message if present
          const errorMsg = field.parentNode.querySelector(".error-message");
          if (errorMsg) {
            errorMsg.remove();
          }
        }
      });

      if (!valid) {
        e.preventDefault();

        // Show error message
        const messageDiv = this.querySelector(".form-message");
        if (messageDiv) {
          messageDiv.className = "form-message error";
          messageDiv.innerHTML =
            "<strong>Please fill in all required fields.</strong>";
          messageDiv.style.display = "block";
          messageDiv.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // ===== Premium Toast Notification System =====
  function showToast(type, title, message, autoDismiss = 5000) {
    // Remove any existing toast
    const existingToast = document.querySelector(".toast-overlay");
    if (existingToast) existingToast.remove();

    const icons = {
      success: '<i class="fas fa-check"></i>',
      error: '<i class="fas fa-times"></i>',
      loading: '<i class="fas fa-spinner toast-spinner"></i>',
    };

    const overlay = document.createElement("div");
    overlay.className = "toast-overlay";
    overlay.innerHTML = `
      <div class="toast-card">
        <div class="toast-icon-wrapper ${type}">
          ${icons[type]}
        </div>
        <h3>${title}</h3>
        <p>${message}</p>
        ${type !== "loading" ? '<button class="toast-close-btn">Got it</button>' : ""}
        ${type !== "loading" ? `<div class="toast-progress ${type === "error" ? "error-progress" : ""}"></div>` : ""}
      </div>
    `;

    document.body.appendChild(overlay);

    // Trigger animation
    requestAnimationFrame(() => {
      overlay.classList.add("active");
    });

    // Close handlers
    const closeToast = () => {
      overlay.classList.remove("active");
      setTimeout(() => overlay.remove(), 300);
    };

    const closeBtn = overlay.querySelector(".toast-close-btn");
    if (closeBtn) closeBtn.addEventListener("click", closeToast);

    // Close on backdrop click
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeToast();
    });

    // Close on Escape key
    const escHandler = (e) => {
      if (e.key === "Escape") {
        closeToast();
        document.removeEventListener("keydown", escHandler);
      }
    };
    document.addEventListener("keydown", escHandler);

    // Auto-dismiss
    if (autoDismiss && type !== "loading") {
      setTimeout(closeToast, autoDismiss);
    }

    return { close: closeToast, overlay };
  }

  // Bug Report Form Submission (Web3Forms)
  const bugReportForm = document.getElementById("bugReportForm");
  if (bugReportForm) {
    bugReportForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Submitting...";
      submitBtn.disabled = true;

      // Show loading toast
      const loadingToast = showToast(
        "loading",
        "Sending...",
        "Please wait while we submit your bug report.",
        0,
      );

      const formData = new FormData(this);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        loadingToast.close();

        if (data.success) {
          showToast(
            "success",
            "Bug Report Sent!",
            "Thank you for reporting this issue. Our team will investigate and get back to you within 24-48 hours.",
          );
          this.reset();
        } else {
          showToast(
            "error",
            "Submission Failed",
            'Something went wrong. Please try again or email us directly at <a href="mailto:saihemanth225@gmail.com" style="color: var(--primary); font-weight: 600;">saihemanth225@gmail.com</a>',
          );
        }
      } catch (error) {
        loadingToast.close();
        showToast(
          "error",
          "Connection Error",
          'Please check your internet connection and try again, or email us at <a href="mailto:saihemanth225@gmail.com" style="color: var(--primary); font-weight: 600;">saihemanth225@gmail.com</a>',
        );
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  // Feedback Form Submission (Web3Forms)
  const feedbackForm = document.getElementById("feedbackForm");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Submitting...";
      submitBtn.disabled = true;

      // Show loading toast
      const loadingToast = showToast(
        "loading",
        "Sending...",
        "Please wait while we submit your feedback.",
        0,
      );

      const formData = new FormData(this);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        loadingToast.close();

        if (data.success) {
          showToast(
            "success",
            "Feedback Received!",
            "Thank you for taking the time to share your thoughts. Your feedback helps us make NotesNest even better!",
          );
          this.reset();
        } else {
          showToast(
            "error",
            "Submission Failed",
            'Something went wrong. Please try again or email us directly at <a href="mailto:saihemanth225@gmail.com" style="color: var(--primary); font-weight: 600;">saihemanth225@gmail.com</a>',
          );
        }
      } catch (error) {
        loadingToast.close();
        showToast(
          "error",
          "Connection Error",
          'Please check your internet connection and try again, or email us at <a href="mailto:saihemanth225@gmail.com" style="color: var(--primary); font-weight: 600;">saihemanth225@gmail.com</a>',
        );
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  // Set active nav item based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});
