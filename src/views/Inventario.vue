<template>
  <Layout>
    <InventarioList> 
      <!-- <InventarioAccordion /> -->
    </InventarioList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import InventarioList from "@/components/inventario/InventarioList.vue";
//import InventarioAccordion from "@/components/inventario/InventarioAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    InventarioList,
    //InventarioAccordion,
  },
};
</script>
