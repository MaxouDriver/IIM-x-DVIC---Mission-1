<template> 
  <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Créer un client</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="4" md="4">
                <div class="type-text left">
                  <p>Morale</p>
                </div>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                 <v-switch v-model="type" class="ma-2"/>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <div class="type-text right">
                  <p>Physique</p>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <AddClientMoraleForm :model="model" v-if="type"/>
          <AddClientPhysiqueForm :model="model" v-else/>
          <small v-bind:style="{ color: color, fontSize: fontSize }">*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="onClose()">Fermer</v-btn>
          <v-btn color="blue darken-1" text @click="onCreate()">Creer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template> 

<script> 
import AddClientMoraleForm from './components/AddClientMoraleForm';
import AddClientPhysiqueForm from './components/AddClientPhysiqueForm';

import {saveClient} from '../../utils/RequestManager';

  export default { 
    name: 'Clients',
    components: {
      AddClientMoraleForm, AddClientPhysiqueForm
    },
    props:{
      dialog: Boolean,
      onClose: Function
    },
    data () {
      return {
        type: true, 
        model: {
          civilite: 'mme'
        },
        missing: false
      }
    },
    methods: {
        onCreate(){
          if (this.model.email && this.model.email.trim() !== "" &&
          this.model.companyName && this.model.companyName.trim() !== "") {
            saveClient(this.model);
          }else{
            this.missing = true;
          }
        }
    },
    computed: {
      color: function () {
        return this.missing ? '#FF0000' : '#000000';
      },
      fontSize: function () {
        return this.missing ? '90%' : '80%';
      }
    },
    watch: {
      type: function (oldValue) {
        if (oldValue === true) {
          this.model = {civilite: 'mme'};
        }else{
          this.model = {};
        }
      },
      model: function (oldValue, newValue) {
        console.log(newValue);
         if (!newValue.email || newValue.email.trim() === "" ||
          !newValue.companyName || newValue.companyName.trim() === "") {
            this.missing = true;
          }else{
            this.missing = false;
          }
      }
    },
  }
</script>
<style>
.table{
  width: 100%;
}
.button-fullwidth{
  width: 100%;
}

.right{
  justify-content: start;
}

.left{
  justify-content: end;
}

.type-text{
  width: 100%;
  height: 100%;
  align-content: center;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}
.v-input__slot{
  justify-content: center;
}
</style>
