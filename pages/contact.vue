<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <p class="text-center text-h2">
          Nous Contacter
        </p>
      </v-col>
      <v-col cols="12">
        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
        >
          <form
            ref="contact"
            @submit.prevent="submit"
          >
            <v-card class="pa-5" color="#dce0e8">
              <v-row justify="center">
                <v-col cols="6">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required"
                  >
                    <!--          rules="required|max:100"-->
                    <!--      >-->
                    <v-text-field
                      v-model="Nom"
                      :error-messages="errors"
                      label="Nom"
                      filled
                      required
                    />
                  </validation-provider>
                </v-col>
                <v-col cols="6">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required"
                  >
                    <v-text-field
                      v-model="Prenom"
                      :error-messages="errors"
                      label="Prénom"
                      filled
                      required
                    />
                  </validation-provider>
                </v-col>
                <v-col cols="6">
                  <validation-provider
                    v-slot="{ errors }"
                    name="phoneNumber"
                    :rules="{
                      required: true,
                      digits: 10,
                      regex: '^[0][\\d]+$'
                    }"
                  >
                    <v-text-field
                      v-model="Telephone"
                      :counter="10"
                      :error-messages="errors"
                      label="Numéro de téléphone"
                      filled
                      required
                    />
                  </validation-provider>
                </v-col>
                <v-col cols="6">
                  <validation-provider
                    v-slot="{ errors }"
                    name="select"
                    rules="required"
                  >
                    <v-select
                      v-model="select"
                      :items="items"
                      :error-messages="errors"
                      label="type de contact"
                      data-vv-name="select"
                      required
                      filled
                    />
                  </validation-provider>
                </v-col>
                <v-col cols="12">
                  <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="email"
                      :error-messages="errors"
                      label="E-mail"
                      required
                      filled
                    />
                  </validation-provider>
                </v-col>
                <v-col cols="12">
                  <validation-provider
                    v-slot="{ errors }"
                    name="probleme"
                    rules="required"
                  >
                    <v-textarea
                      v-model="Probleme"
                      :error-messages="errors"
                      label="Description la plus détaillée possible"
                      required
                      filled
                    />
                  </validation-provider>
                </v-col>
                <v-col cols="12">
                  <validation-provider
                    v-slot="{ errors }"
                    rules="unrequired"
                    name="checkbox"
                  >
                    <v-checkbox
                      v-model="checkbox"
                      :error-messages="errors"
                      value="1"
                      label="vous accepter que vos coordonée soit divulguée au authoritées compeztante en cas de besoin ."
                      type="checkbox"
                      required
                    />
                  </validation-provider>
                </v-col>
                <v-col cols="4">
                  <v-btn
                    block
                    class="mr-4"
                    color="green"
                    type="submit"
                    :disabled="invalid"
                    @click.prevent="send"
                  >
                    submit
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </form>
        </validation-observer>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="success"
      absolute
      color="success"
      outlined
    >
      Message envoyé
    </v-snackbar>
    <v-snackbar
      v-model="error"
      absolute
      color="error"
      outlined
    >
      Une erreur est survenue
    </v-snackbar>
  </v-container>
</template>
<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: 'Ce champ doit faire {length} chiffres.'
})

extend('required', {
  ...required,
  message: 'Ce champ doit etre remplis'
})

extend('max', {
  ...max,
  message: 'ce champ ne peut contenir plus de {length} characters'
})

extend('regex', {
  ...regex,
  message: 'Ce champ doit etre valide'
})

extend('email', {
  ...email,
  message: 'Email doit etre valide'
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    success: false,
    error: false,
    Telephone: '',
    email: '',
    Nom: '',
    Prenom: '',
    Probleme: '',
    select: null,
    items: [
      'Adoption',
      'Alert maltraitance',
      'Autre '

    ],
    checkbox: null
  }),

  methods: {
    submit () {
      this.$refs.observer.validate()
    },
    send () {
      this.$axios.$post('/mail/send', {
        from: this.email,
        subject: 'Contact depuis le site',
        text: 'Nom: ' + this.Nom + '\n' + 'prenom: ' + this.Prenom + '\n' + 'numéro de téléphone: ' + this.Telephone + '\n' + 'problème:' + this.select + '\n \n' + this.Probleme
      }).then((result) => {
        if (result === 'OK') {
          this.success = true
        }
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Error when sending mail :')
        // eslint-disable-next-line no-console
        console.error(err)
        this.error = true
      })
    }
  }
}
</script>
