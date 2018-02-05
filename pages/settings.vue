<template>
  <section>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="ma-2">
          <v-toolbar>
            <v-toolbar-title>Common info</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              round
              small
              fab
              color="primary"
              @click="updateSettings"
            >
              <v-icon>update</v-icon>
            </v-btn>
          </v-toolbar>

          <v-card-text>
            <v-list>
              <v-list-tile>
                Attach logo
              </v-list-tile>

              <v-list-tile
                v-for="(item, i) in getSettings.fields"
                :key="i"
                v-if="item"
              >
                <v-text-field
                  v-model="getSettings.fields[i].value"
                  :label="item.name"
                  @keyup.enter="updateSettings"
                ></v-text-field>
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
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

export default {
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
    ]),
    updateSettings() {
      this.$store.dispatch('updateSettings', this.fields)
    }
  }
}
</script>

<style>
</style>
