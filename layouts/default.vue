<template>
  <v-app dark>
    <div class="text-left">
      <v-btn v-if="!drawer" color="primary" dark class="hidden-lg-and-up " @click="drawer = true">
        <v-icon dark>
          mdi-format-list-bulleted-square
        </v-icon>
      </v-btn>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      width="15%"
      clipped
      color="#11111b"
      fixed
      app
    >
      <v-card color="blue" class="rounded-0">
        <p class="pl-4 py-4 text-h5">
          <v-btn v-if="drawer" color="primary" dark class="hidden-lg-and-up" @click="drawer = false">
            <v-icon dark>
              mdi-format-list-bulleted-square
            </v-icon>
          </v-btn>
          Equi-Libre
          <img src="../static/logo-equi-libre.png" height="30%" width="30%" alt="logo">
        </p>
      </v-card>
      <v-list>
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
        <input type="hidden" name="hosted_button_id" value="B9MGUHAECPNJN">
        <input
          type="image"
          src="https://www.braintreepayments.com/images/features/paypal/paypal-button@2x.png"
          width="175px"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Bouton Faites un don avec PayPal"
        >
      </form>
    </v-navigation-drawer>
    <v-main>
      <v-row class="mb-0" justify="center">
        <v-col class="py-0">
          <v-responsive>
            <Nuxt />
          </v-responsive>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Contact from '@/pages/contact'
export default {
  name: 'DefaultLayout',
  // eslint-disable-next-line vue/no-unused-components
  components: { Contact },
  data () {
    return {
      drawer: true,
      items: [
        {
          title: 'Actualité',
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
          title: 'Qui sommes-nous ?',
          to: '/qui_somme-nous'
        },
        {
          icon: 'mdi-handshake',
          title: 'Partenaires',
          to: '/partenairs'
        },
        {
          icon: 'mdi-heart',
          title: 'Dons',
          to: '/dons'
        }
      ],
      title: 'Equi-libre'
    }
  },
  computed: {
    drawerWidth () {
      if (this.drawer) {
        return '450px'
      } else {
        return '250px'
      }
    }
  }
}
</script>
<style>
.paypal{
  position: absolute;
  bottom: 15px;
  left: 15%;
}
</style>
