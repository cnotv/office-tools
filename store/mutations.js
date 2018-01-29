export default {
  SWITCH_OPTION: (state, store) => {
    if (store === 'clipped') {
      state.global.clipped = !state.global.clipped
    } else if (store === 'drawer') {
      state.global.drawer = !state.global.drawer
    } else if (store === 'miniVariant') {
      state.global.miniVariant = !state.global.miniVariant
    } else if (store === 'fixed') {
      state.global.fixed = !state.global.fixed
    } else if (store === 'account') {
      state.global.account = !state.global.account
    } else if (store === 'dialog') {
      state.global.dialog = !state.global.dialog
    }
  },

  NEW_FILE: (state, payload) => {
    let array
    if (payload.type === 'cv') {
      array = state.page.cv.files
      state.page.cv.counter++
    } else if (payload.type === 'ocr') {
      array = state.page.ocr.files
      state.page.ocr.counter++
    } else if (payload.type === 'invoice') {
      array = state.page.invoice.files
      state.page.invoice.counter++
    }
    array.push(payload.file)
  },

  UPDATE_FILE: (state, payload) => {
    if (payload.type === 'cv') {
      state.page.cv.files[payload.id] = payload.file
    } else if (payload.type === 'ocr') {
      state.page.ocr.files[payload.id] = payload.file
    } else if (payload.type === 'invoice') {
      state.page.invoice.files[payload.id] = payload.file
    }
  },

  REMOVE_FILE: (state, payload) => {
    if (payload.type === 'cv') {
      // state.page.cv.files = state.page.cv.files.filter(file => file.id !== parseInt(payload.id))
      state.page.cv.files[payload.id - 1] = null
    } else if (payload.type === 'ocr') {
      state.page.ocr.files = state.page.ocr.files.slice(payload.id)
    } else if (payload.type === 'invoice') {
      state.page.invoice.files = state.page.invoice.files.slice(payload.id)
    }
  }
}
