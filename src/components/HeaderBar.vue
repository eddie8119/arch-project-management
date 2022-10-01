<template>
  <div class="container-flex">
    <nav class="navbar navbar-light">
      <div class="dropdown d-xl-none d-lg-none mr-auto">        
        <div class="dropdown-menu hb" aria-labelledby="navd">
          <router-link class="dropdown-item" to="/">Home</router-link>          
        </div>
      </div>
      <span class="navbar-item bc d-none d-xl-block d-lg-block py-0">
        <router-link class="pl-5" to="/">Home</router-link>     
      </span>
      <div class="bag" @click="openCart">
          <img class="pb-1" src="@/assets/house.svg">
          <span class="mb-3" v-show="addProjectscount > 0">{{ addProjectscount }}</span>
      </div>
    </nav>
  </div>
   <!--Cart Component-->
   <!-- <Cart ref="cartMove" /> -->
</template>

<script>
// import Cart from '@/components/CartPage.vue'

export default {
  name: 'HeaderBar',
  components: {
    // Cart
  },
  computed: {
    addProjectscount() {
      return this.$store.getters.itemsNumber
    }
  },
  methods: {
    openCart() {
      this.$refs.cartMove.cartON()
    }
  }
}
</script>

<style>
nav {
  z-index:100;
}
.navbar {
  border-bottom: 1px solid #DCDCDC;
  background-color: #F8F8F8;
}
.bag span {
    background-color: #42b983;
    border-radius: 10px;
    color: white;
    position: absolute;
    font-size: 15px;
    line-height: 1;
    padding: 2px 3px 3px 3px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    margin-left: -9px;
    bottom: 1rem;
}
.bag img {
  cursor: pointer;
  width: 30px;
  height: auto;
}



.user:hover {
  text-decoration: underline;
}

</style>