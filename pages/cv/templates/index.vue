<template>
  <section>
    <v-layout row wrap>

      <v-flex xs12>
        <v-card class="ma-2">
          <v-toolbar>
            <v-btn
              round flat small fab
              color="primary"
              nuxt
              to="/cv"
            >
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
            <v-toolbar-title>Template - </v-toolbar-title>
          </v-toolbar>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getCv',
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
