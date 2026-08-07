
(() => {
  const cfg = window.ZYD_PRODUCT_CONFIG || {};
  const number = String(cfg.whatsappNumber || '').replace(/\D/g, '');
  const makeUrl = (message) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  const openWhatsApp = (message) => {
    if (!number || number === '8613800000000') {
      const proceed = window.confirm('WhatsApp is still using the demo number. Edit product-assets/js/site-config.js before deployment.\n\nOpen the demo link anyway?');
      if (!proceed) return;
    }
    window.open(makeUrl(message), '_blank', 'noopener,noreferrer');
  };

  document.querySelectorAll('.js-wa').forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      openWhatsApp(el.dataset.message || 'Hi ZYD, I would like a custom signage quotation.');
    });
  });

  const menu = document.querySelector('.menu-btn');
  const links = document.querySelector('.nav-links');
  if (menu && links) menu.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });

  const form = document.querySelector('#product-inquiry');
  if (form) form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const file = form.querySelector('input[type="file"]');
    const message = [
      `Hi ${cfg.companyName || 'ZYD'}, I would like a factory-direct quotation.`,
      `Product: ${form.dataset.product || data.get('product') || 'Custom signage'}`,
      `Name: ${data.get('name') || ''}`,
      `Company: ${data.get('company') || 'Not provided'}`,
      `Country: ${data.get('country') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `WhatsApp: ${data.get('whatsapp') || ''}`,
      `Target size: ${data.get('size') || 'To be confirmed'}`,
      `Quantity: ${data.get('quantity') || 'To be confirmed'}`,
      `Environment: ${data.get('environment') || 'To be confirmed'}`,
      `Material / finish: ${data.get('finish') || 'Please recommend'}`,
      `Reference file: ${file && file.files.length ? file.files[0].name : 'Not selected'}`,
      `Project details: ${data.get('details') || 'Not provided'}`,
      '',
      'Please recommend the structure, material, lighting, lead time and shipping solution. I will attach my logo/reference file in WhatsApp.'
    ].join('\n');
    openWhatsApp(message);
  });

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08 }) : null;
  document.querySelectorAll('.reveal').forEach((el) => observer ? observer.observe(el) : el.classList.add('visible'));
  document.querySelectorAll('[data-year]').forEach((el) => el.textContent = new Date().getFullYear());
})();
