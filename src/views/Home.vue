<template>
  <Header />
  <MenuGrid />
</template>

<script>
import Header from "@/components/Header.vue";
import MenuGrid from "@/components/MenuGrid.vue";

export default {
  name: "Home",
  components: {
    Header,
    MenuGrid,
  },
};
</script>
