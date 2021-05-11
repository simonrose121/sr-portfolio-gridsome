<template>
	<Layout>
		<div class="container">
			<div class="flex md:justify-end md:w-1/5">
				<h1 class="text-3xl pt-10 md:pt-24 mb-6 uppercase" id="profile">
					Profile
				</h1>
			</div>
			<div
				class="flex w-full flex-col md:items-left md:flex-row md:gap-4"
			>
				<div class="w-1/2 md:w-1/5">
					<g-image
						:src="$page.strapi.home.imageUrl"
						class="rounded-full md:ml-auto"
					/>
				</div>
				<div class="w-full mt-10 md:mt-0 md:pl-10 md:w-4/5">
					<RichText :data="{ content: $page.strapi.home.profile }" />
					<div
						class="flex mt-6 prose gap-4 md:gap-0 md:prose-lg md:w-1/4 md:justify-between"
					>
						<a
							v-for="social in $page.strapi.global.socialNetworks"
							:key="social.id"
							:href="social.url"
							target="_blank"
						>
							<font-awesome
								:icon="[social.prefix, social.icon]"
							/>
						</a>
					</div>
					<a :href="$page.strapi.home.cvUrl" target="_blank">
						<button class="bg-black mt-6 text-white rounded px-8">
							CV
						</button>
					</a>
				</div>
			</div>
			<div class="flex md:justify-end md:w-1/5">
				<h1 class="text-3xl pt-24 mb-6 uppercase" id="experience">
					Experience
				</h1>
			</div>
			<div class="flex flex-col gap-8">
				<Experience
					v-for="experience in $page.strapi.experiences"
					:key="experience.id"
					:experience="experience"
				/>
			</div>
			<div class="flex md:justify-end md:w-1/5">
				<h1 class="text-3xl pt-24 mb-6 uppercase" id="education">
					Education
				</h1>
			</div>
			<div class="flex flex-col gap-8">
				<Experience
					v-for="education in $page.strapi.educations"
					:key="education.id"
					:experience="education"
				/>
			</div>
			<div class="flex md:justify-end md:w-1/5">
				<h1 class="text-3xl pt-24 mb-6 uppercase" id="projects">
					Projects
				</h1>
			</div>
			<div class="flex flex-col gap-4">
				<Project
					v-for="project in $page.strapi.projects"
					:key="project.id"
					:project="project"
				/>
			</div>
			<div class="flex md:justify-end md:w-1/5">
				<h1 class="text-3xl pt-24 mb-6 uppercase" id="skills">
					Skills
				</h1>
			</div>
			<div class="flex flex-col gap-8">
				<Skill
					v-for="skill in $page.strapi.skills"
					:key="skill.id"
					:skill="skill"
				/>
			</div>
			<div class="flex md:justify-end md:w-1/5">
				<h1 class="text-3xl pt-24 mb-6 uppercase" id="publications">
					Publications
				</h1>
			</div>
			<div class="flex flex-col gap-8">
				<a
					v-for="publication in $page.strapi.publications"
					:key="publication.id"
					:href="publication.link"
				>
					<RichText :data="{ content: publication.citation }" />
				</a>
			</div>
			<div class="flex md:justify-end md:w-1/5">
				<h1 class="text-3xl pt-24 mb-6 uppercase" id="interests">
					Interests
				</h1>
			</div>
			<div class="flex flex-col gap-8">
				<Interest
					v-for="interest in $page.strapi.interests"
					:key="interest.id"
					:interest="interest"
				/>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query {
  strapi {
    # Get homepage data
    home {
      title
      profile
      imageUrl 
      # Metadata for SEO
      seo {
        title
        shareImage {
          url
        }
        description
      }
	  cvUrl
    }
	global {
		socialNetworks {
			icon
			url
			title
			prefix
			id
		}
	}
    experiences(sort: "startDate:desc") {
      id
      title
      description
      institution
      logo {
        url
      }
      startDate
      endDate
    }
	educations(sort: "startDate:desc") {
      id
      title
      description
      institution
      logo {
        url
      }
      startDate
      endDate
    }
	projects(sort: "index:asc") {
      id
      title
      description
      slug
      coverImage {
        url
      }
    }
	skills {
		id
		icon
		prefix
		contentLeft
		contentRight
	}
	publications(sort: "year:desc") {
		id
		citation
		link
	}
	interests {
		id
		title
		icon
		prefix
		description
	}
  }
}
</page-query>

<script>
import Experience from "~/components/Experience";
import Project from "~/components/Project";
import Skill from "~/components/Skill";
import Interest from "~/components/Interest";
import RichText from "~/components/RichText";

import { getStrapiMedia } from "~/utils/medias";
import { getMetaTags } from "~/utils/seo";

export default {
	methods: {
		getStrapiMedia,
	},
	components: {
		Experience,
		Project,
		Skill,
		Interest,
		RichText,
	},
	metaInfo() {
		const { title, description, shareImage } = this.$page.strapi.home.seo;
		const image = getStrapiMedia(shareImage.url);
		return {
			title,
			meta: getMetaTags(title, description, image),
		};
	},
};
</script>

<style>
img {
	width: 100%;
	height: auto;
}

h1 {
	position: relative;
	display: inline-block;
}

h1:before {
	content: "";
	position: absolute;
	width: 5rem;
	height: 1px;
	bottom: 2px;
	right: 0;
	border-bottom: 2px solid black;
}
</style>
