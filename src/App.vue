<template>
<!--Numero de la boite-->
  <router-view></router-view>
</template>

<style>

html{
  width: 100%;
  height: 100vh;
  background-color: #151616;
}
#app {
  text-align: center;
  color: #222324;  
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
</style>
