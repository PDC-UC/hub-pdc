# Hub de las Pastorales de Carrera

Sitio web de las Pastorales de Carrera de Pastoral UC. Hecho con [Astro](https://astro.build). Se publica en Vercel desde este repositorio de GitHub: cada vez que se guarda un cambio aquí, el sitio se actualiza solo en uno o dos minutos.

## Qué se edita y dónde

Casi todo el contenido son archivos de texto. No hace falta tocar el diseño.

| Qué quieres cambiar | Archivo |
|---|---|
| Texto de un cargo (qué hace, responsabilidades, calendario, preguntas, a quién acudir) | `src/content/cargos/<cargo>.md` |
| Enlaces a informes y materiales de un cargo | arriba del mismo archivo, en `informes:` y `materiales:` |
| Agregar un cargo nuevo | copiar un archivo de `src/content/cargos/`, cambiarle el nombre y el `orden` |
| Lista de pastorales, campus y logos | `src/data/pastorales.json` |
| Enlaces de la zona de coordinadores | `src/data/accesos.json` |
| Correo e Instagram del pie de página | `src/data/sitio.json` |
| Textos de páginas (Qué son, Cómo participar, Preguntas) | `src/pages/que-son.astro`, `como-participar.astro`, `preguntas.astro` |

### Agregar informes o materiales a un cargo

Abre el archivo del cargo y escribe los enlaces así (respeta los espacios):

```yaml
informes:
  - titulo: "Informe de cierre 2026"
    url: "https://..."
materiales:
  - titulo: "Presentación de inducción"
    url: "https://..."
```

Los enlaces deben ser de SharePoint u otro lugar que pida cuenta UC.

### Agregar el logo de una pastoral

1. Sube la imagen (PNG, idealmente con fondo transparente) a `public/logos/`.
2. En `src/data/pastorales.json`, cambia `"logo": null` por `"logo": "nombre-del-archivo.png"`.

## Regla de privacidad

**No subas a este repositorio nada que tenga datos de personas** (teléfonos, correos, listas de estudiantes, planillas de participación). El sitio es público. Los documentos internos se enlazan desde SharePoint.

## Probarlo en tu computador (opcional)

Necesitas Node.js 20 o más nuevo.

```
npm install
npm run dev
```

Se abre en `http://localhost:4321`.

## Publicar en Vercel

1. En Vercel, **Add New → Project** e importa el repositorio `hub-pdc`. Vercel detecta Astro solo.
2. Deploy. Te da una dirección temporal para revisar el sitio.
3. En el proyecto: **Settings → Domains**, agrega tu dominio.
4. Para un dominio `.cl`: en NIC Chile, en la sección de delegación del dominio, cambia los servidores de nombres (nameservers) por los que Vercel indica. Normalmente son `ns1.vercel-dns.com` y `ns2.vercel-dns.com`. Puede tardar desde minutos hasta 48 horas.
5. Cuando el dominio funcione, cambia `site` en `astro.config.mjs` por la dirección real.
