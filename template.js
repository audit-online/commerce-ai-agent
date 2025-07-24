<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Générateur Templates Métier Pro</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
</head>
<body>
    <!-- PHASE 1: Sélection métier -->
    <div id="phase1" class="phase active">
        <div class="container">
            <h1>🎯 Générateur Templates Métier Pro</h1>
            <p class="subtitle">Choisissez votre secteur d'activité</p>
            
            <div class="metier-grid">
                <div class="metier-card" data-metier="restaurant">
                    <div class="metier-icon">🍽️</div>
                    <h3>Restaurant</h3>
                    <p>Gastronomie & Restauration</p>
                </div>
                <div class="metier-card" data-metier="pizzeria">
                    <div class="metier-icon">🍕</div>
                    <h3>Pizzeria</h3>
                    <p>Pizza & Fast Food</p>
                </div>
                <div class="metier-card" data-metier="coiffeur">
                    <div class="metier-icon">✂️</div>
                    <h3>Coiffeur</h3>
                    <p>Beauté & Coiffure</p>
                </div>
                <div class="metier-card" data-metier="garage">
                    <div class="metier-icon">🔧</div>
                    <h3>Garage</h3>
                    <p>Automobile & Mécanique</p>
                </div>
                <div class="metier-card" data-metier="boutique">
                    <div class="metier-icon">👕</div>
                    <h3>Boutique</h3>
                    <p>Mode & Vêtements</p>
                </div>
                <div class="metier-card" data-metier="institut">
                    <div class="metier-icon">💆</div>
                    <h3>Institut</h3>
                    <p>Beauté & Bien-être</p>
                </div>
                <div class="metier-card" data-metier="boulangerie">
                    <div class="metier-icon">🥖</div>
                    <h3>Boulangerie</h3>
                    <p>Pain & Pâtisserie</p>
                </div>
                <div class="metier-card" data-metier="pharmacie">
                    <div class="metier-icon">💊</div>
                    <h3>Pharmacie</h3>
                    <p>Santé & Médicaments</p>
                </div>
                <div class="metier-card" data-metier="pressing">
                    <div class="metier-icon">👔</div>
                    <h3>Pressing</h3>
                    <p>Nettoyage & Repassage</p>
                </div>
                <div class="metier-card" data-metier="opticien">
                    <div class="metier-icon">👓</div>
                    <h3>Opticien</h3>
                    <p>Lunettes & Vision</p>
                </div>
                <div class="metier-card" data-metier="fleuriste">
                    <div class="metier-icon">🌸</div>
                    <h3>Fleuriste</h3>
                    <p>Fleurs & Jardinage</p>
                </div>
                <div class="metier-card" data-metier="dentiste">
                    <div class="metier-icon">🦷</div>
                    <h3>Dentiste</h3>
                    <p>Soins Dentaires</p>
                </div>
            </div>
        </div>
    </div>

    <!-- PHASE 2: Plans tarifaires -->
    <div id="phase2" class="phase">
        <div class="container">
            <h2>💎 Choisissez votre plan</h2>
            <div class="back-btn" onclick="showPhase('phase1')">← Retour</div>
            
            <div class="plans-grid">
                <div class="plan-card basic" data-plan="basic">
                    <div class="plan-badge">BASIC</div>
                    <div class="plan-price">39€</div>
                    <div class="plan-features">
                        <div class="included">✅ 5 options incluses</div>
                        <div class="choice">🎯 3 options au choix</div>
                    </div>
                    <button class="plan-btn">Choisir Basic</button>
                </div>
                
                <div class="plan-card premium popular" data-plan="premium">
                    <div class="plan-badge">PREMIUM</div>
                    <div class="popular-tag">POPULAIRE</div>
                    <div class="plan-price">79€</div>
                    <div class="plan-features">
                        <div class="included">✅ 10 options incluses</div>
                        <div class="choice">🎯 5 options au choix</div>
                    </div>
                    <button class="plan-btn">Choisir Premium</button>
                </div>
                
                <div class="plan-card pro" data-plan="pro">
                    <div class="plan-badge">PRO</div>
                    <div class="plan-price">129€</div>
                    <div class="plan-features">
                        <div class="included">✅ TOUTES options incluses</div>
                        <div class="choice">🚀 Accès complet</div>
                    </div>
                    <button class="plan-btn">Choisir Pro</button>
                </div>
            </div>
        </div>
    </div>

    <!-- PHASE 3: Configuration -->
    <div id="phase3" class="phase">
        <div class="container">
            <h2>⚙️ Configuration</h2>
            <div class="back-btn" onclick="showPhase('phase2')">← Retour</div>
            
            <div class="config-section">
                <h3>Options disponibles pour votre plan <span id="current-plan"></span></h3>
                <div id="options-container"></div>
            </div>
            
            <button id="generate-btn" class="generate-btn">🚀 Générer le Template</button>
        </div>
    </div>

    <!-- PHASE 4: Résultat -->
    <div id="phase4" class="phase">
        <div class="container">
            <div class="result-header">
                <h2>🎉 Votre Template</h2>
                <div class="back-btn" onclick="showPhase('phase3')">← Retour</div>
            </div>
            
            <div class="result-actions">
                <button id="preview-btn" class="action-btn primary">👁️ Aperçu</button>
                <button id="download-btn" class="action-btn">📥 Télécharger</button>
                <button id="new-template-btn" class="action-btn">🔄 Nouveau Template</button>
            </div>
            
            <div id="template-container"></div>
        </div>
    </div>

    <!-- Modal Preview -->
    <div id="preview-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>👁️ Aperçu Template</h3>
                <span class="close-modal">&times;</span>
            </div>
            <div id="preview-content"></div>
        </div>
    </div>

    <script>
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
        
        // Header avec logo et navigation
        template.appendChild(this.createHeader());
        
        // Hero section
        template.appendChild(this.createHero());
        
        // Services/Produits
        if (options.includes('services')) {
            template.appendChild(this.createServices());
        }
        
        // À propos
        if (options.includes('about')) {
            template.appendChild(this.createAbout());
        }
        
        // Contact
        template.appendChild(this.createContact());
        
        // Footer
        template.appendChild(this.createFooter());

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
                            <div class="stat">
                                <div class="stat-number">24/7</div>
                                <div class="stat-label">Service client</div>
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
                        <div class="contact-item">
                            <span class="contact-icon">✉️</span>
                            <div>
                                <h4>Email</h4>
                                <p>contact@exemple.fr</p>
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

    createFooter() {
        const footer = document.createElement('footer');
        footer.className = 'template-footer';
        
        const data = this.getMetierData();
        footer.innerHTML = `
            <div class="footer-container">
                <div class="footer-brand">
                    <span class="logo-icon">${data.icon}</span>
                    <span class="logo-text">${data.name}</span>
                </div>
                <div class="footer-links">
                    <a href="#accueil">Accueil</a>
                    <a href="#services">Services</a>
                    <a href="#about">À propos</a>
                    <a href="#contact">Contact</a>
                </div>
                <div class="footer-social">
                    <a href="#" class="social-link">📘</a>
                    <a href="#" class="social-link">📷</a>
                    <a href="#" class="social-link">🐦</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 ${data.name}. Tous droits réservés.</p>
            </div>
        `;
        
        return footer;
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
                aboutText: "Notre équipe de professionnels vous accompagne pour créer le look qui vous ressemble, dans une ambiance détendue et moderne.",
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
                aboutText: "Garage familial spécialisé dans l'entretien et la réparation de tous types de véhicules. Équipe certifiée et matériel de pointe.",
                services: [
                    { icon: "🔧", name: "Entretien", description: "Révision complète et vidange", price: "80-150€" },
                    { icon: "🛞", name: "Pneumatiques", description: "Montage et équilibrage", price: "20-40€" },
                    { icon: "🔍", name: "Diagnostic", description: "Contrôle technique et expertise", price: "60-90€" }
                ]
            },
            boutique: {
                name: "Boutique Tendance",
                icon: "👕",
                heroTitle: "Mode & Style",
                heroSubtitle: "Les dernières tendances à prix doux",
                ctaPrimary: "Découvrir",
                ctaSecondary: "Nouveautés",
                aboutText: "Boutique de mode proposant une sélection soignée de vêtements et accessoires pour homme et femme, alliant style et qualité.",
                services: [
                    { icon: "👕", name: "Prêt-à-porter", description: "Collection homme et femme", price: "À partir de 25€" },
                    { icon: "👜", name: "Accessoires", description: "Sacs, bijoux, ceintures", price: "À partir de 15€" },
                    { icon: "🎁", name: "Personal shopping", description: "Conseil personnalisé", price: "Gratuit" }
                ]
            },
            institut: {
                name: "Institut Beauté Divine",
                icon: "💆",
                heroTitle: "Votre havre de beauté",
                heroSubtitle: "Soins visage et corps dans un cadre relaxant",
                ctaPrimary: "Réserver",
                ctaSecondary: "Nos soins",
                aboutText: "Institut de beauté moderne proposant une gamme complète de soins esthétiques dans un environnement zen et professionnel.",
                services: [
                    { icon: "💆", name: "Soins visage", description: "Nettoyage, hydratation, anti-âge", price: "45-80€" },
                    { icon: "💅", name: "Manucure", description: "Pose de vernis, nail art", price: "25-45€" },
                    { icon: "🧖", name: "Épilation", description: "Épilation à la cire ou laser", price: "15-60€" }
                ]
            },
            boulangerie: {
                name: "Boulangerie du Village",
                icon: "🥖",
                heroTitle: "Le goût de l'authentique",
                heroSubtitle: "Pain frais et pâtisseries artisanales chaque jour",
                ctaPrimary: "Nos produits",
                ctaSecondary: "Commander",
                aboutText: "Boulangerie artisanale perpétuant la tradition française avec des produits frais préparés chaque matin selon des recettes ancestrales.",
                services: [
                    { icon: "🥖", name: "Boulangerie", description: "Pain traditionnel et spéciaux", price: "1-5€" },
                    { icon: "🥐", name: "Viennoiserie", description: "Croissants, pains au chocolat", price: "1-3€" },
                    { icon: "🎂", name: "Pâtisserie", description: "Gâteaux et desserts maison", price: "3-15€" }
                ]
            },
            pharmacie: {
                name: "Pharmacie Centrale",
                icon: "💊",
                heroTitle: "Votre santé, notre priorité",
                heroSubtitle: "Conseil personnalisé et services de proximité",
                ctaPrimary: "Nous contacter",
                ctaSecondary: "Services",
                aboutText: "Pharmacie de quartier offrant conseils pharmaceutiques, parapharmacie et services de santé dans un cadre moderne et accueillant.",
                services: [
                    { icon: "💊", name: "Médicaments", description: "Ordonnances et conseil", price: "Variable" },
                    { icon: "🧴", name: "Parapharmacie", description: "Cosmétiques et bien-être", price: "Variable" },
                    { icon: "💉", name: "Services", description: "Vaccinations, tests", price: "Sur RDV" }
                ]
            },
            pressing: {
                name: "Pressing Premium",
                icon: "👔",
                heroTitle: "Excellence du nettoyage",
                heroSubtitle: "Nettoyage à sec et pressing de qualité",
                ctaPrimary: "Nos tarifs",
                ctaSecondary: "Services",
                aboutText: "Pressing moderne utilisant des techniques écologiques pour l'entretien de vos vêtements avec un service rapide et soigné.",
                services: [
                    { icon: "👔", name: "Nettoyage à sec", description: "Vestes, robes, manteaux", price: "8-25€" },
                    { icon: "👕", name: "Repassage", description: "Chemises, pantalons", price: "3-8€" },
                    { icon: "🏠", name: "Service à domicile", description: "Collecte et livraison", price: "+5€" }
                ]
            },
            opticien: {
                name: "Optique Vision",
                icon: "👓",
                heroTitle: "Votre vision, notre expertise",
                heroSubtitle: "Lunettes, lentilles et examens de vue",
                ctaPrimary: "Prendre RDV",
                ctaSecondary: "Collections",
                aboutText: "Opticien diplômé proposant un large choix de montures et verres adaptés à tous les budgets avec un service personnalisé.",
                services: [
                    { icon: "👓", name: "Lunettes", description: "Montures et verres sur mesure", price: "À partir de 89€" },
                    { icon: "👁️", name: "Examen de vue", description: "Contrôle et dépistage", price: "25€" },
                    { icon: "🔍", name: "Lentilles", description: "Adaptation et suivi", price: "À partir de 15€" }
                ]
            },
            fleuriste: {
                name: "Fleurs & Jardins",
                icon: "🌸",
                heroTitle: "L'art floral à votre service",
                heroSubtitle: "Compositions florales et plantes d'exception",
                ctaPrimary: "Commander",
                ctaSecondary: "Créations",
                aboutText: "Fleuriste créateur proposant des compositions originales pour tous vos événements avec des fleurs fraîches sélectionnées.",
                services: [
                    { icon: "💐", name: "Bouquets", description: "Compositions sur mesure", price: "À partir de 25€" },
                    { icon: "🌱", name: "Plantes", description: "Plantes d'intérieur et extérieur", price: "À partir de 10€" },
                    { icon: "💒", name: "Événements", description: "Mariages, funérailles", price: "Sur devis" }
                ]
            },
            dentiste: {
                name: "Cabinet Dentaire Sourire",
                icon: "🦷",
                heroTitle: "Pour un sourire éclatant",
                heroSubtitle: "Soins dentaires modernes dans un cadre bienveillant",
                ctaPrimary: "Prendre RDV",
                ctaSecondary: "Nos soins",
                aboutText: "Cabinet dentaire moderne offrant tous les soins dentaires avec les dernières technologies dans un environnement rassurant.",
                services: [
                    { icon: "🦷", name: "Soins généraux", description: "Détartrage, caries, contrôles", price: "25-80€" },
                    { icon: "✨", name: "Esthétique", description: "Blanchiment, facettes", price: "200-500€" },
                    { icon: "🔧", name: "Orthodontie", description: "Appareils et aligneurs", price: "Sur devis" }
                ]
            }
        };

        return data[this.metier] || data.restaurant;
    }
}

