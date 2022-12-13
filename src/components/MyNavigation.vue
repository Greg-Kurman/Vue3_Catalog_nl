<template>
  <div class="nav">
    <div class="nav__wrapper wrapper">
      <div class="nav__image" @click="showModal"><img src="../assets/nav.png" alt=""></div>
      <div class="nav__city" @click="showModal">{{city}}</div>

      <MyModal v-show="isModalVisible" @close="closeModal" @submit="submit" />
    </div>
  </div>
</template>

<script>

import MyModal from '../components/MyModal.vue'

export default {
  components: {
    MyModal,
  },
  name: 'MyNavigation',
  props: {
      cityP: String
    },
  
  data() {
    return {
      isModalVisible: false,
      infoCity: [],
      term: null,
      city: 'Новосибирск',
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
      console.log('show')
    },
    closeModal() {
      this.isModalVisible = false;
    },
    submit(city){
      this.city = Object.values(city).join().toString()
    }

  },
  mounted() {
     
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.wrapper {
  display: flex;
  justify-content: flex-start;
  width: 1150px;
  align-items: center;
}

.nav__wrapper {
  height: 75px;
}

.nav__image {
  cursor: pointer;
  padding: 0 8px 0 0;
}

.nav__city {
  cursor: pointer;
  font-family: 'Futura PT demi';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #272727;
}

.nav {
  display: flex;
  justify-content: center;
  max-width: 1920px;
  height: 72px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(39, 39, 39, 0.1);

}
</style>
