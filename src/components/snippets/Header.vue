<template>
  <header>
    <!-- 
        @ es la forma abreviada de v-on,
        v-on nos sirve para escuchar eventos del DOM y
        ejecutar scripts al respecto.

        En este caso al dar un click sobre el elemento se llama
        a la función reload, definida en methods.
     -->
    <img @click="reload" src="@/assets/cashflow-icon.svg" alt="Header Logo" />
    <h1><span>Cash</span>Flow</h1>
    <span></span>
  </header>
</template>

<script>
export default {
  methods: {
    reload() {
      location.reload();
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
}

img,
span {
  width: 48px;
}

h1 {
  font-size: 1.4rem;
  color: var(--brand-blue);
}

h1 span {
  color: var(--brand-green);
}
</style>
