<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      width="14vw"
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
      items: [
        {
          title: 'News',
          to: '/News',
          icon: 'mdi-newspaper'

        },
        {
          title: 'Contact',
          to: '/contact',
          icon: 'mdi-email'
        },
        {
          title: 'Nous aider',
          icon: 'mdi-heart',
          to: '/Dons'
        },
        {
          icon: 'mdi-book-open-blank-variant',
          title: 'Historique',
          to: '/Historique'
        },
        {
          icon: 'mdi-shield',
          title: 'Protection des animaux',
          to: '/Protection des animaux'
        },
        {
          icon: 'mdi-book',
          title: 'Biographie',
          to: '/Biographie'
        },
        {
          icon: 'mdi-handshake',
          title: 'Partenairs',
          to: '/Partenairs'
        }
      ],
      title: 'Equi-libre'
    }
  }
}
</script>
