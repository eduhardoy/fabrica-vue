<template>
  <Layout>
    <ComprasList> 
        <ComprasAccordion />
    </ComprasList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import ComprasList from "@/components/compras/ComprasList.vue";
import ComprasAccordion from "@/components/compras/ComprasAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    ComprasList,
    ComprasAccordion,
  },
};
</script>