<template>
  <document
    :id="this.$route.params.id"
    :type="'ocr'"
    :title="title"
    :content="content"
    :settings="getOcr.settings"
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
      'getOcr'
    ])
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
