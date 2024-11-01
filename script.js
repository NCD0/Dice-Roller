function rollDice() {
    const input = document.getElementById('num').value;
    const res = document.getElementById('result');
    const img = document.getElementById('diceimages');

    const value = [];
    const images = [];

    for (let i = 0; i < input; i++) {
        const random = Math.floor(Math.random() * 6) + 1;
        value.push(random);
        images.push(`<img src='dices/${random}.png' alt="Dice: ${random}">`);
    }

    res.textContent = `Dice: ${value.join(', ')}`;
    img.innerHTML = images.join('');
}