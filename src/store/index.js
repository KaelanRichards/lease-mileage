
import { createStore, createLogger } from 'vuex'
import leaseInfo from "./modules/lease-info";

const debug = process.env.NODE_ENV !== 'production'

export const store = createStore({
  modules: {
    leaseInfo
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
