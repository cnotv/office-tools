<template>
  <document
    :id="this.$route.params.id"
    :type="'invoice'"
    :title="title"
    :content="content"
    :settings="getInvoice.settings"
    :icon="'receipt'"
  />
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
  },

  created() {
    if (this.getInvoice.files[this.$route.params.id - 1]) {
      this.title = this.getInvoice.files[this.$route.params.id - 1].title
      this.content = this.getInvoice.files[this.$route.params.id - 1].content
    }
  }
}
</script>

<style>
</style>
