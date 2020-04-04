<template> 
  <v-navigation-drawer
        permanent
        expand-on-hover
    >
        <v-list>
            <v-list-item class="px-2 logo-container">
                <v-list-item-avatar>
                    <v-img src="../assets/logo.svg"></v-img>
                </v-list-item-avatar>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
        nav
        dense
        >
        <v-list-item link v-on:click="goHome()">
            <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link v-on:click="goProjectsList()">
            <v-list-item-icon>
            <v-icon>mdi-folder-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Projects</v-list-item-title>
        </v-list-item>
        <v-list-item link v-on:click="goClientsList()">
            <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Clients</v-list-item-title>
        </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template> 

<script> 
  export default { 
    name: 'Drawer',
    methods: {
        goHome () {
            this.$router.push("/");
        },
        goProjectsList () {
            this.$router.push("/projects");
        },
        goClientsList () {
            this.$router.push("/clients");
        }
    },
  }
</script>

<style scoped>
    .logo-container{
        display: flex;

        flex-direction: row;

        justify-content: center;
    }
</style>
