<template>
    <div class="shop">
        <div class="wrapper">
            <div class="main__wrapper">
                <div class="main__title">
                    <a href="#"><img src="../assets/Back_btn.png" alt=""></a>
                    <h1>Функциональные коктейли</h1>
                </div>
                <div class="main__body">
                    <div class="main__list">
                        <ul>
                            <li class="main__list_selected">Все продукты</li>
                            <li>Коктейли ED</li>
                            <li>Все продукты</li>
                            <li>Коктейли ED</li>
                            <li>Все продукты</li>
                            <li>Коктейли ED</li>
                            <li>Все продукты</li>
                            <li>Коктейли ED</li>
                        </ul>
                    </div>
                    <div class="main__items">
                       <MyCategoryItem/>
                       <MyCategoryItem/>
                       <MyCategoryItem/>
                       <MyCategoryItem/>
                       <MyCategoryItem/>
                       <MyCategoryItem/>
                       <MyCategoryItem/>
                       <MyCategoryItem/>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
 import MyCategoryItem from './MyCategoryItem.vue'


export default {
    components: {
         MyCategoryItem
    },
    name: 'MyShop',
    props: {
    }
}
</script>
  
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
    display: flex;
    align-items: center;
    margin-top: 35px;
    font-family: 'Futura PT demi';
    font-style: normal;
    font-weight: 600;
    color: #272727;
}

.main__title a {
    margin: 0 10px 0 0;
}

.main__body {
    display: flex;
}

.main__list ul {
    list-style-type: none;
    font-family: 'Futura PT medium';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 0;

}

.main__list ul li {
    display: flex;
    align-items: center;

    margin: 0 30px 0 0;
    padding-left: 12px;
    width: 240px;
    height: 40px;
    border-bottom: 1px solid #E9EEF3;

}

.main__list_selected {
    background: #E9EEF3;
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
  