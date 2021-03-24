<template>
  <div class="p-col-10">
    <NavBar />
    <Header />
    <img id="billAvatar" src="../assets/images/bill.jpg" class="p-m-2" />
    <Banner msg="Spend Bill Gates' Money" />
    <div class="l-content">
      <div class="pricing-tables pure-g" id="pricing-tables">
        <div class="pricing-amount pure-u-1 pure-u-md-3-3">
          <div class="current-amount">{{ formatCurrency(currentAmount) }}</div>
        </div>
      </div>
    </div>
    <div class="p-grid pricing-table-price center">
      <div v-if="loading">loading ...</div>
      <div class="p-col-2 l-box" >
       
        <div v-for="(item, index) in products" :key="item.id" >
          <div :class="{'component-product-0': index <= 1, 'component-product-1': index >1}">
             <img :src="require('@/assets/images/' + item.img)" style="width:150px" @click="viewProductDetail(item.id)"/>
          <p >{{ item.name }}</p>
          <p >{{ item.price }} $</p>
          <Button label="Primary" @click.prevent="addToCart(item.id)">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
    <Cart />
  </div>
</template>

<script>
import Banner from "./Banner";
import Header from "./Header";
import NavBar from "./NavBar";
import Cart from "./Cart";

import { getProducts } from "../assets/js/services/fake-backend";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default {
  name: "Products",
  components: {
    NavBar,
    Banner,
    Header,
    Cart,
  },
  data() {
    return {
      boughtProducts: this.$store.getters["cart/getAllProducts"],
      loading: false,
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData",
  },
  methods: {
    formatCurrency(currency) {
      return formatter?.format(currency);
    },
    fetchData() {
      this.products = null;
      this.loading = true;
      getProducts((products) => {
        this.$store.dispatch("products/loadAllProducts", products);
        this.products = products;
        this.loading = false;
      });
    },
    addToCart(id) {
      var product = this.products.find((product) => product.id == id);
      if(1000 - this.boughtProducts?.reduce((currentValue, product) => {
        const number = product.number && product.number > 0 ? product.number : 1;
        return currentValue + (number * product.price);
      }, 0) - parseInt(product.price)> 0) {
        this.boughtProducts.push(
          this.products.find((product) => product.id == id)
        );
      }
    },
    viewProductDetail(id) {
      this.$router.push('/single-product/'+ id);
    }
  },
  computed: {
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
.component-product-0{
  display:inline-block;
  width:350px;
  height:500px;
  color:grey;
  font-size: 15px;
  float:left;
  margin-bottom:10px;
  justify-content: center;
  background-color:white ;
  margin-top:10px;
}
.component-product-1{
  display:inline-block;
  width:350px;
  height:500px;
  color:grey;
  font-size: 15px;
  margin-left:20px;;
  background-color:white;
 margin-top:10px;
  
}
</style>
