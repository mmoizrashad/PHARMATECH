import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/Auth/LoginPage.vue'
import SignupPage from '../views/Auth/SignupPage.vue'
import ForgetPage from '../views/Auth/ForgetPage.vue'
import InventryPage from '../views/InventryPage.vue'
import EmployeePage from '../views/EmployeePage.vue'
import BranchmanagerPage from '../views/BranchmanagerPage.vue'
import VendorPage from '../views/VendorPage.vue'
import returnPage from '../views/returnPage.vue'
import ProductDetails from '../views/ProductDetails.vue'
import PurchaseOrders from '../views/PurchaseOrders.vue'
import slesPage from '../views/slesPage.vue'
import expiriyPage from '../views/expiriyPage.vue'
import orderdetailPage from '../views/orderdetailPage.vue'
import vendororderPage from '../views/vendor/vendororderPage.vue'
import vendorDashboardPage from '../views/vendor/vendorDashboardPage.vue'
import Editporduct from '../views/EditPorduct.vue'

// const isAuthenticated = (to, from, next) => {
//   if (localStorage.getItem('access_token')) {
//     next()
//   }
//   next({
//     path: '/'
//   })
// }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage
    },
    {
      path: '/forget',
      name: 'forget',
      component: ForgetPage
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: InventryPage
    },

    {
      path: '/employees',
      name: 'employees',
      component: EmployeePage
    },
    {
      path: '/branchmanager',
      name: 'branchmanager',
      component: BranchmanagerPage
    },
    {
      path: '/vendors',
      name: 'vendors',
      component: VendorPage
    },

    {
      path: '/returns',
      name: 'returns',
      component: returnPage
    },
    {
      path: '/product/:code',
      name: 'product-details',
      component: ProductDetails
    },
    {
      path: '/purchase',
      name: 'purchase-orders',
      component: PurchaseOrders
    },
    {
      path: '/sales',
      name: 'sales',
      component: slesPage
    },
    {
      path: '/expiry',
      name: 'expiry',
      component: expiriyPage
    },
    {
      path: '/orderdetails',
      name: 'orderdetails',
      component: orderdetailPage
    },
    {
      path: '/vendororder',
      name: 'vendorpage',
      component: vendororderPage
    },

    {
      path: '/vendordashboard',
      name: 'vendordashboard',
      component: vendorDashboardPage
    },
    {
      path: '/editproduct',
      name: 'editproduct',
      component: Editporduct
    }
  ]
})

export default router
