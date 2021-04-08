<template>
  <Layout>
    <VentasList> 
        <VentasAccordion />
    </VentasList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import VentasList from "@/components/ventas/VentasList.vue";
import VentasAccordion from "@/components/ventas/VentasAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    VentasList,
    VentasAccordion,
  },
};
</script>