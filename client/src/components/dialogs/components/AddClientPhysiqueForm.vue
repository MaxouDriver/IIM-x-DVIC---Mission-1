<template> 
    <v-container>
        <v-row>        
            <v-col cols="12" sm="12" md="12">
                <v-text-field
                    label="Company name*"
                    persistent-hint
                    required
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field label="Addresse" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Code Postal*" type="number" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Ville*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Pays*" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Tel*" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" md="12">
                <v-text-field label="Email*" required></v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template> 

<script> 
  export default { 
    name: 'AddClientPhysiqueForm',
    data () {
      return {
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

</style>
