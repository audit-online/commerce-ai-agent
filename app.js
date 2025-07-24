// 🤖 AGENT IA - CRÉATION TEMPLATES & APPLICATIONS COMMERCE DE PROXIMITÉ
// Version: 1.0.0 - Fichier COMPLET
// React Component Principal

const { useState } = React;
const { Store, Users, Calendar, Star, MapPin, Phone, Mail, Palette, Settings, Eye, Check, ArrowRight } = lucide;

const CommerceAIAgent = () => {
  const [currentPhase, setCurrentPhase] = useState('analysis');
  const [businessData, setBusinessData] = useState({
    type: '',
    subCategory: '',
    size: '',
    clientele: '',
    budget: '',
    specificNeeds: []
  });
  const [templateCustomization, setTemplateCustomization] = useState({
    primaryColor: '#3B82F6',
    secondaryColor: '#10B981',
    accentColor: '#F59E0B',
    logo: null,
    businessName: '',
    slogan: '',
    style: 'moderne',
    modules: {
      reservation: true,
      onlineOrder: true,
      loyalty: true,
      reviews: true
    }
  });
  const [generatedTemplate, setGeneratedTemplate] = useState(null);
  const [apps, setApps] = useState(null);

  // Communication avec le CRM parent
  const sendToCRM = (type, data) => {
    if (window.parent !== window) {
      window.parent.postMessage({
        type: `AGENT_${type}`,
        data: data,
        timestamp: new Date().toISOString()
      }, '*');
    }
  };

  // Phase 1: Analyse métier et génération template
  const analyzeBusinessAndGenerateTemplate = () => {
    const businessAnalysis = {
      type: businessData.type,
      subCategory: businessData.subCategory,
      specificities: getBusinessSpecificities(businessData.type),
      targetClientele: businessData.clientele
    };

    const template = generateBusinessTemplate(businessAnalysis);
    setGeneratedTemplate(template);
    setCurrentPhase('template');
    
    // Notifier le CRM
    sendToCRM('TEMPLATE_GENERATED', { businessAnalysis, template });
  };

  // Phase 2: Génération des applications finales
  const generateFinalApps = () => {
    const managerApp = generateManagerApp();
    const clientApp = generateClientApp();
    const appsData = { manager: managerApp, client: clientApp };
    
    setApps(appsData);
    setCurrentPhase('apps');
    
    // Notifier le CRM
    sendToCRM('APPS_CREATED', { 
      template: generatedTemplate, 
      customization: templateCustomization,
      apps: appsData,
      businessData: businessData 
    });
  };

  const getBusinessSpecificities = (type) => {
    const specificities = {
      'restaurant': ['Menu digital', 'Réservation', 'Commande en ligne', 'Gestion allergènes', 'Livraison'],
      'commerce': ['Catalogue produits', 'Gestion stock', 'Click & collect', 'Tailles/couleurs', 'Recommandations'],
      'beaute': ['Prise RDV', 'Planning prestations', 'Historique client', 'Galerie avant/après', 'Rappels auto'],
      'technique': ['Devis en ligne', 'Planning interventions', 'Suivi réparations', 'Base équipements', 'Facturation'],
      'local': ['Système tickets', 'Suivi articles', 'Notifications prêt', 'Tarification services', 'Urgences']
    };
    return specificities[type] || [];
  };

  const generateBusinessTemplate = (analysis) => {
    return {
      name: `Template ${analysis.subCategory} Personnalisable`,
      description: `Template adapté spécifiquement au métier ${analysis.subCategory} avec zones de personnalisation`,
      sections: [
        'Header avec branding personnalisable',
        'Hero section métier-spécifique',
        'Services/Produits avec visuels',
        'Fonctionnalités métier en démonstration',
        'Témoignages/Avis clients',
        'Contact/Localisation',
        'Footer avec réseaux sociaux',
        'Panneau de personnalisation intégré'
      ],
      customizableZones: [
        'Couleurs primaires/secondaires',
        'Logo et branding',
        'Textes et slogans',
        'Modules métier activables',
        'Photos et visuels',
        'Style et layout'
      ]
    };
  };

  const generateManagerApp = () => ({
    name: `${businessData.subCategory}Manager Pro`,
    description: 'Interface de gestion adaptée au template validé',
    features: getManagerFeatures(businessData.type),
    coherence: 'Même branding/couleurs/style que template'
  });

  const generateClientApp = () => ({
    name: `${templateCustomization.businessName || businessData.subCategory} App Client`,
    description: 'Application client cohérente avec template',
    features: getClientFeatures(businessData.type),
    coherence: 'Même expérience visuelle que template'
  });

  const getManagerFeatures = (type) => {
    const features = {
      'restaurant': ['Gestion menu', 'Stocks', 'Planning', 'Caisse', 'Analytics ventes'],
      'commerce': ['Inventory', 'Commandes', 'Clients', 'Analytics ventes', 'Promotions'],
      'beaute': ['Planning RDV', 'Clients', 'Prestations', 'Chiffre affaires', 'Stock produits'],
      'technique': ['Interventions', 'Devis', 'Stock pièces', 'Planning', 'Facturation'],
      'local': ['Suivi articles', 'Planning', 'Tarifs', 'Clients', 'Notifications']
    };
    return features[type] || [];
  };

  const getClientFeatures = (type) => {
    const features = {
      'restaurant': ['Commande', 'Réservation', 'Fidélité', 'Avis', 'Menu digital'],
      'commerce': ['Catalogue', 'Wishlist', 'Commandes', 'Notifications promos', 'Click & collect'],
      'beaute': ['Réservation RDV', 'Historique', 'Profil', 'Conseils', 'Galerie'],
      'technique': ['Demande intervention', 'Suivi', 'Historique', 'Factures', 'Urgences'],
      'local': ['Dépôt', 'Suivi articles', 'Notifications', 'Paiement', 'Historique']
    };
    return features[type] || [];
  };

  const getPricingPlan = (budget) => {
    if (budget.includes('basic')) return { name: 'BASIC', price: '49-79€/mois', features: 'Fonctionnalités essentielles' };
    if (budget.includes('premium')) return { name: 'PREMIUM', price: '149-199€/mois', features: 'Fonctionnalités avancées' };
    return { name: 'EXCELLENCE', price: '299-399€/mois', features: 'Solution sur-mesure complète' };
  };

  // Helper functions pour le contenu dynamique
  const getHeroTitle = (type) => {
    const titles = {
      'restaurant': 'Savourez l\'Excellence',
      'commerce': 'Découvrez Notre Collection',
      'beaute': 'Révélez Votre Beauté',
      'technique': 'Service Expert & Fiable',
      'local': 'À Votre Service'
    };
    return titles[type] || 'Bienvenue';
  };

  const getHeroDescription = (type) => {
    const descriptions = {
      'restaurant': 'Une cuisine authentique dans un cadre chaleureux',
      'commerce': 'Les dernières tendances à prix attractifs',
      'beaute': 'Des soins personnalisés par des experts',
      'technique': 'Interventions rapides et garanties',
      'local': 'Qualité et proximité depuis des années'
    };
    return descriptions[type] || 'Votre partenaire de confiance';
  };

  const getHeroCTA = (type) => {
    const ctas = {
      'restaurant': 'Réserver une Table',
      'commerce': 'Découvrir',
      'beaute': 'Prendre RDV',
      'technique': 'Demander un Devis',
      'local': 'Nous Contacter'
    };
    return ctas[type] || 'En Savoir Plus';
  };

  const getServicesTitle = (type) => {
    const titles = {
      'restaurant': 'Notre Menu',
      'commerce': 'Nos Produits',
      'beaute': 'Nos Prestations',
      'technique': 'Nos Services',
      'local': 'Nos Spécialités'
    };
    return titles[type] || 'Nos Services';
  };

  // Interface d'analyse initiale (Phase 1)
  if (currentPhase === 'analysis') {
    return React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6" },
      React.createElement('div', { className: "max-w-4xl mx-auto" },
        React.createElement('div', { className: "text-center mb-8" },
          React.createElement('h1', { className: "text-4xl font-bold text-gray-900 mb-4" },
            "🤖 Agent IA - Templates & Applications Commerce"
          ),
          React.createElement('p', { className: "text-xl text-gray-600" },
            "Phase 1 : Analyse du prospect et génération du template métier personnalisable"
          )
        ),
        React.createElement('div', { className: "bg-white rounded-2xl shadow-xl p-8" },
          React.createElement('h2', { className: "text-2xl font-bold mb-6 flex items-center" },
            React.createElement(Store, { className: "mr-3 text-blue-600" }),
            "Analyse du Prospect"
          ),
          React.createElement('div', { className: "grid md:grid-cols-2 gap-6" },
            React.createElement('div', null,
              React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Type de métier"),
              React.createElement('select', {
                value: businessData.type,
                onChange: (e) => setBusinessData({...businessData, type: e.target.value}),
                className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              },
                React.createElement('option', { value: "" }, "Sélectionner le métier"),
                React.createElement('option', { value: "restaurant" }, "Restauration"),
                React.createElement('option', { value: "commerce" }, "Commerce de détail"),
                React.createElement('option', { value: "beaute" }, "Services Beauté/Bien-être"),
                React.createElement('option', { value: "technique" }, "Services Techniques"),
                React.createElement('option', { value: "local" }, "Services Locaux")
              )
            ),
            React.createElement('div', null,
              React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Sous-catégorie"),
              React.createElement('input', {
                type: "text",
                value: businessData.subCategory,
                onChange: (e) => setBusinessData({...businessData, subCategory: e.target.value}),
                placeholder: "Ex: Pizzeria, Boutique vêtements, Coiffeur...",
                className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              })
            ),
            React.createElement('div', null,
              React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Taille du commerce"),
              React.createElement('select', {
                value: businessData.size,
                onChange: (e) => setBusinessData({...businessData, size: e.target.value}),
                className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              },
                React.createElement('option', { value: "" }, "Sélectionner la taille"),
                React.createElement('option', { value: "petit" }, "Petit (1-5 employés)"),
                React.createElement('option', { value: "moyen" }, "Moyen (6-20 employés)"),
                React.createElement('option', { value: "grand" }, "Grand (20+ employés)")
              )
            ),
            React.createElement('div', null,
              React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Clientèle cible"),
              React.createElement('select', {
                value: businessData.clientele,
                onChange: (e) => setBusinessData({...businessData, clientele: e.target.value}),
                className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              },
                React.createElement('option', { value: "" }, "Sélectionner la clientèle"),
                React.createElement('option', { value: "locale" }, "Locale"),
                React.createElement('option', { value: "touristique" }, "Touristique"),
                React.createElement('option', { value: "jeune" }, "Jeune (18-35 ans)"),
                React.createElement('option', { value: "famille" }, "Famille"),
                React.createElement('option', { value: "pro" }, "Professionnels")
              )
            ),
            React.createElement('div', { className: "md:col-span-2" },
              React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Budget approximatif"),
              React.createElement('div', { className: "grid grid-cols-3 gap-4" },
                ['basic', 'premium', 'excellence'].map(plan =>
                  React.createElement('button', {
                    key: plan,
                    onClick: () => setBusinessData({...businessData, budget: plan}),
                    className: `p-4 border-2 rounded-lg text-center transition-all ${
                      businessData.budget === plan 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`
                  },
                    React.createElement('div', { className: "font-semibold text-sm uppercase" }, plan),
                    React.createElement('div', { className: "text-xs text-gray-600 mt-1" },
                      getPricingPlan(plan).price
                    )
                  )
                )
              )
            )
          ),
          React.createElement('button', {
            onClick: analyzeBusinessAndGenerateTemplate,
            disabled: !businessData.type || !businessData.subCategory || !businessData.budget,
            className: "w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          },
            React.createElement(ArrowRight, { className: "mr-2" }),
            "Générer le Template Métier Personnalisable"
          )
        )
      )
    );
  }

  // Interface du template personnalisable (Phase 1 suite)
  if (currentPhase === 'template' && generatedTemplate) {
    return React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6" },
      React.createElement('div', { className: "max-w-6xl mx-auto" },
        React.createElement('div', { className: "text-center mb-8" },
          React.createElement('h1', { className: "text-4xl font-bold text-gray-900 mb-4" },
            `📱 Template ${businessData.subCategory} Personnalisable`
          ),
          React.createElement('p', { className: "text-xl text-gray-600" },
            "Personnalisez ce template selon vos goûts et validez pour générer vos applications"
          )
        ),
        React.createElement('div', { className: "grid lg:grid-cols-3 gap-8" },
          // Panneau de personnalisation
          React.createElement('div', { className: "lg:col-span-1" },
            React.createElement('div', { className: "bg-white rounded-2xl shadow-xl p-6 sticky top-6" },
              React.createElement('h3', { className: "text-xl font-bold mb-6 flex items-center" },
                React.createElement(Palette, { className: "mr-2 text-purple-600" }),
                "Panneau de Personnalisation"
              ),
              React.createElement('div', { className: "space-y-6" },
                // Couleur primaire
                React.createElement('div', null,
                  React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Couleur Primaire"),
                  React.createElement('div', { className: "flex items-center space-x-2" },
                    React.createElement('input', {
                      type: "color",
                      value: templateCustomization.primaryColor,
                      onChange: (e) => setTemplateCustomization({...templateCustomization, primaryColor: e.target.value}),
                      className: "w-12 h-12 rounded-lg border-2 border-gray-300"
                    }),
                    React.createElement('input', {
                      type: "text",
                      value: templateCustomization.primaryColor,
                      className: "flex-1 p-2 border border-gray-300 rounded-lg text-sm",
                      readOnly: true
                    })
                  )
                ),
                // Couleur secondaire
                React.createElement('div', null,
                  React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Couleur Secondaire"),
                  React.createElement('div', { className: "flex items-center space-x-2" },
                    React.createElement('input', {
                      type: "color",
                      value: templateCustomization.secondaryColor,
                      onChange: (e) => setTemplateCustomization({...templateCustomization, secondaryColor: e.target.value}),
                      className: "w-12 h-12 rounded-lg border-2 border-gray-300"
                    }),
                    React.createElement('input', {
                      type: "text",
                      value: templateCustomization.secondaryColor,
                      className: "flex-1 p-2 border border-gray-300 rounded-lg text-sm",
                      readOnly: true
                    })
                  )
                ),
                // Nom du commerce
                React.createElement('div', null,
                  React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Nom du commerce"),
                  React.createElement('input', {
                    type: "text",
                    value: templateCustomization.businessName,
                    onChange: (e) => setTemplateCustomization({...templateCustomization, businessName: e.target.value}),
                    placeholder: "Nom de votre commerce",
                    className: "w-full p-3 border border-gray-300 rounded-lg"
                  })
                ),
                // Slogan
                React.createElement('div', null,
                  React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Slogan"),
                  React.createElement('input', {
                    type: "text",
                    value: templateCustomization.slogan,
                    onChange: (e) => setTemplateCustomization({...templateCustomization, slogan: e.target.value}),
                    placeholder: "Votre slogan",
                    className: "w-full p-3 border border-gray-300 rounded-lg"
                  })
                ),
                // Style visuel
                React.createElement('div', null,
                  React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Style Visuel"),
                  React.createElement('select', {
                    value: templateCustomization.style,
                    onChange: (e) => setTemplateCustomization({...templateCustomization, style: e.target.value}),
                    className: "w-full p-3 border border-gray-300 rounded-lg"
                  },
                    React.createElement('option', { value: "moderne" }, "Moderne"),
                    React.createElement('option', { value: "classique" }, "Classique"),
                    React.createElement('option', { value: "minimaliste" }, "Minimaliste"),
                    React.createElement('option', { value: "premium" }, "Premium")
                  )
                ),
                // Modules métier
                React.createElement('div', null,
                  React.createElement('label', { className: "block text-sm font-medium mb-4" }, "Modules Métier"),
                  React.createElement('div', { className: "space-y-3" },
                    Object.entries(templateCustomization.modules).map(([key, value]) =>
                      React.createElement('label', { key: key, className: "flex items-center" },
                        React.createElement('input', {
                          type: "checkbox",
                          checked: value,
                          onChange: (e) => setTemplateCustomization({
                            ...templateCustomization, 
                            modules: {...templateCustomization.modules, [key]: e.target.checked}
                          }),
                          className: "mr-3 w-4 h-4 text-purple-600"
                        }),
                        React.createElement('span', { className: "text-sm capitalize" }, 
                          key.replace(/([A-Z])/g, ' $1')
                        )
                      )
                    )
                  )
                )
              ),
              React.createElement('button', {
                onClick: generateFinalApps,
                className: "w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center"
              },
                React.createElement(Check, { className: "mr-2" }),
                "Valider et Créer les Apps"
              )
            )
          ),
          // Prévisualisation
          React.createElement('div', { className: "lg:col-span-2" },
            React.createElement('div', { className: "bg-white rounded-2xl shadow-xl overflow-hidden" },
              React.createElement('div', { className: "bg-gray-800 text-white p-4 flex items-center" },
                React.createElement(Eye, { className: "mr-2" }),
                React.createElement('span', { className: "font-medium" }, "Prévisualisation en temps réel")
              ),
              React.createElement('div', { 
                className: "p-8", 
                style: { backgroundColor: `${templateCustomization.primaryColor}10` } 
              },
                React.createElement('div', { className: "space-y-8" },
                  // Header
                  React.createElement('div', { 
                    className: "flex justify-between items-center pb-4 border-b-2",
                    style: { borderColor: templateCustomization.primaryColor }
                  },
                    React.createElement('div', null,
                      React.createElement('h1', { 
                        className: "text-3xl font-bold",
                        style: { color: templateCustomization.primaryColor }
                      },
                        templateCustomization.businessName || businessData.subCategory
                      ),
                      React.createElement('p', { className: "text-gray-600" }, 
                        templateCustomization.slogan || "Votre slogan ici"
                      )
                    ),
                    React.createElement('div', { 
                      className: "w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-2xl",
                      style: { backgroundColor: templateCustomization.primaryColor }
                    }, "L")
                  ),
                  // Hero Section
                  React.createElement('div', { 
                    className: "text-center py-12 rounded-2xl",
                    style: { backgroundColor: `${templateCustomization.secondaryColor}20` }
                  },
                    React.createElement('h2', { 
                      className: "text-4xl font-bold mb-4",
                      style: { color: templateCustomization.primaryColor }
                    },
                      getHeroTitle(businessData.type)
                    ),
                    React.createElement('p', { className: "text-xl text-gray-600 mb-8" },
                      getHeroDescription(businessData.type)
                    ),
                    React.createElement('button', { 
                      className: "px-8 py-4 rounded-xl text-white font-semibold text-lg hover:opacity-90 transition-all",
                      style: { backgroundColor: templateCustomization.secondaryColor }
                    },
                      getHeroCTA(businessData.type)
                    )
                  ),
                  // Services/Produits
                  React.createElement('div', null,
                    React.createElement('h3', { 
                      className: "text-2xl font-bold mb-6",
                      style: { color: templateCustomization.primaryColor }
                    },
                      getServicesTitle(businessData.type)
                    ),
                    React.createElement('div', { className: "grid md:grid-cols-3 gap-6" },
                      getBusinessSpecificities(businessData.type).slice(0, 3).map((service, index) =>
                        React.createElement('div', { 
                          key: index, 
                          className: "bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all" 
                        },
                          React.createElement('div', { 
                            className: "w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white font-bold",
                            style: { backgroundColor: templateCustomization.accentColor }
                          },
                            index + 1
                          ),
                          React.createElement('h4', { className: "text-lg font-semibold mb-2" }, service),
                          React.createElement('p', { className: "text-gray-600" }, 
                            `Description du service ${service.toLowerCase()}`
                          )
                        )
                      )
                    )
                  ),
                  // Témoignages
                  React.createElement('div', { className: "bg-white p-8 rounded-2xl shadow-lg" },
                    React.createElement('h3', { 
                      className: "text-2xl font-bold mb-6 text-center",
                      style: { color: templateCustomization.primaryColor }
                    },
                      "Avis Clients"
                    ),
                    React.createElement('div', { className: "flex items-center justify-center space-x-1 mb-4" },
                      [1,2,3,4,5].map(star =>
                        React.createElement(Star, { 
                          key: star, 
                          className: "w-6 h-6 fill-current",
                          style: { color: templateCustomization.accentColor }
                        })
                      )
                    ),
                    React.createElement('p', { className: "text-center text-gray-600 italic" },
                      "\"Excellent service, je recommande vivement !\""
                    ),
                    React.createElement('p', { className: "text-center text-sm text-gray-500 mt-2" },
                      "- Client satisfait"
                    )
                  ),
                  // Contact
                  React.createElement('div', { className: "bg-white p-8 rounded-2xl shadow-lg" },
                    React.createElement('h3', { 
                      className: "text-2xl font-bold mb-6",
                      style: { color: templateCustomization.primaryColor }
                    },
                      "Contact & Localisation"
                    ),
                    React.createElement('div', { className: "grid md:grid-cols-3 gap-6" },
                      React.createElement('div', { className: "flex items-center" },
                        React.createElement(MapPin, { 
                          className: "w-6 h-6 mr-3",
                          style: { color: templateCustomization.secondaryColor }
                        }),
                        React.createElement('span', null, "123 Rue Example, Ville")
                      ),
                      React.createElement('div', { className: "flex items-center" },
                        React.createElement(Phone, { 
                          className: "w-6 h-6 mr-3",
                          style: { color: templateCustomization.secondaryColor }
                        }),
                        React.createElement('span', null, "01 23 45 67 89")
                      ),
                      React.createElement('div', { className: "flex items-center" },
                        React.createElement(Mail, { 
                          className: "w-6 h-6 mr-3",
                          style: { color: templateCustomization.secondaryColor }
                        }),
                        React.createElement('span', null, "contact@commerce.fr")
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  }

  // Interface des applications finales (Phase 2)
  if (currentPhase === 'apps' && apps) {
    const recommendedPlan = getPricingPlan(businessData.budget);
    
    return React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-6" },
      React.createElement('div', { className: "max-w-6xl mx-auto" },
        React.createElement('div', { className: "text-center mb-8" },
          React.createElement('h1', { className: "text-4xl font-bold text-gray-900 mb-4" },
            "🚀 Applications Finales Générées"
          ),
          React.createElement('p', { className: "text-xl text-gray-600" },
            "Phase 2 : Vos applications Manager et Client cohérentes avec votre template"
          )
        ),
        // Proposition commerciale
        React.createElement('div', { className: "bg-white rounded-2xl shadow-xl p-8 mb-8" },
          React.createElement('div', { className: "text-center" },
            React.createElement('h2', { 
              className: "text-2xl font-bold mb-4",
              style: { color: templateCustomization.primaryColor }
            },
              `Plan Recommandé : ${recommendedPlan.name}`
            ),
            React.createElement('div', { 
              className: "text-4xl font-bold mb-2",
              style: { color: templateCustomization.secondaryColor }
            },
              recommendedPlan.price
            ),
            React.createElement('p', { className: "text-gray-600 mb-6" }, recommendedPlan.features),
            React.createElement('div', { className: "grid md:grid-cols-3 gap-6 text-sm" },
              React.createElement('div', { className: "flex items-center justify-center" },
                React.createElement(Check, { className: "w-5 h-5 mr-2 text-green-500" }),
                "Template personnalisé livré"
              ),
              React.createElement('div', { className: "flex items-center justify-center" },
                React.createElement(Check, { className: "w-5 h-5 mr-2 text-green-500" }),
                "Applications cohérentes"
              ),
              React.createElement('div', { className: "flex items-center justify-center" },
                React.createElement(Check, { className: "w-5 h-5 mr-2 text-green-500" }),
                "Support inclus"
              )
            )
          )
        ),
        // Applications générées
        React.createElement('div', { className: "grid lg:grid-cols-2 gap-8" },
          // App Manager
          React.createElement('div', { className: "bg-white rounded-2xl shadow-xl overflow-hidden" },
            React.createElement('div', { 
              className: "p-6 border-b",
              style: { backgroundColor: `${templateCustomization.primaryColor}10` }
            },
              React.createElement('h3', { 
                className: "text-2xl font-bold mb-2",
                style: { color: templateCustomization.primaryColor }
              },
                apps.manager.name
              ),
              React.createElement('p', { className: "text-gray-600" }, apps.manager.description)
            ),
            React.createElement('div', { className: "p-6" },
              React.createElement('h4', { className: "font-semibold mb-4" }, "Fonctionnalités clés :"),
              React.createElement('div', { className: "space-y-3" },
                apps.manager.features.map((feature, index) =>
                  React.createElement('div', { key: index, className: "flex items-center" },
                    React.createElement('div', { 
                      className: "w-6 h-6 rounded-full mr-3 flex items-center justify-center text-white text-xs font-bold",
                      style: { backgroundColor: templateCustomization.secondaryColor }
                    },
                      index + 1
                    ),
                    React.createElement('span', null, feature)
                  )
                )
              ),
              React.createElement('div', { 
                className: "mt-6 p-4 rounded-lg",
                style: { backgroundColor: `${templateCustomization.accentColor}10` }
              },
                React.createElement('p', { className: "text-sm font-medium" }, "🎨 Cohérence Template"),
                React.createElement('p', { className: "text-sm text-gray-600" }, apps.manager.coherence)
              )
            )
          ),
          // App Client
          React.createElement('div', { className: "bg-white rounded-2xl shadow-xl overflow-hidden" },
            React.createElement('div', { 
              className: "p-6 border-b",
              style: { backgroundColor: `${templateCustomization.secondaryColor}10` }
            },
              React.createElement('h3', { 
                className: "text-2xl font-bold mb-2",
                style: { color: templateCustomization.secondaryColor }
              },
                apps.client.name
              ),
              React.createElement('p', { className: "text-gray-600" }, apps.client.description)
            ),
            React.createElement('div', { className: "p-6" },
              React.createElement('h4', { className: "font-semibold mb-4" }, "Fonctionnalités clés :"),
              React.createElement('div', { className: "space-y-3" },
                apps.client.features.map((feature, index) =>
                  React.createElement('div', { key: index, className: "flex items-center" },
                    React.createElement('div', { 
                      className: "w-6 h-6 rounded-full mr-3 flex items-center justify-center text-white text-xs font-bold",
                      style: { backgroundColor: templateCustomization.accentColor }
                    },
                      index + 1
                    ),
                    React.createElement('span', null, feature)
                  )
                )
              ),
              React.createElement('div', { 
                className: "mt-6 p-4 rounded-lg",
                style: { backgroundColor: `${templateCustomization.primaryColor}10` }
              },
                React.createElement('p', { className: "text-sm font-medium" }, "🎨 Cohérence Template"),
                React.createElement('p', { className: "text-sm text-gray-600" }, apps.client.coherence)
              )
            )
          )
        ),
        // Arguments commerciaux
        React.createElement('div', { className: "bg-white rounded-2xl shadow-xl p-8 mt-8" },
          React.createElement('h3', { 
            className: "text-2xl font-bold mb-6 text-center",
            style: { color: templateCustomization.primaryColor }
          },
            `Pourquoi cette solution pour votre ${businessData.subCategory} ?`
          ),
          React.createElement('div', { className: "grid md:grid-cols-2 gap-8" },
            React.createElement('div', null,
              React.createElement('h4', { className: "font-semibold mb-4 flex items-center" },
                React.createElement(Users, { 
                  className: "w-5 h-5 mr-2",
                  style: { color: templateCustomization.secondaryColor }
                }),
                "Problèmes résolus"
              ),
              React.createElement('ul', { className: "space-y-2 text-sm" },
                React.createElement('li', null, "• Absence de présence digitale professionnelle"),
                React.createElement('li', null, "• Gestion manuelle chronophage"),
                React.createElement('li', null, "• Perte de clients face à la concurrence digitalisée"),
                React.createElement('li', null, "• Difficultés de fidélisation clientèle")
              )
            ),
            React.createElement('div', null,
              React.createElement('h4', { className: "font-semibold mb-4 flex items-center" },
                React.createElement(Star, { 
                  className: "w-5 h-5 mr-2",
                  style: { color: templateCustomization.accentColor }
                }),
                "ROI attendu"
              ),
              React.createElement('ul', { className: "space-y-2 text-sm" },
                React.createElement('li', null, "• +30% de visibilité locale"),
                React.createElement('li', null, "• +25% de nouveaux clients"),
                React.createElement('li', null, "• -40% temps gestion administrative"),
                React.createElement('li', null, "• +50% taux de fidélisation")
              )
            )
          ),
          React.createElement('div', { className: "mt-8 text-center" },
            React.createElement('div', { 
              className: "inline-flex items-center justify-center space-x-6 p-6 rounded-xl",
              style: { backgroundColor: `${templateCustomization.primaryColor}10` }
            },
              React.createElement('div', { className: "text-center" },
                React.createElement('div', { 
                  className: "text-2xl font-bold",
                  style: { color: templateCustomization.primaryColor }
                }, "Template"),
                React.createElement('div', { className: "text-sm text-gray-600" }, "Personnalisé")
              ),
              React.createElement('div', { 
                className: "text-3xl",
                style: { color: templateCustomization.secondaryColor }
              }, "+"),
              React.createElement('div', { className: "text-center" },
                React.createElement('div', { 
                  className: "text-2xl font-bold",
                  style: { color: templateCustomization.primaryColor }
                }, "Apps"),
                React.createElement('div', { className: "text-sm text-gray-600" }, "Cohérentes")
              ),
              React.createElement('div', { 
                className: "text-3xl",
                style: { color: templateCustomization.secondaryColor }
              }, "="),
              React.createElement('div', { className: "text-center" },
                React.createElement('div', { 
                  className: "text-2xl font-bold",
                  style: { color: templateCustomization.accentColor }
                }, "Solution"),
                React.createElement('div', { className: "text-sm text-gray-600" }, "Complète")
              )
            )
          )
        ),
        // Call to action final
        React.createElement('div', { className: "text-center mt-8" },
          React.createElement('button', {
            onClick: () => {
              sendToCRM('SOLUTION_VALIDATED', {
                businessData,
                templateCustomization,
                apps,
                recommendedPlan
              });
              alert('✅ Solution validée et envoyée au CRM !');
            },
            className: "bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all mr-4"
          },
            "✅ Valider la Solution"
          ),
          React.createElement('button', {
            onClick: () => setCurrentPhase('template'),
            className: "bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-gray-700 hover:to-gray-800 transition-all"
          },
            "🔄 Modifier le Template"
          )
        )
      )
    );
  }

  return null;
};

// Écouter les messages du CRM parent
window.addEventListener('message', function(event) {
  // Ici vous pourrez recevoir des données du CRM
  if (event.data && event.data.type === 'LOAD_PROSPECT_DATA') {
    // Pré-remplir avec les données du prospect
    console.log('Données prospect reçues:', event.data.data);
  }
});

// Health check pour monitoring
window.healthCheck = function() {
  return {
    status: 'healthy',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    agent: 'Commerce AI Agent',
    phases: ['analysis', 'template', 'apps']
  };
};

// Rendu de l'application
const { createElement } = React;
const { createRoot } = ReactDOM;

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(createElement(CommerceAIAgent));
    
    // Log de démarrage pour debugging
    console.log('🤖 Agent IA Commerce démarré avec succès !');
    console.log('Health check:', window.healthCheck());
  } else {
    console.error('Element #root introuvable !');
  }
});

// Export pour utilisation en module (optionnel)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CommerceAIAgent;
}
