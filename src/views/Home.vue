<template>
  <div class="home">
    <Navbar />
    <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/ordbogen_logo.png')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Velkommen til ordbogen!
        </h1>

        <p class="subheading font-weight-regular">
          Alle ønskede informationer ses i skemaet nedenfor
        </p>
      </v-col>
    </v-row>
    </v-container>
      <v-container class="my-10">
        <h1 class="subheading greay--text">Bruger</h1>
      <v-expansion-panels>
        <v-expansion-panel v-for="bruger in brugere" :key="bruger.email">
          <v-expansion-panel-header>{{
            bruger.email
          }}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div>Password: {{ bruger.kodeord }}</div>
            <div><Popup /></div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
   <Footer />
   </div>
</template>

<script>
// @ is an alias to /src
import Popup from '@/components/popup.vue'
import Navbar from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'bruger',
  components: { Navbar, Popup, Footer },
  data () {
    return {
      brugere: [
        {
          email: 'bob@jf.dk',
          kodeord: 123
        },
        {
          email: 'bob@jf.dk',
          kodeord: 123
        },
        {
          email: 'bob@jf.dk',
          kodeord: 123
        }
      ]
    }
  }
}
</script>
