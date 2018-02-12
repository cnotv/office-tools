<template>
  <v-navigation-drawer
    :mini-variant="getGlobal.miniVariant"
    :clipped="getGlobal.clipped"
    v-model="getGlobal.drawer"
    fixed
    app
  >
    <v-list>
      <template v-for="(item, i) in main">
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider v-if="i === 1 || i === 4"></v-divider>
      </template>
    </v-list>
    <v-btn
      icon
      @click.stop="switchOption('miniVariant')"
    >
      <v-icon v-html="getGlobal.miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      main: [
        { title: 'Dashboard', icon: 'home', to: '/' },
        { title: 'Settings', icon: 'settings', to: '/settings' },
        { title: 'Curriculum', icon: 'portrait', to: '/cv' },
        { title: 'OCR', icon: 'find_in_page', to: '/ocr' },
        { title: 'Invoices', icon: 'receipt', to: '/invoice' }
      ]
    }
  },
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