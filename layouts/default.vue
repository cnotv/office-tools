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
        <v-list-tile
          v-for="(item, i) in account.access"
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
          v-for="(item, i) in account.options"
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
export default {
  components: {
  },
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'home', title: 'Dashboard', to: '/' },
        { icon: 'settings', title: 'Settings', to: '/settings' },
        { icon: 'portrait', title: 'Curriculum', to: '/cv' },
        { icon: 'find_in_page', title: 'OCR', to: '/ocr' },
        { icon: 'receipt', title: 'Invoices', to: '/invoice' }
      ],
      account: {
        access: [
          { title: 'Register', class: '', to: '/' },
          { title: 'Login', class: '', to: '/' },
          { title: 'Remove settings', class: 'red', to: '/' }
        ],
        options: [
          { title: 'Preferences', class: '', to: '/' },
          { title: 'Change E-mail', class: '', to: '/' },
          { title: 'Change Password', class: '', to: '/' },
          { title: 'Change Avatar', class: '', to: '/' },
          { title: 'Reset', class: '', to: '/' },
          { title: 'Delete account', class: 'red', to: '/' }
        ]
      },
      miniVariant: false,
      right: true,
      rightDrawer: false,
      settingsStore: true,
      title: 'Office tools'
    }
  }
}
</script>
