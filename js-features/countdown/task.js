const t = document.getElementById('timer')
setInterval(() => {
    t.textContent = Number(t.textContent) - 1
}, 1000)
