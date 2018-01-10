<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <logo/>
      </div>
      <v-card>
        <v-card-title class="headline">Toolkit for daily office tasks made in Nuxt with PWA support</v-card-title>
        <v-card-text>
          <p>Group of web apps for daily tasks</p>
          <div class="text-xs-right">
            <em><small>&mdash;</small></em>
            <a href="https://cnotv.xyz/" target="_blank">
              <em><small>cnotv</small></em>
            </a>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/settings">Setup Wizard</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
