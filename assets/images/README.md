# Imágenes de MelisArt

Pegá acá las fotos reales de Melisa cuando las tengas. Sugerencias:

- `melisa-hero.jpg` — Foto principal del Hero (vertical, formato 4:5, mínimo 1200×1500px). Ideal: Melisa caminando o de pie en un espacio arquitectónico, luz natural, paleta cálida.
- `melisa-sobre-mi-1.jpg` — Capítulo 1 "La Base Original".
- `melisa-sobre-mi-2.jpg` — Capítulo 2 "La Grieta".
- `melisa-sobre-mi-3.jpg` — Capítulo 3 "La Hoja en Blanco".
- `testimonio-1.jpg` ... — Avatares de clientas (cuadrado 400×400, opcional).

Mientras no haya fotos reales, la web usa **placeholders premium** con gradientes violeta + blueprint dorado.

## Cómo reemplazar el placeholder del Hero

En `index.html`, dentro de `<div class="hero__visual">`, reemplazá las dos capas SVG (`.hero__visual-blueprint` y `.hero__visual-silhouette`) por:

```html
<img src="assets/images/melisa-hero.jpg" alt="Melisa Rodríguez, creadora del Método MelisArt" />
```

Y agregá esto al CSS de `.hero__visual img`:

```css
.hero__visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```
