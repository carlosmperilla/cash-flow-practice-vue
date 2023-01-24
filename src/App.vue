<template>
  <!-- Nos permite cargar un template o su esqueleto -->
  <Suspense>
    <!-- #default indica el elemento por defecto. -->
    <template #default>
      <Home />
    </template>

    <!-- 
      #fallback indica el elemento a mostrar en
      la carga de la pagina.
    -->
    <template #fallback>
      <SplashScreen />
    </template>
  </Suspense>
</template>

<script>
// El @ es un alias para la carpeta src.
import SplashScreen from "@/components/SplashScreen.vue";
// Nos permite definir componentes asincronos.
// Esto nos puede facilitar la primera carga.
// Ya que solo cargamos inmediatamente lo fundamental.
import { defineAsyncComponent } from "vue";

export default {
  components: {
    SplashScreen,
    Home: defineAsyncComponent(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            // Importamos Home.vue con un retardo,
            // Para simular el retardo de la red.
            resolve(import("./components/Home.vue"));
          }, 1000);
        })
    ),
  },
};
</script>

<style>
:root {
  --brand-green: #04b500;
  --brand-blue: #0689b0;
}

html,
body,
.app {
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
