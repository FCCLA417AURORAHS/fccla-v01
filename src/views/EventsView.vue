<script lang="js">
// import { shallowRef, ref } from 'vue';
// pinia
// import { useLocalStore } from "@/stores/local/localCache.js"
import { useApiFetchStore } from "@/stores/local/apiFetch.js"


// components

export default {
    name: 'EventsView',
    data() {
        return {
            // Pinia
            apiFetch: useApiFetchStore(),
            // vars
            toggle: 0
        }
    },
    components: {
    },
    mounted() {
        console.log(this.apiFetch.eventsBucket)
    },
    computed: {},
    methods: {
    }
}
</script>

<template>
    <v-row>
        <v-col cols="12" class="mt-n5 px-0 ">
            <v-img cover
                src="https://ik.imagekit.io/invimgs0101/fccla/imgs/tr:q-50/IMG_1179_QBKBn1UUO.png?updatedAt=1737935684016"
                laz-src="https://ik.imagekit.io/invimgs0101/fccla/imgs/tr:q-1/IMG_1179_QBKBn1UUO.png?updatedAt=1737935684016"
                height="300">
                <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                    </div>
                </template>
            </v-img>
        </v-col>
        <!-- Section: Events -->
        <v-col cols="12" class="my-8">
            <p id="orcFont" class="text-h3 text-primary mb-4">EVENTS</p>
        </v-col>
        <!-- Toggle & Search-->
        <v-col cols="12">
            <v-btn-toggle v-model="toggle" color="primary" mandatory="true" divided="" variant="outlined">
                <v-btn icon="$ViewList"></v-btn>
                <v-btn icon="$CalendarMonthOutline"></v-btn>
            </v-btn-toggle>
        </v-col>
        <!-- loop -->
        <v-col cols="12" align="center">
            <v-sheet v-if="toggle === 0" height="800">
                <v-card v-for="(officer, i) in apiFetch.eventsBucket" :key="i" min-width="320"
                    class="pa-2 mb-4 border-b-trbl" rounded="lg" elevation="2" align="start">
                    <v-img class="rounded-lg"
                        src="https://ik.imagekit.io/invimgs0101/fccla/imgs/tr:q-50/INV09910_MUgktwizp.JPG?updatedAt=1737935393732"
                        width="200">
                        <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                            </div>
                        </template>
                    </v-img>
                    <v-row class="d-flex mt-2">
                        <v-col cols="12" class="d-flex">
                            <p id="orcFont" class="text-h6 mr-6">NAME: {{ officer.primary.event_name[0].text }}</p>
                            <p id="orcFont" class="text-subtitle-2 mt-1">DATE: {{ officer.primary.date[0].text }}</p>
                        </v-col>
                    </v-row>
                    <!-- unlink -->
                    <!-- <p id="orcFont" class="text-subtitle-2 mt-n2">LOCATION: {{ officer.primary.event_location[0].text }}</p> -->
                </v-card>
            </v-sheet>
            <v-sheet v-if="toggle === 1" height="500">
                <iframe width="320" height="400"
                    src="https://calendar.google.com/calendar/embed?src=aurorahsfccla417%40gmail.com&ctz=America%2FNew_York"
                    style="border-width: 0" frameborder="0" scrolling="no"></iframe>
            </v-sheet>
        </v-col>
    </v-row>
</template>
