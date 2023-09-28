# eCommerce con React y Firebase

Este proyecto de eCommerce fue desarrollado utilizando React para la interfaz de usuario y Firebase como plataforma de backend para almacenar productos y gestionar órdenes de compra de usuarios.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Getting Started with Vite

This project was bootstrapped with [Vite](https://github.com/vitejs/vite).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5174/](http://localhost:5174) to view it in your browser.

The page will reload when you make changes.\

## Pre-requisitos
- [Visual Studio Code]('https://code.visualstudio.com/')
- [NodeJS > 16]('https://nodejs.org') y npm. (Recomendacion usar [nvm](https://github.com/nvm-sh/nvm))

## Firebase

En este proyecto, se utilizó Firebase para:

- **Almacenamiento de Productos:** Almacenar y gestionar la información de los productos disponibles en nuestra tienda en línea.

- **Gestión de Órdenes de Compra:** Firebase Firestore también se utiliza para registrar y gestionar las órdenes de compra realizadas por los usuarios.

Firebase proporciona una solución escalable y confiable para la gestión de datos en esta aplicación de eCommerce.


## Estructura de Carpetas

- `src`: Es la carpeta contenedora de todo nuestro codigo dentro de la aplicacion de React y contiene todas las funcionalidades.

    - `components`: Es la carpeta que contiene todos los componentes de nuestra aplicacion (Ej: ItemListContainer, Carrito, Checkout, etc.)

    - `context`: se utiliza para gestionar el estado global y compartir datos y funciones entre componentes sin necesidad de pasar propiedades de manera explícita. En esta carpeta, se encuentra el archivo `CartContext.jsx`: Este contexto se utiliza para administrar el estado del carrito de compras. Almacena información sobre los productos agregados al carrito y proporciona funciones para agregar, eliminar y actualizar productos en el carrito.

    - `notification`: Se utiliza para gestionar notificaciones y mensajes en tiempo real que se muestran a los usuarios. En esta carpeta se encuentra el archivo `NotificationService.js`: Este archivo contiene funciones de utilidad y lógica para enviar notificaciones y se utiliza en combinación con `NotificationProvider.js` para enviar notificaciones push a los dispositivos de los usuarios.

- `App.js`: Es el componente donde inicia toda la aplicacion.
