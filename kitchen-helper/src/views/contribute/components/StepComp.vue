<template>
  <div>
    <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="contributeForm.text">
    </el-input>
    <el-upload action="#" list-type="picture-card" :auto-upload="false">
      <i slot="default"></i>
      <div slot="file" slot-scope="{file}">
        <img :src="file.url" alt="">
        <span>
          <span @click="handlePictureCardPreview(file)">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span v-if="!disabled" @click="handleRemove(file)">
            <i></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
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
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: "",
    };
  },
  components: {},
  watch: {},
  methods: {
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

<style lang='stylus' scoped></style>
