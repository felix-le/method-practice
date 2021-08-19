# setup app + tailwind

npx app

npm install @craco/craco @tailwindcss/jit

```json
     "start": "react-scripts start", (remove)
     "build": "react-scripts build",(remove)
     "test": "react-scripts test",(remove)
     "start": "craco start",
     "build": "craco build",
     "test": "craco test",
```

Next, create a craco.config.js at the root of our project and add the tailwindcss and autoprefixer as PostCSS plugins:

```javascript
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
```

npx tailwindcss-cli@latest init

```javascript
// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
