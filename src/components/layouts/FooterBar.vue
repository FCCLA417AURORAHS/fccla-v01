<script>
// pinia
import { useLocalStore } from "@/stores/local/localCache.js"
export default {
    name: 'FooterBar',
    data() {
        return {
            // Pinia
            localStore: useLocalStore(),
            // Local Vars
        }
    },
    props: {
    },
    components: {
    },
    computed: {

    },
    mounted() {
    },
    methods: {
    }
}
</script>

<template>
    <div>
        <v-card class="bg-white px-4 mt-n2 pt-6 rounded-0" elevation="0">
            <v-row>
                <v-col cols="12">
                    <v-img width="100" contain :src="localStore.logoW" :lazy-src="localStore.logoWLazy"
                        alt="Prayer in Unity" class="ml-3">
                        <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                            </div>
                        </template>
                    </v-img>
                    <v-card height="50" class="bg-transparent" elevation="0"></v-card>
                    <hr class="mb-2" />
                    <p id="orcFont" class="ml-2 text-primary text-subtitle-2">PAGES</p>
                    <div v-for="(route, i) in localStore.appBarMenu[0].children" :key="i">
                        <v-btn size="small" :variant="$route.path === route.path ? 'outlined' : 'text'" link
                            :to="route.path">
                            <v-icon v-if="$route.path === route.path" icon=" $ChevronRight"></v-icon>
                            {{ route.name }}
                        </v-btn>
                    </div>
                    <hr class="mb-2" />
                    <p id="orcFont" class="ml-2 text-primary text-subtitle-2">SUPPORT PAGES</p>
                    <div v-for="(route, i) in localStore.appBarMenu[1].children" :key="i">
                        <v-btn size="small" variant="text" link :href="route.href" target="_blank">
                            {{ route.name }}
                        </v-btn>
                    </div>
                    <hr class="mb-2" />
                    <div align="center">
                        <p class="text-caption mt-2">
                            Copyright © 2025 Aurora R-8 School District. All rights reserved.
                        </p>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<style></style>
