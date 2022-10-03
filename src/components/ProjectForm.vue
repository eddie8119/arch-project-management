<template>
  <button @click="$router.back()" type="button" class="btn btn-link">返回上一頁</button>     
 
  <form class="mt-5" @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">專案名稱</label>
      <input
        v-model="project.title"
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="輸入專案名稱"
        required
      >      
    </div>

    <div class="form-group">
      <label for="name">專案編號</label>
      <input
        v-model="project.id"
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="輸入專案編號"
        required
      >      
    </div>
    <div class="form-group">
      <label for="type">專案類型</label>
      <select
        v-model="project.type"
        id="type"
        type="text"
        class="form-control"
        name="type"
        required
      >
        <option
          value=""
          selected
          disabled
        >
          --請選擇--
        </option>
        <option
          v-for="typeCategory in typeCategories"
          :key="typeCategory.id"
          :value="typeCategory.type"
        >
          {{ typeCategory.type }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="address">專案地址</label>
      <input
        v-model="project.address"
        id="address"
        type="text"
        class="form-control"
        placeholder="輸入地址"
        name="address"
        required
      >
    </div>

    <div class="row">
      <div class="col-md-6 mb-3 form-group">
        <label class="control-label" for="opening-date">開工時間</label>
        <input 
          v-model="project.openingDate"
          class="form-control" 
          id="opening-date" 
          name="opening-date" 
          placeholder="MM/DD/YYY" 
          type="date"
          required
          />
      </div>
      <div class="col-md-6 mb-3 form-group">
        <label class="control-label" for="completion-date">完工時間</label>
        <input 
          v-model="project.completionDate"
          class="form-control" 
          id="completion-date" 
          name="completion-date" 
          placeholder="MM/DD/YYY" 
          type="date"          
          />
      </div>
    </div>

    <div class="form-group">
      <label for="note">備註</label>
      <textarea
        v-model="project.note"
        id="note"
        class="form-control"
        rows="2"
        name="note"
      />
    </div>

    <!-- <div class="form-group">
      <label for="img">照片</label>
      <img
        v-if="project.img"
        :src="project.img"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      >
      <input
        id="img"
        type="file"
        name="img"
        accept="img/*"
        class="form-control-file"
        @change="handleFileChange"
      >
    </div> -->

    <hr class="mt-5">

    <button
      type="submit"
      class="btn btn-primary"
    >
      送出
    </button>
  </form>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
// import { Toast } from '../utils/helpers'

export default {
  name:"ProjectForm",
  props: {
    // isProcessing: {
    //   type: Boolean,
    //   default: false,
    // },
    // initialRestaurant: {
    //   type: Object,
    //   default: () => ({      
    //     name: "",
    //     categoryId: "",
    //     tel: "",
    //     address: "",
    //     note: "",
    //     img: "",
    //     openingHours: "", 
    //   })  
    // },
  },
  data() {
    return {
      project:{
        default: () => ({
          id:-1,
          title: '',
          addedCart:false,
          img:'',
          type: '',
          openingDate: '',
          completionDate: '', 
          address:'',
          note: '',
          projectQuote:0,
          projectCost: 0,
          projectProfit: 0,
          projectProfitMargin: 0,
          engineerings:[]
        })
      }      
    }
  },
  computed: {
    ...mapState(['projects','typeCategories'])
  },
  methods: {
    ...mapMutations(['addProject']),
    handleSubmit(e){
      e.preventDefault()
      if (!this.project.title.trim()){
        // Toast.fire({
        //   icon: 'warning',
        //   title: '專案名稱'
        // })
        return
      }
      this.projects.push({
        id:this.project.id,
        addedCart:false,
        img:require('@/assets/1.jpg'),
        title:this.project.title,
        type:this.project.type,
        openingDate:this.project.openingDate,
        completionDate:this.project.completionDate, 
        address:this.project.address,
        note:this.project.note,
        projectQuote:0,
        projectCost: 0,
        projectProfit: 0,
        projectProfitMargin: 0, 
        engineerings:[],
      })
      this.$router.push('/')
    }
  }
};
</script>
