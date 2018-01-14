export default {
  SWITCH_OPTION: (state, option) => {
    state[option] = !state[option]
    console.log(this, 'is now', state[option])
  },

  NEW_FILE: (state, type, file = { title: 'My first curriculum', date: '01.01.2016' }) => {
    let array
    if (type === 'cv') {
      array = state.page.cv.curriculum.files
    } else if (type === 'ocr') {
      array = state.page.ocr.documents.files
    } else if (type === 'invoice') {
      array = state.page.invoice.invoice.files
    }
    array.push(file)
  }
}
