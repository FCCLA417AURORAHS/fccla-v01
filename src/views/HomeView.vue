<script lang="js">
// import { shallowRef, ref } from 'vue';
// pinia
// import { useLocalStore } from "@/stores/local/localCache.js"
// components

export default {
  name: 'HomeView',
  data() {
    return {
      // Pinia
      // localStore: useLocalStore(),
      panel: [0],
      expansionPanels: [
        {
          title: 'PARENT', text: 'Access resources and updates to stay involved in your child\'s education',
          links: [
            { name: 'ABOUT', internal: '/about' },
            { name: 'CONTACT US', internal: '/contact' },
          ]
        },
        {
          title: 'STUDENT', text: 'Discover student opportunities, events, and membership benefits',
          links: [
            { name: 'EVENTS', internal: '/events' },
            { name: 'OFFICERS', internal: '/officers' },
          ]
        },
        {
          title: 'TEACHER', text: 'Professional resources and leadership information for educators',
          links: [
            { name: 'ABOUT', internal: '/about' },
            { name: 'RESOURCES', internal: '/resources' },
          ]
        }
      ],
      awards: [
        {
          selected: false,
          name: 'FCCLA SCHOLARSHIPS',
          text: 'Discover scholarship opportunities available through FCCLA.',
          link: '/about',
          image: 'https://ik.imagekit.io/invimgs0101/fccla/imgs/unnamed%20(6)_xd8DRPp5f.jpg?updatedAt=1737828682012'
        },
        {
          selected: false,
          name: 'AWARDS / RECOGNITION',
          text: 'Learn about awards and recognition programs offered by FCCLA.',
          link: '/about',
          image: 'https://ik.imagekit.io/invimgs0101/fccla/imgs/unnamed%20(7)%20-%20Copy2_kRIXHrWqy.jpg?updatedAt=1737828682144'
        },
        {
          selected: false,
          name: 'EVENTS',
          text: 'Explore the calendar of FCCLA events and activities.',
          link: '/events',
          image: 'https://ik.imagekit.io/invimgs0101/fccla/imgs/unnamed%20(14)_Yi27zjf5k.jpg?updatedAt=1737828682153'
        },
      ]
    }
  },
  components: {
  },
  mounted() {
  },
  computed: {},
  methods: {
    selectedBenefit(passed) {
      for (let i = 0; i < this.awards.length; i++) {
        if (this.awards[i].name === passed.name) {
          this.awards[i].selected ? this.awards[i].selected = false : this.awards[i].selected = true
        } else {
          this.awards[i].selected = false
        }
      }
    }
  }
}
</script>

