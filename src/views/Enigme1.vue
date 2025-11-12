<template>
  <div class="home">
    <div id="eye_of_ra">
      <div :class="['color_code', isPasswordIncorrect ? 'shake' : '']">
        <!--<img alt="Vue logo" src="../assets/RA.png">-->
        <div :class="['eye__option', isPasswordIncorrect ? 'eye__option--red' : 'eye__option--blue']"></div>
        <!--<div class="pupille"></div>-->
        <button @click="login"></button>
      </div>
    </div>
    <div class="code">
      <div class="password-input">
        <input
          v-for="(char, index) in password"
          :key="index"
          v-model="password[index]"
          :ref="'char' + index"
          @input="handleInput(index)"
          @keyup.enter="login"
          maxlength="1"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      password: [''],
      isPasswordIncorrect: false,
    };
  },

  methods: {
    handleInput(index) {
      // Si on n'a qu'un seul champ (password.length === 1), on lance directement la vérification
      const value = this.password[index] || '';
      if (this.password.length === 1) {
        if (value.length >= 1) {
          this.login();
        }
        return;
      }

      // Comportement pour plusieurs champs (reste du code existant)
      if (value.length === 1) {
        if (index < this.password.length - 1) {
          // focus sur le champ suivant
          const nextRef = this.$refs['char' + (index + 1)];
          if (nextRef && nextRef[0] && typeof nextRef[0].focus === 'function') {
            nextRef[0].focus();
          }
        } else {
          // dernier champ rempli -> tenter le login
          this.login();
        }
      }
    },
    login() {
      const fullPassword = this.password.join('');
      this.$store.commit('updateEnteredPassword', fullPassword);
      this.$store.dispatch('verifyPassword').then(() => {
        if (this.$store.state.isProtectedPageVisible) {
          // Redirige vers la page protégée
          this.$router.push('/2');
        } else {
          this.isPasswordIncorrect = true;
          setTimeout(() => {
            this.isPasswordIncorrect = false; // Réinitialise en bleu après 1 seconde
          }, 1000);          
        }  
      });      
    },
  },
}

</script>

<style lang="scss">
  .home{
    position: fixed;
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    #eye_of_ra{
      position: relative;
      display: flex;
      justify-content: center;
      height: 200px;
      .color_code{
        position: relative;
        width: 200px;
        animation-duration: 0.5s;
        img{
        width: 200px;
        }
        .eye__option {
          z-index: 2;
          position: absolute;
          left: 76px;
          top: 23px;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          border: 4px solid #cc9933;
          transition: background-color 0.5s; /* Add transition to background-color property */
        

          &--blue {
            background: #0e5ed7; /* Blue color */
          }

          &--red {
            background: #b30101; /* Red color */

          } 
        } 

        .pupille{
            z-index: 3;
            position: absolute;
            left: 92px;
            top: 39px;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            background-color: black;
          }

        button{
          z-index: 4;
          position: absolute;
          left: 80px;
          top: 27px;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
      }
    } 
    .code{
      display: flex;
      justify-content: center;
      align-items: center;
      .password-input {
          display: flex;
          justify-content: center;
          width: 200px; /* Ajustez la largeur en fonction de vos besoins */
      }

      .password-input input {
          width: 35px;
          height: 60px;
          text-align: center;
          background-color: #333333;
          color: #cc9933;
          border: none;
          border-radius: 2px;
          margin: 0 5px;
          font-size: 1.5em;
          &:focus{
            background-color: #4b4b4b;
            outline: none;
          }
      }  
    }  
    
  @keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}

.shake {
  animation-name: shake;
} 

  }  
</style>

