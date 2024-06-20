<template>
  <div class="app-container">
    <header class="navbar">
      <img src="/src/assets/pic/pharma.jpg" alt="Logo" />

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
            <router-link to="/vendors"><i class="pi pi-users"></i> Vendors</router-link>
          </li>
          <li>
            <router-link to="/returns" class="active"
              ><i class="pi pi-refresh"></i> Returns</router-link
            >
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
          <h1>Return Products</h1>
          <div class="return-product-list">
            <table>
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in returnProducts" :key="product.id">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.amount }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button
            label="Download PDF"
            icon="pi pi-download"
            class="p-button-success p-mt-3"
            @click="downloadPDF"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'

const returnProducts = ref([
  {
    id: 'RP001',
    name: 'Product A',
    amount: 10
  },
  {
    id: 'RP002',
    name: 'Product B',
    amount: 5
  },
  {
    id: 'RP003',
    name: 'Product C',
    amount: 20
  },
  {
    id: 'RP004',
    name: 'Product D',
    amount: 15
  }
])

const downloadPDF = () => {
  const doc = new jsPDF()
  doc.text('Return Products', 20, 10)
  doc.autoTable({
    head: [['Product ID', 'Product Name', 'Amount']],
    body: returnProducts.value.map((product) => [product.id, product.name, product.amount])
  })
  doc.save('return-products.pdf')
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  display: flex;
  /* Add space between logo and avatar */
  align-items: center; /* Center items vertically */
  width: 1355px;
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
  flex-grow: 1;
}

.sidebar {
  width: 220px;
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
  flex-grow: 1;
  padding: 1rem;
}

.return-product-list {
  margin-top: 2rem;
}

.return-product-list table {
  width: 100%;
  border-collapse: collapse;
}

.return-product-list th,
.return-product-list td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
button {
  background-color: rgb(19, 139, 168);
  margin-top: 10px;
  border-radius: 10px;
  border-color: rgb(19, 139, 168);
}
</style>
