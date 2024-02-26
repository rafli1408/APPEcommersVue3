<template>
    <navbar />

    <!-- start detail -->
    <!-- start breadcumb -->
    <div class="container">
        <div class="flex items-center text-primary md:ml-5 font-medium bg-primary py-4 px-4 rounded mt-10 mb-10">
            <RouterLink to="/" href="#" class="hover:text-opacity-80 text-white">Home</RouterLink>
            <span class="mx-2 text-white">/</span>
            <RouterLink to="/menu" href="#" class=" text-white hover:text-opacity-80">Menu</RouterLink>
            <span class="mx-2 text-white">/</span>
            <span class="text-white">Coffe Order</span>
        </div>
    </div>
    <!-- end breadcumb -->
    <div class="container  ">
        <div class="flex flex-wrap items-center justify-center">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img :src="'/src/assets/img/' + product.gambar" alt="best-produk" class="w-full h-[320px] " />
            </div>
            <div class="mb-10  md:ml-10">
                <h2 class="text-3xl mr-40">{{ product.nama }}</h2>
                <hr>
                <h4 class="mt-2 text-2xl">{{formattedPrice}}</h4>

                 <!-- start form pilih pesanan -->
                <form action="" class="mt-5" v-on:submit.prevent>
                    <div class="mb-5">
                        <label for="jumlah_pemesanan"> jumlah Pesanan :</label>
                        <input type="number" name="jumlah_pemesanan" id="jumlah_pemesanan" class="ml-2 ring-2 ring-primary"
                            v-model="pesan.jumlah_pemesanan" />
                    </div>
                    <div class="mb-5">
                        <label for="keterangan" class="block">Keterang :</label>
                        <textarea name="keterangan" id="keterangan" cols="25" rows="3" class="ml-32 ring-2 ring-primary"
                            v-model="pesan.keterangan"></textarea>
                    </div>
                    <div class="mb-5">
                        <button class="inline-block py-3 px-5 bg-primary rounded-lg hover:opacity-80 float-right text-white"
                            @click="pemesanan">
                            🛒Pesan
                        </button>
                    </div>
                </form>
                <!-- end form pilih pesanan -->
            </div>
        </div>
    </div>

    <!-- end detail -->

    <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default {
    name: "Detail",
    components: {
        Footer,
        Navbar,
        axios,
    },
    data() {
        return {
            product: {},
            pesan: {}
        }
    },
    computed: {
        formattedPrice() {
            const price = this.product.harga || 0;
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
        },
    },
    methods: {
        setProduct(data) {
            this.product = data;
        },
        pemesanan() {
            if (this.pesan.jumlah_pemesanan) {
                this.pesan.produks = this.product;
                axios
                    .post("http://localhost:3000/keranjangs", this.pesan)
                    .then(() => {
                        this.$router.push({ path: "/keranjang"})
                        this.$toast.success("Sukses Menambahkan Ke Kerang", {
                            type: 'success',
                            position: 'top-right',
                            duration: 3000,
                            dismissible: true,
                        });
                    })
                    .catch((err) => console.log(err))
            } else {
                this.$toast.error("Jumlah Pesanan Belum Diisi..", {
                    type: 'error',
                    position: 'top-right',
                    duration: 3000,
                    dismissible: true,
                });
            }
        },
    },
    mounted() {
        axios
            .get("http://localhost:3000/produks/" + this.$route.params.id)
            .then((response) => this.setProduct(response.data))
            .catch((error) => console.log(error))

    },

};
</script>

<style></style>