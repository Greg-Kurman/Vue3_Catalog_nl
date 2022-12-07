<template>
    <div class="shop">
        <div class="shop__items">

            <div class="shop__item">
            </div>
            <div class="shop__title">Energy Diet Smart</div>
            <div class="shop__name">ED Smart Grapefruit, 7 порций</div>
            <div class="shop__discr">Сбалансированное питание</div>
            <div class="shop__price">1000 ₽</div>
            <button type="button" class="btn-apply">
                В корзину
            </button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'MyCategoryItem',
    props: {
    }
}
</script>
  
<style scoped >
.shop {
    display: flex;
    justify-content: center;
}

.shop__items {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 490px;
    width: 270px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
    border-radius: 0px 0px 5px 5px;
    margin: 19px 19px 0 0;



}
 

.shop__item {
    width: 270px;
    height: 270px;
    border-radius: 5px;
    font-family: 'Futura PT demi';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    background-image: url(../assets/category_items/ED.svg);
    background-repeat: no-repeat;
    background-position: center;
    color: #FFFFFF;
    margin: 0;
}

.wrapper {
    display: flex;
    justify-content: flex-start;
    width: 1150px;
    align-items: center;
}

.shop__title {
    margin-top: 6px;
    font-family: 'Futura PT book';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #979797;
}

.shop__name {
    max-width: 232px;
    font-family: 'Futura PT book';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
}

.shop__discr {
    font-family: 'Futura PT book';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #272727;
}

.shop__price {
    font-family: 'Futura PT book';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 24px;
    color: #272727;
    margin: 0 0 8px 0;
}


.btn-apply {
    cursor: pointer;
    Width: 212px;
    Height: 40px;
    border: 2px solid rgba(151, 151, 151, 0.3);
    border-radius: 24px;
    font-family: 'Futura PT book';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    mix-blend-mode: normal;
    background-color: #FFFFFF;
    margin-bottom: 24px;
}
</style>