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
                  v-model="email"
                ></v-text-field>
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile>
                <v-text-field
                  label="Name"
                  v-model="name"
                ></v-text-field>
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile>
                <v-text-field
                  label="Phone"
                  v-model="phone"
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

          <v-card-text>
            <v-list>
              <v-list-tile>
                <v-btn>
                  Linkedin
                  <v-icon right>link</v-icon>
                </v-btn>
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile>
                <v-btn>
                  Stackoverflow
                  <v-icon right>link</v-icon>
                </v-btn>
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile>
                <v-btn>
                  Github
                  <v-icon right>link</v-icon>
                </v-btn>
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card class="ma-2">
          <v-toolbar>
            <v-toolbar-title>Data</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-list>
              <v-list-tile>
                <v-btn flat>Export JSON</v-btn>
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile>
                <v-btn flat>Import with link</v-btn>
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile>
                <v-btn flat>Export with link</v-btn>
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile>
                <v-btn color="error" dark>Reset</v-btn>
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card class="ma-2">
          <v-toolbar>
            <v-toolbar-title>To do</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="px-4">
            <ul>
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
    </v-layout>
  </section>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>
</style>
