<template>
    <div>
      <div> <van-nav-bar
      title="常见问题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    /></div>
 <van-collapse v-model="activeNames">
  <van-collapse-item title=" 配送运费如何收取，多少钱包邮？ " name="1">   1、易果物流配送区域范围内购物满100元，免费送货；不满100元，每单收取10元运费，特殊区域以系统实际计算为准。<br /> 2、其他地区运费按照第三方物流的收费标准执行，选好商品及收货地址后会自动计算。</van-collapse-item>
  <van-collapse-item title="配送区域及送达时间？" name="2">参见配送范围和时间</van-collapse-item>
  <van-collapse-item title="下单后何时可以送达？" name="3"> 次日达地区（当天18：00之前下单（特殊商品除外），次日安排配送，部分区域16:00进行截单，具体以实际截单时间为准
                    <br /> 上海（除崇明三岛）
                    <br /> 苏州（吴中区，相城区，姑苏区，工业园区，高新区）
                    <br /> 昆山（花桥开发区，玉山镇，兵希镇，蓬朗镇，新镇，陆家镇）
                    <br /> 无锡（北塘区，崇安区，南长区，滨湖区，锡山区，惠山区，新区）
                    <br /> 杭州（下城区，上城区，西湖区，滨江区，江干区，拱墅区，余杭区，萧山区）
                    <br /> 宁波（江北区，海曙区，江东区，鄞州区，镇海区）
                    <br /> 北京（除延庆县，密云县，怀柔区, 平谷区）
                    <br /> 天津（除蓟县）
                    <br /> 东莞，中山，珠海，深圳，广州，佛山
                    <br /> 石家庄（长安区，新华区，桥西区，桥东区，裕华区）
                    <br /> 廊坊（广阳区，安次区）
                    <br /> 邯郸市（复兴区、丛台区、邯山区）
                    <br /> 保定市（北市区、南市区、新市区）
                    <br /> 张家口市（桥东区、桥西区）
                    <br /> 唐山市（路南区、路北区）
                    <br /> 秦皇岛市（海港区、山海关区、北戴河区）
                    <br /> 沧州市（新华区、运河区）
                    <br /> 衡水市（桃城区）
                    <br /> 邢台市（桥西区、桥东区）
                    <br />
                    <strong> 隔日达地区（当天16:00之前下单，特殊商品除外）：</strong> <br /> 次日达地区之外其他地区</van-collapse-item>
  <van-collapse-item title="可以选择哪些方式付款？" name="4"> <strong> 未提交订单：</strong>您可以在【填写核对订单信息】页面，选择您所要更改类别右侧的【更改】链接，直接更改即可；<br />
                    <strong> 已提交订单：</strong>请您拨打易果客服热线400-000-7788请客服帮忙修改。</van-collapse-item>
  <van-collapse-item title="下错单了，该如何修改？" name="5"> 1、储值卡、充值卡等预存款支付 <br /> 2、在线支付：微信、支付宝、银联手机支付、信用卡支付；</van-collapse-item>
  <van-collapse-item title="我的历史订单为什么不见了？" name="6">  亲爱的顾客，2014年11月份之前的订单，可以在www.yiguo.com查询。若还有其他疑问，可致电客服400-000-7788进行咨询。</van-collapse-item>
  <van-collapse-item title=" 如何申请注销易果账户？" name="7">  为了保护客户权益，请确保账户余额已经用完毕且账户不再使用。满足条件的，可在线联系客服申请，客服会依据实际情况受理。</van-collapse-item>
  <van-collapse-item title="退款何时可以到账？ " name="8">付款渠道不同，退款到账时间有差异：</van-collapse-item>
  <van-collapse-item title="如何申请退换货？" name="9">  自客户签收商品算起的24小时内，商品如出现质量、数量问题，我们将提供退换货的服务。<br /> 若收到的商品有质量问题，可以到我司官网【会员中心】--【售后服务】中的【在线退换货】，或者在手机APP端屏幕右下角【我的易果】--【客服中心】中的【在线退换货】进行申请。收到申请后，我司专员在一个工作日内与您联系。
                    <br /> 通过退换货通道做申请，请您
                    <strong> 上传退换货商品的整体照，并提供签收单或标签的图片且保留商品</strong>，以便于客服人员及时处理您的问题。<br /> 您成功申请退换货后，请手机保持通畅，以便于我们手机或短信通知您。</van-collapse-item>
  <van-collapse-item title=" 哪些情况只受理当场投诉？" name="10">   1，对于货物数量缺失的情况，我们只受理当场投诉，即货物配送到家后，客户当面清点货物数量并及时向配送员提出的投诉。一旦签收，我们将不受理此退换要求。 <strong>
                        新鲜蔬菜和部分特殊商品 </strong>（商品说明中会提示）只受理当场投诉，一旦签收，将不再接受退换要求。<br /> 为了您的利益，请收到货物后仔细清点检查您订购的商品。如商品配送有误、包装破损、产品腐烂、数量不对等问题，请当面及时向配送人员提出，以便我们能尽快的为您处理。</van-collapse-item>

</van-collapse>

    </div>
</template>

<script>
import Vue from 'vue';
import { Collapse, CollapseItem } from 'vant';

Vue.use(Collapse);
Vue.use(CollapseItem);
export default {
     data() {
    return {
      activeNames: [],
    };
  },
  methods: {
         onClickLeft() {
        this.$router.go(-1);
      },
    },
    created() {
        this.$store.commit("isShowFooterNav", false);
    },
}
</script>