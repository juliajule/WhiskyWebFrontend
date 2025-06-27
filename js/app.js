window.addEventListener('DOMContentLoaded', () => {
    const savedToken = localStorage.getItem('jwtToken');
    if (savedToken) {
        jwtToken = savedToken;
        showLoggedIn();
    }
    populateTastingIdSelect();
    fetchWhiskys();
    fetchTastings();
    loadImages();

    document.getElementById('whiskyForm').addEventListener('submit', addWhisky);
    document.getElementById('tastingForm').addEventListener('submit', addTasting);
    document.getElementById('uploadForm').addEventListener('submit', uploadImage);
});

function populateTastingIdSelect() {
    const select = document.getElementById('whiskyTastingId');
    select.innerHTML = ''; // Clear existing options

    // Option "Bitte wählen"
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select a Tasting ID';
    select.appendChild(defaultOption);

    // IDs 6 bis 25 dynamisch einfügen
    for (let id = 6; id <= 25; id++) {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = `Tasting #${id}`;
        select.appendChild(option);
    }
}

