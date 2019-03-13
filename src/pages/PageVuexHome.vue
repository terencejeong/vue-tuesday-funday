<template>
  <div>
    <h1>Vuex Users</h1>
    <ul v-if="usersInStore">
      <li v-for="user in users" :key="user.name">
        {{user.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from 'vuex'
  export default {
    name: 'PageVuexHome',
    computed: {
      ...mapState('users', {
        users: (state) => state.users
      }),
      ...mapGetters('users', ['usersInStore'])
    },
    methods: {
      ...mapActions('users', ['getAllUsers'])
    },
    created () {
      this.getAllUsers()
    },
  };
</script>

<style scoped>

</style>
