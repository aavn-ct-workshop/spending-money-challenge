<template>
  <div class="p-d-flex">
    <div class="p-col-8 p-d-flex p-flex-column p-ai-end">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "Product",
  components: {
  },
  data() {
    return { };
  },
  methods: {
  },
  computed: {
  }
};
</script>

<style scoped>
@import "../assets/css/styles.css";

  .shopping-cart {
    position: fixed;
    right: 2em;
    height: min-content;
    padding: 20px;
  }
</style>
