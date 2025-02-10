// MDI - JS SVG (ADV - Optimized)
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// Import Icons Here
import { mdiFoodAppleOutline } from '@mdi/js'
import { mdiFoodApple } from '@mdi/js'
import { mdiChevronRight } from '@mdi/js'
import { mdiChevronLeft } from '@mdi/js'
import { mdiFileDocumentEditOutline } from '@mdi/js'
import { mdiViewList } from '@mdi/js'
import { mdiViewModule } from '@mdi/js'
import { mdiCalendarMonthOutline } from '@mdi/js'

// Vuetify
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  // fix: font issue can't change default font
  defaultAssets: false,
  theme: {
    defaultTheme: 'light',
    themes: {
      dark: {
        variables: {},
        dark: true,
        colors: {
          // FCCLA Red
          primary: '#BD2A2A',
          // White
          secondary: '#FFFFFF',
          // Red
          accent: '#A90000',
        },
      },
      light: {
        variables: {},
        dark: false,
        colors: {
          // FCCLA Red
          primary: '#BD2A2A',
          // Darken Black
          secondary: '#262626',
          // Red
          accent: '#A90000',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    /* place imported icons below to alias in front-end
      EX: icon="$Plus" */
    aliases: {
      ...aliases,
      FoodApple: mdiFoodApple,
      FoodAppleOutline: mdiFoodAppleOutline,
      FileDocumentEditOutline: mdiFileDocumentEditOutline,
      ChevronRight: mdiChevronRight,
      ChevronLeft: mdiChevronLeft,
      ViewList: mdiViewList,
      ViewModule: mdiViewModule,
      CalendarMonthOutline: mdiCalendarMonthOutline,
    },
    sets: {
      mdi,
    },
  },
})
