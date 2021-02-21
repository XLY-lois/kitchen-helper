<template>
  <div class="tab-list-container">
    <el-button type="primary" size="mini" round v-for="item in tabList" :key="item.index"
      @click="selectType(item)">
      {{ item }}</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabList: [],
    };
  },
  props: {
    curTab: String,
  },
  components: {},
  mounted() {
    if (this.curTab === "jiachang") {
      this.tabList = ["凉菜", "凉菜", "凉菜", "汤", "卤菜", "炒菜"];
    }else if(this.curTab === "zhonghua") {
      this.tabList = ["鲁菜", "川菜", "粤菜", "苏菜", "闽菜", "浙菜","湘菜","徽菜"];
    } else {
      this.tabList = ["暂时还没想好内容噢"];
    }
  },
  watch: {},
  methods: {
    selectType(type) {
      this.$emit("selectType", type);
    },
  },
};
</script>

<style lang='less' scoped>
.tab-list-container {
  width: 100%;
  margin-bottom: 30px;
  // background-color: #fff;
}
</style>
