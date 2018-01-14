<template>
  <section>
    <v-layout column justify-center align-center mb-4>
      <v-flex xs12 sm8 md6>
        <div class="text-xs-center">
          <logo/>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="text-xs-center">

      <v-flex xs12 sm6 md4>
        <v-card class="ma-2">
          <v-toolbar>
            <v-icon>portrait</v-icon>
            <v-toolbar-title>CV</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn round flat small fab color="primary" nuxt to="/cv">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text class="mt-2">
            <p>You have 0 documents</p>
          </v-card-text>

          <v-toolbar>
            <v-toolbar-title>To do</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="px-4">
            <ul class="text-xs-left">
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
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card class="ma-2">
          <v-toolbar>
            <v-icon>find_in_page</v-icon>
            <v-toolbar-title>OCR</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn round flat small fab color="primary" nuxt to="/cv">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text class="mt-2">
            <p>You have 0 documents</p>
          </v-card-text>

          <v-toolbar>
            <v-toolbar-title>To do</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="px-4">
            <ul class="text-xs-left">
              <li>OCR from file</li>
              <li>OCR from URL</li>
              <li>OCR from photo/cam</li>
              <li>Translation (online only)</li>
              <li>Text to speach</li>
              <li>Settings</li>
              <li>Editor</li>
              <li>Generate PDF</li>
              <li>Print</li>
              <li>Share with an encrypted link</li>
              <li>Save to Dropbox/Drive</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card class="ma-2">
          <v-toolbar>
            <v-icon>receipt</v-icon>
            <v-toolbar-title>Invoices</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn round flat small fab color="primary" nuxt to="/cv">
              <v-icon>add</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text class="mt-2">
            <p>You have 0 documents</p>
          </v-card-text>

          <v-toolbar>
            <v-toolbar-title>To do</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="px-4">
            <ul class="text-xs-left">
              <li>Create workgroup</li>
              <li>Settings</li>
              <li>Create themes</li>
              <li>Create template</li>
              <li>Invoices generator</li>
              <li>CRUD Invoices</li>
              <li>Editor</li>
              <li>Generate PDF</li>
              <li>Print</li>
              <li>Share with an encrypted link</li>
              <li>Save to Dropbox/Drive</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card class="ma-2">
          <v-toolbar>
            <v-icon>settings</v-icon>
            <v-toolbar-title>Settings</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="px-4">
            <ul class="text-xs-left">
              <li>Default settings object</li>
              <li>Store data locally</li>
              <li>Registration and autentication</li>
              <li>Login with social</li>
              <li>Link socials</li>
              <li>Attach logo with crop</li>
              <li>Edit shareabledData</li>
              <li>Edit common areas</li>
              <li>Export data in JSON</li>
              <li>Export data encrypted</li>
              <li>Reset</li>
              <li>Themes</li>
              <li>Setting Wizard</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card class="ma-2">
          <v-toolbar>
            <v-icon>user</v-icon>
            <v-toolbar-title>Account</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="px-4">
            <ul class="text-xs-left">
              <li>Store data</li>
              <li>Registration</li>
              <li>Autentication</li>
              <li>Reset</li>
              <li>Edit</li>
              <li>Delete</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-dialog v-model="getGlobal.dialog" max-width="500">
      <v-card>
        <v-card-title class="headline">Welcome!</v-card-title>
        <v-card-text>
          <p>Thank you for using our app!</p>
          <p>This toolkit is meant for daily office tasks, allowing you to have all you need in one place and usable offline. The app is build with Nuxt and PWA support.</p>
          <p>Start now the setup wizard to choose your preferences.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click.native="getGlobal.dialog = !getGlobal.dialog">Ok, whatever</v-btn>
          <v-btn color="primary" nuxt to="/settings">Setup Wizard</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    ...mapGetters([
      'getGlobal'
    ])
  },
  methods: {
    ...mapActions([
      'switchOption'
    ])
  },
  mounted() {
    if (!window.localStorage.getItem('vuex')) {
      this.$store.dispatch('switchOption', this.$store.state.global.dialog)
    }
  }
}
</script>
