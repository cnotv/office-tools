<template>
  <section>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4>
        <v-card class="ma-2">
          <v-toolbar>
            <v-toolbar-title>{{ tasks.title }}</v-toolbar-title>
          </v-toolbar>

          <v-list>
            <v-list-tile
              v-for="(item, i) in tasks.options"
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
            <v-toolbar-title>{{ documents.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn round flat small fab color="primary">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list subheader>
            <v-subheader inset>You have {{ documents.files.length }} {{ documents.name }}</v-subheader>
            <v-list-tile
              avatar
              v-for="(item, i) in documents.files"
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
    </v-layout>
  </section>
</template>

<script>
export default {
  data() {
    return {
      actionFile: [
        { icon: 'print', tooltip: 'Print', to: '/cv' },
        { icon: 'mode_edit', tooltip: 'Edit', to: '/cv' },
        { icon: 'file_download', tooltip: 'Download', to: '/cv' },
        { icon: 'link', tooltip: 'Generate encypted link', to: '/cv' },
        { icon: 'cloud_upload', tooltip: 'Upload to cloud', to: '/cv' }
      ],
      documents: {
        name: 'documents',
        title: 'Your documents',
        files: [
          { title: 'Document 0001', date: '01.01.2016' },
          { title: 'Document 0002', date: '02.01.2016' }
        ]
      },
      tasks: {
        title: 'Your tasks',
        options: [
          { title: 'Load from file', icon: 'file', to: '/' },
          { title: 'Load from URL', icon: 'link', to: '/' },
          { title: 'Load from camera', icon: 'camera', to: '/' },
          { title: 'Convert document', icon: '', to: '/' },
          { title: 'Translate document', icon: '', to: '/' }
        ]
      }
    }
  }
}
</script>

<style>
</style>