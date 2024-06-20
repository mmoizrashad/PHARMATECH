<template>
  <div class="app-container">
    <header class="navbar">
      <img src="/src/assets/pic/pharma.jpg" alt="Logo" />
      <div class="button-container">
        <Button
          label="Orders"
          :class="{ 'p-button-success': isOrdersPage }"
          @click="navigateTo('orders')"
        />
      </div>
      <div class="avatar-container">
        <Dropdown :model="dropdownItems" icon="pi pi-user" class="p-mr-2" />
      </div>
    </header>
    <div class="content-container">
      <aside class="sidebar">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id" @click="selectProduct(product)">
              <td><img :src="product.image" alt="Product Image" class="product-image" /></td>
              <td>{{ product.name }}</td>
              <td>{{ product.qty }}</td>
            </tr>
          </tbody>
        </table>
      </aside>
      <main class="main">
        <div v-if="orderList.length" class="order-list">
          <h2>Order List</h2>
          <ul>
            <li v-for="(item, index) in orderList" :key="index">
              {{ item.name }} - Qty:
              <Button icon="pi pi-minus" class="p-button-text" @click="decreaseQuantity(item)" />
              {{ item.qty }}
              <Button icon="pi pi-plus" class="p-button-text" @click="increaseQuantity(item)" />
            </li>
          </ul>
          <Button label="Place Order" class="p-button-success p-mt-2" @click="placeOrder" />
        </div>
      </main>
    </div>
    <Dialog header="Success" v-model:visible="showDialog" modal>
      <p>Order placed successfully!</p>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import Dialog from 'primevue/dialog'

// Hardcoded product data
const products = ref([
  {
    id: 'P001',
    name: 'Rivaj SunBlock 60 spf',
    qty: 20,
    image: '/src/assets/pic/product1.jpg',
    category: 'Skincare',
    stock: 20,
    costPrice: '500',
    sellingPrice: '600',
    expiryDate: '25 Jan 2027'
  },
  {
    id: 'P002',
    name: 'Panadol 500 mg',
    qty: 50,
    image: '/src/assets/pic/product3.jpg',
    category: 'Medicine',
    stock: 50,
    costPrice: '50',
    sellingPrice: '60',
    expiryDate: '25 Jan 2027'
  },
  {
    id: 'P003',
    name: 'Rivaj Gold Mask',
    qty: 10,
    image: '/src/assets/pic/product4.jpg',
    category: 'Skincare',
    stock: 10,
    costPrice: '700',
    sellingPrice: '800',
    expiryDate: '25 Jan 2027'
  },
  {
    id: 'P004',
    name: 'Rivaj Nose Strips Charcoal',
    qty: 25,
    image: '/src/assets/pic/product5.jpg',
    category: 'Skincare',
    stock: 25,
    costPrice: '300',
    sellingPrice: '350',
    expiryDate: '25 Jan 2027'
  }
  // Add other products here...
])

const orderList = ref([])
const showDialog = ref(false)
const router = useRouter()

const selectProduct = (product) => {
  orderList.value.push({ ...product, qty: 1 }) // Default quantity is 1
}

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
  console.log(`Navigating to $ {/vendororder}`)
  if (page === 'orders') {
    isOrdersPage.value = true
  } else {
    isOrdersPage.value = false
  }
}

const placeOrder = () => {
  showDialog.value = true
  // Navigate to vendororder page after a delay (e.g., 2 seconds)
  setTimeout(() => {
    showDialog.value = false
    router.push({
      name: '/vendororder',
      params: { orderData: orderList.value }
    })
  }, 2000)
}

const increaseQuantity = (item) => {
  item.qty++
}

const decreaseQuantity = (item) => {
  if (item.qty > 1) {
    item.qty--
  }
}

const isOrdersPage = ref(false)
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
  height: 30px; /* Adjust as needed */
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
  display: flex;
  flex: 1;
}

.sidebar {
  width: 300px;
  background-color: #e0f7fa; /* Light blue background */
  padding: 20px;
  border-right: 1px solid #ddd;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.sidebar table {
  width: 100%;
  border-collapse: collapse;
}

.sidebar th,
.sidebar td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.sidebar tbody tr {
  cursor: pointer;
  transition:
    background-color 0.3s,
    box-shadow 0.3s;
  border-radius: 10px;
}

.sidebar tbody tr:hover {
  background-color: #b2ebf2; /* Slightly darker blue */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.main {
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.order-list {
  width: 100%;
  max-width: 500px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.order-list h2 {
  margin-bottom: 10px;
}

.order-list ul {
  list-style-type: none;
  padding: 0;
}

.order-list ul li {
  padding: 5px 0;
}

.p-mt-2 {
  margin-top: 20px;
}

/* Quantity Control Buttons */
.p-button-text {
  font-size: 1rem;
  width: 30px;
  height: 30px;
  line-height: 1.5;
  padding: 0;
  border-radius: 50%;
  margin: 0 5px;
}

.p-button-text:hover {
  background-color: #eee;
}

/* Place Order Button */
.p-button-success {
  margin-top: 10px;
  width: 100%;
  max-width: 150px;
  height: 40px;
  font-size: 1rem;
  border-radius: 5px;
  box-shadow: none;
}

.p-button-success:hover {
  background-color: #4caf50; /* Green */
}
</style>
