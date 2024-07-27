<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__body body">
        <div class="body__social social">
          <h4 class="social__header">Bean Scene</h4>
          <p class="social__description">
            Discover the rich and diverse world of coffee on our website, where
            we offer expertly curated beans and blends from around the globe.
            From brewing tips to flavor profiles, we provide everything you need
            to elevate your coffee experience.
          </p>
          <div>
            <ul class="social__social-link">
              <li class="social__item">
                <a href="https://www.facebook.com/beanscenesunnyvale"
                  ><font-awesome-icon :icon="['fab', 'facebook']"
                /></a>
              </li>
              <li class="social__item">
                <a href="https://www.instagram.com/beanscenecafe/"
                  ><font-awesome-icon :icon="['fab', 'instagram']"
                /></a>
              </li>
              <li class="social__item">
                <a href="https://x.com/beanscenecafe2"
                  ><font-awesome-icon :icon="['fab', 'twitter']"
                /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="body__content content">
          <div class="content__column">
            <h6 class="content__title">About</h6>
            <ul class="content__items">
              <li class="content__item" @click="onMenu">Menu</li>
              <li class="content__item" @click="onAbout">Features</li>
              <li class="content__item">
                <a href="https://www.coffeenews.com/">News & Blogs</a>
              </li>
              <li class="content__item" @click="onContact">Help & Supports</li>
            </ul>
          </div>
          <div class="content__column">
            <h6 class="content__title">Company</h6>
            <ul class="content__items">
              <li class="content__item" @click="onReturn">Return policy</li>
              <li class="content__item" @click="onTerms">Terms of use</li>
              <li class="content__item" @click="onMenu">Pricing</li>
              <li class="content__item">
                <a href="http://thecoffeefaq.com/">FAQ</a>
              </li>
            </ul>
          </div>
          <div class="content__column">
            <h6 class="content__title">Contact Us</h6>
            <address class="content__items">
              <p>186 S Murphy Ave, Sunnyvale, CA 94086</p>
              <a href="tel:12029182132" class="content__item">(408) 738-4523</a>
              <a href="mailto:beanscene@mail.com" class="content__item"
                >beanscene@mail.com</a
              >
              <a href="https://bean-scene.com/" class="content__item"
                >www.beanscene.com</a
              >
            </address>
          </div>
        </div>
      </div>
      <div class="footer__image-ibg">
        <img src="@/assets/images/footer_image.png" alt="coffee-cup-image" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  methods: {
    onMenu() {
      this.$router.push({
        name: "menu",
      });
    },

    onContact() {
      this.$router.push({
        name: "contact-us",
      });
    },
    onTerms() {
      this.$router.push({
        name: "terms-of-use",
      });
    },
    onReturn() {
      this.$router.push({
        name: "return-policy",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  width: 100%;
  height: auto;
  bottom: 0;
  left: 0;

  &__container {
    color: white;
    padding-top: 10rem; /* 160/16 */
    font-weight: 400;
    padding: 5rem 5rem 2rem 5rem;
    @media (max-width: 991px) {
      padding-right: 1rem;
      padding-left: 1.5rem;
    }
    @media (max-width: 767px) {
      padding-top: 2rem;
    }
  }

  // .footer__body

  &__body {
    display: flex;
    gap: 4rem; /* 80/16 */
    @media (max-width: 1058px) {
      gap: 2rem; /* 80/16 */
    }
    @media (max-width: 1012px) {
      flex-direction: column;
      gap: 0.1rem;
    }
  }

  // .footer__image-ibg

  &__image-ibg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    object-fit: cover;
    img {
    }
    &::before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #2f1403;
    }
    &::after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #481804;
      opacity: 0.55;
    }
  }
}
.body {
  // .body__social

  &__social {
    position: relative;
    z-index: 2;
    flex: 0 1 39%;
    &:not(:last-child) {
      margin-bottom: 4.37rem; /* 70/16 */
    }
    @media (max-width: 567px) {
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  }

  // .body__content

  &__content {
    position: relative;
    z-index: 2;
    &:not(:last-child) {
      margin-bottom: 4.37rem; /* 70/16 */
    }
    @media (max-width: 1012px) {
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  }
}
.social {
  // .social__header

  &__header {
    font-size: 3.37rem; /* 54/16 */
    font-family: "Clicker Script";
    padding-bottom: 2.25rem; /* 36/16 */
    @media (max-width: 1012px) {
      text-align: center;
    }
    @media (max-width: 567px) {
      &:not(:last-child) {
        padding-bottom: 1rem;
      }
    }
  }

  // .social__description

  &__description {
    font-size: 0.87rem; /* 14/16 */
    line-height: 1.37rem; /* 22/16 */
    padding-bottom: 2.5rem; /* 40/16 */
    @media (max-width: 567px) {
      &:not(:last-child) {
        padding-bottom: 1rem;
      }
    }
  }

  // .social__social-link

  &__social-link {
    display: flex;
    flex-direction: row;
    gap: 1.2rem; /* 20/16 */
    @media (max-width: 1012px) {
      justify-content: center;
      gap: 3rem; /* 20/16 */
    }
  }
  // .social__item

  &__item {
    font-size: 1.5rem; /* 24/16 */
    transition: color 0.3s;
    cursor: pointer;
    @media (any-hover: hover) {
      &:hover {
        color: #efb257;
      }
    }
  }
}
.content {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 3.5rem; /* 70/16 */
  @media (max-width: 1058px) {
    gap: 2.5rem; /* 80/16 */
  }
  @media (max-width: 1012px) {
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  @media (max-width: 567px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3rem;
    padding-left: 2rem;
    :nth-child(3) {
      grid-column: span 2;
    }
  }
  @media (max-width: 377px) {
    grid-template-columns: auto;
  }

  // .content__column

  &__column {
  }

  // .content__items

  &__items {
    display: flex;
    flex-direction: column;
    gap: 1.87rem; /* 30/16 */
    min-width: 9rem; /* 135/16 */
    font-size: 1.12rem; /* 18/16 */
    line-height: 1.2;
    @media (max-width: 991px) {
      gap: 1rem;
    }
    @media (max-width: 567px) {
      gap: 0.5rem;
    }
  }
  // .content__item

  &__item {
    transition: color 0.3s;
    cursor: pointer;
    @media (any-hover: hover) {
      &:hover {
        color: #efb257;
      }
    }
  }
  &__title {
    font-size: 1.62rem; /* 26/16 */
    font-weight: 700;
    padding-bottom: 4.68rem; /* 75/16 */
    @media (max-width: 1012px) {
      padding-bottom: 2.5rem;
    }
    @media (max-width: 567px) {
      padding-bottom: 1.5rem;
    }
  }
}
</style>
