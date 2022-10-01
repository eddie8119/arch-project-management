<template>
  <div class="container py-5">    
    <ProjectForm       
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import ProjectForm from "../components/ProjectForm.vue"

export default {
  name:'ProjectCreatNew',
  components: {
    ProjectForm,
  },
  data() {
    return {
      
      
    };
  },

};
</script>
