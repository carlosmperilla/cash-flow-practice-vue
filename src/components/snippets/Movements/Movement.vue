<template>
  <div class="movement">
    <div class="content">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
    <div class="action">
      <img
        src="@/assets/trash-icon.svg"
        alt="Borrar Movimiento"
        @click="remove"
      />
      <!-- 
                Se puede vincular (Binding),
                las clases, para asignar dinamicamente
                clases, con objetos y valores booleanos.
             -->
      <p
        :class="{
          red: isNegative,
          green: !isNegative,
        }"
      >
        {{ amountCurrency }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { toRefs, computed } from "vue";
import currencyFormatter from "@/js/currencyFormater";

const props = defineProps({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

const { id, title, description, amount } = toRefs(props);

// En Composition API, podemos generar funciones computadas,
// con 'computed' en formato de programación funcional.
const amountCurrency = computed(() => currencyFormatter.format(amount.value));

const isNegative = computed(() => amount.value < 0);

// al igual que defineProps, no requiere importarse.
// nos permite declarar los eventos a emitir.
// recordemos que con emit podemos enviarle un evento
// al elemento padre.
const emit = defineEmits(["remove"]);

const remove = () => {
  // Notesé emit('evento-a-emitir', 'valor-a-emitir')
  emit("remove", id.value);
};
</script>

<style scoped>
.movement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: #e6f9ff;
  border-radius: 8px;
  box-sizing: border-box;
}
.movement .content {
  width: 100%;
}
.movement .action {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
}
h4,
p {
  margin: 0;
  padding: 0;
}
h4 {
  margin-bottom: 8px;
}
.movement .action img {
  margin-bottom: 16px;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>
