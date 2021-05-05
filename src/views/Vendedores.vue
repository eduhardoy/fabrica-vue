<template>
  <Layout>
    <VendedoresList> 
        <VendedoresAccordion/>
    </VendedoresList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import VendedoresList from "@/components/vendedores/VendedoresList.vue";
import VendedoresAccordion from "@/components/vendedores/VendedoresAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    VendedoresList,
    VendedoresAccordion,
  },
};
</script>