# 📚 Documentação - Factorial Finance

Bem-vindo à documentação do projeto Factorial Finance. Aqui você encontrará todos os guias e informações necessárias para entender e usar o sistema.

## 📋 Índice da Documentação

### 🌍 Sistema de Tradução
- **[Como Usar Tradução](COMO_USAR_TRADUCAO.md)** - Guia completo do sistema de tradução universal
  - Países suportados (Portugal, Espanha, França, Alemanha, Itália)
  - Idiomas disponíveis (7 idiomas)
  - Como testar e personalizar
  - Solução de problemas

### 🚀 Deploy e Configuração
- **[GitHub Deployment](GITHUB_DEPLOYMENT.md)** - Instruções para deploy no GitHub Pages
  - Configuração do repositório
  - Ativação do GitHub Pages
  - Configuração de domínio personalizado
  - Troubleshooting

## 🏗️ Estrutura do Projeto

```
Site MultiLinguas ROI FINANCE/
├── docs/                          # 📚 Documentação
│   ├── README.md                  # Este arquivo
│   ├── COMO_USAR_TRADUCAO.md      # Guia de tradução
│   └── GITHUB_DEPLOYMENT.md       # Guia de deploy
├── i18n/                          # 🌍 Arquivos de tradução
│   ├── pt-PT.json                 # Português (Portugal)
│   ├── en.json                    # Inglês
│   ├── es.json                    # Espanhol
│   ├── fr.json                    # Francês
│   ├── de.json                    # Alemão
│   └── it.json                    # Italiano
├── images/                        # 🖼️ Imagens e logos
│   └── logos/                     # Logos das empresas
├── indexfinalcopy.html            # 🏠 Site principal
├── test-translation.html          # 🧪 Página de teste
├── i18n.js                        # ⚙️ Sistema de tradução
└── README.md                      # 📖 README principal
```

## 🎯 Início Rápido

### 1. **Para Desenvolvedores**
1. Leia [Como Usar Tradução](COMO_USAR_TRADUCAO.md)
2. Teste com `test-translation.html`
3. Personalize conforme necessário

### 2. **Para Deploy**
1. Leia [GitHub Deployment](GITHUB_DEPLOYMENT.md)
2. Configure o repositório
3. Ative o GitHub Pages

### 3. **Para Testes**
1. Abra `indexfinalcopy.html` no navegador
2. Teste os seletores de país/idioma
3. Verifique se o conteúdo muda dinamicamente

## 🔧 Funcionalidades Principais

### ✅ **Sistema de Tradução Universal**
- 5 países europeus suportados
- 7 idiomas disponíveis
- Conteúdo dinâmico por país
- Dados fiscais específicos por região

### ✅ **Interface Responsiva**
- Funciona em desktop, tablet e mobile
- Seletores intuitivos de país/idioma
- Design moderno e profissional

### ✅ **Dados Fiscais Atualizados**
- Taxas de IVA por país
- Limites de isenção específicos
- Riscos fiscais localizados
- Regulamentações atuais

## 🆘 Suporte

### Problemas Comuns
1. **Tradução não funciona**: Verifique se `i18n.js` está carregado
2. **Dados incorretos**: Confirme se o país está na lista
3. **Seletores não aparecem**: Verifique IDs no HTML

### Como Reportar Problemas
1. Descreva o problema detalhadamente
2. Inclua o país/idioma que estava testando
3. Mencione o navegador e sistema operacional
4. Inclua prints de tela se possível

## 📞 Contato

Para dúvidas ou suporte técnico:
- Verifique primeiro a documentação
- Teste com `test-translation.html`
- Consulte os guias específicos

---

**📝 Última atualização:** Janeiro 2025  
**🔄 Versão:** 1.0.0  
**👨‍💻 Desenvolvido para:** Factorial Finance
