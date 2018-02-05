<template>
  <section>
    <v-layout row wrap>
      <v-flex xs12>
        <office-settings :fields="getSettings.settings"/>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card class="ma-2">
          <v-toolbar>
            <v-toolbar-title>Import data from Social</v-toolbar-title>
          </v-toolbar>

          <v-list>
            <v-list-tile
              v-for="(item, i) in this.social"
              :key="i"
              @click=""
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card class="ma-2">
          <v-toolbar>
            <v-toolbar-title>Data</v-toolbar-title>
          </v-toolbar>

          <v-list>
            <v-list-tile
              v-for="(item, i) in this.handling"
              :key="i"
              @click=""
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import officeSettings from '@/components/settings'

export default {
  components: { officeSettings },

  data() {
    return {
      handling: [
        { title: 'Export JSON', icon: 'code', to: '/' },
        { title: 'Export link', icon: '', to: '/' },
        { title: 'Import with link', icon: '', to: '/' },
        { title: 'Reset', icon: 'red', to: '/' }
      ],
      social: [
        { title: 'Linkedin', class: '', to: '/' },
        { title: 'Stackoverflow', class: '', to: '/' },
        { title: 'Github', class: '', to: '/' }
      ]
    }
  },

  computed: {
    ...mapGetters([
      'getSettings',
      'getGlobal'
    ])
  },

  methods: {
    ...mapActions([
      'updateSettings'
    ])
  }
}
</script>

<style>
</style>
