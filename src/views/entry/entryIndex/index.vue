<template>
  <div>
     <div @click="entryOtherPage">entryIndex</div>
  </div>
</template>

<script>
import entryIndexService from './entryIndexService.js'

export default {
  data () {
    return {

    }
  },
  computed: {

  },
  components: {

  },
  methods: {
    entryOtherPage () {
      this.$router.push({
        name: 'entryOtherPage'
        // path: '/entry/entryOtherPage'
      })
    },
    init (params) {
      return entryIndexService.init(params).then(res => {
        console.log('1111-------', res)
      })
    }

  },
  created () {
    this.init({
      uid: '1000000001',
      nid: 'N001',
      batch_id: '10000000011536035804'
    })
  },
  mounted () {

  },
  beforeDestroy () {

  }
}
</script>
