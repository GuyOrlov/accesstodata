(() => {
  document.addEventListener('click', (event) => {
    const link = event.target.closest?.('a[href]');
    if (!link || typeof window.gtag !== 'function') return;
    const url = new URL(link.href, location.href);
    if (['www.gov.uk', 'www.ons.gov.uk', 'www.data.gov.uk'].includes(url.hostname)) {
      window.gtag('event', 'data_source_click', {source_host:url.hostname,source_path:url.pathname});
    }
  });
})();
