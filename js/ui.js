function showLoggedIn() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('loggedInSection').style.display = 'block';
    document.getElementById('adminControls').style.display = 'block';
}

function showLoggedOut() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('loggedInSection').style.display = 'none';
    document.getElementById('adminControls').style.display = 'none';
}

function showStatus(message, type) {
    const statusDiv = document.getElementById('statusMessage');
    statusDiv.textContent = message;
    statusDiv.className = type; // CSS: success, error
    setTimeout(() => statusDiv.textContent = '', 5000);
}

function showModal(id) {
    document.getElementById(id).style.display = 'block';
}

function hideModal(id) {
    document.getElementById(id).style.display = 'none';
}

function showTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(`${tabName}-content`).classList.add('active');
    document.querySelector(`[data-testid="${tabName}-tab"]`).classList.add('active');
}

function renderWhiskys(whiskys) {
    const whiskyGrid = document.getElementById('whiskyGrid');
    whiskyGrid.innerHTML = '';
    whiskys.forEach(w => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${w.imageUrl}" alt="${w.name}">
            <h3>${w.name}</h3>
            <p>${w.distillery} - ${w.age} Jahre</p>
            <p>${w.alcoholPercentage}% | ${w.price}€</p>
        `;
        whiskyGrid.appendChild(card);
    });
}

function renderTastings(tastings) {
    const tastingGrid = document.getElementById('tastingGrid');
    tastingGrid.innerHTML = '';
    tastings.forEach(t => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${t.imageUrl}" alt="${t.name}">
            <h3>${t.name}</h3>
            <p>${new Date(t.date).toLocaleDateString()}</p>
            <p>${t.description}</p>
        `;
        tastingGrid.appendChild(card);
    });
}