<template>
  <section>
    <v-layout row wrap>

      <v-flex xs12 sm6>
        <v-card class="ma-2">
          <v-toolbar>
            <v-toolbar-title>{{ getCv.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              round flat small fab
              color="primary"
              @click="newFile({
                type: 'cv', 
                file: { id: getCv.counter, title: 'New ' + getCv.name  + ' (' + getCv.counter + ')', date: new Date().toLocaleString() }
              })"
            >
              <v-icon>add</v-icon>
            </v-btn>
            <v-btn
              round small fab
              color="primary"
              :to="'/cv/files/new/'"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list subheader>
            <v-subheader inset>You have {{ getCv.files.length }} {{ getCv.name }}</v-subheader>
            <v-list-tile
              avatar
              v-for="(item, i) in getCv.files"
              :key="i"
              v-if="item"
              nuxt
              :to="'/cv/files/' + item.id"
            >
              <v-list-tile-avatar>
                <v-icon class="blue white--text" dark>insert_drive_file</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.date }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-speed-dial
                  :direction="'left'"
                  :hover="true"
                >
                  <v-btn
                    dark fab hover flat small
                    slot="activator"
                    color="primary"
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
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <office-settings :fields="getCv.settings"/>

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
              nuxt
              to="/cv/templates"
            >
              <v-list-tile-avatar>
                <v-icon class="blue white--text" dark>web</v-icon>
              </v-list-tile-avatar>
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
  computed: {
    ...mapGetters([
      'getCv',
      'getGlobal'
    ])
  },
  methods: {
    ...mapActions([
      'newFile',
      'deleteFile',
      'updateSettings'
    ])
  }
}
</script>

<style>
</style>
