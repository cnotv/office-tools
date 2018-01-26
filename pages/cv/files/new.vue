<template>
  <section>
    <v-layout row wrap>

      <v-flex xs12>
        <v-card class="ma-2">
          <v-card-title primary-title>
            <v-btn
              round flat small fab
              color="primary"
              nuxt
              to="/cv"
            >
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>

            <v-text-field
              ref="title"
              label="Title"
              v-model="title"
              required
              single-line
              full-width
              hide-details
            ></v-text-field>

            <v-btn
              round
              small
              fab
              color="primary"
              @click="addFile"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text>
            <v-flex xs12>
              <v-text-field
                label="Your informations"
                v-model="content"
                counter
                max="600"
                full-width
                multi-line
                single-line
              ></v-text-field>
            </v-flex>
          </v-card-text>

          <v-card-actions>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getCv',
      'getGlobal'
    ])
  },
  methods: {
    ...mapActions([
      'newFile'
    ]),
    addFile() {
      this.$store.dispatch('newFile', {
        type: 'cv',
        file: {
          id: this.getCv.counter,
          title: this.title || this.getCv.title + ' (' + this.getCv.counter + ')',
          content: this.content,
          date: new Date().toLocaleString()
        }
      }).then(() => this.$router.replace({ path: '/cv' }))
    }
  },
  mounted() {
    this.$refs.title.focus()
  }
}
</script>

<style>
</style>
