<template>
  <router-link to="/">Al-Qur'an</router-link>
  <div class="languages">
    <span @click="toIndonesia">Indonesia</span>
    <span @click="toEnglish">English</span>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    function toIndonesia() {
      store.commit("changeLanguage", "id");
      localStorage.setItem("language", "id");
    }
    function toEnglish() {
      store.commit("changeLanguage", "eng");
      localStorage.setItem("language", "eng");
    }
    return {
      toIndonesia,
      toEnglish,
    };
  },
};
</script>

<style scoped>
a {
  padding: 33px;
  display: block;
  color: #383838;
  font-weight: bold;
  font-size: 1.9rem;
  text-align: right;
  letter-spacing: 5px;
  font-family: poppins;
  text-decoration: none;
  transition: color 0.1s;
}
a:hover {
  color: #066163;
}
.languages {
  color: #383838;
  margin-top: -2px;
  text-align: right;
  margin-bottom: 28px;
}
span {
  font-size: 1em;
  cursor: pointer;
  margin-right: 35px;
  letter-spacing: 1.2px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
span:hover {
  text-decoration: underline;
  color: #cdbe78;
}
@media screen and (min-width: 1160px) {
  span {
    font-size: 0.9rem;
  }
}
</style>