<template>
  <div class="container py-5">    
    <h1 style="font-weight:bold; text-align: center;">{{projectTitle}}</h1>
    <h5 style="font-weight:bold; text-align: center;">工種: {{engineeringType}}</h5>

    <button @click="$router.back()" type="button" class="btn btn-link">返回上一頁</button>     
   
    <!--新增欄-->
    <table class="table table-hover mt-5" style=" overflow : hidden; border-radius : 5px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);">
      <tbody>
        <tr>
          <td colspan="2">
            <div class="input-field">
              <label for="title">工種</label>
              <input v-model="input.title" placeholder="輸入" ref="title"  id="title" type="text"> 
            </div>
          </td>
          <td>
            <div class="input-field">
              <label for="quote">報價</label>
              <input v-model="input.quote" placeholder="輸入" ref="quote"  id="quote" type="text"> 
            </div>
          </td>
          <td>
            <div class="input-field">
              <label for="title">成本</label>
              <input v-model="input.cost" placeholder="輸入" ref="cost"  id="cost" type="text"> 
            </div>
          </td>
          <td>
            <a class="btn btn-primary" href="#!" @click="addEngineeringTodo">新增</a>            
          </td>          
        </tr>
      </tbody>
    </table>

    <!--搜尋-->
    <div class="form-group mt-5">
       <input v-model="searchInput" @keyup.enter="serchEngineerTitle" type="text" name="search"  placeholder="施作項目查詢" class="form-control">
    </div>    

    <!--主欄-->    
    <table class="table table-hover" style=" overflow : hidden; border-radius : 5px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);">
      <thead >
        <tr style="color : white; font-weight : bold; background: #060411 "> 
          <td>序號</td>
          <td>項目</td>            
          <td>總報價</td>
          <td>總成本</td>
          <td>淨利</td>            
          <td>動作</td>
        </tr>                 
      </thead>
      <tbody>
        <tr v-for="(engineeringTodo, index ) in engineeringTodosShowMode" :key="engineeringTodo.id">     
          <td>{{ index }}</td>       
          <td>{{ engineeringTodo.title }}</td>
          <td>{{ engineeringTodo.quote }}</td>
          <td>{{ engineeringTodo.cost }}</td>
          <td>{{ engineeringTodo.quote-engineeringTodo.cost }}</td>          
          <td>      
            <router-link :to="{name: 'edit-engineeringTodo-dashboard', params: { id: engineeringTodo.id }}" class="btn btn-outline-primary" @click="editTodo(engineeringTodo.id)">編輯細節</router-link>
            <a href="#!" class="btn btn-outline-danger"  @click.stop.prevent="temporaryRemoveTodo(index)">暫放移除</a>            
          </td>
        </tr>
      </tbody>
    </table>

    <!--待命刪除欄-->    
    <h3 v-show="willRemoveEngineeringTodos.length" style="font-weight:bold; text-align: center;" class="mt-5">暫放刪除區</h3>
    <table  v-show="willRemoveEngineeringTodos.length !== 0" class="table table-hover" style=" overflow : hidden; border-radius : 5px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);">
      <thead >
        <tr style="color : white; font-weight : bold; background: #060411 "> 
          <td>序號</td>
          <td>項目</td>            
          <td>總報價</td>                   
          <td>動作</td>
        </tr>                 
      </thead>
      <tbody>
        <tr v-for="(willRemoveEngineeringTodo, index ) in willRemoveEngineeringTodos" :key="willRemoveEngineeringTodo.id">     
          <td>{{ index }}</td>       
          <td>{{ willRemoveEngineeringTodo.title }}</td>          
          <td>{{ willRemoveEngineeringTodo.cost }}</td>                   
          <td>      
            <a href="#!" class="btn btn-outline-primary" @click.stop.prevent="recoveryEngineeringTodos(index)">復原</a>
            <a href="#!" class="btn btn-outline-danger" @click.stop.prevent="confirmRemoveTodo(willRemoveEngineeringTodo.id)">確認移除</a>            
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
  import {v4 as uuidv4} from 'uuid'
  import {mapState} from 'vuex'
  // import {Toast} from "../utils/helpers"
  
  const dummyData = {
    title:'林口陳宅豪宅規劃案',
    type:'木工',
    engineeringTodos: [{
        id: uuidv4(),
        title:'door門扇',
        quote:35000,
        cost: 30000,
        profit: 0,
        profitMargin: 0,
        amount:0,
        unit:"",
        unitPrice:0
      },
      {
        id: uuidv4(),
        title:'floor木地板',
        quote:35000,
        cost: 30000,
        profit: 0,
        profitMargin: 0,
        amount:0,
        unit:"",
        unitPrice:0,            
      }]
  }
  export default {
    name: 'eachFactoryTodo',
    // mixins:[enteTwoDecimalFilter],  
    data() {
      return {        
        input: {        
          title:'',
          quote:0,
          cost: 0,
        }, 
        engineering:[],
        projectTitle:'',
        engineeringType:'',
        engineeringTodos: [],
        searchInput:'',
        filterEngineerTitles:[],
        willRemoveEngineeringTodos:[],
      };
    },

    computed: {
      ...mapState(['projects']),

      engineeringTodosShowMode() {
        return this.filterEngineerTitles.length === 0 ? this.engineeringTodos : this.filterEngineerTitles
      }
    },  

    created() {
      // const {id} = this.$route.params
      this.findtodo()
      this.projectTitle = dummyData.title,
      this.engineeringType = dummyData.type,
      this.engineeringTodos = dummyData.engineeringTodos      
    },

    methods: {
      findtodo(){
        let engineeringsArry = []      
        this.projects.forEach(
          project => engineeringsArry.push(project.engineerings)
        )
        // console.log(engineeringsArry)
        engineeringsArry.forEach(
          engineering => console.log(engineering) 
        )
        
        // console.log(engineeringsArry)
        // this.engineering = engineeringsArry.filter(
        //   engineering => engineering.id === engineeringID
        // )
      },
      addEngineeringTodo(e){
        e.preventDefault()
        const titleText =  this.input.title||this.input.title.trim()
        if(!titleText){
          alert("未輸入施作項目")
          return
        }
        if(this.input.quote === 0) {
          alert("未輸入報價金額")
          return
        }
        this.engineeringTodos.push({
          id: uuidv4(),
          title:this.input.title,
          quote:this.input.quote,
          cost: this.input.cost   
        })
        //清空
        this.input.title ='',
        this.input.quote = 0,
        this.input.cost = 0
      },
      serchEngineerTitle(e){
        e.preventDefault()
        const keywords = this.searchInput.trim()
        if (!keywords) {   
          this.filterEngineerTitles = this.engineeringTodos      
          return alert('您沒有輸入訊息')
        }   

        this.filterEngineerTitles = this.engineeringTodos.filter(
          engineeringTodo => engineeringTodo.title.includes(keywords)
        )

        if(this.filterEngineerTitles.length === 0) {
          alert(`您輸入關鍵字：${keywords}沒有結果`)
        }
        this.searchInput = ''
      },
      temporaryRemoveTodo(index) {
        this.willRemoveEngineeringTodos.push(this.engineeringTodos[index])
        this.engineeringTodos.splice(index, 1)
        // this.willRemoveEngineeringTodos.sort(ordonner);
      },
      recoveryEngineeringTodos(index){
        this.engineeringTodos.push(this.willRemoveEngineeringTodos[index])
        this.willRemoveEngineeringTodos.splice(index,1)
      },
      confirmRemoveTodo(engineeringTodoID) {
        this.willRemoveEngineeringTodos = this.willRemoveEngineeringTodos.filter(
          item => item.id === engineeringTodoID
        )
      },
    },
  };
  </script>
  