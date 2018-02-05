<template>
  <v-card class="ma-2">
    <v-toolbar>
      <v-toolbar-title>Common info</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        round
        small
        fab
        color="primary"
        @click="updateSettings"
      >
        <v-icon>update</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      <v-list>
        <v-list-tile>
          Attach logo
        </v-list-tile>

        <v-list-tile
          v-for="(item, i) in fields"
          :key="i"
          v-if="item"
        >
          <v-text-field
            v-model="fields[i].value"
            :label="item.name"
            @keyup.enter="updateSettings"
          ></v-text-field>
        </v-list-tile>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['fields'],
  methods: {
    ...mapActions([
      'updateSettings'
    ])
  }
}
</script>

<style>
</style>