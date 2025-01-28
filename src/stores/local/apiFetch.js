import { defineStore } from 'pinia'
import { createClient } from '@prismicio/client'

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
    fetchError: null,
  }),
  actions: {
    async fetchResources() {
      try {
        // Fetch the master ref dynamically
        const repository = await client.getRepository()
        const masterRef = repository.refs.find((ref) => ref.isMasterRef).ref

        // Use Prismic client to fetch documents
        const documents = await client.get({
          ref: masterRef,
        })

        // Return the first document's data if available
        if (documents.results.length) {
          return documents.results[0].data
        } else {
          throw new Error('No documents found.')
        }
      } catch (error) {
        console.error('Prismic fetch error:', error)
        this.fetchError = 'Failed to fetch resources from Prismic.'
        return null
      }
    },
    filterResources(db) {
      if (db) {
        this.pdfBucket = db.body || []
        this.officersBucket = db.body1 || []
        this.eventsBucket = db.body2 || []
        this.awardsBucket = db.body3 || []
      }
    },
    async fetchHandler() {
      if (!this.resourcesFetched) {
        const db = await this.fetchResources()
        if (db) {
          this.filterResources(db)
          this.resourcesFetched = true
        }
      }
    },
  },
})
