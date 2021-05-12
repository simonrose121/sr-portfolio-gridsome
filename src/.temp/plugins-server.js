import plugin_gridsome_plugin_tailwindcss_6 from "C:\\Users\\Simon\\documents\\portfolio-strapi-gridsome\\frontend\\node_modules\\gridsome-plugin-tailwindcss\\gridsome.client.js"
import plugin_gridsome_plugin_google_analytics_7 from "C:\\Users\\Simon\\documents\\portfolio-strapi-gridsome\\frontend\\node_modules\\@gridsome\\plugin-google-analytics\\gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_6,
    options: {"shouldImport":true,"shouldTimeTravel":true,"importUrlConfig":{"modernBrowser":true},"presetEnvConfig":{"stage":0,"autoprefixer":false,"features":{"focus-visible-pseudo-class":false,"focus-within-pseudo-class":false}}}
  },
  {
    run: plugin_gridsome_plugin_google_analytics_7,
    options: {"id":"UA-37785083-1"}
  }
]
