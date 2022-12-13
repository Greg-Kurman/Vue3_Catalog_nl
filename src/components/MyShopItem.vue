<template>
        <div class="shop">
            <div class="shop__items" v-bind:style="{ 'background-image': `url(${product_data.image})` }">
                <div class="shop__item">
                    <div>
                        {{ product_data.name }}

                    </div>
                </div>
            </div>
        </div>
</template>
  
<script>
export default {
    name: 'MyNavigation',
    data() {
        return {
            image: null,
        }
    },
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    beforeMount() {
        this.image = this.product_data.image
    }

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

.shop__items {
    width: 270px;
    height: 150px;
    margin: 15px 15px 0 0;
    border-radius: 5px;
    font-family: 'Futura PT demi';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
}

.wrapper {
    display: flex;
    justify-content: flex-start;
    width: 1150px;
    align-items: center;
}
</style>