<template>
  <div class="app-container">
    <!-- Header -->
    <header class="navbar">
      <img src="/src/assets/pic/pharma.jpg" alt="Logo" />

      <div class="avatar-container">
        <Dropdown :model="dropdownItems" icon="pi pi-user" class="p-mr-2" />
      </div>
    </header>
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
            <router-link to="/employees"><i class="pi pi-users"></i> Employees</router-link>
          </li>
          <li>
            <router-link to="/vendors"><i class="pi pi-users"></i> Vendors</router-link>
          </li>
          <li>
            <router-link to="/returns"><i class="pi pi-refresh"></i> Returns</router-link>
          </li>
          <li>
            <router-link to="/expiry" class="active"
              ><i class="pi pi-calendar-times"></i> Expiry Products</router-link
            >
          </li>
          <li>
            <router-link to="/login"><i class="pi pi-sign-out"></i> Logout</router-link>
          </li>
        </ul>
      </aside>

      <!-- Main content area -->
      <main class="main">
        <h1>Expiry Products</h1>

        <!-- Display expiry products -->
        <div class="product-container">
          <div v-for="(product, index) in expiryProducts" :key="index" class="product">
            <img :src="product.image" alt="Product Image" class="product-image" />
            <div class="product-details">
              <h2>{{ product.productName }}</h2>
              <p><strong>Category:</strong> {{ product.category }}</p>

              <p><strong>Expiry Reports With in on week</strong> {{ product.expiryDate }}</p>
              <Button
                icon="pi pi-file-pdf"
                class="p-button-rounded p-button-info"
                @click="downloadPDF(product)"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import jsPDF from 'jspdf'

// Dropdown items for the avatar menu

// Sample data for expiry products

const expiryProducts = ref([
  {
    productName: 'Product A',
    category: 'Category A',
    expiryDate: '2024-07-01',
    image: '/src/assets/pic/inventory 1.png'
  },
  {
    productName: 'Product B',
    category: 'Category B',
    expiryDate: '2024-07-15',
    image: '/src/assets/pic/inventory 2.png'
  },
  {
    productName: 'Product C',
    category: 'Category C',
    expiryDate: '2024-08-01',
    image: '/src/assets/pic/inventory 1.png'
  }
  // Add more expiry products as needed
])
const downloadPDF = () => {
  const doc = new jsPDF()
  let y = 10

  expiryProducts.value.forEach((product, index) => {
    doc.text(`Product ${index + 1}`, 10, y)
    doc.text(`Product Name: ${product.productName}`, 20, y + 10)
    doc.text(`Category: ${product.category}`, 20, y + 20)
    doc.text(`Expiry Date: ${product.expiryDate}`, 20, y + 30)
    doc.addImage(product.image, 'JPEG', 150, y, 50, 50)
    y += 60
  })

  doc.save('AllProducts.pdf')
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
  justify-content: space-between;
  align-items: center;
  width: 1350px;
  height: 50px;
  padding: 10px 20px;
  background: var(--White-background, #fff);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: -10px;
  margin-left: -10px;
}

.navbar img {
  height: 130%;
}

.search-container {
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin-left: 500px;
}

.p-input-icon-left {
  position: relative;
  display: flex;
  align-items: center;
}

.p-input-icon-left .pi {
  position: absolute;
  left: 10px;
}

.p-inputtext {
  width: 100%;
  padding-left: 30px;
  height: 35px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #f4f8ff;
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

.avatar-container {
  display: flex;
  align-items: center;
}

.main {
  flex: 1;
  padding: 20px;
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  width: 200px;
  margin-bottom: 20px;
  text-align: center;
}

.product-image {
  width: 100px;
  height: 150px;

  margin-bottom: 10px;
}

.product-details {
  margin-bottom: 10px;
}

.p-button-rounded {
  border-radius: 20px;
}
</style>
