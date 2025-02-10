<script lang="js">
// import { shallowRef, ref } from 'vue';
// pinia
// import { useLocalStore } from "@/stores/local/localCache.js"
import { useDisplay } from 'vuetify';
// components

export default {
    name: 'ContactView',
    setup() {
        const { xs, sm, md, lg, xl } = useDisplay();
        return { xs, sm, md, lg, xl };
    },
    data() {
        return {
            // Pinia
            // localStore: useLocalStore(),
        }
    },
    components: {
    },
    mounted() {
    },
    computed: {},
    methods: {
    }
}
</script>

<template>
    <v-row>
        <v-col cols="0" md="4" lg="4" class="d-none d-md-flex">
        </v-col>
        <v-col cols="12" md="4" lg="4">
            <v-row>
                <v-col cols="12" class="mt-n1 px-0 " align="center">
                    <v-card class="bg-transparent rounded-lg" elevation="0">
                        <!-- <iframe src="" style="border: 0" allowfullscreen="true" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe> -->
                        <iframe :width="xs ? 320 : sm ? 500 : 900" :height="xs ? 300 : sm ? 400 : 450"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5454.461339926484!2d-93.7353990096878!3d36.961124224577595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf4b3c1e31ee51%3A0xf53db7329ed75597!2sAurora%20High%20School!5e0!3m2!1sen!2sus!4v1738717800685!5m2!1sen!2sus"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </v-card>
                </v-col>
                <!-- Section: Resources -->
                <v-col cols="12" class="mb-4">
                    <p id="orcFont" class="text-h3 text-primary my-4">CONTACT US</p>
                    <p class="ml-6">
                        Have questions or need more information? We’re here to help!
                    </p>
                    <p id="orcFont" class="ml-6 mt-5">EMAIL:</p>
                    <p class="ml-6 mb-4">sholt@aurorar8.org</p>
                    <p id="orcFont" class="ml-6">PHONE NUMBER:</p>
                    <p class="ml-6 mb-4">(417) 678-3355</p>
                    <p id="orcFont" class="ml-6">ADDRESS:</p>
                    <p class="ml-6">305 W. Prospect St. Aurora MO, 65605</p>
                </v-col>
                <v-spacer class="border-r-b px-1 my-9" />
                <!-- Section: Resources -->
                <v-col cols="12" class="mb-4">
                    <p id="orcFont" class="text-h3 text-primary my-4">FORM</p>

                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
