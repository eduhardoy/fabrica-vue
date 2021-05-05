<template>
  <Layout>
    <ContaEstadSelect />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import ContaEstadSelect from "@/components/contabilidad/ContaEstadSelect.vue";

export default {
  name: "ContaEstad",
  components: {
    Layout,
    ContaEstadSelect,
  },
};
</script>
