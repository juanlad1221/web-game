// Check if the page is running via the file:// protocol
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.protocol === 'file:') {
        console.warn('VAPOL Dev Note: YouTube embeds often require a local server (http://) to play correctly due to browser security policies. If the video shows "Error 153", please try opening this folder with a local server like VS Code Live Server.');

        // Optional: Add a subtle UI note if the trailer container exists
        const trailerContainer = document.querySelector('.video-wrapper');
        if (trailerContainer) {
            const note = document.createElement('p');
            note.style.fontSize = '0.8rem';
            note.style.opacity = '0.5';
            note.style.marginTop = '10px';
            note.style.fontStyle = 'italic';
            note.innerText = '(Nota: Si el video no carga, intenta usar un servidor local como Live Server)';
            trailerContainer.after(note);
        }
    }
});

// Original script content...
document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for hero background
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');

    window.addEventListener('scroll', () => {
        const scroll = window.pageYOffset;
        if (heroBg) {
            heroBg.style.transform = `translateY(${scroll * 0.5}px) scale(${1 + scroll * 0.0005})`;
        }
    });

    // Flickering effect for subtle elements
    const addRandomFlicker = (element) => {
        setInterval(() => {
            if (Math.random() > 0.95) {
                element.style.opacity = '0.4';
                setTimeout(() => {
                    element.style.opacity = '1';
                }, 50 + Math.random() * 100);
            }
        }, 1000);
    };

    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(addRandomFlicker);

    // Intersection Observer for scroll reveal
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .gameplay-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 1s ease-out';
        observer.observe(el);
    });

    // Add CSS class through JS for the reveal animation
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
