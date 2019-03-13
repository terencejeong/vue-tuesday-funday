<template>
  <div>
    <form @submit.prevent="save">
      <label>Name</label>
      <input
        name="name"
        :value="name"
        @input="name = $event.target.value"
      />
      <label>Last Name</label>
      <input
        name="lastName"
        :value="lastName"
        @input="lastName = $event.target.value"
      />
      <label>Email</label>
      <input
        name="email"
        v-model="email"
      />
      <button
        type="submit"
      >
        Submit
      </button>
    </form>
    {{fruit}}
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Form',
    props: {
      fruit: {
        required: true,
        type: String
      },
    },
    data () {
      return {
        name: '',
        lastName: '',
        email: ''
      }
    },
    methods: {
      ...mapActions('users', ['createUser']),
      save() {
        const formData = {
          name: this.name,
          lastName: this.lastName,
          email: this.email
        }
        this.$emit('save', formData)
        this.createUser(formData);
        this.name = ''
        this.email = ''
        this.lastName = ''
      },
      changeName ()  {
        // this.company = 'pear'
        this.$emit('listen', 'pear')
      }
    }
  };
</script>

<style scoped>

</style>
