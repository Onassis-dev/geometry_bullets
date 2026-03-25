# Geometry Bullets

A browser-based 2D arena shooter built with HTML5 Canvas and vanilla JavaScript. You play as a triangle that aims at the cursor, dodges and destroys geometric enemies, and uses a short-range teleport to escape pressure.

## Development

Requirements: **Node.js** and a package manager (**pnpm** is used in this repo).

```bash
pnpm install
pnpm dev
```

### Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Start the dev server with hot reload |
| `pnpm build`   | Production build to `dist/`          |
| `pnpm preview` | Serve the production build locally   |

## Technical highlights

The build uses [vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile) so the output is a **single self-contained HTML file** under `dist/`, easy to drop on static hosting or open offline.

This project was made completely in vanilla javascript, it has 0 runtime dependencies.

As of now the single file is -14kb, and -5kb compressed with gzip

## Project layout

- `index.html` — Shell, UI overlays (menu, pause, score), canvas.
- `src/index.js` — Game loop and rendering.
- `src/entities/` — Player, bullets, enemies.
- `src/functions/` — Input, audio, scoring, difficulty, enemy spawning, collisions, etc.
