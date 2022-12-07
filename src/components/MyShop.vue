<template>
    <div class="shop">
        <div class="wrapper">
            <div class="main__wrapper">
                <div class="main__title">
                    <h1>Категории товаров {{ lol }}</h1>
                </div>
                <div class="main__items">
                    <MyShopItem v-for="product in info" :key="product.article" :product_data="product"/>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import MyShopItem from './MyShopItem.vue'
import axios from 'axios'


export default {
    components: {
        MyShopItem,
    },
    name: 'MyShop',
    props: {
    },
    data(){
        return{
            lol:1,
            info: null,
        }
    },
    mounted() {
    axios
      .get('https://nlstar.com/ru/api/catalog3/v1/menutags/')
      .then(response => {
        this.info = response;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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

.main__items{
    display: flex;
        flex-wrap: wrap;
}

@media(max-width: 1150px){
    .main__items {
         justify-content: center;
    }
}
 
</style>
  