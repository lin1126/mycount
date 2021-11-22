<template>
  <div>
    <h3>{{ showNum }}</h3>
    <button @click="addAsync">+1</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'my-addition',
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['addAsync']),
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum']),
  },
}
</script>

<style></style>
