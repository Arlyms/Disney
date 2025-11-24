<template>
  <div class="enigme6">
    <div id="manor">
      <div :class="['color_code']">
        <button @click="login"></button>
      </div>
    </div>
    <div class="code">
      <div :class="['password-input', { shake: isPasswordIncorrect, error: isPasswordIncorrect }]">
        <input
          v-model="password"
          @input="handleInput"
          @keyup.enter="login"
          maxlength="1"
          aria-label="code"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Enigme6',
  data() {
    return {
      // single string field for password (will replace the 3 separate inputs)
      password: '',
      isPasswordIncorrect: false,
      isSubmitting: false,
    };
  },

  methods: {
    handleInput() {
      // Auto-validate as soon as maxlength is reached (no need to press Enter)
      if (!this.password) return;
      if (this.password.length >= 1 && !this.isSubmitting) {
        this.password = this.password.slice(0, 1);
        this.isSubmitting = true;
        // return promise so callers can wait
        return this.login().finally(() => {
          this.isSubmitting = false;
        });
      }
    },
    login() {
      const fullPassword = this.password;
      this.$store.commit('updateEnteredPassword', fullPassword);
      this.$store.commit('hideProtectedPage');
      // return the promise so handleInput can track submission state
      return this.$store.dispatch('verifyPassword6').then(() => {
        if (this.$store.state.isProtectedPageVisible) {
          // Redirige vers la page protégée
          this.$router.push('/7');
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
  .enigme6{
    position: fixed;
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    #manor{
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
      padding: 6px;
      border-radius: 8px;
      border: 2px solid transparent;
      transition: border-color 0.18s ease, box-shadow 0.18s ease;
      background: transparent;
    }

    .password-input.error {
      border-color: #b30101;
      box-shadow: 0 0 10px rgba(179,1,1,0.28);
    }

    .password-input.shake {
      animation-name: shake;
      animation-duration: 0.5s;
      animation-timing-function: ease-in-out;
    }

    .password-input input {
      width: 160px;
      height: 60px;
      padding: 0 12px;
      text-align: center;
      background-color: #333333;
      color: #cc9933;
      border: none;
      border-radius: 6px;
      margin: 0 5px;
      font-size: 1.6em;
      transition: box-shadow 0.12s ease, background-color 0.12s ease;
      &:focus{
        background-color: #4b4b4b;
        outline: none;
      }
    }

    .password-input.error input {
      box-shadow: 0 0 6px rgba(179,1,1,0.45);
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

