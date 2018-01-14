export const switchOption = ({ commit, state }, option) => {
  commit('SWITCH_OPTION', option)
}

export const newFile = ({ commit, state }, type) => {
  commit('NEW_FILE', type)
}
