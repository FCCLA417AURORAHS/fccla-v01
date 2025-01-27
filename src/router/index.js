import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import EventsView from '../views/EventsView.vue'
import MemberView from '../views/MemberView.vue'
import OfficersView from '../views/OfficersView.vue'
import AwardsView from '../views/AwardsView.vue'
import ResourcesView from '../views/ResourcesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView,
    },
    {
      path: '/membership',
      name: 'membership',
      component: MemberView,
    },
    {
      path: '/officers',
      name: 'officers',
      component: OfficersView,
    },
    {
      path: '/awards',
      name: 'awards',
      component: AwardsView,
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourcesView,
    },
  ],
  // Controls scroll to top on page redirect or scrolling to specific section when hashed in path
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return {
        top: 0,
        behavior: 'smooth',
      }
    }
  },
})

export default router
