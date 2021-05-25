<template>
  <Layout>
    <MenuGridSucursales />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import MenuGridSucursales from "@/components/menu/MenuGridSucursales.vue";

export default {
  name: "Sucursales",
  components: {
    Layout,
    MenuGridSucursales,
  },
};
</script>
