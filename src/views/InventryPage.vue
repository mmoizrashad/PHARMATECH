<template>
  <div class="app-container">
    <!-- Header -->
    <header class="navbar">
      <img src="/src/assets/pic/pharma.jpg" alt="Logo" />

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
            <router-link to="/inventory" class="active"
              ><i class="pi pi-box"></i> Inventory</router-link
            >
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
        <h1>Inventory</h1>
        <p>Following is the list of inventory</p>
        <Button label="Add Product" class="add-product-button" @click="openAddProductDialog" />
        <div class="inventory-list">
          <div class="inventory-item" v-for="item in inventory" :key="item.code">
            <router-link :to="{ name: 'product-details', params: { code: item.code } }">
              <img :src="item.image" alt="Item Image" class="inventory-image" />
              <div class="inventory-details">
                <p>{{ item.price }} PKR</p>
                <p>{{ item.name }}</p>
                <p>{{ item.category }} ({{ item.weight }})</p>
              </div>
            </router-link>
          </div>
        </div>
      </main>
    </div>

    <!-- Add Product Dialog -->
    <Dialog
      header="Add Product"
      :visible="addProductDialogVisible"
      modal
      @hide="closeAddProductDialog"
    >
      <div class="p-fluid">
        <div class="p-field">
          <label for="productName">Product Name</label>
          <InputText id="productName" v-model="newProduct.name" />
        </div>
        <div class="p-field">
          <label for="productImage">Product Image</label>
          <input type="file" @change="handleFileUpload" />
        </div>
        <div class="p-field">
          <label for="productPrice">Product Price</label>
          <InputText id="productPrice" v-model="newProduct.price" />
        </div>
        <div class="p-field">
          <label for="productCategory">Product Category</label>
          <InputText id="productCategory" v-model="newProduct.category" />
        </div>
        <div class="p-field">
          <label for="productWeight">Product Weight</label>
          <InputText id="productWeight" v-model="newProduct.weight" />
        </div>
      </div>
      <Button label="Add" @click="addProduct" />
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

const inventory = ref([
  {
    name: 'Garnier FaceWash',
    image: '/src/assets/pic/product1.jpg',
    price: 220,
    category: 'Cosmetic',
    weight: '100ml',
    code: 'INV001'
  },
  {
    name: 'Panadol',
    image: '/src/assets/pic/product3.jpg',
    price: 220,
    category: 'Medicine',
    weight: '500mg',
    code: 'INV002'
  },
  {
    name: 'Product 3',
    image: '/src/assets/pic/product4.jpg',
    price: 300,
    category: 'Supplement',
    weight: '250ml',
    code: 'INV003'
  },
  {
    name: 'Product 4',
    image: '/src/assets/pic/product5.jpg',
    price: 150,
    category: 'Vitamin',
    weight: '100mg',
    code: 'INV004'
  },
  {
    name: 'Product 5',
    image: '/src/assets/pic/product7.jpg',
    price: 500,
    category: 'Herbal',
    weight: '200ml',
    code: 'INV005'
  },
  {
    name: 'Product 6',
    image: '/src/assets/pic/product8.jpg',
    price: 600,
    category: 'Health Drink',
    weight: '1L',
    code: 'INV006'
  },
  {
    name: 'Product 7',
    image: '/src/assets/pic/product9.jpg',
    price: 700,
    category: 'Cosmetic',
    weight: '300ml',
    code: 'INV007'
  },
  {
    name: 'Product 8',
    image: '/src/assets/pic/product10.jpg',
    price: 800,
    category: 'Medicine',
    weight: '200mg',
    code: 'INV008'
  },
  {
    name: 'Product 9',
    image: '/src/assets/pic/product11.jpg',
    price: 900,
    category: 'Supplement',
    weight: '500ml',
    code: 'INV009'
  },
  {
    name: 'Product 10',
    image: '/src/assets/pic/product12.jpg',
    price: 1000,
    category: 'Vitamin',
    weight: '250mg',
    code: 'INV010'
  },
  {
    name: 'Product 11',
    image: '/src/assets/pic/product13.jpg',
    price: 1100,
    category: 'Herbal',
    weight: '150ml',
    code: 'INV011'
  },
  {
    name: 'Product 12',
    image: '/src/assets/pic/product14.jpg',
    price: 1200,
    category: 'Health Drink',
    weight: '750ml',
    code: 'INV012'
  },
  {
    name: 'Product 13',
    image: '/src/assets/pic/product15.jpg',
    price: 1300,
    category: 'Cosmetic',
    weight: '100ml',
    code: 'INV013'
  }
])

const addProductDialogVisible = ref(false)
const newProduct = ref({
  name: '',
  image: '',
  price: '',
  category: '',
  weight: ''
})

const openAddProductDialog = () => {
  addProductDialogVisible.value = true
}

const closeAddProductDialog = () => {
  addProductDialogVisible.value = false
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  newProduct.value.image = URL.createObjectURL(file)
}

const addProduct = () => {
  const newProductCode = `INV${(inventory.value.length + 1).toString().padStart(3, '0')}`
  inventory.value.push({ ...newProduct.value, code: newProductCode })
  closeAddProductDialog()
  newProduct.value = { name: '', image: '', price: '', category: '', weight: '' }
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
  height: 60px;
  padding: 10px 20px;
  background: var(--White-background, #fff);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
}

.navbar img {
  height: 120%;
}

.search-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
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

.inventory-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.inventory-item {
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.inventory-image {
  max-width: 100%;
  height: auto;
}

.inventory-details {
  margin-top: 10px;
}

.add-product-button {
  margin-bottom: 20px;
  background-color: #138ba8;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-product-button:hover {
  background-color: #0e697d;
}
</style>
