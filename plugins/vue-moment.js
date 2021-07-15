import Vue from 'vue'
import VueMoment from 'vue-moment'

import moment from 'moment'
require('moment-duration-format')

Vue.use(VueMoment, {
  moment,
})
