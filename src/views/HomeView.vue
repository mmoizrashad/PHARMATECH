<template>
  <div class="admin-dashboard">
    <header class="navbar">
      <img src="/src/assets/pic/pharma.jpg" alt="Logo" />
      <div class="nav-buttons">
        <router-link to="/sales">
          <Button label="Dashboard" class="nav-button" />
        </router-link>
      </div>
      <div class="logout-button">
        <Button label="Logout" class="nav-button" @click="handleLogout" />
      </div>
    </header>
    <div class="welcome-message">
      <p>Hello Moiz!</p>
    </div>
    <div class="branches-wrapper">
      <div class="branches-container">
        <h2 style="text-align: left">Branches</h2>
        <div v-for="(branch, index) in branches" :key="index" class="branch">
          <router-link :to="'/sales/'">
            <h2>{{ branch.name }}</h2>
            <img :src="branch.image" alt="Branch Image" />
            <p>Code: {{ branch.code }}</p>
            <p>Manager: {{ branch.manager }}</p>
          </router-link>
        </div>
      </div>
      <div class="add-branch-button">
        <Button label="Add Branch" @click="showDialog = true" />
      </div>
    </div>

    <!-- Add Branch Dialog -->
    <Dialog v-model:visible="showDialog" modal header="Add Branch" :style="{ width: '25rem' }">
      <span class="p-text-secondary block mb-5">Enter New branch details.</span>
      <div class="field">
        <label for="branchName">Branch Name</label>
        <InputText v-model="newBranch.name" id="branchName" class="flex-auto" autocomplete="off" />
      </div>
      <div class="field">
        <label for="branchImage">Image URL</label>
        <InputText
          v-model="newBranch.image"
          id="branchImage"
          class="flex-auto"
          autocomplete="off"
        />
        <input type="file" @change="onImageChange" />
      </div>
      <div class="field">
        <label for="Licence Code">Licence Code</label>
        <InputText v-model="newBranch.code" id="branchCode" class="flex-auto" autocomplete="off" />
      </div>
      <div class="field">
        <label for="branchManager">BranchManager</label>
        <InputText
          v-model="newBranch.manager"
          id="branchManager"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="dialog-actions">
        <Button
          type="button"
          label="Cancel"
          class="p-button-secondary"
          @click="showDialog = false"
        />
        <Button type="button" label="Save" @click="addBranch" />
      </div>
    </Dialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { useRouter } from 'vue-router'

export default {
  name: 'AdminDashboard',
  components: {
    Dialog,
    Button,
    InputText
  },
  setup() {
    const router = useRouter()
    const showDialog = ref(false)
    const branches = ref([
      {
        name: 'Branch 1',
        image: '/src/assets/pic/branch4.jpg',
        code: 'BR001',
        manager: 'Moiz'
      },
      {
        name: 'Pharmcy online',
        image: '/src/assets/pic/branch 2.png',
        code: 'BR002',
        manager: 'Usama Faisal'
      },
      {
        name: 'D watson',
        image: '/src/assets/pic/branch 1.png',
        code: 'BR003',
        manager: 'Usama AHmad'
      }
    ])

    const newBranch = ref({
      name: '',
      image: '',
      code: '',
      manager: ''
    })

    const addBranch = () => {
      branches.value.push({ ...newBranch.value })
      newBranch.value = { name: '', image: '', code: '', manager: '' }
      showDialog.value = false
    }

    const onImageChange = (event) => {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        newBranch.value.image = e.target.result
      }
      reader.readAsDataURL(file)
    }

    const handleLogout = () => {
      // Perform any necessary logout logic, like clearing tokens or session data
      router.push('/')
    }

    return {
      showDialog,
      branches,
      newBranch,
      addBranch,
      onImageChange,
      handleLogout
    }
  }
}
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  background: #f4f8ff;
}

.admin-dashboard {
  padding-top: 60px;
  text-align: center;
}

.navbar {
  display: flex;
  align-items: center;
  /* Adjusted to space items between */
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  background: var(--White-background, #fff);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 1000;
  margin-left: -10px;
}

.navbar img {
  height: 120%;
  margin: 0 10px;
}

.nav-buttons {
  display: flex;
  gap: 20px;
}

.logout-button {
  margin-left: auto;
}

.nav-button {
  background-color: rgb(19, 139, 168);
  color: #fff;
  padding: 8px 20px;
  border: none;
  border-radius: 21.849px;
  cursor: pointer;
  margin-left: 400px;
}

.welcome-message p {
  font-size: 24px;
  margin: 20px 0;
  margin-right: 1100px;
}

.branches-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -10px;
}

.branches-container {
  width: 80%;
  max-width: 1200px;
  max-height: 500px;
  padding: 20px;
  border-radius: 17.458px;
  background: #fff;
  box-shadow: 0px 16.585px 34.916px 0px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  margin-top: -10px;
  overflow-y: auto;
}

.branch {
  background: #fff;
  border-radius: 17.458px;
  padding: 20px;
  margin-bottom: 20px;
  margin-left: 30px;
  width: 300px;
  display: inline-block;
  vertical-align: top;
  background: rgb(244, 248, 255);
}

.branch h2 {
  font-size: 20px;
  margin-bottom: 10px;
  background-color: white;
  padding: 15px;
}

.branch img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.branch p {
  font-size: 16px;
  margin: 5px 0;
  background: #f4f8ff;
}

.add-branch-button {
  text-align: right;
  margin-left: 900px;
}

.add-branch-button button {
  background-color: rgb(19, 139, 168);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 21.849px;
  cursor: pointer;
}

/* Styles for the dialog */
.field {
  margin-bottom: 1rem;
}

.field label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

input[type='file'] {
  margin-top: 0.5rem;
}
</style>
