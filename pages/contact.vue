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
        @submit.prevent="submit"
        ref="contact"
    >
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
        <v-container>
          <v-divider></v-divider>
        </v-container>

        <v-col cols="6">
          <validation-provider
              v-slot="{ errors }"
              name="localisation"
              rules="required"
          >
            <v-text-field
                v-model="location"
                :error-messages="errors"
                label="localisation de l'animal"
                filled
                required
            ></v-text-field>
          </validation-provider>
        </v-col>
        <v-col cols="6"></v-col>

        <v-col cols="12">
        <validation-provider
            v-slot="{ errors }"
            name="probleme"
            rules="required"
        >
          <v-col class="pa-0 pl-1" cols="1">
            <v-tooltip top>
              <template #activator="{ on, attrs }">
                <v-icon
                    v-bind="attrs"
                    v-on="on"
                >
                  mdi-help-circle
                </v-icon>
              </template>
              <span>-description incident.
                -nom et prénom du propriétaire.
                -description lieu de vie.
                -categorie de l'urgence (suspect ,inquiétant,grave,vitale).
                -depot de pleinte effectuer si oui quelle service ?
                -nom et numero de la mairie affilié au lieu .
                -nom et numero de la police munnicipale affilié au lieu.</span>
            </v-tooltip>
          </v-col>

          <v-textarea
              v-model="Probleme"
              :error-messages="errors"
              label="Description la plus détaillée possible"
              required
              filled
          ></v-textarea>
        </validation-provider>
        </v-col>
        <template>
          <v-file-input
              v-model="files"
              placeholder="Upload your documents"
              label="documents + photos"
              multiple
              prepend-icon="mdi-paperclip"
          >
            <template v-slot:selection="{ text }">
              <v-chip
                  small
                  label
                  color="primary"
              >
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
        </template>
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
            label="vous accépter que vos coordonée soit divulguée au autoritées compétante en cas de besoin ."
            type="checkbox"
            unrequired
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
    success: false,
    error: false,
    Telephone: '',
    email: '',
    Nom: '',
    Prenom: '',
    Probleme: '',
    location: '',
    files: '',
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
    send () {
      this.$axios.$post('/mail/send', {
        from: this.email,
        subject: 'Contact depuis le site, '+this.select ,
        text: 'Nom: ' + this.Nom + '\n' + 'prenom: ' + this.Prenom + '\n' + 'numéro de téléphone: ' + this.Telephone + '\n' + 'problème:' + this.select + '\n \n' + this.Probleme+ '\n'+ this.files,
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
  },
}
</script>