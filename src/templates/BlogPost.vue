<template>
  <Layout>
    <article>
      <h1 class="font-bold text-4xl text-center">{{ title }}</h1>
      <div v-html="$page.post.content" />
    </article>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    post: blogPost(id: $id) {
      title
      date(format: "D. MMMM YYYY")
      timeToRead
      content
      path
      headings {
        anchor
        depth
        value
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.title,
    };
  },
  computed: {
    title() {
      return this.$page.post.title;
    }
  }
};
</script>
