export default {
  SWITCH_OPTION: (state, option) => {
    state[option] = !state[option]
    console.log(this, 'is now', state[option])
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
