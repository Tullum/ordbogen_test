<template>
    <v-footer absolute color="#0ea389" class="font-weight-medium" fixed>
      <v-col class="text-center" col="12">
        <v-img
          :src="require('../assets/favicon2.jpg')"
          class="my-3"
          contain
          height="50"
        />
      </v-col>
    </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>
