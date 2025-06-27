let jwtToken = null;

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-App-Version': APP_VERSION
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const token = await response.text();
            jwtToken = token;
            localStorage.setItem('jwtToken', token); 
            console.log('Login successful', jwtToken);
            showLoggedIn();
            showStatus('Login erfolgreich!', 'success');
        } else {
            console.error('Login failed:', response.status);
            showStatus('Login fehlgeschlagen! (' + response.status + ')', 'error');
        }
    } catch (error) {
        console.error('Login Error:', error);
        showStatus('Serverfehler beim Login!', 'error');
    }
}

function logout() {
    jwtToken = null;
    localStorage.removeItem('jwtToken'); 
    showLoggedOut();
    showStatus('Logout erfolgreich!', 'success');
}

function getAuthHeader() {
    if (jwtToken) {
        return { 'Authorization': 'Bearer ' + jwtToken };
    } else {
        return {};
    }
}