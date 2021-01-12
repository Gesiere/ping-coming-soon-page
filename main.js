const form = document.querySelector('form')
const input = document.getElementById('newemail');
const placeholder = document.getElementById('newemail').placeholder
const btn = document.getElementById('btn');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let message = document.querySelector('.error-message');
    




form.addEventListener('submit', (e) => {
    if (!input.value.match(pattern)) {
      e.preventDefault()
        input.classList.add('input-warning');
        btn.classList.add('hidden-margin');
        message.style.opacity = '1';
    }
        
        
 });


    
