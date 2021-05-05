<template>
	<div class="flex w-full">
		<div class="flex-col md:w-1/5 text-5xl text-right block relative">
			<font-awesome
				:icon="[skill.prefix, skill.icon]"
				class="absolute top-0 right-0"
			/>
		</div>
		<div class="flex flex-col md:pl-10 md:w-2/5">
			<RichText :data="{ content: skill.contentLeft }" />
		</div>
		<div class="flex flex-col md:pl-10 md:w-2/5">
			<RichText :data="{ content: skill.contentRight }" />
		</div>
	</div>
</template>

<script>
import { getStrapiMedia } from "~/utils/medias";
import RichText from "~/components/RichText";

export default {
	props: ["skill"],
	components: {
		RichText,
	},
	methods: {
		getStrapiMedia,
	},
};
</script>
