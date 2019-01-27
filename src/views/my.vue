<template>
  <div>
    <!-- this is my -->
    <img :src="img" alt="longmao" >
  </div>
</template>

<script>
const allImg = {
  longmao: require("../assets/img/longmao.jpg")
};
export default {
  name: "my",
  data() {
    return {
      img: allImg.longmao
    };
  }
};
</script>

<style scoped lang="scss">
img{
    width: 375px;
    height: 50px;
}
</style>
