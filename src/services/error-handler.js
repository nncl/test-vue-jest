import Bugsnag from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'

export const initBugsnag = () => {
  const key = import.meta.env.VITE_BUGSNAG_KEY

  if (key) {
    Bugsnag.start({
      apiKey: key,
      plugins: [new BugsnagPluginVue()]
    })
  }

  return Bugsnag
}
