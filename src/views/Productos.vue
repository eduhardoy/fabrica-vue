<template>
  <Layout>
    <ProductosList />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import ProductosList from "@/components/ProductosList.vue";

export default {
  name: "Home",
  components: {
    Layout,
    ProductosList,
  },
};
</script>
