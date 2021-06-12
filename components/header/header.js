const HeaderComponent = (container, title) => {
    const header = `
            <h1 class="header__title">${title}</h1>
    `

    container.innerHTML = header
}