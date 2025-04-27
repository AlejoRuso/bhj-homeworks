document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab__navigation .tab');
    const contents = document.querySelectorAll('.tab__contents .tab__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Удаляем активные классы у всех вкладок
            tabs.forEach(t => t.classList.remove('tab_active'));
            
            // Добавляем активный класс текущей вкладке
            tab.classList.add('tab_active');
            
            // Скрываем весь контент
            contents.forEach(c => c.classList.remove('tab__content_active'));
            
            // Показываем соответствующий контент
            contents[index].classList.add('tab__content_active');
        });
    });
});