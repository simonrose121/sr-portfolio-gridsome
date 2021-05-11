<template>
	<div class="flex w-full flex-col md:flex-row">
		<div class="flex-col md:w-1/5 text-5xl text-left block relative">
			<font-awesome
				:icon="[skill.prefix, skill.icon]"
				class="top-0 md:right-0 md:absolute"
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
