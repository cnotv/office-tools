<template>
  <document
    :id="this.$route.params.id"
    :type="'cv'"
    :title="title"
    :content="content"
    :settings="getCv.settings"
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
      'getCv'
    ])
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
