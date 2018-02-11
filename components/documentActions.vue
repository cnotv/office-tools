<template>
  <v-card-actions class="pa-2 grey lighten-4">
    <v-btn
      round flat small fab
      v-for="(btn, i) in actionFile"
      :key="i"
      @click=""
    >
      <v-icon>{{ btn.icon }}</v-icon>
    </v-btn>
    <v-btn
      round flat small fab
      @click="deleteFile(type)"
    >
      <v-icon>delete</v-icon>
    </v-btn>
  </v-card-actions>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['type'],

  data() {
    return {
      actionFile: [
        { tooltip: 'Print', icon: 'print', click: '' },
        // { tooltip: 'Edit', icon: 'mode_edit', click: '' },
        { tooltip: 'Download', icon: 'file_download', click: '' }
        // { tooltip: 'Generate encypted link', icon: 'link', click: '' },
        // { tooltip: 'Upload to cloud', icon: 'cloud_upload', click: '' },
        // { tooltip: 'Delete', icon: 'delete', click: '' }
      ]
    }
  },

  methods: {
    ...mapActions([
      'deleteFile'
    ]),
    deleteFile(type) {
      this.$store.dispatch('deleteFile', {
        type: type,
        id: this.$route.params.id
      }).then(() => this.$router.replace({ path: '/' + type }))
    }
  }
}
</script>

<style>
</style>