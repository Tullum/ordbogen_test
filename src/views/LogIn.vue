/* eslint-disable eol-last */
<template>
    <div id="login">
        <v-app id="inspire">
            <v-content>
                <v-container fluid fill-height>
                    <v-layout align-center justify-center>
                        <v-flex xs12 sm8 md4>
                            <v-card  class="elevation-12">
                                <v-toolbar color="#0ea389" dark id="logintop">
                                    <v-spacer></v-spacer>
                                    <v-toolbar-title>Velkommen til Ordbogen.com</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field
                                        label="Email"
                                        name="Email"
                                        required
                                        :rules="emailRules"
                                        ></v-text-field>
                                        <v-text-field
                                        label="Password"
                                        name="password"
                                        required
                                        :rules="passwordRules"
                                        ></v-text-field>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                    color="#0ea389"
                                    dark
                                    v-for="link in linksenter"
                                    :key="link.route"
                                    :to="link.route"
                                    >Login</v-btn>
                                    <v-spacer></v-spacer>
                                      <Popup />
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
import Popup from '../components/popup.vue'

export default {
  name: 'Login',
  components: { Popup },
  data () {
    return {
      linksenter: [
        {
          route: '/home'
        }
      ],
      linkserror: [
        {
          route: '/'
        }
      ],
      emailRules: [
        v => !!v || 'Email er påkrævet',
        v => /.+@.+\..+/.test(v) || 'E-mail skal være gyldig'
      ],
      passwordRules: [
        v => !!v || 'Password is requiered',
        v => (v && v.length >= 5) || 'Password skal have mere 5+ tegn',
        v => /(?=.*[A-Z])/.test(v) || 'Password skal indeholde et stort tegn',
        v => /([!@$%?])/.test(v) || 'Password skal indeholde et special tegn [!@#$%?]'
      ]
    }
  }
}
</script>
