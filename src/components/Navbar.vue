<template>
	<header class="bg-primary m-0 text-white sticky absolute top-0 z-10">
		<div class="container">
			<div class="flex flex-col px-0 justify-between py-4 md:flex-row">
				<g-link to="/" class="w-1/2 md:w-1/5">
					<g-image
						alt="Logo"
						:src="getStrapiMedia($static.strapi.global.logo.url)"
					/>
				</g-link>
				<button
					@click="menuVisible = !menuVisible"
					class="absolute right-0 pr-3 text-xl md:hidden"
				>
					<font-awesome :icon="hamburgerIcon" />
				</button>
				<nav
					class="flex bg-primary w-screen h-screen left-0 flex-col align-left gap-6 text-md uppercase mt-8 md:mt-auto md:items-center md:flex md:flex-row md:relative md:justify-end md:align-middle md:w-auto md:h-auto md:l-auto md:text-sm md:gap-4"
					:class="[menuVisible ? 'block' : 'hidden']"
				>
					<a href="/#profile" @click="optionClick()">Profile</a>
					<a href="/#experience" @click="optionClick()">Experience</a>
					<a href="/#education" @click="optionClick()">Education</a>
					<a href="/#projects" @click="optionClick()">Projects</a>
					<a href="/#skills" @click="optionClick()">Skills</a>
					<a href="/#publications" @click="optionClick()"
						>Publications</a
					>
					<a href="/#interests" @click="optionClick()">Interests</a>
				</nav>
			</div>
		</div>
	</header>
</template>

<static-query>
query {
  strapi {
    global {
      logo {
		  url
	  }
    }
  }
}
</static-query>

<script>
import { getStrapiMedia } from "~/utils/medias";

export default {
	props: ["project"],
	methods: {
		getStrapiMedia,
		optionClick() {
			if (this.menuVisible) {
				this.menuVisible = false;
			}
		},
	},
	data() {
		return {
			menuVisible: false,
			hamburgerIcon: "bars",
		};
	},
	watch: {
		menuVisible: function(val) {
			if (val) {
				this.hamburgerIcon = "times";
			} else {
				this.hamburgerIcon = "bars";
			}
		},
	},
};
</script>
