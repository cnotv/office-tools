<template>
  <v-card-text class="c-infos">
    <template
      v-for="(info, i) in infos"
    >
      <img
        alt="cv logo"
        v-if="info.value && info.name === 'logo'"
        :src="info.value"
      >
      <p v-else-if="info.value">{{ info.value || getSettings.settings[i].value || '' }}</p>
    </template>

    <slot></slot>

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
.c-infos img {
    max-height: 50px;
  }
.c-infos p {
  margin: 0;
}
.c-infos p:first-of-type {
  font-weight: 700;
}
</style>
