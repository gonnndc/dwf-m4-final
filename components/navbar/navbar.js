const NavbarComponent = (container) => {
    const navbar = `
            <div class="navbar__logo">
                <h1><a href="./index.html">GDC</a></h1>
            </div>
            <div class="navbar__menu">
            <i class="fas fa-bars navbar__menu--icon"></i>
            <i class="fas fa-times-circle navbar__menu--icon2"></i>
            
            <ul class="list">
                    <li class="list__item"><a href="/dwf-m4-final//portfolio.html">Portfolio</a></li>
                    <li class="list__item"><a href="/dwf-m4-final//services.html">Servicios</a></li>
                    <li class="list__item"><a href="/dwf-m4-final//contact.html">Contacto</a></li>
                </ul>
            </div>`

    container.innerHTML = navbar
}