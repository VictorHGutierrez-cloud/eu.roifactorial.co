// Sistema de Tradução Automática Completa
// Este script identifica e traduz automaticamente todo o conteúdo do site

class AutoTranslator {
    constructor() {
        this.translations = {
            'pt': {},
            'en': {},
            'es': {},
            'fr': {},
            'de': {},
            'it': {}
        };
        
        // Dicionário de traduções para os textos mais comuns
        this.translationMap = {
            // Títulos principais
            'Factorial Finance | Plataforma de Compliance Fiscal para Portugal': {
                'en': 'Factorial Finance | Tax Compliance Platform for Portugal',
                'es': 'Factorial Finance | Plataforma de Cumplimiento Fiscal para Portugal',
                'fr': 'Factorial Finance | Plateforme de Conformité Fiscale pour le Portugal',
                'de': 'Factorial Finance | Steuer-Compliance-Plattform für Portugal',
                'it': 'Factorial Finance | Piattaforma di Conformità Fiscale per il Portogallo'
            },
            
            // Hero Section
            'Transforme a Gestão Financeira da Sua Empresa': {
                'en': 'Transform Your Company\'s Financial Management',
                'es': 'Transforma la Gestión Financiera de Tu Empresa',
                'fr': 'Transformez la Gestion Financière de Votre Entreprise',
                'de': 'Verwandeln Sie das Finanzmanagement Ihres Unternehmens',
                'it': 'Trasforma la Gestione Finanziaria della Tua Azienda'
            },
            
            'A solução completa para compliance fiscal, gestão de despesas e relatórios financeiros em Portugal.': {
                'en': 'The complete solution for tax compliance, expense management and financial reporting in Portugal.',
                'es': 'La solución completa para cumplimiento fiscal, gestión de gastos e informes financieros en Portugal.',
                'fr': 'La solution complète pour la conformité fiscale, la gestion des dépenses et les rapports financiers au Portugal.',
                'de': 'Die komplette Lösung für Steuer-Compliance, Ausgabenverwaltung und Finanzberichte in Portugal.',
                'it': 'La soluzione completa per la conformità fiscale, la gestione delle spese e i rapporti finanziari in Portogallo.'
            },
            
            'Agendar Demonstração': {
                'en': 'Schedule Demo',
                'es': 'Programar Demo',
                'fr': 'Planifier une Démo',
                'de': 'Demo Terminieren',
                'it': 'Prenota Demo'
            },
            
            'Ver Preços': {
                'en': 'View Pricing',
                'es': 'Ver Precios',
                'fr': 'Voir les Prix',
                'de': 'Preise Anzeigen',
                'it': 'Visualizza Prezzi'
            },
            
            // Seções principais
            'Por que escolher a Factorial Finance?': {
                'en': 'Why choose Factorial Finance?',
                'es': '¿Por qué elegir Factorial Finance?',
                'fr': 'Pourquoi choisir Factorial Finance ?',
                'de': 'Warum Factorial Finance wählen?',
                'it': 'Perché scegliere Factorial Finance?'
            },
            
            'Compliance Fiscal Automatizado': {
                'en': 'Automated Tax Compliance',
                'es': 'Cumplimiento Fiscal Automatizado',
                'fr': 'Conformité Fiscale Automatisée',
                'de': 'Automatisierte Steuer-Compliance',
                'it': 'Conformità Fiscale Automatizzata'
            },
            
            'Gestão Inteligente de Despesas': {
                'en': 'Smart Expense Management',
                'es': 'Gestión Inteligente de Gastos',
                'fr': 'Gestion Intelligente des Dépenses',
                'de': 'Intelligente Ausgabenverwaltung',
                'it': 'Gestione Intelligente delle Spese'
            },
            
            'Relatórios Financeiros Avançados': {
                'en': 'Advanced Financial Reports',
                'es': 'Informes Financieros Avanzados',
                'fr': 'Rapports Financiers Avancés',
                'de': 'Erweiterte Finanzberichte',
                'it': 'Rapporti Finanziari Avanzati'
            },
            
            'Integração com Sistemas Existentes': {
                'en': 'Integration with Existing Systems',
                'es': 'Integración con Sistemas Existentes',
                'fr': 'Intégration avec les Systèmes Existants',
                'de': 'Integration mit Bestehenden Systemen',
                'it': 'Integrazione con Sistemi Esistenti'
            },
            
            // Benefícios
            'Reduza o tempo de processamento fiscal em até 80%': {
                'en': 'Reduce tax processing time by up to 80%',
                'es': 'Reduce el tiempo de procesamiento fiscal hasta un 80%',
                'fr': 'Réduisez le temps de traitement fiscal jusqu\'à 80%',
                'de': 'Reduzieren Sie die Steuerbearbeitungszeit um bis zu 80%',
                'it': 'Riduci il tempo di elaborazione fiscale fino all\'80%'
            },
            
            'Elimine erros manuais e multas desnecessárias': {
                'en': 'Eliminate manual errors and unnecessary fines',
                'es': 'Elimina errores manuales y multas innecesarias',
                'fr': 'Éliminez les erreurs manuelles et les amendes inutiles',
                'de': 'Eliminieren Sie manuelle Fehler und unnötige Strafen',
                'it': 'Elimina errori manuali e multe non necessarie'
            },
            
            'Acesso em tempo real a relatórios financeiros': {
                'en': 'Real-time access to financial reports',
                'es': 'Acceso en tiempo real a informes financieros',
                'fr': 'Accès en temps réel aux rapports financiers',
                'de': 'Echtzeit-Zugang zu Finanzberichten',
                'it': 'Accesso in tempo reale ai rapporti finanziari'
            },
            
            // Preços
            'Planos e Preços': {
                'en': 'Plans and Pricing',
                'es': 'Planes y Precios',
                'fr': 'Plans et Tarifs',
                'de': 'Pläne und Preise',
                'it': 'Piani e Prezzi'
            },
            
            'Escolha o plano ideal para sua empresa': {
                'en': 'Choose the ideal plan for your company',
                'es': 'Elige el plan ideal para tu empresa',
                'fr': 'Choisissez le plan idéal pour votre entreprise',
                'de': 'Wählen Sie den idealen Plan für Ihr Unternehmen',
                'it': 'Scegli il piano ideale per la tua azienda'
            },
            
            'Básico': {
                'en': 'Basic',
                'es': 'Básico',
                'fr': 'Basique',
                'de': 'Basis',
                'it': 'Base'
            },
            
            'Profissional': {
                'en': 'Professional',
                'es': 'Profesional',
                'fr': 'Professionnel',
                'de': 'Professionell',
                'it': 'Professionale'
            },
            
            'Empresarial': {
                'en': 'Enterprise',
                'es': 'Empresarial',
                'fr': 'Entreprise',
                'de': 'Unternehmen',
                'it': 'Aziendale'
            },
            
            'por mês': {
                'en': 'per month',
                'es': 'por mes',
                'fr': 'par mois',
                'de': 'pro Monat',
                'it': 'al mese'
            },
            
            'Começar Agora': {
                'en': 'Get Started',
                'es': 'Comenzar Ahora',
                'fr': 'Commencer',
                'de': 'Jetzt Starten',
                'it': 'Inizia Ora'
            },
            
            // Footer
            'Todos os direitos reservados': {
                'en': 'All rights reserved',
                'es': 'Todos los derechos reservados',
                'fr': 'Tous droits réservés',
                'de': 'Alle Rechte vorbehalten',
                'it': 'Tutti i diritti riservati'
            },
            
            'Suporte': {
                'en': 'Support',
                'es': 'Soporte',
                'fr': 'Support',
                'de': 'Support',
                'it': 'Supporto'
            },
            
            'Privacidade': {
                'en': 'Privacy',
                'es': 'Privacidad',
                'fr': 'Confidentialité',
                'de': 'Datenschutz',
                'it': 'Privacy'
            },
            
            'Termos de Uso': {
                'en': 'Terms of Use',
                'es': 'Términos de Uso',
                'fr': 'Conditions d\'Utilisation',
                'de': 'Nutzungsbedingungen',
                'it': 'Termini di Utilizzo'
            },
            
            // Textos específicos que estavam faltando
            'Quais são os Riscos Fiscais e Laborais Mais Comuns?': {
                'en': 'What are the Most Common Tax and Labor Risks?',
                'es': '¿Cuáles son los Riesgos Fiscales y Laborales Más Comunes?',
                'fr': 'Quels sont les Risques Fiscaux et du Travail les Plus Courants ?',
                'de': 'Was sind die Häufigsten Steuer- und Arbeitsrisiken?',
                'it': 'Quali sono i Rischi Fiscali e del Lavoro Più Comuni?'
            },
            
            'E quais são as penalizações do sistema fiscal português? Vamos ver!': {
                'en': 'And what are the penalties of the Portuguese tax system? Let\'s see!',
                'es': '¿Y cuáles son las penalizaciones del sistema fiscal portugués? ¡Vamos a ver!',
                'fr': 'Et quelles sont les pénalités du système fiscal portugais ? Voyons !',
                'de': 'Und was sind die Strafen des portugiesischen Steuersystems? Schauen wir mal!',
                'it': 'E quali sono le penalità del sistema fiscale portoghese? Vediamo!'
            },
            
            'Riscos Fiscais e Laborais': {
                'en': 'Tax and Labor Risks',
                'es': 'Riesgos Fiscales y Laborales',
                'fr': 'Risques Fiscaux et du Travail',
                'de': 'Steuer- und Arbeitsrisiken',
                'it': 'Rischi Fiscali e del Lavoro'
            },
            
            'Penalizações do Sistema Fiscal': {
                'en': 'Tax System Penalties',
                'es': 'Penalizaciones del Sistema Fiscal',
                'fr': 'Pénalités du Système Fiscal',
                'de': 'Steuersystem-Strafen',
                'it': 'Penalità del Sistema Fiscale'
            },
            
            'Sistema Fiscal Português': {
                'en': 'Portuguese Tax System',
                'es': 'Sistema Fiscal Portugués',
                'fr': 'Système Fiscal Portugais',
                'de': 'Portugiesisches Steuersystem',
                'it': 'Sistema Fiscale Portoghese'
            },
            
            'Vamos ver!': {
                'en': 'Let\'s see!',
                'es': '¡Vamos a ver!',
                'fr': 'Voyons !',
                'de': 'Schauen wir mal!',
                'it': 'Vediamo!'
            },
            
            // Mais textos comuns
            'Descubra como': {
                'en': 'Discover how',
                'es': 'Descubre cómo',
                'fr': 'Découvrez comment',
                'de': 'Entdecken Sie, wie',
                'it': 'Scopri come'
            },
            
            'Aprenda mais sobre': {
                'en': 'Learn more about',
                'es': 'Aprende más sobre',
                'fr': 'En savoir plus sur',
                'de': 'Erfahren Sie mehr über',
                'it': 'Scopri di più su'
            },
            
            'Conheça as funcionalidades': {
                'en': 'Discover the features',
                'es': 'Conoce las funcionalidades',
                'fr': 'Découvrez les fonctionnalités',
                'de': 'Entdecken Sie die Funktionen',
                'it': 'Scopri le funzionalità'
            },
            
            'Saiba mais': {
                'en': 'Learn more',
                'es': 'Saber más',
                'fr': 'En savoir plus',
                'de': 'Mehr erfahren',
                'it': 'Scopri di più'
            },
            
            'Entre em contato': {
                'en': 'Get in touch',
                'es': 'Ponte en contacto',
                'fr': 'Contactez-nous',
                'de': 'Kontakt aufnehmen',
                'it': 'Mettiti in contatto'
            },
            
            'Fale conosco': {
                'en': 'Talk to us',
                'es': 'Háblanos',
                'fr': 'Parlez-nous',
                'de': 'Sprechen Sie mit uns',
                'it': 'Parlaci'
            }
        };
    }
    
