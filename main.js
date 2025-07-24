// ============================================
// MAIN.JS - Logique principale et navigation
// ============================================

class App {
    constructor() {
        this.currentMetier = null;
        this.currentPlan = null;
        this.selectedOptions = [];
        this.templateGenerator = null;
        
        this.init();
    }

    init() {
        // Attendre que template.js soit chargé
        if (typeof TemplateGenerator === 'undefined') {
            setTimeout(() => this.init(), 100);
            return;
        }
        
        this.templateGenerator = new TemplateGenerator();
        this.bindEvents();
        this.showPhase('phase1');
    }

    bindEvents() {
        // Sélection métier
        document.querySelectorAll('.metier-card').forEach(card => {
            card.addEventListener('click', () => {
                this.selectMetier(card.dataset.metier);
            });
        });

        // Sélection plan
        document.querySelectorAll('.plan-card').forEach(card => {
            card.addEventListener('click', () => {
                this.selectPlan(card.dataset.plan);
            });
        });

        // Génération template
        const generateBtn = document.getElementById('generate-btn');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => {
                this.generateTemplate();
            });
        }

        // Actions résultat
        const previewBtn = document.getElementById('preview-btn');
        if (previewBtn) {
            previewBtn.addEventListener('click', () => {
                this.showPreview();
            });
        }

        const downloadBtn = document.getElementById('download-btn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                this.downloadTemplate();
            });
        }

        const newTemplateBtn = document.getElementById('new-template-btn');
        if (newTemplateBtn) {
            newTemplateBtn.addEventListener('click', () => {
                this.resetApp();
            });
        }
    }

    selectMetier(metier) {
        this.currentMetier = metier;
        
        // Visuel de sélection
        document.querySelectorAll('.metier-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector(`[data-metier="${metier}"]`).classList.add('selected');
        
        // Transition vers phase 2
        setTimeout(() => {
            this.showPhase('phase2');
        }, 500);
    }

    selectPlan(plan) {
        this.currentPlan = plan;
        
        // Visuel de sélection
        document.querySelectorAll('.plan-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector(`[data-plan="${plan}"]`).classList.add('selected');
        
        // Transition vers phase 3
        setTimeout(() => {
            this.setupConfiguration();
            this.showPhase('phase3');
        }, 500);
    }

    setupConfiguration() {
        const planInfo = document.getElementById('current-plan');
        if (planInfo) {
            planInfo.textContent = this.currentPlan.toUpperCase();
        }

        const container = document.getElementById('options-container');
        if (!container) return;

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
            { id: 'pricing', name: 'Tarifs', icon: '💰', description: 'Grille tarifaire', included: false }
        ];

        // Configuration selon le plan
        const planConfig = {
            basic: { included: 5, choice: 3 },
            premium: { included: 8, choice: 0 },
            pro: { included: 8, choice: 0 }
        };

        const config = planConfig[this.currentPlan] || planConfig.basic;
        
        // Marquer les options incluses selon le plan
        return allOptions.map((option, index) => ({
            ...option,
            included: this.currentPlan === 'pro' || index < config.included
        }));
    }

    generateTemplate() {
        if (!this.templateGenerator) {
            console.error('TemplateGenerator not loaded');
            return;
        }

        if (this.selectedOptions.length === 0) {
            alert('Veuillez sélectionner au moins une option');
            return;
        }

        const template = this.templateGenerator.generate(
            this.currentMetier,
            this.currentPlan,
            this.selectedOptions
        );

        const container = document.getElementById('template-container');
        if (container) {
            container.innerHTML = '';
            container.appendChild(template);
        }
        
        this.showPhase('phase4');
    }

    showPreview() {
        alert('Fonctionnalité preview en cours de développement');
    }

    downloadTemplate() {
        const templateContent = document.getElementById('template-container').innerHTML;
        if (!templateContent) {
            alert('Aucun template à télécharger');
            return;
        }

        const fullHTML = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${this.currentMetier || 'Template'}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
        .template-preview { width: 100%; }
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
        
        const targetPhase = document.getElementById(phaseId);
        if (targetPhase) {
            targetPhase.classList.add('active');
        }
    }
}

// Fonction globale pour les boutons de navigation
function showPhase(phaseId) {
    if (window.app) {
        window.app.showPhase(phaseId);
    }
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();

});


