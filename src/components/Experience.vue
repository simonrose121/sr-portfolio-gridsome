<template>
	<div class="flex flex-col w-full md:flex-row">
		<div class="flex flex-col h-24 items-left md:w-1/5">
			<div class="flex relative h-12 md:h-auto">
				<g-image
					:alt="experience.institution"
					:src="getStrapiMedia(experience.logo.url)"
					class="w-auto absolute left-0 md:relative md:ml-auto"
				/>
			</div>
			<p class="mt-3 md:text-right">{{ formattedDate }}</p>
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
