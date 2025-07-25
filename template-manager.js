// ============================================
// TEMPLATE-MANAGER.JS - Gestionnaire de templates
// ============================================

class TemplateManager {
    constructor() {
        this.currentTemplate = null;
        this.currentPlan = null;
        this.currentConfig = {};
        this.templates = new Map();
        
        this.init();
    }

    init() {
        // Enregistrer les templates disponibles
        this.registerTemplates();
        
        // Charger la configuration par défaut
        this.loadDefaultConfig();
    }

    // Enregistrement des templates disponibles
    registerTemplates() {
        // Restaurant template
        if (typeof RestaurantTemplate !== 'undefined') {
            this.templates.set('restaurant', {
                class: RestaurantTemplate,
                name: 'Restaurant Traditionnel',
                icon: '🍽️',
                description: 'Template complet pour restaurants gastronomiques',
                category: 'restauration',
                features: ['Menu interactif', 'Réservations', 'Galerie', 'Témoignages'],
                preview: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop'
            });
        }

        // Ajouter d'autres templates ici quand ils seront créés
        // this.templates.set('pizzeria', { ... });
        // this.templates.set('cafe', { ... });
    }

    // Configuration par défaut
    loadDefaultConfig() {
        this.currentConfig = {
            templateType: 'restaurant',
            plan: 'premium',
            customization: {
                name: 'Le Restaurant Traditionnel',
                description: 'Votre restaurant traditionnel à la portée de tous',
                colorScheme: 'classic',
                logo: null,
                images: {},
                contact: {
                    phone: '+33 1 23 45 67 89',
                    email: 'contact@restaurant-traditionnel.fr',
                    address: '123 Rue de la Gastronomie, 75001 Paris',
                    hours: {
                        monday: 'Fermé',
                        tuesday: '12h-14h / 19h-22h',
                        wednesday: '12h-14h / 19h-22h',
                        thursday: '12h-14h / 19h-22h',
                        friday: '12h-14h / 19h-22h',
                        saturday: '12h-14h / 19h-22h',
                        sunday: '12h-15h'
                    }
                }
            },
            selectedSections: [],
            generatedAt: null
        };
    }

    // Obtenir la liste des templates disponibles
    getAvailableTemplates() {
        return Array.from(this.templates.entries()).map(([id, template]) => ({
            id,
            ...template
        }));
    }

    // Sélectionner un template
    selectTemplate(templateId) {
        if (!this.templates.has(templateId)) {
            throw new Error(`Template "${templateId}" non trouvé`);
        }

        const templateInfo = this.templates.get(templateId);
        this.currentTemplate = new templateInfo.class();
        this.currentConfig.templateType = templateId;
        
        return this.currentTemplate;
    }

    // Sélectionner un plan
    selectPlan(planId) {
        if (!this.currentTemplate) {
            throw new Error('Aucun template sélectionné');
        }

        const planConfig = this.currentTemplate.planConfigurations[planId];
        if (!planConfig) {
            throw new Error(`Plan "${planId}" non trouvé`);
        }

        this.currentPlan = planId;
        this.currentConfig.plan = planId;
        
        // Mettre à jour les sections selon le plan
        this.updateSectionsForPlan(planId);
        
        return planConfig;
    }

    // Mettre à jour les sections selon le plan sélectionné
    updateSectionsForPlan(planId) {
        if (!this.currentTemplate) return;

        const includedSections = this.currentTemplate.getSectionsForPlan(planId);
        this.currentConfig.selectedSections = [...includedSections];
    }

    // Obtenir les sections disponibles pour la configuration
    getConfigurationSections() {
        if (!this.currentTemplate || !this.currentPlan) {
            return { included: [], optional: [] };
        }

        const included = this.currentTemplate.getSectionsForPlan(this.currentPlan);
        const optional = this.currentTemplate.getOptionalSectionsForPlan(this.currentPlan);

        return {
            included: included.map(sectionId => ({
                id: sectionId,
                ...this.currentTemplate.sectionDefinitions[sectionId]
            })),
            optional: optional.map(sectionId => ({
                id: sectionId,
                ...this.currentTemplate.sectionDefinitions[sectionId]
            }))
        };
    }

