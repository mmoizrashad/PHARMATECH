<template>
  <div class="app-container">
    <header class="navbar">
      <img src="/src/assets/pic/pharma.jpg" alt="Logo" />
      <div class="search-container">
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search"></InputIcon>
          <InputText v-model="searchQuery" placeholder="Search..." />
        </IconField>
      </div>
      <div class="avatar-container">
        <Dropdown :model="dropdownItems" icon="pi pi-user" class="p-mr-2" />
      </div>
    </header>

    <div class="content-container">
      <aside class="sidebar">
        <ul>
          <li>
            <router-link to="/sales"><i class="pi pi-tag"></i> Sales</router-link>
          </li>
          <li>
            <router-link to="/purchase"><i class="pi pi-shopping-cart"></i> Purchase</router-link>
          </li>
          <li>
            <router-link to="/inventory"><i class="pi pi-box"></i> Inventory</router-link>
          </li>
          <li>
            <router-link to="/branchmanager"
              ><i class="pi pi-users"></i> Branch Managers</router-link
            >
          </li>
          <li>
            <router-link to="/employees"><i class="pi pi-users"></i> Employees</router-link>
          </li>
          <li>
            <router-link to="/vendors" class="active"
              ><i class="pi pi-users"></i> Vendors</router-link
            >
          </li>
          <li>
            <router-link to="/returns"><i class="pi pi-refresh"></i> Returns</router-link>
          </li>
          <li>
            <router-link to="/expiry"
              ><i class="pi pi-calendar-times"></i> Expiry Products</router-link
            >
          </li>
          <li>
            <router-link to="/"><i class="pi pi-sign-out"></i> Logout</router-link>
          </li>
        </ul>
      </aside>

      <main class="main">
        <div>
          <img
            src="/src/assets/pic/image 2.png"
            alt="Branch Manager Image"
            class="branch-manager-image"
          />
          <h1>Vendor List</h1>
          <div class="vendor-list">
            <table>
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="vendor in vendors" :key="vendor.id">
                  <td><img :src="vendor.avatar" alt="Avatar" class="vendor-avatar" /></td>
                  <td>{{ vendor.name }}</td>
                  <td>{{ vendor.email }}</td>
                  <td>{{ vendor.phone }}</td>
                  <td>
                    <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" />
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'

const searchQuery = ref('')

const dropdownItems = [
  { label: 'Edit Profile', icon: 'pi pi-user-edit', command: () => editProfile() },
  { label: 'Logout', icon: 'pi pi-sign-out', command: () => logout() }
]

const editProfile = () => {
  // Implement edit profile functionality here
  console.log('Editing profile')
}

const logout = () => {
  // Implement logout functionality here
  console.log('Logging out')
}

const vendors = ref([
  {
    id: 'VD001',
    name: 'Ali Hassan',
    email: 'alih456@gmail.com',
    phone: '0321-1234567',
    avatar: '/src/assets/pic/Ellipse 1.png'
  },
  {
    id: 'VD002',
    name: 'Mega Mart',
    email: 'mega.mart@gmail.com',
    phone: '0321-7654321',
    avatar: '/src/assets/pic/Ellipse 1.png'
  }
])
</script>

<style scoped>
.branch-manager-image {
  width: 100%;
}
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  display: flex;
  /* Add space between logo and avatar */
  align-items: center; /* Center items vertically */
  width: 1350px;
  height: 60px;
  padding: 10px 20px;
  margin-left: -10px;
  margin-top: -10px;
  background: var(--White-background, #fff);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.navbar img {
  height: 120%;
  margin: 0 10px;
}

.search-container {
  flex-grow: 1; /* Grow to take up remaining space */
  display: flex;
  margin-left: 300px;
}

.avatar-container {
  display: flex;
  align-items: center;
}

.p-inputtext {
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #f4f8ff;
  margin-top: 5px;
}

.content-container {
  display: flex;
  flex-grow: 1;
}

.sidebar {
  width: 220px;
  background-color: #f4f8ff;
  padding: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 2.5rem;
}

.sidebar a {
  color: #333;
  text-decoration: none;
}

.sidebar a.active {
  font-weight: bold;
}

.main {
  flex-grow: 1;
  padding: 1rem;
}

.vendor-list {
  margin-top: 2rem;
}

.vendor-list table {
  width: 100%;
  border-collapse: collapse;
}

.vendor-list th,
.vendor-list td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.vendor-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
