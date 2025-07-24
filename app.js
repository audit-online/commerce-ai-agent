// 🤖 AGENT IA COMMERCE - VERSION CORRIGÉE ET SIMPLIFIÉE
// Cette version utilise du JavaScript vanilla pour éviter les problèmes de chargement

// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    console.log('🤖 Initialisation de l\'Agent IA...');
    
    // Vérifier que tous les éléments sont présents
    const rootElement = document.getElementById('root');
    if (!rootElement) {
        console.error('Element #root introuvable !');
        return;
    }

    // État de l'application
    let appState = {
        currentPhase: 'analysis',
        businessData: {
            type: '',
            subCategory: '',
            size: '',
            clientele: '',
            budget: ''
        },
        templateCustomization: {
            primaryColor: '#3B82F6',
            secondaryColor: '#10B981',
            businessName: '',
            slogan: ''
        }
    };

    // Fonction pour créer l'interface d'analyse
    function createAnalysisInterface() {
        return `
            <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-8">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">
                            🤖 Agent IA - Templates & Applications Commerce
                        </h1>
                        <p class="text-xl text-gray-600">
                            Phase 1 : Analyse du prospect et génération du template métier personnalisable
                        </p>
                    </div>
                    
                    <div class="bg-white rounded-2xl shadow-xl p-8">
                        <h2 class="text-2xl font-bold mb-6 flex items-center">
                            🏪 Analyse du Prospect
                        </h2>
                        
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium mb-2">Type de métier</label>
                                <select id="businessType" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                    <option value="">Sélectionner le métier</option>
                                    <option value="restaurant">Restauration</option>
                                    <option value="commerce">Commerce de détail</option>
                                    <option value="beaute">Services Beauté/Bien-être</option>
                                    <option value="technique">Services Techniques</option>
                                    <option value="local">Services Locaux</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium mb-2">Sous-catégorie</label>
                                <input 
                                    type="text" 
                                    id="subCategory"
                                    placeholder="Ex: Pizzeria, Boutique vêtements, Coiffeur..."
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium mb-2">Taille du commerce</label>
                                <select id="businessSize" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                    <option value="">Sélectionner la taille</option>
                                    <option value="petit">Petit (1-5 employés)</option>
                                    <option value="moyen">Moyen (6-20 employés)</option>
                                    <option value="grand">Grand (20+ employés)</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium mb-2">Clientèle cible</label>
                                <select id="clientele" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                    <option value="">Sélectionner la clientèle</option>
                                    <option value="locale">Locale</option>
                                    <option value="touristique">Touristique</option>
                                    <option value="jeune">Jeune (18-35 ans)</option>
                                    <option value="famille">Famille</option>
                                    <option value="pro">Professionnels</option>
                                </select>
                            </div>
                            
                            <div class="md:col-span-2">
                                <label class="block text-sm font-medium mb-2">Budget approximatif</label>
                                <div class="grid grid-cols-3 gap-4">
                                    <button onclick="selectBudget('basic')" id="budget-basic" class="budget-btn p-4 border-2 rounded-lg text-center transition-all border-gray-300 hover:border-gray-400">
                                        <div class="font-semibold text-sm uppercase">BASIC</div>
                                        <div class="text-xs text-gray-600 mt-1">49-79€/mois</div>
                                    </button>
                                    <button onclick="selectBudget('premium')" id="budget-premium" class="budget-btn p-4 border-2 rounded-lg text-center transition-all border-gray-300 hover:border-gray-400">
                                        <div class="font-semibold text-sm uppercase">PREMIUM</div>
                                        <div class="text-xs text-gray-600 mt-1">149-199€/mois</div>
                                    </button>
                                    <button onclick="selectBudget('excellence')" id="budget-excellence" class="budget-btn p-4 border-2 rounded-lg text-center transition-all border-gray-300 hover:border-gray-400">
                                        <div class="font-semibold text-sm uppercase">EXCELLENCE</div>
                                        <div class="text-xs text-gray-600 mt-1">299-399€/mois</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <button 
                            onclick="generateTemplate()" 
                            id="generateBtn"
                            class="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            disabled
                        >
                            ➡️ Générer le Template Métier Personnalisable
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Fonction pour créer l'interface de template
    function createTemplateInterface() {
        return `
            <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-8">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">
                            📱 Template ${appState.businessData.subCategory} Personnalisable
                        </h1>
                        <p class="text-xl text-gray-600">
                            Personnalisez ce template selon vos goûts et validez pour générer vos applications
                        </p>
                    </div>
                    
                    <div class="grid lg:grid-cols-3 gap-8">
                        <!-- Panneau de personnalisation -->
                        <div class="lg:col-span-1">
                            <div class="bg-white rounded-2xl shadow-xl p-6 sticky top-6">
                                <h3 class="text-xl font-bold mb-6 flex items-center">
                                    🎨 Panneau de Personnalisation
                                </h3>
                                
                                <div class="space-y-6">
                                    <div>
                                        <label class="block text-sm font-medium mb-2">Couleur Primaire</label>
                                        <div class="flex items-center space-x-2">
                                            <input 
                                                type="color" 
                                                id="primaryColor"
                                                value="${appState.templateCustomization.primaryColor}"
                                                onchange="updateColor('primary', this.value)"
                                                class="w-12 h-12 rounded-lg border-2 border-gray-300"
                                            />
                                            <input 
                                                type="text" 
                                                value="${appState.templateCustomization.primaryColor}"
                                                class="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
                                                readonly
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium mb-2">Couleur Secondaire</label>
                                        <div class="flex items-center space-x-2">
                                            <input 
                                                type="color" 
                                                id="secondaryColor"
                                                value="${appState.templateCustomization.secondaryColor}"
                                                onchange="updateColor('secondary', this.value)"
                                                class="w-12 h-12 rounded-lg border-2 border-gray-300"
                                            />
                                            <input 
                                                type="text" 
                                                value="${appState.templateCustomization.secondaryColor}"
                                                class="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
                                                readonly
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium mb-2">Nom du commerce</label>
                                        <input 
                                            type="text" 
                                            id="businessName"
                                            value="${appState.templateCustomization.businessName}"
                                            onchange="updateBusinessName(this.value)"
                                            placeholder="Nom de votre commerce"
                                            class="w-full p-3 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium mb-2">Slogan</label>
                                        <input 
                                            type="text" 
                                            id="slogan"
                                            value="${appState.templateCustomization.slogan}"
                                            onchange="updateSlogan(this.value)"
                                            placeholder="Votre slogan"
                                            class="w-full p-3 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                </div>
                                
                                <button 
                                    onclick="generateApps()" 
                                    class="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center"
                                >
                                    ✅ Valider et Créer les Apps
                                </button>
                            </div>
                        </div>
                        
                        <!-- Prévisualisation -->
                        <div class="lg:col-span-2">
                            <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                                <div class="bg-gray-800 text-white p-4 flex items-center">
                                    👁️ Prévisualisation en temps réel
                                </div>
                                
                                <div id="templatePreview" class="p-8" style="background-color: ${appState.templateCustomization.primaryColor}10;">
                                    <div class="space-y-8">
                                        <!-- Header -->
                                        <div class="flex justify-between items-center pb-4 border-b-2" style="border-color: ${appState.templateCustomization.primaryColor};">
                                            <div>
                                                <h1 class="text-3xl font-bold" style="color: ${appState.templateCustomization.primaryColor};">
                                                    ${appState.templateCustomization.businessName || appState.businessData.subCategory}
                                                </h1>
                                                <p class="text-gray-600">${appState.templateCustomization.slogan || 'Votre slogan ici'}</p>
                                            </div>
                                            <div class="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-2xl" style="background-color: ${appState.templateCustomization.primaryColor};">
                                                L
                                            </div>
                                        </div>
                                        
                                        <!-- Hero Section -->
                                        <div class="text-center py-12 rounded-2xl" style="background-color: ${appState.templateCustomization.secondaryColor}20;">
                                            <h2 class="text-4xl font-bold mb-4" style="color: ${appState.templateCustomization.primaryColor};">
                                                ${getHeroTitle(appState.businessData.type)}
                                            </h2>
                                            <p class="text-xl text-gray-600 mb-8">
                                                ${getHeroDescription(appState.businessData.type)}
                                            </p>
                                            <button class="px-8 py-4 rounded-xl text-white font-semibold text-lg hover:opacity-90 transition-all" style="background-color: ${appState.templateCustomization.secondaryColor};">
                                                ${getHeroCTA(appState.businessData.type)}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Fonction pour créer l'interface des applications finales
    function createAppsInterface() {
        const plan = getPricingPlan(appState.businessData.budget);
        
        return `
            <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-6">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-8">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">
                            🚀 Applications Finales Générées
                        </h1>
                        <p class="text-xl text-gray-600">
                            Phase 2 : Vos applications Manager et Client cohérentes avec votre template
                        </p>
                    </div>
                    
                    <!-- Proposition commerciale -->
                    <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
                        <div class="text-center">
                            <h2 class="text-2xl font-bold mb-4" style="color: ${appState.templateCustomization.primaryColor};">
                                Plan Recommandé : ${plan.name}
                            </h2>
                            <div class="text-4xl font-bold mb-2" style="color: ${appState.templateCustomization.secondaryColor};">
                                ${plan.price}
                            </div>
                            <p class="text-gray-600 mb-6">${plan.features}</p>
                            
                            <div class="grid md:grid-cols-3 gap-6 text-sm">
                                <div class="flex items-center justify-center">
                                    ✅ Template personnalisé livré
                                </div>
                                <div class="flex items-center justify-center">
                                    ✅ Applications cohérentes
                                </div>
                                <div class="flex items-center justify-center">
                                    ✅ Support inclus
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Applications générées -->
                    <div class="grid lg:grid-cols-2 gap-8">
                        <!-- App Manager -->
                        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div class="p-6 border-b" style="background-color: ${appState.templateCustomization.primaryColor}10;">
                                <h3 class="text-2xl font-bold mb-2" style="color: ${appState.templateCustomization.primaryColor};">
                                    ${appState.businessData.subCategory}Manager Pro
                                </h3>
                                <p class="text-gray-600">Interface de gestion adaptée au template validé</p>
                            </div>
                            <div class="p-6">
                                <h4 class="font-semibold mb-4">Fonctionnalités clés :</h4>
                                <div class="space-y-3">
                                    ${getManagerFeatures(appState.businessData.type).map((feature, index) => `
                                        <div class="flex items-center">
                                            <div class="w-6 h-6 rounded-full mr-3 flex items-center justify-center text-white text-xs font-bold" style="background-color: ${appState.templateCustomization.secondaryColor};">
                                                ${index + 1}
                                            </div>
                                            <span>${feature}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        
                        <!-- App Client -->
                        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div class="p-6 border-b" style="background-color: ${appState.templateCustomization.secondaryColor}10;">
                                <h3 class="text-2xl font-bold mb-2" style="color: ${appState.templateCustomization.secondaryColor};">
                                    ${appState.templateCustomization.businessName || appState.businessData.subCategory} App Client
                                </h3>
                                <p class="text-gray-600">Application client cohérente avec template</p>
                            </div>
                            <div class="p-6">
                                <h4 class="font-semibold mb-4">Fonctionnalités clés :</h4>
                                <div class="space-y-3">
                                    ${getClientFeatures(appState.businessData.type).map((feature, index) => `
                                        <div class="flex items-center">
                                            <div class="w-6 h-6 rounded-full mr-3 flex items-center justify-center text-white text-xs font-bold" style="background-color: #F59E0B;">
                                                ${index + 1}
                                            </div>
                                            <span>${feature}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Call to action final -->
                    <div class="text-center mt-8">
                        <button onclick="validateSolution()" class="bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all mr-4">
                            ✅ Valider la Solution
                        </button>
                        <button onclick="goBackToTemplate()" class="bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-gray-700 hover:to-gray-800 transition-all">
                            🔄 Modifier le Template
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Fonctions helper
    function getHeroTitle(type) {
        const titles = {
            'restaurant': 'Savourez l\'Excellence',
            'commerce': 'Découvrez Notre Collection',
            'beaute': 'Révélez Votre Beauté',
            'technique': 'Service Expert & Fiable',
            'local': 'À Votre Service'
        };
        return titles[type] || 'Bienvenue';
    }

    function getHeroDescription(type) {
        const descriptions = {
            'restaurant': 'Une cuisine authentique dans un cadre chaleureux',
            'commerce': 'Les dernières tendances à prix attractifs',
            'beaute': 'Des soins personnalisés par des experts',
            'technique': 'Interventions rapides et garanties',
            'local': 'Qualité et proximité depuis des années'
        };
        return descriptions[type] || 'Votre partenaire de confiance';
    }

    function getHeroCTA(type) {
        const ctas = {
            'restaurant': 'Réserver une Table',
            'commerce': 'Découvrir',
            'beaute': 'Prendre RDV',
            'technique': 'Demander un Devis',
            'local': 'Nous Contacter'
        };
        return ctas[type] || 'En Savoir Plus';
    }

    function getManagerFeatures(type) {
        const features = {
            'restaurant': ['Gestion menu', 'Stocks', 'Planning', 'Caisse', 'Analytics ventes'],
            'commerce': ['Inventory', 'Commandes', 'Clients', 'Analytics ventes', 'Promotions'],
            'beaute': ['Planning RDV', 'Clients', 'Prestations', 'Chiffre affaires', 'Stock produits'],
            'technique': ['Interventions', 'Devis', 'Stock pièces', 'Planning', 'Facturation'],
            'local': ['Suivi articles', 'Planning', 'Tarifs', 'Clients', 'Notifications']
        };
        return features[type] || [];
    }

    function getClientFeatures(type) {
        const features = {
            'restaurant': ['Commande', 'Réservation', 'Fidélité', 'Avis', 'Menu digital'],
            'commerce': ['Catalogue', 'Wishlist', 'Commandes', 'Notifications promos', 'Click & collect'],
            'beaute': ['Réservation RDV', 'Historique', 'Profil', 'Conseils', 'Galerie'],
            'technique': ['Demande intervention', 'Suivi', 'Historique', 'Factures', 'Urgences'],
            'local': ['Dépôt', 'Suivi articles', 'Notifications', 'Paiement', 'Historique']
        };
        return features[type] || [];
    }

    function getPricingPlan(budget) {
        if (budget === 'basic') return { name: 'BASIC', price: '49-79€/mois', features: 'Fonctionnalités essentielles' };
        if (budget === 'premium') return { name: 'PREMIUM', price: '149-199€/mois', features: 'Fonctionnalités avancées' };
        return { name: 'EXCELLENCE', price: '299-399€/mois', features: 'Solution sur-mesure complète' };
    }

    // Fonctions d'interaction
    window.selectBudget = function(budget) {
        appState.businessData.budget = budget;
        
        // Mettre à jour l'interface
        document.querySelectorAll('.budget-btn').forEach(btn => {
            btn.classList.remove('border-blue-500', 'bg-blue-50', 'text-blue-700');
            btn.classList.add('border-gray-300');
        });
        
        document.getElementById(`budget-${budget}`).classList.remove('border-gray-300');
        document.getElementById(`budget-${budget}`).classList.add('border-blue-500', 'bg-blue-50', 'text-blue-700');
        
        checkFormValid();
    };

    window.generateTemplate = function() {
        // Collecter les données du formulaire
        appState.businessData.type = document.getElementById('businessType').value;
        appState.businessData.subCategory = document.getElementById('subCategory').value;
        appState.businessData.size = document.getElementById('businessSize').value;
        appState.businessData.clientele = document.getElementById('clientele').value;
        
        console.log('Génération template pour:', appState.businessData);
        
        appState.currentPhase = 'template';
        render();
    };

    window.updateColor = function(type, value) {
        if (type === 'primary') {
            appState.templateCustomization.primaryColor = value;
        } else if (type === 'secondary') {
            appState.templateCustomization.secondaryColor = value;
        }
        updatePreview();
    };

    window.updateBusinessName = function(value) {
        appState.templateCustomization.businessName = value;
        updatePreview();
    };

    window.updateSlogan = function(value) {
        appState.templateCustomization.slogan = value;
        updatePreview();
    };

    window.generateApps = function() {
        console.log('Génération des applications finales...');
        appState.currentPhase = 'apps';
        render();
    };

    window.validateSolution = function() {
        alert('✅ Solution validée ! Données envoyées au CRM.');
        console.log('Solution finale:', appState);
    };

    window.goBackToTemplate = function() {
        appState.currentPhase = 'template';
        render();
    };

    function updatePreview() {
        if (appState.currentPhase === 'template') {
            const preview = document.getElementById('templatePreview');
            if (preview) {
                // Mettre à jour la prévisualisation en temps réel
                preview.style.backgroundColor = appState.templateCustomization.primaryColor + '10';
                
                const header = preview.querySelector('h1');
                if (header) {
                    header.style.color = appState.templateCustomization.primaryColor;
                    header.textContent = appState.templateCustomization.businessName || appState.businessData.subCategory;
                }
                
                const slogan = preview.querySelector('p');
                if (slogan) {
                    slogan.textContent = appState.templateCustomization.slogan || 'Votre slogan ici';
                }
            }
        }
    }

    function checkFormValid() {
        const type = document.getElementById('businessType')?.value;
        const subCategory = document.getElementById('subCategory')?.value;
        const budget = appState.businessData.budget;
        
        const isValid = type && subCategory && budget;
        const generateBtn = document.getElementById('generateBtn');
        
        if (generateBtn) {
            generateBtn.disabled = !isValid;
        }
    }

    // Fonction de rendu principal
    function render() {
        let html = '';
        
        switch (appState.currentPhase) {
            case 'analysis':
                html = createAnalysisInterface();
                break;
            case 'template':
                html = createTemplateInterface();
                break;
            case 'apps':
                html = createAppsInterface();
                break;
            default:
                html = createAnalysisInterface();
        }
        
        rootElement.innerHTML = html;
        
        // Ajouter les event listeners après le rendu
        if (appState.currentPhase === 'analysis') {
            setTimeout(() => {
                document.getElementById('businessType')?.addEventListener('change', checkFormValid);
                document.getElementById('subCategory')?.addEventListener('input', checkFormValid);
            }, 100);
        }
    }

    // Communication avec le CRM parent
    function sendToCRM(type, data) {
        if (window.parent !== window) {
            window.parent.postMessage({
                type: `AGENT_${type}`,
                data: data,
                timestamp: new Date().toISOString()
            }, '*');
        }
    }

    // Health check
    window.healthCheck = function() {
        return {
            status: 'healthy',
            version: '1.0.1',
            timestamp: new Date().toISOString(),
            phase: appState.currentPhase
        };
    };

    // Démarrage de l'application
    console.log('🚀 Agent IA démarré avec succès !');
    render();
});

// Fallback si DOMContentLoaded a déjà été déclenché
if (document.readyState === 'loading') {
    // Le script est déjà dans un event listener DOMContentLoaded
} else {
    // Le DOM est déjà chargé, exécuter immédiatement
    console.log('⚡ DOM déjà chargé, démarrage immédiat...');
}
