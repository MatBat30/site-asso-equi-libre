import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAVdE7dclGbUuJvsWNjUiGBk1R2OKm32Is',
    libraries: 'places'
  }
})
