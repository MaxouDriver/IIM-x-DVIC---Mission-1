<template> 
  <v-app light>
    <div class="container">
      <Drawer/>
      <router-view></router-view> 
    </div>
    <ActionDialog :dialog="dialog" :onClose="onClose"/>
    <v-btn
        dark
        fab
        top
        right
        color="pink"
        id="floating-action"
        v-on:click="openDialog()"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
  </v-app>
</template> 

<script> 
import Drawer from './components/Drawer.vue';
import ActionDialog from './components/dialogs/ActionDialog.vue';

  export default { 
    name: 'App',
    data: () => ({
      dialog: false,
    }),
    methods: {
        openDialog(){
            this.dialog = true;
        },
        onClose(){
          this.dialog = false;
        }
    },
    components: {
      Drawer, ActionDialog
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
#floating-action{
  margin: 2em;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
