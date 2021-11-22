<template>
  <div>
    <h3>当前count的值为{{ count }}</h3>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'my-subtraction',
  methods: {
    ...mapMutations(['sub']),
  },
  computed: {
    ...mapState(['count']),
  },
}
</script>

<style></style>
