<template>
  <div class="container py-5">    
    <h1 style="font-weight:bold; text-align: center;">{{project.title}}</h1>
    <h5 style="font-weight:bold; text-align: center;">發包廠商</h5>    
    
    <button @click="$router.back()" type="button" class="btn btn-link">返回上一頁</button>     
 
     <!--新增欄-->
    <table class="table table-hover mt-5" style=" overflow : hidden; border-radius : 5px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);">
      <tbody>
        <tr>
          <td>
            <div class="input-field">
              <label for="type">工種</label>                        
              <select name="type" id="type" v-model="input.type">
                <option
                  value=''
                  selected
                  disabled
                >
                  --請選擇--
                </option>
                <option 
                  v-for="engineeringType in engineeringTypes"
                  :key="engineeringType.id" 
                  :value="engineeringType.type" 
                  >
                  {{engineeringType.type}}
                </option>
              </select>
            </div>
          </td>
          <td>
            <div class="input-field">
              <label for="quote">報價</label>
              <input v-model="input.quote" placeholder="輸入" id="quote" type="text"> 
            </div>
          </td>
          <td>
            <div class="input-field">
              <label for="title">成本</label>
              <input v-model="input.cost" placeholder="輸入"  id="cost" type="text"> 
            </div>
          </td>
          <td>
            <a class="btn btn-primary" href="#!" @click="addEngineering">新增</a>            
          </td>          
        </tr>
      </tbody>
    </table>

    <div class="form-group mt-5">
       <input v-model="searchInput" @keyup.enter="serchEngineer" type="text" name="search"  placeholder="工種查詢" class="form-control">
    </div> 
    
    <!--主欄-->    
    <table class="table table-hover" style=" overflow : hidden; border-radius : 5px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);">
      <thead >
        <tr style="color : white; font-weight : bold; background: #060411 "> 
          <td>序號</td>
          <td>工種</td>            
          <td>總報價</td>
          <td>總成本</td>          
          <td>淨利</td>
          <td>毛利率</td>              
          <td>動作</td>
        </tr>                 
      </thead>
      <tbody>
        <tr v-for="(engineering, index ) in engineeringsShowMode" :key="engineering.id">     
          <td>{{index}}</td>       
          <td>{{engineering.type}}</td>
          <td>{{engineering.quoteTotal}}</td>
          <td>{{engineering.costTotal}}</td>
          <td>{{engineering.profitTotal}}</td>
          <td>{{engineering.profitMarginTotal}}</td>
          <td>      
            <router-link :to="{name: 'engineering-todo', params:{id: engineering.id}}" class="btn btn-outline-primary">明細</router-link>
            <a href="#!" class="btn btn-outline-danger" @click.stop.prevent="removeEngineering(engineering.id)">移除</a>
          </td>
        </tr>
      </tbody>
    </table>
    
    <!--加總-->  
    <h5 style="font-weight:bold; text-align: center;" class="mt-5">總計</h5>  
    <table class="table table-hover" style=" overflow : hidden; border-radius : 5px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);">
      <thead >
        <tr style="color : white; font-weight : bold; background: #060411 "> 
          <td>總報價</td>
          <td>總成本</td>          
          <td>淨利</td>
          <td>毛利率</td>  
        </tr>                 
      </thead>
      <tbody>
        <tr>
          <td>{{sumProjectQuote}}</td>
          <td>{{sumProjectCost}}</td>
          <td>{{sumGrossProfit}}</td>
          <td>{{sumGrossProfitMargin}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>  
  import {v4 as uuidv4} from 'uuid'
  import {mapState, mapMutations} from 'vuex'

  export default {
  name: 'EngineeringsOverview',     
  data() {
    return {        
      project: [],
      input: {
        type:'',
        quote:0,
        cost: 0,
      },       
      searchInput:'',
      filterEngineers:[],
    };
  },
  created(){    
    const {id} = this.$route.params
    this.project = this.projects[id]
    this.test()
    this.calcProfitTotal()
    this.calcProfitMarginTotal()
    console.log(typeof(this.project.projectQuote))
    
    // this.engineerings = this.projects[id].engineerings
  },   
  // mounted:{
    
  // },
  // updated:{
  //   console.log(123)
  //   // this.sumProjectQuote()
  // },
  watch:{
    project:{
      handler(){
        //總計區的運算
        this.project.projectQuote = 0
        let sumquoteTotal = 0
        this.project.engineerings.forEach( engineering => 
          sumquoteTotal += engineering.quoteTotal
        )  
        this.project.projectQuote = sumquoteTotal

        let sumcostTotal = 0
        this.project.engineerings.forEach( engineering => 
          sumcostTotal += engineering.costTotal
        )
        this.project.projectCost = sumcostTotal 
        console.log(typeof(this.project.projectQuote))
        //新增工總 淨利 毛利率觸發
        this.project.engineerings = this.calcProfitTotal()
        this.project.engineerings = this.calcProfitMarginTotal()
    },   
    deep: true
    }
  },
  computed: {    
    ...mapState(['projects','engineeringTypes']), 

    //總計區的運算
    sumProjectQuote:{ 
      get(){
        let sum = 0
        this.project.engineerings.forEach( engineering => 
          sum += engineering.quoteTotal
        )   
        // this.project.projectQuote = sum   
        return sum
      },
      // set(newVal){
      //   this.project.projectQuote = newVal
      // } 
    },
    sumProjectCost(){  
      let sum = 0
      this.project.engineerings.forEach( engineering => 
        sum += engineering.costTotal
      )
      return sum
    },    
    sumGrossProfit(){  
      return this.sumProjectQuote-this.sumProjectCost
    },
    sumGrossProfitMargin(){         
        return (this.sumGrossProfit/this.sumProjectCost).toFixed(2)
    },

    engineeringsShowMode(){
      return this.filterEngineers.length === 0 ? this.project.engineerings : this.filterEngineers
    },

  }, 
  methods:{ 
    ...mapMutations(['removeProjectEngineering']),

    test(){
    
    },
    //單獨工總計算區
    calcProfitTotal(){
      this.project.engineerings.forEach( 
        engineering => engineering.profitTotal = engineering.quoteTotal-engineering.costTotal
      )
      return this.project.engineerings
    },
    calcProfitMarginTotal(){
      this.project.engineerings.forEach( 
        engineering => engineering.profitMarginTotal =  (engineering.profitTotal/engineering.quoteTotal).toFixed(2)
      )
      return this.project.engineerings
    },

    serchEngineer(e){
      e.preventDefault()
      const keywords = this.searchInput.trim()
      if (!keywords) {   
        this.filterEngineers = this.project.engineerings      
        return alert('您沒有輸入訊息')
      } 

      this.filterEngineers = this.project.engineerings.filter(
        engineering => engineering.type.includes(keywords)
      )

      if(this.filterEngineers.length === 0) {
        alert(`您輸入關鍵字：${keywords}沒有結果`)
      }
      this.searchInput = ''
    },
    addEngineering(e){
      e.preventDefault()
      const inputType = this.input.type 
      if(!inputType){
        alert("未選擇工種")
        return
      }
      let checkReapeat = this.project.engineerings.some(
        engineering => engineering.type === inputType
      )
      if(checkReapeat){
        alert("此工種已在下列清單")
        return
      }        
      if(this.input.quote === 0){
        alert("未輸入報價金額")
        return
      }        
      this.project.engineerings.push({
        id: uuidv4(),
        type:this.input.type,
        quoteTotal: Number(this.input.quote),
        costTotal: Number(this.input.cost)
      })
      //清空
      this.input.type ='',
      this.input.quote = 0,
      this.input.cost = 0
    },
    removeEngineering(engineeringID){
      this.project.engineerings = this.project.engineerings.filter(
        engineering => engineering.id !== engineeringID
      )      
    }
  }   
  };
</script>
