<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      width="250px"
      clipped
      color="#11111b"
      fixed
      app
    >
      <v-card color="blue" class="rounded-0">
        <p class="pl-4 py-4 text-h5">
          Equi-Libre
        </p>
      </v-card>
      <v-list>
        <v-list-group
            :value="true"
            no-action
            prepend-icon="mdi-heart"
        >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Nous aider</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
            v-for="(don, d) in dons"
            :key="d"
            :to="don.to"
            link
        >
          <v-list-item-title>{{don.type}}</v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
        </v-list-group>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
          <form action="https://www.paypal.com/donate" method="post" target="_top" class="paypal">
            <input type="hidden" name="hosted_button_id" value="B9MGUHAECPNJN" />
            <input type="image" src="https://www.braintreepayments.com/images/features/paypal/paypal-button@2x.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Bouton Faites un don avec PayPal" width="75%"/>
            <img alt="" border="0" src="https://www.paypal.com/fr_FR/i/scr/pixel.gif" width="1" height="1" />
          </form>

    </v-navigation-drawer>
    <v-main>
      <v-row class="mb-0" justify="center">
        <v-col class="py-0" cols="6">
          <Nuxt />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Contact from '@/pages/contact'
export default {
  name: 'DefaultLayout',
  components: { Contact },
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      dons: [
        {
          type: 'Dons monétaires',
          to: '/dons'
        },
        {
          type: 'Dons physique'
        },
      ],
      items: [
        {
          title: 'News',
          to: '/',
          icon: 'mdi-newspaper'

        },
        {
          title: 'Contact',
          to: '/contact',
          icon: 'mdi-email'
        },
        {
          icon: 'mdi-shield',
          title: 'protection des animaux',
          to: '/Protection des animaux'
        },
        {
          icon: 'mdi-book',
          title: 'Qui somme-nous ?',
          to: '/qui_somme-nous'
        },
        {
          icon: 'mdi-handshake',
          title: 'Partenairs',
          to: '/partenairs'
        }
      ],
      title: 'Equi-libre'
    }
  }
}
</script>
<style>
.paypal{
  position: absolute;
  bottom: 20px;
  left: 25%;
}
</style>