# CAIINNO — Sitio web

Sitio web del **Centro de Análisis para la Investigación en Innovación, A.C. (CAIINNO)**, una *think tank* mexicana fundada por exbecarios Fulbright que trabaja en temas de propiedad intelectual, innovación, ciencia y tecnología.

El sitio presenta a la organización (quiénes somos / about us), su equipo, sus publicaciones, eventos, el impacto de su trabajo (cómo y quién ha usado sus investigaciones) e información estadística mediante tableros de Power BI.

---

## Tecnologías

| Herramienta | Uso |
| --- | --- |
| [Next.js 14](https://nextjs.org/) (App Router) | Framework de React, rutas y generación estática |
| [React 18](https://react.dev/) | Interfaz |
| [TypeScript](https://www.typescriptlang.org/) | Tipado |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilos (configurado vía `@tailwindcss/postcss` y `src/app/globals.css`) |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes base en `src/components/ui` (`components.json`) |
| [Embla Carousel](https://www.embla-carousel.com/) | Carruseles (con autoplay) |
| [react-select](https://react-select.com/) | Selectores de los filtros de Impacto |
| [lucide-react](https://lucide.dev/) / [react-icons](https://react-icons.github.io/react-icons/) | Íconos |
| `next/font` | Fuentes Montserrat y Roboto Mono (Google Fonts) |
| Power BI (iframes) | Tableros de información estadística |

No hay base de datos ni backend: **todo el contenido vive en archivos TypeScript dentro de `src/data`** y los recursos estáticos en `public/`.

---

## Requisitos

- **Node.js 18.17 o superior** (recomendado: la versión LTS más reciente)
- **npm** (el proyecto incluye `package-lock.json`)

No se necesitan variables de entorno.

---

## Desarrollo local

```bash
git clone https://github.com/Blayt05/caiinno_becario.git
cd caiinno_becario
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Los cambios se recargan automáticamente.

### Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compilación de producción (también revisa tipos y lint) |
| `npm run start` | Sirve la compilación de producción (requiere `build` antes) |
| `npm run lint` | ESLint |

> Antes de subir cambios, corre `npm run build`: si falla aquí, también fallará el despliegue.

---

## Estructura del proyecto

```
public/                 Imágenes, videos, PDFs y publicaciones.csv (se sirven desde la raíz: /Logo.jpg)
  events/               Fotos de eventos, una carpeta por evento
  publications/         Portadas de publicaciones
  impacto/, carousel/, videos/ ...
src/
  app/                  Rutas (App Router). Cada carpeta con page.tsx es una página
    page.tsx            Inicio (español)
    about-us/           About Us (inglés)
    quienes-somos/      Quiénes somos (español)
    publicaciones/      Listado y detalle ([slug]) de publicaciones, bilingüe con ?lang=es|en
    events/             Galería de eventos
    impacto/            Impacto y sus subsecciones (premios, iniciativas de reforma, etc.)
    informacion-estadistica/  Tableros Power BI
    aviso-de-privacidad/      Aviso de privacidad y sus secciones
    layout.tsx          Layout global: fuentes, Navbar, SecondaryNavbar y Footer
    globals.css         Estilos globales y variables de Tailwind
  components/           Componentes reutilizables (Navbar, Footer, TeamSection, ImpactoPage, FadeInText...)
    ui/                 Componentes base de shadcn/ui
  data/                 Contenido del sitio (ver abajo)
  models/               Tipos de TypeScript del contenido (Event, Publication, Team)
  lib/utils.ts          Utilidad `cn()` para combinar clases de Tailwind
  assets/               Recursos importados directamente desde el código
```

El alias `@/` apunta a `src/` (por ejemplo `import Footer from "@/components/Footer/Footer"`).

---

## Cómo actualizar el contenido

La mayoría de los cambios de contenido **no requieren tocar componentes**, solo los archivos de `src/data`.

| Contenido | Archivo | Notas |
| --- | --- | --- |
| Equipo | `src/data/team.ts` | Tiene versión `spanish` y `english`; actualiza ambas |
| Eventos | `src/data/events.ts` | Las fotos van en `public/events/<carpeta-del-evento>/` |
| Publicaciones | `src/data/publications_test.ts` | Cada una tiene `slug` (URL), contenido en `es` y `en`, y portada en `public/publications/` |
| Impacto (tabla con filtros) | `src/data/informacionData.ts` | Arreglo `dataImpacto`; ver sección siguiente |
| Tableros Power BI | `src/app/informacion-estadistica/*/page.tsx` | Se configuran como lista de `{ title, url }` con la URL pública del reporte |

### Tabla de Impacto y `publicaciones.csv`

La página de Impacto **no lee el CSV en tiempo de ejecución**. `public/publicaciones.csv` es la fuente original y `dataImpacto` en `src/data/informacionData.ts` se generó a partir de él.

Si se agregan filas al CSV hay que agregarlas también a `dataImpacto`. Cada registro tiene:

```ts
{
  usuario: "Secretaría de Economía",
  titulo: "Información Económica Estatal - Aguascalientes",
  link: "https://...",
  año: 2016,
  tipoUsuario: "Gubernamental", // 'Legislativo' | 'Gubernamental' | 'Privado/Académico' | 'Internacional'
  tipoDoc: 1,                   // opcional
},
```

`tipoUsuario` y `tipoDoc` **no vienen en el CSV**, hay que asignarlos a mano. El CSV contiene algunas filas duplicadas a propósito; si se quiere que el número de registros de la página coincida con el del CSV, no las elimines al generar el arreglo.

### Idiomas

No se usa una librería de i18n. Hay dos formas de manejar idiomas:

- **Páginas separadas**: `quienes-somos` (español) y `about-us` (inglés). Varios componentes reciben `language="spanish" | "english"`.
- **Parámetro de URL**: `publicaciones` usa `?lang=es` / `?lang=en` con el componente `LanguageSwitcher`.

Al cambiar un texto, revisa si existe también en el otro idioma.

---

## Despliegue

El proyecto es una app estándar de Next.js; casi todas las páginas se generan como estáticas.

### Opción recomendada: Vercel

1. Entra a [vercel.com](https://vercel.com/) e importa el repositorio de GitHub.
2. Vercel detecta Next.js automáticamente. Deja los valores por defecto:
   - Build command: `npm run build`
   - Output: `.next`
   - No se necesitan variables de entorno.
3. Cada `push` a `main` despliega a producción; las demás ramas y PRs generan una URL de vista previa.
4. Para usar un dominio propio: *Project → Settings → Domains*.

### Opción alternativa: servidor propio (Node.js)

```bash
npm ci
npm run build
npm run start          # puerto 3000 por defecto; usa PORT=8080 npm run start para cambiarlo
```

Se recomienda mantenerlo vivo con un gestor de procesos (por ejemplo `pm2 start npm --name caiinno -- start`) y ponerlo detrás de un proxy inverso (Nginx) con HTTPS.

### Imágenes externas

`next/image` solo permite imágenes remotas de los dominios declarados en `next.config.js` (actualmente miniaturas de YouTube). Si agregas imágenes de otro dominio, agrégalo a `images.remotePatterns` o la compilación/página fallará.

---

## Convenciones y consejos

- **Componentes de servidor por defecto.** Solo agrega `'use client'` cuando el componente use estado, efectos o eventos del navegador (por ejemplo `FadeInText`, `ImpactoPage`).
- **Estilos con clases de Tailwind.** Usa `cn()` de `src/lib/utils.ts` para clases condicionales.
- **Archivos pesados**: los videos en `public/` y `src/assets/` aumentan el tamaño del repositorio; comprímelos antes de subirlos o considera alojarlos en YouTube.
- **Nombres de archivos en `public/`**: evita espacios, acentos y signos (`¿`, `_`) en nombres nuevos; complican las URLs.
- **Accesibilidad**: llena el `alt` de las imágenes y respeta `prefers-reduced-motion` en animaciones (ver `FadeInText.tsx`).

---

## Pendientes conocidos

- El `metadata` de `src/app/layout.tsx` aún tiene el título por defecto (`"Create Next App"`); conviene cambiarlo por el nombre y descripción de CAIINNO.
- `eslint-config-next` (v15) y `@types/react` (v19) no coinciden con las versiones de `next` (v14) y `react` (v18). Funciona, pero conviene alinearlas al actualizar dependencias.
- `src/data/publications_test.ts` tiene nombre de archivo de prueba aunque se usa en producción.
- No hay pruebas automatizadas; `npm run build` es la verificación principal.
