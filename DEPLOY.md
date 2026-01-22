# Guia de Deploy: Portfólio Matheus Vieira

A maneira mais fácil, rápida e gratuita de colocar seu portfólio Next.js no ar é usando a **Vercel** (criadores do Next.js).

## Pré-requisitos

1.  **Conta no GitHub**: Você já tem e o código já está lá!
2.  **Conta na Vercel**: Você pode criar uma gratuitamente usando sua conta do GitHub.

## Passo a Passo para Deploy na Vercel

1.  **Acesse a Vercel**:
    *   Vá para [vercel.com](https://vercel.com/signup).
    *   Clique em "Sign Up" e escolha "Continue with GitHub".

2.  **Importe seu Projeto**:
    *   No painel da Vercel, clique em **"Add New..."** -> **"Project"**.
    *   Você verá uma lista dos seus repositórios do GitHub.
    *   Encontre o repositório **`Portf-lio-Matheus-Vieira`** e clique em **"Import"**.

3.  **Configure o Projeto**:
    *   **Framework Preset**: A Vercel deve detectar automaticamente como **Next.js**.
    *   **Root Directory**: Como seu projeto Next.js está na raiz do repositório (ou na pasta `PortDevVieira` se você moveu), certifique-se de que a Vercel está apontando para a pasta correta.
        *   *Nota*: Se o seu `package.json` estiver dentro de uma pasta (ex: `PortDevVieira`), clique em "Edit" ao lado de "Root Directory" e selecione essa pasta.
    *   **Environment Variables**: Você não precisa configurar nenhuma variável de ambiente por enquanto, a menos que adicione APIs externas no futuro.

4.  **Deploy**:
    *   Clique no botão **"Deploy"**.
    *   A Vercel vai começar a construir seu projeto. Isso leva cerca de 1 a 2 minutos.
    *   Você verá os logs de construção (Build Logs). Se tudo der certo (e deve dar, pois testamos localmente!), você verá uma tela de "Congratulations!".

5.  **Acesse seu Site**:
    *   A Vercel vai gerar uma URL automática para você (ex: `portf-lio-matheus-vieira.vercel.app`).
    *   Você pode clicar na imagem do preview para visitar seu site ao vivo!

## Manutenção

*   **Deploy Automático**: Toda vez que você fizer um `git push` para o seu repositório no GitHub, a Vercel detectará a mudança e fará um novo deploy automaticamente.
*   **Domínio Personalizado**: Se você comprar um domínio (ex: `matheusvieira.com`), pode configurá-lo facilmente nas configurações do projeto na Vercel ("Settings" -> "Domains").

---

**Alternativa: Netlify**
O processo no [Netlify](https://www.netlify.com/) é muito similar. Basta criar conta com GitHub, "New site from Git", escolher o repositório e clicar em "Deploy site".
