<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="getGlobal.miniVariant"
      :clipped="getGlobal.clipped"
      v-model="getGlobal.drawer"
      fixed
      app
    >
      <v-list>
        <template v-for="(item, i) in getNav.main">
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
        @click.stop="getGlobal.miniVariant = !getGlobal.miniVariant"
      >
        <v-icon v-html="getGlobal.miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
    </v-navigation-drawer>

    <v-toolbar fixed app dark :clipped-left="getGlobal.clipped">

      <v-toolbar-title v-text="getGlobal.title"></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        icon
        @click.stop="getGlobal.account = !getGlobal.account"
      >
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="getGlobal.clipped = !getGlobal.clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="getGlobal.fixed = !getGlobal.fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-side-icon @click="getGlobal.drawer = !getGlobal.drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-navigation-drawer
      temporary
      right
      v-model="getGlobal.account"
      fixed
    >

      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon light>account_circle</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Account settings</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile
          v-for="(item, i) in getNav.account.access"
          :key="i"
          @click=""
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile
          v-for="(item, i) in getNav.account.options"
          :key="i"
          @click=""
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

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

export default {
  data() {
    return {
      status: true
    }
  },
  computed: {
    ...mapGetters([
      'getNav',
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

      // console.log('Loading offline mode...')
      if (window.localStorage.getItem('vuex') === null) {
        this.$store.dispatch('commitPosts')
        // console.log('Cant load offline: you have no store :( ', window.localStorage.getItem('vuex') === null)
      } else {
        this.$store.commit('commitPosts', JSON.parse(window.localStorage.getItem('vuex')))
        // console.log('Offline mode loaded')
      }
    }
  }
}
</script>
