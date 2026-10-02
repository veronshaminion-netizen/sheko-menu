const categoryButtons = document.querySelectorAll('.cat-btn');
const sections = document.querySelectorAll('section');

let isScrollingByClick = false; // Прапорець для запобігання конфлікту під час плавного скролу

// Функція для встановлення однієї активної кнопки
function setActiveButton(activeBtn) {
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Натискання на кнопку
categoryButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            isScrollingByClick = true; // Блокуємо відстеження scroll на час анімації

            // Одразу робимо натиснуту кнопку активною (жовтою)
            setActiveButton(this);

            // Плавно прокручуємо
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Відновлюємо відстеження скролу після завершення анімації
            setTimeout(() => {
                isScrollingByClick = false;
            }, 800); // 800мс зазвичай достатньо для плавного скролу
        }
    });
});

// Зміна active під час прокручування сторінки
window.addEventListener('scroll', () => {
    // Якщо скрол викликано кліком по кнопці — ігноруємо подійний скрол
    if (isScrollingByClick) return;

    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        // Змінюйте значення 150 (наприклад, 200 або 300), 
        // залежно від висоти вашого фіксованого шапки (меню)
        if (sectionTop <= 150) {
            currentSectionId = section.id;
        }
    });

    if (currentSectionId) {
        const activeButton = document.querySelector(`.cat-btn[href="#${currentSectionId}"]`);
        setActiveButton(activeButton);
    } else if (window.scrollY === 0 && categoryButtons.length > 0) {
        // Якщо прокрутили на самий верх — активна перша кнопка
        setActiveButton(categoryButtons[0]);
    }
});