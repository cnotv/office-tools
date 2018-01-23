<template>
  <section>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4>
        <v-card class="ma-2">
          <v-toolbar>
            <v-toolbar-title>{{ getOcr.tasks.title }}</v-toolbar-title>
          </v-toolbar>

          <v-list>
            <inputFile />
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
            <v-toolbar-title>{{ getOcr.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              round flat small fab
              color="primary"
              @click="newFile({type: 'ocr', file: { id: getOcr.files.length + 1, title: 'My first ocr', date: '01.01.2016' }})"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list subheader>
            <v-subheader inset>You have {{ getOcr.files.length }} {{ getOcr.name }}</v-subheader>
            <v-list-tile
              avatar
              v-for="(item, i) in getOcr.files"
              :key="i"
              nuxt
              :to="'/ocr/files/' + item.id"
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
import { mapGetters, mapActions } from 'vuex'
import inputFile from '@/components/input-file'

export default {
  components: {inputFile},
  computed: {
    ...mapGetters([
      'getOcr',
      'getGlobal'
    ])
  },
  methods: {
    ...mapActions([
      'newFile'
    ])
  }
}
</script>

<style>
</style>