<template>
  <Layout>
    <SubCategoriasList> <SubCategoriasAccordion /></SubCategoriasList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import SubCategoriasList from "@/components/subcategorias/SubCategoriasList.vue";
import SubCategoriasAccordion from "@/components/subcategorias/SubCategoriasAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    SubCategoriasList,
    SubCategoriasAccordion,
  },
};
</script>
