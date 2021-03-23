<template>
  <Layout>
    <MenuGrid />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import MenuGrid from "@/components/MenuGrid.vue";

export default {
  name: "Home",
  components: {
    Layout,
    MenuGrid,
  },
};
</script>
