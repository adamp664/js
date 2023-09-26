function generateRectangle() {
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const numer_kartyInput = document.getElementById('numer_karty');
    const name = nameInput.value;
    const surname = surnameInput.value;
    const numer_karty = numer_kartyInput.value;
    const container = document.getElementById('container');
    const outputDiv = document.getElementById('output');

    if (name && surname && numer_karty) {
        nameInput.remove();
        surnameInput.remove();
        numer_kartyInput.remove();
        container.style.display = 'none';
        outputDiv.style.display = 'block';
        outputDiv.innerHTML = `
            <p>${name} ${surname}</p>
            <p>${numer_karty}</p>
        `;
    }
}