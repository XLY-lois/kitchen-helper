<template>
  <div class="header-container">
    <el-row>
      <el-col :span="8">
        <div class="header-logo">
          <span class="header-logo-img"></span>
          <span class="header-logo-title">kitchen-helper</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="header-searching">
          <el-input placeholder="请输入内容" v-model="menuSearch" size="small">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="header-user" v-if="logined">
          <div class="header-user-avatar">
            <img :src="imgUrl + user.avatar_url">
          </div>
          <div class="header-user-more">
            <el-popover placement="top-start" trigger="hover">
              <div class="header-user-more-popover">
                <div class="popover-item" @click="toPage('user')">用户信息</div>
                <div class="popover-item" @click="toPage('contribute')">投稿</div>
                <div class="popover-item">退出</div>
              </div>
              <el-button slot="reference" size="mini">更多</el-button>
            </el-popover>
          </div>
        </div>
        <div class="header-user" v-else>
          <el-button class="header-user-tologin" size="mini" @click="toLogin">
            登录/注册
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import userInfo from "@/views/userInfo";

export default {
  data() {
    return {
      dialogVisible: false,
      menuSearch: "",
      imgUrl: "http://192.168.1.105:8888/api/static/",
    };
  },
  components: {
    userInfo,
  },
  computed: {
    ...mapGetters(["user", "logined"]),
  },
  methods: {
    toPage(page) {
      this.$emit("toPage", page);
    },
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 100%;
  background: rgba(235, 188, 118, 0.76);
  .header-logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    margin-left: 10px;
    .header-logo-img {
      width: 30px;
      height: 30px;
      background-color: rgb(196, 46, 46);
    }
    .header-logo-title {
      margin-left: 10px;
    }
  }
  .header-searching {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
  }
  .header-user {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    margin-right: 20px;
    .header-user-avatar {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .header-user-more {
      margin-left: 10px;
    }
    .header-user-tologin {
      margin-left: 10px;
    }
  }
}
.header-user-more-popover {
  .popover-item {
    margin: 5px 10px;
    cursor: pointer;
  }
  div:hover {
    background-color: rgba(209, 240, 152, 0.349);
  }
}
</style>
