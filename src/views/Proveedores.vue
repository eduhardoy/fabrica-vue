<template>
  <Layout>
    <ProveedoresList> <ProveedoresAccordion /></ProveedoresList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import ProveedoresList from "@/components/proveedores/ProveedoresList.vue";
import ProveedoresAccordion from "@/components/proveedores/ProveedoresAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    ProveedoresList,
    ProveedoresAccordion,
  },
};
</script>
