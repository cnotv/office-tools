import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import VuexPersist from 'vuex-persist'

let vuexLocal = null
if (process.browser) {
  vuexLocal = new VuexPersist({
    key: 'vuex', // The key to store the state on in the storage provider.
    storage: window.localStorage // or window.sessionStorage or localForage
  })
}

const settingsObj = [
  { name: 'logo', value: '' },
  { name: 'name', value: '' },
  { name: 'email', value: '' },
  { name: 'phone', value: '' }
]

const store = () => {
  return new Vuex.Store({
    state: {
      strict: process.env.NODE_ENV !== 'production',

      global: {
        title: 'Office tools',
        status: true,
        clipped: true,
        drawer: true,
        miniVariant: false,
        fixed: false,
        account: false,
        dialog: false
      },

      page: {
        index: {},
        settings: {
          settings: settingsObj
        },

        cv: {
          name: 'curriculum',
          title: 'Your curriculum',
          counter: '1',
          settings: settingsObj,
          files: [],
          templates: {
            name: 'templates',
            title: 'Your templates',
            files: [
              { title: 'Default template' }
            ]
          }
        },

        ocr: {
          name: 'documents',
          title: 'Your documents',
          counter: '1',
          files: [],
          tasks: {
            title: 'Your tasks',
            options: [
              // { title: 'Load from file', icon: 'file', to: '/' },
              { title: 'Load from URL', icon: 'link', to: '/' },
              { title: 'Load from camera', icon: 'camera', to: '/' },
              { title: 'Convert document', icon: '', to: '/' },
              { title: 'Translate document', icon: '', to: '/' }
            ]
          }
        },

        invoice: {
          name: 'invoice',
          title: 'Your invoices',
          counter: '1',
          settings: settingsObj,
          files: [],
          workgroup: {
            name: 'workgroup',
            title: 'Your workgroup',
            files: [
              { title: 'Default workgroup' }
            ]
          }
        }
      }
    },
    actions,
    mutations,
    getters,
    plugins: process.browser ? [vuexLocal.plugin] : []
  })
}

export default store
