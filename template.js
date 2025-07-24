// ============================================
// TEMPLATE.JS - Générateurs de composants
// ============================================

class TemplateGenerator {
    constructor() {
        this.metier = null;
        this.plan = null;
        this.options = [];
    }

    // Générateur principal
    generate(metier, plan, options) {
        this.metier = metier;
        this.plan = plan;
        this.options = options;

        const template = document.createElement('div');
        template.className = 'template-preview';
        
        // Header
        if (options.includes('header')) {
            template.appendChild(this.createHeader());
        }
        
        // Hero section
        if (options.includes('hero')) {
            template.appendChild(this.createHero());
        }
        
        // Galerie
        if (options.includes('gallery')) {
            template.appendChild(this.createGallery());
        }
        
        // Témoignages
        if (options.includes('testimonials')) {
            template.appendChild(this.createTestimonials());
        }
        
        // Services
        if (options.includes('services')) {
            template.appendChild(this.createServices());
        }
        
        // À propos
        if (options.includes('about')) {
            template.appendChild(this.createAbout());
        }
        
        // Contact
        if (options.includes('contact')) {
            template.appendChild(this.createContact());
        }

        return template;
    }

    createHeader() {
        const header = document.createElement('header');
        header.className = 'template-header';
        
        const data = this.getMetierData();
        header.innerHTML = `
            <div class="header-container">
                <div class="logo">
                    <span class="logo-icon animated-logo">${data.icon}</span>
                    <span class="logo-text">${data.name}</span>
                </div>
                <nav class="nav">
                    <a href="#accueil" class="nav-link">Accueil</a>
                    <a href="#services" class="nav-link">Services</a>
                    <a href="#gallery" class="nav-link">Galerie</a>
                    <a href="#about" class="nav-link">À propos</a>
                    <a href="#contact" class="nav-link">Contact</a>
                </nav>
                <div class="header-social">
                    <a href="#" class="social-icon">📱</a>
                    <a href="#" class="social-icon">📧</a>
                    <a href="#" class="social-icon">📍</a>
                </div>
            </div>
        `;
        
        return header;
    }

    createHero() {
        const hero = document.createElement('section');
        hero.className = 'template-hero';
        
        const data = this.getMetierData();
        hero.innerHTML = `
            <div class="hero-background">
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="hero-title typing-animation">${data.heroTitle}</h1>
                        <p class="hero-subtitle fade-in-up">${data.heroSubtitle}</p>
                        <div class="hero-features">
                            ${data.features.map(feature => `
                                <div class="feature-item">
                                    <span class="feature-icon">${feature.icon}</span>
                                    <span class="feature-text">${feature.text}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="hero-buttons">
                            <button class="btn-primary pulse-animation">${data.ctaPrimary}</button>
                            <button class="btn-secondary">${data.ctaSecondary}</button>
                        </div>
                        <div class="hero-stats">
                            <div class="stat-item">
                                <div class="stat-number counter" data-target="${data.stats.experience}">0</div>
                                <div class="stat-label">Ans d'expérience</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number counter" data-target="${data.stats.clients}">0</div>
                                <div class="stat-label">Clients satisfaits</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number counter" data-target="${data.stats.projects}">0</div>
                                <div class="stat-label">Projets réalisés</div>
                            </div>
                        </div>
                    </div>
                    <div class="hero-media">
                        <div class="hero-gallery">
                            ${data.heroImages.map((img, index) => `
                                <div class="hero-image ${index === 0 ? 'active' : ''}" data-index="${index}">
                                    <div class="image-placeholder">${img.placeholder}</div>
                                    <div class="image-caption">${img.caption}</div>
                                </div>
                            `).join('')}
                            <div class="gallery-controls">
                                <button class="gallery-prev">❮</button>
                                <div class="gallery-dots">
                                    ${data.heroImages.map((_, index) => `
                                        <span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
                                    `).join('')}
                                </div>
                                <button class="gallery-next">❯</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Ajouter les interactions après création
        setTimeout(() => this.addHeroInteractions(hero), 100);
        
        return hero;
    }

