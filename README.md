# TRANSZELA 🚌🌍

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Status](https://img.shields.io/badge/status-production_ready-success.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Vercel](https://img.shields.io/badge/deployed_on-Vercel-black.svg?logo=vercel)

Una plataforma web corporativa, moderna y escalable para **Transzela**, una empresa de transporte interprovincial e institucional en el Perú. 

Este proyecto está construido con una arquitectura sólida y limpia en el Front-End, optimizada para ofrecer la mejor experiencia de usuario (UX) y preparada para ser desplegada ágilmente en entornos serverless como **Vercel** usando integración continua a través de GitHub.

---

## ✨ Características Principales

- **Arquitectura Modular (ES6)**: Los componentes como Header, Footer y módulos interactivos (carrusel, lightbox, validaciones) se administran por separado para asegurar un código mantenible.
- **Metodología CSS BEM**: Todo el CSS está organizado utilizando la arquitectura *Block Element Modifier* (BEM) libre de código espagueti y estilos en línea.
- **Vercel Ready**: Incluye un archivo de configuración (`vercel.json`) nativo para permitir URLs limpias (`cleanUrls: true`) logrando un enrutamiento profesional en producción sin depender de extensiones `.html`.
- **Rendimiento SEO**: Estructura de código semántico y optimizado para los motores de búsqueda.
- **Sistema UI Responsivo e Interactivo**:
  - Carrusel dinámico para la navegación *Hero*.
  - Galería *Lightbox* interactiva para visualizar el catálogo de la flota de buses.
  - Widget flotante (Chatbot UI).
  - Formulario del Libro de Reclamaciones dinámico e integrado.

---

## 🏗️ Estructura del Proyecto

```text
├── assets/          # Imágenes orientadas al rendimiento (webp, jpg, png).
├── components/      # Componentes UI reutilizables (header.js, footer.js).
├── pages/           # Subpáginas compiladas dinámicamente (Flota, Destinos, Corporativo, etc).
├── scripts/         # Lógica JS (main.js) e importación de módulos (modules/).
├── styles/          # Hojas de estilo estructuradas (layout.css, components.css, variables.css).
├── index.html       # Entry point principal.
├── vercel.json      # Configuraciones de entorno de producción para Vercel.
└── README.md        # Documentación del proyecto.
```

---

## 🚀 Despliegue en Vercel (Producción)

El proyecto está 100% optimizado para el ecosistema Vercel. Sigue estos pasos para hacer el despliegue automático:

1. Realiza un *push* de todo el proyecto usando Git y envíalo a tu repositorio de GitHub.
2. Inicia sesión en [Vercel](https://vercel.com/) y haz clic en **Add New -> Project**.
3. Importa tu repositorio de GitHub desde la lista desplegable.
4. Las configuraciones por defecto serán reconocidas de inmediato.
5. Haz clic en **Deploy**. 

> **Nota:** Gracias a la configuración del archivo `vercel.json` incluido en el directorio base, Vercel forzará *Clean URLs*, habilitando automáticamente rutas amigables en producción como `https://tusitio.com/pages/destinos`.

---

## 💻 Desarrollo Local

No se requiere una compilación de Node (sin dependencias engorrosas de empaquetadores complejos), con lo cual obtendrás una experiencia de desarrollador súper rápida.

Puedes levantar el proyecto en un servidor local utilizando extensiones como **Live Server** (en VS Code) o simplemente ejecutando `npx serve .` en la terminal.

---

## 👨‍💻 Autor

Diseñado y desarrollado profesionalmente por:  
**NILVER T.I.**  
