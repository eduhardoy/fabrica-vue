<template>
  <Layout>
    <ProductosList> <ProductosAccordion /></ProductosList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import ProductosList from "@/components/productos/ProductosList.vue";
import ProductosAccordion from "@/components/productos/ProductosAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    ProductosList,
    ProductosAccordion,
  },
};
</script>
