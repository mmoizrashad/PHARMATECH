<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <img class="img-fluid" src="/src/assets/pic/side_pic.png" alt="Side Image" />
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="col-md-12 mt-5">
          <img style="width: 20%" class="img-fluid" src="/src/assets/pic/pharma.jpg" alt="Logo" />
        </div>
        <form @submit.prevent="editProduct">
          <div class="row">
            <div class="col-md-6 mt-5">
              <h3>Edit Products</h3>
              <p>Edit product details here:</p>
            </div>
            <div class="col-md-6">
              <div
                class="img-fluid"
                style="
                  width: 200px;
                  height: 200px;
                  border-radius: 50%;
                  background-color: #a8edff;
                  position: relative;
                  top: -25%;
                "
              ></div>
            </div>

            <div class="col-md-12">
              <div style="position: relative; top: -90%">
                <label for="product-id">Product ID</label>
              </div>
            </div>
            <div class="col-md-6">
              <input
                style="background-color: #efefef"
                class="form-control"
                type="text"
                id="product-id"
                v-model="product.id"
                placeholder="P0234"
              />
            </div>
            <div class="col-md-5">
              <button
                style="background-color: #006878; color: white"
                class="form-control border-0 rounded-pill mt-0"
              >
                Upload
              </button>
            </div>
            <div class="col-md-11 mt-3">
              <label for="product-name">Product Name</label>
              <input
                style="background-color: #efefef"
                class="form-control mt-3"
                type="text"
                id="product-name"
                v-model="product.name"
                placeholder="Panadol 500 mg"
              />
            </div>
            <div class="col-md-11 mt-3">
              <label for="product-price">Price</label>
              <input
                style="background-color: #efefef"
                class="form-control mt-3"
                type="text"
                id="product-price"
                v-model="product.price"
                placeholder="500 PKR"
              />
            </div>
            <div class="col-md-11 mt-3">
              <label for="company-name">Company Name</label>
              <input
                style="background-color: #efefef"
                class="form-control mt-3"
                type="text"
                id="company-name"
                v-model="product.companyName"
                placeholder="Panadol"
              />
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-5 mt-2">
              <button
                style="background-color: #006878; color: white"
                class="form-control border-0 rounded-pill mt-2"
                type="submit"
              >
                Edit Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data() {
    return {
      product: {
        id: '',
        name: '',
        price: '',
        companyName: ''
      }
    }
  },
  methods: {
    editProduct() {
      console.log('Product details:', this.product)
      // Add your form submission logic here
    }
  }
}
</script>

<style scoped>
.container-fluid {
  padding: 0;
}

.header,
.navbar,
.nav-item,
.nav-link {
  color: #fff;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.form-control {
  border-radius: 5px;
}

button.form-control {
  background-color: #006878;
  color: white;
}

button.form-control:hover {
  background-color: #004f5f;
}

.mt-0 {
  margin-top: 0 !important;
}

.mt-5 {
  margin-top: 3rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.ms-4 {
  margin-left: 1.5rem !important;
}

.border-0 {
  border: none !important;
}

.rounded-pill {
  border-radius: 50px !important;
}
</style>
