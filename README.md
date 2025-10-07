# 📊 Calculadora de Árbol de Decisiones

Una aplicación web interactiva para calcular y visualizar árboles de decisiones basados en criterios de ganancia de información y análisis de datos.

## 🌟 Características

- ✅ Calculadora interactiva de árboles de decisiones
- ✅ Interfaz moderna y responsive con Tailwind CSS
- ✅ Cálculo automático de entropía y ganancia de información
- ✅ Visualización clara de resultados
- ✅ Optimizada para rendimiento
- ✅ Desplegada en GitHub Pages

## 🚀 Demo en Vivo

Visita la aplicación en: [https://LaShavi.github.io/DecisionTreeCalculator](https://LaShavi.github.io/DecisionTreeCalculator)

## 🚀 Estructura del Proyecto

```text
├── public/
│   ├── favicon.svg
│   └── fonts/
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro          # Calculadora principal
│   │   └── (sin demo.astro)
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tailwind.config.mjs
```

## 🎯 Funcionalidades

- **Calculadora de Entropía**: Calcula la entropía de un conjunto de datos
- **Ganancia de Información**: Determina la ganancia de información para diferentes atributos
- **Interfaz Intuitiva**: Entrada de datos fácil y resultados claros
- **Responsive Design**: Funciona perfectamente en dispositivos móviles y escritorio

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/` |
| `npm run preview`         | Previsualiza la construcción local antes de desplegar |

## 🛠️ Instalación y Desarrollo

1. Clona el repositorio:
```bash
git clone https://github.com/LaShavi/DecisionTreeCalculator.git
cd DecisionTreeCalculator
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:4321`

## 📈 Tecnologías Utilizadas

- **Astro** - Framework web moderno
- **Tailwind CSS** - Framework de CSS para estilos
- **TypeScript** - Superset tipado de JavaScript
- **GitHub Pages** - Hosting gratuito
- **GitHub Actions** - CI/CD automatizado

## 🚀 Despliegue

El proyecto se despliega automáticamente en GitHub Pages cuando se hace push a la rama `main`. El workflow de GitHub Actions se encarga de:

1. Instalar dependencias
2. Construir el proyecto
3. Desplegar a GitHub Pages

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, por favor abre un issue primero para discutir qué te gustaría cambiar.

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request