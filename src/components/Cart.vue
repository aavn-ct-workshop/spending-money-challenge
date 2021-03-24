<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
    <ul id="array-rendering">
      <li v-for="(item, index) in boughtProducts" :key="item.id">
        {{ item.name }}
        <button @click="removeFromCart(index)">X</button>
      </li>
    </ul>
    <hr>
    <h3>Total: {{ sum }}</h3>
  </div>
</template>

<script>

export default {
  name: "Cart",
  data() {
    return {
      boughtProducts: this.$store.getters["cart/getAllProducts"],
      loading: false,
    };
  },
  methods: {
   removeFromCart(index) {
      this.boughtProducts.splice(index, 1);
      this.sum = this.calcSum();
    },
    calcSum() {
      this.sum = 0;
      this.boughtProducts.forEach((p) => (this.sum += parseInt(p.price)));
      return this.sum;
    },
  },
  created() {
    this.calcSum();
  },
  watch: {
    boughtProducts: {
        handler: function () {
            this.calcSum();
        },
        deep: true
    }
  }
}
</script>

<style scoped>
@import "../assets/css/styles.css";
.cart {
    position: fixed;
    top: 1em;
    right: 1em;
    border: solid;
}
.cart ul {
  list-style-type: none;
}
</style>
