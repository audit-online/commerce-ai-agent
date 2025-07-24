<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🤖 Agent IA - Templates Commerce</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: Arial, sans-serif; }
        .phase { display: none; }
        .phase.active { display: block; }
        .selected { border-color: #3B82F6 !important; background-color: #EFF6FF !important; }
    </style>
</head>
<body class="bg-gray-100">

<!-- PHASE 1: ANALYSE -->
<div id="phase-analysis" class="phase active">
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
                <h2 class="text-2xl font-bold mb-6">🏪 Analyse du Prospect</h2>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium mb-2">Type de métier</label>
                        <select id="businessType" class="w-full p-3 border border-gray-300 rounded-lg">
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
                        <input type="text" id="subCategory" placeholder="Ex: Pizzeria, Boutique vêtements..." 
                               class="w-full p-3 border border-gray-300 rounded-lg">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium mb-2">Taille du commerce</label>
                        <select id="businessSize" class="w-full p-3 border border-gray-300 rounded-lg">
                            <option value="">Sélectionner la taille</option>
                            <option value="petit">Petit (1-5 employés)</option>
                            <option value="moyen">Moyen (6-20 employés)</option>
                            <option value="grand">Grand (20+ employés)</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium mb-2">Clientèle cible</label>
                        <select id="clientele" class="w-full p-3 border border-gray-300 rounded-lg">
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
                            <button onclick="selectBudget('basic')" id="budget-basic" 
                                    class="p-4 border-2 border-gray-300 rounded-lg text-center hover:border-gray-400">
                                <div class="font-semibold text-sm">BASIC</div>
                                <div class="text-xs text-gray-600">49-79€/mois</div>
                            </button>
                            <button onclick="selectBudget('premium')" id="budget-premium" 
                                    class="p-4 border-2 border-gray-300 rounded-lg text-center hover:border-gray-400">
                                <div class="font-semibold text-sm">PREMIUM</div>
                                <div class="text-xs text-gray-600">149-199€/mois</div>
                            </button>
                            <button onclick="selectBudget('excellence')" id="budget-excellence" 
                                    class="p-4 border-2 border-gray-300 rounded-lg text-center hover:border-gray-400">
                                <div class="font-semibold text-sm">EXCELLENCE</div>
                                <div class="text-xs text-gray-600">299-399€/mois</div>
                            </button>
                        </div>
                    </div>
                </div>
                
                <button onclick="generateTemplate()" id="generateBtn" disabled
                        class="w-full mt-8 bg-blue-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                    ➡️ Générer le Template Métier Personnalisable
                </button>
            </div>
        </div>
    </div>
</div>

<!-- PHASE 2: TEMPLATE -->
<div id="phase-template" class="phase">
    <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-gray-900 mb-4">
                    📱 Template <span id="templateTitle">Commerce</span> Personnalisable
                </h1>
                <p class="text-xl text-gray-600">
                    Personnalisez ce template selon vos goûts et validez pour générer vos applications
                </p>
            </div>
            
            <div class="grid lg:grid-cols-3 gap-8">
                <!-- Panneau de personnalisation -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-2xl shadow-xl p-6">
                        <h3 class="text-xl font-bold mb-6">🎨 Personnalisation</h3>
                        
                        <div class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium mb-2">Couleur Primaire</label>
                                <input type="color" id="primaryColor" value="#3B82F6" onchange="updatePreview()"
                                       class="w-full h-12 rounded-lg border-2 border-gray-300">
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium mb-2">Couleur Secondaire</label>
                                <input type="color" id="secondaryColor" value="#10B981" onchange="updatePreview()"
                                       class="w-full h-12 rounded-lg border-2 border-gray-300">
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium mb-2">Nom du commerce</label>
                                <input type="text" id="businessName" onchange="updatePreview()" 
                                       placeholder="Nom de votre commerce"
                                       class="w-full p-3 border border-gray-300 rounded-lg">
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium mb-2">Slogan</label>
                                <input type="text" id="slogan" onchange="updatePreview()" 
                                       placeholder="Votre slogan"
                                       class="w-full p-3 border border-gray-300 rounded-lg">
                            </div>
                        </div>
                        
                        <button onclick="generateApps()" 
                                class="w-full mt-8 bg-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-purple-700">
                            ✅ Valider et Créer les Apps
                        </button>
                    </div>
                </div>
                
                <!-- Prévisualisation -->
                <div class="lg:col-span-2">
                    <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div class="bg-gray-800 text-white p-4">
                            👁️ Prévisualisation en temps réel
                        </div>
                        
                        <div id="templatePreview" class="p-8">
                            <div class="space-y-8">
                                <!-- Header -->
                                <div class="flex justify-between items-center pb-4 border-b-2" id="headerSection">
                                    <div>
                                        <h1 class="text-3xl font-bold" id="previewTitle">Mon Commerce</h1>
                                        <p class="text-gray-600" id="previewSlogan">Votre slogan ici</p>
                                    </div>
                                    <div class="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-2xl" id="logoBox">
                                        L
                                    </div>
                                </div>
                                
                                <!-- Hero Section -->
                                <div class="text-center py-12 rounded-2xl" id="heroSection">
                                    <h2 class="text-4xl font-bold mb-4" id="heroTitle">Bienvenue</h2>
                                    <p class="text-xl text-gray-600 mb-8" id="heroDesc">Votre partenaire de confiance</p>
                                    <button class="px-8 py-4 rounded-xl text-white font-semibold text-lg" id="heroButton">
                                        En Savoir Plus
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- PHASE 3: APPLICATIONS -->
<div id="phase-apps" class="phase">
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
                    <h2 class="text-2xl font-bold mb-4" id="planTitle">Plan Recommandé : PREMIUM</h2>
                    <div class="text-4xl font-bold mb-2" id="planPrice">149-199€/mois</div>
                    <p class="text-gray-600 mb-6">Fonctionnalités avancées</p>
                    
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
                    <div class="p-6 border-b bg-blue-50">
                        <h3 class="text-2xl font-bold mb-2 text-blue-600" id="managerAppName">CommerceManager Pro</h3>
                        <p class="text-gray-600">Interface de gestion adaptée au template validé</p>
                    </div>
                    <div class="p-6">
                        <h4 class="font-semibold mb-4">Fonctionnalités clés :</h4>
                        <div class="space-y-3" id="managerFeatures">
                            <div class="flex items-center">
                                <div class="w-6 h-6 rounded-full mr-3 bg-blue-600 text-white text-xs font-bold flex items-center justify-center">1</div>
                                <span>Gestion générale</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- App Client -->
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div class="p-6 border-b bg-green-50">
                        <h3 class="text-2xl font-bold mb-2 text-green-600" id="clientAppName">Commerce App Client</h3>
                        <p class="text-gray-600">Application client cohérente avec template</p>
                    </div>
                    <div class="p-6">
                        <h4 class="font-semibold mb-4">Fonctionnalités clés :</h4>
                        <div class="space-y-3" id="clientFeatures">
                            <div class="flex items-center">
                                <div class="w-6 h-6 rounded-full mr-3 bg-green-600 text-white text-xs font-bold flex items-center justify-center">1</div>
                                <span>Interface client</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Call to action final -->
            <div class="text-center mt-8">
                <button onclick="validateSolution()" 
                        class="bg-green-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-green-700 mr-4">
                    ✅ Valider la Solution
                </button>
                <button onclick="goBackToTemplate()" 
                        class="bg-gray-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-gray-700">
                    🔄 Modifier le Template
                </button>
            </div>
        </div>
    </div>
</div>

<script>
// Variables globales
let appData = {
    businessType: '',
    subCategory: '',
    businessSize: '',
    clientele: '',
    budget: '',
    businessName: '',
    slogan: '',
    primaryColor: '#3B82F6',
    secondaryColor: '#10B981'
};

// Données métier
const businessData = {
    restaurant: {
        title: 'Savourez l\'Excellence',
        desc: 'Une cuisine authentique dans un cadre chaleureux',
        cta: 'Réserver une Table',
        managerFeatures: ['Gestion menu', 'Stocks', 'Planning', 'Caisse', 'Analytics'],
        clientFeatures: ['Commande', 'Réservation', 'Fidélité', 'Avis', 'Menu digital']
    },
    commerce: {
        title: 'Découvrez Notre Collection',
        desc: 'Les dernières tendances à prix attractifs',
        cta: 'Découvrir',
        managerFeatures: ['Inventory', 'Commandes', 'Clients', 'Analytics', 'Promotions'],
        clientFeatures: ['Catalogue', 'Wishlist', 'Commandes', 'Notifications', 'Click & collect']
    },
    beaute: {
        title: 'Révélez Votre Beauté',
        desc: 'Des soins personnalisés par des experts',
        cta: 'Prendre RDV',
        managerFeatures: ['Planning RDV', 'Clients', 'Prestations', 'Chiffre affaires', 'Stock'],
        clientFeatures: ['Réservation RDV', 'Historique', 'Profil', 'Conseils', 'Galerie']
    },
    technique: {
        title: 'Service Expert & Fiable',
        desc: 'Interventions rapides et garanties',
        cta: 'Demander un Devis',
        managerFeatures: ['Interventions', 'Devis', 'Stock pièces', 'Planning', 'Facturation'],
        clientFeatures: ['Demande intervention', 'Suivi', 'Historique', 'Factures', 'Urgences']
    },
    local: {
        title: 'À Votre Service',
        desc: 'Qualité et proximité depuis des années',
        cta: 'Nous Contacter',
        managerFeatures: ['Suivi articles', 'Planning', 'Tarifs', 'Clients', 'Notifications'],
        clientFeatures: ['Dépôt', 'Suivi articles', 'Notifications', 'Paiement', 'Historique']
    }
};

// Fonctions principales
function selectBudget(budget) {
    appData.budget = budget;
    
    // Reset tous les boutons
    document.querySelectorAll('[id^="budget-"]').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Sélectionner le bon bouton
    document.getElementById('budget-' + budget).classList.add('selected');
    
    checkFormValid();
}

function checkFormValid() {
    const type = document.getElementById('businessType').value;
    const subCategory = document.getElementById('subCategory').value;
    const isValid = type && subCategory && appData.budget;
    
    document.getElementById('generateBtn').disabled = !isValid;
}

function generateTemplate() {
    // Collecter les données
    appData.businessType = document.getElementById('businessType').value;
    appData.subCategory = document.getElementById('subCategory').value;
    appData.businessSize = document.getElementById('businessSize').value;
    appData.clientele = document.getElementById('clientele').value;
    
    console.log('Génération template pour:', appData);
    
    // Passer à la phase template
    showPhase('template');
    
    // Mettre à jour le titre
    document.getElementById('templateTitle').textContent = appData.subCategory;
    
    // Initialiser la prévisualisation
    updatePreview();
}

function updatePreview() {
    const primaryColor = document.getElementById('primaryColor').value;
    const secondaryColor = document.getElementById('secondaryColor').value;
    const businessName = document.getElementById('businessName').value;
    const slogan = document.getElementById('slogan').value;
    
    appData.primaryColor = primaryColor;
    appData.secondaryColor = secondaryColor;
    appData.businessName = businessName;
    appData.slogan = slogan;
    
    // Mettre à jour la prévisualisation
    document.getElementById('previewTitle').textContent = businessName || appData.subCategory;
    document.getElementById('previewSlogan').textContent = slogan || 'Votre slogan ici';
    
    // Couleurs
    document.getElementById('headerSection').style.borderColor = primaryColor;
    document.getElementById('previewTitle').style.color = primaryColor;
    document.getElementById('logoBox').style.backgroundColor = primaryColor;
    document.getElementById('heroSection').style.backgroundColor = secondaryColor + '20';
    document.getElementById('heroTitle').style.color = primaryColor;
    document.getElementById('heroButton').style.backgroundColor = secondaryColor;
    
    // Contenu métier
    const businessInfo = businessData[appData.businessType] || businessData.commerce;
    document.getElementById('heroTitle').textContent = businessInfo.title;
    document.getElementById('heroDesc').textContent = businessInfo.desc;
    document.getElementById('heroButton').textContent = businessInfo.cta;
}

function generateApps() {
    console.log('Génération des applications finales...');
    
    // Passer à la phase apps
    showPhase('apps');
    
    // Mettre à jour les informations
    updateAppsInterface();
}

function updateAppsInterface() {
    const businessInfo = businessData[appData.businessType] || businessData.commerce;
    
    // Plan tarifaire
    let plan = { name: 'BASIC', price: '49-79€/mois' };
    if (appData.budget === 'premium') plan = { name: 'PREMIUM', price: '149-199€/mois' };
    if (appData.budget === 'excellence') plan = { name: 'EXCELLENCE', price: '299-399€/mois' };
    
    document.getElementById('planTitle').textContent = 'Plan Recommandé : ' + plan.name;
    document.getElementById('planPrice').textContent = plan.price;
    
    // Noms des apps
    document.getElementById('managerAppName').textContent = appData.subCategory + 'Manager Pro';
    document.getElementById('clientAppName').textContent = (appData.businessName || appData.subCategory) + ' App Client';
    
    // Fonctionnalités Manager
    const managerHTML = businessInfo.managerFeatures.map((feature, index) => 
        `<div class="flex items-center">
            <div class="w-6 h-6 rounded-full mr-3 bg-blue-600 text-white text-xs font-bold flex items-center justify-center">${index + 1}</div>
            <span>${feature}</span>
        </div>`
    ).join('');
    document.getElementById('managerFeatures').innerHTML = managerHTML;
    
    // Fonctionnalités Client
    const clientHTML = businessInfo.clientFeatures.map((feature, index) => 
        `<div class="flex items-center">
            <div class="w-6 h-6 rounded-full mr-3 bg-green-600 text-white text-xs font-bold flex items-center justify-center">${index + 1}</div>
            <span>${feature}</span>
        </div>`
    ).join('');
    document.getElementById('clientFeatures').innerHTML = clientHTML;
}

function validateSolution() {
    alert('✅ Solution validée ! Données envoyées au CRM.');
    console.log('Solution finale:', appData);
    
    // Envoyer au CRM parent
    if (window.parent !== window) {
        window.parent.postMessage({
            type: 'AGENT_SOLUTION_VALIDATED',
            data: appData,
            timestamp: new Date().toISOString()
        }, '*');
    }
}

function goBackToTemplate() {
    showPhase('template');
}

function showPhase(phase) {
    // Cacher toutes les phases
    document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
    
    // Montrer la phase demandée
    document.getElementById('phase-' + phase).classList.add('active');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('🤖 Agent IA démarré avec succès !');
    
    // Ajouter les event listeners
    document.getElementById('businessType').addEventListener('change', checkFormValid);
    document.getElementById('subCategory').addEventListener('input', checkFormValid);
});

// Health check
window.healthCheck = function() {
    return {
        status: 'healthy',
        version: '1.0.2',
        timestamp: new Date().toISOString()
    };
};
</script>

</body>
</html>
