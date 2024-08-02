document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function ir1() {
    window.open('https://github.com/leonardovg270/viajare', '_blank');
}

function ir2() {
    window.open('https://leonardovg270.github.io/robsonhilario/', '_blank');
}

function ir3() {
    window.open('https://leonardovg270.github.io/nique/index.html', '_blank');
}



