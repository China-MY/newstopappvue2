<template>
  <div>
    <img src="../assets/logo.png" />
    <NewsList :data="newsList"></NewsList>
  </div>
</template> 
  <script>
import { reactive, toRefs } from "vue";
import NewsList from "../components/NewsList";
import axios from "axios";
export default {
  setup() {
    const state = reactive({
      newsList: [],
    });
    const init = () => {
      axios
        .get("/juheNews", {
          params: {
            type: "top",
            key: "655962c80fdaccf03709b567da3bc795",
          },
        })
        .then((response) => {
          state.newsList = response.data.result.data;
        })
        .catch((error) => {
          console.log(error);
        });
    };
    init();
    return {
      ...toRefs(state),
    };
  },
  components: {
    NewsList,
  },
};
</script> 
  <style scoped>
img {
  width: 100%;
  height: 100px;
  display: block;
}
</style> 