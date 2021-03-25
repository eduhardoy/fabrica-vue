<template>
  <Layout>
    <PartesList> <PartesAccordion /></PartesList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import PartesList from "@/components/partes/PartesList.vue";
import PartesAccordion from "@/components/partes/PartesAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    PartesList,
    PartesAccordion,
  },
};
</script>
