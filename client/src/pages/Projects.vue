<template> 
  <v-simple-table class="table">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Code</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projects" :key="item.code">
          <td>{{ item.name }}</td>
          <td>{{ item.code }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template> 

<script> 
import { getProjects } from '../utils/RequestManager';

  export default { 
    name: 'Projects',
    data() {
        return {
            projects: []
        }
    },
    created() {
        this.getDataFromApi()
    },
    methods: {
        getDataFromApi() {
            getProjects()
            .then(response => {
                this.projects = response
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
  }
</script>
