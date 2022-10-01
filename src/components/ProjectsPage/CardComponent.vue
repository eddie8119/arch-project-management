<template>
  <div>
    <transition-group name="fade" class="row" tag="div">
      <div v-for="project in CardArray" class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3" :key="project.id">
          <div class="card">
            <img class="card-img-top" :src="project.img" alt="Card image cap">
            <div class="overlay">
              <button v-if ="!project.addedCart" type="button" class="btn btn-outline-secondary btn-lg" @click="addtoCart(project)">暫存</button>
              <button v-else type="button" class="btn btn-secondary btn-lg" @click="removetoCart(project.id)">已存</button>
              <router-link :to="{name:'engineerings', params: {id: project.id}}"><button type="button" class="btn btn-outline-secondary btn-lg">計價</button></router-link>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">總報價 ${{ project.projectQuote }}</p>
            </div>
          </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['CardArray'], 

  methods: {
    addtoCart(item) {
     this.$store.commit('inCart', item)
    },
    removetoCart(item) {
     this.$store.commit('removeCart', item)
    },
    sendInfo(item) {
     this.$store.commit('addtoInfo', item)
    }
  }
}
</script>