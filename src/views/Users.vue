<template>
  <Layout>
    <UsersList> 
        <UsersAccordion/>
    </UsersList>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import UsersList from "@/components/users/UsersList.vue";
import UsersAccordion from "@/components/users/UsersAccordion.vue";

export default {
  name: "Home",
  components: {
    Layout,
    UsersList,
    UsersAccordion,
  },
};
</script>