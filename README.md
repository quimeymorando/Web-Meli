# MelisArt — Web oficial

Web one-page de **MelisArt — Arquitectura de Realidades**.
Construida en **HTML / CSS / JavaScript plano**. Sin build, sin dependencias.

## Cómo verla en local

Abrí `index.html` en cualquier navegador. Listo.

> Si querés que el scroll suave entre secciones funcione perfecto y que las fuentes de Google Fonts carguen sin advertencias, conviene servirla con un mini servidor local. Una opción:
>
> ```bash
> # Si tenés Python instalado:
> python3 -m http.server 5500
> # Después abrí http://localhost:5500
> ```

## Estructura

```
Web-Meli/
├── index.html              ← Toda la web (one-page)
├── css/
│   ├── variables.css       ← Paleta, tipografías, espaciados, sombras
│   ├── base.css            ← Reset + tipografía base + utilidades
│   └── styles.css          ← Estilos por sección
├── js/
│   └── main.js             ← Header scroll, menú mobile, scroll reveal
├── assets/
│   ├── images/             ← Fotos de Melisa (pegar acá las reales)
│   └── icons/              ← SVGs adicionales
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
