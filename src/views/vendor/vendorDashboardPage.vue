<template>
  <div class="app-container">
    <header class="navbar">
      <img src="/src/assets/pic/pharma.jpg" alt="Logo" />
      <div class="button-container">
        <Button
          label="Products"
          class="p-button-outlined p-mr-2"
          :class="{ active: isActive('products') }"
          @click="navigateTo('products')"
        />
        <Button
          label="Orders"
          class="p-button-outlined"
          :class="{ active: isActive('vendororder') }"
          @click="navigateTo('vendororder')"
        />
      </div>
      <div class="avatar-container">
        <Button label="Logout" class="p-button-outlined" @click="logout" />
      </div>
    </header>
    <div class="content-container">
      <Button
        label="Add Product"
        class="p-button-primary add-product-button"
        @click="showDialog = true"
      />
      <h1>Products</h1>
      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image" alt="Product Image" class="product-image" />
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>

    <!-- Add Product Dialog -->
    <Dialog
      header="Add Product"
      v-model:visible="showDialog"
      :modal="true"
      :closable="true"
      class="add-product-dialog"
    >
      <div class="dialog-content">
        <div class="p-field">
          <label for="productName">Product Name</label>
          <InputText id="productName" v-model="newProduct.name" />
        </div>
        <div class="p-field">
          <label for="productDescription">Product Description</label>
          <InputText id="productDescription" v-model="newProduct.description" />
        </div>
        <div class="p-field">
          <label for="productImage">Product Image</label>
          <FileUpload
            mode="basic"
            name="demo[]"
            auto
            url="./upload"
            chooseLabel="Choose"
            @upload="onUpload"
          />
        </div>
      </div>
      <div class="dialog-footer">
        <Button label="Add" class="p-button-primary" @click="addProduct" />
        <Button label="Cancel" class="p-button-secondary" @click="showDialog = false" />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import FileUpload from 'primevue/fileupload'

const router = useRouter()
const route = useRoute()

const navigateTo = (page) => {
  router.push(`/${page}`)
}

const isActive = (page) => {
  return route.path.includes(page)
}

const products = ref([
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for product 1',
    image: '/src/assets/pic/product1.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for product 2',
    image: '/src/assets/pic/product2.jpg'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for product 3',
    image: '/src/assets/pic/product3.jpg'
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description for product 4',
    image: '/src/assets/pic/product4.jpg'
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Description for product 5',
    image: '/src/assets/pic/product5.jpg'
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Description for product 6',
    image: '/src/assets/pic/product6.jpg'
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'Description for product 7',
    image: '/src/assets/pic/product7.jpg'
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'Description for product 8',
    image: '/src/assets/pic/product8.jpg'
  },
  {
    id: 9,
    name: 'Product 9',
    description: 'Description for product 9',
    image: '/src/assets/pic/product9.jpg'
  },
  {
    id: 10,
    name: 'Product 10',
    description: 'Description for product 10',
    image: '/src/assets/pic/product10.jpg'
  },
  {
    id: 11,
    name: 'Product 11',
    description: 'Description for product 11',
    image: '/src/assets/pic/product11.jpg'
  },
  {
    id: 12,
    name: 'Product 12',
    description: 'Description for product 12',
    image: '/src/assets/pic/product12.jpg'
  },
  {
    id: 13,
    name: 'Product 13',
    description: 'Description for product 13',
    image: '/src/assets/pic/product13.jpg'
  }
])

const showDialog = ref(false)

const newProduct = ref({
  name: '',
  description: '',
  image: ''
})

const addProduct = () => {
  if (newProduct.value.name && newProduct.value.description && newProduct.value.image) {
    products.value.push({
      id: products.value.length + 1,
      name: newProduct.value.name,
      description: newProduct.value.description,
      image: newProduct.value.image
    })
    showDialog.value = false
    newProduct.value = { name: '', description: '', image: '' }
  } else {
    alert('Please fill in all fields')
  }
}

const onUpload = (event) => {
  const file = event.files[0]
  const reader = new FileReader()
  reader.onload = (e) => {
    newProduct.value.image = e.target.result
  }
  reader.readAsDataURL(file)
}

const logout = () => {
  console.log('Logging out')
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

.add-product-button {
  margin-bottom: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.product-card h2 {
  font-size: 1.2em;
  margin: 10px 0;
}

.product-card p {
  font-size: 0.9em;
  color: #666;
}

.add-product-dialog .dialog-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.add-product-dialog .dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.add-product-dialog .p-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.add-product-dialog .p-field label {
  font-weight: bold;
  color: #333;
}

.add-product-dialog .p-field input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-product-dialog .p-field .p-fileupload-choose {
  background-color: #007ad9;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.add-product-dialog .p-field .p-fileupload-choose:hover {
  background-color: #005bb5;
}

.add-product-dialog .p-field .p-fileupload-file {
  display: none;
}

.p-button-outlined.active {
  background-color: #007ad9;
  color: #fff;
  border-color: #007ad9;
}
</style>
