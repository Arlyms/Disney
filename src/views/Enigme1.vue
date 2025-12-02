<template>
  <div class="enigme1">
    <transition name="fade">
            <Loader v-if="showLoader" />
    </transition>
    <transition name="fade">
      <Validate v-if="showValidation" />
    </transition>
    <div id="dentist">
      <div class="code">
        <div :class="['password-input', { shake: isPasswordIncorrect, error: isPasswordIncorrect }]">
          <input
            v-model="password"
            @input="handleInput"
            maxlength="3"
            placeholder="0"
            aria-label="code"
          />
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
import Loader from '@/components/loader.vue'
import Validate from '@/components/validation.vue'

export default {
  name: 'Enigme1',
  components: {
    Loader,
    Validate,
  },
  data() {
    return {
      // single string field for password (will replace the 3 separate inputs)
      password: '',
      isPasswordIncorrect: false,
      isSubmitting: false,
      showLoader: true,
      showValidation: false,
    };
  },
  mounted() {
    // Masquer le loader après 3 secondes
    setTimeout(() => {
    this.showLoader = false;
    }, 3000);
  },

  methods: {
    handleInput() {
      // Ne pas valider automatiquement ; tronquer simplement la saisie
      if (this.password && this.password.length > 1) {
        this.password = this.password.slice(0, 1);
      }
    },
    login() {
      if (this.isSubmitting) return Promise.resolve();
      this.isSubmitting = true;
      const fullPassword = this.password;
      this.$store.commit('updateEnteredPassword', fullPassword);
      
      return this.$store.dispatch('verifyPassword1').then(() => {
      if (this.$store.state.isProtectedPageVisible) {
          

          this.showValidation = true; 
          setTimeout(() => {
            this.$router.push('/2');
          }, 1500); // 💡 Ajustez ce délai selon la durée de votre animation de validation

        } else {
          // Mot de passe incorrect : comportement actuel
          this.isPasswordIncorrect = true;
          setTimeout(() => {
            this.isPasswordIncorrect = false;
          }, 1000);
        }
      }).finally(() => {
        // On ne définit isSubmitting=false qu'à la fin de tout, sauf en cas de succès 
        // où la navigation va de toute façon détruire le composant.
        // On le garde ici pour le cas d'échec.
        if (!this.$store.state.isProtectedPageVisible) {
            this.isSubmitting = false;
        }
      });
    },
  },
}

</script>

<style lang="scss">
  .enigme1{
    position: fixed;
    display: flex;
    margin-top: 250px;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    #dentist{
      position: relative;
      display: flex;
      justify-content: center;
      height: 400px;
    .code{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    .password-input {
      display: flex;
      font-size: 25px;
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
      border: solid 5px #f54322;
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

