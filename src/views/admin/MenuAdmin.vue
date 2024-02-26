<template>
    <Navbar />


    <!-- start best Produk -->
    <div class="container">
        <div class="w-full px-4">
            <div class="flex flex-wrap justify-between">
                <h2 class="font-bold text-3xl md:text-4xl bg-gradient-to-r from-slate-300 to-primary bg-clip-text text-transparent mb-10 px-4 mt-4"> ALL Menu </h2>
                <label for="search" class="mt-4 mr-3">
                    <input v-model="search" type="text" id="search" placeholder="cari.." class="px-3 py-2 border " @keyup="searchKopi" /> 
                </label>
            </div>
            <input type="text">
            <div class="flex flex-wrap">
                <div id="CardProduk" class="w-full px-4 lg:w-1/2 xl:w-1/3" v-for="product in products" :key="product.id">
                <Produk :product="product" />
                </div>
             </div>
        </div>
    </div>
    <!-- end best produk -->
<Footer />


</template>

<script>
    import Navbar from '@/components/Navbar.vue';
    import Produk from '@/components/CardProduk.vue';
    import axios from 'axios';
    import Footer from '@/components/Footer.vue';

export default {
    name:"Menu",
        components : {
            Navbar,
            Produk,
            Footer

        },
    data() {
        return {
            products: [],
            search:'',
        };
    },
    methods: {
        setProducts(data) {
            this.products = data;
        },
        searchKopi(){
            console.log(this.search)
            axios.get('http://localhost:3000/produks?q=' + this.search)
            .then((response) => this.products=response.data)
            .catch ((error) =>console.log(error))
        }
    },
    mounted() {
        axios.get('http://localhost:3000/produks')
            .then((response) => this.setProducts(response.data))
            .catch ((error) =>console.log(error)) 
  
    }
};

</script>

<style>

</style>