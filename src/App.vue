<template>
  <nav id="nav">
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
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: rgb(248, 248, 248);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  align-items: center;
  height: 50px;
  padding: 0 40px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition-property: transform, box-shadow;
  transition: 0.2s linear;
}

button:hover {
  transform: translateY(-4px);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
}

button:active {
  transform: translateY(-1px);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.15);
}

h2 {
  font-size: 40px;
  font-weight: 700;
}

h3 {
  font-size: 25px;
  font-weight: 700;
}

h4 {
  font-size: 20px;
  font-weight: 700;
}

input,
select {
  display: block;
  width: 100%;
  height: 30px;
  margin-bottom: 24px;
  border: 1px solid;
  border-radius: 4px;
}

input[type="text"] {
  padding: 0px 10px;
}

input:focus {
  border-color: #008777;
  outline: 0;
}

select:focus {
  border-color: #008777;
  outline: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
