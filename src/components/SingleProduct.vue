<template>
  <div class="p-col-10 single-product center">
    <img :src="require('@/assets/images/' + selectecProduct.img)" />
    <h1>{{ selectecProduct.name }}</h1>
    <p>{{ selectecProduct.desc }}</p>
    <h2 class="price" >Price: ${{ selectecProduct.price }}</h2>
    <button @click="addToCart()">Add to Cart</button>
  </div>
  <Cart />
</template>

<script>
import { getProducts } from "../assets/js/services/fake-backend";
import Cart from "./Cart";
export default {
  name: "SingleProduct",
  components: {  
    Cart,
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      selectecProduct: null,
      boughtProducts: this.$store.getters["cart/getAllProducts"],
    };
  },
  methods: {
    fetchData() {
      this.products = null;
      getProducts((products) => {
        this.$store.dispatch("products/loadAllProducts", products);
        this.selectecProduct = products.find((p) => p.id == this.$route.params.id);
      });
    },
    addToCart() {
      if(1000 - this.boughtProducts?.reduce((currentValue, product) => {
        const number = product.number && product.number > 0 ? product.number : 1;
        return currentValue + (number * product.price);
      }, 0) - parseInt(this.selectecProduct.price)> 0) {
        this.boughtProducts.push(this.selectecProduct);

      }
    },
  }
}
</script>

<style scoped>
@import "../assets/css/styles.css";
.single-product {
  border: solid;
  width: 500px;
  background-color: white;
}
.single-product price{
  color: greenyellow;
}
</style>
