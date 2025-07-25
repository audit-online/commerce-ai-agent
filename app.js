// ============================================
// APP.JS - Application principale
// ============================================

class RestaurantTemplateApp {
    constructor() {
        this.templateManager = null;
        this.currentPhase = 'phase1';
        this.previewMode = 'desktop';
        this.zoomLevel = 100;
        
        this.init();
    }

    async init() {
        // Attendre que les modules soient chargés
        await this.waitForModules();
        
        // Initialiser le gestionnaire de templates
        this.templateManager = new TemplateManager();
        
        // Auto-sélection du template restaurant
        this.templateManager.selectTemplate('restaurant');
        
        // Bind des événements
        this.bindEvents();
        
        // Afficher la première phase
        this.showPhase('phase1');
        
        // Charger une configuration sauvegardée si elle existe
        this.templateManager.loadConfiguration();
    }

    async waitForModules() {
        return new Promise((resolve) => {
            const checkModules = () => {
                if (typeof RestaurantTemplate !== 'undefined' && typeof TemplateManager !== 'undefined') {
                    resolve();
                } else {
                    setTimeout(checkModules, 100);
                }
            };
            checkModules();
        });
    }

    bindEvents() {
        // Phase 1 - Sélection du secteur
        this.bindPhase1Events();
        
        // Phase 2 - Sélection du plan
        this.bindPhase2Events();
        
        // Phase 3 - Configuration
        this.bindPhase3Events();
        
        // Phase 4 - Résultat
        this.bindPhase4Events();
        
        // Événements globaux
        this.bindGlobalEvents();
    }

