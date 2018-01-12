<template>
  <section>

    <v-layout row wrap>

      <v-flex xs12 sm6>
        <v-card class="ma-2">
          <v-toolbar>
            <v-toolbar-title>You curriculum</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn round flat small fab color="primary">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list subheader>
            <v-subheader inset>You have {{curriculum.length}} curriculum</v-subheader>
            <v-list-tile
              avatar
              v-for="(item, i) in curriculum"
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
                    v-for="(btn, i) in actionFile"
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
            <v-toolbar-title>Your templates</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn round flat small fab color="primary">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list subheader>
            <v-subheader inset>You have {{templates.length}} templates</v-subheader>
            <v-list-tile
              avatar
              v-for="(item, i) in templates"
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

      <v-flex xs12 sm6 md4>
        <v-card class="ma-2">
          <v-card-text class="px-4">
            <ul>
              <li>Create CV</li>
              <li>Settings</li>
              <li>Create template</li>
              <li>CRUD CV</li>
              <li>Editor</li>
              <li>Generate PDF</li>
              <li>Print</li>
              <li>Import from Linkedin/Stackoverflow/Github</li>
              <li>Share with an encrypted link</li>
              <li>Save to Dropbox/Drive</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </section>
</template>

<script>
export default {
  data() {
    return {
      actionFile: [
        { icon: 'mode_edit', tooltip: 'Edit', to: '/cv' },
        { icon: 'file_download', tooltip: 'Download', to: '/cv' },
        { icon: 'link', tooltip: 'Generate encypted link', to: '/cv' },
        { icon: 'cloud_upload', tooltip: 'Upload to cloud', to: '/cv' }
      ],
      curriculum: [
        { title: 'My first curriculum', date: '01.01.2016' }
      ],
      templates: [
        { title: 'Default template' }
      ]
    }
  }
}
</script>

<style>
</style>
