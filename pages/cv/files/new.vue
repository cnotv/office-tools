<template>
  <document
    :id="getCv.counter"
    :type="'cv'"
    :title="title"
    :content="content"
    :settings="getCv.settings"
    :icon="'portrait'"
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
      'getCv'
    ])
  }
}
</script>

<style>
</style>
