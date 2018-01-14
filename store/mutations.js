export default {
  SWITCH_OPTION: (state, option) => {
    state[option] = !state[option]
    console.log(this, 'is now', state[option])
  }
}
