<template>
  <v-toolbar fixed app dark :clipped-left="getGlobal.clipped">

    <v-toolbar-title v-text="getGlobal.title"></v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn
      icon
      @click.stop="switchOption('account')"
    >
      <v-icon>account_circle</v-icon>
    </v-btn>
    <v-btn
      icon
      @click.stop="switchOption('clipped')"
    >
      <v-icon>web</v-icon>
    </v-btn>
    <v-btn
      icon
      @click.stop="switchOption('fixed')"
    >
      <v-icon>remove</v-icon>
    </v-btn>
    <v-toolbar-side-icon @click="switchOption('drawer')"></v-toolbar-side-icon>
  </v-toolbar>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getGlobal'
    ])
  },
  methods: {
    ...mapActions([
      'switchOption'
    ])
  }
}
</script>