<div align="center">

<a href="https://hoshuko.github.io/tiziri/es/"><img src="https://hoshuko.github.io/assets/readme/tiziri-banner-es.jpg" alt="Tiziri en ordenador y en móvil" width="100%"></a>

# Tiziri

**El armario de una tienda de ropa en línea: cada prenda, fotografiada en la tienda, la lleva un maniquí de madera que cobra vida.**

[English](README.md) · [Français](README.fr.md) · **Español**

[![Demo en línea](https://img.shields.io/badge/Demo_en_l%C3%ADnea-hoshuko.github.io-B4532F?style=for-the-badge)](https://hoshuko.github.io/tiziri/es/) [![Vídeo promocional](https://img.shields.io/badge/V%C3%ADdeo_promocional-60_s_%C2%B7_3_formatos-1C1714?style=for-the-badge)](https://hoshuko.github.io/es.html#tiziri) [![Idiomas](https://img.shields.io/badge/Idiomas-FR_%C2%B7_AR_%C2%B7_EN_%C2%B7_ES-555555?style=for-the-badge)](#idiomas) [![Licencia](https://img.shields.io/badge/Licencia-PolyForm_Noncommercial-555555?style=for-the-badge)](LICENSE)

</div>

## Vista previa

<a href="https://hoshuko.github.io/es.html#tiziri"><img src="https://hoshuko.github.io/assets/readme/tiziri-preview-es.webp" alt="Vista previa animada de Tiziri" width="100%"></a>

La animación estrella de la web, extraída de su vídeo promocional de 60 segundos. [Ver el vídeo promocional completo →](https://hoshuko.github.io/es.html#tiziri)

## Lo más destacado

- **Un estudio 3D en directo.** En la portada, Elle y Lui, maniquíes de madera modelados por código, posan en un estudio bañado de sol y siguen el cursor.
- **De la foto al desfile.** Cada prenda se fotografía tal cual en la tienda, se recorta y la llevan Elle o Lui, maniquíes articulados de madera que echan a andar.
- **Probador.** Elige una prenda: el maniquí se la prueba, pose tras pose, y luego desfila.
- **El desfile.** Toda la tienda desfila en una pasarela fija que avanza al desplazarte.
- **Cada prenda de cerca.** Puesta, maniquí invisible, estudio y foto en bruto: la vista en bruto muestra los píxeles reales y los colores se toman de la foto.
- **Cuatro idiomas.** Francés, árabe (de derecha a izquierda), inglés y español.
- **Pedidos por WhatsApp.** Cada prenda redacta su mensaje: nombre, precio y enlace; recogida en tienda o pago contra reembolso.

## Capturas de pantalla

| Ordenador | Móvil |
| :---: | :---: |
| <img src="https://hoshuko.github.io/assets/shots/tiziri-desktop-es.webp" alt="Tiziri en ordenador" width="560"> | <img src="https://hoshuko.github.io/assets/shots/tiziri-mobile-es.webp" alt="Tiziri en móvil" width="200"> |

## Vídeos promocionales

Tres formatos de 60 segundos, con música y efectos de sonido creados desde cero (sin audio sujeto a derechos). Haz clic en un póster para ver el vídeo.

| Horizontal · 16:9 | Feed · 4:5 | Vertical · 9:16 |
| :---: | :---: | :---: |
| <a href="https://hoshuko.github.io/assets/video/tiziri-169-es.mp4"><img src="https://hoshuko.github.io/assets/video/tiziri-169-es.jpg" alt="Vídeo promocional de Tiziri, Horizontal · 16:9" width="360"></a> | <a href="https://hoshuko.github.io/assets/video/tiziri-45-es.mp4"><img src="https://hoshuko.github.io/assets/video/tiziri-45-es.jpg" alt="Vídeo promocional de Tiziri, Feed · 4:5" width="180"></a> | <a href="https://hoshuko.github.io/assets/video/tiziri-916-es.mp4"><img src="https://hoshuko.github.io/assets/video/tiziri-916-es.jpg" alt="Vídeo promocional de Tiziri, Vertical · 9:16" width="152"></a> |
| <sub>YouTube, webs</sub> | <sub>Feed de Facebook e Instagram</sub> | <sub>Reels, Stories, WhatsApp</sub> |

## Idiomas

La web está disponible en francés (en la raíz, por defecto), árabe (`ar/`, de derecha a izquierda), inglés (`en/`) y español (`es/`). Cada página existe en cada idioma como HTML estático, así que los buscadores y las vistas previas de enlaces ven el texto correcto; el selector de idioma está en la cabecera.

## Por dentro

- Cada prenda se procesa una sola vez y se guarda en un «armario»: recorte en el Mac (Apple Vision) y, a partir de la foto, vistas puestas, maniquí invisible y un vídeo de 8 segundos generados con Google Flow. No se genera nada al construir la web ni al visitarla.
- Hecha con Astro (web estática): este repositorio es la web publicada, lista para servir. GSAP, Lenis y Three.js dan vida a las páginas.
- Imágenes WebP, fuentes alojadas con la web, compatibilidad con `prefers-reduced-motion`, vídeos que solo se cargan cuando hace falta y diseño comprobado desde 360 px de ancho.
- Privacidad desde el diseño: sin cookies, sin analítica, sin peticiones a terceros y con una política de seguridad de contenido (CSP) estricta.

## Ejecutar en local

La web está preparada para vivir en `/tiziri/`, como en GitHub Pages. Sirve la carpeta que la contiene con cualquier servidor estático, por ejemplo Python:

```bash
git clone https://github.com/hoshuko/tiziri.git
python3 -m http.server 8000
```

Después abre <http://localhost:8000/tiziri/>.

## Personalizar

Este repositorio contiene la web construida. Su código fuente, un proyecto Astro con el armario (una carpeta por prenda: foto, recorte, vistas, vídeo y textos en cuatro idiomas), está en un espacio de trabajo privado. Los datos de la tienda (nombre, número de WhatsApp, dirección, horario, envíos) están en un único archivo de configuración; `demo: true` muestra el aviso de demostración y abre WhatsApp sin número. ¿Quieres esta web para tu tienda? Abre una incidencia (issue).

## Créditos

Cuatro prendas se fotografiaron en una tienda de Tigzirt; las ocho prendas de demostración proceden de fotos de Unsplash. Elle y Lui, los maniquíes de madera, están modelados por código (Three.js); las vistas puestas, las de maniquí invisible y los vídeos se generaron con Google Flow a partir de sus renders y de esas fotos, y así se indica en cada ficha. Todos los créditos están en [CREDITS.md](CREDITS.md). Las fuentes tienen licencia SIL Open Font License 1.1 ([`assets/fonts/OFL.txt`](assets/fonts/OFL.txt)). El nombre de la tienda, el teléfono y los precios son ficticios.

## Licencia

El código se publica con la [licencia PolyForm Noncommercial 1.0.0](LICENSE). Puedes usarlo, estudiarlo y modificarlo para cualquier fin no comercial: proyectos personales, aprendizaje, docencia, asociaciones. El uso comercial, por ejemplo entregar esta maqueta a un cliente, requiere una licencia aparte: abre una incidencia (issue) en este repositorio para solicitarla. Las fotos y las fuentes conservan sus propias licencias (ver arriba).

## Seguridad

¿Has encontrado una vulnerabilidad? Comunícala de forma privada desde la pestaña **Security** del repositorio («Report a vulnerability»), no en una incidencia pública. Consulta [SECURITY.md](SECURITY.md).

## Más maquetas

Forma parte de **Escaparates en movimiento**, una serie de cinco webs animadas al desplazarse:

- **[Maison Billot](https://github.com/hoshuko/maison-billot/blob/main/README.es.md)**: La web animada de una carnicería artesanal: el despiece del vacuno explicado pieza a pieza.
- **[Tafat](https://github.com/hoshuko/tafat/blob/main/README.es.md)**: La web de un equipo de mujeres que limpia casas en la costa de Cabilia: al desplazarte, una rasqueta limpia el cristal.
- **[Atelier Nacre](https://github.com/hoshuko/atelier-nacre/blob/main/README.es.md)**: La web de un estudio de uñas en Burdeos: una manicura desmontada capa a capa, un probador de color y reservas en línea.
- **[Lalla Warda](https://github.com/hoshuko/lalla-warda/blob/main/README.es.md)**: La web de una marca de cosmética natural de Kenitra: una rosa en 3D se abre hasta revelar un frasco de sérum, y cada producto muestra de qué está hecho y cómo se aplica en el rostro y el cabello.

Portafolio: <https://hoshuko.github.io/es.html> · YouTube: <https://www.youtube.com/@Hosh-uko>
