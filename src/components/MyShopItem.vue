<template>
    <div class="shop">
        <div class="shop__items">
            <div class="shop__item">
                <div>БАД
                    {{product_data}}
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'MyNavigation',
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
}
</script>
  
<style >
.shop {
    display: flex;
    justify-content: center;
}

.shop__items {
    display: flex;
    cursor: pointer;


}

.shop__item div {
    padding: 15px 0 0 20px;

}

.shop__item {
    background-color: blueviolet;
    width: 270px;
    height: 150px;
    margin: 15px 15px 0 0;
    border-radius: 5px;
    font-family: 'Futura PT demi';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    background-image: url(../assets/shop_items/БАД.svg);
    background-repeat: no-repeat;
    background-position: 120px 70px;
    color: #FFFFFF;
}

.wrapper {
    display: flex;
    justify-content: flex-start;
    width: 1150px;
    align-items: center;
}
</style>