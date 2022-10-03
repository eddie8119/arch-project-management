<template>
  <div class="container grid">
    <!--搜尋-->
    <div class="form-group mt-5">
       <input v-model="searchInput" @keyup.enter="serchProjectTitle" type="text" name="search"  placeholder="專案關鍵字查詢" class="form-control">
    </div>
    <router-link
      to="/projects/new"
      class="btn btn-secondary mb-4"
    >
      建立專案
    </router-link>
    <div class="row justify-content-around">
      <div class="row col-6 col-md-3 col-sm-6 ">
        <div class="view-button">
          <div class="dropdown">
            <button class="btn btn-light dropdown-toggle d-block d-lg-none d-xl-none" role="button" id="MenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <span style="color:#f2be00;">專案類型</span>
            </button>
            <div class="dropdown-menu" aria-labelledby="MenuLink">
              <a class="dropdown-item" @click="sortI('豪宅')">豪宅規劃</a>
              <a class="dropdown-item" @click="sortI('住宅')">住宅規劃</a>
              <a class="dropdown-item" @click="sortI('店面')">店面規劃</a>
              <a class="dropdown-item" @click="sortI('辦公室')">辦公室規劃</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" @click="reSet">Reset</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-xl-3 col-lg-3 d-none d-lg-block d-xl-block">
          <div class="card-selector">
            <div class="card-body p-5">
              <div class="search-title">
                <h4>專案類型</h4>
                <br>
                <h6 @click="sortI('豪宅')">豪宅規劃</h6>
                <h6 @click="sortI('住宅')">住宅規劃</h6>
                <h6 @click="sortI('店面')">店面規劃</h6>
                <h6 @click="sortI('辦公室')">辦公室規劃</h6>
                <br><br><br>
                <!-- <h4 class="search-title">快速篩選</h4>
                <br>
                <h5>總價範圍</h5>
                <Slider @clicked="valueSlider"/> -->
              </div>
            </div>
          </div>
        </div>
        <div class="row col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 text-center">
          <div v-if="this.cards == 0" class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4 style="margin-left:9rem;margin-right:9rem">
              目前沒有相關專案內容</h4>
          </div>
            <Card v-if="findKeyCards.length !==0" :CardArray="findKeyCards" />
            <Card v-else :CardArray="slicedCards" />
          <div class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 py-5">
            <button v-show="slicedCards.length < cards.length" type="button" @click="incCardNumber" class="btn btn-outline-secondary btn-lg btn-block">顯示更多專案 +</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Slider from '../components/ProjectsPage/SlideR.vue'
import Card from '../components/ProjectsPage/CardComponent.vue'

export default {
  name:'ProjectsOverview',
  components: {
    // Slider, 
    Card
  },
  data() {
    return {
      cards: [],
      showCards: 6,
      sortButton: 'Por',
      searchInput:'',
      findKeyCards:[]
    }
  },  
  created(){
    this.cards = this.it    
  },
  computed: {
    it(){
      return this.$store.state.projects
    },
    slicedCards(){
      return this.cards.slice(0, this.showCards)
    }
  },
  methods: {
    serchProjectTitle(e){
      e.preventDefault()
      const keywords = this.searchInput.trim()
      if (!keywords) {                 
        return alert('您沒有輸入訊息')
      }   

      this.findKeyCards = this.it.filter(
        card => card.title.includes(keywords)
      )

      if(this.findKeyCards.length === 0){
        alert(`您輸入關鍵字：${keywords}沒有結果`)
      }
      this.searchInput = ''
    },
    incCardNumber() {
      return this.showCards += 6
    },
    // valueSlider(value) {
    //   var x = value[0];
    //   var y = value[1];
    //   this.cards = this.it.filter((e)=> x < e.price && e.price < y)
    // },
    // sortDate() {
    //    this.cards.sort((a, b) => (a.title.length * 2)-(b.title.length * 4))
    //    return this.sortButton = '專案名稱'
    // },
    // sortPrice() {
    //    this.cards.sort((a, b) => a.quote-b.quote)
    //    return this.sortButton = '報價'
    // },  
    sortI(name){
      this.findKeyCards =[]
      this.cards = this.it.filter( e => e.type.match(name))    
      return this.sortButton = name  
    },
    reSet() {
      return this.cards = this.it
    }
  }
  }
</script>

<style>
  .container.grid {
    min-height: 60rem;
  }
  .container.grid a {
    cursor: pointer !important;
  }
  .btn-light {
    color: black !important;
    background: white;
    border-radius: 0 !important;
    border: 1px solid grey !important;
  }
  .dropdown-menu{
    background-color: #eee;
    color: #2c3539;
  }
  .dropdown-menu > a:hover{
    background-color: #dae0e5
  }
  .btn-outline-secondary {
    border-radius: 0 !important;
  }
  /*search options*/
  .card-selector {
    color: #DCDCDC;
    height: 40rem;
    background: #2c3539 !important;
    /* box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69); */
  }
  .search-title h6 {
    cursor: pointer;
  }
  .circle {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    border: 0.7px solid #2c3539;
    display: inline-block;
    margin-left: 6px;
    cursor:pointer
  }
  </style>



