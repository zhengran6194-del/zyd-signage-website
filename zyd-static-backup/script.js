(() => {
  const config = window.ZYD_SITE_CONFIG || {};
  const whatsappNumber = String(config.whatsappNumber || "").replace(/\D/g, "");

  const createWhatsAppUrl = (message) => {
    const base = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "https://wa.me/";
    return `${base}?text=${encodeURIComponent(message)}`;
  };

  const openWhatsApp = (message) => {
    if (!whatsappNumber || whatsappNumber === "8613800000000") {
      const proceed = window.confirm(
        "The WhatsApp number is still the demo number. Edit site-config.js before deployment.\n\nOpen the demo WhatsApp link anyway?"
      );
      if (!proceed) return;
    }
    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  document.querySelectorAll(".js-whatsapp").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openWhatsApp(link.dataset.message || "Hi ZYD, I would like a signage quote.");
    });
  });

  document.querySelectorAll(".js-product").forEach((link) => {
    link.addEventListener("click", () => {
      const select = document.querySelector('#quote-form select[name="product"]');
      if (!select) return;
      const product = link.dataset.product || "";
      const option = [...select.options].find((item) => item.text.toLowerCase() === product.toLowerCase());
      if (option) select.value = option.value;
      else select.value = "Other Custom Sign";
    });
  });

  const form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const fileInput = document.getElementById("reference-file");
      const fileName = fileInput && fileInput.files.length ? fileInput.files[0].name : "Not selected";
      const lines = [
        `Hi ${config.companyName || "ZYD"}, I would like a factory-direct signage quotation.`,
        "",
        `Name: ${data.get("name") || ""}`,
        `Company: ${data.get("company") || "Not provided"}`,
        `Installation country: ${data.get("country") || ""}`,
        `Product: ${data.get("product") || ""}`,
        `Size: ${data.get("size") || "To be confirmed"}`,
        `Quantity: ${data.get("quantity") || "To be confirmed"}`,
        `Reference file: ${fileName}`,
        `Project details: ${data.get("details") || "Not provided"}`,
        "",
        "Please advise the recommended material, lighting, structure, lead time and shipping method. I will attach the reference file in this chat."
      ];
      openWhatsApp(lines.join("\n"));
    });
  }

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px" });
    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add("visible"));
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
