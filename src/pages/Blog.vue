<template>
  <Layout>
    <article>
      <div>
        <h1 class="font-bold text-4xl text-center">{{ title }}</h1>
        <p>Hey! You find my posts here.</p>
      </div>
      <ul>
        <li v-for="edge in $page.posts.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
        </li>
      </ul>
    </article>
  </Layout>
</template>

<page-query>
  query {
    posts: allBlogPost {
      edges {
        node {
          id
          title
          date(format: "D. MMMM YYYY")
          path
          timeToRead
          excerpt
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.title
    };
  },
  data: function() {
    return {
      title: "The blog"
    };
  }
};
</script>
