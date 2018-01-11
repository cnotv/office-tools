<template>
  <section>
    <v-layout column justify-center align-center mb-4>
      <v-flex xs12 sm8 md6>
        <div class="text-xs-center">
          <logo/>
        </div>
        <v-card>
          <v-card-title class="headline">Welcome!</v-card-title>
          <v-card-text>
            <p>Thank you for using our app!</p>
            <p>This toolkit is meant for daily office tasks, allowing you to have all you need in one place and usable offline. The app is build with Nuxt and PWA support.</p>
            <p>Start now the setup wizard to choose your preferences.</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" nuxt to="/settings">Setup Wizard</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-center align-center class="text-xs-center">
      <v-flex xs12 sm6 md4>
        <v-card>
          <v-card-title class="headline">CV</v-card-title>
          <v-card-text>
            <p>You have 0 documents</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn round flat small fab color="primary" nuxt to="/cv">
              <v-icon>add</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card>
          <v-card-title class="headline">OCR</v-card-title>
          <v-card-text>
            <p>You have 0 documents</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn round flat small fab color="primary" nuxt to="/ocr">
              <v-icon>add</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card>
          <v-card-title class="headline">Invoices</v-card-title>
          <v-card-text>
            <p>You have 0 documents</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn round flat small fab color="primary" nuxt to="/invoice">
              <v-icon>add</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
