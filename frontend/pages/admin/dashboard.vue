<template>
  <div class="admin-dashboard">
    <div class="dashboard-header">
      <h1>Admin Dashboard</h1>
      <div class="user-info">
        <span>Welcome, {{ user?.email }}</span>
        <button @click="handleLogout" class="logout-btn">Logout</button>
      </div>
    </div>

    <div class="dashboard-content">
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Total Products</h3>
          <p class="stat-number">{{ totalProducts }}</p>
        </div>
        <div class="stat-card">
          <h3>Total Orders</h3>
          <p class="stat-number">{{ totalOrders }}</p>
        </div>
        <div class="stat-card">
          <h3>Total Customers</h3>
          <p class="stat-number">{{ totalCustomers }}</p>
        </div>
      </div>

      <div class="quick-actions">
        <h2>Quick Actions</h2>
        <div class="action-buttons">
          <NuxtLink to="/admin/products" class="action-btn">
            <span class="material-icons">inventory_2</span>
            Manage Products
          </NuxtLink>
          <NuxtLink to="/admin/collections" class="action-btn">
            <span class="material-icons">collections</span>
            Manage Collections
          </NuxtLink>
          <NuxtLink to="/admin/orders" class="action-btn">
            <span class="material-icons">shopping_cart</span>
            View Orders
          </NuxtLink>
          <NuxtLink to="/admin/customers" class="action-btn">
            <span class="material-icons">people</span>
            Manage Customers
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useRouter } from '#app'

definePageMeta({
  middleware: ['admin']
})

const router = useRouter()
const { user, logout, isAdmin } = useAuth()

// Mock data - replace with actual API calls
const totalProducts = ref(0)
const totalOrders = ref(0)
const totalCustomers = ref(0)

onMounted(async () => {
  // TODO: Fetch actual data from API
  totalProducts.value = 150
  totalOrders.value = 45
  totalCustomers.value = 89
})

const handleLogout = async () => {
  try {
    await logout()
    router.push('/login')
  } catch (error) {
    console.error('Logout error:', error)
  }
}
</script>

<style scoped>
.admin-dashboard {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dashboard-header h1 {
  color: var(--primary);
  font-size: 1.5rem;
  margin: 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logout-btn {
  padding: 0.5rem 1rem;
  background-color: #dc2626;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.logout-btn:hover {
  background-color: #b91c1c;
}

.dashboard-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stat-card h3 {
  color: #666;
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
}

.stat-number {
  color: var(--primary);
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

.quick-actions {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.quick-actions h2 {
  color: #333;
  font-size: 1.25rem;
  margin: 0 0 1rem 0;
}

.action-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background-color: var(--primary-dark);
}

.action-btn .material-icons {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .admin-dashboard {
    padding: 1rem;
  }

  .dashboard-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .user-info {
    flex-direction: column;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style> 