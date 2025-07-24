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
            },
            boulangerie: {
                name: "Boulangerie Artisanale",
                icon: "🥖",
                heroTitle: "Le goût du pain authentique",
                heroSubtitle: "Tradition et savoir-faire depuis 3 générations",
                ctaPrimary: "Commander",
                ctaSecondary: "Nos produits",
                aboutText: "Boulangerie familiale où chaque pain est façonné avec amour selon les méthodes traditionnelles françaises.",
                services: [
                    { icon: "🥖", name: "Pains artisanaux", description: "Baguettes, pains spéciaux, bio", price: "1-5€" },
                    { icon: "🥐", name: "Viennoiseries", description: "Croissants, pains au chocolat", price: "1-3€" },
                    { icon: "🎂", name: "Pâtisseries", description: "Gâteaux, tartes, éclairs", price: "3-25€" }
                ]
            },
            fleuriste: {
                name: "Fleuriste des Jardins",
                icon: "🌸",
                heroTitle: "Des fleurs pour chaque moment",
                heroSubtitle: "Créations florales artisanales pour vos événements",
                ctaPrimary: "Commander",
                ctaSecondary: "Nos bouquets",
                aboutText: "Artisan fleuriste créant des compositions uniques avec des fleurs fraîches et de saison.",
                services: [
                    { icon: "💐", name: "Bouquets", description: "Compositions personnalisées", price: "15-80€" },
                    { icon: "🌹", name: "Mariages", description: "Décoration florale complète", price: "Sur devis" },
                    { icon: "🎁", name: "Plantes", description: "Plantes d'intérieur et cadeaux", price: "5-50€" }
                ]
            },
            photographe: {
                name: "Studio Photo Pro",
                icon: "📸",
                heroTitle: "Capturez vos moments précieux",
                heroSubtitle: "Photographie professionnelle pour particuliers et entreprises",
                ctaPrimary: "Réserver",
                ctaSecondary: "Portfolio",
                aboutText: "Photographe professionnel spécialisé dans le portrait, l'événementiel et la photo corporate.",
                services: [
                    { icon: "👤", name: "Portrait", description: "Photos professionnelles", price: "100-300€" },
                    { icon: "💼", name: "Corporate", description: "Photos d'entreprise", price: "200-500€" },
                    { icon: "🎉", name: "Événements", description: "Mariages, anniversaires", price: "500-1500€" }
                ]
            },
            plombier: {
                name: "Plombier Express",
                icon: "🚿",
                heroTitle: "Intervention rapide 24/7",
                heroSubtitle: "Dépannage plomberie et installation sanitaire",
                ctaPrimary: "Urgence",
                ctaSecondary: "Devis gratuit",
                aboutText: "Plombier qualifié intervenant rapidement pour tous vos problèmes de plomberie et chauffage.",
                services: [
                    { icon: "🔧", name: "Dépannage", description: "Fuite, bouchon, réparation", price: "80-150€" },
                    { icon: "🚿", name: "Installation", description: "Salle de bain, cuisine", price: "200-1000€" },
                    { icon: "🔍", name: "Diagnostic", description: "Recherche de fuite", price: "120€" }
                ]
            },
            electricien: {
                name: "Électricien Pro",
                icon: "⚡",
                heroTitle: "Sécurité électrique garantie",
                heroSubtitle: "Installation et dépannage électrique certifié",
                ctaPrimary: "Devis gratuit",
                ctaSecondary: "Nos services",
                aboutText: "Électricien certifié pour tous travaux d'installation, rénovation et mise aux normes.",
                services: [
                    { icon: "🔌", name: "Installation", description: "Tableau, prises, éclairage", price: "150-500€" },
                    { icon: "⚡", name: "Dépannage", description: "Court-circuit, panne", price: "100-200€" },
                    { icon: "📋", name: "Mise aux normes", description: "Conformité électrique", price: "Sur devis" }
                ]
            },
            cafe: {
                name: "Café des Arts",
                icon: "☕",
                heroTitle: "Pause café gourmande",
                heroSubtitle: "Cafés de spécialité et pâtisseries maison",
                ctaPrimary: "Commander",
                ctaSecondary: "La carte",
                aboutText: "Café artisanal proposant des cafés de qualité et des pâtisseries faites maison dans un cadre chaleureux.",
                services: [
                    { icon: "☕", name: "Cafés spéciaux", description: "Espresso, cappuccino, cold brew", price: "2-5€" },
                    { icon: "🥐", name: "Brunch", description: "Formules brunch week-end", price: "12-18€" },
                    { icon: "🍰", name: "Pâtisseries", description: "Gâteaux faits maison", price: "3-6€" }
                ]
            },
            bar: {
                name: "Bar Le Mixologue",
                icon: "🍹",
                heroTitle: "Cocktails d'exception",
                heroSubtitle: "Ambiance cosy et boissons artisanales",
                ctaPrimary: "Réserver",
                ctaSecondary: "Carte des cocktails",
                aboutText: "Bar à cocktails créatif proposant des créations uniques dans une ambiance intimiste et chaleureuse.",
                services: [
                    { icon: "🍸", name: "Cocktails signature", description: "Créations maison", price: "8-12€" },
                    { icon: "🍷", name: "Happy hour", description: "De 18h à 20h", price: "5-8€" },
                    { icon: "🎵", name: "Soirées", description: "DJ et événements", price: "Entrée libre" }
                ]
            },
            "boutique-chaussures": {
                name: "Shoes Gallery",
                icon: "👟",
                heroTitle: "Chaussures tendance",
                heroSubtitle: "Collection exclusive pour toute la famille",
                ctaPrimary: "Acheter",
                ctaSecondary: "Nouveautés",
                aboutText: "Boutique spécialisée en chaussures tendance avec une sélection pointue des meilleures marques.",
                services: [
                    { icon: "👟", name: "Sneakers", description: "Marques premium et streetwear", price: "50-200€" },
                    { icon: "👞", name: "Chaussures ville", description: "Classiques et élégants", price: "80-300€" },
                    { icon: "👢", name: "Accessoires", description: "Chaussettes, entretien", price: "5-30€" }
                ]
            },
            "vape-shop": {
                name: "Vape Store",
                icon: "💨",
                heroTitle: "Vape de qualité",
                heroSubtitle: "Cigarettes électroniques et e-liquides premium",
                ctaPrimary: "Acheter",
                ctaSecondary: "Conseils",
                aboutText: "Spécialiste vape avec conseils personnalisés et produits de qualité pour vapoteurs débutants ou confirmés.",
                services: [
                    { icon: "💨", name: "Kits débutants", description: "Packs complets", price: "30-80€" },
                    { icon: "🧪", name: "E-liquides", description: "Grands marques et saveurs", price: "5-20€" },
                    { icon: "🔧", name: "Coaching", description: "Conseils et réglages", price: "Gratuit" }
                ]
            },
            onglerie: {
                name: "Nail Art Studio",
                icon: "💅",
                heroTitle: "Beauté des mains",
                heroSubtitle: "Manucure et nail art professionnel",
                ctaPrimary: "Prendre RDV",
                ctaSecondary: "Nos prestations",
                aboutText: "Studio de beauté spécialisé en manucure, pose de vernis et nail art créatif.",
                services: [
                    { icon: "💅", name: "Manucure", description: "Soin complet des mains", price: "25-40€" },
                    { icon: "✨", name: "Pose gel", description: "Vernis semi-permanent", price: "35-50€" },
                    { icon: "🎨", name: "Nail art", description: "Décorations personnalisées", price: "5-20€" }
                ]
            },
            "accessoires-mode": {
                name: "Fashion Accessories",
                icon: "👜",
                heroTitle: "Accessoires tendance",
                heroSubtitle: "Sacs, bijoux et accessoires mode",
                ctaPrimary: "Acheter",
                ctaSecondary: "Collections",
                aboutText: "Boutique d'accessoires mode proposant une sélection pointue de sacs, bijoux et accessoires tendance.",
                services: [
                    { icon: "👜", name: "Sacs", description: "Sacs à main et accessoires", price: "30-150€" },
                    { icon: "💍", name: "Bijoux", description: "Bijoux fantaisie et argent", price: "10-80€" },
                    { icon: "🧣", name: "Accessoires", description: "Écharpes, ceintures", price: "15-50€" }
                ]
            },
            "accessoires-maison": {
                name: "Home Décor",
                icon: "🏠",
                heroTitle: "Déco intérieure",
                heroSubtitle: "Accessoires et décoration pour la maison",
                ctaPrimary: "Acheter",
                ctaSecondary: "Nouveautés",
                aboutText: "Boutique de décoration intérieure avec des accessoires uniques pour personnaliser votre intérieur.",
                services: [
                    { icon: "🕯️", name: "Décoration", description: "Bougies, vases, cadres", price: "10-60€" },
                    { icon: "🪴", name: "Plantes", description: "Plantes et pots décoratifs", price: "15-80€" },
                    { icon: "🛋️", name: "Textiles", description: "Coussins, plaids, rideaux", price: "20-100€" }
                ]
            },
            cordonnier: {
                name: "Artisan Cordonnier",
                icon: "👞",
                heroTitle: "Réparation chaussures",
                heroSubtitle: "Entretien et réparation de qualité",
                ctaPrimary: "Déposer",
                ctaSecondary: "Nos services",
                aboutText: "Cordonnier artisanal proposant réparation, entretien et personnalisation de chaussures avec savoir-faire traditionnel.",
                services: [
                    { icon: "👞", name: "Réparation", description: "Semelles, talons, fermetures", price: "15-50€" },
                    { icon: "✨", name: "Entretien", description: "Nettoyage et cirage", price: "10-25€" },
                    { icon: "🎨", name: "Personnalisation", description: "Teinture et customisation", price: "20-60€" }
                ]
            }
        };

        return data[this.metier] || data.restaurant;
    }
}
