# IMC² Medical Technologies — sitio web

Sitio de **IMC2 MEDICAL TECHNOLOGIES S.A.P.I. DE C.V.** publicado en https://silver0401.github.io/.

- `/` — empresa: productos (CronosMD, TemisMD, HermesMD), plataforma, avance, laboratorio y contacto.
- `/fundador/` — Ismael Muñoz Contreras: trayectoria, primeros proyectos, habilidades, medicina, idiomas, modelado 3D y música.

## Stack

Vite 5 + React 18 + TypeScript, CSS plano con tokens de marca. Multi-página (dos `index.html`), sin router: GitHub Pages sirve las rutas estáticas directo. El visor 3D (`@react-three/fiber` + `drei`) se carga bajo demanda.

Textos bilingües ES/EN en `src/shared/content.ts` (el inglés se tipa contra el español).

## Comandos

```bash
npm install
npm run dev       # desarrollo
npm run build     # typecheck + build a dist/
npm run preview   # sirve dist/
npm run deploy    # build + publica dist/ en la rama gh-pages
```

La versión 1 (CRA, 2020) vive en el historial de git.
