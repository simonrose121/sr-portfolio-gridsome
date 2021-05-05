<template>
	<header class="bg-primary m-0 text-white sticky absolute top-0 z-10">
		<div class="container">
			<div class="flex flex-row px-0 justify-between py-4">
				<g-link to="/" class="md:w-1/5">
					<g-image
						alt="Logo"
						:src="getStrapiMedia($static.strapi.global.logo.url)"
					/>
				</g-link>
				<nav
					class="flex flex-row justify-end gap-4 text-sm uppercase align-middle items-center"
				>
					<a href="/#profile">Profile</a>
					<a href="/#experience">Experience</a>
					<a href="/#education">Education</a>
					<a href="/#projects">Projects</a>
					<a href="/#skills">Skills</a>
					<a href="/#publications">Publications</a>
					<a href="/#interests">Interests</a>
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
	},
};
</script>
