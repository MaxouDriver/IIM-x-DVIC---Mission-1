<template> 
    <v-container>
        <v-row>        
            <v-col cols="12" sm="12" md="12">
                <v-text-field
                    label="Company name*"
                    persistent-hint 
                    v-model="model.companyName"
                    required
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field label="Addresse" 
                    v-model="model.address" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Code Postal*" 
                    v-model="model.postCode" type="number" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Ville*" 
                    v-model="model.city" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Pays*" 
                    v-model="model.country" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Tel*" 
                    v-model="model.tel" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" md="12">
                <v-text-field label="Email*" 
                    v-model="model.email" required></v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template> 

<script> 
  export default { 
    name: 'AddClientPhysiqueForm',
    props:{
      model: Object
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

</style>
