
    // Scroll animation for sections
    const sections = document.querySelectorAll('.section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }

    // Initial styles for sections
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-out';
    });

    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check initial state

    // TODO 1: Create a function to toggle dark/light theme
    function toggleTheme() {
        // Your code here
    }

    // TODO 2: Create a function to validate the contact form
    function validateForm(event) {
        // Your code here
    }

    // TODO 3: Add a scroll animation for sections
    function animateSections() {
        // Your code here
    }

    // TODO 4: Create a typing effect for the header
    function createTypingEffect() {
        // Your code here
    }
});



