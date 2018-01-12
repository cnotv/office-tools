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
        <template v-for="(item, i) in items">
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

    <v-toolbar fixed app :clipped-left="clipped">

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
        <v-list-tile>
          <v-checkbox
            label="Store settings locally?"
            v-model="checkbox"
            @change="settingsStore = !settingsStore"
          ></v-checkbox>
        </v-list-tile>
        <v-list-tile>
          <v-btn color="error" dark flat>Remove settings</v-btn>
        </v-list-tile>
        <v-list-tile>
          <v-btn flat>Register</v-btn>
        </v-list-tile>
        <v-list-tile>
          <v-btn flat>Login</v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-footer :fixed="fixed" app>
      <span>
        <a href="https://cnotv.xyz" target="_blank">cnotv &copy; 2018</a> 
      </span>
      <nuxt-logo/>
      <vuetify-logo/>
    </v-footer>
  </v-app>
</template>

<script>
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import NuxtLogo from '~/components/NuxtLogo.vue'

export default {
  components: {
    VuetifyLogo,
    NuxtLogo
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'home', title: 'Dashboard', to: '/' },
        { icon: 'settings', title: 'Settings', to: '/settings' },
        { icon: 'portrait', title: 'Curriculum', to: '/cv' },
        { icon: 'find_in_page', title: 'OCR', to: '/ocr' },
        { icon: 'receipt', title: 'Invoices', to: '/invoice' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      settingsStore: true,
      title: 'Office tools'
    }
  }
}
</script>
