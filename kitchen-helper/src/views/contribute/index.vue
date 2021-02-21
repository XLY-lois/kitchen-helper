<template>
  <div class="contribute-container">
    <div class="form-container">
      <el-form ref="contributeForm" :model="contributeForm" :label-position="'left'">
        <el-form-item label="标题">
          <el-input v-model="contributeForm.title"></el-input>
        </el-form-item>
        <el-form-item>
          <StepComp></StepComp>
        </el-form-item>
        <el-form-item>
          <el-tag effect="dark" type="success" :key="tag" v-for="tag in dynamicTags" closable
            :disable-transitions="false" @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue"
            ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm">
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small">上传笔记</el-button>
          <el-button @click="toPage('index')" size="small">返回首页</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>
<script>
import StepComp from "./components/StepComp"
export default {
  data() {
    return {
      contributeForm: {
        title: "",
        text: "",
      },
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: "",
    };
  },
  components: {
    StepComp
  },
  watch: {},
  methods: {
    toPage(page) {
      this.$emit("toPage", page);
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
.contribute-container {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.575);
  display: flex;
  justify-content: center;
  .form-container {
    width: 60%;
    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
    }
    .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: bottom;
    }
  }
}
</style>
