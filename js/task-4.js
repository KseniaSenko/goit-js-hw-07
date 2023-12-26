const registerForm = document.querySelector('form');

registerForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
          

    const formData = {
        email: form.elements.email.value,
        password: form.elements.password.value,
    }
    const { email, password } = formData;

    if (email.trim() === '' || password.trim() === '') {
        return alert('All form fields must be filled in');
    }
    console.log(formData);
    form.reset();   
}
