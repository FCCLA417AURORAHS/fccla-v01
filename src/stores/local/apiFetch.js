import { defineStore } from 'pinia'
import { createClient } from '@prismicio/client'
// import * as prismic from '@prismicio/client'

// Create Prismic client
const client = createClient('fccla-v01', {
  accessToken: import.meta.env.VITE_PRISMIC_TOKEN,
})

export const useApiFetchStore = defineStore('apiFetch', {
  state: () => ({
    pdfBucket: [],
    officersBucket: [],
    eventsBucket: [],
    awardsBucket: [],
    resourcesFetched: false,
  }),
  actions: {
    async fetchResources() {
      try {
        // Use Prismic client to fetch documents
        const documents = await client.get({
          // ERROR: RED ID CHANGES
          ref: 'Z5WzsxIAACkANnN5', // Your specific ref
        })

        // Assuming the first document contains your data
        return documents.results[0].data
      } catch (error) {
        console.error('Prismic fetch error:', error)
        return []
      }
    },
    filterResources(db) {
      this.pdfBucket = db.body
      this.officersBucket = db.body1
      this.eventsBucket = db.body2
      this.awardsBucket = db.body3
    },
    async fetchHandler() {
      if (!this.resourcesFetched) {
        let db = await this.fetchResources()
        this.filterResources(db)
        this.resourcesFetched = true
      }
    },
  },
})
