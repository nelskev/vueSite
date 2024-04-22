<template>
<h1>Products</h1>
<productsList :products="products" />
</template>


<script>
import productsList from '../components/productsList.vue';
import { products } from '../temp-data';

export default {
    name: "ProductsPage", 
    components: {
        productsList,
    },
    data() {
        return {
            products,
        }
    }
}
</script>