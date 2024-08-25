function showForm(formId) {
    document.querySelectorAll('.form').forEach(form => form.style.display = 'none');
    document.getElementById(formId).style.display = 'block';
}

function validateContactForm() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    if (!name || !email || !message) {
        alert('Preencha todos os campos do formulário de contato.');
        return false;
    }
    
    alert('Mensagem enviada!');
    return true;
}

function validateSuggestionForm() {
    const name = document.getElementById('suggestion-name').value;
    const email = document.getElementById('suggestion-email').value;
    const suggestion = document.getElementById('suggestion-text').value;
    
    if (!name || !email || !suggestion) {
        alert('Preencha todos os campos do formulário de sugestões.');
        return false;
    }
    
    alert('Sugestão enviada!');
    return true;
}

function validateRegistrationForm() {
    const name = document.getElementById('registration-name').value;
    const email = document.getElementById('registration-email').value;
    const password = document.getElementById('registration-password').value;
    
    if (!name || !email || !password) {
        alert('Preencha todos os campos do formulário de inscrição.');
        return false;
    }
    
    alert('Inscrição realizada!');
    return true;
}

function validateSignupForm() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    
    if (!name || !email || !username || !password) {
        alert('Preencha todos os campos do formulário de cadastro.');
        return false;
    }
    
    alert('Cadastro realizado!');
    return true;
}

function validateFeedbackForm() {
    const name = document.getElementById('feedback-name').value;
    const email = document.getElementById('feedback-email').value;
    const rating = document.getElementById('feedback-rating').value;
    const comments = document.getElementById('feedback-comments').value;
    
    if (!name || !email || !rating || !comments) {
        alert('Preencha todos os campos do formulário de avaliação.');
        return false;
    }
    
    alert('Avaliação enviada!');
    return true;
}
