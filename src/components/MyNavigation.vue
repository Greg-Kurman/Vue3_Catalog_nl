<template>
  <div class="nav">
    <div class="nav__wrapper wrapper">
      <div class="nav__image" @click="showModal"><img src="../assets/nav.png" alt=""></div>
      <div class="nav__city" @click="showModal">Новосибирск</div>
      <div class="nav__city" @click="pageClick">rjydsad</div>

      <MyModal v-show="isModalVisible" @close="closeModal" />
    </div>
  </div>
</template>

<script>

import MyModal from '../components/MyModal.vue'
import axios from 'axios'

export default {
  components: {
    MyModal,
  },
  name: 'MyNavigation',
  props: {
    users_data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    pageClick() {
      axios
      .get('https://nlstar.com/api/catalog3/v1/city/')
      .then(response => {
        this.info = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    
      console.log( ...this.info)
    },
  },

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
