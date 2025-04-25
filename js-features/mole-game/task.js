const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

const getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', function() {
        if (this.classList.contains('hole_has-mole')) {
            deadCounter.textContent = parseInt(deadCounter.textContent) + 1;
        } else {
            lostCounter.textContent = parseInt(lostCounter.textContent) + 1;
        }

        const dead = parseInt(deadCounter.textContent);
        const lost = parseInt(lostCounter.textContent);

        if (dead >= 10) {
            alert('Победа!');
            deadCounter.textContent = '0';
            lostCounter.textContent = '0';
        } else if (lost >= 5) {
            alert('Поражение!');
            deadCounter.textContent = '0';
            lostCounter.textContent = '0';
        }
    });
}