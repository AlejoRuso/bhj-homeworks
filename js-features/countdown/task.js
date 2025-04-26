const t = document.getElementById('timer')
setInterval(() => {
    t.textContent = Number(t.textContent) - 1
    if (Number(t.textContent) === 0) {
        alert('Вы победили в конкурсе')}
}, 1000)
