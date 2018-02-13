
<template>
  <div
    class="quill-editor" 
    v-model="content"
    :content="content"
    @change="onEditorChange($event)"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
    v-quill:myQuillEditor="editorOption">
  </div>
</template>

<script>
export default {
  props: [
    'content'
  ],
  data() {
    return {
      content: '',
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
  methods: {
    onEditorBlur(editor) {
    },
    onEditorFocus(editor) {
    },
    onEditorReady(editor) {
    },
    onEditorChange({ editor, html, text }) {
      this.content = html
    }
  }
}
</script>

<style scoped>
.quill-editor {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}
</style>
