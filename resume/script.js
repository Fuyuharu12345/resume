document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message submitted!');

    document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);

        // Smooth scroll to the section
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});





});
