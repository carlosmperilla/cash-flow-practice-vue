// Ejecutar 'npm run lint' nos corrige errores de linteo.

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // Para deshabilitar el linteo de multi-palabra en componentes,
    // sin embargo es recomendable utilizar multipalabra para poder diferenciar componentes de elemntos html,
    // todos los elementos html son de una sola palabra, por ejemplo home-content seria un nombre más adecuado que Home.
    "vue/multi-word-component-names": 0,
  },
};
