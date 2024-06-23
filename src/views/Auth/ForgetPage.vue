<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const email = ref('')
const phone = ref('')
const showDialog = ref(false)

const handleSubmit = (e) => {
  e.preventDefault()
  showDialog.value = true
}
</script>

<template>
  <div class="forget-wrapper">
    <header class="navbar">
      <img src="/src/assets/pic/pharma.jpg" alt="Logo" />
    </header>
    <div class="forget-container">
      <p>We are sorry for the inconvenience</p>
      <h1>Forget Password</h1>
      <form @submit="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <h3>AND</h3>
        <div class="form-group">
          <label for="phone number">Phone Number</label>
          <input
            type="text"
            id="phone"
            v-model="phone"
            placeholder="+92| Enter phone number here"
          />
        </div>
        <div class="form-group sign-in-button">
          <button type="submit">Send link</button>
        </div>
        <div class="register-link">
          <p>
            Account instead?
            <router-link to="/signup">Signup</router-link>
          </p>
        </div>
      </form>
    </div>

    <Dialog v-model:visible="showDialog" header="Success" modal>
      <p>Login link has been sent to your email or phone number.</p>
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

.forget-wrapper {
  background-image: url('/src/assets/pic/forget.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
}

.navbar {
  display: flex;
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  background: var(--White-background, #fff);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
}

.navbar img {
  height: 130%;
  margin: 0 10px;
}

.forget-container {
  width: 460px;
  padding: 30px;
  margin-left: 500px;
  border-radius: 17.458px;
  background: #fff;
  box-shadow: 0px 16.585px 34.916px 0px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.forget-container p {
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  text-align: left;
}

.forget-container h1 {
  color: #000;
  font-size: 45px;
  margin-bottom: 20px;
  text-align: left;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
}

.form-group input {
  width: 100%;
  height: 40px;
  background: #f4f8ff;
  border: 1px solid #ccc;
  border-radius: 3.8px;
  padding: 8px;
}

.sign-in-button {
  text-align: center;
}

.sign-in-button button {
  background-color: rgb(19, 139, 168);
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 21.849px;
  cursor: pointer;
  width: 30%;
}

.register-link {
  margin-top: 20px;
}

.register-link p {
  text-align: center;
}

a {
  color: #138ba8;
  text-decoration: none;
}

/* Media Queries for Responsiveness */
@media (max-width: 1024px) {
  .forget-container {
    width: 80%;
  }
  .sign-in-button button {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .forget-container {
    width: 90%;
  }
  .forget-container h1 {
    font-size: 35px;
  }
  .sign-in-button button {
    width: 60%;
  }
}

@media (max-width: 480px) {
  .forget-container {
    width: 95%;
  }
  .forget-container h1 {
    font-size: 28px;
  }
  .forget-container p {
    font-size: 16px;
  }
  .sign-in-button button {
    width: 70%;
  }
}
</style>
