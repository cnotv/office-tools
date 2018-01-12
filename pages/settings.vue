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
              v-for="(item, i) in social"
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
              v-for="(item, i) in data"
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
export default {
  data() {
    return {
      data: [
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
  }
}
</script>

<style>
</style>