    createServices() {
        const services = document.createElement('section');
        services.className = 'template-services';
        services.id = 'services';
        
        const data = this.getMetierData();
        const servicesHTML = data.services.map((service, index) => `
            <div class="service-card interactive-card" data-tilt>
                <div class="service-image">
                    <div class="image-placeholder">${service.image}</div>
                    <div class="service-overlay">
                        <button class="service-btn">En savoir plus</button>
                    </div>
                </div>
                <div class="service-content">
                    <div class="service-icon bounce-hover">${service.icon}</div>
                    <h3>${service.name}</h3>
                    <p>${service.description}</p>
                    <div class="service-features">
                        ${service.features ? service.features.map(feat => `
                            <span class="feature-tag">${feat}</span>
                        `).join('') : ''}
                    </div>
                    <div class="service-price-container">
                        <div class="service-price">${service.price}</div>
                        <div class="service-rating">
                            ${'⭐'.repeat(service.rating || 5)}
                            <span class="rating-text">(${service.reviews || Math.floor(Math.random() * 50) + 20} avis)</span>
                        </div>
                    </div>
                    <div class="service-actions">
                        <button class="btn-primary-small">Réserver</button>
                        <button class="btn-secondary-small">Détails</button>
                    </div>
                </div>
            </div>
        `).join('');

        services.innerHTML = `
            <div class="section-container">
                <div class="section-header">
                    <h2 class="section-title">Nos Services</h2>
                    <p class="section-subtitle">Découvrez notre gamme complète de services professionnels</p>
                    <div class="services-filters">
                        <button class="filter-btn active" data-filter="all">Tous</button>
                        ${[...new Set(data.services.map(s => s.category))].map(cat => `
                            <button class="filter-btn" data-filter="${cat}">${cat}</button>
                        `).join('')}
                    </div>
                </div>
                <div class="services-grid">
                    ${servicesHTML}
                </div>
                <div class="services-cta">
                    <h3>Besoin d'un service personnalisé ?</h3>
                    <p>Contactez-nous pour un devis sur mesure</p>
                    <button class="btn-primary">Demander un devis</button>
                </div>
            </div>
        `;
        
        // Ajouter les interactions
        setTimeout(() => this.addServicesInteractions(services), 100);
        
        return services;
    }

