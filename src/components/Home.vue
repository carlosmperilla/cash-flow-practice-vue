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
        :total-amount="totalAmount"
        :amount="amount"
      >
        <template #graphic>
          <Graphic :amounts="amounts" @select="select" />
        </template>
        <template #action>
          <Action @create="create" />
        </template>
      </Resume>
    </template>
    <template #movements>
      <Movements :movements="movements" @remove="remove" />
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
import Graphic from "@/components/snippets/Resume/Graphic.vue";

export default {
  components: {
    Layout,
    Header,
    Resume,
    Movements,
    Action,
    Graphic,
  },
  data() {
    // Devuelve el estado reactivo inicial para la instancia del componente
    return {
      label: null,
      amount: null,
      movements: [],
    };
  },
  // Los metodos computados.
  computed: {
    amounts() {
      const lastDays = this.movements
        .filter((m) => {
          const today = new Date();
          const oldDate = today.setDate(today.getDate() - 30);

          return m.time > oldDate;
        })
        .map((m) => m.amount);

      return lastDays.map((m, i) => {
        const lastMovements = lastDays.slice(0, i + 1);

        return lastMovements.reduce((suma, movement) => {
          return suma + movement;
        }, 0);
      });
    },
    totalAmount() {
      return this.movements.reduce((suma, m) => {
        return suma + m.amount;
      }, 0);
    },
  },
  // Ver el ciclo de vida de vue.
  // Este metodo se ejecuta cuando
  // el componente esta montado.
  mounted() {
    const movements = JSON.parse(localStorage.getItem("movements"));

    if (Array.isArray(movements)) {
      this.movements = movements.map((m) => {
        return { ...m, time: new Date(m.time) };
      });
    }
    return null;
  },
  methods: {
    create(movement) {
      this.movements.push(movement);
      this.save();
    },
    remove(id) {
      const index = this.movements.findIndex((m) => m.id === id);
      this.movements.splice(index, 1);
      this.save();
    },
    save() {
      localStorage.setItem("movements", JSON.stringify(this.movements));
    },
    select(el) {
      this.amount = el;
    },
  },
};
</script>
