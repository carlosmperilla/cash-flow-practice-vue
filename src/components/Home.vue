<template>
  <Layout>
    <!-- 
      El # le indica al componente padre el nombre del slot.
     -->
    <template #header>
      <Header></Header>
    </template>
    <template #resume>
      <!-- 
        : es la abreviación de v-bind
        Enlaza dinámicamente uno o más atributos, o una propiedad de un componente a una expresión.
       -->
      <Resume
        :total-label="'Ahorro total'"
        :label="label"
        :total-amount="100000"
        :amount="amount"
      >
        <template #graphic> graphic </template>
        <template #action>
          <Action @create="create" />
        </template>
      </Resume>
    </template>
    <template #movements>
      <Movements :movements="movements" />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import Header from "@/components/snippets/Header.vue";
// Este import maneja una sintaxis más util para componentes y sub-componentes.
import Resume from "@/components/snippets/Resume/Index.vue";
import Movements from "@/components/snippets/Movements/Index.vue";
import Action from "@/components/snippets/Action.vue";

export default {
  components: {
    Layout,
    Header,
    Resume,
    Movements,
    Action,
  },
  data() {
    // Devuelve el estado reactivo inicial para la instancia del componente
    return {
      label: null,
      amount: null,
      movements: [
        {
          id: 0,
          title: "Movimiento 0",
          description: "lorem lorem lorem lorem loremazo",
          amount: 1000,
        },
        {
          id: 1,
          title: "Movimiento 1",
          description: "lorem lorem lorem lorem loremazo",
          amount: -1000,
        },
        {
          id: 2,
          title: "Movimiento 2",
          description: "lorem lorem lorem lorem loremazo",
          amount: 1000,
        },
        {
          id: 3,
          title: "Movimiento 3",
          description: "lorem lorem lorem lorem loremazo",
          amount: -1000,
        },
        {
          id: 4,
          title: "Movimiento 4",
          description: "lorem lorem lorem lorem loremazo",
          amount: 1000,
        },
        {
          id: 5,
          title: "Movimiento 5",
          description: "lorem lorem lorem lorem loremazo",
          amount: 1000,
        },
        {
          id: 6,
          title: "Movimiento 6",
          description: "lorem lorem lorem lorem loremazo",
          amount: 1000,
        },
        {
          id: 7,
          title: "Movimiento 7",
          description: "lorem lorem lorem lorem loremazo",
          amount: 1000,
        },
        {
          id: 8,
          title: "Movimiento 8",
          description: "lorem lorem lorem lorem loremazo",
          amount: 1000,
        },
        {
          id: 9,
          title: "Movimiento 9",
          description: "lorem lorem lorem lorem loremazo",
          amount: 1000,
        },
      ],
    };
  },
  methods: {
    create(movement) {
      console.log(movement);
    },
  },
};
</script>
