<template>
  <div>
     <div @click="entryIndex">login</div>
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
    entryIndex () {
      this.$router.push({
        name: 'entryIndex'
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
