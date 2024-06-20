<template>
  <div class="app-container">
    <!-- Header -->
    <header class="navbar">
      <img src="/src/assets/pic/pharma.jpg" alt="Logo" />
      <div class="search-container">
        <span class="p-input-icon-left">
          <i class="pi pi-search"></i>
          <InputText v-model="searchQuery" placeholder="Search" />
        </span>
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
            <router-link to="/purchase" class="active"
              ><i class="pi pi-shopping-cart"></i> Purchase</router-link
            >
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
        <h1>Purchase Orders</h1>

        <!-- New Order Button -->

        <!-- Buttons for filtering orders -->
        <div class="filter-buttons">
          <Button
            label="In Progress"
            :style="{ backgroundColor: 'rgb(19, 139, 168)', borderColor: 'rgb(19, 139, 168)' }"
            class="p-button-primary"
            @click="filterOrders('In Progress')"
          />
          <Button
            label="Accepted"
            :style="{ backgroundColor: 'rgb(19, 139, 168)', borderColor: 'rgb(19, 139, 168)' }"
            class="p-button-success"
            @click="filterOrders('Accepted')"
          />
          <Button
            label="Rejected"
            :style="{ backgroundColor: 'rgb(19, 139, 168)', borderColor: 'rgb(19, 139, 168)' }"
            class="p-button-danger"
            @click="filterOrders('Rejected')"
          />
          <Button
            label="All"
            :style="{ backgroundColor: 'rgb(19, 139, 168)', borderColor: 'rgb(19, 139, 168)' }"
            class="p-button-secondary"
            @click="filterOrders('All')"
          />
        </div>

        <!-- Table of purchase orders -->
        <DataTable :value="filteredOrders" class="p-datatable-customers">
          <Column field="orderId" header="Order ID"></Column>
          <Column field="orderDate" header="Order Date"></Column>
          <Column field="orderStatus" header="Order Status"></Column>
          <Column field="totalAmount" header="Total Amount"></Column>
          <Column field="vendor" header="Vendor"></Column>
          <!-- New Vendor Column -->
          <Column header="Actions">
            <template #body="slotProps">
              <Button
                icon="pi pi-file-pdf"
                :style="{ backgroundColor: 'rgb(19, 139, 168)', borderColor: 'rgb(19, 139, 168)' }"
                class="p-button-rounded p-button-info"
                @click="downloadPDF(slotProps.data)"
              />
            </template>
          </Column>
        </DataTable>
        <div class="new-order-button">
          <router-link to="/orderdetails">
            <Button
              label="New Order"
              :style="{ backgroundColor: 'rgb(19, 139, 168)', borderColor: 'rgb(19, 139, 168)' }"
              class="p-button-primary"
            />
          </router-link>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import jsPDF from 'jspdf'

const searchQuery = ref('')

// Sample data for purchase orders
const orders = ref([
  {
    orderId: 'PO123',
    orderDate: '2023-05-01',
    orderStatus: 'In Progress',
    totalAmount: '5000',
    vendor: 'ALi hassan'
  },
  {
    orderId: 'PO124',
    orderDate: '2023-05-02',
    orderStatus: 'Accepted',
    totalAmount: '12000',
    vendor: 'Mega mart'
  },
  {
    orderId: 'PO125',
    orderDate: '2023-05-03',
    orderStatus: 'Rejected',
    totalAmount: '7000',
    vendor: 'Ali hassan '
  }
  // Add more orders as needed
])

const filteredOrders = ref([...orders.value])

const filterOrders = (status) => {
  if (status === 'All') {
    filteredOrders.value = [...orders.value]
  } else {
    filteredOrders.value = orders.value.filter((order) => order.orderStatus === status)
  }
}

const downloadPDF = (order) => {
  const doc = new jsPDF()
  doc.text(`Order ID: ${order.orderId}`, 10, 10)
  doc.text(`Order Date: ${order.orderDate}`, 10, 20)
  doc.text(`Order Status: ${order.orderStatus}`, 10, 30)
  doc.text(`Total Amount: ${order.totalAmount} PKR`, 10, 40)
  doc.text(`Vendor: ${order.vendor}`, 10, 50) // New Vendor Information
  doc.save(`${order.orderId}.pdf`)
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
  width: 1355px;
  height: 60px;
  padding: 10px 20px;
  background: var(--White-background, #fff);
  margin-top: -10px;
  margin-left: -10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.navbar img {
  height: 120%;
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
  padding-left: 30px; /* Add padding to the left to make space for the icon */
  height: 35px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #f4f8ff;
}

.avatar-container {
  display: flex;
  align-items: center;
}

.content-container {
  display: flex;
  flex: 1;
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
  flex: 1;
  padding: 20px;
}

.new-order-button {
  margin-bottom: 20px; /* Add some margin to separate from other elements */
}

.filter-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.p-datatable-customers {
  margin-top: 20px;
}

.p-datatable-customers .p-datatable-thead > tr > th {
  background-color: #f4f8ff;
}
</style>
