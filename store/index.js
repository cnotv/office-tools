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
          { icon: 'print', tooltip: 'Print', to: '/cv' },
          // { icon: 'mode_edit', tooltip: 'Edit', to: '/cv' },
          { icon: 'file_download', tooltip: 'Download', to: '/cv' },
          { icon: 'link', tooltip: 'Generate encypted link', to: '/cv' },
          { icon: 'cloud_upload', tooltip: 'Upload to cloud', to: '/cv' },
          { icon: 'delete', tooltip: 'Delete', to: '/cv' }
        ]
      },

      navigation: {
        main: [
          { icon: 'home', title: 'Dashboard', to: '/' },
          { icon: 'settings', title: 'Settings', to: '/settings' },
          { icon: 'portrait', title: 'Curriculum', to: '/cv' },
          { icon: 'find_in_page', title: 'OCR', to: '/ocr' },
          { icon: 'receipt', title: 'Invoices', to: '/invoice' }
        ],
        account: {
          access: [
            { title: 'Register', class: '', to: '/', click: '' },
            { title: 'Login', class: '', to: '/', click: '' },
            { title: 'Remove settings', class: 'red', to: '/', click: '' }
          ],
          options: [
            { title: 'Preferences', class: '', to: '/', click: '' },
            { title: 'Change E-mail', class: '', to: '/', click: '' },
            { title: 'Change Password', class: '', to: '/', click: '' },
            { title: 'Change Avatar', class: '', to: '/', click: '' },
            { title: 'Reset', class: '', to: '/', click: '' },
            { title: 'Delete account', class: 'red', to: '/', click: '' }
          ]
        }
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
          files: [
            { id: '1', title: 'My first curriculum', date: '01.01.2016' }
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
          files: [
            { id: '1', title: 'Document 0001', date: '01.01.2016' },
            { id: '2', title: 'Document 0002', date: '02.01.2016' }
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
          files: [
            { id: '1', title: 'Invoice 0001', date: '01.01.2016' },
            { id: '2', title: 'Invoice 0002', date: '02.01.2016' }
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
