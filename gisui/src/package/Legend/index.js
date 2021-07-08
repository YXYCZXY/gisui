import SipLegend from './sip-legend.vue';

//定义插件 插件有个install方法 传入两个参数
//SipLegend.name 组件名 SipLegend 组件
SipLegend.install = Vue => Vue.component(SipLegend.name, SipLegend);


//导出
export default SipLegend;
