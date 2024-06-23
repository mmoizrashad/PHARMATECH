<script setup>
import { ref } from 'vue'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Password from 'primevue/password'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleSubmit = async () => {
  // Perform any validation or form submission logic here
  let response = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  response = await response.json()
  console.log('Response: ', response)
  localStorage.setItem('access_token', response.data.access_token)
  let user = await fetch('http://localhost:3000/api/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: response.data.access_token
    }
  })
  user = await user.json()
  console.log('User: ', user)
  if (user.data.type === 'admin') router.push('/home')
  else router.push('vendordashboard')
}
</script>

<template>
  <div
    class="login-wrapper"
    style="
      width: 100.8%;
      height: 99vh;
      background-image: url('src/assets/pic/login.jpeg');
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -10px;
      margin-bottom: -10px;
      margin-left: -5px;
      font-family: Poppins;
    "
  >
    <div class="login-container">
      <p>Welcome back!!!</p>
      <h1>Sign in</h1>
      <form id="loginForm" action="#" method="post" @submit.prevent="handleSubmit">
        <FloatLabel>
          <InputText id="Email" v-model="email" />
          <label for="email">Email</label>
        </FloatLabel>

        <FloatLabel>
          <Password v-model="password" inputId="password" />
          <label for="password">Password</label>
        </FloatLabel>

        <div id="forget"><router-link to="/forget">Forget Password?</router-link></div>

        <div class="card flex justify-content-center">
          <Button label="Submit" @click="handleSubmit" />
        </div>
        <div class="register-link">
          <p>
            Don't have an account?
            <router-link to="/Signup">Sign up</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  align-items: center;
  width: 33%;
  padding: 40px 20px;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0px 16px 35px rgba(0, 0, 0, 0.05);
  height: auto;
  margin-left: 540px;
}

.login-container p {
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  margin: 0;
}

.login-container h1 {
  color: #000;
  font-size: 50px;
  margin: 10px 0 30px;
  padding-right: 100px;
}

.p-inputtext {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #f4f8ff;
  margin-top: 5px;
}

.p-float-label {
  margin-top: 40px;
  width: 100%;
}

.p-password {
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #f4f8ff;
  margin-top: 5px;
}

.card {
  text-align: center;
}
.card button {
  background-color: rgb(19, 139, 168);
  margin-top: 30px;
  border-radius: 6px;
  margin-top: 0px;
}

#forget {
  text-align: right;
}

.register-link {
  text-align: center;
}

a {
  color: #138ba8;
  text-decoration: none;
}
</style>
