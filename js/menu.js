const categoryButtons = document.querySelectorAll('.cat-btn');
const sections = document.querySelectorAll('section');

// Натискання на кнопку
categoryButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        // Прибираємо active з усіх кнопок
        categoryButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.blur(); // прибирає focus з попередньої кнопки
        });

        // Робимо активною натиснуту кнопку
        this.classList.add('active');

        // Переходимо до потрібного розділу
        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Визначення активної категорії при прокручуванні
window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= 150) {
            currentSection = section.id;
        }
    });

    // Прибираємо active абсолютно з усіх кнопок
    categoryButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Додаємо active тільки поточній категорії
    if (currentSection) {
        const activeButton = document.querySelector(
            `.cat-btn[href="#${currentSection}"]`
        );

        if (activeButton) {
            activeButton.classList.add('active');
        }
    }
});