<template>
  <div>
    <article
      class="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm sm:prose lg:prose-lg xl:prose-2xl"
    >
      <h1>{{ post.title }}</h1>

      <PostMeta :author-data="post.author" :date="post.date" />

      <img :src="post.thumbnail" alt="" />

      <div v-html="$md.render(post.body)"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'PostPage',
  async asyncData({ params, payload }) {
    if (payload) return { post: payload }
    else
      return {
        post: await require(`@/assets/content/blog/${params.slug}.json`),
      }
  },
}
</script>
