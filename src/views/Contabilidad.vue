<template>
  <Layout>
    <ContabilidadList> 
      <!-- <ContabilidadAccordion /> -->
    </ContabilidadList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import ContabilidadList from "@/components/contabilidad/ContabilidadList.vue";
//import ContabilidadAccordion from "@/components/contabilidad/ContabilidadAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    ContabilidadList,
    //ContabilidadAccordion,
  },
};
</script>
