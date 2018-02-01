<template>
  <section
    v-if="getCv.files[$route.params.id - 1]"
  >
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
              label="Title"
              v-model="title"
              @keyup.enter="updateFile"
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
              @click="updateFile"
            >
              <v-icon>update</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text>
            <v-flex xs12>
              <v-text-field
                label="Your informations"
                v-model="content"
                @keyup.ctrl.enter="updateFile"
                ref="content"
                counter
                max="600"
                full-width
                multi-line
                single-line
              ></v-text-field>
            </v-flex>
          </v-card-text>

          <v-card-actions>
            <v-btn
              round flat small fab
              v-for="(btn, i) in getGlobal.actionFile"
              :key="i"
              @click=""
            >
              <v-icon>{{ btn.icon }}</v-icon>
            </v-btn>
            <v-btn
              round flat small fab
              @click="deleteFile"
            >
              <v-icon>delete</v-icon>
            </v-btn>
          </v-card-actions>
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
  data() {
    return {
      title: '',
      content: ''
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
      'updateFile',
      'deleteFile'
    ]),
    updateFile() {
      this.$store.dispatch('updateFile', {
        type: 'cv',
        id: this.$route.params.id - 1,
        file: {
          id: this.$route.params.id,
          title: this.title || this.getCv.title + ' (' + this.$route.params.id + ')',
          content: this.content || '',
          date: new Date().toLocaleString()
        }
      }).then(() => this.$router.replace({ path: '/cv' }))
    },
    deleteFile() {
      this.$store.dispatch('deleteFile', {
        type: 'cv',
        id: this.$route.params.id
      }).then(() => this.$router.replace({ path: '/cv' }))
    }
  },

  created() {
    if (this.getCv.files[this.$route.params.id - 1]) {
      this.title = this.getCv.files[this.$route.params.id - 1].title
      this.content = this.getCv.files[this.$route.params.id - 1].content
    }
  }
}
</script>

<style>
</style>
