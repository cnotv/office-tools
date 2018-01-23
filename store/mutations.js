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

  NEW_FILE: (state, type, file = { title: 'My first curriculum', date: '01.01.2016' }) => {
    let array
    if (type === 'cv') {
      array = state.page.cv.doc.files
    } else if (type === 'ocr') {
      array = state.page.ocr.doc.files
    } else if (type === 'invoice') {
      array = state.page.invoice.doc.files
    }
    array.push(file)
  }
}
