<template>
  <document
    :id="getOcr.counter"
    :type="'ocr'"
    :title="title"
    :content="content"
    :settings="getOcr.settings"
    :icon="'find_in_page'"
    :action="'newFile'"
    slot="document-content"
  ></document>
</template>

<script>
import { mapGetters } from 'vuex'
import document from '@/components/document'

export default {
  components: { document },
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
  }
}
</script>

<style>
</style>
