async function fetchWhiskys() {
    try {
        const response = await fetch(`${BASE_URL}/whiskys`, {
            headers: {
                'X-App-Version': APP_VERSION
            }
        });
        const whiskys = await response.json();
        console.log('Fetched Whiskys:', whiskys);
        renderWhiskys(whiskys);
    } catch (error) {
        console.error('Error fetching whiskys:', error);
        showStatus('Fehler beim Laden der Whiskys!', 'error');
    }
}

async function fetchTastings() {
    try {
        const response = await fetch(`${BASE_URL}/tastings`, {
            headers: {
                'X-App-Version': APP_VERSION
            }
        });
        const tastings = await response.json();
        console.log('Fetched Tastings:', tastings);
        renderTastings(tastings);
    } catch (error) {
        console.error('Error fetching tastings:', error);
        showStatus('Fehler beim Laden der Tastings!', 'error');
    }
}

async function addWhisky(event) {
    event.preventDefault();
    const whisky = {
        name: document.getElementById('whiskyName').value,
        distillery: document.getElementById('whiskyDistillery').value,
        age: parseInt(document.getElementById('whiskyAge').value),
        alcoholPercentage: parseFloat(document.getElementById('whiskyAlcohol').value),
        price: parseFloat(document.getElementById('whiskyPrice').value),
        liter: parseFloat(document.getElementById('whiskyLiter').value),
        link: document.getElementById('whiskyLink').value,
        uvp: parseFloat(document.getElementById('whiskyUvp').value),
        description: document.getElementById('whiskyDescription').value,
        imageUrl: document.getElementById('whiskyImageUrl').value,
        tastingId: parseInt(document.getElementById('whiskyTastingId').value),
    };

    const headers = {
        'Content-Type': 'application/json',
        'X-App-Version': APP_VERSION,
        ...getAuthHeader(),
    };

    try {
        const response = await fetch(`${BASE_URL}/admin/whiskys`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(whisky),
        });

        if (response.ok) {
            showStatus('Whisky gespeichert!', 'success');
            hideModal('whiskyModal');
            fetchWhiskys();
        } else {
            showStatus('Fehler beim Speichern des Whiskys!', 'error');
        }
    } catch (error) {
        console.error('Error adding whisky:', error);
        showStatus('Serverfehler beim Whisky speichern!', 'error');
    }
}

async function addTasting(event) {
    event.preventDefault();

    const tasting = {
        name: document.getElementById('tastingWhisky').value,
        date: document.getElementById('tastingDate').value, // <- datetime-local gibt ISO String!
        description: document.getElementById('tastingNotes').value,
        imageUrl: document.getElementById('tastingImage').value
    };
    console.log(JSON.stringify(tasting));
    const headers = {
        'Content-Type': 'application/json',
        'X-App-Version': APP_VERSION,
        ...getAuthHeader(),
    };

    try {
        const response = await fetch(`${BASE_URL}/admin/tastings`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(tasting),
        });

        if (response.ok) {
            showStatus('Tasting gespeichert!', 'success');
            hideModal('tastingModal');
            fetchTastings(); // neu laden
            populateTastingIdSelect(); // falls neues Tasting für Whisky verfügbar
        } else {
            showStatus('Fehler beim Speichern des Tastings!', 'error');
        }
    } catch (error) {
        console.error('Error adding tasting:', error);
        showStatus('Serverfehler beim Tasting speichern!', 'error');
    }
}


async function uploadImage(event) {
    event.preventDefault();
    const fileInput = document.getElementById('imageFile');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const headers = {
        'X-App-Version': APP_VERSION,
        ...getAuthHeader()
        // WICHTIG: KEIN 'Content-Type' hier setzen! Browser macht das bei FormData.
    };

    try {
        const response = await fetch(`${BASE_URL}/admin/images/upload`, {
            method: 'POST',
            headers: headers,
            body: formData,
        });

        if (response.ok) {
            const imageUrl = await response.text();
            showStatus('Bild erfolgreich hochgeladen!', 'success');
            hideModal('uploadModal');

            // Vorschau anzeigen
            const preview = document.getElementById('uploadPreview');
            preview.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image" style="max-width:100%;">`;
            console.log('Uploaded image URL:', imageUrl);

        } else {
            showStatus('Fehler beim Bild-Upload!', 'error');
        }
    } catch (error) {
        console.error('Error uploading image:', error);
        showStatus('Serverfehler beim Bild-Upload!', 'error');
    }
}

async function loadImages() {
    try {
        const response = await fetch(`${BASE_URL}/images/list`, {
            headers: {
                'X-App-Version': APP_VERSION
            }
        });
        const images = await response.json();
        const gallery = document.getElementById('imageGallery');
        gallery.innerHTML = '';

        images.forEach(imageUrl => {
            if (/\.(jpe?g|png|gif|webp)$/i.test(imageUrl)) { // <-- Nur wenn Bild
                const img = document.createElement('img');
                img.src = `${LOCAL_URL}${imageUrl}`;
                gallery.appendChild(img);
            }
        });

    } catch (error) {
        console.error('Error loading images:', error);
        showStatus('Fehler beim Laden der Bilder!', 'error');
    }
}