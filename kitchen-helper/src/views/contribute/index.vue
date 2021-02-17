<template>
  <div class="contribute-container">
    <div class="form-container">
      <el-form ref="contributeForm" :model="contributeForm" :label-position="'left'">
        <el-form-item label="标题">
          <el-input v-model="contributeForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文字说明">
          <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="contributeForm.text">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span v-if="!disabled" class="el-upload-list__item-delete"
                  @click="handleRemove(file)">
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"  size="small">上传笔记</el-button>
          <el-button @click="toPage('index')" size="small">返回首页</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>
<script>
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
    };
  },
  components: {},
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
  }
}
</style>
