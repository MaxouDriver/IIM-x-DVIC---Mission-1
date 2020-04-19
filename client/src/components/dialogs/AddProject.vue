<template> 
  <v-dialog
        v-model="dialog"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            Dialog 2
          </v-card-title>
          <v-card-text>
            <v-row>
                <v-col
                cols="12"
                md="6"
                >
                <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="6"
                >
                <v-text-field
                    v-model="lastname"
                    :rules="nameRules"
                    :counter="10"
                    label="Last name"
                    required
                ></v-text-field>
                </v-col>
</v-row>
<v-row>
                <v-col
                cols="12"
                md="12"
                >
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>
                </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="onClose()"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template> 

<script> 
  export default { 
    name: 'Clients',
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
</style>
