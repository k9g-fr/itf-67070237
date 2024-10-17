const DEFAULT_AVATAR_URL = 'https://th.bing.com/th?id=OIF.dJTunmU8yen%2fcPYAH%2fzyvw&w=163&h=183&c=7&r=0&o=5&pid=1.7';

let contacts = [];

function setUsername() {
    const username = document.getElementById('usernameInput').value;
    document.getElementById('username').textContent = username;
}

function setAvatar() {
    const url = document.getElementById('avatarInput').value;
    document.getElementById('avatar').style.backgroundImage = url ? `url(${url})` : `url(${DEFAULT_AVATAR_URL})`;
}

function addContact() {
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;
    contacts.push({ name, phone });
    updateTable();
}

function updateTable() {
    const table = document.getElementById('contactTable');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    contacts.forEach((contact, index) => {
        const row = table.insertRow(-1);
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = contact.name;
        row.insertCell(2).textContent = contact.phone;
    });
}

function exportContacts() {
    let csv = 'Name,Phone Number\n';
    contacts.forEach(contact => {
        csv += `${contact.name},${contact.phone}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'contacts.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function animateButton(button) {
    button.classList.add('animate'); // Add animation class
    setTimeout(function() {
        button.classList.remove('animate'); // Remove the animation class after 300ms (duration of the animation)
    }, 300); 
}
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        animateButton(button);
    });
});
function setDefaultAvatar() {
    document.getElementById('avatar').style.backgroundImage = `url(${DEFAULT_AVATAR_URL})`;
}

window.onload = setDefaultAvatar;

document.getElementById('username').addEventListener('click', function() {
    window.open('https://www.instagram.com/k9g.fr/', '_blank');
});