<template>
  <div id="app">
    <sip-legend :led="stops" :mode="place" unit="单位"/>
  </div>
</template>

<script>
const stops = [
  {
    "min": 0,
    "max": 0,
    "color": "#00F9F3"
  },
  {
    "min": 0,
    "max": 2,
    "color": "#00DBED"
  },
  {
    "min": 2,
    "max": 5,
    "color": "#00BEE8"
  },
  {
    "min": 5,
    "max": 7,
    "color": "#00A1E3"
  },
  {
    "min": 7,
    "max": 29,
    "color": "#0084DE"
  }]
const place = "bottomleft" //custom 自定义 bottomleft 左下 bottomright 右下 topleft 左下 topright 右下
export default {
  name: 'app',
  data () {
    return {
      place:place,
      stops:stops
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
