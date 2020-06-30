<template>
  <div>
    <header class="fixed top-0 z-10 w-screen">
      <div class="container flex justify-between max-w-4xl px-2 py-4 border-b">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav>
        <g-link class="pr-2" to="/blog">Blog</g-link>
        <g-link to="/about/">About</g-link>
      </nav>
      </div>
    </header>
    <main class="container max-w-4xl pt-16 px-2">
    <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
