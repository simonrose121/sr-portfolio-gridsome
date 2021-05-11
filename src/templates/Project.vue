<template>
	<Layout>
		<div class="container">
			<g-image
				v-if="$page.strapi.projects[0].logo"
				:alt="$page.strapi.projects[0].title"
				:src="getStrapiMedia($page.strapi.projects[0].logo.url)"
				class="mt-8 w-auto md:w-1/4"
			/>
			<h2 v-else class="mt-8 text-4xl">
				{{ $page.strapi.projects[0].title }}
			</h2>
			<Content :content="$page.strapi.projects[0].content" class="mt-8" />
		</div>
	</Layout>
</template>

<page-query>
query ($slug: String!) {
  strapi {
    projects(where: { slug: $slug }) {
      id
      title
      slug
      description
      coverImage {
        id
        url
      }
	  logo {
		  url
	  }
      content {
        __typename
        ... on strapiTypes_ComponentSectionsRichText {
          id
          content
        }
        ... on strapiTypes_ComponentSectionsLargeMedia {
          id
          media {
            id
            url
            mime
          }
          description
        }
        ... on strapiTypes_ComponentSectionsImagesSlider {
          id
          title
          images {
            id
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Content from "~/components/Content";
import { getStrapiMedia } from "~/utils/medias";
import { getMetaTags } from "~/utils/seo";

export default {
	methods: {
		getStrapiMedia,
	},
	components: {
		Content,
	},
	metaInfo() {
		const {
			title,
			description,
			coverImage,
		} = this.$page.strapi.projects[0];
		const image = getStrapiMedia(coverImage.url);
		return {
			title,
			meta: getMetaTags(title, description, image),
		};
	},
};
</script>