    // Mettre à jour la configuration
    updateConfiguration(updates) {
        this.currentConfig = {
            ...this.currentConfig,
            ...updates
        };

        // Mettre à jour le template si nécessaire
        if (this.currentTemplate && updates.customization) {
            this.currentTemplate.updateConfig({
                name: updates.customization.name || this.currentConfig.customization.name,
                description: updates.customization.description || this.currentConfig.customization.description,
                colorScheme: updates.customization.colorScheme || this.currentConfig.customization.colorScheme,
                selectedSections: this.currentConfig.selectedSections,
                customData: updates.customization
            });
        }
    }

    // Ajouter/retirer une section optionnelle
    toggleOptionalSection(sectionId, enabled) {
        const index = this.currentConfig.selectedSections.indexOf(sectionId);
        
        if (enabled && index === -1) {
            this.currentConfig.selectedSections.push(sectionId);
        } else if (!enabled && index !== -1) {
            this.currentConfig.selectedSections.splice(index, 1);
        }

        // Mettre à jour le template
        if (this.currentTemplate) {
            this.currentTemplate.updateConfig({
                selectedSections: this.currentConfig.selectedSections
            });
        }
    }

    // Générer le template avec la configuration actuelle
    generateTemplate() {
        if (!this.currentTemplate) {
            throw new Error('Aucun template sélectionné');
        }

        // Valider la configuration
        const validation = this.currentTemplate.validateConfig({
            name: this.currentConfig.customization.name,
            selectedSections: this.currentConfig.selectedSections,
            colorScheme: this.currentConfig.customization.colorScheme
        });

        if (!validation.isValid) {
            throw new Error(`Configuration invalide: ${validation.errors.join(', ')}`);
        }

        // Générer le template
        const templateElement = this.currentTemplate.generateTemplate({
            name: this.currentConfig.customization.name,
            description: this.currentConfig.customization.description,
            colorScheme: this.currentConfig.customization.colorScheme,
            selectedSections: this.currentConfig.selectedSections,
            customData: this.currentConfig.customization
        });

        // Ajouter l'interactivité
        this.currentTemplate.addInteractivity(templateElement);

        // Mettre à jour la timestamp
        this.currentConfig.generatedAt = new Date().toISOString();

        return templateElement;
    }

    // Exporter le template complet
    exportTemplate(format = 'html') {
        if (!this.currentTemplate) {
            throw new Error('Aucun template sélectionné');
        }

        const exported = this.currentTemplate.exportTemplate({
            name: this.currentConfig.customization.name,
            description: this.currentConfig.customization.description,
            colorScheme: this.currentConfig.customization.colorScheme,
            selectedSections: this.currentConfig.selectedSections,
            customData: this.currentConfig.customization
        });

        switch (format) {
            case 'html':
                return this.exportAsHTML(exported);
            case 'zip':
                return this.exportAsZip(exported);
            case 'json':
                return this.exportAsJSON(exported);
            default:
                throw new Error(`Format d'export non supporté: ${format}`);
        }
    }

    // Export HTML simple
    exportAsHTML(exported) {
        const blob = new Blob([exported.html], { type: 'text/html' });
        return {
            blob,
            filename: `${this.sanitizeFilename(this.currentConfig.customization.name)}.html`,
            url: URL.createObjectURL(blob)
        };
    }

    // Export JSON de configuration
    exportAsJSON(exported) {
        const jsonData = {
            template: this.currentConfig,
            exported: exported,
            metadata: {
                version: '1.0.0',
                generator: 'Template Manager Pro',
                created: new Date().toISOString()
            }
        };

        const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
        return {
            blob,
            filename: `${this.sanitizeFilename(this.currentConfig.customization.name)}-config.json`,
            url: URL.createObjectURL(blob)
        };
    }

    // Export ZIP avec tous les fichiers
    exportAsZip(exported) {
        // Note: Pour une implémentation complète, vous auriez besoin d'une bibliothèque comme JSZip
        console.warn('Export ZIP non implémenté - nécessite JSZip');
        return this.exportAsHTML(exported);
    }

