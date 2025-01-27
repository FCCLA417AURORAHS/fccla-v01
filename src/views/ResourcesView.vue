<script lang="js">
// import { shallowRef, ref } from 'vue';
// pinia
import { useApiFetchStore } from "@/stores/local/apiFetch.js"

// components

export default {
    name: 'ResourcesView',
    data() {
        return {
            // Pinia
            apiFetch: useApiFetchStore(),
            // vars
            toggle: 1,
            panel: [0],
        }
    },
    components: {
    },
    mounted() {
    },
    computed: {},
    methods: {
        redirect(link) {
            window.open(link.url, '_blank');
        }
    }
}
</script>

<template>
    <v-row>
        <!-- Section: Resources -->
        <v-col cols="12" class="my-8">
            <p id="orcFont" class="text-h3 text-primary mb-4">RESOURCES</p>
            <p class="ml-6">
                Tools and insights to empower your journey.
            </p>
        </v-col>
        <!-- Section: Search -->
        <v-col cols="12">
            <v-btn-toggle v-model="toggle" color="primary" mandatory="true" divided="" variant="outlined">
                <v-btn icon="$ViewList"></v-btn>
                <v-btn icon="$ViewModule"></v-btn>
            </v-btn-toggle>
        </v-col>
        <!-- Section: List -->
        <v-col cols="12">
            <v-card class="bg-transparent" elevation="0" min-height="550">
                <v-row v-if="toggle === 1">
                    <v-col v-for="(pdf, i) in apiFetch.pdfBucket" :key="i" cols="auto">
                        <v-card @click="redirect(pdf.primary.pdf_link)" width="110" height="175" variant="outlined"
                            class="pa-2" rounded="lg">
                            <v-icon icon="$FileDocumentEditOutline"></v-icon>
                            <p class="mt-14 text-caption">PDF</p>
                            <p class="mt-n1 text-caption text-primary">{{ pdf.primary.pdf_name1[0].text }}</p>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row v-if="toggle === 0">
                    <v-col cols="12">
                        <v-expansion-panels v-model="panel" variant="accordion" tile :flat="true" class="border-b-trbl">
                            <v-expansion-panel v-for="(pdf, i) in apiFetch.pdfBucket" :key="i"
                                :class="i < apiFetch.pdfBucket.length - 1 ? 'border-b-b' : ''">
                                <v-expansion-panel-title class="text-subtitle-1 text-primary">
                                    {{ pdf.primary.pdf_name1[0].text }}
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <a :href="pdf.primary.pdf_link.url" target="_blank">
                                        {{ pdf.primary.pdf_link.url }}
                                    </a>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>
