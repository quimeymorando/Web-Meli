# MelisArt — Web oficial

Web one-page de **MelisArt — Arquitectura de Realidades**.
Construida en **HTML / CSS / JavaScript plano**. Sin build, sin dependencias.

## Cómo verla en local

Toda la web vive dentro de `public/` (es la carpeta que Vercel sirve como root).

```bash
cd public
python3 -m http.server 8080
# Después abrí http://localhost:8080
```

> O simplemente abrí `public/index.html` en cualquier navegador.

## Estructura

```
Web-Meli/
├── public/                 ← TODO el sitio vive acá (Vercel sirve esto)
│   ├── index.html          ← La web one-page
│   ├── perfil-meli.jpeg    ← Foto de Meli (Sobre mí)
│   ├── vercel.json         ← Config de routing
│   ├── css/
│   │   ├── variables.css   ← Paleta, tipografías, espaciados, sombras
│   │   ├── base.css        ← Reset + tipografía base + utilidades
│   │   └── styles.css      ← Estilos por sección
│   ├── js/
│   │   └── main.js         ← Header scroll, menú mobile, scroll reveal
│   └── assets/
│       ├── images/         ← Fotos adicionales
│       └── icons/          ← SVGs adicionales
└── README.md
```

## Deploy en Vercel

1. Subí esta carpeta a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com) → "Add New Project" → conectás el repo → Deploy.
3. No requiere configuración: Vercel detecta que es un sitio estático.

## Editar el contenido

Todo el copy y estructura está en `index.html`, comentado por sección.
Para cambiar colores, tipografías o espaciados, editá `css/variables.css`.

## Datos de contacto actuales

- **WhatsApp:** `+34 625 33 06 19`
- Todos los CTAs apuntan a este número con mensajes preescritos diferentes según el servicio.
