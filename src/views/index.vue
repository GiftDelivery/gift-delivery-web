<template>
  <div>
    <el-card class="box-card">
      <template #header>仪表盘</template>
      <div class="notice-title">梅州邮政禁发地区，请各位站长知悉！！！如下：</div>
      <div class="notice-tips">
        西藏，青海，新疆，北京，天津，甘肃，宁夏，内蒙古，辽宁，吉林，黑龙江等地，出单均不发货，没有物流，停发，请知悉
      </div>
    </el-card>

    <el-row :gutter="20" class="gird-panle">
      <el-col :sm="24" :lg="12">
        <el-card class="box-card">
          <template #header>
            <el-row type="flex" justify="space-between">
              <span>网站信息</span>
              <el-dropdown style="line-height: 18px">
                <span class="el-dropdown-link">
                  {{ codeTitle }}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="codeTitle = '我的授权码'">我的授权码</el-dropdown-item>
                    <el-dropdown-item @click="codeTitle = '微信商户号'">微信商户号</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-row>
          </template>
          <h4 style="margin: 0; text-align: center"> {{ codeTitle }}: {{ code }} </h4>
        </el-card>
      </el-col>

      <el-col :sm="24" :lg="12">
        <el-card class="box-card">
          <template #header>便捷入口</template>
          <div>
            <el-button v-for="(item, index) in entranceList" :key="index" @click="gotoEntrance(item)">
              {{ item.name }}
            </el-button>
          </div>
        </el-card>
      </el-col>

      <el-col :sm="24" :lg="12">
        <el-card class="box-card">
          <template #header>站点统计</template>
          <el-row :gutter="15">
            <el-col :span="8" align="right"><span class="card-label">商户：</span></el-col>
            <el-col :span="16"><span class="card-value">630 (个)</span></el-col>
          </el-row>
          <el-row :gutter="15">
            <el-col :span="8" align="right"><span class="card-label">下级站长：</span></el-col>
            <el-col :span="16"><span class="card-value">630 (个)</span></el-col>
          </el-row>
          <el-row :gutter="15">
            <el-col :span="8" align="right"><span class="card-label">下级累计收益：</span></el-col>
            <el-col :span="16"><el-button type="text">0（元）</el-button></el-col>
          </el-row>
          <el-row :gutter="15">
            <el-col :span="8" align="right"><span class="card-label">下级预计收入：</span></el-col>
            <el-col :span="16"><el-button type="text">0（元）</el-button></el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :sm="24" :lg="12">
        <el-card class="box-card">
          <template #header>综合运营</template>
          <el-row :gutter="15">
            <el-col :span="8" align="right"><span class="card-label">今日订单：</span></el-col>
            <el-col :span="16"><span class="card-value">10 (单)</span></el-col>
          </el-row>
          <el-row :gutter="15">
            <el-col :span="8" align="right"><span class="card-label">总订单数：</span></el-col>
            <el-col :span="16"><span class="card-value">13570 (单)</span></el-col>
          </el-row>
          <el-row :gutter="15">
            <el-col :span="8" align="right"><span class="card-label">预充值总额：</span></el-col>
            <el-col :span="16"><span class="card-value">53500.00（元）</span></el-col>
          </el-row>
          <el-row :gutter="15">
            <el-col :span="8" align="right"><span class="card-label">商户充值：</span></el-col>
            <el-col :span="16"><span class="card-value">65597.34（元）</span></el-col>
          </el-row>
          <el-row :gutter="15">
            <el-col :span="8" align="right"><span class="card-label">账户余额：</span></el-col>
            <el-col :span="16"><span class="card-value red">273.60（元）</span></el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :sm="24" :lg="12">
        <el-card class="box-card">
          <template #header>开通个人账户及时到账</template>
          <div> <img :src="qrCode" class="qr-code" /> </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import QRImg from '@/assets/img/QR.jpg'
  export default defineComponent({
    data() {
      return {
        qrCode: QRImg,
        codeTitle: '我的授权码',
        entranceList: [
          {
            name: '网站续费'
          },
          {
            name: '站点充值'
          },
          {
            name: '购买域名'
          },
          {
            name: '申请商户号'
          }
        ]
      }
    },
    computed: {
      code() {
        let code = this.codeTitle === '我的授权码' ? '123456' : ''
        return code || '暂未开通'
      }
    },
    methods: {
      gotoEntrance(item) {
        console.log(item)
      }
    }
  })
</script>

<style lang="scss" scoped>
  .notice-title {
    font-weight: 600;
    font-size: 18px;
  }
  .notice-tips {
    margin-top: 10px;
    background-color: #ecf5ff;
    border: 1px dashed #409eff;
    padding: 0 5px;
    font-size: 16px;
    line-height: 34px;
    color: #409eff;
    font-weight: bold;
  }
  .gird-panle {
    & > div:not(:nth-child(1)):not(:nth-child(2)) {
      margin-top: 20px;
    }
    .card-label {
      font-weight: 500;
      line-height: 32px;
      font-size: 12px;
    }
    .card-value {
      font-size: 12px;
      line-height: 32px;
    }
    .qr-code {
      width: 60%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
  }
</style>
