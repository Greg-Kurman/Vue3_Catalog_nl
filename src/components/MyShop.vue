<template>
    <div class="shop">
        <div class="wrapper">
            <div class="main__wrapper">
                <div class="main__title">
                    <h1>Категории товаров</h1>
                </div>
                <RouterLink to="/MyCategory">
                    <DotLoader :loading="loading" :color="color" :size="size" class="spinner"/>

                        <div class="main__items">
                            <MyShopItem v-for="product in info" :key="product.id" :product_data="product" />
                        </div>

                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import MyShopItem from './MyShopItem.vue'
import axios from 'axios'
import { DotLoader } from "../../node_modules/vue3-spinner/lib/vue3-spinner";


export default {
    components: {
        MyShopItem,
        DotLoader,
    },
    name: 'MyShop',
    props: {
    },
    data() {
        return {
            info: null,
            size: 150,
            color: 'black',
            loading: true,
        }
    },
    beforeMount() {
        axios
            .get('https://nlstar.com/ru/api/catalog3/v1/menutags/')
            .then(response => {
                this.info = response.data.tags;
            })
            .catch(error => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => (this.loading = false));

        let arr = [1, 0, 5, 2]

        console.log(eval(
            arr.filter((n) => !!n)
        ))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
a {
    text-decoration: none;
}

.spinner {
    position: absolute;
    top: 50%;
    left: 50%;
}

.shop {
    display: flex;
    justify-content: center;
}

.wrapper {
    display: flex;
    justify-content: flex-start;
    max-width: 1150px;
    align-items: center;
}

.main__title {
    margin-top: 35px;
    font-family: 'Futura PT demi';
    font-style: normal;
    font-weight: 600;
    color: #272727;
}

.main__items {
    display: flex;
    flex-wrap: wrap;
}

@media(max-width: 1150px) {
    .main__items {
        justify-content: center;
    }
}
</style>
