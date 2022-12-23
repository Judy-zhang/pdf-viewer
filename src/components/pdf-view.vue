<template>
  <div>
      <iframe :src="'../../static/pdf/web/viewer.html?file='+ url" height="1000px" width="100%"></iframe>
  </div>
</template>

<script>
export default {
  name: 'PdfView',
  data () {
    return {
      url: ''
    }
  },
  created () {
    // this.url = 'https://assets.kpmg/content/dam/kpmg/cn/pdf/zh/2021/12/china-tax-alert-39.pdf'
    this.url = '/static/test.pdf'
  },
  methods: {}
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
