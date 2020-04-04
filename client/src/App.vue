<template> 
  <v-app light>
    <div class="container">
      <Drawer/>
      <router-view></router-view> 
    </div>
  </v-app>
</template> 
d
<script> 
import Drawer from './components/Drawer.vue';
  export default { 
    name: 'App',
    components: {
      Drawer
    }
  }
</script>
<style scoped>
.container{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
