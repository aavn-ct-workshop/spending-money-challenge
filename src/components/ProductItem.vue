<template>
    <div class="pricing-table-price item">
        <img class="price-image" :src="imagesource" v-on:click="$emit('set-current-product', product)"/>
        <span class="price-name">{{product.name}}</span>
        <span class="price-value">{{formatCurrency(product.price)}}</span>
        <button :disabled='disabled' :class="{disabled : disabled}" class="button-choose" v-on:click="$emit('add-to-cart', product)"><i class="pi pi-shopping-cart"></i> Add to cart</button>
    </div>
</template>

<script>
const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0,});
export default {
    name: "ProductItem",
    props: {
        product: Object,
        currentAmount: Number
    },
    methods: {
        formatCurrency(currency) {
            return formatter?.format(currency);
        },
        openDetail() {
            
        }
    },
    computed: {
        imagesource() {
            return require("../assets/images/" + this.product.img);
        },
        disabled() {
            return parseInt(this.product.price) > this.currentAmount;
        }
    }
}
</script>

<style scoped>
    @import "../assets/css/styles.css";
</style>