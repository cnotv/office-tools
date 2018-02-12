<template>
  <v-navigation-drawer
    temporary
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
        v-for="(item, i) in account.access"
        :key="i"
        :class="item.class"
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
        :class="item.class"
        @click=""
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </v-navigation-drawer>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      account: {
        access: [
          { title: 'Register', class: '', to: '/', click: '' },
          { title: 'Login', class: '', to: '/', click: '' },
          { title: 'Remove settings', class: '', to: '/', click: '' }
        ],
        options: [
          { title: 'Preferences', class: '', to: '/', click: '' },
          { title: 'Change E-mail', class: '', to: '/', click: '' },
          { title: 'Change Password', class: '', to: '/', click: '' },
          { title: 'Change Avatar', class: '', to: '/', click: '' },
          { title: 'Reset', class: '', to: '/', click: '' },
          { title: 'Delete account', class: '', to: '/', click: '' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'getGlobal'
    ])
  }
}
</script>