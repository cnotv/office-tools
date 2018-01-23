<template>
  <v-list-tile class="input-file">
    <input type="file" name="load-file" id="load-file">
    <label for="load-file">Load from file</label>
  </v-list-tile>
</template>

<script>
  
</script>

<style scoped>
.input-file {
  position: relative;
}
.input-file input {
  position: absolute;
  width: 100%;
  opacity: 0;
  z-index: -1;
}
.input-file label {
  width: 100%;
  cursor: pointer;
}
</style>