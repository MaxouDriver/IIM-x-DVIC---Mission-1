<template>
  <v-dialog v-model="dialog" max-width="700px">
    <v-card>
      <v-card-title>Create a project</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="model.name"
              label="Name*"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="model.code"
              label="Code*"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-select v-model="model.client" :items="clients" label="Client" outlined></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-date-picker v-model="model.startDate" label="Start date*" required></v-date-picker>
          </v-col>

          <v-col cols="12" md="6">
            <v-date-picker v-model="model.endDate" label="End date"></v-date-picker>
          </v-col>
        </v-row>

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
import { getClients, saveProject } from '../../utils/RequestManager';

export default {
  name: "Clients",
  props: {
    dialog: Boolean,
    onClose: Function
  },
  data() {
    return {
      model: {
        name: undefined,
        code: undefined,
        startDate: undefined,
        endDate: undefined,
        client: undefined
      },
      clients: [],
      missing: false
    };
  },
    created() {
        this.getDataFromApi()
    },
    methods: {
        getDataFromApi() {
            getClients()
            .then(response => {
              console.log(response);
                this.clients = response.map(client => {
                  client.text = client.companyName;
                  client.value = client.id;
                  return client;
                })
            })
            .catch(error => {
                console.log(error)
            })
        },
        onCreate(){
          if (this.model.name && this.model.name.trim() !== "" &&
            this.model.code && this.model.code.trim() !== "" &&
            this.model.startDate && this.model.startDate.trim() !== "" ) {
            saveProject(this.model);
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
      model: function (oldValue, newValue) {
        console.log(newValue);
         if (!newValue.name || newValue.name.trim() === "" ||
            !newValue.code || newValue.code.trim() === "" ||
            !newValue.startDate || newValue.startDate.trim() === "") {
            this.missing = true;
          }else{
            this.missing = false;
          }
      }
    },
};
</script>
<style>
.table {
  width: 100%;
}
.button-fullwidth {
  width: 100%;
}
</style>
