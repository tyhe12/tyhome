import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#f44336',
        secondary: '#1b1e28',
        accent: '#e5dada'
      }
    }
  }
})
