<script lang="js">
// import { shallowRef, ref } from 'vue';
// pinia
// import { useLocalStore } from "@/stores/local/localCache.js"
import { useApiFetchStore } from "@/stores/local/apiFetch.js"

// components

export default {
    name: 'OfficersView',
    data() {
        return {
            // Pinia
            apiFetch: useApiFetchStore(),
            // vars
            dialog: false,
            tempOfficer: {},
            toggle: 1,

        }
    },
    components: {
    },
    mounted() {
    },
    computed: {},
    methods: {
        dialogCtrl(officer) {
            this.tempOfficer = officer
            this.dialog = true
        }
    }
}
</script>

<template>
    <v-row>
        <v-col cols="12" class="mt-n7 px-0 ">
            <v-img :scale="0.85" class=""
                src="https://ik.imagekit.io/invimgs0101/fccla/imgs/tr:q-50/INV09910_MUgktwizp.JPG?updatedAt=1737935393732"
                laz-src="https://ik.imagekit.io/invimgs0101/fccla/imgs/tr:q-1/INV09910_MUgktwizp.JPG?updatedAt=1737935393732"
                height="300">
                <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                    </div>
                </template>
            </v-img>
        </v-col>
        <!-- Section: Resources -->
        <v-col cols="12" class="my-8">
            <p id="orcFont" class="text-h3 text-primary mb-4">OFFICERS</p>
        </v-col>
        <!-- Toggle & Search-->
        <v-col cols="12">
            <v-btn-toggle v-model="toggle" color="primary" mandatory="true" divided="" variant="outlined">
                <v-btn icon="$ViewList"></v-btn>
                <v-btn icon="$ViewModule"></v-btn>
            </v-btn-toggle>
        </v-col>
        <!-- Officers -->
        <v-col cols="12">
            <v-card min-height="700" class="bg-transparent" elevation="0">
                <v-row v-if="toggle === 1">
                    <v-col v-for="(officer, i) in apiFetch.officersBucket" :key="i" cols="auto">
                        <v-card @click="dialogCtrl(officer)" width="150" height="150" variant="outlined" class="pa-0"
                            rounded="lg">
                            <v-row>
                                <v-col cols="11">
                                    <p class="text-subtitle-2 ml-2 mt-1">
                                        {{ officer.primary.officer_name[0].text }}
                                    </p>
                                </v-col>
                                <v-col cols="2"></v-col>
                                <v-col cols="10">
                                    <v-img :src="officer.primary.officer_image.url" height="100">
                                        <template v-slot:placeholder>
                                            <div class="d-flex align-center justify-center fill-height">
                                                <v-progress-circular color="grey-lighten-4"
                                                    indeterminate></v-progress-circular>
                                            </div>
                                        </template>
                                    </v-img>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row v-if="toggle === 0">
                    <v-col cols="12">
                        <v-list density="compact">
                            <v-list-item @click="dialogCtrl(officer)" v-for="(officer, i) in apiFetch.officersBucket"
                                :key="i" class="border-b-trbl mb-2" rounded="lg">
                                <template v-slot:prepend>
                                    <v-avatar>
                                        <v-img alt="John" :src="officer.primary.officer_image.url"></v-img>
                                    </v-avatar>
                                </template>
                                <v-list-item-title>
                                    {{ officer.primary.officer_name[0].text }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
        <!-- Dialog -->
        <v-dialog v-model="dialog">
            <v-card min-width="350" min-height="485" class="pa-3 border-r-trbl" rounded="xl">
                <v-row>
                    <v-col cols="12" align="end">
                        <v-btn @click="dialog = false" variant="outlined" density="compact">CLOSE</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" class="pb-0">
                        <p id="orcFont" class="text-h4 mt-1">
                            {{ tempOfficer.primary.officer_name[0].text }}
                        </p>
                        <p id="quickFont" class="text-primary text-subtitle-1">
                            {{ tempOfficer.primary.position[0].text }}
                        </p>
                        <p id="quickFont" class="text-subtitle-1">
                            {{ tempOfficer.primary.grade[0].text }}
                        </p>
                    </v-col>
                    <v-col cols="6">
                        <v-img class="border-b-b" :src="tempOfficer.primary.officer_image.url" height="150" contain>
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                                </div>
                            </template>
                        </v-img>
                    </v-col>
                    <v-col cols="12">
                        <v-card height="400" class="pa-3 bg-grey-lighten-4" elevation="0" style="overflow-y: auto">
                            <p class="font-weight-bold">What is your favorite part of FCCLA?</p>
                            <p>
                                {{ tempOfficer.primary.fav_part_of_fccla[0].text }}
                            </p>
                            <p class="font-weight-bold">Why did you run for office?</p>
                            <p>
                                {{ tempOfficer.primary.did_you_run_for_office[0].text }}
                            </p>
                            <p class="font-weight-bold">Best piece of advice for someone thinking about joining?</p>
                            <p>
                                {{ tempOfficer.primary.advice_for_someone_joining[0].text }}
                            </p>
                            <p class="font-weight-bold">What do you want to do when you graduate?</p>
                            <p>
                                {{ tempOfficer.primary.what_want_to_do_after_graduate[0].text }}
                            </p>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </v-row>
</template>
