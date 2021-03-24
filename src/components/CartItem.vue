<template>
<div>
    <Card>
        <template #title>
           {{ product.name }}
        </template>
        <template #content>
            {{product.number}}
             <Button icon="pi pi-check" label="delete" v-on:click="deleteProducFromCart(product)"/>
        </template>

    </Card>
</div>

</template>

<script>
import Card from 'primevue/card';

export default {
  name: "ProductItem",
  props: ['product'],
  components: {Card},
  data() {
    return {
    };
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {

    deleteProducFromCart(product) {
      this.$store.dispatch('cart/removeProductByName', product.name)
     },

    addProducToCart(product) {
      this.$store.dispatch('cart/addProduct', product)
     },

      getName(imageName) {
        return "images/" + imageName;
        },
    
  },
  computed: {
  }
};
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>
