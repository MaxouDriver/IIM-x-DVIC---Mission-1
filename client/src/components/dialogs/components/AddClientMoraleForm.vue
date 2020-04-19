<template> 
    <v-container>
        <v-row>        
            <v-col cols="12">
            <v-radio-group v-model="model.civilite" row>
                <v-radio label="Mme" value="mme"/>
                <v-radio label="M" value="m"/>
            </v-radio-group>
            </v-col>

            <v-col cols="12" sm="6" md="6">
            <v-text-field
                label="Last name"
                v-model="model.lastName"
                persistent-hint/>
            </v-col>
            <v-col cols="12" sm="6" md="6">
            <v-text-field
                label="First name*"
                v-model="model.firstName"
                persistent-hint/>
            </v-col>
            <v-col cols="12" sm="12" md="12">
                <v-text-field
                    label="Company name*"
                    v-model="model.companyName"
                    persistent-hint
                    required/>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field 
                    label="Date de naissance*" 
                    v-model="model.birthDate"/>
                </v-col>
            <v-col cols="12">
                <v-text-field 
                    label="Addresse"
                    v-model="model.address" />
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field 
                    label="Code Postal"
                    v-model="model.postcode" 
                    type="number"/>
            </v-col>

            <v-col cols="12" sm="6" md="6">
                <v-text-field 
                    label="Ville"
                    v-model="model.city"/>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field 
                    label="Pays"
                    v-model="model.country"/>
            </v-col>

            <v-col cols="12" sm="6" md="6">
                <v-text-field 
                    label="Tel pro"
                    v-model="model.phone"/>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field 
                    label="Mobile"
                    v-model="model.mobilePhone"/>
            </v-col>

            <v-col cols="12" sm="12" md="12">
                <v-text-field 
                    label="Email*" 
                    v-model="model.email"
                    required/>
            </v-col>
        </v-row>
    </v-container>
</template> 

<script> 
  export default { 
    name: 'AddClientMoraleForm',
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