// ============================================
// MAIN.JS - Logique principale
// ============================================

class App {
    constructor() {
        this.currentMetier = null;
        this.currentPlan = null;
        this.selectedOptions = [];
        this.templateGenerator = new TemplateGenerator();
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.showPhase('phase1');
    }

    bindEvents() {
        // Sélection métier
        document.querySelectorAll('.metier-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.selectMetier(card.dataset.metier);
            });
        });

        // Sélection plan
        document.querySelectorAll('.plan-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.selectPlan(card.dataset.plan);
            });
        });

        // Génération template
        document.getElementById('generate-btn').addEventListener('click', () => {
            this.generateTemplate();
        });

        // Actions résultat
        document.getElementById('preview-btn').addEventListener('click', () => {
            this.showPreview();
        });

        document.getElementById('download-btn').addEventListener('click', () => {
            this.downloadTemplate();
        });

        document.getElementById('new-template-btn').addEventListener('click', () => {
            this.resetApp();
        });

        // Modal preview
        document.querySelector('.close-modal').addEventListener('click', () => {
            this.closePreview();
        });

        document.getElementById('preview-modal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('preview-modal')) {
                this.closePreview();
            }
        });
    }

    selectMetier(metier) {
        this.currentMetier = metier;
        document.querySelectorAll('.metier-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector(`[data-metier="${metier}"]`).classList.add('selected');
        
        setTimeout(() => {
            this.showPhase('phase2');
        }, 300);
    }

    selectPlan(plan) {
        this.currentPlan = plan;
        document.querySelectorAll('.plan-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector(`[data-plan="${plan}"]`).classList.add('selected');
        
        setTimeout(() => {
            this.setupConfiguration();
            this.showPhase('phase3');
        }, 300);
    }

    setupConfiguration() {
        const planInfo = document.getElementById('current-plan');
        planInfo.textContent = this.currentPlan.toUpperCase();

        const container = document.getElementById('options-container');
        const options = this.getAvailableOptions();
        
        container.innerHTML = options.map(option => `
            <div class="option-card ${option.included ? 'included' : 'optional'}">
                <div class="option-header">
                    <span class="option-icon">${option.icon}</span>
                    <span class="option-name">${option.name}</span>
                    <span class="option-status">${option.included ? '✅ Inclus' : '🎯 Au choix'}</span>
                </div>
                <p class="option-description">${option.description}</p>
                ${!option.included ? `
                    <label class="option-toggle">
                        <input type="checkbox" data-option="${option.id}">
                        <span class="toggle-slider"></span>
                    </label>
                ` : ''}
            </div>
        `).join('');

        // Auto-sélection des options incluses
        this.selectedOptions = options.filter(opt => opt.included).map(opt => opt.id);

        // Event listeners pour les options au choix
        container.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const optionId = e.target.dataset.option;
                if (e.target.checked) {
                    this.selectedOptions.push(optionId);
                } else {
                    this.selectedOptions = this.selectedOptions.filter(id => id !== optionId);
                }
            });
        });
    }

    getAvailableOptions() {
        const allOptions = [
            { id: 'header', name: 'Header', icon: '🎯', description: 'Navigation et logo professionnel', included: true },
            { id: 'hero', name: 'Section Hero', icon: '🌟', description: 'Bannière d\'accueil impactante', included: true },
            { id: 'services', name: 'Services', icon: '🛠️', description: 'Présentation de vos services', included: true },
            { id: 'about', name: 'À propos', icon: '👥', description: 'Présentation de votre entreprise', included: true },
            { id: 'contact', name: 'Contact', icon: '📞', description: 'Formulaire et coordonnées', included: true },
            { id: 'gallery', name: 'Galerie', icon: '📸', description: 'Photos de vos réalisations', included: false },
            { id: 'testimonials', name: 'Témoignages', icon: '💬', description: 'Avis clients', included: false },
            { id: 'pricing', name: 'Tarifs', icon: '💰', description: 'Grille tarifaire', included: false },
            { id: 'blog', name: 'Blog', icon: '📝', description: 'Articles et actualités', included: false },
            { id: 'booking', name: 'Réservation', icon: '📅', description: 'Système de prise de RDV', included: false },
            { id: 'map', name: 'Carte', icon: '🗺️', description: 'Localisation interactive', included: false },
            { id: 'social', name: 'Réseaux sociaux', icon: '📱', description: 'Intégration réseaux sociaux', included: false }
        ];

        // Configuration selon le plan
        const planConfig = {
            basic: { included: 5, choice: 3 },
            premium: { included: 10, choice: 5 },
            pro: { included: 12, choice: 0 }
        };

        const config = planConfig[this.currentPlan];
        
        // Marquer les options incluses selon le plan
        return allOptions.map((option, index) => ({
            ...option,
            included: this.currentPlan === 'pro' || index < config.included
        }));
    }

    generateTemplate() {
        if (this.selectedOptions.length === 0) {
            alert('Veuillez sélectionner au moins une option');
            return;
        }

        const template = this.templateGenerator.generate(
            this.currentMetier,
            this.currentPlan,
            this.selectedOptions
        );

        document.getElementById('template-container').innerHTML = '';
        document.getElementById('template-container').appendChild(template);
        
        this.showPhase('phase4');
    }

    showPreview() {
        const templateContent = document.getElementById('template-container').innerHTML;
        document.getElementById('preview-content').innerHTML = templateContent;
        document.getElementById('preview-modal').classList.add('active');
    }

    closePreview() {
        document.getElementById('preview-modal').classList.remove('active');
    }

    downloadTemplate() {
        const templateContent = document.getElementById('template-container').innerHTML;
        const fullHTML = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${this.currentMetier.charAt(0).toUpperCase() + this.currentMetier.slice(1)}</title>
    <style>
        /* CSS sera ajouté ici */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; }
        .template-preview { width: 100%; }
        /* Styles basiques pour le template */
    </style>
