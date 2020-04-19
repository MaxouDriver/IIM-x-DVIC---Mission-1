<template> 
  <div>
    <v-dialog
          v-model="dialog"
          class="action-dialog"
          v-on:blur="onClose()"
          width="400"
          hide-overlay
          transition="dialog-bottom-transition"
          scrollable
        >
          <v-card tile>
            <v-toolbar
              flat
              dark
              color="primary"
            >
              <v-btn
                icon
                dark
                @click="onClose()"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Choose something to do</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <div class="my-2">
                <v-btn class="button-fullwidth" x-large color="success" v-on:click="openDialogCreateClient()" dark>Create client</v-btn>
              </div>
              <div class="my-2">
                <v-btn class="button-fullwidth" x-large color="success" v-on:click="openDialogCreateProject()" dark>Create project</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-dialog>
        <AddProject :dialog="dialogCreateProject" :onClose="onCloseCreateProject"/>
        <AddClient :dialog="dialogCreateClient" :onClose="onCloseCreateClient"/>
  </div>
</template> 

<script> 
import AddProject from './AddProject.vue';
import AddClient from './AddClient.vue';

  export default { 
    name: 'ActionDialog',
    components: {
      AddProject, AddClient
    },
    data: () => ({
      dialogCreateClient: false,
      dialogCreateProject: false,
    }),
    methods: {
        openDialogCreateClient(){
            this.dialogCreateClient = true;
        },
        onCloseCreateClient(){
          this.dialogCreateClient = false;
            this.onClose();
        },
        openDialogCreateProject(){
            this.dialogCreateProject = true;
        },
        onCloseCreateProject(){
          this.dialogCreateProject = false;
          this.onClose();
        }
    },
    props:{
      dialog: Boolean,
      onClose: Function
    }
  }
</script>
<style>
.table{
  width: 100%;
}
.button-fullwidth{
  width: 100%;
}
.action-dialog {
    position: absolute;
    height: 100%;
    max-height: 100% !important;
    top: 0;
    right: 0;
    margin: 0 !important;
}

</style>
