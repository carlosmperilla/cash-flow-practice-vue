<template>
  <!-- 
        Las clases de los elementos contenedores
        tienen el mismo nombre del componente por
        convención de desarrollo, puede tener otro nombre
        si viene al caso.
    -->
  <div class="movements">
    <h2 class="title">Historial</h2>
    <div class="content">
      <!-- 
            v-for nos permite iterar pos los movimientos.
            :key nos permite identificar cada nodo de forma única,
            suele usarse el id del elemento para el key.
         -->
      <Movement
        v-for="{ id, title, description, amount } in movements"
        :key="id"
        :id="id"
        :title="title"
        :description="description"
        :amount="amount"
        @remove="remove"
      />
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";
import Movement from "./Movement.vue";

// Esta es la forma de declarar props
// en sintaxis de Composition API.
// no necesita ser importado.
const props = defineProps({
  movements: {
    type: Array,
    default: () => [], // Usamos arrow functions para la mutabilidad y reactividad del objeto Array.
  },
});

// toRefs: Convierte un objeto reactivo en un objeto simple donde cada propiedad del objeto resultante
// es una referencia que apunta a la propiedad correspondiente del objeto original.
const { movements } = toRefs(props);

const remove = (id) => {
  console.log("remove", id);
};
</script>

<style scoped>
.movements {
  max-height: 100%;
  padding: 0 8px;
  margin-bottom: 14px;
}
.title {
  margin: 8px 16px 24px 16px;
  color: var(--brand-blue);
}
.content {
  max-height: 68vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
}
</style>
