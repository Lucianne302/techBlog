async function loginFormHandler(event) {
    event.preventDefault();

    let email = document.querySelector('#email-login').value.trim();
    let password = document.querySelector('#password-login').value.trim();

        if (email && password) {
            const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
            document.location.replace('/dashboard');
            } else {
            alert(response.statusText);
            }
        }
    }

async function signupFormHandler(event) {
    event.preventDefault();

    let username = document.querySelector('#username-signup').value.trim();
    let email = document.querySelector('#email-signup').value.trim();
    let password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
            username,
            email,
            password
        }),
        headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
        document.location.replace('/dashboard');
        } else {
        alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);