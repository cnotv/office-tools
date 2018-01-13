<template>
  <section>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="ma-2">
          <v-toolbar>
            <v-toolbar-title>Common info</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-list>
              <v-list-tile>
                Attach logo
              </v-list-tile>
              <v-list-tile>
                <v-text-field
                  label="E-mail"
                ></v-text-field>
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile>
                <v-text-field
                  label="Name"
                ></v-text-field>
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile>
                <v-text-field
                  label="Phone"
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
              v-for="(item, i) in getSettings.social"
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
              v-for="(item, i) in getSettings.data"
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
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getSettings'
    ])
  }
}
</script>

<style>
</style>
