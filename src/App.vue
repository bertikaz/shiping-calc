<template>
    <v-app>
        <main-layout>
            <router-view/>
        </main-layout>
    </v-app>
</template>

<script>
    import MainLayout from "./assets/layouts/MainLayout";

    export default {
        name: 'App',
        components: {
            'main-layout': MainLayout
        },
        created() {
            this.$store.dispatch('login', {
                id: 1,
                name: 'Альберт',
                login: 'bertikaz',
                password: 'password',
                isAdmin: true
            })
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
