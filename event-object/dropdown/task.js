document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');

        // Обработчик клика по значению для открытия/закрытия списка
        valueElement.addEventListener('click', () => {
            listElement.classList.toggle('dropdown__list_active');
        });

        // Обработчики кликов по элементам списка
        items.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault(); // Запрещаем переход по ссылке
                const newValue = item.querySelector('.dropdown__link').textContent.trim();
                valueElement.textContent = newValue; // Обновляем значение
                listElement.classList.remove('dropdown__list_active'); // Закрываем список
            });
        });
    });

    // Закрытие списков при клике вне области
    document.addEventListener('click', (event) => {
        dropdowns.forEach(dropdown => {
            const list = dropdown.querySelector('.dropdown__list');
            if (!dropdown.contains(event.target)) {
                list.classList.remove('dropdown__list_active');
            }
        });
    });
});