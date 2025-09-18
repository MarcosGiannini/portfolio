# 🚀 Marcos Giannini Portfolio

Un portfolio interactivo y moderno para desarrolladores frontend, construido con tecnologías de vanguardia. Muestra tus proyectos, habilidades y personalidad con una experiencia visual única y profesional.

---

![Portfolio Demo](./GifPortfolio.gif)

---


<p align="center">
  <a href="https://portfolio-pi-vert-12.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-00C853?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
</p>

---

## ✨ Features
| Script           | Descripción                                 |
|------------------|---------------------------------------------|
| `npm run dev`    | Inicia el servidor de desarrollo            |
| `npm run build`  | Compila la aplicación para producción       |
| `npm run start`  | Inicia la aplicación en modo producción     |
| `npm run lint`   | Ejecuta el linter para mantener el código limpio |
- 🗂️ **Gestión centralizada de datos** para proyectos y secciones.
- 🧑‍💻 **Personal Branding**: fácil de personalizar y escalar.
public/
├── GifPortfolio.gif
├── ...otros archivos
src/
├── components/
├── data/
├── pages/
├── styles/
└── ...
  <img src="https://img.shields.io/badge/Formspree-EA4C89?style=for-the-badge&logo=formspree&logoColor=white" />
</p>
- Modifica los datos en `src/data/portfolioData.ts` para actualizar tus proyectos y secciones.
- Personaliza los estilos en `src/styles/globals.css` y los componentes en `src/components/`.

## 📦 Instalación
¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el portfolio, abre un issue o envía un pull request.
```bash
# Clona el repositorio
**Marcos Giannini**  
[GitHub](https://github.com/MarcosGiannini) | [LinkedIn](https://www.linkedin.com/in/marcosgiannini-dev/)
# Instala las dependencias
npm install
Este proyecto está bajo la licencia MIT.
```
Luego abre http://localhost:3000 (si el puerto está ocupado, Next usará el siguiente disponible y te lo indicará en la consola).

4) Build y producción (opcional)

```bash
npm run build
npm start
```

## Scripts útiles

- `npm run dev`: Arranca el servidor de desarrollo.
- `npm run build`: Genera el build de producción.
- `npm start`: Inicia el servidor en modo producción.
- `npm run lint`: Linting del proyecto.

## Notas de configuración

- Formspree: el formulario usa `@formspree/react` con el ID configurado en `src/components/Contact/index.tsx`. Ajusta el ID si migras el endpoint.
- Email de contacto: se define en `src/data/portfolioData.ts`.

## Agradecimientos

Gracias a Ailín Nakaganeku (@ailinnakaganeku) por la plantilla original que inspiró este proyecto.