<template>
  <v-row>
    <v-col cols="0" md="2" lg="4" class="d-none d-md-flex">
    </v-col>
    <v-col cols="12" md="8" lg="4">
      <v-row>
        <!-- Intro Images -->
        <v-col cols="6" class="pa-0">
          <v-img
            src="https://ik.imagekit.io/invimgs0101/fccla/imgs/unnamed%20(2)_2kOQXFOmtx.jpg?updatedAt=1737824296699"
            lazy-src="https://ik.imagekit.io/invimgs0101/fccla/imgs/tr:q-1/unnamed%20(2)_2kOQXFOmtx.jpg?updatedAt=1737824296699"
            height="100%" cover>
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>
        </v-col>
        <v-col cols="6" class="pa-0">
          <v-img
            src="https://ik.imagekit.io/invimgs0101/fccla/imgs/unnamed%20(11)_AdrcGZt-p.jpg?updatedAt=1737824296760"
            lazy-src="https://ik.imagekit.io/invimgs0101/fccla/imgs/tr:q-1/unnamed%20(11)_AdrcGZt-p.jpg?updatedAt=1737824296760"
            height="50%" cover>
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>
          <v-img
            src="https://ik.imagekit.io/invimgs0101/fccla/imgs/unnamed%20(10)_6GY5t527N.jpg?updatedAt=1737824296577"
            lazy-src="https://ik.imagekit.io/invimgs0101/fccla/imgs/tr:q-1/unnamed%20(10)_6GY5t527N.jpg?updatedAt=1737824296577"
            height="50%" cover>
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>
        </v-col>
        <!-- Section: Nurturing Leaders Stegthening Families -->
        <v-col cols="12" class="my-8">
          <p id="orcFont" class="text-h3 text-primary mb-4">Nurturing Leaders, Strengthening Families</p>
          <p class="ml-6">
            Nurturing Leaders, Strengthening Families. FCCLA empowers youth to lead with purpose and make a lasting
            impact on their families and communities. Together, we shape tomorrow's leaders today.
          </p>
        </v-col>
        <v-col cols="12" class="mb-8">
          <p id="orcFont" class="text-h5 text-primary  my-4">CHOOSE YOUR PATH</p>
          <v-card height="350" class="bg-transparent" elevation="0">
            <v-expansion-panels v-model="panel" variant="accordion" tile :flat="true" class="border-b-trbl">
              <v-expansion-panel v-for="(panel, i) in expansionPanels" :key="i" :class="i !== 2 ? 'border-b-b' : ''">
                <v-expansion-panel-title id="orcFont" class="text-primary text-h6">{{ panel.title
                  }}</v-expansion-panel-title>
                <v-expansion-panel-text>
                  <p>{{ panel.text }}</p>
                  <v-list density="compact">
                    <v-list-item v-for="(item, i) in panel.links" :key="i" :value="item" :to="item.internal"
                      color="primary">
                      <template v-slot:append>
                        <v-icon icon="$ChevronRight"></v-icon>
                      </template>
                      <v-list-item-title class="text-caption">
                        {{ item.name }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
        <v-spacer class="border-r-b px-1" />
        <!-- Section: BENEFITS -->
        <v-col cols="12" class="mt-n3 px-0 ">
          <v-parallax :scale="0.85" class=""
            src="https://ik.imagekit.io/invimgs0101/fccla/imgs/unnamed%20(8)_OgftXDUu1.jpg?updatedAt=1737826616319"
            height="400">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-parallax>
        </v-col>
        <v-col cols="12" class="mb-8">
          <p id="orcFont" class="text-h3 text-primary mb-4">BENEFITS</p>
          <p class="ml-6 mb-4">
            Becoming an active member of FCCLA can lead to enhanced academic credentials, including academic honors,
            leadership
            awards, and scholarships,
            positioning members for greater success in their academic pursuits.
          </p>
          <v-row class="ml-6">
            <v-btn to="about" variant="outlined" append-icon="$ChevronRight" density="compact" rounded="0" class="mr-4">
              ABOUT
            </v-btn>
            <v-btn to="events" variant="outlined" append-icon="$ChevronRight" density="compact" rounded="0">
              ACTIVITIES
            </v-btn>
          </v-row>
        </v-col>
        <!-- Section: AWARDS -->
        <v-col cols="12" class="mt-8" align="center">
          <v-card @click="selectedBenefit(item)" v-for="(item, i) in awards" :key="i"
            :elevation="item.selected ? 10 : 2" width="280" rounded="0" class="mb-4" height="325">
            <v-expand-transition>
              <v-card-text>
                <v-img v-if="!item.selected" :src="item.image" height="225" class="ma-4">
                  <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                      <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                    </div>
                  </template>
                </v-img>
              </v-card-text>
            </v-expand-transition>
            <p v-if="!item.selected" id="orcFont" class="text-h6 text-primary">{{ item.name }}
              <v-icon size="xsmall" class="mb-1" icon="$ChevronRight"></v-icon>
            </p>
            <v-expand-transition>
              <v-card v-if="item.selected" class="bg-transparent mt-14" elevation="0">
                <p id="orcFont" class="text-h6 text-primary">{{ item.name }}</p>
                <p>{{ item.text }}</p>
                <v-btn :to="item.link" variant="outlined" append-icon="$ChevronRight" density="compact" rounded="0"
                  class="mr-4">
                  LEARN MORE
                </v-btn>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
        <!-- Section: OUR TEAM -->
        <v-col cols="12" class="my-8">
          <p id="orcFont" class="text-h3 text-primary mb-4">OUR TEAM</p>
          <p class="ml-6 mb-4">
            Our team is our strength. Driven by passion and expertise, each member brings unique skills that help us
            turn ideas
            into reality. Get to know the people behind our success.
          </p>
          <v-row class="ml-6">
            <v-btn to="officers" variant="outlined" append-icon="$ChevronRight" density="compact" rounded="0"
              class="mr-4">
              OUR TEAM
            </v-btn>
          </v-row>
        </v-col>
        <v-col cols="12" class="px-0 ">
          <v-img class="border-r-b mb-n12"
            src="https://ik.imagekit.io/invimgs0101/fccla/imgs/file%20(1)_gm1F__twGm.png?updatedAt=1737830825287"
            lazy-src="https://ik.imagekit.io/invimgs0101/fccla/imgs/tr:q-1/file%20(1)_gm1F__twGm.png?updatedAt=1737830825287"
            height="300">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
