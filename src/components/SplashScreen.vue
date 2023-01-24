<!-- 
    Este componente funciona como esqueleto de carga. 
    Nos permite mostrar una pantalla previa, para 
    comunicarle al usuario que la pagina esta cargando.
-->

<template>
  <div class="splashscreen">
    <img src="@/assets/cashflow-icon.svg" alt="Main Logo" />
    <h1><span>Cash</span>Flow</h1>
  </div>
</template>

<!-- scoped permite que los estilos se mantengan encapsulados -->
<!-- Es decir solo para el componente -->
<style scoped>
.splashscreen {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

h1 {
  color: var(--brand-blue);
}

h1 span {
  color: var(--brand-green);
}
</style>
