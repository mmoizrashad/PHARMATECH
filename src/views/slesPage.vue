<template>
  <div class="app-container">
    <!-- Header -->
    <header class="navbar">
      <img src="/src/assets/pic/pharma.jpg" alt="Logo" />
    </header>

    <!-- Sidebar and main content -->
    <div class="content-container">
      <!-- Sidebar -->
      <aside class="sidebar">
        <ul>
          <li>
            <router-link to="/sales" class="active"><i class="pi pi-tag"></i> Sales</router-link>
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
        <h1>Sales Dashboard</h1>

        <!-- Bar Chart -->
        <div class="charts-container">
          <Chart type="bar" :data="barData" />
          <Chart type="pie" :data="pieData" class="chart" />
        </div>

        <!-- Table of sales transactions -->
        <DataTable :value="transactions" class="p-datatable-customers">
          <Column field="transactionId" header="Transaction ID"></Column>
          <Column field="date" header="Date"></Column>
          <Column field="branch" header="Branch"></Column>
          <Column field="revenue" header="Revenue"></Column>
          <Column field="profit" header="Profit"></Column>
          <Column header="Actions">
            <template #body="slotProps">
              <Button
                icon="pi pi-file-pdf"
                class="p-button-rounded p-button-info"
                @click="downloadPDF(slotProps.data)"
              />
            </template>
          </Column>
        </DataTable>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Chart from 'primevue/chart'
import jsPDF from 'jspdf'

// Sample data for transactions
const transactions = ref([
  {
    transactionId: 'T123',
    date: '2023-05-01',
    branch: 'Branch A',
    revenue: '5000',
    profit: '2000'
  },
  {
    transactionId: 'T124',
    date: '2023-05-02',
    branch: 'Branch B',
    revenue: '7000',
    profit: '3000'
  },
  { transactionId: 'T125', date: '2023-05-03', branch: 'Branch C', revenue: '8000', profit: '4000' }
  // Add more transactions as needed
])

const barData = {
  labels: ['Branch A', 'Branch B', 'Branch C'],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: '#42A5F5',
      data: [5000, 7000, 8000]
    },
    {
      label: 'Profit',
      backgroundColor: '#FFA726',
      data: [2000, 3000, 4000]
    }
  ]
}
const pieData = {
  labels: ['Product A', 'Product B', 'Product C'],
  datasets: [
    {
      data: [300, 200, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
}

const downloadPDF = (transaction) => {
  const doc = new jsPDF()

  // Set font size and style
  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')

  // Add title
  doc.text('Sales Transaction Details', 105, 10, { align: 'center' })

  // Add transaction details
  doc.text(`Transaction ID: ${transaction.transactionId}`, 20, 30)
  doc.text(`Date: ${transaction.date}`, 20, 40)
  doc.text(`Branch: ${transaction.branch}`, 20, 50)
  doc.text(`Revenue: ${transaction.revenue} PKR`, 20, 60)
  doc.text(`Profit: ${transaction.profit} PKR`, 20, 70)

  // Add footer
  doc.text('Medical Store: ABC Pharmacy | License No: XYZ123', 105, 280, {
    align: 'center'
  })

  // Save the PDF with transaction ID as the filename
  doc.save(`${transaction.transactionId}.pdf`)
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
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: -10px;
  margin-left: -10px;
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
  padding-left: 30px;
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

.p-datatable-customers {
  margin-top: 20px;
}

.p-datatable-customers .p-datatable-thead > tr > th {
  background-color: #f4f8ff;
}
.charts-container {
  margin-bottom: 20px;
  width: 100%; /* Adjust the width to fit into a single row */
  display: flex;
  justify-content: space-around;
}

.chart {
  width: 30%; /* Adjust the width of each chart */
  height: 300px; /* Adjust the height of each chart */
}

/* Adjust the size of the chart */
</style>
