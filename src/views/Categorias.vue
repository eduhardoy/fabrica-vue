<template>
  <Layout>
    <CategoriasList> <CategoriasAccordion /></CategoriasList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import CategoriasList from "@/components/categorias/CategoriasList.vue";
import CategoriasAccordion from "@/components/categorias/CategoriasAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    CategoriasList,
    CategoriasAccordion,
  },
};
</script>