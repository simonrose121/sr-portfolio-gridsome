<template>
	<g-link :to="'project/' + project.slug">
		<div class="flex w-full">
			<div class="flex flex-col md:w-1/5">
				<g-image
					:alt="project.title"
					:src="getStrapiMedia(project.coverImage.url)"
					class="w-auto md:ml-auto"
				/>
			</div>
			<div class="flex flex-col md:pl-10 md:w-4/5">
				<h2 class="font-bold pb-0">{{ project.title }}</h2>
				<RichText :data="{ content: project.description }" />
			</div>
		</div>
	</g-link>
</template>

<script>
import { getStrapiMedia } from "~/utils/medias";
import RichText from "~/components/RichText";

export default {
	props: ["project"],
	components: {
		RichText,
	},
	methods: {
		getStrapiMedia,
	},
};
</script>
