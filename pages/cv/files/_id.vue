<template>
  <section
    v-if="getCv.files[$route.params.id - 1]"
  >
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
            <v-toolbar-title>#{{ getCv.files[$route.params.id - 1].id }} - {{ getCv.files[$route.params.id - 1].title }}</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            {{ getCv.files[$route.params.id - 1].content }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
  <section v-else>
    <v-btn
      round flat small fab
      color="primary"
      nuxt
      to="/cv"
    >
      <v-icon>keyboard_arrow_left</v-icon>
    </v-btn>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['title'],
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
