<template>
<div>
    <Card>
       <template #header>
           <img style="width: 50px; height: 50px;"
           :src="require(`@/assets/images/${product.img}`)" />
        </template>
        <template #title>
           {{ product.name }}
        </template>
        <template #content>
            {{ product.desc }}
        </template>
        <template #footer>
            <Button icon="pi pi-check" label="Add to Cart" v-on:click="addProducToCart(product)"/>
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
