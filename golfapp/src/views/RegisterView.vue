<template>
  <div>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue'

export default {
  name: 'LoginView',
  components: {
      RegisterForm
      },
  data() {
    return {};
  }
}
</script>