    // Extrai todos os textos do HTML de forma mais abrangente
    extractTexts() {
        const texts = new Set();
        
        // Função para processar texto e adicionar ao conjunto
        const processText = (text) => {
            const cleanText = text.trim();
            if (cleanText.length > 2 && 
                !cleanText.match(/^[\d\s\-\.\,\:\;\(\)\[\]{}]+$/) &&
                !cleanText.match(/^[<>\/\\]+$/) &&
                !cleanText.includes('data-') &&
                !cleanText.includes('class=') &&
                !cleanText.includes('id=')) {
                texts.add(cleanText);
            }
        };
        
        // 1. Usar TreeWalker para textos normais
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    const text = node.textContent.trim();
                    if (text.length > 2 && !text.match(/^[\d\s\-\.\,\:\;\(\)\[\]{}]+$/)) {
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    return NodeFilter.FILTER_REJECT;
                }
            }
        );
        
        let node;
        while (node = walker.nextNode()) {
            processText(node.textContent);
        }
        
        // 2. Capturar textos de elementos específicos que podem ter formatação especial
        const specialSelectors = [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'p', 'span', 'div', 'a', 'button',
            '[data-i18n]', '.text-', '.font-', '.leading-'
        ];
        
        specialSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                // Capturar texto direto do elemento
                if (element.textContent) {
                    processText(element.textContent);
                }
                
                // Capturar texto de elementos filhos
                element.querySelectorAll('*').forEach(child => {
                    if (child.textContent && child.children.length === 0) {
                        processText(child.textContent);
                    }
                });
            });
        });
        
        // 3. Capturar textos de placeholders e valores
        document.querySelectorAll('input, textarea').forEach(input => {
            if (input.placeholder) processText(input.placeholder);
            if (input.value && input.type !== 'hidden') processText(input.value);
        });
        
        // 4. Capturar textos de títulos e meta tags
        if (document.title) processText(document.title);
        document.querySelectorAll('meta[name="description"]').forEach(meta => {
            if (meta.content) processText(meta.content);
        });
        
        return Array.from(texts);
    }
    
    // Gera traduções automáticas usando o dicionário
    generateTranslations() {
        const texts = this.extractTexts();
        
        texts.forEach(text => {
            // Verifica se já temos tradução no dicionário
            if (this.translationMap[text]) {
                Object.keys(this.translationMap[text]).forEach(lang => {
                    if (!this.translations[lang]) this.translations[lang] = {};
                    this.translations[lang][text] = this.translationMap[text][lang];
                });
            } else {
                // Para textos não encontrados, mantém o original
                Object.keys(this.translations).forEach(lang => {
                    if (lang !== 'pt') {
                        if (!this.translations[lang]) this.translations[lang] = {};
                        this.translations[lang][text] = text; // Mantém original se não houver tradução
                    }
                });
            }
        });
        
        return this.translations;
    }
    
    // Aplica as traduções ao HTML de forma mais robusta
    applyTranslations(lang = 'pt') {
        const translations = this.translations[lang] || {};
        let translatedCount = 0;
        
        // Função para traduzir um texto
        const translateText = (text) => {
            const cleanText = text.trim();
            if (translations[cleanText]) {
                return translations[cleanText];
            }
            return text;
        };
        
        // 1. Traduzir textos de nós de texto
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    const text = node.textContent.trim();
                    if (text.length > 2 && 
                        !text.match(/^[\d\s\-\.\,\:\;\(\)\[\]{}]+$/) &&
                        !text.includes('data-') &&
                        !text.includes('class=') &&
                        !text.includes('id=')) {
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    return NodeFilter.FILTER_REJECT;
                }
            }
        );
        
        let node;
        while (node = walker.nextNode()) {
            const originalText = node.textContent.trim();
            const translatedText = translateText(originalText);
            if (translatedText !== originalText) {
                node.textContent = translatedText;
                translatedCount++;
            }
        }
        
        // 2. Traduzir elementos específicos
        const elementsToTranslate = [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'p', 'span', 'div', 'a', 'button', 'li', 'td', 'th'
        ];
        
        elementsToTranslate.forEach(tagName => {
            document.querySelectorAll(tagName).forEach(element => {
                if (element.children.length === 0) { // Só elementos sem filhos
                    const originalText = element.textContent.trim();
                    const translatedText = translateText(originalText);
                    if (translatedText !== originalText) {
                        element.textContent = translatedText;
                        translatedCount++;
                    }
                }
            });
        });
        
        // 3. Traduzir atributos específicos
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translations[key];
                } else {
                    element.textContent = translations[key];
                }
                translatedCount++;
            }
        });
        
        // 4. Traduzir placeholders e valores de inputs
        document.querySelectorAll('input, textarea').forEach(input => {
            if (input.placeholder) {
                const translatedPlaceholder = translateText(input.placeholder);
                if (translatedPlaceholder !== input.placeholder) {
                    input.placeholder = translatedPlaceholder;
                    translatedCount++;
                }
            }
            if (input.value && input.type !== 'hidden' && input.type !== 'submit') {
                const translatedValue = translateText(input.value);
                if (translatedValue !== input.value) {
                    input.value = translatedValue;
                    translatedCount++;
                }
            }
        });
        
        // 5. Traduzir título da página
        if (document.title) {
            const translatedTitle = translateText(document.title);
            if (translatedTitle !== document.title) {
                document.title = translatedTitle;
                translatedCount++;
            }
        }
        
        // 6. Traduzir meta descriptions
        document.querySelectorAll('meta[name="description"]').forEach(meta => {
            if (meta.content) {
                const translatedContent = translateText(meta.content);
                if (translatedContent !== meta.content) {
                    meta.content = translatedContent;
                    translatedCount++;
                }
            }
        });
        
        // Mostrar resultado no console
        console.log(`🌍 Tradução para ${lang.toUpperCase()}: ${translatedCount} textos traduzidos`);
        
        return translatedCount;
    }
    
    // Salva as traduções em arquivos JSON
    saveTranslations() {
        Object.keys(this.translations).forEach(lang => {
            const data = JSON.stringify(this.translations[lang], null, 2);
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `translations_${lang}.json`;
            a.click();
            URL.revokeObjectURL(url);
        });
    }
}

