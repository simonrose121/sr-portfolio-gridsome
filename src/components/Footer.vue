<template>
	<footer class="mt-24 pt-8 pb-8 bg-gray-200">
		<p class="container text-m font-medium">
			&copy; {{ $static.strapi.global.copyright }} {{ year }}
		</p>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			year: new Date().getFullYear(),
		};
	},
};
</script>

<static-query>
query {
  strapi {
    global {
      siteName
      contactEmail
	  copyright
    }
  }
}
</static-query>
