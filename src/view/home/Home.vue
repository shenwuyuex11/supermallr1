<!--  -->
<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    NavBar
  }
};
</script>
<style lang='scss' scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>