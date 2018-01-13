<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
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
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
    </v-navigation-drawer>

    <v-toolbar fixed app dark :clipped-left="clipped">

      <v-toolbar-title v-text="title"></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
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

    <v-footer :fixed="fixed" app>
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
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      settingsStore: true,
      title: 'Office tools'
    }
  },
  computed: {
    ...mapGetters([
      'getNav'
    ])
  },
  methods: {
    resetSettings() {
      localStorage.clear()
      location.reload()
    }
  },
  mounted() {
    if (window && !window.navigator) {
      // console.log('You are not online')
      this.statusOnline = false
      return
    }

    // console.log('You are online')
    this.statusOnline = Boolean(window.navigator.onLine)

    if (!this.statusOnline) {
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)

      // console.log('Loading offline mode...')
      if (this.noStorage) {
        this.$store.dispatch('commitPosts')
        // console.log('Cant load offline: you have no store :( ', this.noStorage)
      } else {
        this.$store.commit('commitPosts', JSON.parse(window.localStorage.getItem('vuex')))
        // console.log('Offline mode loaded')
      }
    }
  }
}
</script>
