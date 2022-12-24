<template>
  <nav>
    <router-link :to="{ name: 'EventList' }">Home</router-link> |
    <router-link :to="{ name: 'AboutView' }">About</router-link> |
    <router-link :to="{ name: 'EventCreate' }">Create Event</router-link>
  </nav>

  <router-view v-slot="{ Component }">
    <suspense timeout="0">
      <!-- Default -->
      <template #default>
        <div>
          <component :is="Component" />
        </div>
      </template>

      <!-- Loading -->
      <template #fallback> Loading... </template>
    </suspense>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 1.15rem;
}
</style>
