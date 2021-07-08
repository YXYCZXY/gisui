<template>
  <div class="legend abs">
	<div v-for="(itme,index) in led" :key="index">
		<i :style="{'background':itme.color}" ></i>{{itme.min}}-{{itme.max}}  {{unit}}
	</div>
  </div>
</template>

<script>
export default {
  name: 'SipLegend',
  methods: {
  },
  mounted () {
    if(this.mode !== 'custom') {
      document.querySelector('.abs').classList.add(this.mode)
    }
  },
  data () {
    return {
    }
  },
  props:{
    led:{
      default:() => {
        return {}
      }
    },
    mode:{
      default:() => {
        return {}
      }
    },
    unit:{
      default:() => {
        return {}
      }
    }
  }
}
</script>

<style scoped>

.legend {
	line-height: 18px;
	color: #555;
}
.bottomleft{
  bottom: 5%;
  left: 5%;
}
.bottomright{
  bottom: 5%;
  right: 5%;
}
.topleft{
  top: 5%;
  left: 5%;
}
.topright{
  top: 5%;
  right: 5%;
}
.legend i {
	width: 40px;
	height: 20px;
	float: left;
	margin-right: 28px;
	opacity: 0.7;
	margin-bottom: 6px;
}
.abs{
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 6px 6px;
  font: 14px/16px Arial, Helvetica, sans-serif;
  background: white;
  background: rgba(255,255,255,0.8);
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  border-radius: 5px
}
</style>
