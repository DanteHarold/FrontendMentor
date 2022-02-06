const nameInput = document.getElementById('name')

nameInput.addEventListener('focus', e =>{
    console.log(nameInput.value);
})