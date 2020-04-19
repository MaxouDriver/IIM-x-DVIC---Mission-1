<template> 
  <v-simple-table class="table">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Company Name</th>
          <th class="text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in clients" :key="item.companyName">
          <td>{{ item.companyName }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template> 

<script> 
import {getClients} from '../utils/RequestManager';

  export default { 
    name: 'Clients',
    data() {
        return {
            clients: []
        }
    },
    created() {
        this.getDataFromApi()
    },
    methods: {
        getDataFromApi() {
            getClients()
            .then(response => {
              console.log(response);
                this.clients = response
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
  }
</script>
<style scoped>
.table{
  width: 100%;
}
</style>
