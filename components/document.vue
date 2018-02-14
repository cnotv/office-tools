<template>
  <section
    v-if="id"
  >
    <v-layout row wrap>

      <v-flex xs12>
        <v-card class="ma-2">
          <v-card-title
            primary-title
            class="px-4 grey lighten-4"
          >
            <v-icon x-large>{{icon}}</v-icon>
            <v-text-field
              label="Title"
              ref="title"
              v-model="title"
              @keyup.enter="updateFile"
              required
              single-line
              full-width
              hide-details
            ></v-text-field>

            <v-btn
              round flat small fab
              color="primary"
              nuxt
              :to="'/' + type"
            >
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
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
              <document-info :infos="settings"/>

              <div
                class="quill-editor" 
                v-model="content"
                :content="content"
                @change="onEditorChange($event)"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
                @keyup.ctrl.enter="updateFile"
                v-quill:myQuillEditor="editorOption"
              >
              </div>

              <slot name="document-content"></slot>
            </v-flex>
          </v-card-text>

          <document-actions :type="type"/>
        </v-card>
      </v-flex>
    </v-layout>
  </section>

  <section v-else>
    <v-btn
      round flat small fab
      color="primary"
      nuxt
      :to="'/' + type"
    >
      <v-icon>keyboard_arrow_left</v-icon>
    </v-btn>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import documentActions from '@/components/documentActions'
import documentInfo from '@/components/documentInfo'
import documentEditor from '@/components/documentEditor'

export default {
  components: { documentActions, documentInfo, documentEditor },

  props: [
    'id',
    'type',
    'title',
    'content',
    'icon',
    'action',
    'settings'
  ],

  data() {
    return {
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            [{ 'size': ['small', false, 'large'] }],
            ['bold', 'italic'],
            [{'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image']
          ]
        }
      }
    }
  },

  computed: {
    ...mapGetters([
      'getSettings'
    ])
  },

  methods: {
    ...mapActions([
      'newFile',
      'updateFile'
    ]),
    updateFile() {
      this.$store.dispatch(this.action, {
        type: this.type,
        id: this.id - 1,
        file: {
          id: this.id,
          title: this.title || 'New Document (' + this.id + ')',
          content: this.content || '',
          date: new Date().toLocaleString()
        }
      }).then(() => this.$router.replace({ path: '/' + this.type }))
    },
    onEditorBlur(editor) {
    },
    onEditorFocus(editor) {
    },
    onEditorReady(editor) {
    },
    onEditorChange({ editor, html, text }) {
      this.content = html
    }
  },

  mounted() {
    this.$refs.title.focus()
  }
}
</script>

<style>
</style>
