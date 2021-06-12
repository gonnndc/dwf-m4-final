const FooterComponent = (container) => {
    const footer = `
    <h4 class="footer__title">GDC</h4>
    <div class="footer__rrss--container">
      <div class="footer__rrss">
        <span>Instagram</span>
        <img src="./static/images/instagram.svg" width="28" alt="" />
      </div>
      <div class="footer__rrss">
        <span>Linkedin</span>
        <img src="./static/images/linkedin.svg" alt="" />
      </div>
      <div class="footer__rrss">
        <span>Github</span>
        <img src="./static/images/github.svg" alt="" />
      </div>
    </div>
 `
    container.innerHTML += footer
}