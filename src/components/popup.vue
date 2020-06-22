<template>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on: dialog }">
            <!--<v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">-->
                    <v-btn color="#0ea389" dark v-on="{ ...dialog }">
                        <span>Opret bruger</span>
                    </v-btn>
                <!--</template>
            </v-tooltip>-->
        </template>
        <v-card>
            <v-card-title>
                <h2>Opret bruger</h2>
                  <v-spacer></v-spacer>
                    <v-btn color="#0ea389" dark class="mx-0 mt-3" @click="dialog = false">
                        X
                    </v-btn>
            </v-card-title>
            <v-card-text>
                <v-form class="px-5" ref="form">
                    <v-text-field
                    label="Email"
                    v-model="email"
                    :rules="emailRules"
                    ></v-text-field>
                    <v-text-field
                    label="Password"
                    v-model="password"
                    required
                    :rules="passwordRules"
                    ></v-text-field>
                    <v-btn color="#0ea389" dark class="mx-0 mt-3" @click="submit">
                        Opret bruger
                    </v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'Popup',
  data () {
    return {
      dialog: false,
      id: '1',
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'Email er påkrævet',
        v => /.+@.+\..+/.test(v) || 'Email skal være valid'
      ],
      passwordRules: [
        v => !!v || 'Password er påkrævet',
        v => (v && v.length >= 5) || 'Password skal have mindst 5 tegn',
        v => /(?=.*[A-Z])/.test(v) || 'Password skal have et stort bogstav',
        v => /([!@%&?=])/.test(v) || 'Password skal indeholde et specialtegn [!@%&?=]'
      ]
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // eslint-disable-next-line no-console
        console.log(this.email, this.password)
      }
    }
  }
}
</script>
