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
            <router-link to="/login"><i class="pi pi-sign-out"></i> Logout</router-link>
          </li>
        </ul>
      </aside>

      <!-- Main content area -->
      <main class="main">
        <div v-if="product">
          <h1>{{ product.name }}</h1>
          <img :src="product.image" alt="Product Image" />
          <p>Price: {{ product.price }} PKR</p>
          <p>Category: {{ product.category }}</p>
          <p>Weight: {{ product.weight }}</p>
        </div>
        <div v-else>
          <p>Loading product details...</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'

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

const inventory = ref([
  {
    name: 'Garnier FaceWash',
    image: '/src/assets/pic/inventory 1.png',
    price: 220,
    category: 'Cosmetic',
    weight: '100ml',
    code: 'INV001'
  },
  {
    name: 'Panadol',
    image: '/src/assets/pic/inventory 2.png',
    price: 220,
    category: 'Medicine',
    weight: '500mg',
    code: 'INV002'
  }
  // Add more items as needed
])

const route = useRoute()
const product = ref(null)

onMounted(() => {
  // Fetch product details based on the code from the route params
  product.value = inventory.value.find((item) => item.code === route.params.code)
})
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between; /* Add space between logo and avatar */
  align-items: center; /* Center items vertically */
  width: 1350px;
  height: 50px;
  padding: 10px 20px;
  margin-left: -10px;
  margin-top: -10px;
  background: var(--White-background, #fff);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.navbar img {
  height: 130%;
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
</style>