</head>
<body>
    ${templateContent}
</body>
</html>`;

        const blob = new Blob([fullHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `template-${this.currentMetier}-${Date.now()}.html`;
        a.click();
        URL.revokeObjectURL(url);
    }

    resetApp() {
        this.currentMetier = null;
        this.currentPlan = null;
        this.selectedOptions = [];
        
        document.querySelectorAll('.selected').forEach(el => {
            el.classList.remove('selected');
        });
        
        this.showPhase('phase1');
    }

    showPhase(phaseId) {
        document.querySelectorAll('.phase').forEach(phase => {
            phase.classList.remove('active');
        });
        
        document.getElementById(phaseId).classList.add('active');
    }
}

// Fonctions globales pour les boutons de navigation
function showPhase(phaseId) {
    app.showPhase(phaseId);
}

// Initialisation de l'application
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new App();
});

    </script>

    <style>
/* ============================================
   STYLES.CSS - Design moderne et responsive
   ============================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

/* ============================================
   PHASES ET NAVIGATION
   ============================================ */

.phase {
    display: none;
    min-height: 100vh;
    padding: 2rem 0;
}

.phase.active {
    display: block;
    animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.back-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 2rem;
}

.back-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-5px);
}

/* ============================================
   TITRES ET TEXTES
   ============================================ */

h1, h2, h3 {
    margin-bottom: 1rem;
}

h1 {
    font-size: 3rem;
    font-weight: 700;
    color: white;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

h2 {
    font-size: 2.5rem;
    color: white;
    text-align: center;
    margin-bottom: 3rem;
}

.subtitle {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    margin-bottom: 3rem;
}

/* ============================================
   PHASE 1 - SÉLECTION MÉTIER
   ============================================ */

.metier-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.metier-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.metier-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 0.5s;
}

.metier-card:hover::before {
    left: 100%;
}

.metier-card:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.metier-card.selected {
    background: rgba(255, 255, 255, 0.2);
    border-color: #4CAF50;
    transform: scale(1.05);
}

.metier-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
}

.metier-card h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.metier-card p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

/* ============================================
   PHASE 2 - PLANS TARIFAIRES
   ============================================ */

.plans-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.plan-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    padding: 2.5rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.plan-card.popular {
    border-color: #FFD700;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
}

.popular-tag {
    position: absolute;
    top: -10px;
    right: 20px;
    background: #FFD700;
    color: #333;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: bold;
}

.plan-card:hover {
    transform: translateY(-15px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 25px 50px rgba(0,0,0,0.25);
}

.plan-card.selected {
    background: rgba(255, 255, 255, 0.2);
    border-color: #4CAF50;
    transform: scale(1.05);
}

.plan-badge {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    font-weight: bold;
    margin-bottom: 1rem;
    display: inline-block;
}

.plan-price {
    font-size: 3rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1.5rem;
}

.plan-features {
    margin-bottom: 2rem;
}

.plan-features div {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.plan-btn {
    background: linear-gradient(45deg, #4CAF50, #45a049);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 25px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
}

.plan-btn:hover {
    background: linear-gradient(45deg, #45a049, #4CAF50);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(76, 175, 80, 0.3);
}

/* ============================================
   PHASE 3 - CONFIGURATION
   ============================================ */

.config-section {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border-radius: 25px;
    padding: 2rem;
    margin-bottom: 2rem;
}

.config-section h3 {
    color: white;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.5rem;
}

#options-container {
    display: grid;
    gap: 1rem;
}

.option-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    padding: 1.5rem;
    transition: all 0.3s ease;
}

.option-card.included {
    border-color: #4CAF50;
    background: rgba(76, 175, 80, 0.1);
}

.option-card.optional:hover {
    background: rgba(255, 255, 255, 0.1);
}

.option-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
}

.option-icon {
    font-size: 1.5rem;
}

.option-name {
    font-weight: bold;
    color: white;
    flex-grow: 1;
}

.option-status {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
}

.option-description {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1rem;
}

.option-toggle {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.option-toggle input {
    display: none;
}

.toggle-slider {
    width: 50px;
    height: 25px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 25px;
    position: relative;
    transition: all 0.3s ease;
}

.toggle-slider::before {
    content: '';
    position: absolute;
    width: 21px;
    height: 21px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: all 0.3s ease;
}

.option-toggle input:checked + .toggle-slider {
    background: #4CAF50;
}

.option-toggle input:checked + .toggle-slider::before {
    transform: translateX(25px);
}

.generate-btn {
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    color: white;
    border: none;
    padding: 1.5rem 3rem;
    border-radius: 30px;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    display: block;
    margin: 2rem auto 0;
    box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
}

.generate-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(255, 107, 107, 0.4);
}

/* ============================================
   PHASE 4 - RÉSULTAT
   ============================================ */

.result-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.result-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.action-btn {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 1rem 2rem;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.action-btn.primary {
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-color: transparent;
}

.action-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

#template-container {
    background: white;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    overflow: hidden;
}

/* ============================================
   MODAL PREVIEW
   ============================================ */

.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(5px);
}

.modal.active {
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
}

.modal-content {
    background: white;
    border-radius: 15px;
    width: 90%;
    max-width: 1200px;
    max-height: 90%;
    overflow: auto;
    position: relative;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #eee;
    background: #f8f9fa;
    border-radius: 15px 15px 0 0;
}

.close-modal {
    font-size: 2rem;
    cursor: pointer;
    color: #666;
    transition: color 0.3s ease;
}

.close-modal:hover {
    color: #333;
}

#preview-content {
    padding: 2rem;
}

/* ============================================
   STYLES POUR LES TEMPLATES GÉNÉRÉS
   ============================================ */

.template-preview {
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.6;
    color: #333;
}

.template-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
}

.logo-icon {
    font-size: 2rem;
}

.nav {
    display: flex;
    gap: 2rem;
}

.nav a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s ease;
}

.nav a:hover {
    opacity: 0.8;
}

.template-hero {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
    color: white;
    padding: 5rem 0;
    display: flex;
    align-items: center;
    min-height: 70vh;
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    padding: 0 2rem;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
}

.btn-primary, .btn-secondary {
    padding: 1rem 2rem;
    border: none;
    border-radius: 25px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary {
    background: #4CAF50;
    color: white;
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-primary:hover, .btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.hero-image {
    text-align: center;
}

.hero-placeholder {
    font-size: 8rem;
    opacity: 0.7;
}

.template-services, .template-about, .template-contact {
    padding: 5rem 0;
}

.template-services {
    background: #f8f9fa;
}

.section-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #333;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-card {
    background: white;
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
}

.service-card p {
    color: #666;
    margin-bottom: 1rem;
}

.service-price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #4CAF50;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}

.stat {
    text-align: center;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #4CAF50;
    margin-bottom: 0.5rem;
}

.stat-label {
    color: #666;
}

.about-image, .image-placeholder {
    text-align: center;
    font-size: 6rem;
    color: #ddd;
}

.template-contact {
    background: #f8f9fa;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}

.contact-icon {
    font-size: 1.5rem;
}

.contact-item h4 {
    color: #333;
    margin-bottom: 0.5rem;
}

.contact-item p {
    color: #666;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-input, .form-textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: #4CAF50;
}

.form-textarea {
    height: 120px;
    resize: vertical;
}

.btn-primary.full {
    width: 100%;
}

.template-footer {
    background: #333;
    color: white;
    padding: 3rem 0 1rem;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    align-items: center;
}

.footer-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.3rem;
    font-weight: bold;
}

.footer-links {
    display: flex;
    gap: 2rem;
    justify-content: center;
}

.footer-links a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s ease;
}

.footer-links a:hover {
    opacity: 0.8;
}

.footer-social {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}

.social-link {
    font-size: 1.5rem;
    text-decoration: none;
    transition: transform 0.3s ease;
}

.social-link:hover {
    transform: scale(1.2);
}

.footer-bottom {
    border-top: 1px solid #555;
    margin-top: 2rem;
    padding-top: 1rem;
    text-align: center;
    color: #999;
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */

@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    h2 {
        font-size: 1.8rem;
    }
    
    .metier-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .plans-grid {
        grid-template-columns: 1fr;
    }
    
    .result-header {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    .result-actions {
        flex-direction: column;
        align-items: center;
    }
    
    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
    }
    
    .stats {
        grid-template-columns: 1fr;
    }
    
    .footer-container {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 1rem;
    }
    
    .footer-links {
        justify-content: center;
    }
    
    .footer-social {
        justify-content: center;
    }
    
    .nav {
        display: none;
    }
}

/* ============================================
   ANIMATIONS SUPPLÉMENTAIRES
   ============================================ */

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.generate-btn:hover {
    animation: pulse 2s infinite;
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.service-card, .option-card {
    animation: slideInUp 0.6s ease forwards;
}

.service-card:nth-child(2) {
    animation-delay: 0.2s;
}

.service-card:nth-child(3) {
    animation-delay: 0.4s;
}
    </style>
</body>
</html>
