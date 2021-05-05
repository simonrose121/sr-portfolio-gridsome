<template>
	<div class="flex w-full">
		<div class="flex flex-col md:w-1/5">
			<g-image
				:alt="experience.institution"
				:src="getStrapiMedia(experience.logo.url)"
				class="w-auto md:ml-auto"
			/>
			<p class="mt-3 text-right">{{ formattedDate }}</p>
		</div>
		<div class="flex flex-col md:pl-10 md:w-4/5">
			<h2 class="font-bold pb-0">{{ experience.title }}</h2>
			<RichText :data="{ content: experience.description }" />
		</div>
	</div>
</template>

<script>
import { getStrapiMedia } from "~/utils/medias";
import RichText from "~/components/RichText";

export default {
	props: ["experience"],
	data() {
		return {
			formattedDate: `${this.$moment(this.experience.startDate).format(
				"MMM YYYY"
			)} - ${
				this.experience.endDate
					? this.$moment(this.experience.endDate).format("MMM YYYY")
					: ""
			}`,
		};
	},
	methods: {
		getStrapiMedia,
	},
	components: {
		RichText,
	},
};
</script>

<style scoped>
img {
	max-height: 3rem;
}
</style>
