# 🚀 Marcos Giannini Portfolio

Un portfolio interactivo y moderno para desarrolladores frontend, construido con tecnologías de vanguardia. Muestra mis proyectos, habilidades y personalidad con una experiencia visual única y profesional.

---

![Portfolio Demo](./GifPortfolio.gif)

---

<p align="center">
  <a href="https://portfolio-pi-vert-12.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-00C853?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  &nbsp;
  <img src="https://img.shields.io/badge/Formspree-EA4C89?style=for-the-badge&logo=formspree&logoColor=white" />
</p>

---

## ✨ Features

- 🗂️ **Gestión centralizada de datos** para proyectos y secciones.
- 🧑‍💻 **Personal Branding**: fácil de personalizar y escalar.
- 🎨 Animaciones fluidas con **Framer Motion**.
- 📬 Formulario de contacto integrado con **Formspree**.
- 📱 Diseño **responsive** (móvil y escritorio).

---

## 🗂️ Estructura del proyecto

```
public/
├── GifPortfolio.gif
└── ...otros archivos
src/
├── components/
├── data/
├── pages/
└── styles/
```

---

## 📦 Instalación

```bash
# Clona el repositorio
git clone https://github.com/MarcosGiannini/portfolio.git

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```

Luego abre http://localhost:3000 (si el puerto está ocupado, Next usará el siguiente disponible y te lo indicará en la consola).

---

## Scripts útiles

| Script           | Descripción                                      |
|------------------|--------------------------------------------------|
| `npm run dev`    | Inicia el servidor de desarrollo                 |
| `npm run build`  | Compila la aplicación para producción            |
| `npm run start`  | Inicia la aplicación en modo producción          |
| `npm run lint`   | Ejecuta el linter para mantener el código limpio |

---

## ⚙️ Notas de configuración

- **Formspree**: el formulario usa `@formspree/react` con el ID configurado en `src/components/Contact/index.tsx`. Ajusta el ID si migras el endpoint.
- **Email de contacto**: se define en `src/data/portfolioData.ts`.
- Modifica los datos en `src/data/portfolioData.ts` para actualizar tus proyectos y secciones.
- Personaliza los estilos en `src/styles/globals.css` y los componentes en `src/components/`.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el portfolio, abre un issue o envía un pull request.

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

## 👤 Autor

**Marcos Giannini**  
[GitHub](https://github.com/MarcosGiannini) | [LinkedIn](https://www.linkedin.com/in/marcosgiannini-dev/)

---

## Agradecimientos

Gracias a Ailín Nakaganeku (@ailinnakaganeku) por la plantilla original que inspiró este proyecto.
