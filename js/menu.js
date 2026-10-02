const categoryButtons = document.querySelectorAll('.cat-btn');
const sections = document.querySelectorAll('section');

categoryButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // прибираємо active з усіх кнопок
        categoryButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // додаємо active натиснутій
        this.classList.add('active');

        // плавно переходимо до секції
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Визначаємо активну категорію під час прокрутки
window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= 150) {
            currentSection = section.id;
        }
    });

    if (currentSection) {
        categoryButtons.forEach(button => {
            button.classList.remove('active');

            if (button.getAttribute('href') === `#${currentSection}`) {
                button.classList.add('active');
            }
        });
    }
});