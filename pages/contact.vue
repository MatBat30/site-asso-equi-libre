<template>
  <v-container fluid>
    <v-col col="12">
      <v-row class="xs" justify="center">
        <v-col cols="12">
          <p class="text-center text-h2">
            Nous Contacter
          </p>
        </v-col>
        <v-row class="my-5 pa-2">
          <v-col cols="12">
            <v-row align-content="stretch">
              <v-col cols="5">
                <v-row>
                  <p class="text-justify">
                    Notre association se consacre à la protection et au sauvetage des chevaux et animaux de ferme, en cas de maltraitance, abandon, négligence, cession volontaire ou pour de la retraite. Nous croyons que tous les animaux méritent une vie sûre, aimante et respectueuse, et nous travaillons sans relâche pour protéger ces animaux vulnérables.

                    En tant qu'association, nous avons la capacité d'agir librement et rapidement pour aider les animaux, mais nous reconnaissons également l'importance d'une approche collaborative et coordonnée. Nous travaillons donc en étroite collaboration avec les services de l'Etat en cas de besoin pour maximiser notre impact afin de les protéger .

                    Notre travail ne se limite pas à sauver les animaux de la maltraitance et de la négligence. Nous offrons également un refuge et des soins à long terme pour les animaux qui ont besoin d'un foyer aimant et sûr. Nous travaillons avec des vétérinaires qualifiés et des experts en bien-être animal pour garantir que les animaux sont soignés de manière appropriée et réhabilités de manière éthique.
                  </p>
                </v-row>
                <v-col cols="10">
                  <v-card class="col-10" style="border: 1px solid white">
                    <div>
                      <GmapMap :center="{lat: 44.292722463057046, lng: 4.4751635920859085}" :zoom="17" style="width: 100%; height: 400px;" />
                    </div>
                  </v-card>
                </v-col>
              </v-col>

              <v-col
                class="pa-2"
                cols="6"
                sm="6"
                md="6"
                lg="6"
                offset="1"
              >
                <v-card class="pa-5 style=" style="border: 1px solid white">
                  <validation-observer
                    ref="observer"
                    v-slot="{ invalid }"
                  >
                    <form
                      ref="contact"
                      @submit.prevent="submit"
                    >
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
                            />
                          </validation-provider>
                        </v-col>
                        <v-col cols="6" />
                        <v-container>
                          <v-divider />
                        </v-container>
                        <v-col class="pr-0" cols="11">
                          <validation-provider
                            v-slot="{ errors }"
                            name="problème"
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
                        <v-col class="pl-1" cols="1">
                          <v-tooltip top>
                            <template #activator="{ on, attrs }">
                              <v-icon
                                v-bind="attrs"
                                v-on="on"
                              >
                                mdi-help-circle
                              </v-icon>
                            </template>
                            <p class="ma-1">
                              -nom et prénom du propriétaire.
                            </p>
                            <p class="ma-1">
                              -description incident.
                            </p>
                            <p class="ma-1">
                              -description lieu de vie.
                            </p>
                            <p class="ma-1">
                              -categorie de l'urgence (suspect ,inquiétant,grave,vitale).
                            </p>
                            <p class="ma-1">
                              -depot de pleinte effectuer si oui quelle service ?
                            </p>
                            <p class="ma-1">
                              -nom et numero de la mairie affilié au lieu.
                            </p>
                            <p class="ma-1">
                              -nom et numero de la police munnicipale affilié au lieu.
                            </p>
                          </v-tooltip>
                        </v-col>
                        <v-col cols="6">
                          <v-file-input
                            ref="aled"
                            v-model="files"
                            placeholder="Déposer vos documents et photos"
                            label="documents + photos"
                            multiple
                            filled
                          >
                            <template #selection="{ text }">
                              <v-chip
                                small
                                label
                                color="primary"
                              >
                                {{ text }}
                              </v-chip>
                            </template>
                          </v-file-input>
                        </v-col>
                        <v-col cols="6" />
                        <v-col cols="12">
                          <validation-provider
                            v-slot="{ errors }"
                            rules="required"
                            name="checkbox"
                          >
                            <v-checkbox
                              v-model="checkbox"
                              :error-messages="errors"
                              value="1"
                              label="vous accépter que vos coordonée soit comuniqué au autoritées compétante en cas de besoin ."
                              type="checkbox"
                            />
                          </validation-provider>
                        </v-col>
                        <v-col cols="4">
                          <v-btn
                            block
                            class="black--text"
                            color="#a6e3a1"
                            type="submit"
                            :disabled="invalid"
                            @click.prevent="send"
                          >
                            submit
                          </v-btn>
                        </v-col>
                        <v-fade-transition>
                          <v-progress-linear v-show="loading" indeterminate rounded />
                        </v-fade-transition>
                      </v-row>
                    </form>
                  </validation-observer>
                </v-card>
              </v-col>
            </v-row>
            <v-snackbar
              v-model="success"
              light
              app
              top
              color="#a6e3a1"
            >
              Message envoyé
            </v-snackbar>
            <v-snackbar
              v-model="error"
              light
              app
              top
              absolute
              color="#f38ba8"
            >
              Une erreur est survenue
            </v-snackbar>
          </v-col>
        </v-row>
      </v-row>
    </v-col>
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
  message: 'Ce champ doit être remplis'
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
    loading: false,
    value: 0,
    Telephone: '',
    email: '',
    Nom: '',
    Prenom: '',
    Probleme: '',
    location: '',
    files: [],
    convertedFiles: [],
    select: '',
    items: [
      'Adoption',
      'Alert maltraitance',
      'Autre '

    ],
    checkbox: null,
    apiKey: 'AIzaSyAVdE7dclGbUuJvsWNjUiGBk1R2OKm32Is'
  }),
  async send () {
    this.loading = true
    await this.convertFilesToBase64()
    // console.log(this.convertedFiles)
    // let formData = new FormData();
    //
    // formData.append('from', this.email);
    // formData.append('subject', 'Contact depuis le site, ' + this.select);
    // formData.append('text', 'Nom: ' + this.Nom + '\n' + 'prenom: ' + this.Prenom + '\n' + 'numéro de téléphone: ' + this.Telephone + '\n' + 'problème:' + this.select + '\n \n' + this.Probleme);
    // formData.append('attachments', this.convertedFiles);

    this.$axios.$post('/mail/send', {
      from: this.email,
      subject: 'Contact depuis le site, ' + this.select,
      text: 'Nom: ' + this.Nom + '\n' + 'prenom: ' + this.Prenom + '\n' + 'numéro de téléphone: ' + this.Telephone + '\n' + 'problème:' + this.select + '\n \n' + this.Probleme,
      attachments: this.convertedFiles
    }).then((result) => {
      if (result === 'OK') {
        this.success = true
        this.loading = false
      }
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Error when sending mail :')
      // eslint-disable-next-line no-console
      console.error(err)
      this.error = true
      this.loading = false
    })
  },
  async convertFilesToBase64 () {
    this.convertedFiles = []
    for (const file of this.files) {
      await this.convertFile(file).then((base64Result) => {
        this.convertedFiles.push({ filename: file.name, path: base64Result })
      })
    }
  },
  convertFile (file) {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        resolve(e.target.result)
      }
      reader.readAsDataURL(file)
    })
  }
}
</script>
