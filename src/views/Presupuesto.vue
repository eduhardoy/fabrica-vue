<template>
  <Layout>
    <PresupuestoNew/>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import PresupuestoNew from "@/components/presupuesto/PresupuestoNew.vue";

export default {
  name: "Home",
  components: {
    Layout,
    PresupuestoNew,
  },
};
</script>