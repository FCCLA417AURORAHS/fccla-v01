import { createPrismic } from '@prismicio/vue'

const prismic = createPrismic({
  endpoint: 'https://fccla-v01.cdn.prismic.io/api/v2',
  //   accessToken: import.meta.env.VITE_PRISMIC_ACCESS_TOKEN,
})

export default prismic
