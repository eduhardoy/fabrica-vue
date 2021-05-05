<template>
  <Layout>
    <PresupuestosList> <PresupuestosAccordion /> </PresupuestosList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import PresupuestosList from "@/components/presupuesto/PresupuestosList.vue";
import PresupuestosAccordion from "@/components/presupuesto/PresupuestosAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    PresupuestosList,
    PresupuestosAccordion,
  },
};
</script>