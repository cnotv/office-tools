<template>
  <section>
    <v-layout row wrap>

      <v-flex xs12 sm6>
        <v-card class="ma-2">
          <v-toolbar>
            <v-toolbar-title>{{ getCv.curriculum.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn round flat small fab color="primary">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list subheader>
            <v-subheader inset>You have {{ getCv.curriculum.files.length }} {{ getCv.curriculum.name }}</v-subheader>
            <v-list-tile
              avatar
              v-for="(item, i) in getCv.curriculum.files"
              :key="i"
              @click=""
            >
              <v-list-tile-avatar>
                <v-icon class="blue white--text" dark>assignment</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.date }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-speed-dial
                  v-model="fab"
                  :direction="'left'"
                  :hover="true"
                >
                  <v-btn
                    dark fab hover flat small
                    slot="activator"
                    color="primary"
                    v-model="fab"
                  >
                    <v-icon>more_horiz</v-icon>
                    <v-icon>close</v-icon>
                  </v-btn>

                  <v-btn
                    round flat small fab
                    v-for="(btn, i) in getCv.actionFile"
                    :key="i"
                    @click=""
                  >
                    <v-icon>{{ btn.icon }}</v-icon>
                  </v-btn>
                </v-speed-dial>

                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card class="ma-2">
          <v-toolbar>
            <v-toolbar-title>{{ getCv.templates.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn round flat small fab color="primary">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list subheader>
            <v-subheader inset>You have {{ getCv.templates.files.length }} {{ getCv.templates.name }}</v-subheader>
            <v-list-tile
              avatar
              v-for="(item, i) in getCv.templates.files"
              :key="i"
              @click=""
            >
              <v-list-tile-avatar>
                <v-icon class="blue white--text" dark>web</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn round flat small fab color="primary">
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-list-tile-action>
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
      'getCv'
    ])
  }
}
</script>

<style>
</style>
