# Guia de Deploy - BR Pragas Campinas

## 🚀 Opções de Deploy

### 1. Vercel (Recomendado - Grátis)

A Vercel é a empresa criadora do Next.js e oferece deploy gratuito.

**Passos:**

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub/GitLab
3. Clique em "Import Project"
4. Selecione este projeto
5. A Vercel detectará automaticamente Next.js
6. Clique em "Deploy"

Seu site estará no ar em minutos! A Vercel fornecerá um domínio gratuito como `seu-site.vercel.app`

### 2. Netlify (Grátis)

**Passos:**

1. Crie uma conta em [netlify.com](https://netlify.com)
2. Conecte seu repositório
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Clique em "Deploy"

### 3. Domínio Personalizado

Depois de fazer o deploy na Vercel ou Netlify, você pode adicionar seu próprio domínio:

**Na Vercel:**
1. Vá em Settings > Domains
2. Adicione seu domínio
3. Configure os DNS conforme instruções

**Na Netlify:**
1. Vá em Domain Settings
2. Adicione domínio customizado
3. Configure os DNS conforme instruções

## 📱 Deploy Manual (VPS/Servidor Próprio)

Se você tem um servidor próprio:

```bash
# 1. Clone o repositório no servidor
git clone seu-repositorio.git
cd site-pragas

# 2. Instale as dependências
npm install

# 3. Compile o projeto
npm run build

# 4. Inicie o servidor
npm start
```

O site rodará na porta 3000. Use PM2 para manter rodando:

```bash
# Instalar PM2
npm install -g pm2

# Iniciar com PM2
pm2 start npm --name "brpragas" -- start

# Salvar configuração
pm2 save
pm2 startup
```

## 🌐 Nginx (Opcional)

Se usar Nginx como proxy reverso:

```nginx
server {
    listen 80;
    server_name seudominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📊 Análises e SEO

### Google Analytics
Adicione seu código de tracking em `app/layout.tsx`

### Google Search Console
1. Verifique propriedade do domínio
2. Envie sitemap: `seusite.com/sitemap.xml`

### Meta Tags
Já configurado em `app/layout.tsx` com:
- Title otimizado
- Description
- Keywords
- Open Graph tags

## 🔒 HTTPS

- **Vercel/Netlify:** HTTPS automático
- **Servidor próprio:** Use [Let's Encrypt](https://letsencrypt.org/) (grátis)

```bash
# Certbot para HTTPS
sudo certbot --nginx -d seudominio.com
```

## ✅ Checklist Pré-Deploy

- [ ] Testar localmente: `npm run dev`
- [ ] Compilar sem erros: `npm run build`
- [ ] Verificar todos os links
- [ ] Testar WhatsApp
- [ ] Testar envio de email
- [ ] Verificar mapa no Google Maps
- [ ] Testar em mobile
- [ ] Adicionar Google Analytics (opcional)

## 🎯 URLs para Testar

Depois do deploy, teste:

- ✅ WhatsApp: Deve abrir conversa com mensagem pré-pronta
- ✅ Email: Deve abrir cliente de email
- ✅ Instagram: Deve abrir perfil @brpragas.oficial
- ✅ Google Maps: Deve mostrar endereço correto

## 💡 Dicas

1. **Performance:** O site já está otimizado com Next.js
2. **SEO:** Todas as meta tags estão configuradas
3. **Mobile:** Design totalmente responsivo
4. **Cores:** Seguem as cores da BR Pragas

## 🆘 Suporte

Em caso de dúvidas sobre deploy:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

