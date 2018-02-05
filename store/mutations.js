export default {
  SYNC: (state, store) => {
    state.page = store.page
    state.global = store.global
  },

  SWITCH_OPTION: (state, store) => {
    state.global[store] = !state.global[store]
  },

  UPDATE_SETTINGS: (state, fields) => {
    state.page.settings.data = fields
    state.page.cv.data = fields
  },

  NEW_FILE: (state, payload) => {
    state.page[payload.type].files.push(payload.file)
    state.page[payload.type].counter++
  },

  UPDATE_FILE: (state, payload) => {
    state.page[payload.type].files[payload.id] = payload.file
  },

  REMOVE_FILE: (state, payload) => {
    state.page[payload.type].files[payload.id - 1] = null
  }
}
