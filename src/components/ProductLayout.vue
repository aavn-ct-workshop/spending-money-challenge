<template>
  <div class="p-d-flex">
    <table width="100%">
      <tr>
        <td width="80%">
          <router-view></router-view>
          </td>
          <td>
<Cart/>
          </td>
        </tr>
    </table>
  </div>
</template>

<script>
import Cart from "./Cart";
export default {
  name: "Product",
  components: {
    Cart
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
