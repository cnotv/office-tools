<template>
  <v-card-text>
    <p
      v-for="(info, i) in infos"
    >{{ info.value || getSettings.settings[i].value || '' }}</p>
  </v-card-text>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['infos'],
  computed: {
    ...mapGetters([
      'getSettings'
    ])
  }
}
</script>

<style>
</style>
