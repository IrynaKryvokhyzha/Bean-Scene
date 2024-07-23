<template>
  <main>
    <section class="login__container">
      <form
        @submit.prevent="registerWithEmailAndPassword"
        class="login__item item"
      >
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
        <h1 class="item__header title">Sign Up</h1>
        <span class="item__message">{{ message }}</span>
        <div>
          <label>
            Email
            <input
              v-model="email"
              type="email"
              placeholder="email"
              autocomplete="on"
              @focus="clearMessage"
            />
          </label>
          <label>
            Password
            <input
              v-model="password"
              type="password"
              placeholder="password"
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
          Sign Up
        </button>
        <span
          >Already a user ?
          <button
            type="button"
            @click="onLogin"
            class="login-button-underlined"
          >
            Login
          </button></span
        >
        <button type="button" class="item__button button" @click="onHome">
          Home
        </button>
      </form>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SignUpPage",
  data() {
    return {
      email: "",
      password: "",
      message: "",
      dialog: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["getUser"]),
    ...mapGetters("auth", ["getError"]),
    isDataValid() {
      return this.email && this.password;
    },
    error() {
      return this.getError;
    },
  },
  methods: {
    ...mapActions("auth", ["signUpWithWithEmailAndPassword"]),
    clearMessage() {
      this.message = "";
    },
    onHome() {
      this.$router.push({
        name: "home",
      });
    },
    onLogin() {
      this.$router.push({
        name: "login",
      });
    },

    validateEmail(email) {
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    },
    validatePassword(password) {
      return password.length >= 6;
    },
    registerWithEmailAndPassword() {
      if (!this.validateEmail(this.email)) {
        this.message = "❌ Please enter a valid email address";
      } else if (!this.validatePassword(this.password)) {
        this.message = "❌ Password should have 6 or more digits";
      } else if (this.error) {
        this.dialog = true;
        this.email = "";
        this.password = "";
      } else {
        this.signUpWithWithEmailAndPassword({
          email: this.email,
          password: this.password,
        });
        //   this.$router.push({
        //     name: "home",
        //   });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  align-self: center;
}
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
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  // .item__header

  &__header {
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: 10px;
  }

  // .item__sign-in

  &__sign-in {
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
