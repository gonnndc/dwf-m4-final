(function main() {

    //HTML Elements
    const navbar = document.querySelector('.navbar')
    const navbarContainer = document.querySelector('.navbar__container')
    const contactContainer = document.querySelector('.contact__container')
    const footerContainer = document.querySelector('.footer__container')



    //COMPONENTS
    NavbarComponent(navbarContainer)
    FormComponent(contactContainer, 'Contacto')
    FooterComponent(footerContainer)


    //BACKGROUND NAVBAR
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 0) {
            navbar.classList.add('navbar__bg')
        }
        else {
            navbar.classList.remove('navbar__bg')
        }
    });



    //MENU

    const menu = document.querySelector('.navbar__menu--icon')
    const exitMenu = document.querySelector('.navbar__menu--icon2')

    menu.addEventListener('click', () => {
        navbarContainer.classList.add('menu-mobile')
    })

    exitMenu.addEventListener('click', () => {
        navbarContainer.classList.remove('menu-mobile')
    })


    //FORM
    const miFormEl = document.querySelector('.contact__form')
    miFormEl.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(miFormEl)
        const mensaje = formData.get("mensaje")
        let url = 'https://apx-api.vercel.app/api/utils/dwf';
        var data = {
            "to": "gdcabrera93@gmail.com",
            "message": mensaje
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    })


}) ()