<template>
  <div class="enigme2">
    <transition name="fade">
      <Validate v-if="showValidation" />
    </transition>
    <div id="nautilus">
      <div class="code">
        <div class="inputs-container">
          <div :class="['password-input', { shake: isPasswordIncorrect, error: isPasswordIncorrect }]">
            <input
              v-model="password1"
              @input="handleInput"
              maxlength="2"
              placeholder="00"
              aria-label="code1"
            />
          </div>
          <div :class="['password-input', { shake: isPasswordIncorrect, error: isPasswordIncorrect }]">
            <input
              v-model="password2"
              @input="handleInput"
              maxlength="2"
              placeholder="00"
              aria-label="code2"
            />
          </div>
        </div>
        <div class="validate-row">
          <button class="validate-btn" @click="login" :disabled="isSubmitting">
              <img src="@/assets/button.png" alt="Description de l'image">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Validate from '@/components/validation.vue'

export default {
  name: 'Enigme2',
  components: {
    Validate,
  },
  data() {
    return {
      password1: '',
      password2: '',
      isPasswordIncorrect: false,
      isSubmitting: false,
      showValidation: false,
    };
  },

  methods: {
    handleInput() {
      // Ne pas valider automatiquement. On limite simplement la longueur saisie.
      if (this.password1 && this.password1.length > 2) {
        this.password1 = this.password1.slice(0, 2);
      }
      if (this.password2 && this.password2.length > 2) {
        this.password2 = this.password2.slice(0, 2);
      }
    },
    login() {
      // Bouton de validation : n'active la vérification que lorsque l'utilisateur clique
      if (this.isSubmitting) return Promise.resolve();
      this.isSubmitting = true;

      const fullPassword = this.password1 + this.password2;
      this.$store.commit('updateEnteredPassword', fullPassword);
      this.$store.commit('hideProtectedPage');

      return this.$store.dispatch('verifyPassword2').then(() => {
        if (this.$store.state.isProtectedPageVisible) {


          this.showValidation = true; 
          setTimeout(() => {
            this.$router.push('/3');
          }, 1500);
        } else {
          this.isPasswordIncorrect = true;
          setTimeout(() => {
            this.isPasswordIncorrect = false;
          }, 1000);
        }
      }).finally(() => {
        this.isSubmitting = false;
      });
    },
  },
}

</script>

<style lang="scss">
  .enigme2{
    position: fixed;
    display: flex;
    margin-top: 250px;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    #nautilus{
      position: relative;
      display: flex;
      justify-content: center;
      height: 400px;
      .code{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        width: 100%;
        .inputs-container {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
        }
        .password-input {
          display: flex;
          font-size: 25px;
          padding-left: 22px;
          padding-right: 22px;
          justify-content: center;
          width: 50px; 
          height: 100px;
          border-radius: 8px;
          border: 2px solid transparent;
          transition: border-color 0.18s ease, box-shadow 0.18s ease;
          background: transparent;
        }
        .password-input.shake {
          animation-name: shake;
          animation-duration: 0.5s;
          animation-timing-function: ease-in-out;
        }
        .password-input input {
      width: 75px;
      height: 150px;
      padding: 0 12px;
      text-align: center;
      background-color: transparent;
      color: #cc9933;
      border: solid 5px #0387cc;
          border-radius: 20px;
          margin: 0 5px;
      font-size: 2.5em;
          transition: box-shadow 0.12s ease, background-color 0.12s ease;
          &:focus{
        background-color: #4b4b4b7a;
            outline: none;
          }
        }
        .password-input.error input {
          box-shadow: 0 0 6px rgba(179,1,1,0.45);
        }
            .password-input.error input {
      border-color: #b30101;  

    }
        .validate-row {
          display: flex;
          justify-content: center;
          margin-top: 150px;
        }
        .validate-btn {
      background: #10019c;
      color: white;
      border: none;
      padding: 10px 30px;
      border-radius: 20px;
      font-size: 1rem;
      cursor: pointer;
      transition: opacity 0.12s ease, transform 0.12s ease;
        }
      .validate-btn[disabled] {
        opacity: 0.6;
        cursor: not-allowed;
        transform: scale(0.98);
      }
    button {
    img {
      width: 50px;
      margin: 0px;
      padding: 0px;
      height: auto;
    } 
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

/* Transition fade-out */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>

