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
            <v-list-item-title v-text="item.title"/>
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
      <v-toolbar-title class="white--text" v-text="title"/>
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
                class="white--text">
              <v-icon class="white--text pr-2">{{ tab.icon }}</v-icon>
              {{ tab.title }}
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-row class="pb-10 mt-5" justify="center">
        <v-col cols="6">
        <Nuxt/>
        </v-col>
      </v-row>
<!--      <v-footer-->
<!--          padless-->
<!--      >-->
<!--        <v-card-->
<!--            flat-->
<!--            tile-->
<!--            class="indigo lighten-1 white&#45;&#45;text text-center"-->
<!--        >-->
<!--          <v-card-text>-->
<!--            <v-btn-->
<!--                v-for="icon in icons"-->
<!--                :key="icon"-->
<!--                class="mx-4 white&#45;&#45;text"-->
<!--                icon-->
<!--            >-->
<!--              <v-icon size="24px">-->
<!--                {{ icon }}-->
<!--              </v-icon>-->
<!--            </v-btn>-->
<!--          </v-card-text>-->

<!--          <v-card-text class="white&#45;&#45;text pt-0">-->
<!--            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.-->
<!--          </v-card-text>-->

<!--          <v-divider></v-divider>-->

<!--          <v-card-text class="white&#45;&#45;text">-->
<!--            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>-->
<!--          </v-card-text>-->
<!--        </v-card>-->
<!--      </v-footer>-->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
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