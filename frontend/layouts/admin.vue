<template>
  <div class="admin-layout">
    <!-- Admin Header -->
    <header class="admin-header">
      <div class="header-content">
        <h1>Admin Dashboard</h1>
        <div class="header-actions">
          <button @click="logout" class="logout-btn">
            <span class="material-icons">logout</span>
            Logout
          </button>
        </div>
      </div>
    </header>

    <div class="admin-container">
      <!-- Admin Sidebar -->
      <nav class="admin-sidebar">
        <div class="admin-nav-items">
          <NuxtLink to="/admin/dashboard" class="nav-item">
            <span class="material-icons">dashboard</span>
            Dashboard
          </NuxtLink>
          <NuxtLink to="/admin/products" class="nav-item">
            <span class="material-icons">inventory_2</span>
            Products
          </NuxtLink>
          <NuxtLink to="/admin/collections" class="nav-item">
            <span class="material-icons">collections</span>
            Collections
          </NuxtLink>
          <NuxtLink to="/admin/orders" class="nav-item">
            <span class="material-icons">shopping_cart</span>
            Orders
          </NuxtLink>
          <NuxtLink to="/admin/users" class="nav-item">
            <span class="material-icons">people</span>
            Users
          </NuxtLink>
          <NuxtLink to="/admin/settings" class="nav-item">
            <span class="material-icons">settings</span>
            Settings
          </NuxtLink>
        </div>
      </nav>

      <!-- Main Content Area -->
      <main class="admin-content">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'

const { logout } = useAuth()
const router = useRouter()

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
.admin-layout {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.admin-header {
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.header-content h1 {
  font-size: 1.5rem;
  color: var(--primary);
}

.admin-container {
  display: flex;
  padding-top: 4rem;
  min-height: calc(100vh - 4rem);
}

.admin-sidebar {
  width: 250px;
  background-color: white;
  border-right: 1px solid #e0e0e0;
  padding: 1rem;
  position: fixed;
  left: 0;
  top: 4rem;
  bottom: 0;
}

.admin-nav-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: #666;
  text-decoration: none;
  transition: all 0.2s;
}

.nav-item:hover {
  background-color: #f5f5f5;
  color: var(--primary);
}

.nav-item.router-link-active {
  background-color: var(--primary);
  color: white;
}

.admin-content {
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #f5f5f5;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
}

.logout-btn:hover {
  background-color: #e0e0e0;
}
</style> 