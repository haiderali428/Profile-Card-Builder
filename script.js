
const profileForm = document.getElementById('profileForm');
const nameInput = document.getElementById('fullName');
const titleInput = document.getElementById('jobTitle');
const bioInput = document.getElementById('bio');
const colorInput = document.getElementById('avatarColor');
const skillCheckboxes = document.querySelectorAll('input[name="skills"]');
const cardsContainer = document.getElementById('cardsContainer');
const nameError = document.getElementById('nameError');
const titleError = document.getElementById('titleError');
const globalError = document.getElementById('globalError');

const generatedCards = [];

function getFormData() {
    return {
        name: nameInput.value.trim(),
        title: titleInput.value.trim(),
        bio: bioInput.value.trim(),
        avatarColor: colorInput.value,
        skills: Array.from(skillCheckboxes)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.value)
    };
}


function validateForm(data) {
    const errors = {
        name: "",
        title: ""
    };
    
    if (!data.name) errors.name = "Full Name is required.";
    if (!data.title) errors.title = "Job Title is required.";
    
    return {
        isValid: !errors.name && !errors.title,
        errors: errors
    };
}



function renderCards() {
    cardsContainer.innerHTML = '';
    
    if (generatedCards.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'empty-state-msg';
        emptyMessage.textContent = "no card please fill the form and add cards";
        cardsContainer.appendChild(emptyMessage);
        return;
    }

    generatedCards.forEach(cardData => {
        const cardElement = createCardElement(cardData);
        cardsContainer.appendChild(cardElement);
    });
}


function createCardElement(data) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    
    cardDiv.innerHTML = `
        <div class="card__avatar" style="background-color: ${data.avatarColor}"></div>
        <h2 class="card__name" id="card-name-preview">${data.name}</h2>
        <p class="card__title">${data.title}</p>
        <p class="card__bio">${data.bio || "No bio provided."}</p>
        <div class="card__skills">
            ${data.skills.map(skill => `<span class="card__skill-tag">${skill}</span>`).join('')}
        </div>
    `;
    
    return cardDiv;
}



function displayErrors(errors) {
    if (errors.name) {
        nameError.textContent = errors.name;
        nameError.style.display = 'block';
    }
    if (errors.title) {
        titleError.textContent = errors.title;
        titleError.style.display = 'block';
    }
}

function clearErrorMessages() {
    nameError.textContent = '';
    nameError.style.display = 'none';
    titleError.textContent = '';
    titleError.style.display = 'none';
    globalError.textContent = '';
    globalError.style.display = 'none';
}



document.addEventListener('DOMContentLoaded', () => {
    if (cardsContainer) {
        renderCards(); 
    }
    
    if (profileForm) {
        profileForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            clearErrorMessages();
            const formData = getFormData();
            const validation = validateForm(formData);

            if (!validation.isValid) {
                displayErrors(validation.errors);
            } else {
                generatedCards.push(formData);
                renderCards();
                profileForm.reset();
            }
        });
    }
});