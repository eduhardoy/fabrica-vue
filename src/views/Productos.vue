<template>
  <Layout>
    <ProductosList> <ProductosAccordion /></ProductosList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import ProductosList from "@/components/ProductosList.vue";
import ProductosAccordion from "@/components/ProductosAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    ProductosList,
    ProductosAccordion,
  },
};
</script>
