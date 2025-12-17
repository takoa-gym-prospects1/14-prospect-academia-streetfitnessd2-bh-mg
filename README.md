# Dinâmica Academia - Landing Page

Bem-vindo ao repositório do site da **Dinâmica Academia**. Este projeto é uma Landing Page moderna, rápida e otimizada para conversão, desenvolvida com as melhores tecnologias web.

## 🚀 Tecnologias Utilizadas

- **React + TypeScript:** Para uma interface robusta e sem erros.
- **Vite:** Build tool extremamente rápido.
- **Styled Components:** Estilização modular e livre de conflitos.
- **Framer Motion:** Animações fluidas e elegantes.

## 🛠️ Como Executar o Projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O site estará disponível em `http://localhost:5173`.

3.  **Para gerar a versão final (Build):**
    ```bash
    npm run build
    ```
    Os arquivos prontos para publicação estarão na pasta `dist`.

## 📝 Como Editar o Conteúdo

Todo o conteúdo de texto, links, telefones e configurações de imagens está centralizado em um único arquivo para facilitar a manutenção.

**Arquivo:** `src/content/Content.ts`

Neste arquivo, você encontrará seções como:
- `contact`: Endereço, telefones e mensagens do WhatsApp.
- `hero`: Títulos e imagens da seção principal.
- `pricing`: Planos e preços.
- `schedule`: Imagens e textos da seção de horários.
- `seo`: Configurações para Google (Título, Descrição).

**Exemplo de edição:**
Para mudar o telefone do WhatsApp, procure por:
```typescript
contact: {
    whatsapp: "(19) 99999-9999",
    whatsappRaw: "5519999999999", // Apenas números
    // ...
}
```

## 📱 Imagens

As imagens estão localizadas na pasta `public/images`. Ao substituir uma imagem, mantenha o mesmo nome do arquivo ou atualize o caminho correspondente no `Content.ts`.

---
Desenvolvido por **TAKOA**.
