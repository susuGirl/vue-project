<template>
  <div>
     <div @click="secondPage">entryOtherPage</div>
  </div>
</template>

<script>

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
    secondPage () {
      this.$router.push({
        name: 'secondPage'
      })
    }

  },
  created () {

  },
  mounted () {

  },
  beforeDestroy () {

  }
}
</script>
