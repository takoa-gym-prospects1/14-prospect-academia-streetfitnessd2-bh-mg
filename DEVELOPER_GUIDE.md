# Guia do Desenvolvedor - Template TAKOA Gym

Este documento é voltado para a equipe de desenvolvimento e manutenção do template. O cliente final não deve precisar consultar este arquivo.

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura baseada em **componentes funcionais** e **conteúdo desacoplado**.

### Estrutura de Pastas

```
src/
├── components/
│   ├── common/       # Componentes globais (Navbar, Footer)
│   └── home/         # Seções da Landing Page (Hero, Pricing, etc.)
├── content/
│   └── Content.ts    # CMS Local - Única fonte da verdade para dados
├── assets/           # Assets importados via JS (SVGs, logos pequenos)
└── index.css         # Variáveis globais e reset CSS
public/
└── images/           # Imagens estáticas referenciadas no Content.ts
```

## 🎨 Padrão de Estilização

Estamos migrando para o padrão **Styles File Separation**.
- **Bom:** Arquivo `NomeComponente.tsx` (Lógica) + `NomeComponente.styles.ts` (Estilos).
- **A Fazer:** Alguns componentes (`Pricing`, `Services`, `BMI`) ainda possuem estilos no mesmo arquivo `.tsx`. Em futuras manutenções, refatore movendo os `styled.div` para um arquivo `.styles.ts` adjacente.

**Por que?** Isso melhora a legibilidade do código React e facilita a manutenção do design system.

## ⚙️ Configurações Críticas

### SEO e Open Graph (Metatags Estáticas)
Os crawlers de redes sociais (WhatsApp, Facebook) leem o `index.html` estático.
O arquivo `index.html` **deve** ser mantido sincronizado com o `Content.ts` manualmente para garantir:
1.  **Cor do Tema:** `<meta name="theme-color">` deve bater com `Content.theme.colors.primary`.
2.  **Imagem de Preview:** `og:image` aponta para `/images/preview.webp`.
3.  **Title/Description:** Devem ser cópias fiéis do `Content.seo`.

### Segurança (Security Headers)
O `index.html` possui uma **Content Security Policy (CSP)** restritiva.
Se adicionar novos scripts externos (analytics, chats, pixels), você **precisa** atualizar a meta tag `Content-Security-Policy` no `index.html` para permitir o domínio.

## 🔧 Helpers e Utilitários

### Links do WhatsApp
Não concatene strings manualmente. Use o padrão estabelecido:
```typescript
const { contact } = Content;
// URL: `https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(messagem)}`
```
Certifique-se de que `whatsappRaw` em `Content.ts` contenha apenas números (ex: `551999999999`).

### Ícones e Assets
Use `react-icons` (biblioteca `fa` - FontAwesome 5) para ícones de interface.
Para imagens de conteúdo, sempre use o array `AssetImages` no `Content.ts` para manter o controle das dimensões recomendadas.

## 🚀 Deploy

O projeto é "build-agnostic", mas otimizado para **Netlify** ou **Vercel**.
O comando `npm run build` gera arquivos estáticos puros na pasta `dist`, que podem ser hospedados em qualquer lugar.

---
**Notas de Versão:**
- v1.0: Refatoração inicial, centralização de conteúdo e correções de segurança.
- v1.1: Implementação do Mobile Accordion no Schedule, ajuste de gradiente no FeatureStrip e correção de data automática.
