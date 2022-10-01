<template>
  <div class="row">
    <div class="col-md-4 order-md-2 mb-4">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted">Your cart</span>
        <span class="badge badge-secondary badge-pill">3</span>
      </h4>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Product name</h6>
            <small class="text-muted">Brief description</small>
          </div>
          <span class="text-muted">$12</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Second product</h6>
            <small class="text-muted">Brief description</small>
          </div>
          <span class="text-muted">$8</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Third item</h6>
            <small class="text-muted">Brief description</small>
          </div>
          <span class="text-muted">$5</span>
        </li>
        <li class="list-group-item d-flex justify-content-between bg-light">
          <div class="text-success">
            <h6 class="my-0">Promo code</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span class="text-success">-$5</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$20</strong>
        </li>
      </ul>

      <form class="card p-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Promo code">
          <div class="input-group-append">
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </div>
      </form>
    </div>
    <div class="col-md-8 order-md-1">
      <h4 class="mb-3">Billing address</h4>
      <form class="needs-validation" novalidate>
        <div class="row">
          <div class="col-md-12 mb-3">
            <label for="firstName">項目名稱</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-3">
            <label for="firstName">數量</label>
            <input v-model="amount" type="text" class="form-control" id="firstName" required>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationTooltip02">單位選擇</label>
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option
                value=""
                selected
                disabled
              >
                --請選擇--
              </option>
              <option
                v-for="unitCollect in unitCollects"
                :key="unitCollect.id"
                :value="unitCollect.id"
              >
                {{ unitCollect.unit }}
              </option>
            </select>            
          </div>
          <div class="col-md-2 mb-3">
            <label for="addUnit">新增單位</label>
            <div class="input-group">
              <input type="text" class="form-control" v-model="unitInput">
              <div class="input-group-append">
                <a  class="btn btn-secondary" @click="addToUnit">新增</a>
              </div>
            </div>
          </div>
          <div class="col-md-2 mb-3">
            <label for="addUnit">單位誤增</label>
            <div class="input-group">
              <input type="text" class="form-control" v-model="removeUnit">
              <div class="input-group-append">
                <a  class="btn btn-secondary" @click="removeWrongUnit">移除</a>
                
              </div>
            </div>
          </div>          
          

        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="mb-3">
          <label for="username">單價</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">@</span>
            </div>
            <input type="text" class="form-control" id="username" required>
            <div class="invalid-feedback" style="width: 100%;">
              Your username is required.
            </div>
          </div>
        </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="firstName">總價</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="email">名 <span class="text-muted">(Optional)</span></label>
          <input type="email" class="form-control" id="email">
          <div class="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>
        <button @click="$router.back()" type="button" class="btn btn-link">返回上一頁</button>
        <button class="btn btn-primary" type="submit">確認儲存</button>
      </form>
    </div>
  </div>
</template>

<script>
  import {v4 as uuidv4} from 'uuid'
  
  const dummyData = {
    unitCollects:[
      {
        id: uuidv4(),
        unit:'cm'
      },
      {
        id: uuidv4(),
        unit:'m'
      },
      {
        id: uuidv4(),
        unit:'吋'
      },
    ]
  }  
  export default {
    name: 'EngineeringTodo',    
    data() {
      return {
        amount:0,
        unit:'',
        unitInput:'',
        removeUnit:'',
        unitCollects:[]
      }
    },

    created() {
      this.unitCollects = dummyData.unitCollects
    },

    methods: {      
      addToUnit() {        
        this.unitCollects.push({
          id: uuidv4(),
          unit:this.unitInput
        })
        this.unitInput = ''
      },
      removeWrongUnit() {       
        this.unitCollects = this.unitCollects.filter(
          unitCollects => unitCollects.unit !== this.removeUnit 
        )
        this.removeUnit = ''
      }
     
    }

  }

</script>