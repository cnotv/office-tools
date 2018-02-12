<template>
  <v-app>
    <office-menu-nav></office-menu-nav>
    <office-menu-toolbar></office-menu-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <office-menu-account></office-menu-account>

    <v-footer :fixed="getGlobal.fixed" app>
      <span>
        <a href="https://cnotv.xyz" target="_blank">cnotv &copy; 2018</a>
        Build with
        <a href="https://vuetifyjs.com" target="_blank">Vuetify</a> and 
        <a href="https://nuxtjs.org/" target="_blank">Nuxt</a>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import officeMenuNav from '@/components/menuNav'
import officeMenuAccount from '@/components/menuAccount'
import officeMenuToolbar from '@/components/menuToolbar'

export default {
  components: { officeMenuNav, officeMenuAccount, officeMenuToolbar },
  computed: {
    ...mapGetters([
      'getGlobal'
    ])
  },
  methods: {
    resetSettings() {
      localStorage.clear()
      location.reload()
    },
    ...mapActions([
      'switchOption'
    ])
  },
  mounted() {
    if (window && !window.navigator) {
      // console.log('You are not online')
      this.status = false
      return
    }

    // console.log('You are online')
    this.status = Boolean(window.navigator.onLine)

    if (!this.status) {
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    }

    if (window) {
      // console.log('Loading offline mode...')
      if (window.localStorage.getItem('vuex') === null) {
        // console.log('deploying localStorage')
        this.$store.dispatch('sync')
        // console.log('Cant load offline: you have no store :( ', window.localStorage.getItem('vuex') === null)
      } else {
        // console.log('loading from localStorage')
        this.$store.commit('SYNC', JSON.parse(window.localStorage.getItem('vuex')))
        // console.log('Offline mode loaded')
      }
    }
  }
}
</script>

<style>
.overlay { z-index: 3; }
</style>