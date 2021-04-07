<template>
  <Layout>
    <ClientesList> 
        <ClientesAccordion />
    </ClientesList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import ClientesList from "@/components/clientes/ClientesList.vue";
import ClientesAccordion from "@/components/clientes/ClientesAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    ClientesList,
    ClientesAccordion,
  },
};
</script>