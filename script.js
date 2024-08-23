document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function ir1() {
    window.open('https://leonardovg270.github.io/viajare/', '_blank')
}

function ir2() {
    window.open('https://leonardovg270.github.io/robsonhilario/', '_blank')
}

function ir3() {
    window.open('https://leonardovg270.github.io/nique/index.html', '_blank')
}

function baixarcv() {
    window.open('LeonardoVagnerCurriculo.pdf', '_blank')
}


document.getElementById('menu-toggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('open')
});




document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Carregar o tema previamente salvo no armazenamento local
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        bodyElement.classList.add(savedTheme);
    }

    themeToggleButton.addEventListener('click', function () {
        bodyElement.classList.toggle('dark-theme');
        
        // Salvar a preferência do tema no armazenamento local
        if (bodyElement.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark-theme');
        } else {
            localStorage.setItem('theme', '');
        }
    });
});


