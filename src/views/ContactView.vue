<script lang="js">
// import { shallowRef, ref } from 'vue';
// pinia
// import { useLocalStore } from "@/stores/local/localCache.js"
// components

export default {
    name: 'ContactView',
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
        <v-col cols="12" class="mt-n10 px-0 ">
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
        <v-col cols="12" class="mb-4">
            <p id="orcFont" class="text-h3 text-primary mb-4">CONTACT US</p>
            <p class="ml-6">
                Have questions or need more information? We’re here to help!
            </p>
        </v-col>
    </v-row>
</template>
