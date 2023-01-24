<template>
  <main>
    <!-- Usamos propiedades computadas -->
    <p>{{ labelVisual }}</p>
    <h1>{{ amountCurrency }}</h1>

    <div class="graphic">
      <slot name="graphic"></slot>
    </div>
    <div class="action">
      <slot name="action"></slot>
    </div>
  </main>
</template>

<script>
import currencyFormatter from "@/js/currencyFormater";

export default {
  // Atributos personalizados para registrar en el componente
  // Podemos acceder a estos con this en <script>, o mediante {{ }} interpolación en <template>
  // Al ser personalizables podemos configurar dichos atributos.
  props: {
    totalLabel: {
      type: String,
    },
    label: {
      type: String,
      default: null,
    },
    totalAmount: {
      type: Number,
    },
    amount: {
      type: Number,
      default: null,
    },
  },
  // Las propiedades computadas funcionan similar a los metodos.
  // pero estas se almacenan en cache y solo se actualizan, si alguna de sus dependencias se actualiza.
  // esto nos ahorra costes de procesamiento respecto a los metodos.
  // y nos da un dinamismo adicional que no poseemos con las propiedades comunes.
  computed: {
    labelVisual() {
      return this.label !== null ? this.label : this.totalLabel;
    },
    amountVisual() {
      return this.amount !== null ? this.amount : this.totalAmount;
    },
    amountCurrency() {
      return currencyFormatter.format(this.amountVisual);
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

h1,
p {
  margin: 0;
  text-align: center;
}

h1 {
  margin-top: 14px;
  color: var(--brand-green);
}

.graphic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 24px;
  box-sizing: border-box;
}
</style>
