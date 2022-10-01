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
          <td>{{project.projectCost}}</td>
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
      engineerings:[],        
      searchInput:'',
      filterEngineers:[],
    };
  },
  created() {    
    const {id} = this.$route.params
    this.project = this.projects[id]
    this.engineerings = this.projects[id].engineerings
    // this.project.projectQuote = this.sumProjectQuote()
    this.project.projectCost = this.sumProjectCost()
  },   
  // mounted:{
  
  // },
  computed: {    
    ...mapState(['projects','engineeringTypes']), 

    sumProjectQuote(){  
      let sum = 0
      this.engineerings.forEach( engineering => 
        sum += engineering.quoteTotal
      )   
      return sum   
    },    
    
    sumGrossProfit(){  
      return this.sumQuoteTotal-this.sumCostTotal
    },
    sumGrossProfitMargin(){  
        let profitMargin = this.sumGrossProfit/this.sumQuoteTotal
        return profitMargin.toFixed(2)
    },
    engineeringsShowMode(){
      return this.filterEngineers.length === 0 ? this.engineerings : this.filterEngineers
    },
    //
    calcProfitTotal(){
      this.engineerings.forEach( 
        engineering => engineering.profitTotal = engineering.quoteTotal-engineering.costTotal
        )
        return this.engineerings
    },   
    calcProfitMarginTotal(){
      this.engineerings.forEach( 
        engineering => engineering.profitMarginTotal =  (engineering.profitTotal/engineering.quoteTotal).toFixed(2)
        )
        return this.engineerings
    },
  }, 
  methods:{ 
    ...mapMutations(['removeProjectEngineering']),
 
    sumProjectCost(){  
      let sum = 0
      this.engineerings.forEach( engineering => 
        sum += engineering.costTotal
      )
      return sum
    },    
    serchEngineer(e){
      e.preventDefault()
      const keywords = this.searchInput.trim()
      if (!keywords) {   
        this.filterEngineers = this.engineerings      
        return alert('您沒有輸入訊息')
      } 

      this.filterEngineers = this.engineerings.filter(
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
      let checkReapeat = this.engineerings.some(
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
      this.engineerings.push({
        id: uuidv4(),
        type:this.input.type,
        quoteTotal:this.input.quote,
        costTotal: this.input.cost 
      })
      //清空
      this.input.type ='',
      this.input.quote = 0,
      this.input.cost = 0
    },
    removeEngineering(engineeringID){
      this.engineerings = this.engineerings.filter(
        engineering => engineering.id !== engineeringID
      )      
      const {id} = this.$route.params
      this.removeProjectEngineering({id,engineeringID})
    }
  }   
  };
</script>
