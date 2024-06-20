<template>
  <div class="app-container">
    <header class="navbar">
      <img src="/src/assets/pic/pharma.jpg" alt="Logo" />
      <div class="button-container">
        <Button label="Products" class="p-button-outlined p-mr-2" @click="navigateTo('products')" />
        <Button label="Orders" class="p-button-outlined" @click="navigateTo('orders')" />
      </div>
      <div class="avatar-container">
        <Dropdown :model="dropdownItems" icon="pi pi-user" class="p-mr-2" />
      </div>
    </header>
    <div class="content-container">
      <h1>Orders</h1>
      <div class="filter-buttons">
        <Button
          label="Received"
          class="p-button-outlined"
          :class="{ 'p-button-secondary': selectedFilter === 'received' }"
          @click="setFilter('received')"
        />
        <Button
          label="Accepted"
          class="p-button-outlined"
          :class="{ 'p-button-secondary': selectedFilter === 'accepted' }"
          @click="setFilter('accepted')"
        />
        <Button
          label="Rejected"
          class="p-button-outlined"
          :class="{ 'p-button-secondary': selectedFilter === 'rejected' }"
          @click="setFilter('rejected')"
        />
      </div>
      <table class="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order Time</th>
            <th>Order Date</th>
            <th>Branch Name</th>
            <th>Status</th>
            <th>Branch Location</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in filteredOrders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.time }}</td>
            <td>{{ order.date }}</td>
            <td>{{ order.branchName }}</td>
            <td>{{ order.status }}</td>
            <td>{{ order.branchLocation }}</td>
            <td>
              <Button
                label="View"
                class="p-button-rounded p-button-info"
                icon="pi pi-eye"
                @click="generatePDF(order)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div>
    <h1>Vendor Order</h1>
    <ul>
      <li v-for="(item, index) in orderData" :key="index">{{ item.name }} - Qty: {{ item.qty }}</li>
    </ul>
  </div>
  =
</template>

<script setup>
import { ref, computed } from 'vue'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import { jsPDF } from 'jspdf'

// Hardcoded order data
const orders = ref([
  {
    id: 'RT0345',
    time: '15:39',
    date: '20 Sep 2022',
    branchName: 'D. Watson',
    status: 'Received',
    branchLocation: 'Near DHQ Hospital, Jhelum'
  },
  {
    id: 'TI0345',
    time: '15:39',
    date: '20 Sep 2022',
    branchName: 'D. Watson',
    status: 'Pending',
    branchLocation: 'Near DHQ Hospital, Jhelum'
  }
])
const generatePDF = (order) => {
  const doc = new jsPDF()
  doc.text(`Order ID: ${order.id}`, 10, 10)
  doc.text(`Time: ${order.time}`, 10, 20)
  doc.text(`Date: ${order.date}`, 10, 30)
  doc.text(`Branch Name: ${order.branchName}`, 10, 40)
  doc.text(`Status: ${order.status}`, 10, 50)
  doc.text(`Branch Location: ${order.branchLocation}`, 10, 60)

  doc.save(`Order_${order.id}.pdf`)
}

const selectedFilter = ref('received')

const filteredOrders = computed(() => {
  if (selectedFilter.value === 'received') {
    return orders.value.filter((order) => order.status === 'Received')
  } else if (selectedFilter.value === 'accepted') {
    return orders.value.filter((order) => order.status === 'Accepted')
  } else if (selectedFilter.value === 'rejected') {
    return orders.value.filter((order) => order.status === 'Rejected')
  } else {
    return orders.value
  }
})

const dropdownItems = [
  { label: 'Edit Profile', icon: 'pi pi-user-edit', command: () => editProfile() },
  { label: 'Logout', icon: 'pi pi-sign-out', command: () => logout() }
]

const editProfile = () => {
  console.log('Editing profile')
}

const logout = () => {
  console.log('Logging out')
}

const navigateTo = (page) => {
  console.log(`Navigating to ${page}`)
}

const setFilter = (filter) => {
  selectedFilter.value = filter
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
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  background: var(--White-background, #fff);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.navbar img {
  height: 130%;
}

.button-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.avatar-container {
  display: flex;
  align-items: center;
}

.content-container {
  padding: 20px;
  flex: 1;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.filter-buttons .p-button-secondary {
  background-color: #006064 !important; /* Dark teal for selected button */
  border-color: #006064 !important;
  color: #fff !important;
}

.orders-table {
  width: 100%;
  border-collapse: collapse;
}

.orders-table th,
.orders-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.orders-table tr:hover {
  background-color: #f0f0f0;
}
</style>
