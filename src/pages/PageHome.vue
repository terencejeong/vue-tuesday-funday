<template>
  <div>
    Page home
    <Form @save="displayFormData" :fruit="fruit" @listen="changeFruit" />
    <ul>
      <li v-for="user in users" :key="user.name">
        {{user.name}}
      </li>
      <div>{{getUserWithName}}</div>
    </ul>
  </div>
</template>

<script>
  import Form from '@/components/Form'
  export default {
    name: 'PageHome',
    components: {
      Form
    },
    data () {
      return {
        users: [],
        fruit: 'apple'
      }
    },
    created () {
      setTimeout(() => {
        this.users = [
          {name: 'guy1', lastName: 'buddy1', email: 'guy1@mail.com'},
          {name: 'guy2', lastName: 'buddy2', email: 'guy2@mail.com'}
        ]
      }, 3000)
    },
    methods: {
      displayFormData (formData) {
        this.users.push(formData)
      },
      reverseUsername () {
        return this.users[0].name.split('').reverse().join('')
      },
      changeFruit(fruit) {
        this.fruit = fruit
      },
    },
    computed: {
      checkUsers () {
        return this.users.length > 0
      },
      computedReverseUsername () {
        return this.users[0].name.split('').reverse().join('')
      },
      getUserWithName () {
        return this.users.filter(user => user.name === 'guy1')
      }
    }
  };
</script>

<style scoped>

</style>
