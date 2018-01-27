import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import VuexPersist from 'vuex-persist'

let vuexLocalStorage = null
if (process.browser) {
  vuexLocalStorage = new VuexPersist({
    key: 'vuex', // The key to store the state on in the storage provider.
    storage: window.localStorage // or window.sessionStorage or localForage
  })
}

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
        dialog: false,
        actionFile: [
          { tooltip: 'Print', icon: 'print', click: '' },
          // { tooltip: 'Edit', icon: 'mode_edit', click: '' },
          { tooltip: 'Download', icon: 'file_download', click: '' },
          { tooltip: 'Generate encypted link', icon: 'link', click: '' },
          { tooltip: 'Upload to cloud', icon: 'cloud_upload', click: '' },
          { tooltip: 'Delete', icon: 'delete', click: '' }
        ]
      },

      page: {
        settings: {
          data: [
            { title: 'Export JSON', icon: 'code', to: '/' },
            { title: 'Export link', icon: '', to: '/' },
            { title: 'Import with link', icon: '', to: '/' },
            { title: 'Reset', icon: 'red', to: '/' }
          ],
          social: [
            { title: 'Linkedin', class: '', to: '/' },
            { title: 'Stackoverflow', class: '', to: '/' },
            { title: 'Github', class: '', to: '/' }
          ]
        },

        index: {
        },

        cv: {
          name: 'curriculum',
          title: 'Your curriculum',
          counter: '1',
          files: [
          ],
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
          files: [
          ],
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
          files: [
          ],
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
    plugins: process.browser ? [vuexLocalStorage.plugin] : []
  })
}

export default store
