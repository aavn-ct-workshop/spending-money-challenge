<template>
    <div class="product-detail">
        <button class="button-choose back-button" v-on:click="$emit('back-to-products')"><i class="pi pi-arrow-left"></i> Back to products</button>
        <img class="price-image" :src="imagesource" />
        <span class="price-name">{{product.name}}</span>
        <span class="price-desc">{{product.desc}}</span>
        <span class="price-value">{{formatCurrency(product.price)}}</span>
        <button :disabled='disabled' :class="{disabled : disabled}" class="button-choose" v-on:click="$emit('add-to-cart', product)"><i class="pi pi-shopping-cart"></i> Add to cart</button>
    </div>
</template>

<script>
const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0,});
export default {
    name: "ProductDetail",
    props: {
        product: Object,
        currentAmount: Number
    },
    data() {
        return {
        };
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
.product-detail {
    font-size: 1.5em;
    margin: 0.2em 0 0;
    font-weight: 20;
    display: inline;
    float: left;
    width: 100%;
    width: 100%;
    padding: 1.5em;
    margin: 0.5em;
    background-color: white;
    position: relative;
}

.product-detail span.price-name {
    display: block;
    font-size: 1em;
    font-weight: 20;
    color: black;
    font-weight: bold;
}

.product-detail span.price-desc {
    display: block;
    font-size: 0.7em;
    font-weight: 20;
    color: black;
}

.product-detail span.price-value {
    display: block;
    font-size: 2em;
    padding: 0.5em 0em 0.5em 0em;
    font-weight: 20;
    color: green;
    font-weight: bold;
}

.product-detail img.price-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 15px 0px;
    height: 300px;
    max-width: 100%;
    object-fit: contain;
    -webkit-user-drag: none;
    user-select: none;
}

.back-button {
    position: absolute;
    left: -14em;
    top: 0.5em;
}
</style>