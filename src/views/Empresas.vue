<template>
  <Header>
    <ArticulosSelect />
  </Header>
</template>

<script>
import Header from "@/components/Header.vue";
import ArticulosSelect from "@/components/articulos/ArticulosSelect.vue";

export default {
  name: "Articulos",
  components: {
    Header,
    ArticulosSelect,
  },
};
</script>
