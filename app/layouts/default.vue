<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>

        <li>
          <NuxtLink to="/about">About page</NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="main">
      <slot />
    </div>
  </div>
</template>

<style scoped>
nav {
  background-color: #f8f9fa;
  padding: 1rem;
}
ul {
  list-style-type: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}
li {
  margin: 0;
}
.main {
  padding: 2rem;
}
</style>