    bindPhase1Events() {
        const continueBtn = document.getElementById('continue-btn');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => {
                this.showPhase('phase2');
            });
        }
    }

    bindPhase2Events() {
        const planCards = document.querySelectorAll('.plan-card');
        planCards.forEach(card => {
            card.addEventListener('click', () => {
                this.selectPlan(card.dataset.plan);
            });
        });
    }

   

    bindPhase3Events() {
        // Configuration des options
        const generateBtn = document.getElementById('generate-template');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => {
                this.generateTemplate();
            });
        }

        // Aperçu en temps réel
        const previewBtn = document.getElementById('preview-template');
        if (previewBtn) {
            previewBtn.addEventListener('click', () => {
                this.showLivePreview();
            });
        }

        // Personnalisation
        const nameInput = document.getElementById('restaurant-name');
        if (nameInput) {
            nameInput.addEventListener('input', (e) => {
                this.updateCustomization({ name: e.target.value });
            });
        }

        const descInput = document.getElementById('restaurant-description');
        if (descInput) {
            descInput.addEventListener('input', (e) => {
                this.updateCustomization({ description: e.target.value });
            });
        }

        // Palettes de couleurs
        const colorSchemes = document.querySelectorAll('.color-scheme');
        colorSchemes.forEach(scheme => {
            scheme.addEventListener('click', () => {
                colorSchemes.forEach(s => s.classList.remove('active'));
                scheme.classList.add('active');
                this.updateCustomization({ colorScheme: scheme.dataset.scheme });
            });
        });
    }

    bindPhase4Events() {
        // Actions sur le résultat
        const downloadBtn = document.getElementById('download-template');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                this.downloadTemplate();
            });
        }

        const previewFullscreenBtn = document.getElementById('preview-fullscreen');
        if (previewFullscreenBtn) {
            previewFullscreenBtn.addEventListener('click', () => {
                this.openFullscreenPreview();
            });
        }

        const customizeMoreBtn = document.getElementById('customize-more');
        if (customizeMoreBtn) {
            customizeMoreBtn.addEventListener('click', () => {
                this.showPhase('phase3');
            });
        }

        const startNewBtn = document.getElementById('start-new');
        if (startNewBtn) {
            startNewBtn.addEventListener('click', () => {
                this.startNew();
            });
        }

        // Contrôles du viewer
        const viewModes = document.querySelectorAll('.view-mode');
        viewModes.forEach(mode => {
            mode.addEventListener('click', () => {
                this.setViewMode(mode.dataset.mode);
            });
        });

        const zoomIn = document.getElementById('zoom-in');
        const zoomOut = document.getElementById('zoom-out');
        
        if (zoomIn) {
            zoomIn.addEventListener('click', () => this.adjustZoom(10));
        }
        
        if (zoomOut) {
            zoomOut.addEventListener('click', () => this.adjustZoom(-10));
        }
    }

    bindGlobalEvents() {
        // Navigation arrière
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Le onclick inline gère déjà la navigation
            });
        });

        // Sauvegarde automatique
        setInterval(() => {
            if (this.templateManager) {
                this.templateManager.saveConfiguration();
            }
        }, 30000); // Sauvegarde toutes les 30 secondes
    }

    // Gestion des phases
    showPhase(phaseId) {
        // Masquer toutes les phases
        document.querySelectorAll('.phase').forEach(phase => {
            phase.classList.remove('active');
        });

        // Afficher la phase ciblée
        const targetPhase = document.getElementById(phaseId);
        if (targetPhase) {
            targetPhase.classList.add('active');
            this.currentPhase = phaseId;
            
            // Actions spécifiques par phase
            switch (phaseId) {
                case 'phase2':
                    this.setupPhase2();
                    break;
                case 'phase3':
                    this.setupPhase3();
                    break;
                case 'phase4':
                    this.setupPhase4();
                    break;
            }
        }
    }

    // Configuration Phase 2 - Plans
    setupPhase2() {
        // Les plans sont déjà définis dans le HTML
        // Rien de spécial à faire ici
    }

    // Configuration Phase 3 - Options
    setupPhase3() {
        this.updatePlanSummary();
        this.setupConfigurationSections();
        this.setupCustomizationInputs();
    }

    updatePlanSummary() {
        const planNameEl = document.getElementById('selected-plan-name');
        const planPriceEl = document.getElementById('selected-plan-price');
        
        if (this.templateManager && this.templateManager.currentPlan) {
            const planConfig = this.templateManager.currentTemplate.planConfigurations[this.templateManager.currentPlan];
            
            if (planNameEl) planNameEl.textContent = planConfig.name;
            if (planPriceEl) planPriceEl.textContent = `${planConfig.price}€ HT`;
        }
    }

    setupConfigurationSections() {
        const sections = this.templateManager.getConfigurationSections();
        
        // Sections incluses
        const includedContainer = document.getElementById('included-options');
        if (includedContainer) {
            includedContainer.innerHTML = sections.included.map(section => `
                <div class="option-card included">
                    <div class="option-header">
                        <span class="option-icon">${section.icon}</span>
                        <span class="option-name">${section.name}</span>
                        <span class="option-status">✅ Inclus</span>
                    </div>
                    <p class="option-description">${section.description}</p>
                    <div class="option-preview">${section.preview}</div>
                </div>
            `).join('');
        }

        // Sections optionnelles
        const optionalContainer = document.getElementById('optional-options');
        const optionalSection = document.getElementById('optional-section');
        
        if (sections.optional.length > 0) {
            if (optionalSection) optionalSection.style.display = 'block';
            
            if (optionalContainer) {
                optionalContainer.innerHTML = sections.optional.map(section => `
                    <div class="option-card optional">
                        <div class="option-header">
                            <span class="option-icon">${section.icon}</span>
                            <span class="option-name">${section.name}</span>
                            <label class="option-toggle">
                                <input type="checkbox" data-section="${section.id}">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                        <p class="option-description">${section.description}</p>
                        <div class="option-preview">${section.preview}</div>
                    </div>
                `).join('');

                // Bind des événements pour les options
                optionalContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                    checkbox.addEventListener('change', (e) => {
                        const sectionId = e.target.dataset.section;
                        this.templateManager.toggleOptionalSection(sectionId, e.target.checked);
                        this.updateLivePreview();
                    });
                });
            }
        } else {
            if (optionalSection) optionalSection.style.display = 'none';
        }
    }

    setupCustomizationInputs() {
        const config = this.templateManager.currentConfig;
        
        // Pré-remplir les champs
        const nameInput = document.getElementById('restaurant-name');
        if (nameInput) {
            nameInput.value = config.customization.name;
        }

        const descInput = document.getElementById('restaurant-description');
        if (descInput) {
            descInput.value = config.customization.description;
        }

        // Sélectionner la palette de couleurs
        const activeScheme = document.querySelector(`[data-scheme="${config.customization.colorScheme}"]`);
        if (activeScheme) {
            document.querySelectorAll('.color-scheme').forEach(s => s.classList.remove('active'));
            activeScheme.classList.add('active');
        }
    }

    // Configuration Phase 4 - Résultat
    setupPhase4() {
        this.updateResultSummary();
        this.displayGeneratedTemplate();
    }

    updateResultSummary() {
        const stats = this.templateManager.getProjectStats();
        if (!stats) return;

        const finalPlan = document.getElementById('final-plan');
        const sectionsCount = document.getElementById('sections-count');
        const finalPrice = document.getElementById('final-price');

        if (finalPlan) finalPlan.textContent = stats.planName;
        if (sectionsCount) sectionsCount.textContent = `${stats.sectionsCount} sections`;
        if (finalPrice) finalPrice.textContent = `${stats.planPrice}€ HT`;
    }

    displayGeneratedTemplate() {
        const container = document.getElementById('generated-template');
        if (!container) return;

        try {
            const templateElement = this.templateManager.generateTemplate();
            container.innerHTML = '';
            container.appendChild(templateElement);
            
            // Appliquer le mode de vue actuel
            this.setViewMode(this.previewMode);
        } catch (error) {
            console.error('Erreur lors de la génération du template:', error);
            container.innerHTML = `
                <div class="error-message">
                    <h3>Erreur de génération</h3>
                    <p>${error.message}</p>
                    <button onclick="app.showPhase('phase3')" class="btn-primary">
                        Retour à la configuration
                    </button>
                </div>
            `;
        }
    }

    // Actions des phases
    selectPlan(planId) {
        try {
            this.templateManager.selectPlan(planId);
            
            // Mettre à jour l'interface
            document.querySelectorAll('.plan-card').forEach(card => {
                card.classList.remove('selected');
            });
            document.querySelector(`[data-plan="${planId}"]`).classList.add('selected');

            // Transition vers la phase 3
            setTimeout(() => {
                this.showPhase('phase3');
            }, 800);
            
        } catch (error) {
            console.error('Erreur lors de la sélection du plan:', error);
            alert('Erreur lors de la sélection du plan');
        }
    }

    updateCustomization(updates) {
        if (!this.templateManager) return;

        this.templateManager.updateConfiguration({
            customization: {
                ...this.templateManager.currentConfig.customization,
                ...updates
            }
        });

        // Mettre à jour l'aperçu en temps réel
        this.updateLivePreview();
    }

    generateTemplate() {
        try {
            // Récupérer les données de personnalisation
            const customization = this.gatherCustomizationData();
            
            // Mettre à jour la configuration
            this.templateManager.updateConfiguration({ customization });
            
            // Générer le template
            const templateElement = this.templateManager.generateTemplate();
            
            // Passer à la phase de résultat
            this.showPhase('phase4');
            
        } catch (error) {
            console.error('Erreur lors de la génération:', error);
            alert(`Erreur lors de la génération: ${error.message}`);
        }
    }

    gatherCustomizationData() {
        const nameInput = document.getElementById('restaurant-name');
        const descInput = document.getElementById('restaurant-description');
        const activeScheme = document.querySelector('.color-scheme.active');
        
        return {
            name: nameInput ? nameInput.value : 'Le Restaurant Traditionnel',
            description: descInput ? descInput.value : 'Votre restaurant traditionnel à la portée de tous',
            colorScheme: activeScheme ? activeScheme.dataset.scheme : 'classic'
        };
    }

    // Fonctionnalités d'aperçu
    showLivePreview() {
        const preview = this.templateManager.getPreview();
        if (!preview) {
            alert('Impossible de générer l\'aperçu');
            return;
        }

        // Créer une modal pour l'aperçu
        this.createPreviewModal(preview);
    }

    updateLivePreview() {
        // Mettre à jour l'aperçu si une modal est ouverte
        const existingModal = document.querySelector('.preview-modal');
        if (existingModal) {
            const preview = this.templateManager.getPreview();
            if (preview) {
                const previewContainer = existingModal.querySelector('.preview-content');
                if (previewContainer) {
                    previewContainer.innerHTML = '';
                    previewContainer.appendChild(preview);
                }
            }
        }
    }

    createPreviewModal(previewElement) {
        // Supprimer toute modal existante
        const existing = document.querySelector('.preview-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.className = 'preview-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Aperçu en temps réel</h3>
                    <button class="modal-close">×</button>
                </div>
                <div class="preview-content"></div>
            </div>
        `;

        // Ajouter le contenu de l'aperçu
        const previewContainer = modal.querySelector('.preview-content');
        previewContainer.appendChild(previewElement);

        // Événements
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });

        modal.querySelector('.modal-overlay').addEventListener('click', () => {
            modal.remove();
        });

        document.body.appendChild(modal);
    }

    // Contrôles du viewer
    setViewMode(mode) {
        this.previewMode = mode;
        
        const container = document.getElementById('generated-template');
        if (!container) return;

        // Mettre à jour les boutons
        document.querySelectorAll('.view-mode').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-mode="${mode}"]`)?.classList.add('active');

        // Appliquer les styles selon le mode
        const templateFrame = container.closest('.template-frame');
        if (templateFrame) {
            templateFrame.className = `template-frame ${mode}-mode`;
            
            switch (mode) {
                case 'desktop':
                    templateFrame.style.width = '100%';
                    templateFrame.style.maxWidth = 'none';
                    break;
                case 'tablet':
                    templateFrame.style.width = '768px';
                    templateFrame.style.maxWidth = '100%';
                    templateFrame.style.margin = '0 auto';
                    break;
                case 'mobile':
                    templateFrame.style.width = '375px';
                    templateFrame.style.maxWidth = '100%';
                    templateFrame.style.margin = '0 auto';
                    break;
            }
        }
    }

    adjustZoom(delta) {
        this.zoomLevel = Math.max(50, Math.min(200, this.zoomLevel + delta));
        
        const container = document.getElementById('generated-template');
        if (container) {
            container.style.zoom = `${this.zoomLevel}%`;
        }

        const zoomDisplay = document.getElementById('zoom-level');
        if (zoomDisplay) {
            zoomDisplay.textContent = `${this.zoomLevel}%`;
        }
    }

    // Actions du résultat
    downloadTemplate() {
        try {
            const exported = this.templateManager.exportTemplate('html');
            
            // Créer un lien de téléchargement
            const link = document.createElement('a');
            link.href = exported.url;
            link.download = exported.filename;
            link.click();
            
            // Nettoyer l'URL
            setTimeout(() => URL.revokeObjectURL(exported.url), 1000);
            
        } catch (error) {
            console.error('Erreur lors du téléchargement:', error);
            alert(`Erreur lors du téléchargement: ${error.message}`);
        }
    }

    openFullscreenPreview() {
        const container = document.getElementById('generated-template');
        if (!container) return;

        const fullscreenWindow = window.open('', '_blank');
        if (fullscreenWindow) {
            const exported = this.templateManager.exportTemplate('html');
            fullscreenWindow.document.write(exported.html);
            fullscreenWindow.document.close();
        }
    }

    startNew() {
        if (confirm('Êtes-vous sûr de vouloir recommencer ? Toutes les modifications seront perdues.')) {
            this.templateManager.resetConfiguration();
            this.templateManager.selectTemplate('restaurant');
            this.showPhase('phase1');
        }
    }

    // Méthodes utilitaires
    showLoading(message = 'Chargement...') {
        const loading = document.createElement('div');
        loading.className = 'loading-overlay';
        loading.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <p>${message}</p>
            </div>
        `;
        document.body.appendChild(loading);
        return loading;
    }

    hideLoading(loadingElement) {
        if (loadingElement && loadingElement.parentNode) {
            loadingElement.parentNode.removeChild(loadingElement);
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Fonction globale pour la navigation (compatibilité avec le HTML existant)
function showPhase(phaseId) {
    if (window.app) {
        window.app.showPhase(phaseId);
    }
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    window.app = new RestaurantTemplateApp();
});
