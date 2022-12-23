<template>
  <div class="hello">
    <h1 style="color: blue;">{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="yulan">预览pdf</button>
    <!-- <iframe :src="'/static/pdf/web/viewer.html?file='+ url" height="560" width="100%"></iframe> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Demo A',
      url: ''
    }
  },
  methods: {
    yulan () {
      this.$router.push({name: 'pdf-view'})
      // this.url = 'https://assets.kpmg/content/dam/kpmg/cn/pdf/zh/2021/12/china-tax-alert-39.pdf'
      // window.open('https://assets.kpmg/content/dam/kpmg/cn/pdf/zh/2021/12/china-tax-alert-39.pdf')
      // this.url = '/static/test.pdf'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
