<template>
  <div class="app-container">
    <!-- Header -->
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

    <!-- Sidebar and main content -->
    <div class="content-container">
      <!-- Sidebar -->
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
            <router-link to="/employees" class="active"
              ><i class="pi pi-users"></i> Employees</router-link
            >
          </li>
          <li>
            <router-link to="/vendors"><i class="pi pi-users"></i> Vendors</router-link>
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

      <!-- Main content area -->
      <main class="main">
        <!-- Employees Content -->
        <div>
          <h1>Employees</h1>
          <p>Following is the list of employees working</p>
          <div class="employee-list">
            <table>
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>CNIC</th>
                  <th>Emergency Contact</th>
                  <th>Role</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                  <td><img :src="employee.avatar" alt="Avatar" class="employee-avatar" /></td>
                  <td>{{ employee.id }}</td>
                  <td>{{ employee.name }}</td>
                  <td>{{ employee.email }}</td>
                  <td>{{ employee.phone }}</td>
                  <td>{{ employee.cnic }}</td>
                  <td>{{ employee.emergencyContact }}</td>
                  <td>{{ employee.role }}</td>
                  <td>{{ employee.salary }}</td>
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

const employees = ref([
  {
    id: 'EMP123',
    name: 'Ali Hassen',
    email: 'ali@gmail.com',
    phone: '0311-1234567',
    cnic: '33333-3333',
    emergencyContact: '0321-1234567',
    role: 'Worker',
    salary: '11,000',
    avatar: '/src/assets/pic/Ellipse 1.png'
  },
  {
    id: 'EMP133',
    name: 'Rameen Ali',
    email: 'rameenali@gmail.com',
    phone: '0311-1234567',
    cnic: '33333-3333',
    emergencyContact: '0321-1234567',
    role: 'Manager',
    salary: '50,000',
    avatar: '/src/assets/pic/Ellipse 1.png'
  }
  // Add more employees as needed
])
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.navbar {
  display: flex;
  justify-content: space-between; /* Add space between logo and avatar */
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
  margin-left: 500px;
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
  flex: 1;
}

.sidebar {
  width: 200px;
  background-color: #f4f8ff;
  padding: 20px;
  margin-left: -10px;
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
  flex: 1;
  padding: 20px;
}

.employee-list {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.employee-list table {
  width: 100%;
  border-collapse: collapse;
}

.employee-list th,
.employee-list td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.employee-list th {
  background-color: #f4f4f4;
}

.employee-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
