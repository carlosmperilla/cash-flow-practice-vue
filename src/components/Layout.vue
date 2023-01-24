<template>
  <div class="header">
    <!-- El slot nos permite anidar componentes -->
    <slot name="header"></slot>
  </div>
  <div class="resume">
    <slot name="resume"></slot>
  </div>
  <div class="movements">
    <!-- 
      Esta es la "cabeza" visible por el usuario.
      Al darle click, se despliegan los movimientos.

      La acción efectuada al hacer click es:
      Cambiar el valor booleano de la variable reactiva.
     -->
    <div class="head" @click="showMovements = !showMovements">
      <div class="grip"></div>
    </div>
    <!-- 
      La directiva v-show:
        Alterna 'display: none;'
      Esto nos permite ocultar y mostrar elementos
      por medio de variables booleanas.
     -->
    <div class="body" v-show="showMovements">
      <slot name="movements"></slot>
    </div>
  </div>
</template>

<!-- 
  setup nos permite implementar Composition API.
  podemos usar Options API (en los componentes que tiene export),
  como Composition API, ambos en el mismo proyecto.

  Pero solo uno de los dos por componente.
 -->
<script setup>
// 'ref' toma un valor interno y devuelve un objeto ref
// reactivo y mutable.
// posee una propiedad .value que apunta al valor interno.
//
// Para objetos es más adecuado usar 'reactive',
// Para una reactividad profunda.
import { ref } from "vue";

// Recordar que al ser un objeto se puede asignar a una
// constante, el objeto no cambia, lo que cambia
// es su atributo 'value'.
const showMovements = ref(false);
</script>

<style scoped>
.header,
.resume,
.movements {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 14px 0;
  box-sizing: border-box;
}

.header {
  position: fixed;
  width: 100vw;
}

.resume {
  min-height: 100vh;
}

.movements {
  z-index: 1;
  position: absolute;
  flex-direction: column;
  bottom: 0;
  width: 100vw;
  background-color: white;
  box-shadow: 0 -8px 16px #e5e5e5;
  border-radius: 24px;
}

.movements .head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
}

.movements .body {
  height: 75vh;
  width: 100%;
}

.movements .head .grip {
  width: 120px;
  height: 8px;
  background-color: #e5e5e5;
  border-radius: 4px;
}
</style>
