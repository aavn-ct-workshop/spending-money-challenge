<template>
  <div class="p-col-10">
    <div v-if="!displayProductDetail">
      <NavBar />
      <Header />
      <img id="billAvatar" src="../assets/images/bill.jpg" class="p-m-2" />
      <Banner msg="Spend Bill Gates' Money" />
      <div class="l-content">
        <div class="pricing-tables pure-g" id="pricing-tables">
          <div class="pricing-amount pure-u-1 pure-u-md-3-3">
            <div class="current-amount">{{formatCurrency(currentAmount)}}</div>
          </div>
        </div>
      </div>
      <div class="p-grid pricing-table-price">
        <div v-if="loading && displayProductDetail">
          loading ...
        </div>
        <div v-if="!loading && !displayProductDetail">
          <product-item v-for="product in getAllProducts" v-bind:product="product" v-bind:key="product.key" v-on:set-current-product="setCurrentProduct" v-on:add-to-cart="addToCart" v-bind:currentAmount="currentAmount"></product-item>
        </div>
      </div>
    </div>
    <div>
        <shopping-cart></shopping-cart>
      </div>
    <div>
      <product-detail v-if="displayProductDetail" v-bind:product="currentProduct" v-bind:currentAmount="currentAmount" v-on:back-to-products="backToProducts" v-on:add-to-cart="addToCart"></product-detail>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";
import Header from "./Header";
import NavBar from "./NavBar";
import ProductItem from "./ProductItem";
import ShoppingCart from "./ShoppingCart";

import {getProducts} from '../assets/js/services/fake-backend'
import ProductDetail from './ProductDetail.vue';

const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

export default {
  name: "Products",
  components: {
    NavBar,
    Banner,
    Header,
    ProductItem,
    ShoppingCart,
    ProductDetail
  },
  data() {
    return {
      boughtProducts: this.$store.getters['cart/getAllProducts'],
      loading: false,
      displayProductDetail: false,
    };
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/addProduct', product)
      this.boughtProducts = this.$store.getters['cart/getAllProducts']
    },
    setCurrentProduct(product) {
      this.$store.dispatch('products/currentProduct', product)
      this.displayProductDetail = true
    },
    backToProducts() {
      this.displayProductDetail = false
    },
    formatCurrency(currency) {
     return formatter?.format(currency);
   },
   fetchData() {
      this.products = null;
      this.loading = true;
      getProducts((products) => {
        this.$store.dispatch('products/loadAllProducts', products)
        this.loading = false;
      });
   }
   },
  computed: {
    getAllProducts() {
      return this.$store.getters['products/getAllProducts']
    },
    currentProduct() {
            return this.$store.getters['products/getCurrentProduct']
    },
    currentAmount() {
      return 1000 - this.boughtProducts?.reduce((currentValue, product) => {
        const number = product.number && product.number > 0 ? product.number : 1;
        return currentValue + (number * product.price);
      }, 0);
    },
    productsInCart() {
            return this.$store.getters['cart/getAllProducts']
        }
  }
};
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>
