<template>
    <v-content>
        <v-app-bar color="primary"
                   flat
                   dark>
            <v-toolbar-title class="mr-3">
                Калькулятор посылок
            </v-toolbar-title>
            <!--            <template v-for="(item, index) in navMenuItems">-->
            <!--                <v-btn :key="'nav-' + index"-->
            <!--                       text-->
            <!--                       tile-->
            <!--                       :class="{'primary darken-1': (item.target === currentPage)}"-->
            <!--                       @click="routeTo(item.target)"-->
            <!--                       small>{{item.label}}-->
            <!--                </v-btn>-->
            <!--            </template>-->
            <!-- spacer -->
            <v-spacer></v-spacer>
            <!-- spacer -->
            <v-menu>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on">
                        {{ user.name }}
                    </v-btn>
                </template>
<!--                <v-list>-->
<!--                    <v-list-item @click="doLogOut">-->
<!--                        <v-list-item-title>Выход</v-list-item-title>-->
<!--                    </v-list-item>-->
<!--                </v-list>-->
            </v-menu>

        </v-app-bar>
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <v-row justify="center">
                        <v-col lg="10" md="12">
                            <!-- page content -->
                            <slot></slot>
                            <!-- end of page content-->
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "MainLayout",
        computed: {
            ...mapState({
                user: (state) => state.User.currentUser
            })
        }
    }
</script>

<style scoped>

</style>
