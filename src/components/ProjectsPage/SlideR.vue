<template>
  <form>
    <div  @click="getValue('sli')" class="form-group">      
      <input ref="sli" v-model="value" v-bind="options" type="range" class="form-control-range" id="formControlRange">
    </div>
    
  </form>
</template>

<script> 
  export default {
    name: 'slideR', 
    data() {
      return {
        value: [
          1000,
          10000
        ],
        options: {

  
        tooltip: "hover",
        formatter: (v) => `$${v}`,
        mergeFormatter: (v1, v2) => `$${v1} ~ $${v2}`,
        processStyle: {
          "backgroundColor": "#999"
        }}
      }
    },
    methods: {
      getValue(name) {
        let slider = this.$refs[name]
        this.$emit('clicked', slider.getValue())
      }
    }
  }
  </script>