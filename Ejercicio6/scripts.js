const formulario = document.getElementById('form')
const email = document.getElementById('email')
const error = document.getElementById('form-content__error')
const error__message = document.getElementById('error-message')
const form__content = document.getElementById('form__content')
const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const validarCampo = (campo) =>{
    if(expresion.test(campo)) {
        error.classList.add('form-content__error')
        error.classList.remove('form-content__error--active')
        form__content.classList.remove('form-content--active')
        error__message.classList.remove('error-massage--active')

    }else{
        error.classList.add('form-content__error--active')
        error.classList.remove('form-content__error')
        form__content.classList.add('form-content--active')
        error__message.classList.add('error-massage--active')
    }
}
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    validarCampo(email.value)
})