        // Mobile menu toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                // Close mobile menu if open
                if(document.querySelector('.nav-links').classList.contains('active')) {
                    document.querySelector('.nav-links').classList.remove('active');
                    document.querySelector('.mobile-menu i').classList.remove('fa-times');
                    document.querySelector('.mobile-menu i').classList.add('fa-bars');
                }
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if(window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Form submission
        document.getElementById('appointmentForm').addEventListener('submit', function(e) {
            
            // copilot generated using An api key
            e.preventDefault();
            const formData = new FormData(this);

            fetch('https://formsubmit.co/ajax/118c4b6d1d6013b03e336243e46a5640', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('Your appointment request has been sent successfully!');
                    this.reset();
                } else {
                    alert('There was an error sending your request. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your request. Please try again later.');
            });
            

            // We'll just show an alert
            alert('Thank you for your appointment request, ' + document.getElementById('name').value + 
                  '! We will contact you shortly to confirm your booking for ' + 
                  document.getElementById('service').value + '.');
            this.reset();
        });
        
        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.service-card, .about-content, .about-img, .contact-info, .contact-form, .footer-col');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if(elementPosition < screenPosition) {
                    element.classList.add('animated');
                }
            });
            
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            testimonialCards.forEach((card, index) => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if(cardPosition < screenPosition) {
                    // Stagger the animations
                    setTimeout(() => {
                        card.classList.add('animated');
                    }, index * 200);
                }
            });
        }
        
        // Run once when page loads
        window.addEventListener('load', animateOnScroll);
        // Run whenever user scrolls
        window.addEventListener('scroll', animateOnScroll);
        
        // Add floating elements dynamically to the background
        // This function creates floating elements with random sizes, positions, and colors
        // and appends them to the floating-elements container

        // Copilot generated this function based on the context
        function createFloatingElements() {
            const floatingContainer = document.querySelector('.floating-elements');
            const colors = ['rgba(255, 107, 152, 0.1)', 'rgba(255, 107, 152, 0.15)', 'rgba(255, 107, 152, 0.08)'];
            
            for(let i = 0; i < 8; i++) {
                const element = document.createElement('div');
                element.classList.add('floating-element');
                
                const size = Math.random() * 100 + 50;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const duration = Math.random() * 10 + 10;
                const delay = Math.random() * 5;
                
                element.style.width = `${size}px`;
                element.style.height = `${size}px`;
                element.style.top = `${posY}%`;
                element.style.left = `${posX}%`;
                element.style.background = color;
                element.style.animationDuration = `${duration}s`;
                element.style.animationDelay = `${delay}s`;
                
                floatingContainer.appendChild(element);
            }
        }
        
        // Create floating elements when page loads
        window.addEventListener('load', createFloatingElements);
