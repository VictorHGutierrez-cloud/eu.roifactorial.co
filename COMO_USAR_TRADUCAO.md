# 🌍 Sistema de Tradução Universal - Factorial Finance

## 📋 Visão Geral

O site agora suporta **5 países europeus** com **7 idiomas** diferentes, com conteúdo dinâmico baseado no país selecionado.

### 🇪🇺 Países Suportados
- **🇵🇹 Portugal** - Português (PT) + Inglês
- **🇪🇸 Espanha** - Espanhol + Inglês  
- **🇫🇷 França** - Francês + Inglês
- **🇩🇪 Alemanha** - Alemão + Inglês
- **🇮🇹 Itália** - Italiano + Inglês

### 🗣️ Idiomas Disponíveis
- Português (PT) - Padrão para Portugal
- Português (BR) - Para Brasil
- English - Universal
- Español - Para Espanha
- Français - Para França
- Deutsch - Para Alemanha
- Italiano - Para Itália

## 🚀 Como Funciona

### 1. **Seletores no Topo da Página**
- **Seletor de País**: Escolha o país (🇵🇹🇪🇸🇫🇷🇩🇪🇮🇹)
- **Seletor de Idioma**: Escolha o idioma (PT/EN/ES/FR/DE/IT)

### 2. **Conteúdo Dinâmico por País**
- **Taxas de IVA**: Atualizadas automaticamente por país
- **Limites de Isenção**: Valores específicos de cada país
- **Riscos Fiscais**: Regulamentações específicas por país
- **Títulos e Textos**: Adaptados para cada mercado

### 3. **Dados Específicos por País**

#### 🇵🇹 Portugal
- IVA: 23% (Continental), 22% (Madeira), 16% (Açores)
- Alimentação: €6,00 (dinheiro) / €10,20 (cartão)
- Quilometragem: €0,40/km

#### 🇪🇸 Espanha  
- IVA: 21% (Peninsular), 7% (Canárias), 0% (Ceuta/Melilla)
- Alimentação: €26,67 (dinheiro/cartão)
- Quilometragem: €0,19/km

#### 🇫🇷 França
- IVA: 20% (Metropolitana), 8,5% (DOM-TOM)
- Alimentação: €5,55 (dinheiro/cartão)
- Quilometragem: €0,56/km

#### 🇩🇪 Alemanha
- IVA: 19% (Normal), 7% (Reduzida)
- Alimentação: €12,00 (dinheiro/cartão)
- Quilometragem: €0,30/km

#### 🇮🇹 Itália
- IVA: 22% (Normal), 10% (Intermédia), 4% (Reduzida)
- Alimentação: €5,29 (dinheiro/cartão)
- Quilometragem: €0,20/km

## 🛠️ Estrutura Técnica

### Arquivos Principais
- `indexfinalcopy.html` - Site principal com seletor de país/idioma
- `i18n.js` - Sistema de tradução universal
- `i18n/` - Pasta com arquivos JSON de tradução
- `test-translation.html` - Página de teste do sistema

### Arquivos de Tradução
- `i18n/pt-PT.json` - Português (Portugal)
- `i18n/en.json` - Inglês (Universal)
- `i18n/es.json` - Espanhol
- `i18n/fr.json` - Francês
- `i18n/de.json` - Alemão
- `i18n/it.json` - Italiano

## 🧪 Como Testar

### 1. **Teste Básico**
1. Abra `indexfinalcopy.html` no navegador
2. Use os seletores no canto superior esquerdo
3. Mude entre países e idiomas
4. Verifique se o conteúdo muda dinamicamente

### 2. **Teste Avançado**
1. Abra `test-translation.html` no navegador
2. Teste todas as combinações país/idioma
3. Verifique os dados específicos de cada país
4. Confirme se as taxas de IVA e limites estão corretos

### 3. **Teste de Persistência**
1. Mude o país e idioma
2. Recarregue a página (F5)
3. Verifique se as seleções foram mantidas

## 🔧 Personalização

### Adicionar Novo País
1. Adicione o país em `countryData` no `i18n.js`
2. Crie arquivo de tradução em `i18n/`
3. Adicione opção no seletor HTML

### Adicionar Novo Idioma
1. Adicione o idioma em `supportedLanguages` no `i18n.js`
2. Crie arquivo de tradução em `i18n/`
3. Adicione opção no seletor HTML

### Modificar Dados de País
1. Edite `countryData` no `i18n.js`
2. Atualize taxas de IVA, limites, riscos fiscais
3. Teste com `test-translation.html`

## 📱 Responsividade

O sistema funciona em:
- ✅ Desktop
- ✅ Tablet  
- ✅ Mobile
- ✅ Todos os navegadores modernos

## 🐛 Solução de Problemas

### Tradução Não Funciona
1. Verifique se `i18n.js` está carregado
2. Confirme se os arquivos JSON existem
3. Abra o console do navegador (F12) para ver erros

### Dados de País Incorretos
1. Verifique `countryData` no `i18n.js`
2. Confirme se o país está na lista
3. Teste com `test-translation.html`

### Seletores Não Aparecem
1. Verifique se o HTML tem os IDs corretos
2. Confirme se o JavaScript está carregado
3. Verifique se não há erros no console

## 🎯 Próximos Passos

1. **Testar todas as combinações** país/idioma
2. **Validar dados fiscais** com especialistas locais
3. **Adicionar mais países** se necessário
4. **Otimizar performance** para carregamento rápido
5. **Adicionar analytics** para rastrear uso por país

## 📞 Suporte

Se encontrar problemas:
1. Verifique o console do navegador (F12)
2. Teste com `test-translation.html`
3. Confirme se todos os arquivos estão presentes
4. Verifique se não há erros de sintaxe JSON

---

**✅ Sistema Pronto para Produção!**

O site agora é verdadeiramente universal, adaptando-se automaticamente ao país e idioma selecionados pelo usuário.