    createGallery() {
        const gallery = document.createElement('section');
        gallery.className = 'template-gallery';
        gallery.id = 'gallery';
        
        const data = this.getMetierData();
        gallery.innerHTML = `
            <div class="section-container">
                <div class="section-header">
                    <h2 class="section-title">Galerie</h2>
                    <p class="section-subtitle">Découvrez nos réalisations et notre univers</p>
                </div>
                <div class="gallery-filters">
                    <button class="gallery-filter active" data-filter="all">Tout voir</button>
                    ${data.galleryCategories.map(cat => `
                        <button class="gallery-filter" data-filter="${cat.id}">${cat.name}</button>
                    `).join('')}
                </div>
                <div class="gallery-grid">
                    ${data.galleryImages.map((img, index) => `
                        <div class="gallery-item" data-category="${img.category}" data-index="${index}">
                            <div class="gallery-image">
                                <div class="image-placeholder">${img.placeholder}</div>
                                <div class="gallery-overlay">
                                    <div class="gallery-info">
                                        <h4>${img.title}</h4>
                                        <p>${img.description}</p>
                                    </div>
                                    <div class="gallery-actions">
                                        <button class="gallery-zoom">🔍</button>
                                        <button class="gallery-share">📤</button>
                                        <button class="gallery-like">❤️</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="gallery-load-more">
                    <button class="btn-secondary">Voir plus</button>
                </div>
            </div>
        `;
        
        setTimeout(() => this.addGalleryInteractions(gallery), 100);
        return gallery;
    }

    createTestimonials() {
        const testimonials = document.createElement('section');
        testimonials.className = 'template-testimonials';
        testimonials.id = 'testimonials';
        
        const data = this.getMetierData();
        testimonials.innerHTML = `
            <div class="section-container">
                <div class="section-header">
                    <h2 class="section-title">Témoignages</h2>
                    <p class="section-subtitle">Ce que disent nos clients</p>
                </div>
                <div class="testimonials-slider">
                    <div class="testimonials-wrapper">
                        ${data.testimonials.map((testimonial, index) => `
                            <div class="testimonial-slide ${index === 0 ? 'active' : ''}">
                                <div class="testimonial-content">
                                    <div class="testimonial-stars">
                                        ${'⭐'.repeat(testimonial.rating)}
                                    </div>
                                    <blockquote>"${testimonial.text}"</blockquote>
                                    <div class="testimonial-author">
                                        <div class="author-avatar">
                                            <div class="avatar-placeholder">${testimonial.avatar}</div>
                                        </div>
                                        <div class="author-info">
                                            <h4>${testimonial.name}</h4>
                                            <p>${testimonial.role}</p>
                                            <span class="testimonial-date">${testimonial.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="testimonials-controls">
                        <button class="testimonial-prev">❮</button>
                        <div class="testimonials-dots">
                            ${data.testimonials.map((_, index) => `
                                <span class="testimonial-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
                            `).join('')}
                        </div>
                        <button class="testimonial-next">❯</button>
                    </div>
                </div>
                <div class="testimonials-stats">
                    <div class="stat-item">
                        <div class="stat-number">4.9</div>
                        <div class="stat-label">Note moyenne</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${data.testimonials.length * 10}</div>
                        <div class="stat-label">Avis clients</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">98%</div>
                        <div class="stat-label">Recommandent</div>
                    </div>
                </div>
            </div>
        `;
        
        setTimeout(() => this.addTestimonialsInteractions(testimonials), 100);
        return testimonials;
    }

    createAbout() {
        const about = document.createElement('section');
        about.className = 'template-about';
        about.id = 'about';
        
        const data = this.getMetierData();
        about.innerHTML = `
            <div class="section-container">
                <div class="about-content">
                    <div class="about-text">
                        <h2 class="section-title">À propos</h2>
                        <p>${data.aboutText}</p>
                        <div class="stats">
                            <div class="stat">
                                <div class="stat-number">10+</div>
                                <div class="stat-label">Années d'expérience</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">500+</div>
                                <div class="stat-label">Clients satisfaits</div>
                            </div>
                        </div>
                    </div>
                    <div class="about-image">
                        <div class="image-placeholder">${data.icon}</div>
                    </div>
                </div>
            </div>
        `;
        
        return about;
    }

    createContact() {
        const contact = document.createElement('section');
        contact.className = 'template-contact';
        contact.id = 'contact';
        
        contact.innerHTML = `
            <div class="section-container">
                <h2 class="section-title">Contactez-nous</h2>
                <div class="contact-content">
                    <div class="contact-info">
                        <div class="contact-item">
                            <span class="contact-icon">📍</span>
                            <div>
                                <h4>Adresse</h4>
                                <p>123 Rue de la République<br>75001 Paris</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📞</span>
                            <div>
                                <h4>Téléphone</h4>
                                <p>01 23 45 67 89</p>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form">
                        <div class="form-group">
                            <input type="text" placeholder="Votre nom" class="form-input">
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Votre email" class="form-input">
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Votre message" class="form-textarea"></textarea>
                        </div>
                        <button class="btn-primary full">Envoyer</button>
                    </div>
                </div>
            </div>
        `;
        
        return contact;
    }

    // Méthodes d'interaction
    addHeroInteractions(hero) {
        const gallery = hero.querySelector('.hero-gallery');
        const images = gallery.querySelectorAll('.hero-image');
        const dots = gallery.querySelectorAll('.dot');
        const prevBtn = gallery.querySelector('.gallery-prev');
        const nextBtn = gallery.querySelector('.gallery-next');
        let currentIndex = 0;

        const showImage = (index) => {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentIndex = index;
        };

        prevBtn.addEventListener('click', () => {
            const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
            showImage(newIndex);
        });

        nextBtn.addEventListener('click', () => {
            const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
            showImage(newIndex);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showImage(index));
        });

        setInterval(() => {
            const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
            showImage(newIndex);
        }, 5000);

        const counters = hero.querySelectorAll('.counter');
        const animateCounters = () => {
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.target);
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                updateCounter();
            });
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(hero);
    }

    addServicesInteractions(services) {
        const filterBtns = services.querySelectorAll('.filter-btn');
        const serviceCards = services.querySelectorAll('.service-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                serviceCards.forEach(card => {
                    const category = card.dataset.category || 'all';
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        card.classList.add('fade-in');
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                e.target.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05)';
                e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
            });

            card.addEventListener('mouseleave', (e) => {
                e.target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            });
        });
    }

    addGalleryInteractions(gallery) {
        const filterBtns = gallery.querySelectorAll('.gallery-filter');
        const galleryItems = gallery.querySelectorAll('.gallery-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                galleryItems.forEach(item => {
                    const category = item.dataset.category;
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        item.classList.add('fade-in');
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        galleryItems.forEach(item => {
            const likeBtn = item.querySelector('.gallery-like');
            let liked = false;

            likeBtn.addEventListener('click', () => {
                liked = !liked;
                likeBtn.style.color = liked ? '#ff6b6b' : '#fff';
                likeBtn.style.transform = liked ? 'scale(1.2)' : 'scale(1)';
            });

            const zoomBtn = item.querySelector('.gallery-zoom');
            zoomBtn.addEventListener('click', () => {
                item.classList.toggle('zoomed');
            });
        });
    }

    addTestimonialsInteractions(testimonials) {
        const slides = testimonials.querySelectorAll('.testimonial-slide');
        const dots = testimonials.querySelectorAll('.testimonial-dot');
        const prevBtn = testimonials.querySelector('.testimonial-prev');
        const nextBtn = testimonials.querySelector('.testimonial-next');
        let currentSlide = 0;

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentSlide = index;
        };

        prevBtn.addEventListener('click', () => {
            const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
            showSlide(newIndex);
        });

        nextBtn.addEventListener('click', () => {
            const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
            showSlide(newIndex);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        setInterval(() => {
            const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
            showSlide(newIndex);
        }, 7000);
    }

    getMetierData() {
        const data = {
            restaurant: {
                name: "Restaurant Le Gourmet",
                icon: "🍽️",
                heroTitle: "Savourez l'Excellence",
                heroSubtitle: "Une cuisine raffinée dans un cadre exceptionnel",
                ctaPrimary: "Réserver",
                ctaSecondary: "Voir la carte",
                aboutText: "Depuis plus de 10 ans, notre restaurant vous accueille dans un cadre chaleureux pour vous faire découvrir une cuisine authentique et raffinée.",
                features: [
                    { icon: "⭐", text: "Chef étoilé" },
                    { icon: "🌱", text: "Produits locaux" },
                    { icon: "🍷", text: "Cave à vins" }
                ],
                stats: { experience: 15, clients: 2500, projects: 1200 },
                heroImages: [
                    { placeholder: "🍽️", caption: "Plat signature" },
                    { placeholder: "🥘", caption: "Cuisine ouverte" },
                    { placeholder: "🍷", caption: "Cave à vins" },
                    { placeholder: "🎂", caption: "Desserts maison" }
                ],
                services: [
                    { 
                        icon: "🥗", 
                        name: "Menu du jour", 
                        description: "Plats frais préparés quotidiennement avec des produits de saison", 
                        price: "À partir de 15€",
                        image: "🍽️",
                        category: "restauration",
                        features: ["Bio", "Local", "Fait maison"],
                        rating: 5,
                        reviews: 45
                    },
                    { 
                        icon: "🍷", 
                        name: "Carte des vins", 
                        description: "Sélection de vins fins de nos vignerons partenaires", 
                        price: "À partir de 8€",
                        image: "🍷",
                        category: "boissons",
                        features: ["AOC", "Bio", "Sélection sommelier"],
                        rating: 5,
                        reviews: 32
                    },
                    { 
                        icon: "🎂", 
                        name: "Événements", 
                        description: "Organisation complète de vos événements privés", 
                        price: "Sur devis",
                        image: "🎉",
                        category: "événements",
                        features: ["Personnalisé", "Traiteur", "Décoration"],
                        rating: 5,
                        reviews: 28
                    }
                ],
                galleryCategories: [
                    { id: "plats", name: "Nos Plats" },
                    { id: "ambiance", name: "Ambiance" },
                    { id: "evenements", name: "Événements" }
                ],
                galleryImages: [
                    { placeholder: "🥩", category: "plats", title: "Côte de bœuf", description: "Grillée à la perfection" },
                    { placeholder: "🦞", category: "plats", title: "Homard grillé", description: "Sauce à l'armoricaine" },
                    { placeholder: "🏛️", category: "ambiance", title: "Salle principale", description: "Décor raffiné" },
                    { placeholder: "🕯️", category: "ambiance", title: "Éclairage tamisé", description: "Ambiance romantique" },
                    { placeholder: "💒", category: "evenements", title: "Mariage", description: "Réception de 80 personnes" },
                    { placeholder: "🎂", category: "evenements", title: "Anniversaire", description: "Fête privée" }
                ],
                testimonials: [
                    {
                        text: "Une expérience culinaire exceptionnelle ! Le chef sait sublimer chaque produit.",
                        name: "Marie Dubois",
                        role: "Critique gastronomique",
                        avatar: "👩‍🍳",
                        rating: 5,
                        date: "Il y a 2 semaines"
                    },
                    {
                        text: "Service impeccable et cuisine raffinée. Notre soirée était parfaite !",
                        name: "Jean Martin",
                        role: "Client régulier",
                        avatar: "👨‍💼",
                        rating: 5,
                        date: "Il y a 1 mois"
                    },
                    {
                        text: "Le meilleur restaurant de la région. Je recommande vivement !",
                        name: "Sophie Laurent",
                        role: "Food blogger",
                        avatar: "👩‍💻",
                        rating: 5,
                        date: "Il y a 3 semaines"
                    }
                ]
            },
            pizzeria: {
                name: "Pizzeria Bella Napoli",
                icon: "🍕",
                heroTitle: "Authentic Italian Pizza",
                heroSubtitle: "Les vraies saveurs de l'Italie dans votre assiette",
                ctaPrimary: "Commander",
                ctaSecondary: "Voir le menu",
                aboutText: "Pizzeria familiale depuis 15 ans, nous préparons nos pizzas avec des ingrédients frais importés directement d'Italie.",
                features: [
                    { icon: "🇮🇹", text: "Authentique italien" },
                    { icon: "🔥", text: "Four à bois" },
                    { icon: "🚚", text: "Livraison 30min" }
                ],
                stats: { experience: 15, clients: 3200, projects: 2500 },
                heroImages: [
                    { placeholder: "🍕", caption: "Pizza Margherita" },
                    { placeholder: "🔥", caption: "Four à bois traditionnel" },
                    { placeholder: "🧄", caption: "Ingrédients frais" },
                    { placeholder: "🚚", caption: "Livraison rapide" }
                ],
                services: [
                    { 
                        icon: "🍕", 
                        name: "Pizzas artisanales", 
                        description: "Pâte fraîche pétrie chaque matin, ingrédients premium d'Italie", 
                        price: "12-18€",
                        image: "🍕",
                        category: "pizzas",
                        features: ["Pâte maison", "Ingrédients italiens", "Four à bois"],
                        rating: 5,
                        reviews: 89
                    },
                    { 
                        icon: "🚚", 
                        name: "Livraison express", 
                        description: "Livraison en moins de 30 minutes, pizza chaude garantie", 
                        price: "Gratuite dès 25€",
                        image: "🚚",
                        category: "services",
                        features: ["30min max", "Emballage isotherme", "GPS tracking"],
                        rating: 4,
                        reviews: 156
                    },
                    { 
                        icon: "🥘", 
                        name: "Plats italiens", 
                        description: "Pasta fraîches, risotto crémeux et antipasti authentiques", 
                        price: "8-15€",
                        category: "plats",
                        features: ["Pasta fraîche", "Recettes familiales", "Portions généreuses"],
                        rating: 5,
                        reviews: 67
                    }
                ],
                galleryCategories: [
                    { id: "pizzas", name: "Nos Pizzas" },
                    { id: "restaurant", name: "Le Restaurant" },
                    { id: "equipe", name: "Notre Équipe" }
                ],
                galleryImages: [
                    { placeholder: "🍕", category: "pizzas", title: "Margherita", description: "La classique italienne" },
                    { placeholder: "🍄", category: "pizzas", title: "Quattro Stagioni", description: "Aux 4 saisons" },
                    { placeholder: "🧄", category: "pizzas", title: "Napolitana", description: "Anchois et câpres" },
                    { placeholder: "🏪", category: "restaurant", title: "Façade", description: "Style authentique" },
                    { placeholder: "🪑", category: "restaurant", title: "Salle", description: "Ambiance familiale" },
                    { placeholder: "👨‍🍳", category: "equipe", title: "Chef Giuseppe", description: "Maître pizzaïolo" }
                ],
                testimonials: [
                    {
                        text: "La meilleure pizza de la ville ! Giuseppe fait des merveilles avec sa pâte.",
                        name: "Antonio Rossi",
                        role: "Client fidèle",
                        avatar: "👨‍🦳",
                        rating: 5,
                        date: "Il y a 1 semaine"
                    },
                    {
                        text: "Livraison ultra rapide et pizza encore chaude. Parfait !",
                        name: "Emma Dubois",
                        role: "Commande en ligne",
                        avatar: "👩‍🦰",
                        rating: 5,
                        date: "Il y a 3 jours"
                    },
                    {
                        text: "On se croirait vraiment en Italie. Atmosphere et goût au rendez-vous !",
                        name: "Pierre Martin",
                        role: "Amateur de cuisine",
                        avatar: "👨‍💼",
                        rating: 5,
                        date: "Il y a 2 semaines"
                    }
                ]
            },
            coiffeur: {
                name: "Salon Élégance",
                icon: "✂️",
                heroTitle: "Révélez votre beauté",
                heroSubtitle: "Coiffure, couleur et soins personnalisés",
                ctaPrimary: "Prendre RDV",
                ctaSecondary: "Nos services",
                aboutText: "Notre équipe de professionnels vous accompagne pour créer le look qui vous ressemble.",
                features: [
                    { icon: "💫", text: "Styliste expert" },
                    { icon: "🌿", text: "Produits bio" },
                    { icon: "💆", text: "Soin personnalisé" }
                ],
                stats: { experience: 12, clients: 1800, projects: 5000 },
                heroImages: [
                    { placeholder: "✂️", caption: "Coupe moderne" },
                    { placeholder: "🎨", caption: "Coloration tendance" },
                    { placeholder: "💆", caption: "Soins capillaires" },
                    { placeholder: "💄", caption: "Maquillage" }
                ],
                services: [
                    { 
                        icon: "✂️", 
                        name: "Coupe & Style", 
                        description: "Coupe personnalisée selon votre morphologie et style de vie", 
                        price: "35-50€",
                        image: "✂️",
                        category: "coupe",
                        features: ["Conseil morphologie", "Shampoing inclus", "Coiffage"],
                        rating: 5,
                        reviews: 124
                    },
                    { 
                        icon: "🎨", 
                        name: "Coloration", 
                        description: "Couleur sur mesure, balayage et techniques modernes", 
                        price: "60-120€",
                        image: "🎨",
                        category: "couleur",
                        features: ["Couleur sur mesure", "Produits premium", "Soin inclus"],
                        rating: 5,
                        reviews: 98
                    },
                    { 
                        icon: "💆", 
                        name: "Soins capillaires", 
                        description: "Traitements réparateurs et masques nourrissants", 
                        price: "25-40€",
                        image: "💆",
                        category: "soins",
                        features: ["Diagnostic capillaire", "Produits naturels", "Massage crânien"],
                        rating: 5,
                        reviews: 76
                    }
                ],
                galleryCategories: [
                    { id: "avant-apres", name: "Avant/Après" },
                    { id: "colorations", name: "Colorations" },
                    { id: "salon", name: "Le Salon" }
                ],
                galleryImages: [
                    { placeholder: "💇‍♀️", category: "avant-apres", title: "Transformation", description: "Coupe dégradée" },
                    { placeholder: "🌈", category: "colorations", title: "Balayage", description: "Effet naturel" },
                    { placeholder: "💄", category: "avant-apres", title: "Relooking", description: "Changement total" },
                    { placeholder: "🪑", category: "salon", title: "Espace coupe", description: "Confort et modernité" },
                    { placeholder: "🧴", category: "salon", title: "Produits", description: "Gamme professionnelle" },
                    { placeholder: "✨", category: "salon", title: "Ambiance", description: "Détente assurée" }
                ],
                testimonials: [
                    {
                        text: "Sarah a transformé mes cheveux ! Je n'aurais jamais osé ce changement sans ses conseils.",
                        name: "Julie Moreau",
                        role: "Cliente régulière",
                        avatar: "👩‍🦱",
                        rating: 5,
                        date: "Il y a 5 jours"
                    },
                    {
                        text: "Salon au top, équipe professionnelle et ambiance relaxante. Je recommande !",
                        name: "Carla Santos",
                        role: "Nouvelle cliente",
                        avatar: "👩‍🦳",
                        rating: 5,
                        date: "Il y a 1 semaine"
                    },
                    {
                        text: "Mon balayage est parfait ! Exactement ce que je voulais. Merci les filles !",
                        name: "Manon Petit",
                        role: "Cliente satisfaite",
                        avatar: "👱‍♀️",
                        rating: 5,
                        date: "Il y a 3 jours"
                    }
                ]
            },
            garage: {
                name: "Garage Expert Auto",
                icon: "🔧",
                heroTitle: "Votre partenaire automobile",
                heroSubtitle: "Entretien, réparation et expertise depuis 1995",
                ctaPrimary: "Prendre RDV",
                ctaSecondary: "Nos services",
                aboutText: "Garage familial spécialisé dans l'entretien et la réparation de tous types de véhicules.",
                features: [
                    { icon: "🏆", text: "30 ans d'expérience" },
                    { icon: "🔧", text: "Équipement moderne" },
                    { icon: "⚡", text: "Diagnostic rapide" }
                ],
                stats: { experience: 30, clients: 5200, projects: 8500 },
                heroImages: [
                    { placeholder: "🔧", caption: "Réparation moteur" },
                    { placeholder: "🛞", caption: "Changement pneus" },
                    { placeholder: "🔍", caption: "Diagnostic électronique" },
                    { placeholder: "🚗", caption: "Véhicules toutes marques" }
                ],
                services: [
                    { 
                        icon: "🔧", 
                        name: "Entretien complet", 
                        description: "Révision selon préconisations constructeur, vidange et contrôles", 
                        price: "80-150€",
                        image: "🔧",
                        category: "entretien",
                        features: ["Toutes marques", "Pièces d'origine", "Garantie"],
                        rating: 5,
                        reviews: 203
                    },
                    { 
                        icon: "🛞", 
                        name: "Pneumatiques", 
                        description: "Vente, montage, équilibrage et géométrie", 
                        price: "20-40€",
                        image: "🛞",
                        category: "pneumatiques",
                        features: ["Grandes marques", "Montage inclus", "Équilibrage"],
                        rating: 5,
                        reviews: 187
                    },
                    { 
                        icon: "🔍", 
                        name: "Diagnostic électronique", 
                        description: "Contrôle technique, recherche de pannes et expertise", 
                        price: "60-90€",
                        image: "🔍",
                        category: "diagnostic",
                        features: ["Technologie moderne", "Rapport détaillé", "Conseils"],
                        rating: 5,
                        reviews: 165
                    }
                ],
                galleryCategories: [
                    { id: "atelier", name: "L'Atelier" },
                    { id: "reparations", name: "Réparations" },
                    { id: "vehicules", name: "Véhicules" }
                ],
                galleryImages: [
                    { placeholder: "🏭", category: "atelier", title: "Atelier moderne", description: "Équipement de pointe" },
                    { placeholder: "🔧", category: "reparations", title: "Moteur", description: "Réparation complète" },
                    { placeholder: "🛞", category: "reparations", title: "Pneumatiques", description: "Montage professionnel" },
                    { placeholder: "🚗", category: "vehicules", title: "Citadines", description: "Entretien spécialisé" },
                    { placeholder: "🚙", category: "vehicules", title: "SUV", description: "Toutes marques" },
                    { placeholder: "🏎️", category: "vehicules", title: "Sportives", description: "Passion automobile" }
                ],
                testimonials: [
                    {
                        text: "Équipe compétente et honnête. Ils ont diagnostiqué et réparé ma panne rapidement.",
                        name: "Michel Legrand",
                        role: "Client depuis 10 ans",
                        avatar: "👨‍🔧",
                        rating: 5,
                        date: "Il y a 1 semaine"
                    },
                    {
                        text: "Prix corrects et travail impeccable. Je recommande pour l'entretien.",
                        name: "Sarah Dubois",
                        role: "Propriétaire Peugeot",
                        avatar: "👩‍💼",
                        rating: 5,
                        date: "Il y a 2 semaines"
                    },
                    {
                        text: "Garage de confiance, toujours de bons conseils et pas de mauvaises surprises.",
                        name: "Patrick Martin",
                        role: "Client régulier",
                        avatar: "👨‍🦳",
                        rating: 5,
                        date: "Il y a 4 jours"
                    }
                ]
            }
        };

        return data[this.metier] || data.restaurant;
    }
}