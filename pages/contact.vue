<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <p class="text-center text-h2">
          Nous Contacter
        </p>
      </v-col>
      </v-row>
      <v-col cols="12">
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
  >

    <form @submit.prevent="submit">
      <v-card class="pa-5" color="#dce0e8">
      <v-row justify="center">
      <v-col cols="6">
      <validation-provider
          v-slot="{ errors }"
          name="Name"
          rules="required"
      >
        <v-text-field
            v-model="Nom"
            :error-messages="errors"
            label="Nom"
            filled
            required
        ></v-text-field>
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
        ></v-text-field>
      </validation-provider>
      </v-col>
      </v-row>

        <v-row justify="center">
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
        ></v-text-field>
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
            ></v-select>
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
        ></v-text-field>
      </validation-provider>
        </v-col>
        </v-row>
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
          ></v-textarea>
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
        ></v-checkbox>
      </validation-provider>
        </v-col>
        <v-col cols="4">
      <v-btn
          block
          class="mr-4"
          color="green"
          type="submit"
          :disabled="invalid"
      >
        submit
      </v-btn>
        </v-col>
      </v-card>
    </form>
  </validation-observer>
      </v-col>
  </v-container>
</template>


<script>
import {required, digits, email, max, regex} from 'vee-validate/dist/rules'
import {extend, ValidationObserver, ValidationProvider, setInteractionMode} from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: 'Ce champ doit faire {length} chiffres.',
})

extend('required', {
  ...required,
  message: 'Ce champ doit etre remplis',
})

extend('max', {
  ...max,
  message: 'ce champ ne peut contenir plus de {length} characters',
})

extend('regex', {
  ...regex,
  message: 'Ce champ doit etre valide',
})

extend('email', {
  ...email,
  message: 'Email doit etre valide',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    Telephone: '',
    email: '',
    Nom: '',
    Prenom: '',
    Probleme: '',
    select: null,
    items: [
      'Adoption',
      'Alert maltraitance',
      'Autre ',

    ],
    checkbox: null,
  }),

  methods: {
    submit() {
      this.$refs.observer.validate()
    },
    clear() {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    },
  },
}
</script>