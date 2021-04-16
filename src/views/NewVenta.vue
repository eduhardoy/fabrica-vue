<template>
  <Layout>
    <VentaGenerador/>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import VentaGenerador from "@/components/venta/VentaGenerador.vue";

export default {
  name: "NewVenta",
  components: {
    Layout,
    VentaGenerador,
  },
};
</script>