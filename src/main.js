// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require("typeface-fira-sans");
import DefaultLayout from "~/layouts/Default.vue";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
	faBookOpen,
	faEnvelope,
	faFutbol,
	faGlobeEurope,
	faGraduationCap,
	faKeyboard,
	faPalette,
	faUserAlt,
	faChevronCircleRight,
	faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedinIn,
	faResearchgate,
	faGoodreadsG,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(
	faEnvelope,
	faGraduationCap,
	faGithub,
	faLinkedinIn,
	faResearchgate,
	faGoodreadsG,
	faKeyboard,
	faPalette,
	faUserAlt,
	faBookOpen,
	faFutbol,
	faGlobeEurope,
	faChevronCircleRight,
	faChevronCircleLeft
);

export default function(Vue, { router, head, isClient }) {
	// Set default layout as a global component
	Vue.component("Layout", DefaultLayout);
	Vue.component("font-awesome", FontAwesomeIcon);
	Vue.prototype.$moment = moment;
}
