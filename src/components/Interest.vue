<template>
	<div class="flex w-full">
		<div class="flex-col md:w-1/5 text-5xl text-right block relative">
			<font-awesome
				:icon="[interest.prefix, interest.icon]"
				class="absolute top-0 right-0"
			/>
		</div>
		<div class="flex flex-col md:pl-10 md:w-4/5">
			<h2 class="font-bold pb-0">{{ interest.title }}</h2>
			<RichText :data="{ content: interest.description }" />
		</div>
	</div>
</template>

<script>
import { getStrapiMedia } from "~/utils/medias";
import RichText from "~/components/RichText";

export default {
	props: ["interest"],
	components: {
		RichText,
	},
	methods: {
		getStrapiMedia,
	},
};
</script>
