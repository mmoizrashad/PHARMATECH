<template>
  <div class="app-container">
    <!-- Header -->
    <header class="navbar">
      <img src="/src/assets/pic/pharma.jpg" alt="Logo" />
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
            <router-link to="/branchmanager" class="active"
              ><i class="pi pi-users"></i> Branch Managers</router-link
            >
          </li>
          <li>
            <router-link to="/employees"><i class="pi pi-users"></i> Employees</router-link>
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
        <!-- Branch Manager Content -->
        <div>
          <img
            src="/src/assets/pic/image 2.png"
            alt="Branch Manager Image"
            class="branch-manager-image"
          />
          <h1>Branch Manager</h1>
          <p>Following is the list of branch managers working</p>
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
                <tr v-for="manager in managers" :key="manager.id">
                  <td><img :src="manager.avatar" alt="Avatar" class="employee-avatar" /></td>
                  <td>{{ manager.id }}</td>
                  <td>{{ manager.name }}</td>
                  <td>{{ manager.email }}</td>
                  <td>{{ manager.phone }}</td>
                  <td>{{ manager.cnic }}</td>
                  <td>{{ manager.emergencyContact }}</td>
                  <td>{{ manager.role }}</td>
                  <td>{{ manager.salary }}</td>
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

import Button from 'primevue/button'

const managers = ref([
  {
    id: 'BM101',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '0321-1234567',
    cnic: '33333-3333',
    emergencyContact: '0321-1234567',
    role: 'Branch Manager',
    salary: '70,000',
    avatar: '/src/assets/pic/Ellipse 1.png'
  }
  // Add more managers as needed
])
</script>

<style scoped>
.branch-manager-image {
  width: 100%;
}
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
