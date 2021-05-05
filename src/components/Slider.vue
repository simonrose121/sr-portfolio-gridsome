<template>
	<div class="py-4 relative">
		<g-image :src="getStrapiMedia(data.images[parsedSelectedIndex].url)" />
		<button
			class="absolute p-3 left-0 text-2xl text-primary z-10"
			@click="previousImage()"
		>
			<font-awesome icon="chevron-circle-left" />
		</button>
		<button
			class="absolute p-3 right-0 text-2xl text-primary z-10"
			@click="nextImage()"
		>
			<font-awesome icon="chevron-circle-right" />
		</button>
	</div>
</template>

<script>
import { getStrapiMedia } from "~/utils/medias";

export default {
	props: ["data"],
	data: () => ({
		rawSelectedIndex: 0,
	}),
	computed: {
		parsedSelectedIndex() {
			// Ensure we don't go beyond the amount of images
			return this.rawSelectedIndex % this.data.images.length;
		},
	},
	methods: {
		getStrapiMedia,
		previousImage() {
			if (this.rawSelectedIndex === 0) {
				this.rawSelectedIndex = this.data.images.length - 1;
			} else {
				this.rawSelectedIndex--;
			}
		},
		nextImage() {
			if (this.rawSelectedIndex === this.data.images.length - 1) {
				this.rawSelectedIndex = 0;
			} else {
				this.rawSelectedIndex++;
			}
		},
	},
};
</script>

<style>
button {
	top: 50%;
}
</style>
