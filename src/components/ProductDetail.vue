<template>
  <div>
    <p>Product </p>
    <img :src="loadImage()"/>
    <h1>{{product.name}}</h1>
    <p>{{product.desc}}</p>
    <p>{{formatCurrency(product.price)}}</p>
    <button type="button" v-on:click="addToCart(product)" :disabled="(currentAmount - product.price) <= 0">Add to cart</button>
  </div>
</template>

<script>
const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
export default {
  name: "ProductDetail",
  components: {
  },
   data() {
    return {
      boughtProducts: this.$store.getters['cart/getAllProducts'],
      product: this.$store.getters['products/getProductById'](this.$route.params.id)
    };
  },
  methods: {
    formatCurrency(currency) {
     return formatter?.format(currency);
   },
   removeFromCart(product) {
      this.$store.dispatch("cart/removeProductByName", product.name);
    },
    loadImage() {
      return this.$store.getters['products/getImgUrl'](this.$route.params.id);
    },
    addToCart(product) {
      this.$store.dispatch("cart/addProduct", product);
    },
  },
  computed: {
    getProduct() {
      return this.$store.getters['products/getProductById'](1);
    },
    currentAmount() {
      return 1000 - this.boughtProducts?.reduce((currentValue, product) => {
        const number = product.number && product.number > 0 ? product.number : 1;
        return currentValue + (number * product.price);
      }, 0);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
