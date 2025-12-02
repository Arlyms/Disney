<template>
  <div class="bravo">
    <h1>Bravo</h1>
    <h2>Tu as reussi !</h2>
    <p>Vas récupérer ta récompense au près de la personne qui partage ces deux jours avec toi  <br>(si elle est arrivée à temps ..)</p>
  </div>
</template>

<script>

// @ is an alias to /src

export default {
  name: 'Bravo',

  data() {
    return {
    };
  },

}

</script>

<style lang="scss">
.bravo {
  padding-top: 100px;
  text-align: center;
  margin-top: 20%;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  h1 {
    font-size: 4em;
    color: #ffffff;
  }
  h2 {
    font-size: 2em;
    color: #ffffff;

  }
  p {
    font-size: 1.2em;
    color: #dddddd;

  }
}
</style>

