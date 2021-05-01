<template>
  <Layout>
    <GastosList> 
        <GastosAccordion />
    </GastosList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import GastosList from "@/components/gastos/GastosList.vue";
import GastosAccordion from "@/components/gastos/GastosAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    GastosList,
    GastosAccordion,
  },
};
</script>