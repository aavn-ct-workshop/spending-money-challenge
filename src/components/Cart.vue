<template>
  <div>
    <p>Your cart</p>
    <table>
        <tr v-for="item in boughtProducts" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.number}}</td>
            <td>{{formatCurrency(item.price * item.number)}}</td>
            <td><button type="button" v-on:click="removeFromCart(item)">X</button></td>
        </tr>
    </table>
  </div>
</template>

<script>
const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
export default {
    
   data() {
    return {
      boughtProducts: this.$store.getters['cart/getAllProducts']
    };
  },
  methods: {
    formatCurrency(currency) {
     return formatter?.format(currency);
   },
   removeFromCart(product) {
      this.$store.dispatch("cart/removeProductByName", product.name);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
