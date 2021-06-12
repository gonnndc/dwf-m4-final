const FormComponent = (container, title) => {
    const form = `<h2 class="contact__title">${title}</h2>
    <form class="contact__form">
      <label>
        <div class="contact__form--container">
          <span>Nombre</span>
          <input name="nombre" type="text" />
        </div>
      </label>
      <label>
        <div class="contact__form--container">
          <span>Email</span>
          <input name="email" type="email" />
        </div>
      </label>
      <label>
        <div class="contact__form--container">
          <span>Mensaje</span>
          <textarea name="mensaje"></textarea>
        </div>
      </label>
      <div class="contact__form--container">
        <button class="contact__form--button" type="submit">Enviar</button>
      </div>
    </form>`

    container.innerHTML += form
}