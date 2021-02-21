<template>
  <div class="menu-item-container">
    <el-card :body-style="cardStyle" shadow="hover">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image">
      <div>
        <span>{{ menuType }}</span>
        <div>
          <el-button type="text">查看详情</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardStyle: {
        padding: "10px",
      },
    };
  },
  props: {
    menuType: String
  },
  components: {},
  watch: {},
  methods: {},
  mounted() {},
};
</script>

<style lang='less' scoped>
.menu-item-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .el-card {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
