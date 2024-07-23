<template>
  <main>
    <section class="login__container">
      <form @submit.prevent="onLogin" class="login__item item">
        <h1 class="item__header title">Login</h1>
        <h2 class="item__sign-in description">
          Doesn't have an account yet?
          <button class="login-button-underlined" @click="onSignUp">
            Sign Up
          </button>
        </h2>
        <div class="item__message">{{ message }}</div>
        <div class="login-form">
          <label>
            Email
            <input
              v-model="email"
              type="email"
              :placeholder="email"
              autocomplete="on"
              @focus="clearMessage"
            />
          </label>
          <label>
            Password
            <input
              v-model="password"
              type="password"
              :placeholder="password"
              autocomplete="on"
              @focus="clearMessage"
            />
          </label>
        </div>
        <button
          type="submit"
          class="item__button button"
          :disabled="!isDataValid"
        >
          Login
        </button>
        <span>or</span>
        <button
          type="button"
          class="item__button button google-button"
          @click="onLoginWithGoogle"
        >
          login with Google
        </button>
        <button type="button" class="item__button button" @click="onHome">
          Home
        </button>
        <div v-if="error" class="error">
          <div class="text-center pa-4">
            <v-dialog v-model="dialog" width="auto">
              <v-card max-width="400" prepend-icon="mdi-update">
                <v-card-text>{{ error }}</v-card-text>
                <template v-slot:actions>
                  <v-btn
                    class="ms-auto"
                    text="Close"
                    @click="dialog = false"
                  ></v-btn>
                </template>
              </v-card>
            </v-dialog>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      message: "",
      dialog: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["getError"]),

    isDataValid() {
      return this.email && this.password;
    },
    error() {
      return this.getError;
    },
  },
  mounted() {
    this.handleRedirectResult();
  },
  methods: {
    ...mapActions("auth", [
      "loginWithGoogle",
      "signInWithWithEmailAndPassword",
      "handleRedirectResult",
    ]),
    clearMessage() {
      this.message = "";
    },
    onLoginWithGoogle() {
      this.loginWithGoogle();

      this.$router.push({
        name: "home",
      });
    },
    onHome() {
      this.$router.push({
        name: "home",
      });
    },
    onSignUp() {
      this.$router.push({
        name: "sign-up",
      });
    },

    validateEmail(email) {
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    },
    validatePassword(password) {
      return password.length >= 6;
    },

    onLogin() {
      if (!this.validateEmail(this.email)) {
        this.message = "❌ Please enter a valid email address";
      } else if (!this.validatePassword(this.password)) {
        this.message = "❌ Password should have 6 or more digits";
      } else if (this.error) {
        this.dialog = true;
        this.email = "";
        this.password = "";
      } else {
        this.signInWithWithEmailAndPassword({
          email: this.email,
          password: this.password,
        });
        // .then(() => {
        //   if (this.signInWithWithEmailAndPassword) {
        //     this.onHome();
        //   }
        // })
        //  .catch((error) => {
        //    console.error("Error during email sign-in:", error);
        //    this.message = "Error during email sign-in.";
        //    this.dialog = true;
        //  });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  padding: 1.5rem 1.5rem;
  margin: 8px 0;
  border: 1px solid #f9c06a;
  border-radius: 5px;
  box-sizing: border-box;
  height: 2rem;
  width: 100%;

  &::placeholder {
    color: #a8a3a3;
    font-size: 20px;
    font-weight: 400;
  }
}

.icon {
  //background-image: url('');
  background-size: 25px 25px;
  background-position: 5px 5px;
  z-index: 5;
}
.login {
  // .login__container

  &__container {
    padding-top: 2rem;
    //max-width: 600px;
  }
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 10px;
  // .item__header

  &__header {
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: 10px;
  }

  // .item__message

  &__message {
    color: red;
    padding: 0 10px;
    text-align: center;
    line-height: 1.2;
  }
}

.login-button-underlined {
  text-decoration: underline;
  color: #d68121;
  @media (any-hover: hover) {
    &:hover {
      color: #e7ab51;
    }
  }
}
.error {
  color: red;
}
</style>
