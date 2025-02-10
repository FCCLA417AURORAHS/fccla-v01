<script lang="js">
// import { shallowRef, ref } from 'vue';
// pinia
// import { useLocalStore } from "@/stores/local/localCache.js"
import { useApiFetchStore } from "@/stores/local/apiFetch.js"

// components

export default {
    name: 'AboutView',
    data() {
        return {
            // Pinia
            // localStore: useLocalStore(),
            apiFetch: useApiFetchStore(),

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
                <v-col cols="12">
                    <p id="orcFont" class="text-h3 text-primary my-4">ABOUT</p>
                    <p class="ml-6">
                        FCCLA (Family, Career, and Community Leaders of America) is a dynamic student organization
                        dedicated to preparing youth for leadership roles, career success, and community engagement.
                        Through career-focused programs, competitions, and service projects, FCCLA empowers students to
                        develop essential life skills in personal growth, family management, and career readiness.

                        Join us in shaping the future—one leader at a time! 🔴✨
                    </p>
                </v-col>
                <v-col cols="12">
                    <p id="orcFont" class="text-h3 text-primary my-4">AWARDS</p>
                    <p class="ml-6">
                        Recognizing excellence and dedication, our awards celebrate outstanding achievements in
                        leadership, service, and career development. Earn and showcase your accomplishments as you grow
                        and make an impact! 🎖️✨
                    </p>
                    <v-carousel height="200" show-arrows="hover" cycle hide-delimiters>
                        <template v-slot:prev="{ props }">
                            <v-btn color="transparent" variant="text" @click="props.onClick">
                                <v-icon color="primary" icon="$ChevronLeft"></v-icon>
                            </v-btn>
                        </template>
                        <template v-slot:next="{ props }">
                            <v-btn color="transparent" variant="text" @click="props.onClick">
                                <v-icon color="primary" icon="$ChevronRight"></v-icon>
                            </v-btn>
                        </template>
                        <v-carousel-item v-for="(slide, i) in apiFetch.awardsBucket.slice(1)" :key="i">
                            <v-sheet height="100%">
                                <div class="d-flex fill-height justify-center align-center">
                                    <v-card width="300" height="150" class="pa-4" rounded="xl">
                                        <div class="text-subtitle-2">
                                            <p id="orcFont" class="text-primary">AWARD:</p>
                                            <p>{{ slide.primary.award_name[0].text }}</p>
                                            <p id="orcFont" class="text-primary">DATE:</p>
                                            <p>{{ slide.primary.date_awarded.slice(0, 4) }}</p>
                                        </div>
                                    </v-card>
                                </div>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
