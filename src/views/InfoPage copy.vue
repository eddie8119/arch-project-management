<template >
  <div class="container py-5" style="padding-top:70px;">

    <InfoBreadcrumb :information="information"/>
    <InfoBox :information="information"/>
    <InfoText />

    <div >
      <hr>
      <h6 class="pb-4">PRODUCTOS RELACIONADOS</h6>
      <CarD/>
    </div>

  </div>
</template>

<script>
import InfoBreadcrumb from '@/Components/InfoPage/InfoBreadcrumb.vue'
import InfoBox from '@/Components/InfoPage/InfoBox.vue'
import InfoText from '@/Components/InfoPage/InfoText.vue'
import CarD from '@/Components/ProductsPage/CarD.vue'


export default {
  name:'InfoPage',
  components: {
    InfoBreadcrumb, InfoBox, InfoText, CarD
  },
  data() {
    return {
      information: [],
      relatedItems: []
    }
  },
  created(){
    this.information = this.infO
    this.relatedItems = this.bringItems
    },
  computed: {
    infO() {
      return this.$store.getters.infoLength
    },
    bringItems() {
      return this.$store.state.items
    },
    sliceRelatedItems(){
      return this.relatedItems.slice(0 ,3)
    }
  },
  methods: {
    sendInfo(it, id) {
     this.$store.commit('addtoInfo', it, id)
    }
  }
}
</script>

<style scoped>
hr {
width: 50px;
border-bottom: 1px solid black;
}
.related-item{
  padding-left: 8rem;
  padding-right: 8rem;
  height: auto;
  text-align: center;
}
</style>