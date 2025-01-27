<script lang="ts">
// Pinia
// import { useAuthStore } from '@/stores/auth'


import { useTheme } from 'vuetify'
// pinia
import { useLocalStore } from "@/stores/local/localCache.js"
// components
// import TheWelcome from '../components/TheWelcome.vue'

export default {
    name: 'AppBar',
    setup() {
        const theme = useTheme()
        return {
            theme,
            toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
        }
    },
    created() {
    },
    data() {
        return {
            // Pinia
            localStore: useLocalStore(),
            // Local Vars
            navDrawer: false,
            panel: ['PAGES'],
        }
    },
    components: {
        // TheWelcome
    },
    mounted() { },
    computed: {
    },
    methods: {
        themeSwap() {
            this.localStore.themeControl()
        },
        routeControl(link) {
            if (link.path) {
                this.$router.push(link.path)
            } else if (link.href) {
                window.open(link.href, '_blank')
            }
        }
    }
}
</script>

<template>
    <div>
        <v-app-bar app color="white" :elevation="0" density="compact" class="border-r-b">
            <v-card width="90" class="ml-2 mr-n3 bg-transparent" elevation="0">
                <router-link to="/">
                    <v-img width="80" contain :src="localStore.logoW" :lazy-src="localStore.logoWLazy"
                        alt="Prayer in Unity">
                        <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                            </div>
                        </template>
                    </v-img>
                </router-link>
            </v-card>
            <v-app-bar-title class="d-flex">
                <p id="orcFont" class="text-subtitle-1 text-primary mt-2">- NURTURING & LEADING</p>
            </v-app-bar-title>
            <v-btn id="orcFont" v-if="!navDrawer" color="primary" icon="$FoodApple" @click="navDrawer = !navDrawer">
            </v-btn>
            <v-btn id="orcFont" v-if="navDrawer" color="accent" icon="$FoodAppleOutline"
                @click="navDrawer = !navDrawer">
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="navDrawer" color="white" location="right" :disable-resize-watcher="true">
            <!-- cat menu -->
            <v-expansion-panels v-model="panel" variant="accordion" flat>
                <v-expansion-panel v-for="(cat, i) in localStore.appBarMenu" :key="i" :value="cat.name"
                    class="bg-transparent">
                    <v-expansion-panel-title>
                        <template v-slot:default="{ expanded }">
                            <v-icon size="small" :color="expanded ? 'accent' : 'primary'"
                                :icon="expanded ? '$FoodAppleOutline' : '$FoodApple'" class="mr-2 mt-n1"></v-icon>
                            <p id="orcFont" class="text-subtitle-2">{{ cat.name }}</p>
                        </template>
                        <template v-slot:actions>
                        </template>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list density="compact" nav class="pa-0">
                            <!-- routes -->
                            <v-list-item v-for="(link, i) in cat.children" :key="i" link @click="routeControl(link)"
                                :class="$route.path === link.path ? 'text-subtitle-2 my-0 text-primary' : 'text-caption my-0'">
                                <p id="quickFont">
                                    <v-icon v-if="$route.path === link.path" icon="$ChevronRight"></v-icon>
                                    {{ link.name }}
                                </p>
                            </v-list-item>
                        </v-list>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-divider color="black" class="my-1 border-opacity-50"></v-divider>
            <p class="text-caption ml-6">v1</p>
        </v-navigation-drawer>
    </div>
</template>

<style></style>