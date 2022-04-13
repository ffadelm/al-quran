<template>
  <Header />

  <div v-if="isLoading">
    <Skeleton />
  </div>
  <div v-else v-for="surah in data" :key="surah.number_of_surah">
    <Card :surah="surah" />
  </div>
</template>

<script>
import useFetch from "@/use/useFetch.js";
import Header from "@/components/Header.vue";
import Card from "@/components/Cards.vue";
import Skeleton from "@/components/Skeletons.vue";

export default {
  name: "Home",
  components: {
    Header,
    Card,
    Skeleton,
  },
  setup() {
    const { data, isLoading } = useFetch(
      "https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json"
    );
    return {
      data,
      isLoading,
    };
  },
};
</script>
