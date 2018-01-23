export const switchOption = ({ commit, state }, store) => {
  commit('SWITCH_OPTION', store)
}

export const newFile = ({ commit, state }, type, file) => {
  console.log(file)
  commit('NEW_FILE', type, file)
}
