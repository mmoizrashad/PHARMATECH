<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const username = ref('')
const firstname = ref('')
const lastname = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const role = ref('')
const showDialog = ref(false)

const handleSignup = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }
  showDialog.value = true
}
</script>

<template>
  <div class="Signup-wrapper">
    <header class="navbar">
      <img src="/src/assets/pic/pharma.jpg" alt="Logo" />
    </header>

    <div class="signup-box">
      <h2>Create Your Account</h2>
      <h1>Sign Up</h1>
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" placeholder="Enter Username" required />

      <label for="fullname">Full Name</label>
      <div class="name-inputs">
        <input
          type="text"
          id="firstname"
          v-model="firstname"
          placeholder="Enter first name"
          required
        />
        <input
          type="text"
          id="lastname"
          v-model="lastname"
          placeholder="Enter last name"
          required
        />
      </div>

      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" placeholder="test@gmail.com" required />

      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="********"
        minlength="8"
        required
      />
      <div class="pass">
        <label for="password" id="passs"> *Password must contain at least 8 characters</label>
      </div>

      <label for="confirm-password">Confirm Password</label>
      <input
        type="password"
        id="confirm-password"
        v-model="confirmPassword"
        placeholder="********"
        minlength="8"
        required
      />

      <label for="role">Role</label>
      <div class="role-options">
        <label> <input type="radio" value="vendor" v-model="role" /> Vendor </label>
        <label> <input type="radio" value="admin" v-model="role" /> Admin </label>
      </div>

      <div class="card flex justify-content-center">
        <Button label="Signup" @click="handleSignup" />
      </div>
      <div class="register-link">
        <p>
          Already have an account?
          <router-link to="/">Login</router-link>
        </p>
      </div>
    </div>

    <Dialog v-model:visible="showDialog" header="Success" modal>
      <p>Signup successful! Role: {{ role }}</p>
      <Button label="Close" @click="showDialog = false" />
    </Dialog>
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.Signup-wrapper {
  background-image: url('/src/assets/pic/signup.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: auto;
  width: 101.35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Poppins', sans-serif;
  margin-top: -10px;
  margin-left: -10px;
}

.navbar {
  display: flex;
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  background: var(--White-background, #fff);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.navbar img {
  height: 120%;
  margin: 0 10px;
}

.signup-box {
  padding: 20px;
  margin-bottom: 20px;
  padding-bottom: -20px;
  margin-top: 20px;
  margin-left: 100px;
  border-radius: 17.458px;
  background: #fff;
  box-shadow: 0px 16.585px 34.916px 0px rgba(0, 0, 0, 0.05);
  width: 490px;
  height: auto;
}

.signup-box h2 {
  color: rgba(0, 0, 0, 0.5);
  font-size: 15.2px;
  margin-bottom: 10px;
}

.signup-box h1 {
  font-size: 35px;
  margin-bottom: 20px;
}

.signup-box label {
  font-size: 13.6px;
  font-weight: 600;
}

.signup-box input {
  width: calc(100% - 10px);
  height: 43.699px;
  background: #f4f8ff;
  border: 1px solid #ccc;
  border-radius: 3.8px;
  padding: 0 10px;
  margin-bottom: 20px;
}

.name-inputs {
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
}

.name-inputs input {
  width: 48%;
}

.pass {
  color: rgba(0, 0, 0, 0.5);
  font-family: Content;
  font-size: 8px;
  font-style: normal;
  font-weight: 200px;
  line-height: normal;
  margin-top: -18px;
  margin-bottom: 10px;
}

#passs {
  font-family: Poppins;
  font-size: 13px;
}

.card {
  text-align: center;
}

.card button {
  background-color: rgb(19, 139, 168);
  margin-top: 10px;
  border-radius: 1px;
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

.role-options {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
