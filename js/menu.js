const categoryButtons = document.querySelectorAll('.cat-btn');
const sections = document.querySelectorAll('section');

// Натискання на кнопку
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');
    });
});

// Зміна active під час прокручування
window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }
    });

    // Спочатку прибираємо active з УСІХ кнопок
    categoryButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Потім додаємо active тільки потрібній
    categoryButtons.forEach(button => {
        if (button.getAttribute('href') === `#${currentSection}`) {
            button.classList.add('active');
        }
    });
});