// Função para inicializar o tradutor
function initAutoTranslator() {
    const translator = new AutoTranslator();
    
    // Gera todas as traduções
    translator.generateTranslations();
    
    // Adiciona botões de idioma
    addLanguageButtons(translator);
    
    return translator;
}

// Adiciona botões de seleção de idioma
function addLanguageButtons(translator) {
    const languageButtons = document.createElement('div');
    languageButtons.className = 'fixed top-4 right-4 z-50 flex gap-2';
    languageButtons.innerHTML = `
        <button onclick="translator.applyTranslations('pt')" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">PT</button>
        <button onclick="translator.applyTranslations('en')" class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">EN</button>
        <button onclick="translator.applyTranslations('es')" class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">ES</button>
        <button onclick="translator.applyTranslations('fr')" class="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600">FR</button>
        <button onclick="translator.applyTranslations('de')" class="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">DE</button>
        <button onclick="translator.applyTranslations('it')" class="px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600">IT</button>
        <button onclick="translator.saveTranslations()" class="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600">💾</button>
    `;
    
    document.body.appendChild(languageButtons);
}

// Inicializa quando a página carrega
let translator;
document.addEventListener('DOMContentLoaded', function() {
    translator = initAutoTranslator();
    console.log('Sistema de tradução automática carregado!');
    console.log('Use os botões no canto superior direito para testar as traduções');
    console.log('Clique no botão 💾 para baixar os arquivos de tradução');
});
