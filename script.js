document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Hamburger animation
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to skill cards on scroll
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');
    const statItems = document.querySelectorAll('.stat-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                
                // Add stagger effect for skill cards
                if (entry.target.classList.contains('skill-card')) {
                    const index = Array.from(skillCards).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
                
                // Add stagger effect for project cards
                if (entry.target.classList.contains('project-card')) {
                    const index = Array.from(projectCards).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.15}s`;
                }
            }
        });
    }, observerOptions);

    // Initialize elements for animation
    [...skillCards, ...projectCards, ...statItems].forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Header background on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 14, 26, 0.95)';
            header.style.boxShadow = '0 4px 30px rgba(0, 255, 255, 0.15)';
        } else {
            header.style.background = 'rgba(10, 14, 26, 0.9)';
            header.style.boxShadow = '0 4px 30px rgba(0, 255, 255, 0.1)';
        }
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Add floating particles effect
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(0, 255, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            left: ${Math.random() * window.innerWidth}px;
            top: ${window.innerHeight + 10}px;
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
        `;
        
        document.body.appendChild(particle);
        
        const duration = Math.random() * 3000 + 2000;
        const drift = (Math.random() - 0.5) * 100;
        
        particle.animate([
            { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
            { transform: `translateY(-${window.innerHeight + 100}px) translateX(${drift}px)`, opacity: 1 },
            { transform: `translateY(-${window.innerHeight + 200}px) translateX(${drift * 2}px)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'linear'
        }).addEventListener('finish', () => {
            particle.remove();
        });
    }

    // Create particles periodically
    setInterval(createParticle, 800);

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let index = 0;
        
        const typeWriter = () => {
            if (index < originalText.length) {
                heroTitle.textContent += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    // Add hover sound effect (optional - requires Web Audio API)
    function playHoverSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            // Silently fail if Web Audio API is not supported
        }
    }

    // Add sound to interactive elements
    document.querySelectorAll('.cta-button, .skill-card, .project-card, .contact-link').forEach(element => {
        element.addEventListener('mouseenter', playHoverSound);
    });

    // Parallax effect for background elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::before, .about::before, .projects::before');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Initialize tooltips for skill badges
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = 'Click to learn more about this technology';
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 255, 255, 0.9);
                color: #0a0e1a;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 0.8rem;
                font-weight: 500;
                white-space: nowrap;
                z-index: 1000;
                pointer-events: none;
                transform: translateX(-50%);
                top: -40px;
                left: 50%;
                box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
            `;
            
            e.target.parentElement.style.position = 'relative';
            e.target.parentElement.appendChild(tooltip);
        });
        
        badge.addEventListener('mouseleave', (e) => {
            const tooltip = e.target.parentElement.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    console.log('🚀 Soul\'s portfolio loaded successfully with aqua theme!');
});