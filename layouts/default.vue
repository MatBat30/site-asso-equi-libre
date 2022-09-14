<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      width="14vw"
      clipped
      color="#e6e9ef"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      elevation="0"
      color="#7287fd"
      fixed
      app
    >
      <v-toolbar-title class="white--text">
        {{ title }}
      </v-toolbar-title>
      <v-row justify="center">
        <v-col cols="5">
          <v-tabs
            background-color="#7287fd"
            color="white"
            centered
            grow
          >
            <v-tab
              v-for="(tab, t) in tabs"
              :key="t"
              :to="tab.to"
              class="white--text"
            >
              <v-icon class="white--text pr-2">
                {{ tab.icon }}
              </v-icon>
              {{ tab.title }}
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-row class="pb-10 mt-5" justify="center">
        <v-col cols="6">
          <Nuxt />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      tabs: [
        {
          title: 'News',
          icon: 'mdi-newspaper'
        },
        {
          title: 'Contact',
          to: '/contact',
          icon: 'mdi-email'
        },
        {
          title: 'Nous aider',
          icon: 'mdi-heart'
        }
      ],
      items: [
        {
          icon: 'mdi-currency-eur',
          title: 'Dons',
          to: '/'
        },
        {
          icon: 'mdi-book-open-blank-variant',
          title: 'Historique',
          to: '/inspire'
        },
        {
          icon: 'mdi-shield',
          title: 'Protection des animaux',
          to: '/inspire'
        },
        {
          icon: 'mdi-book',
          title: 'Biographie',
          to: '/inspire'
        },
        {
          icon: 'mdi-handshake',
          title: 'Partenairs',
          to: '/inspire'
        },
        {
          icon: 'mdi-email',
          title: 'Contact',
          to: '/inspire'
        }
      ],
      title: 'Equi-libre'
    }
  }
}
</script>
