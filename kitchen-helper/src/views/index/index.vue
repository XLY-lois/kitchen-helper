<template>
  <div class="index-container">
    <el-container>
      <el-header>
        <div class="index-header">
          <indexHeader @toPage="toPage($event)"></indexHeader>
        </div>
      </el-header>
      <el-container>
        <el-main class="main-container">
          <indexContainer v-if="curPage === 'index'"></indexContainer>
          <userInfo @toPage="toPage($event)" v-if="curPage === 'user'"></userInfo>
          <contribute @toPage="toPage()" v-if="curPage === 'contribute'"></contribute>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import indexContainer from "./indexContainer"
import indexHeader from "./indexHeader"
import userInfo from "../userInfo"
import contribute from "../contribute"

export default {
  data() {
    return {
      curPage: 'index'
    };
  },
  components: {
    indexContainer,
    indexHeader,
    userInfo,
    contribute
  },
  // computed: {
  //   ...mapGetters(["userName"]),
  // },
  mounted() {},
  methods: {
    toPage(page) {
      this.curPage = page
    }
  },
};
</script>
<style lang="less" scoped>
.index-container {
  width: 100%;
  height: 100%;
  .el-header {
    padding: 0;
    .index-header {
      width: 100%;
      height: 50px;
    }
  }
  .main-container {
    height: 100%;
  }
}
</style>
