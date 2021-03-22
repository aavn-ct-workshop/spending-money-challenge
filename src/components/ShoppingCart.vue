<template>
    <div class="shopping-cart">
        <span style="font-weight:bold;">Shoping Cart</span>
        <div class="container">
            <table class="receipt-table">
                <tr v-for="product in productsInCart" v-bind:key="product.key">
                    <td style="text-align:left">{{product.name}}</td>
                    <td>{{product.number}}</td>
                    <td>{{formatCurrency(product.price)}}</td>
                    <td><button v-on:click="deleteFromCart(product.name)" class="delete-button"><i class="pi pi-times"></i></button></td>
                </tr>
            </table>
            <hr>
            <div>Total: {{formatCurrency(totalAmount)}}</div>
            <div><button class="button-choose" v-on:click="checkOut">Check out</button></div>
        </div>
    </div>
</template>

<script>
const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
export default {
    name: "ShoppingCart",
    props: {
    },
    methods: {
        deleteFromCart (productName) {
            this.$store.dispatch('cart/removeProductByName', productName)
        },
        formatCurrency(currency) {
            return formatter?.format(currency);
        },
        checkOut() {
            alert('You bought it :D!!!!!')
        }
    },
    computed: {
        productsInCart() {
            return this.$store.getters['cart/getAllProducts']
        },
        totalAmount() {
            return this.$store.getters['cart/getAllProducts'].reduce((currentValue, product) => {
                const number = product.number && product.number > 0 ? product.number : 1;
                return currentValue + (number * product.price);
            }, 0);
    }
    }
}
</script>

<style scoped>
    @import "../assets/css/styles.css";
</style>