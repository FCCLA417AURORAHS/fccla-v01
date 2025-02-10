import { defineStore } from 'pinia'

export const useLocalStore = defineStore('localCache', {
  state: () => ({
    appBarMenu: [
      {
        name: 'PAGES',
        children: [
          { name: 'HOME', path: '/', href: '' },
          { name: 'OFFICERS', path: '/officers', href: '' },
          { name: 'ABOUT', path: '/about', href: '' },
          { name: 'EVENTS', path: '/events', href: '' },
          { name: 'RESOURCES', path: '/resources', href: '' },
          { name: 'CONTACT', path: '/contact', href: '' },
        ],
      },
      {
        name: 'SUPPORT PAGES',
        children: [
          {
            name: 'Aurora High School',
            path: '',
            href: 'https://www.aurorar8.org/o/aurora-high-school',
          },
          { name: 'Regional Site', path: '', href: 'https://mofcclaregion11.weebly.com/' },
          { name: 'State', path: '', href: 'https://missourifccla.org/' },
          { name: 'National', path: '', href: 'https://fcclainc.org/' },
        ],
      },
    ],
    themeActive: false,
    logoW:
      'https://ik.imagekit.io/invimgs0101/fccla/logo/FCCLA%20Swoop%20only%20-%20Copy%20-%20trans%20-%20Copy_TbVal9L6b.png?updatedAt=1737341375223',
    logoWLazy:
      'https://ik.imagekit.io/invimgs0101/fccla/logo/tr:q-1/FCCLA%20Swoop%20only%20-%20Copy%20-%20trans%20-%20Copy_TbVal9L6b.png?updatedAt=1737341375223',
  }),
  getters: {
    // doubleCount: (state) => state.count * 2
  },
  actions: {
    themeControl() {
      this.themeActive = !this.themeActive
    },
  },
})
