<template>
  <div class="enigme7">
    <div id="tower">
      <div :class="['color_code']">
        <button @click="login"></button>
      </div>
    </div>
    <div class="code">
      <div class="inputs-container">
        <div :class="['password-input', { shake: isPasswordIncorrect, error: isPasswordIncorrect }]">
          <input
            v-model="password1"
            @input="handleInput"
            maxlength="2"
            aria-label="code1"
          />
        </div>
        <div :class="['password-input', { shake: isPasswordIncorrect, error: isPasswordIncorrect }]">
          <input
            v-model="password2"
            @input="handleInput"
            maxlength="2"
            aria-label="code2"
          />
        </div>
      </div>

      <div class="validate-row">
        <button class="validate-btn" @click="login" :disabled="isSubmitting">Valider</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Enigme7',
  data() {
    return {
      password1: '',
      password2: '',
      isPasswordIncorrect: false,
      isSubmitting: false,
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
      if (this.isSubmitting) return Promise.resolve();
      this.isSubmitting = true;

      const fullPassword = this.password1 + this.password2;
      this.$store.commit('updateEnteredPassword', fullPassword);
      this.$store.commit('hideProtectedPage');

      return this.$store.dispatch('verifyPassword7').then(() => {
        if (this.$store.state.isProtectedPageVisible) {
          this.$router.push('/8');
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
  .enigme7{
    position: fixed;
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    #tower{
      position: relative;
      display: flex;
      justify-content: center;
      height: 200px;
      .color_code{
        position: relative;
        width: 200px;
        animation-duration: 0.5s;
        img{ width: 200px; }
        .eye__option {
          z-index: 2;
          position: absolute;
          left: 76px;
          top: 23px;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          border: 4px solid #cc9933;
          transition: background-color 0.5s;
          &--blue { background: #0e5ed7; }
          &--red { background: #b30101; } 
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
      flex-direction: column;
      justify-content: center;
      align-items: center;
    .inputs-container {
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
    }
    .password-input {
      display: flex;
      font-size: 25px;
      padding-left: 10px;
      padding-right: 10px;
      justify-content: center;
      width: 50px; 
      height: 100px;
      border-radius: 8px;
      border: 2px solid transparent;
      transition: border-color 0.18s ease, box-shadow 0.18s ease;
      background: transparent;
    }
    .password-input.error {
      box-shadow: 0 0 50px rgba(216, 5, 5, 0.28);
    }
    .password-input.shake {
      animation-name: shake;
      animation-duration: 0.5s;
      animation-timing-function: ease-in-out;
    }
    .password-input input {
      width: 50px;
      height: 100px;
      padding: 0 12px;
      text-align: center;
      background-color: #333333;
      color: #cc9933;
      border: solid 2px #616672;
      border-radius: 20px;
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

    .validate-row {
      display: flex;
      justify-content: center;
      margin-top: 16px;
    }

    .validate-btn {
      background: #0387cc;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: opacity 0.12s ease, transform 0.12s ease;
    }

    .validate-btn[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
      transform: scale(0.98);
    }
    }  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }
  .shake { animation-name: shake; } 
  }  
</style>

