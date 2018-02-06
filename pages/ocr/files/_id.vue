<template>
  <section
    v-if="getOcr.files[$route.params.id - 1]"
  >
    <v-layout row wrap>

      <v-flex xs12>
        <v-card class="ma-2">
          <v-card-title primary-title>
            <v-btn
              round flat small fab
              color="primary"
              nuxt
              to="/ocr"
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

          <document-actions :type="'ocr'"/>
        </v-card>
      </v-flex>
    </v-layout>
  </section>

  <section v-else>
    <v-btn
      round flat small fab
      color="primary"
      nuxt
      to="/ocr"
    >
      <v-icon>keyboard_arrow_left</v-icon>
    </v-btn>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import documentActions from '@/components/documentActions'

export default {
  components: { documentActions },
  data() {
    return {
      title: '',
      content: ''
    }
  },

  computed: {
    ...mapGetters([
      'getOcr'
    ])
  },

  methods: {
    ...mapActions([
      'updateFile'
    ]),
    updateFile() {
      this.$store.dispatch('updateFile', {
        type: 'ocr',
        id: this.$route.params.id - 1,
        file: {
          id: this.$route.params.id,
          title: this.title || this.getOcr.title + ' (' + this.$route.params.id + ')',
          content: this.content || '',
          date: new Date().toLocaleString()
        }
      }).then(() => this.$router.replace({ path: '/ocr' }))
    }
  },

  created() {
    if (this.getOcr.files[this.$route.params.id - 1]) {
      this.title = this.getOcr.files[this.$route.params.id - 1].title
      this.content = this.getOcr.files[this.$route.params.id - 1].content
    }
  }
}
</script>

<style>
</style>
