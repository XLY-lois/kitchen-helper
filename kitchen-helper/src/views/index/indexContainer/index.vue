<template>
  <div class="main-container">
    <div class="main-container-tab">
      <SearchingTab @selectType="selectType"></SearchingTab>
    </div>
    <div class="main-container-menu">
      <MainContainer :menuType="menuType"></MainContainer>
    </div>
  </div>
</template>
<script>
import SearchingTab from '@/components/index/search/searchingTab'
import MainContainer from '@/components/index/main/mainContainer'
export default {
  data() {
    return {
      menuType:''
    }
  },
  components: {
    SearchingTab,
    MainContainer
  },
  methods: {
    selectType(type) {
      this.menuType = type
    }
  }
}
</script>
<style lang="less" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.575);
  .main-container-tab {
    width: 800px;
    background-color: #fff;
  }
  .main-container-menu {
    margin-top: 10px;
    width: 800px;
    background-color: #fff;
  }
}
</style>
