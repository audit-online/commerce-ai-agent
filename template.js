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
                    <span class="logo-icon">${data.icon}</span>
                    <span class="logo-text">${data.name}</span>
                </div>
                <nav class="nav">
                    <a href="#accueil">Accueil</a>
                    <a href="#services">Services</a>
                    <a href="#about">À propos</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        `;
        
        return header;
    }

    createHero() {
        const hero = document.createElement('section');
        hero.className = 'template-hero';
        
        const data = this.getMetierData();
        hero.innerHTML = `
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">${data.heroTitle}</h1>
                    <p class="hero-subtitle">${data.heroSubtitle}</p>
                    <div class="hero-buttons">
                        <button class="btn-primary">${data.ctaPrimary}</button>
                        <button class="btn-secondary">${data.ctaSecondary}</button>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="hero-placeholder">${data.icon}</div>
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
        const servicesHTML = data.services.map(service => `
            <div class="service-card">
                <div class="service-icon">${service.icon}</div>
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <div class="service-price">${service.price}</div>
            </div>
        `).join('');

        services.innerHTML = `
            <div class="section-container">
                <h2 class="section-title">Nos Services</h2>
                <div class="services-grid">
                    ${servicesHTML}
                </div>
            </div>
        `;
        
        return services;
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
                services: [
                    { icon: "🥗", name: "Menu du jour", description: "Plats frais préparés quotidiennement", price: "À partir de 15€" },
                    { icon: "🍷", name: "Carte des vins", description: "Sélection de vins fins", price: "À partir de 8€" },
                    { icon: "🎂", name: "Événements", description: "Organisation de vos événements", price: "Sur devis" }
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
                services: [
                    { icon: "🍕", name: "Pizzas artisanales", description: "Pâte fraîche et ingrédients premium", price: "12-18€" },
                    { icon: "🚚", name: "Livraison", description: "Livraison rapide à domicile", price: "Gratuite dès 25€" },
                    { icon: "🥘", name: "Plats italiens", description: "Pasta, risotto, antipasti", price: "8-15€" }
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
                services: [
                    { icon: "✂️", name: "Coupe", description: "Coupe personnalisée selon votre style", price: "35-50€" },
                    { icon: "🎨", name: "Coloration", description: "Couleur et balayage professionnel", price: "60-120€" },
                    { icon: "💆", name: "Soins", description: "Soins capillaires réparateurs", price: "25-40€" }
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
                services: [
                    { icon: "🔧", name: "Entretien", description: "Révision complète et vidange", price: "80-150€" },
                    { icon: "🛞", name: "Pneumatiques", description: "Montage et équilibrage", price: "20-40€" },
                    { icon: "🔍", name: "Diagnostic", description: "Contrôle technique et expertise", price: "60-90€" }
                ]
            }
        };

        return data[this.metier] || data.restaurant;
    }
}
