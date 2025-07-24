// ============================================
// TEMPLATE.JS - Générateurs de templates professionnels
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
        
        // Services
        if (options.includes('services')) {
            template.appendChild(this.createServices());
        }
        
        // Galerie
        if (options.includes('gallery')) {
            template.appendChild(this.createGallery());
        }
        
        // Témoignages
        if (options.includes('testimonials')) {
            template.appendChild(this.createTestimonials());
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
                    <img src="${data.logo}" alt="${data.name}" class="logo-image">
                    <span class="logo-text">${data.name}</span>
                </div>
                <nav class="main-nav">
                    <a href="#accueil" class="nav-link">Accueil</a>
                    <a href="#menu" class="nav-link">Menu</a>
                    <a href="#galerie" class="nav-link">Galerie</a>
                    <a href="#reservation" class="nav-link">Réservation</a>
                    <a href="#contact" class="nav-link">Contact</a>
                </nav>
                <div class="header-contact">
                    <span class="phone-number">+33 1 23 45 67 89</span>
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
                <img src="${data.heroImage}" alt="Restaurant" class="hero-image">
                <div class="hero-overlay">
                    <div class="hero-content">
                        <div class="hero-text">
                            <h1 class="hero-title">${data.heroTitle}</h1>
                            <p class="hero-subtitle">${data.heroSubtitle}</p>
                            <p class="hero-description">${data.heroDescription}</p>
                            <div class="hero-buttons">
                                <button class="btn-primary">
                                    <span class="btn-icon">📅</span>
                                    ${data.ctaPrimary}
                                </button>
                                <button class="btn-secondary">
                                    <span class="btn-icon">🍽️</span>
                                    ${data.ctaSecondary}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        return hero;
    }

    createServices() {
        const services = document.createElement('section');
        services.className = 'template-services';
        services.id = 'services';
        
        const data = this.getMetierData();
        services.innerHTML = `
            <div class="section-container">
                <div class="section-header">
                    <h2 class="section-title">Notre Menu</h2>
                    <p class="section-subtitle">Une cuisine authentique préparée avec passion</p>
                </div>
                <div class="menu-categories">
                    ${data.menuCategories.map(category => `
                        <div class="menu-category">
                            <h3 class="category-title">${category.name}</h3>
                            <div class="menu-items">
                                ${category.items.map(item => `
                                    <div class="menu-item">
                                        <div class="item-info">
                                            <h4 class="item-name">${item.name}</h4>
                                            <p class="item-description">${item.description}</p>
                                        </div>
                                        <div class="item-price">${item.price}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        return services;
    }

    createGallery() {
        const gallery = document.createElement('section');
        gallery.className = 'template-gallery';
        gallery.id = 'gallery';
        
        gallery.innerHTML = `
            <div class="section-container">
                <div class="section-header">
                    <h2 class="section-title">Galerie</h2>
                    <p class="section-subtitle">Découvrez notre univers culinaire</p>
                </div>
                <div class="gallery-grid">
                    <div class="gallery-item large">
                        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop" alt="Plat signature" class="gallery-image">
                        <div class="gallery-overlay">
                            <h4>Nos spécialités</h4>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop" alt="Ambiance restaurant" class="gallery-image">
                        <div class="gallery-overlay">
                            <h4>Notre ambiance</h4>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&h=200&fit=crop" alt="Chef en cuisine" class="gallery-image">
                        <div class="gallery-overlay">
                            <h4>Notre chef</h4>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=300&h=200&fit=crop" alt="Desserts" class="gallery-image">
                        <div class="gallery-overlay">
                            <h4>Nos desserts</h4>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=300&h=200&fit=crop" alt="Cave à vins" class="gallery-image">
                        <div class="gallery-overlay">
                            <h4>Notre cave</h4>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        return gallery;
    }

    createTestimonials() {
        const testimonials = document.createElement('section');
        testimonials.className = 'template-testimonials';
        
        const data = this.getMetierData();
        testimonials.innerHTML = `
            <div class="section-container">
                <div class="section-header">
                    <h2 class="section-title">Avis Clients</h2>
                    <p class="section-subtitle">Ce que pensent nos clients</p>
                </div>
                <div class="testimonials-grid">
                    ${data.testimonials.map(testimonial => `
                        <div class="testimonial-card">
                            <div class="testimonial-rating">
                                ${'★'.repeat(testimonial.rating)}
                            </div>
                            <blockquote class="testimonial-text">
                                "${testimonial.text}"
                            </blockquote>
                            <div class="testimonial-author">
                                <div class="author-avatar">
                                    <img src="${testimonial.avatar}" alt="${testimonial.name}">
                                </div>
                                <div class="author-info">
                                    <h4>${testimonial.name}</h4>
                                    <p>${testimonial.date}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        return testimonials;
    }

    createAbout() {
        const about = document.createElement('section');
        about.className = 'template-about';
        
        const data = this.getMetierData();
        about.innerHTML = `
            <div class="section-container">
                <div class="about-content">
                    <div class="about-text">
                        <h2 class="section-title">Notre Histoire</h2>
                        <p class="about-description">${data.aboutText}</p>
                        <div class="about-features">
                            ${data.features.map(feature => `
                                <div class="feature-item">
                                    <div class="feature-icon">${feature.icon}</div>
                                    <div class="feature-text">${feature.text}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="about-image">
                        <img src="${data.aboutImage}" alt="Notre équipe" class="about-img">
                    </div>
                </div>
            </div>
        `;
        
        return about;
    }

    createContact() {
        const contact = document.createElement('section');
        contact.className = 'template-contact';
        
        contact.innerHTML = `
            <div class="section-container">
                <div class="contact-content">
                    <div class="contact-info">
                        <h2 class="section-title">Contact & Réservation</h2>
                        <div class="contact-details">
                            <div class="contact-item">
                                <div class="contact-icon">📍</div>
                                <div class="contact-text">
                                    <h4>Adresse</h4>
                                    <p>123 Rue de la Gastronomie<br>75001 Paris</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="contact-icon">📞</div>
                                <div class="contact-text">
                                    <h4>Téléphone</h4>
                                    <p>+33 1 23 45 67 89</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="contact-icon">🕒</div>
                                <div class="contact-text">
                                    <h4>Horaires</h4>
                                    <p>Mar-Dim: 12h-14h / 19h-22h<br>Fermé le lundi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form-container">
                        <h3>Réserver une table</h3>
                        <form class="contact-form">
                            <div class="form-row">
                                <input type="text" placeholder="Nom" class="form-input">
                                <input type="email" placeholder="Email" class="form-input">
                            </div>
                            <div class="form-row">
                                <input type="date" class="form-input">
                                <select class="form-input">
                                    <option>Nombre de personnes</option>
                                    <option>2 personnes</option>
                                    <option>4 personnes</option>
                                    <option>6 personnes</option>
                                    <option>8+ personnes</option>
                                </select>
                            </div>
                            <textarea placeholder="Message (optionnel)" class="form-textarea"></textarea>
                            <button type="submit" class="btn-primary full-width">Réserver</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
        
        return contact;
    }

    getMetierData() {
        const data = {
            restaurant: {
                name: "Le Restaurant Traditionnel",
                logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=50&h=50&fit=crop&crop=center",
                heroTitle: "Le Restaurant Traditionnel",
                heroSubtitle: "Votre restaurant traditionnel à la portée de tous",
                heroDescription: "Bienvenue dans notre restaurant traditionnel, où nous vous proposons des plats délicieux et authentiques. Nous sommes fiers de notre histoire culinaire et de notre équipe dévouée.",
                heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop",
                ctaPrimary: "Réserver une table",
                ctaSecondary: "Découvrir le menu",
                aboutText: "Depuis plus de 20 ans, notre restaurant familial vous accueille dans un cadre chaleureux et authentique. Notre chef et son équipe travaillent avec passion pour vous offrir une cuisine traditionnelle de qualité, préparée avec des produits frais et locaux.",
                aboutImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&h=400&fit=crop",
                features: [
                    { icon: "👨‍🍳", text: "Chef expérimenté" },
                    { icon: "🌱", text: "Produits frais" },
                    { icon: "🍷", text: "Carte des vins" },
                    { icon: "🏆", text: "20 ans d'expérience" }
                ],
                menuCategories: [
                    {
                        name: "Entrées",
                        items: [
                            { name: "Foie gras maison", description: "Accompagné de son chutney de figues", price: "18€" },
                            { name: "Escargots de Bourgogne", description: "6 pièces au beurre persillé", price: "12€" },
                            { name: "Velouté de châtaignes", description: "Crème fraîche et lardons croustillants", price: "9€" }
                        ]
                    },
                    {
                        name: "Plats",
                        items: [
                            { name: "Coq au vin", description: "Mijoté dans un vin rouge de Bourgogne", price: "24€" },
                            { name: "Magret de canard", description: "Sauce aux cerises, gratin dauphinois", price: "26€" },
                            { name: "Bouillabaisse marseillaise", description: "Poissons de roche, rouille et croûtons", price: "28€" }
                        ]
                    },
                    {
                        name: "Desserts",
                        items: [
                            { name: "Tarte Tatin maison", description: "Servie tiède avec boule de glace vanille", price: "8€" },
                            { name: "Crème brûlée", description: "À la vanille de Madagascar", price: "7€" },
                            { name: "Plateau de fromages", description: "Sélection de fromages affinés", price: "12€" }
                        ]
                    }
                ],
                testimonials: [
                    {
                        text: "Un restaurant exceptionnel ! La cuisine est délicieuse et le service impeccable. Je recommande vivement.",
                        name: "Marie Dubois",
                        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
                        rating: 5,
                        date: "Il y a 2 semaines"
                    },
                    {
                        text: "Cadre magnifique et plats savoureux. Une expérience culinaire mémorable à partager en famille.",
                        name: "Jean Martin",
                        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
                        rating: 5,
                        date: "Il y a 1 mois"
                    },
                    {
                        text: "La qualité est au rendez-vous ! Des produits frais et une cuisine authentique. Bravo !",
                        name: "Sophie Laurent",
                        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
                        rating: 5,
                        date: "Il y a 3 semaines"
                    }
                ]
            }
        };

        return data[this.metier] || data.restaurant;
    }
}
