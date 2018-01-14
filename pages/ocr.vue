<template>
  <section>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4>
        <v-card class="ma-2">
          <v-toolbar>
            <v-toolbar-title>{{ getOcr.tasks.title }}</v-toolbar-title>
          </v-toolbar>

          <v-list>
            <v-list-tile
              v-for="(item, i) in getOcr.tasks.options"
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

      <v-flex xs12 sm6>
        <v-card class="ma-2">
          <v-toolbar>
            <v-toolbar-title>{{ getOcr.documents.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn round flat small fab color="primary">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list subheader>
            <v-subheader inset>You have {{ getOcr.documents.files.length }} {{ getOcr.documents.name }}</v-subheader>
            <v-list-tile
              avatar
              v-for="(item, i) in getOcr.documents.files"
              :key="i"
              @click=""
            >
              <v-list-tile-avatar>
                <v-icon class="orange white--text" dark>assignment</v-icon>
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
                    v-for="(btn, i) in getGlobal.actionFile"
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
    </v-layout>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getOcr',
      'getGlobal'
    ])
  }
}
</script>

<style>
</style>