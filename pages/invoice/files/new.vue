<template>
  <document
    :id="getInvoice.counter"
    :type="'invoice'"
    :title="title"
    :content="content"
    :settings="getInvoice.settings"
    :icon="'receipt'"
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
      'getInvoice'
    ])
  }
}
</script>

<style>
</style>
