import { createStore } from 'vuex'
import {v4 as uuidv4} from 'uuid'

export default createStore({
  state: {
    infoPage:[],
    cartProjects:[],
    projects: [
      {
        id:0,
        addedCart:false,
        title: '林口陳宅豪宅規劃案',
        img: require('@/assets/1.jpg'),
        type: '豪宅規劃',
        openingDate: '',
        completionDate: '',
        address:'',
        note: '',
        projectQuote:0,
        projectCost: 0,
        projectProfit: 0,
        projectProfitMargin: 0, 
        engineerings:[
          {   
            id: uuidv4(), 
            type:'木工',
            quoteTotal:70000,
            costTotal: 60000,
            profitTotal: 0,
            profitMarginTotal: 0,
            todos:[
              {
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
              }
            ],
          },
          { 
            id: uuidv4(), 
            type:'鐵工',
            quoteTotal:70000,
            costTotal: 60000,
            profitTotal: 0,
            profitMarginTotal: 0,
            todos:[
              {
                id: uuidv4(),
                title:'防火門',
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
                title:'踢腳不鏽鋼',
                quote:35000,
                cost: 30000,
                profit: 0,
                profitMargin: 0,
                amount:0,
                unit:"",
                unitPrice:0,            
              }
            ],
          },
        ],
      },
      {
        id:1,
        addedCart:false,
        img: require('@/assets/1.jpg'),
        title: '淡水卓宅甲山林規劃案',
        type: '豪宅規劃',
        openingDate: '',
        completionDate: '',
        address:'',
        note: '',
        projectQuote:0,
        projectCost: 0,
        projectProfit: 0,
        projectProfitMargin: 0, 
        engineerings:[
          {   
            id: uuidv4(), 
            type:'木工',
            quoteTotal:70000,
            costTotal: 60000,
            profitTotal: 0,
            profitMarginTotal: 0,
            todos:[
              {
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
              }
            ],
          },
          { 
            id: uuidv4(), 
            type:'鐵工',
            quoteTotal:70000,
            costTotal: 60000,
            profitTotal: 0,
            profitMarginTotal: 0,
            todos:[
              {
                id: uuidv4(),
                title:'防火門',
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
                title:'踢腳不鏽鋼',
                quote:35000,
                cost: 30000,
                profit: 0,
                profitMargin: 0,
                amount:0,
                unit:"",
                unitPrice:0,            
              }
            ],
          },
        ],
      },
      {
        id:2,
        addedCart:false,
        img: require('@/assets/1.jpg'),
        title: '信義林先生住宅規劃案',
        type: '豪宅規劃',
        openingDate: '',
        completionDate: '',
        address:'',
        note: '',
        projectQuote:0,
        projectCost: 0,
        projectProfit: 0,
        projectProfitMargin: 0, 
        engineerings:[
          {   
            id: uuidv4(), 
            type:'木工',
            quoteTotal:70000,
            costTotal: 60000,
            profitTotal: 0,
            profitMarginTotal: 0,
            todos:[
              {
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
              }
            ],
          },
          { 
            id: uuidv4(), 
            type:'鐵工',
            quoteTotal:70000,
            costTotal: 60000,
            profitTotal: 0,
            profitMarginTotal: 0,
            todos:[
              {
                id: uuidv4(),
                title:'防火門',
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
                title:'踢腳不鏽鋼',
                quote:35000,
                cost: 30000,
                profit: 0,
                profitMargin: 0,
                amount:0,
                unit:"",
                unitPrice:0,            
              }
            ],
          },
        ],
      },
      {
        id:3,
        addedCart:false,
        img: require('@/assets/1.jpg'),
        title: '東區奇威旗艦店設計案',
        quote:3500,
        cost: 3000,
        profit: 0,
        profitMargin: 0, 
        type: '店面規劃',
        date:''
      },
      {
        id:4,
        addedCart:false,
        img: require('@/assets/1.jpg'),
        title: '內湖匠喝飲料店規畫案',
        quote:3500,
        cost: 3000,
        profit: 0,
        profitMargin: 0, 
        type: '店面規劃',
        date:''
      },
      {
        id:5,
        addedCart:false,
        img: require('@/assets/1.jpg'),
        title: '南京幸運咖啡連鎖設計案',
        quote:3500,
        cost: 3000,
        profit: 0,
        profitMargin: 0, 
        type: '店面規劃',
        date:''
      },
      {
        id:6,
        addedCart:false,
        img: require('@/assets/1.jpg'),
        title: '匠喝民生店規劃',
        quote:3500,
        cost: 3000,
        profit: 0,
        profitMargin: 0, 
        type: '店面規劃',
        date:''
      },
      {
        id:7,
        addedCart:false,
        img: require('@/assets/1.jpg'),
        title: '101商場Ipilot設計案',
        quote:3500,
        cost: 3000,
        profit: 0,
        profitMargin: 0, 
        type: '店面規劃',
        date:''
      },
      {
        id:8,
        addedCart:false,
        img: require('@/assets/1.jpg'),
        title: '劍潭黃宅小坪數規劃案',
        quote:3500,
        cost: 3000,
        profit: 0,
        profitMargin: 0, 
        type: '住宅規劃',
        date:''
      },
      {
        id:9,
        addedCart:false,
        img: require('@/assets/1.jpg'),
        title: '木柵方宅小坪數規劃',
        quote:3500,
        cost: 3000,
        profit: 0,
        profitMargin: 0, 
        type: '住宅規劃',
        date:''
      },
      {
        id:10,
        addedCart:false,
        img: require('@/assets/1.jpg'),
        title: '新店麒源建設辦公室規劃',
        quote:3500,
        cost: 3000,
        profit: 0,
        profitMargin: 0, 
        type: '辦公室規劃',
        date:''
      },
      {
        id:11,
        addedCart:false,
        img: require('@/assets/1.jpg'),
        title: '信義森業永春樓中樓規劃',
        quote:3500,
        cost: 3000,
        profit: 0,
        profitMargin: 0, 
        type: '住宅規劃',
        date:''
      },
      {
        id:12,
        addedCart:false,
        img: require('@/assets/1.jpg'),
        title: '陽明山李宅戶外庭院規劃',
        quote:3500,
        cost: 3000,
        profit: 0,
        profitMargin: 0, 
        type: '住宅規劃',
        date:''
      },
      {
        id:13,
        addedCart:false,
        img: require('@/assets/1.jpg'),
        title: '內湖王宅設計規劃案',
        quote:3500,
        cost: 3000,
        profit: 0,
        profitMargin: 0, 
        type: '住宅規劃',
        date:''
      },
      {
        id:14,
        addedCart:false,
        img: require('@/assets/1.jpg'),
        title: '中友百貨sloggi內衣專櫃設計',
        quote:3500,
        cost: 3000,
        profit: 0,
        profitMargin: 0, 
        type: '店面規劃',
        date:''
      },      
    ],
    typeCategories:[
      {
        id: uuidv4(),
        type:'豪宅規劃'
      },
      {
        id: uuidv4(),
        type:'住宅規劃'
      },
      {
        id: uuidv4(),
        type:'店面規劃'
      },
      {
        id: uuidv4(),
        type:'辦公室規劃'
      }, 
    ],
    engineeringTypes:[
      {
        id: uuidv4(),
        type:'木工'
      },
      {
        id: uuidv4(),
        type:'鐵工'
      },
      {
        id: uuidv4(),
        type:'油漆'
      },
      {
        id: uuidv4(),
        type:'輕隔間'
      },
      {
        id: uuidv4(),
        type:'泥做'
      },
      {
        id: uuidv4(),
        type:'玻璃工'
      },
      {
        id: uuidv4(),
        type:'水電'
      },
    ]

  },
  getters: {
    itemsNumber(state){
      return state.cartProjects.length
    },
    infoLength(state) { 
      if(state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    },
    // setProjectQuote(state){
    //   let sum =0
    //   state.projects.forEach(        
    //     project => project.engineerings.forEach(          
    //       engineering =>           
    //       sum += engineering.quoteTotal
    //     )        
    //   )
    //   return sum
    // }
  },
  mutations: {    
    inCart(state, payload){ 
      state.cartProjects = {
        ...state.cartProjects,
        ...payload
      }
      payload.addedCart = !payload.addedCart
      state.cartProjects.push(payload)  
    },
    removeCart(state, n){  
      let index = state.cartProjects.findIndex( item => item.id === n)       
      return state.cartProjects.splice(index, 1)  
    },
    addProject(state, payload){
      state.projects.push(payload)
    },
  

    // setProjects (state, projects[index]) {
    //   state.projects[index] = {
    //     ...state.projects,       
    //     addedCart = true
    //   }
    //   // 將使用者的登入狀態改為 true
      
    // }

  },
  actions: {
  },
  modules: {
  }
})