    // Utilitaire pour nettoyer les noms de fichiers
    sanitizeFilename(filename) {
        return filename
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
    }

    // Obtenir les statistiques du projet
    getProjectStats() {
        if (!this.currentTemplate || !this.currentPlan) {
            return null;
        }

        const planConfig = this.currentTemplate.planConfigurations[this.currentPlan];
        const sectionsCount = this.currentConfig.selectedSections.length;
        
        return {
            templateType: this.currentConfig.templateType,
            planName: planConfig.name,
            planPrice: planConfig.price,
            sectionsCount,
            sectionsIncluded: this.currentConfig.selectedSections,
            lastModified: this.currentConfig.generatedAt,
            isComplete: this.validateCurrentConfig().isValid
        };
    }

    // Valider la configuration actuelle
    validateCurrentConfig() {
        if (!this.currentTemplate) {
            return {
                isValid: false,
                errors: ['Aucun template sélectionné']
            };
        }

        return this.currentTemplate.validateConfig({
            name: this.currentConfig.customization.name,
            selectedSections: this.currentConfig.selectedSections,
            colorScheme: this.currentConfig.customization.colorScheme
        });
    }

    // Sauvegarder la configuration en cours
    saveConfiguration() {
        const configData = {
            ...this.currentConfig,
            savedAt: new Date().toISOString()
        };

        try {
            localStorage.setItem('template-manager-config', JSON.stringify(configData));
            return true;
        } catch (error) {
            console.warn('Impossible de sauvegarder la configuration:', error);
            return false;
        }
    }

    // Charger une configuration sauvegardée
    loadConfiguration() {
        try {
            const saved = localStorage.getItem('template-manager-config');
            if (saved) {
                const configData = JSON.parse(saved);
                this.currentConfig = { ...this.currentConfig, ...configData };
                
                // Réinitialiser le template si nécessaire
                if (configData.templateType) {
                    this.selectTemplate(configData.templateType);
                    if (configData.plan) {
                        this.selectPlan(configData.plan);
                    }
                }
                
                return true;
            }
        } catch (error) {
            console.warn('Impossible de charger la configuration:', error);
        }
        return false;
    }

    // Réinitialiser la configuration
    resetConfiguration() {
        this.currentTemplate = null;
        this.currentPlan = null;
        this.loadDefaultConfig();
        
        try {
            localStorage.removeItem('template-manager-config');
        } catch (error) {
            console.warn('Impossible de supprimer la configuration sauvegardée:', error);
        }
    }

    // Obtenir un aperçu en temps réel
    getPreview() {
        if (!this.currentTemplate) {
            return null;
        }

        try {
            const previewElement = this.generateTemplate();
            
            // Créer un conteneur d'aperçu
            const previewContainer = document.createElement('div');
            previewContainer.className = 'template-preview-container';
            previewContainer.style.cssText = `
                width: 100%;
                height: 100%;
                overflow: auto;
                border: 1px solid #ddd;
                border-radius: 8px;
                background: white;
            `;
            
            previewContainer.appendChild(previewElement);
            
            return previewContainer;
        } catch (error) {
            console.error('Erreur lors de la génération de l\'aperçu:', error);
            return null;
        }
    }

    // Méthodes d'analyse et de rapport
    generateReport() {
        const stats = this.getProjectStats();
        if (!stats) return null;

        const validation = this.validateCurrentConfig();
        
        return {
            summary: {
                templateName: this.currentConfig.customization.name,
                templateType: stats.templateType,
                plan: stats.planName,
                price: stats.planPrice,
                sections: stats.sectionsCount,
                status: validation.isValid ? 'Prêt' : 'Configuration incomplète'
            },
            details: {
                includedSections: stats.sectionsIncluded,
                configuration: this.currentConfig,
                validation: validation
            },
            metadata: {
                created: new Date().toISOString(),
                version: '1.0.0'
            }
        };
    }
}

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TemplateManager;
}
