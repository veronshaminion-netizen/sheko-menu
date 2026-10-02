const categoryButtons = document.querySelectorAll('.cat-btn');
const sections = document.querySelectorAll('section');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');
    });
});

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    categoryButtons.forEach(button => {
        button.classList.remove('active');

        if (button.getAttribute('href') === `#${currentSection}`) {
            button.classList.add('active');
        }
    });
});