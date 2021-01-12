const form = document.querySelector('form')
const input = document.getElementById('newemail');
const placeholder = document.getElementById('newemail').placeholder
const btn = document.getElementById('btn');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let message = document.querySelector('.error-message');
    




form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    
        if (input.value === "" || input.value === null) {
            input.classList.add('input-warning');
            btn.classList.add('hidden-margin');
            placeholder.textContent = "hello"
            message.style.opacity = '1';
    }

    if (!input.value.match(pattern)) {
        input.classList.add('input-warning');
        messafe
    }
        
        
 });


    
