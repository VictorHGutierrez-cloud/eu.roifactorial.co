(() => {
  // Configuração de países e idiomas suportados
  const countries = {
    'PT': { name: 'Portugal', flag: '🇵🇹', languages: ['pt-PT', 'en'] },
    'ES': { name: 'España', flag: '🇪🇸', languages: ['es', 'en'] },
    'FR': { name: 'France', flag: '🇫🇷', languages: ['fr', 'en'] },
    'DE': { name: 'Deutschland', flag: '🇩🇪', languages: ['de', 'en'] },
    'IT': { name: 'Italia', flag: '🇮🇹', languages: ['it', 'en'] }
  };

  const supportedLanguages = ["pt-PT", "pt-BR", "en", "es", "fr", "de", "it"];
  const defaultCountry = 'PT';
  const defaultLang = 'pt-PT';

  // Dicionários completos para cada idioma
  const dictionaries = {
    "pt-PT": {
      "hero.title": "Factorial Finance em Portugal!",
      "lang.label": "Idioma",
      "country.label": "País",
      "lang.pt-BR": "Português (BR)",
      "lang.pt-PT": "Português (PT)",
      "lang.en": "Inglês",
      "lang.es": "Espanhol",
      "lang.fr": "Francês",
      "lang.de": "Alemão",
      "lang.it": "Italiano",
      "country.PT": "Portugal",
      "country.ES": "Espanha",
      "country.FR": "França",
      "country.DE": "Alemanha",
      "country.IT": "Itália",
      "meta.title": "Factorial Finance | Plataforma de Compliance Fiscal para Portugal",
      "nav.brand": "Factorial Finance",
      "nav.home": "Home",
      "nav.bundles": "Bundles",
      "nav.calculator": "Calculadora ROI",
      "nav.compliance": "Compliance",
      "nav.integrations": "Integrações",
      "nav.success": "Cases de Sucesso",
      "nav.demo": "Agendar Demo",
      "mobile.menu": "Menu",
      "hero.calculate": "🧮 Calcular Economia",
      "hero.case": "▶️ Case de Sucesso em Portugal",
      "section1.title": "Como a Factorial apoia na Mitigação de Riscos Fiscais e Laborais",
      "section1.subtitle": "Elimine o risco de Tributação Autónoma e otimize a gestão financeira em minutos!",
      "feature1.title": "Gestão de Projetos",
      "feature1.desc": "Transforme a gestão de projetos para decisões ágeis e eficientes",
      "feature1.item1": "Organize e faça gestão completa de projetos e subprojetos",
      "feature1.item2": "Associe tempo e despesas; monitorize horas e custos por colaborador",
      "feature1.item3": "Defina gestor/diretor do projeto, prazos, orçamento e divisas (Enterprise)",
      "feature1.item4": "Insights na visão geral de projetos; API para integrações",
      "feature2.title": "Despesas",
      "feature2.desc": "Centralize e acompanhe despesas com fluxos de aprovação e OCR",
      "feature2.item1": "Acompanhamento de despesas em tempo real; insights e relatórios",
      "feature2.item2": "Leitura inteligente (OCR) e fluxos de aprovação com múltiplas etapas",
      "feature2.item3": "Políticas ilimitadas, múltiplas aprovações e regras automáticas (Enterprise)",
      "feature2.item4": "Reembolso via Recibo de Vencimento; subcategorias/IVA/centros de custo",
      "feature3.title": "Gestão de Softwares",
      "feature3.desc": "Controle de custos de SaaS, aprovações e relatórios",
      "feature3.item1": "Notificações de renovação, painel e relatórios de custos",
      "feature3.item2": "Fluxos de aprovação e pagamentos de subscrições SaaS",
      "feature3.item3": "Monitorização de uso, exportações e alertas de revogação de acesso",
      "feature4.title": "Requisições de compra",
      "feature4.desc": "Controle de gastos com processos de aprovação guiados",
      "feature4.item1": "Centralize todas as requisições; exporte e organize fornecedores",
      "feature4.item2": "Construa fluxos de aprovação específicos por tipo de pedido",
      "feature4.item3": "Cartões de utilização única para requisições e processamento de faturas",
      "calculator.title": "💰 CALCULADORA",
      "calculator.subtitle": "DE POUPANÇAS",
      "calculator.description": "Calcule quanto pode poupar eliminando riscos fiscais e laborais com a Factorial",
      "calculator.company_data": "Dados da Sua Empresa",
      "calculator.savings": "Suas Poupanças Potenciais",
      "calculator.employees": "Colaboradores que submetem despesas",
      "calculator.approvers": "Aprovadores (gestores / controlo financeiro)",
      "calculator.industry": "Setor de Atividade",
      "calculator.industry.services": "Serviços (1.0)",
      "calculator.industry.manufacturing": "Indústria (1.3)",
      "calculator.industry.technology": "Tecnologia (0.9)",
      "calculator.industry.retail": "Retalho (1.1)",
      "calculator.industry.healthcare": "Saúde (1.2)",
      "calculator.transactions": "Transações de despesas (mês)",
      "calculator.time_per_tx": "Tempo manual por transação (min)",
      "calculator.hourly_cost": "Custo médio por hora (€)",
      "calculator.error_value": "Valor médio por erro (€)",
      "calculator.total_employees": "Total de colaboradores (Core obrigatório)",
      "calculator.core_note": "Core é por colaborador ativo (obrigatório para todos).",
      "calculator.expense_users": "Utilizadores de Despesas (total)",
      "calculator.project_seats": "Seats em Projetos (Project Management)",
      "calculator.procurement": "Procurement (AP + Compras)",
      "calculator.invoicing": "Faturamento de Vendas",
      "calculator.calculate": "Calcular Poupanças",
      "compliance.title": "⚠️ Quais são os Riscos Fiscais e Laborais",
      "compliance.subtitle": "Mais Comuns?",
      "compliance.description": "E quais são as penalizações do sistema fiscal português? Vamos ver!",
      "compliance.autonomous_taxation.title": "Tributação Autónoma",
      "compliance.autonomous_taxation.subtitle": "Risco de 50–70% sobre despesas não documentadas",
      "compliance.act_fines.title": "Multas ACT",
      "compliance.act_fines.subtitle": "Registo de tempo obrigatório por lei",
      "compliance.tsu_exemption.title": "Isenção TSU / IRS",
      "compliance.tsu_exemption.subtitle": "Ajudas de custo e quilometragens com limite legal",
      "compliance.vat_rates.title": "Taxas de IVA por Região Portuguesa (2025)",
      "compliance.exemption_limits.title": "Limites de Isenção TSU/IRS",
      "compliance.daily_allowance": "Alimentação Diária",
      "compliance.cash": "Em Dinheiro:",
      "compliance.card": "Cartão/Vale:",
      "compliance.mileage": "Quilometragem",
      "compliance.own_vehicle": "Veículo Próprio:",
      "compliance.integrations.title": "🔗 INTEGRAÇÕES",
      "compliance.integrations.subtitle": "COM ECOSSISTEMA PORTUGUÊS",
      "compliance.integrations.description": "Conecte-se com as principais ferramentas de contabilidade e gestão de RH do mercado português",
      "compliance.partnership.title": "👨‍💼 PARCERIA",
      "compliance.partnership.subtitle": "COM CONTABILISTA CERTIFICADO",
      "compliance.partnership.description": "A Factorial não é concorrente, mas sim parceiro indispensável do Contabilista Certificado",
      "social_proof.title": "Empresas que confiam na Factorial",
      "social_proof.subtitle": "Conformidade total com a Autoridade Tributária | GDPR | SAFT-PT",
      "contact.title": "🛡️ PRONTO PARA",
      "contact.subtitle": "Trabalhar de forma mais inteligente?",
      "contact.description": "Como? Libertamos profissionais de tarefas burocráticas para que possam dedicar mais tempo a apoiar as suas equipas e criar uma cultura empresarial forte e envolvente.",
      "contact.back_to_top": "⬆️ Voltar ao Início",
      "contact.schedule_demo": "📞 Demonstração Personalizada",
      "footer.title": "Factorial Finance Portugal",
      "footer.description": "Simplificamos a conformidade fiscal e laboral para empresas portuguesas.",
      "footer.subdescription": "Mitigação de riscos, automação documental e contabilidade analítica integrada.",
      "footer.copyright": "© 2025 Factorial RH — Todos os direitos reservados.",
      "footer.compliance": "Em conformidade com a legislação portuguesa, GDPR"
    },
    "en": {
      "hero.title": "Factorial Finance in Europe!",
      "lang.label": "Language",
      "country.label": "Country",
      "lang.pt-BR": "Portuguese (BR)",
      "lang.pt-PT": "Portuguese (PT)",
      "lang.en": "English",
      "lang.es": "Spanish",
      "lang.fr": "French",
      "lang.de": "German",
      "lang.it": "Italian",
      "country.PT": "Portugal",
      "country.ES": "Spain",
      "country.FR": "France",
      "country.DE": "Germany",
      "country.IT": "Italy",
      "meta.title": "Factorial Finance | Fiscal Compliance Platform for Europe",
      "nav.brand": "Factorial Finance",
      "nav.home": "Home",
      "nav.bundles": "Bundles",
      "nav.calculator": "ROI Calculator",
      "nav.compliance": "Compliance",
      "nav.integrations": "Integrations",
      "nav.success": "Success Stories",
      "nav.demo": "Schedule Demo",
      "mobile.menu": "Menu",
      "hero.calculate": "🧮 Calculate Savings",
      "hero.case": "▶️ Success Case in Europe",
      "section1.title": "How Factorial Supports Fiscal and Labor Risk Mitigation",
      "section1.subtitle": "Eliminate fiscal risks and optimize financial management in minutes!",
      "feature1.title": "Project Management",
      "feature1.desc": "Transform project management for agile and efficient decisions",
      "feature1.item1": "Organize and manage complete projects and subprojects",
      "feature1.item2": "Associate time and expenses; monitor hours and costs per employee",
      "feature1.item3": "Define project manager/director, deadlines, budget and currencies (Enterprise)",
      "feature1.item4": "Insights in project overview; API for integrations",
      "feature2.title": "Expenses",
      "feature2.desc": "Centralize and track expenses with approval flows and OCR",
      "feature2.item1": "Real-time expense tracking; insights and reports",
      "feature2.item2": "Intelligent reading (OCR) and multi-step approval flows",
      "feature2.item3": "Unlimited policies, multiple approvals and automatic rules (Enterprise)",
      "feature2.item4": "Reimbursement via Payslip; subcategories/VAT/cost centers",
      "feature3.title": "Software Management",
      "feature3.desc": "SaaS cost control, approvals and reports",
      "feature3.item1": "Renewal notifications, dashboard and cost reports",
      "feature3.item2": "Approval flows and SaaS subscription payments",
      "feature3.item3": "Usage monitoring, exports and access revocation alerts",
      "feature4.title": "Purchase requisitions",
      "feature4.desc": "Expense control with guided approval processes",
      "feature4.item1": "Centralize all requisitions; export and organize suppliers",
      "feature4.item2": "Build specific approval flows by request type",
      "feature4.item3": "Single-use cards for requisitions and invoice processing",
      "calculator.title": "💰 SAVINGS",
      "calculator.subtitle": "CALCULATOR",
      "calculator.description": "Calculate how much you can save by eliminating fiscal and labor risks with Factorial",
      "calculator.company_data": "Your Company Data",
      "calculator.savings": "Your Potential Savings",
      "calculator.employees": "Employees who submit expenses",
      "calculator.approvers": "Approvers (managers / financial control)",
      "calculator.industry": "Industry Sector",
      "calculator.industry.services": "Services (1.0)",
      "calculator.industry.manufacturing": "Manufacturing (1.3)",
      "calculator.industry.technology": "Technology (0.9)",
      "calculator.industry.retail": "Retail (1.1)",
      "calculator.industry.healthcare": "Healthcare (1.2)",
      "calculator.transactions": "Expense transactions (month)",
      "calculator.time_per_tx": "Manual time per transaction (min)",
      "calculator.hourly_cost": "Average cost per hour (€)",
      "calculator.error_value": "Average value per error (€)",
      "calculator.total_employees": "Total employees (Core required)",
      "calculator.core_note": "Core is per active employee (required for all).",
      "calculator.expense_users": "Expense Users (total)",
      "calculator.project_seats": "Project Management Seats",
      "calculator.procurement": "Procurement (AP + Purchases)",
      "calculator.invoicing": "Sales Invoicing",
      "calculator.calculate": "Calculate Savings",
      "compliance.title": "⚠️ What are the Most Common",
      "compliance.subtitle": "Fiscal and Labor Risks?",
      "compliance.description": "And what are the penalties of the European fiscal system? Let's see!",
      "compliance.autonomous_taxation.title": "Autonomous Taxation",
      "compliance.autonomous_taxation.subtitle": "Risk of 50–70% on undocumented expenses",
      "compliance.act_fines.title": "Labor Authority Fines",
      "compliance.act_fines.subtitle": "Mandatory time registration by law",
      "compliance.tsu_exemption.title": "Social Security / Income Tax Exemption",
      "compliance.tsu_exemption.subtitle": "Daily allowances and mileage with legal limits",
      "compliance.vat_rates.title": "VAT Rates by European Country (2025)",
      "compliance.exemption_limits.title": "Social Security/Income Tax Exemption Limits",
      "compliance.daily_allowance": "Daily Allowance",
      "compliance.cash": "In Cash:",
      "compliance.card": "Card/Voucher:",
      "compliance.mileage": "Mileage",
      "compliance.own_vehicle": "Own Vehicle:",
      "compliance.integrations.title": "🔗 INTEGRATIONS",
      "compliance.integrations.subtitle": "WITH EUROPEAN ECOSYSTEM",
      "compliance.integrations.description": "Connect with the main accounting and HR management tools in the European market",
      "compliance.partnership.title": "👨‍💼 PARTNERSHIP",
      "compliance.partnership.subtitle": "WITH CERTIFIED ACCOUNTANT",
      "compliance.partnership.description": "Factorial is not a competitor, but an indispensable partner of the Certified Accountant",
      "social_proof.title": "Companies that trust Factorial",
      "social_proof.subtitle": "Full compliance with Tax Authority | GDPR | European Standards",
      "contact.title": "🛡️ READY TO",
      "contact.subtitle": "Work smarter?",
      "contact.description": "How? We free professionals from bureaucratic tasks so they can dedicate more time to supporting their teams and creating a strong and engaging corporate culture.",
      "contact.back_to_top": "⬆️ Back to Top",
      "contact.schedule_demo": "📞 Personalized Demo",
      "footer.title": "Factorial Finance Europe",
      "footer.description": "We simplify fiscal and labor compliance for European companies.",
      "footer.subdescription": "Risk mitigation, document automation and integrated analytical accounting.",
      "footer.copyright": "© 2025 Factorial HR — All rights reserved.",
      "footer.compliance": "In compliance with European legislation, GDPR"
    },
    "es": {
      "hero.title": "¡Factorial Finance en España!",
      "lang.label": "Idioma",
      "country.label": "País",
      "lang.pt-BR": "Portugués (BR)",
      "lang.pt-PT": "Portugués (PT)",
      "lang.en": "Inglés",
      "lang.es": "Español",
      "lang.fr": "Francés",
      "lang.de": "Alemán",
      "lang.it": "Italiano",
      "country.PT": "Portugal",
      "country.ES": "España",
      "country.FR": "Francia",
      "country.DE": "Alemania",
      "country.IT": "Italia",
      "meta.title": "Factorial Finance | Plataforma de Cumplimiento Fiscal para España",
      "nav.brand": "Factorial Finance",
      "nav.home": "Inicio",
      "nav.bundles": "Paquetes",
      "nav.calculator": "Calculadora ROI",
      "nav.compliance": "Cumplimiento",
      "nav.integrations": "Integraciones",
      "nav.success": "Casos de Éxito",
      "nav.demo": "Programar Demo",
      "mobile.menu": "Menú",
      "hero.calculate": "🧮 Calcular Ahorros",
      "hero.case": "▶️ Caso de Éxito en España",
      "section1.title": "Cómo Factorial Apoya en la Mitigación de Riesgos Fiscales y Laborales",
      "section1.subtitle": "¡Elimine los riesgos fiscales y optimice la gestión financiera en minutos!",
      "feature1.title": "Gestión de Proyectos",
      "feature1.desc": "Transforme la gestión de proyectos para decisiones ágiles y eficientes",
      "feature1.item1": "Organice y gestione proyectos completos y subproyectos",
      "feature1.item2": "Asocie tiempo y gastos; monitoree horas y costos por empleado",
      "feature1.item3": "Defina gestor/director del proyecto, plazos, presupuesto y divisas (Enterprise)",
      "feature1.item4": "Insights en la visión general de proyectos; API para integraciones",
      "feature2.title": "Gastos",
      "feature2.desc": "Centralice y rastree gastos con flujos de aprobación y OCR",
      "feature2.item1": "Seguimiento de gastos en tiempo real; insights e informes",
      "feature2.item2": "Lectura inteligente (OCR) y flujos de aprobación multi-etapa",
      "feature2.item3": "Políticas ilimitadas, múltiples aprobaciones y reglas automáticas (Enterprise)",
      "feature2.item4": "Reembolso vía Recibo de Salario; subcategorías/IVA/centros de costo",
      "feature3.title": "Gestión de Software",
      "feature3.desc": "Control de costos SaaS, aprobaciones e informes",
      "feature3.item1": "Notificaciones de renovación, panel e informes de costos",
      "feature3.item2": "Flujos de aprobación y pagos de suscripciones SaaS",
      "feature3.item3": "Monitoreo de uso, exportaciones y alertas de revocación de acceso",
      "feature4.title": "Requisiciones de compra",
      "feature4.desc": "Control de gastos con procesos de aprobación guiados",
      "feature4.item1": "Centralice todas las requisiciones; exporte y organice proveedores",
      "feature4.item2": "Construya flujos de aprobación específicos por tipo de solicitud",
      "feature4.item3": "Tarjetas de uso único para requisiciones y procesamiento de facturas",
      "calculator.title": "💰 CALCULADORA",
      "calculator.subtitle": "DE AHORROS",
      "calculator.description": "Calcule cuánto puede ahorrar eliminando riesgos fiscales y laborales con Factorial",
      "calculator.company_data": "Datos de Su Empresa",
      "calculator.savings": "Sus Ahorros Potenciales",
      "calculator.employees": "Empleados que envían gastos",
      "calculator.approvers": "Aprobadores (gerentes / control financiero)",
      "calculator.industry": "Sector de Actividad",
      "calculator.industry.services": "Servicios (1.0)",
      "calculator.industry.manufacturing": "Industria (1.3)",
      "calculator.industry.technology": "Tecnología (0.9)",
      "calculator.industry.retail": "Retail (1.1)",
      "calculator.industry.healthcare": "Salud (1.2)",
      "calculator.transactions": "Transacciones de gastos (mes)",
      "calculator.time_per_tx": "Tiempo manual por transacción (min)",
      "calculator.hourly_cost": "Costo promedio por hora (€)",
      "calculator.error_value": "Valor promedio por error (€)",
      "calculator.total_employees": "Total de empleados (Core requerido)",
      "calculator.core_note": "Core es por empleado activo (requerido para todos).",
      "calculator.expense_users": "Usuarios de Gastos (total)",
      "calculator.project_seats": "Asientos de Gestión de Proyectos",
      "calculator.procurement": "Procurement (AP + Compras)",
      "calculator.invoicing": "Facturación de Ventas",
      "calculator.calculate": "Calcular Ahorros",
      "compliance.title": "⚠️ ¿Cuáles son los Riesgos Fiscales y Laborales",
      "compliance.subtitle": "Más Comunes?",
      "compliance.description": "¿Y cuáles son las penalizaciones del sistema fiscal español? ¡Vamos a ver!",
      "compliance.autonomous_taxation.title": "Tributación Autónoma",
      "compliance.autonomous_taxation.subtitle": "Riesgo del 50–70% sobre gastos no documentados",
      "compliance.act_fines.title": "Multas de la Inspección de Trabajo",
      "compliance.act_fines.subtitle": "Registro de tiempo obligatorio por ley",
      "compliance.tsu_exemption.title": "Exención de Seguridad Social / IRPF",
      "compliance.tsu_exemption.subtitle": "Dietas y kilometraje con límites legales",
      "compliance.vat_rates.title": "Tipos de IVA por País Europeo (2025)",
      "compliance.exemption_limits.title": "Límites de Exención de Seguridad Social/IRPF",
      "compliance.daily_allowance": "Dieta Diaria",
      "compliance.cash": "En Efectivo:",
      "compliance.card": "Tarjeta/Vale:",
      "compliance.mileage": "Kilometraje",
      "compliance.own_vehicle": "Vehículo Propio:",
      "compliance.integrations.title": "🔗 INTEGRACIONES",
      "compliance.integrations.subtitle": "CON ECOSISTEMA ESPAÑOL",
      "compliance.integrations.description": "Conéctese con las principales herramientas de contabilidad y gestión de RRHH del mercado español",
      "compliance.partnership.title": "👨‍💼 ASOCIACIÓN",
      "compliance.partnership.subtitle": "CON CONTADOR CERTIFICADO",
      "compliance.partnership.description": "Factorial no es competidor, sino socio indispensable del Contador Certificado",
      "social_proof.title": "Empresas que confían en Factorial",
      "social_proof.subtitle": "Cumplimiento total con la Agencia Tributaria | GDPR | Estándares Europeos",
      "contact.title": "🛡️ ¿LISTO PARA",
      "contact.subtitle": "Trabajar de forma más inteligente?",
      "contact.description": "¿Cómo? Liberamos a los profesionales de tareas burocráticas para que puedan dedicar más tiempo a apoyar a sus equipos y crear una cultura empresarial fuerte y atractiva.",
      "contact.back_to_top": "⬆️ Volver al Inicio",
      "contact.schedule_demo": "📞 Demo Personalizada",
      "footer.title": "Factorial Finance España",
      "footer.description": "Simplificamos el cumplimiento fiscal y laboral para empresas españolas.",
      "footer.subdescription": "Mitigación de riesgos, automatización documental y contabilidad analítica integrada.",
      "footer.copyright": "© 2025 Factorial RRHH — Todos los derechos reservados.",
      "footer.compliance": "En cumplimiento con la legislación española, GDPR"
    },
    "fr": {
      "hero.title": "Factorial Finance en France !",
      "lang.label": "Langue",
      "country.label": "Pays",
      "lang.pt-BR": "Portugais (BR)",
      "lang.pt-PT": "Portugais (PT)",
      "lang.en": "Anglais",
      "lang.es": "Espagnol",
      "lang.fr": "Français",
      "lang.de": "Allemand",
      "lang.it": "Italien",
      "country.PT": "Portugal",
      "country.ES": "Espagne",
      "country.FR": "France",
      "country.DE": "Allemagne",
      "country.IT": "Italie",
      "meta.title": "Factorial Finance | Plateforme de Conformité Fiscale pour la France",
      "nav.brand": "Factorial Finance",
      "nav.home": "Accueil",
      "nav.bundles": "Packs",
      "nav.calculator": "Calculateur ROI",
      "nav.compliance": "Conformité",
      "nav.integrations": "Intégrations",
      "nav.success": "Histoires de Succès",
      "nav.demo": "Planifier Demo",
      "mobile.menu": "Menu",
      "hero.calculate": "🧮 Calculer les Économies",
      "hero.case": "▶️ Cas de Succès en France",
      "section1.title": "Comment Factorial Soutient la Mitigation des Risques Fiscaux et du Travail",
      "section1.subtitle": "Éliminez les risques fiscaux et optimisez la gestion financière en minutes !",
      "feature1.title": "Gestion de Projets",
      "feature1.desc": "Transformez la gestion de projets pour des décisions agiles et efficaces",
      "feature1.item1": "Organisez et gérez des projets complets et des sous-projets",
      "feature1.item2": "Associez temps et dépenses ; surveillez les heures et coûts par employé",
      "feature1.item3": "Définissez gestionnaire/directeur du projet, délais, budget et devises (Enterprise)",
      "feature1.item4": "Insights dans la vue d'ensemble des projets ; API pour les intégrations",
      "feature2.title": "Dépenses",
      "feature2.desc": "Centralisez et suivez les dépenses avec des flux d'approbation et OCR",
      "feature2.item1": "Suivi des dépenses en temps réel ; insights et rapports",
      "feature2.item2": "Lecture intelligente (OCR) et flux d'approbation multi-étapes",
      "feature2.item3": "Politiques illimitées, approbations multiples et règles automatiques (Enterprise)",
      "feature2.item4": "Remboursement via Bulletin de Paie ; sous-catégories/TVA/centres de coût",
      "feature3.title": "Gestion de Logiciels",
      "feature3.desc": "Contrôle des coûts SaaS, approbations et rapports",
      "feature3.item1": "Notifications de renouvellement, tableau de bord et rapports de coûts",
      "feature3.item2": "Flux d'approbation et paiements d'abonnements SaaS",
      "feature3.item3": "Surveillance de l'utilisation, exports et alertes de révocation d'accès",
      "feature4.title": "Demandes d'achat",
      "feature4.desc": "Contrôle des dépenses avec processus d'approbation guidés",
      "feature4.item1": "Centralisez toutes les demandes ; exportez et organisez les fournisseurs",
      "feature4.item2": "Construisez des flux d'approbation spécifiques par type de demande",
      "feature4.item3": "Cartes à usage unique pour les demandes et traitement des factures",
      "calculator.title": "💰 CALCULATEUR",
      "calculator.subtitle": "D'ÉCONOMIES",
      "calculator.description": "Calculez combien vous pouvez économiser en éliminant les risques fiscaux et du travail avec Factorial",
      "calculator.company_data": "Données de Votre Entreprise",
      "calculator.savings": "Vos Économies Potentielles",
      "calculator.employees": "Employés qui soumettent des dépenses",
      "calculator.approvers": "Approbateurs (gestionnaires / contrôle financier)",
      "calculator.industry": "Secteur d'Activité",
      "calculator.industry.services": "Services (1.0)",
      "calculator.industry.manufacturing": "Industrie (1.3)",
      "calculator.industry.technology": "Technologie (0.9)",
      "calculator.industry.retail": "Commerce de Détail (1.1)",
      "calculator.industry.healthcare": "Santé (1.2)",
      "calculator.transactions": "Transactions de dépenses (mois)",
      "calculator.time_per_tx": "Temps manuel par transaction (min)",
      "calculator.hourly_cost": "Coût moyen par heure (€)",
      "calculator.error_value": "Valeur moyenne par erreur (€)",
      "calculator.total_employees": "Total employés (Core requis)",
      "calculator.core_note": "Core est par employé actif (requis pour tous).",
      "calculator.expense_users": "Utilisateurs de Dépenses (total)",
      "calculator.project_seats": "Sièges de Gestion de Projets",
      "calculator.procurement": "Procurement (AP + Achats)",
      "calculator.invoicing": "Facturation des Ventes",
      "calculator.calculate": "Calculer les Économies",
      "compliance.title": "⚠️ Quels sont les Risques Fiscaux et du Travail",
      "compliance.subtitle": "Les Plus Courants ?",
      "compliance.description": "Et quelles sont les pénalités du système fiscal français ? Voyons !",
      "compliance.autonomous_taxation.title": "Taxation Autonome",
      "compliance.autonomous_taxation.subtitle": "Risque de 50–70% sur les dépenses non documentées",
      "compliance.act_fines.title": "Amendes de l'Inspection du Travail",
      "compliance.act_fines.subtitle": "Enregistrement du temps obligatoire par la loi",
      "compliance.tsu_exemption.title": "Exonération Sécurité Sociale / Impôt sur le Revenu",
      "compliance.tsu_exemption.subtitle": "Indemnités journalières et kilométrage avec limites légales",
      "compliance.vat_rates.title": "Taux de TVA par Pays Européen (2025)",
      "compliance.exemption_limits.title": "Limites d'Exonération Sécurité Sociale/Impôt sur le Revenu",
      "compliance.daily_allowance": "Indemnité Journalière",
      "compliance.cash": "En Espèces :",
      "compliance.card": "Carte/Voucher :",
      "compliance.mileage": "Kilométrage",
      "compliance.own_vehicle": "Véhicule Personnel :",
      "compliance.integrations.title": "🔗 INTÉGRATIONS",
      "compliance.integrations.subtitle": "AVEC L'ÉCOSYSTÈME FRANÇAIS",
      "compliance.integrations.description": "Connectez-vous avec les principales outils de comptabilité et de gestion RH du marché français",
      "compliance.partnership.title": "👨‍💼 PARTENARIAT",
      "compliance.partnership.subtitle": "AVEC COMPTABLE CERTIFIÉ",
      "compliance.partnership.description": "Factorial n'est pas un concurrent, mais un partenaire indispensable du Comptable Certifié",
      "social_proof.title": "Entreprises qui font confiance à Factorial",
      "social_proof.subtitle": "Conformité totale avec l'Administration Fiscale | GDPR | Standards Européens",
      "contact.title": "🛡️ PRÊT À",
      "contact.subtitle": "Travailler plus intelligemment ?",
      "contact.description": "Comment ? Nous libérons les professionnels des tâches bureaucratiques pour qu'ils puissent consacrer plus de temps à soutenir leurs équipes et créer une culture d'entreprise forte et engageante.",
      "contact.back_to_top": "⬆️ Retour en Haut",
      "contact.schedule_demo": "📞 Démo Personnalisée",
      "footer.title": "Factorial Finance France",
      "footer.description": "Nous simplifions la conformité fiscale et du travail pour les entreprises françaises.",
      "footer.subdescription": "Mitigation des risques, automatisation documentaire et comptabilité analytique intégrée.",
      "footer.copyright": "© 2025 Factorial RH — Tous droits réservés.",
      "footer.compliance": "En conformité avec la législation française, GDPR"
    },
    "de": {
      "hero.title": "Factorial Finance in Deutschland!",
      "lang.label": "Sprache",
      "country.label": "Land",
      "lang.pt-BR": "Portugiesisch (BR)",
      "lang.pt-PT": "Portugiesisch (PT)",
      "lang.en": "Englisch",
      "lang.es": "Spanisch",
      "lang.fr": "Französisch",
      "lang.de": "Deutsch",
      "lang.it": "Italienisch",
      "country.PT": "Portugal",
      "country.ES": "Spanien",
      "country.FR": "Frankreich",
      "country.DE": "Deutschland",
      "country.IT": "Italien",
      "meta.title": "Factorial Finance | Steuer-Compliance-Plattform für Deutschland",
      "nav.brand": "Factorial Finance",
      "nav.home": "Startseite",
      "nav.bundles": "Pakete",
      "nav.calculator": "ROI-Rechner",
      "nav.compliance": "Compliance",
      "nav.integrations": "Integrationen",
      "nav.success": "Erfolgsgeschichten",
      "nav.demo": "Demo Planen",
      "mobile.menu": "Menü",
      "hero.calculate": "🧮 Einsparungen Berechnen",
      "hero.case": "▶️ Erfolgsfall in Deutschland",
      "section1.title": "Wie Factorial bei der Minderung von Steuer- und Arbeitsrisiken unterstützt",
      "section1.subtitle": "Eliminieren Sie Steuerrisiken und optimieren Sie das Finanzmanagement in Minuten!",
      "feature1.title": "Projektmanagement",
      "feature1.desc": "Transformieren Sie das Projektmanagement für agile und effiziente Entscheidungen",
      "feature1.item1": "Organisieren und verwalten Sie vollständige Projekte und Unterprojekte",
      "feature1.item2": "Verknüpfen Sie Zeit und Ausgaben; überwachen Sie Stunden und Kosten pro Mitarbeiter",
      "feature1.item3": "Definieren Sie Projektmanager/Direktor, Fristen, Budget und Währungen (Enterprise)",
      "feature1.item4": "Einblicke in die Projektübersicht; API für Integrationen",
      "feature2.title": "Ausgaben",
      "feature2.desc": "Zentralisieren und verfolgen Sie Ausgaben mit Genehmigungsabläufen und OCR",
      "feature2.item1": "Echtzeit-Ausgabenverfolgung; Einblicke und Berichte",
      "feature2.item2": "Intelligente Lesung (OCR) und mehrstufige Genehmigungsabläufe",
      "feature2.item3": "Unbegrenzte Richtlinien, mehrere Genehmigungen und automatische Regeln (Enterprise)",
      "feature2.item4": "Erstattung über Gehaltsabrechnung; Unterkategorien/Mehrwertsteuer/Kostenstellen",
      "feature3.title": "Software-Management",
      "feature3.desc": "SaaS-Kostenkontrolle, Genehmigungen und Berichte",
      "feature3.item1": "Verlängerungsbenachrichtigungen, Dashboard und Kostenberichte",
      "feature3.item2": "Genehmigungsabläufe und SaaS-Abonnementzahlungen",
      "feature3.item3": "Nutzungsüberwachung, Exporte und Zugriffsentzugswarnungen",
      "feature4.title": "Kaufanfragen",
      "feature4.desc": "Ausgabenkontrolle mit geführten Genehmigungsprozessen",
      "feature4.item1": "Zentralisieren Sie alle Anfragen; exportieren und organisieren Sie Lieferanten",
      "feature4.item2": "Erstellen Sie spezifische Genehmigungsabläufe nach Anfragetyp",
      "feature4.item3": "Einmalige Karten für Anfragen und Rechnungsbearbeitung",
      "calculator.title": "💰 EINSPARUNGS-",
      "calculator.subtitle": "RECHNER",
      "calculator.description": "Berechnen Sie, wie viel Sie durch die Eliminierung von Steuer- und Arbeitsrisiken mit Factorial sparen können",
      "calculator.company_data": "Ihre Unternehmensdaten",
      "calculator.savings": "Ihre Potenziellen Einsparungen",
      "calculator.employees": "Mitarbeiter, die Ausgaben einreichen",
      "calculator.approvers": "Genehmiger (Manager / Finanzkontrolle)",
      "calculator.industry": "Branche",
      "calculator.industry.services": "Dienstleistungen (1.0)",
      "calculator.industry.manufacturing": "Industrie (1.3)",
      "calculator.industry.technology": "Technologie (0.9)",
      "calculator.industry.retail": "Einzelhandel (1.1)",
      "calculator.industry.healthcare": "Gesundheitswesen (1.2)",
      "calculator.transactions": "Ausgabentransaktionen (Monat)",
      "calculator.time_per_tx": "Manuelle Zeit pro Transaktion (Min)",
      "calculator.hourly_cost": "Durchschnittliche Kosten pro Stunde (€)",
      "calculator.error_value": "Durchschnittlicher Wert pro Fehler (€)",
      "calculator.total_employees": "Gesamtmitarbeiter (Core erforderlich)",
      "calculator.core_note": "Core ist pro aktivem Mitarbeiter (für alle erforderlich).",
      "calculator.expense_users": "Ausgabenbenutzer (gesamt)",
      "calculator.project_seats": "Projektmanagement-Plätze",
      "calculator.procurement": "Beschaffung (AP + Einkauf)",
      "calculator.invoicing": "Verkaufsabrechnung",
      "calculator.calculate": "Einsparungen Berechnen",
      "compliance.title": "⚠️ Was sind die Häufigsten",
      "compliance.subtitle": "Steuer- und Arbeitsrisiken?",
      "compliance.description": "Und was sind die Strafen des deutschen Steuersystems? Schauen wir uns das an!",
      "compliance.autonomous_taxation.title": "Autonome Besteuerung",
      "compliance.autonomous_taxation.subtitle": "Risiko von 50–70% bei nicht dokumentierten Ausgaben",
      "compliance.act_fines.title": "Arbeitsaufsichtsstrafen",
      "compliance.act_fines.subtitle": "Zeiterfassung gesetzlich vorgeschrieben",
      "compliance.tsu_exemption.title": "Sozialversicherungs- / Einkommensteuerbefreiung",
      "compliance.tsu_exemption.subtitle": "Tagesgeld und Kilometerpauschale mit gesetzlichen Grenzen",
      "compliance.vat_rates.title": "MwSt-Sätze nach Europäischem Land (2025)",
      "compliance.exemption_limits.title": "Sozialversicherungs-/Einkommensteuerbefreiungsgrenzen",
      "compliance.daily_allowance": "Tagesgeld",
      "compliance.cash": "Bar:",
      "compliance.card": "Karte/Gutschein:",
      "compliance.mileage": "Kilometerpauschale",
      "compliance.own_vehicle": "Eigenes Fahrzeug:",
      "compliance.integrations.title": "🔗 INTEGRATIONEN",
      "compliance.integrations.subtitle": "MIT DEUTSCHEM ÖKOSYSTEM",
      "compliance.integrations.description": "Verbinden Sie sich mit den wichtigsten Buchhaltungs- und HR-Management-Tools des deutschen Marktes",
      "compliance.partnership.title": "👨‍💼 PARTNERSCHAFT",
      "compliance.partnership.subtitle": "MIT ZERTIFIZIERTEM BUCHHALTER",
      "compliance.partnership.description": "Factorial ist kein Konkurrent, sondern ein unverzichtbarer Partner des Zertifizierten Buchhalters",
      "social_proof.title": "Unternehmen, die Factorial vertrauen",
      "social_proof.subtitle": "Vollständige Compliance mit Finanzamt | GDPR | Europäische Standards",
      "contact.title": "🛡️ BEREIT ZUM",
      "contact.subtitle": "Intelligenter Arbeiten?",
      "contact.description": "Wie? Wir befreien Fachkräfte von bürokratischen Aufgaben, damit sie mehr Zeit für die Unterstützung ihrer Teams und die Schaffung einer starken und ansprechenden Unternehmenskultur haben.",
      "contact.back_to_top": "⬆️ Nach Oben",
      "contact.schedule_demo": "📞 Personalisierte Demo",
      "footer.title": "Factorial Finance Deutschland",
      "footer.description": "Wir vereinfachen die Steuer- und Arbeitscompliance für deutsche Unternehmen.",
      "footer.subdescription": "Risikominderung, Dokumentenautomatisierung und integrierte analytische Buchhaltung.",
      "footer.copyright": "© 2025 Factorial HR — Alle Rechte vorbehalten.",
      "footer.compliance": "In Übereinstimmung mit deutscher Gesetzgebung, GDPR"
    },
    "it": {
      "hero.title": "Factorial Finance in Italia!",
      "lang.label": "Lingua",
      "country.label": "Paese",
      "lang.pt-BR": "Portoghese (BR)",
      "lang.pt-PT": "Portoghese (PT)",
      "lang.en": "Inglese",
      "lang.es": "Spagnolo",
      "lang.fr": "Francese",
      "lang.de": "Tedesco",
      "lang.it": "Italiano",
      "country.PT": "Portogallo",
      "country.ES": "Spagna",
      "country.FR": "Francia",
      "country.DE": "Germania",
      "country.IT": "Italia",
      "meta.title": "Factorial Finance | Piattaforma di Conformità Fiscale per l'Italia",
      "nav.brand": "Factorial Finance",
      "nav.home": "Home",
      "nav.bundles": "Pacchetti",
      "nav.calculator": "Calcolatore ROI",
      "nav.compliance": "Conformità",
      "nav.integrations": "Integrazioni",
      "nav.success": "Storie di Successo",
      "nav.demo": "Pianifica Demo",
      "mobile.menu": "Menu",
      "hero.calculate": "🧮 Calcola Risparmi",
      "hero.case": "▶️ Caso di Successo in Italia",
      "section1.title": "Come Factorial Supporta la Mitigazione dei Rischi Fiscali e del Lavoro",
      "section1.subtitle": "Elimina i rischi fiscali e ottimizza la gestione finanziaria in minuti!",
      "feature1.title": "Gestione Progetti",
      "feature1.desc": "Trasforma la gestione progetti per decisioni agili ed efficienti",
      "feature1.item1": "Organizza e gestisci progetti completi e sottoprogetti",
      "feature1.item2": "Associa tempo e spese; monitora ore e costi per dipendente",
      "feature1.item3": "Definisci manager/direttore del progetto, scadenze, budget e valute (Enterprise)",
      "feature1.item4": "Insights nella panoramica progetti; API per integrazioni",
      "feature2.title": "Spese",
      "feature2.desc": "Centralizza e traccia le spese con flussi di approvazione e OCR",
      "feature2.item1": "Tracciamento spese in tempo reale; insights e report",
      "feature2.item2": "Lettura intelligente (OCR) e flussi di approvazione multi-step",
      "feature2.item3": "Politiche illimitate, approvazioni multiple e regole automatiche (Enterprise)",
      "feature2.item4": "Rimborso via Busta Paga; sottocategorie/IVA/centri di costo",
      "feature3.title": "Gestione Software",
      "feature3.desc": "Controllo costi SaaS, approvazioni e report",
      "feature3.item1": "Notifiche di rinnovo, dashboard e report costi",
      "feature3.item2": "Flussi di approvazione e pagamenti abbonamenti SaaS",
      "feature3.item3": "Monitoraggio utilizzo, esportazioni e alert di revoca accesso",
      "feature4.title": "Richieste di acquisto",
      "feature4.desc": "Controllo spese con processi di approvazione guidati",
      "feature4.item1": "Centralizza tutte le richieste; esporta e organizza fornitori",
      "feature4.item2": "Costruisci flussi di approvazione specifici per tipo di richiesta",
      "feature4.item3": "Carte monouso per richieste e elaborazione fatture",
      "calculator.title": "💰 CALCOLATORE",
      "calculator.subtitle": "DI RISPARMI",
      "calculator.description": "Calcola quanto puoi risparmiare eliminando rischi fiscali e del lavoro con Factorial",
      "calculator.company_data": "Dati della Vostra Azienda",
      "calculator.savings": "I Vostri Risparmi Potenziali",
      "calculator.employees": "Dipendenti che inviano spese",
      "calculator.approvers": "Approvatori (manager / controllo finanziario)",
      "calculator.industry": "Settore di Attività",
      "calculator.industry.services": "Servizi (1.0)",
      "calculator.industry.manufacturing": "Industria (1.3)",
      "calculator.industry.technology": "Tecnologia (0.9)",
      "calculator.industry.retail": "Vendita al Dettaglio (1.1)",
      "calculator.industry.healthcare": "Sanità (1.2)",
      "calculator.transactions": "Transazioni spese (mese)",
      "calculator.time_per_tx": "Tempo manuale per transazione (min)",
      "calculator.hourly_cost": "Costo medio per ora (€)",
      "calculator.error_value": "Valore medio per errore (€)",
      "calculator.total_employees": "Totale dipendenti (Core richiesto)",
      "calculator.core_note": "Core è per dipendente attivo (richiesto per tutti).",
      "calculator.expense_users": "Utenti Spese (totale)",
      "calculator.project_seats": "Posti Gestione Progetti",
      "calculator.procurement": "Procurement (AP + Acquisti)",
      "calculator.invoicing": "Fatturazione Vendite",
      "calculator.calculate": "Calcola Risparmi",
      "compliance.title": "⚠️ Quali sono i Rischi Fiscali e del Lavoro",
      "compliance.subtitle": "Più Comuni?",
      "compliance.description": "E quali sono le penalità del sistema fiscale italiano? Vediamo!",
      "compliance.autonomous_taxation.title": "Tassazione Autonoma",
      "compliance.autonomous_taxation.subtitle": "Rischio del 50–70% su spese non documentate",
      "compliance.act_fines.title": "Multe Ispettorato del Lavoro",
      "compliance.act_fines.subtitle": "Registrazione tempo obbligatoria per legge",
      "compliance.tsu_exemption.title": "Esenzione Previdenza Sociale / IRPEF",
      "compliance.tsu_exemption.subtitle": "Indennità giornaliere e chilometraggio con limiti legali",
      "compliance.vat_rates.title": "Aliquote IVA per Paese Europeo (2025)",
      "compliance.exemption_limits.title": "Limiti Esenzione Previdenza Sociale/IRPEF",
      "compliance.daily_allowance": "Indennità Giornaliera",
      "compliance.cash": "In Contanti:",
      "compliance.card": "Carta/Voucher:",
      "compliance.mileage": "Chilometraggio",
      "compliance.own_vehicle": "Veicolo Proprio:",
      "compliance.integrations.title": "🔗 INTEGRAZIONI",
      "compliance.integrations.subtitle": "CON ECOSISTEMA ITALIANO",
      "compliance.integrations.description": "Connettiti con i principali strumenti di contabilità e gestione HR del mercato italiano",
      "compliance.partnership.title": "👨‍💼 PARTNERSHIP",
      "compliance.partnership.subtitle": "CON CONTABILE CERTIFICATO",
      "compliance.partnership.description": "Factorial non è un concorrente, ma un partner indispensabile del Contabile Certificato",
      "social_proof.title": "Aziende che si fidano di Factorial",
      "social_proof.subtitle": "Conformità totale con Agenzia delle Entrate | GDPR | Standard Europei",
      "contact.title": "🛡️ PRONTO A",
      "contact.subtitle": "Lavorare in modo più intelligente?",
      "contact.description": "Come? Liberiamo i professionisti dai compiti burocratici in modo che possano dedicare più tempo a supportare i loro team e creare una cultura aziendale forte e coinvolgente.",
      "contact.back_to_top": "⬆️ Torna in Cima",
      "contact.schedule_demo": "📞 Demo Personalizzata",
      "footer.title": "Factorial Finance Italia",
      "footer.description": "Semplifichiamo la conformità fiscale e del lavoro per le aziende italiane.",
      "footer.subdescription": "Mitigazione dei rischi, automazione documentale e contabilità analitica integrata.",
      "footer.copyright": "© 2025 Factorial HR — Tutti i diritti riservati.",
      "footer.compliance": "In conformità con la legislazione italiana, GDPR"
    }
  };

  // Dados específicos por país
  const countryData = {
    'PT': {
      name: 'Portugal',
      flag: '🇵🇹',
      vatRates: {
        normal: 23,
        intermediate: 13,
        reduced: 6
      },
      regions: [
        { name: 'Portugal Continental', normal: 23, intermediate: 13, reduced: 6 },
        { name: 'Região Autónoma da Madeira', normal: 22, intermediate: 12, reduced: 5 },
        { name: 'Região Autónoma dos Açores', normal: 16, intermediate: 9, reduced: 4 }
      ],
      exemptionLimits: {
        dailyAllowance: { cash: 6.00, card: 10.20 },
        mileage: 0.40
      },
      risks: [
        {
          title: 'Tributação Autónoma',
          description: 'Risco de 50–70% sobre despesas não documentadas',
          icon: '💥',
          color: '#FF355E'
        },
        {
          title: 'Multas ACT',
          description: 'Registo de tempo obrigatório por lei',
          icon: '⏰',
          color: '#F59E0B'
        },
        {
          title: 'Isenção TSU / IRS',
          description: 'Ajudas de custo e quilometragens com limite legal',
          icon: '💰',
          color: '#8B5CF6'
        }
      ]
    },
    'ES': {
      name: 'España',
      flag: '🇪🇸',
      vatRates: {
        normal: 21,
        intermediate: 10,
        reduced: 4
      },
      regions: [
        { name: 'España Peninsular', normal: 21, intermediate: 10, reduced: 4 },
        { name: 'Islas Canarias', normal: 7, intermediate: 0, reduced: 0 },
        { name: 'Ceuta y Melilla', normal: 0, intermediate: 0, reduced: 0 }
      ],
      exemptionLimits: {
        dailyAllowance: { cash: 26.67, card: 26.67 },
        mileage: 0.19
      },
      risks: [
        {
          title: 'Tributación Autónoma',
          description: 'Riesgo del 50–70% sobre gastos no documentados',
          icon: '💥',
          color: '#FF355E'
        },
        {
          title: 'Multas de la Inspección de Trabajo',
          description: 'Registro de tiempo obligatorio por ley',
          icon: '⏰',
          color: '#F59E0B'
        },
        {
          title: 'Exención de Seguridad Social / IRPF',
          description: 'Dietas y kilometraje con límites legales',
          icon: '💰',
          color: '#8B5CF6'
        }
      ]
    },
    'FR': {
      name: 'France',
      flag: '🇫🇷',
      vatRates: {
        normal: 20,
        intermediate: 10,
        reduced: 5.5
      },
      regions: [
        { name: 'France Métropolitaine', normal: 20, intermediate: 10, reduced: 5.5 },
        { name: 'Corse', normal: 20, intermediate: 10, reduced: 5.5 },
        { name: 'DOM-TOM', normal: 8.5, intermediate: 2.1, reduced: 1.75 }
      ],
      exemptionLimits: {
        dailyAllowance: { cash: 5.55, card: 5.55 },
        mileage: 0.56
      },
      risks: [
        {
          title: 'Taxation Autonome',
          description: 'Risque de 50–70% sur les dépenses non documentées',
          icon: '💥',
          color: '#FF355E'
        },
        {
          title: 'Amendes de l\'Inspection du Travail',
          description: 'Enregistrement du temps obligatoire par la loi',
          icon: '⏰',
          color: '#F59E0B'
        },
        {
          title: 'Exonération Sécurité Sociale / Impôt sur le Revenu',
          description: 'Indemnités journalières et kilométrage avec limites légales',
          icon: '💰',
          color: '#8B5CF6'
        }
      ]
    },
    'DE': {
      name: 'Deutschland',
      flag: '🇩🇪',
      vatRates: {
        normal: 19,
        intermediate: 7,
        reduced: 7
      },
      regions: [
        { name: 'Deutschland', normal: 19, intermediate: 7, reduced: 7 }
      ],
      exemptionLimits: {
        dailyAllowance: { cash: 12, card: 12 },
        mileage: 0.30
      },
      risks: [
        {
          title: 'Autonome Besteuerung',
          description: 'Risiko von 50–70% bei nicht dokumentierten Ausgaben',
          icon: '💥',
          color: '#FF355E'
        },
        {
          title: 'Arbeitsaufsichtsstrafen',
          description: 'Zeiterfassung gesetzlich vorgeschrieben',
          icon: '⏰',
          color: '#F59E0B'
        },
        {
          title: 'Sozialversicherungs- / Einkommensteuerbefreiung',
          description: 'Tagesgeld und Kilometerpauschale mit gesetzlichen Grenzen',
          icon: '💰',
          color: '#8B5CF6'
        }
      ]
    },
    'IT': {
      name: 'Italia',
      flag: '🇮🇹',
      vatRates: {
        normal: 22,
        intermediate: 10,
        reduced: 4
      },
      regions: [
        { name: 'Italia', normal: 22, intermediate: 10, reduced: 4 }
      ],
      exemptionLimits: {
        dailyAllowance: { cash: 5.29, card: 5.29 },
        mileage: 0.20
      },
      risks: [
        {
          title: 'Tassazione Autonoma',
          description: 'Rischio del 50–70% su spese non documentate',
          icon: '💥',
          color: '#FF355E'
        },
        {
          title: 'Multe Ispettorato del Lavoro',
          description: 'Registrazione tempo obbligatoria per legge',
          icon: '⏰',
          color: '#F59E0B'
        },
        {
          title: 'Esenzione Previdenza Sociale / IRPEF',
          description: 'Indennità giornaliere e chilometraggio con limiti legali',
          icon: '💰',
          color: '#8B5CF6'
        }
      ]
    }
  };

  let currentCountry = defaultCountry;
  let currentLanguage = defaultLang;

  async function loadDictionary(lang) {
    const safeLang = supportedLanguages.includes(lang) ? lang : defaultLang;
    
    // Tenta carregar do arquivo JSON primeiro (para GitHub)
    try {
    const res = await fetch(`i18n/${safeLang}.json`);
      if (res.ok) {
        const fileDict = await res.json();
        // Merge com dicionário inline (dicionário inline tem prioridade)
        return { ...dictionaries[safeLang], ...fileDict };
      }
    } catch (e) {
      console.log("Usando dicionário inline para", safeLang);
    }
    
    // Fallback para dicionário inline
    return dictionaries[safeLang] || dictionaries[defaultLang];
  }

  async function setLanguage(lang) {
    const dictionary = await loadDictionary(lang);
    currentLanguage = lang;
    document.documentElement.setAttribute("lang", lang);
    
    // Aplicar traduções
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dictionary[key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.setAttribute("placeholder", dictionary[key]);
        } else {
          el.textContent = dictionary[key];
        }
      }
    });
    
    localStorage.setItem("lang", lang);
    populateLangOptions(dictionary, lang);
    updateCountrySpecificContent();
  }

  function setCountry(country) {
    currentCountry = country;
    localStorage.setItem("country", country);
    updateCountrySpecificContent();
    populateCountryOptions();
  }

  function updateCountrySpecificContent() {
    const countryInfo = countryData[currentCountry];
    if (!countryInfo) return;

    // Atualizar título do hero baseado no país
    const heroTitle = document.querySelector('[data-i18n="hero.title"]');
    if (heroTitle) {
      const dict = dictionaries[currentLanguage] || dictionaries[defaultLang];
      heroTitle.textContent = dict["hero.title"];
    }

    // Atualizar tabela de taxas de IVA
    updateVATRatesTable(countryInfo);
    
    // Atualizar limites de isenção
    updateExemptionLimits(countryInfo);
    
    // Atualizar riscos fiscais
    updateFiscalRisks(countryInfo);
  }

  function updateVATRatesTable(countryInfo) {
    const tableBody = document.querySelector('#vat-rates-table tbody');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    countryInfo.regions.forEach(region => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="border border-gray-300 px-4 py-3 font-semibold">${region.name}</td>
        <td class="border border-gray-300 px-4 py-3 text-center font-bold" style="color: #FF355E;">${region.normal}%</td>
        <td class="border border-gray-300 px-4 py-3 text-center text-orange-600 font-bold">${region.intermediate}%</td>
        <td class="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">${region.reduced}%</td>
      `;
      tableBody.appendChild(row);
    });
  }

  function updateExemptionLimits(countryInfo) {
    const dailyAllowanceCash = document.querySelector('#daily-allowance-cash');
    const dailyAllowanceCard = document.querySelector('#daily-allowance-card');
    const mileageRate = document.querySelector('#mileage-rate');
    
    if (dailyAllowanceCash) dailyAllowanceCash.textContent = `€${countryInfo.exemptionLimits.dailyAllowance.cash}`;
    if (dailyAllowanceCard) dailyAllowanceCard.textContent = `€${countryInfo.exemptionLimits.dailyAllowance.card}`;
    if (mileageRate) mileageRate.textContent = `€${countryInfo.exemptionLimits.mileage}/km`;
  }

  function updateFiscalRisks(countryInfo) {
    const risksContainer = document.querySelector('#fiscal-risks-container');
    if (!risksContainer) return;

    risksContainer.innerHTML = '';
    countryInfo.risks.forEach((risk, index) => {
      const riskCard = document.createElement('div');
      riskCard.className = 'bg-white rounded-2xl p-8 shadow-xl border-l-8 mb-8';
      riskCard.style.borderLeftColor = risk.color;
      
      riskCard.innerHTML = `
        <div class="flex items-center mb-6">
          <div class="w-16 h-16 rounded-full flex items-center justify-center mr-4" style="background-color: ${risk.color}20;">
            <span class="text-3xl">${risk.icon}</span>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-2" style="color: ${risk.color};">${risk.title}</h3>
            <p class="text-sm text-gray-500">${risk.description}</p>
          </div>
        </div>
        <div class="space-y-4">
          <div class="p-4 rounded-lg" style="background-color: ${risk.color}05;">
            <h4 class="font-bold mb-2" style="color: ${risk.color}CC;">❌ SEM FACTORIAL:</h4>
            <ul class="text-sm space-y-1" style="color: ${risk.color}CC;">
              <li>• Despesas não documentadas = Tributação Autónoma de 50%</li>
              <li>• Em caso de prejuízo = 70%</li>
              <li>• Multas da AT por documentação deficiente</li>
            </ul>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-bold text-green-800 mb-2">✅ COM FACTORIAL:</h4>
            <ul class="text-sm text-green-700 space-y-1">
              <li>• OCR obriga validação documental</li>
              <li>• Fluxos de aprovação eliminam despesas informais</li>
              <li>• Risco de Tributação Autónoma eliminado</li>
            </ul>
          </div>
        </div>
      `;
      
      risksContainer.appendChild(riskCard);
    });
  }

  function populateLangOptions(dict, current) {
    const select = document.getElementById("langSwitcher");
    if (!select) return;
    
    // Build options once
    if (!select.dataset.bound) {
      select.innerHTML = "";
      const options = [
        { value: "pt-BR", label: dict["lang.pt-BR"] || "Português (BR)" },
        { value: "pt-PT", label: dict["lang.pt-PT"] || "Português (PT)" },
        { value: "en", label: dict["lang.en"] || "English" },
        { value: "es", label: dict["lang.es"] || "Español" },
        { value: "fr", label: dict["lang.fr"] || "Français" },
        { value: "de", label: dict["lang.de"] || "Deutsch" },
        { value: "it", label: dict["lang.it"] || "Italiano" }
      ];
      options.forEach(({ value, label }) => {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = label;
        select.appendChild(opt);
      });
      select.dataset.bound = "true";
      select.addEventListener("change", (e) => setLanguage(e.target.value));
    }
    select.value = current;
  }

  function populateCountryOptions() {
    const select = document.getElementById("countrySwitcher");
    if (!select) return;
    
    // Build options once
    if (!select.dataset.bound) {
      select.innerHTML = "";
      Object.entries(countries).forEach(([code, country]) => {
        const opt = document.createElement("option");
        opt.value = code;
        opt.textContent = `${country.flag} ${country.name}`;
        select.appendChild(opt);
      });
      select.dataset.bound = "true";
      select.addEventListener("change", (e) => setCountry(e.target.value));
    }
    select.value = currentCountry;
  }

  // Initialize
  window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang");
    const savedCountry = localStorage.getItem("country");
    const browserLang = navigator.language?.substring(0, 2) === "pt" ? "pt-PT" : "en";
    
    currentLanguage = savedLang || browserLang || defaultLang;
    currentCountry = savedCountry || defaultCountry;
    
    setLanguage(currentLanguage).catch(console.error);
    setCountry(currentCountry);
  });

  // Expose for manual switching if needed
  window.setLanguage = setLanguage;
  window.setCountry = setCountry;
  window.countryData = countryData;
})();