<template>
  <Layout>
    <EstadisticaList> 
      <!-- <EstadisticaAccordion /> -->
    </EstadisticaList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import EstadisticaList from "@/components/contabilidad/EstadisticaList.vue";
//import EstadisticaAccordion from "@/components/contabilidad/EstadisticaAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    EstadisticaList,
    //EstadisticaAccordion,
  },
};
</script>
