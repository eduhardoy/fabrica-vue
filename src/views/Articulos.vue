<template>
  <Layout>
    <ArticulosSelect />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import ArticulosSelect from "@/components/articulos/ArticulosSelect.vue";

export default {
  name: "Articulos",
  components: {
    Layout,
    ArticulosSelect,
  },
};
</script>
