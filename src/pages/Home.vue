<template>
  <main>
    <div class="home">
      <LeaseForm msg="Welcome to Your Vue.js App" />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import LeaseForm from "@/components/modules/LeaseForm.vue";

export default {
  name: "Home",
  components: {
    LeaseForm,
  },
};
</script>
