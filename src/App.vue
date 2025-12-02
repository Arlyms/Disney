<template>
<!--Numero de la boite-->
  <router-view></router-view>
</template>

<style>

:root{
  --disney-blue: #0e11c0;
  --disney-purple: #6a00f4;
  --disney-gold: #9233ff;
}

html, body, #app {
  height: 100%;
  margin: 0;
}

html{
  background: radial-gradient(circle at 10% 10%, rgba(255,255,255,0.03), transparent 15%),
              linear-gradient(180deg, var(--disney-blue) 70%, var(--disney-purple) 100%, var(--disney-gold) 120%);
  background-attachment: fixed;
  background-size: cover;
  color: #f2f2f2;
}
#app {
  text-align: center;
  color: #ffffff;
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
