# tuesday-funday

## What we will cover (hopefully)
- Creating a Vue Component
- Explaining Data, Computed and Method properties
- Passing props to components
- Emitting data back up to parents
- v-for loop
- Creating a form in Vue
- Migrating to Vuex
- Actions, Getters, Mutations in Vuex.

### Creating a Vue Component
- Very simple. All components have
```vue
<template>
  <!-- html content-->
</template>

<script>
  export default {
    // data, computed, lifecycle, methods here
  }
</script>

<style scoped>
  /*styling here*/
</style>
```

### Passing Props to the Component.
- Again, pretty simple, we want to bind the props to the component we want to pass it to.

```vue
<template>
  <SomeComponent v-bind:someProps="propsInParentComponent" />
</template>

<script>
export default {
  data () {
    return {
      propsInParentComponent: 'some props'
    }
  }
}
</script>
``` 

- Then, in the child component, we have to accept the props. 
- Please note the short hand for 'v-bind:' is just ':' 

```vue
<template>
  <span>{{someProps}}</span>
</template>

<script>
  export default {
    props: {
      someProps: {
        required: true,
        type: String
      }
    }
  }
</script>

```
### Data
Basically where we give 'state' to the component. Vue looks at the data object and adds all the
properties to Vue's reactivity system. When the values of those properties change, the view will
 “react”, updating to match the new values. 

### Computed properties
The template is meant to be kept simple. To display complex logic, we generally use computed 
properties. The advantages are as following
1) Abstracts complex logic away from the view
2) Computed properties are cached based on their reactive dependencies. Will only change when some
of its reactive dependencies have changed. 

### Methods
This is where we want to create side-effects, change the data properties. Please note, a method will
always run the function whenever a re-render happens. 


