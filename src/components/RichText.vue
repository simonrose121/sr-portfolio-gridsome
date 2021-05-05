<template>
	<div>
		<Markdown :source="data.content" class="text-black prose md:prose-md" />
	</div>
</template>

<script>
import Markdown from "vue-markdown";

export default {
	props: ["data"],
	components: {
		Markdown,
	},
};
</script>
