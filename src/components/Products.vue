<template>
  <div class="p-col-10">
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
      <div v-if="loading" style="text-align: center;">
        loading ...
      </div>
      <div  v-if="!loading">
        <ul id="example-1" style="list-style-type: none;">
          <li v-for="item in getAllProducts" :key="item.id">
            <ProductItem :product="item"></ProductItem>
          </li>
        </ul>
      </div>
    </div>
  </div>

<div class="p-col-2">
<ul id="example-1" style="list-style-type: none;">
          <li v-for="item in getAllProductsInCart" :key="item.id">
            <CartItem :product="item"></CartItem>
          </li>
        </ul>
</div>
</template>

<script>
import Banner from "./Banner";
import Header from "./Header";
import NavBar from "./NavBar";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";

import {getProducts} from '../assets/js/services/fake-backend'

const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

export default {
  name: "Products",
  components: {
    NavBar,
    Banner,
    Header,
    ProductItem,
    CartItem
  },
  data() {
    return {
      boughtProducts: this.$store.getters['cart/getAllProducts'],
      loading: false
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
    getAllProductsInCart() {
      return this.$store.getters['cart/getAllProducts']
    }, 

    getAllProducts() {
      return this.$store.getters['products/getAllProducts']
    },
    currentAmount() {
      return 1000 - this.boughtProducts?.reduce((currentValue, product) => {
        const number = product.number && product.number > 0 ? product.number : 1;
        return currentValue + (number * product.price);
      }, 0);
    }
  }
};
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>
