# User Management & Favorites Features

This document outlines the comprehensive user management and favorites functionality implemented for Urvashi Jewellers.

## 🎯 Features Overview

### 1. User Profile Management
- **User Profile Menu**: Dropdown menu with user avatar, name, and quick actions
- **Account Settings**: Profile information, security settings, and preferences
- **Order History**: View past orders with status tracking
- **Logout Functionality**: Secure logout with session cleanup
- **Account Deletion**: Complete account removal with data cleanup

### 2. Favorites System
- **Add to Favorites**: Heart icon on product cards
- **Favorites Page**: Dedicated page to view and manage favorites
- **Favorites Count**: Real-time count in profile menu
- **Remove from Favorites**: Individual item removal
- **Clear All Favorites**: Bulk removal option
- **Authentication Required**: Login prompt for unauthenticated users

### 3. Authentication Integration
- **Login Required**: Protected routes and features
- **Session Management**: Persistent login state
- **Auto-initialization**: Favorites load automatically on login

## 🏗️ Architecture

### Components
- `UserProfileMenu.vue` - Main user dropdown menu
- `ProductCard.vue` - Updated with favorites functionality
- `FavoritesPage.vue` - Dedicated favorites management page
- `AccountSettings.vue` - Profile and security settings
- `OrderHistory.vue` - Order tracking and management

### Stores
- `auth.ts` - Authentication state management
- `favorites.ts` - Favorites state management with API integration

### API Endpoints
- `GET /api/favorites` - Fetch user favorites
- `POST /api/favorites` - Add item to favorites
- `DELETE /api/favorites/[productId]` - Remove item from favorites
- `DELETE /api/favorites/clear` - Clear all favorites
- `DELETE /api/auth/delete-account` - Delete user account

### Database Schema
- `user_favorites` table with proper indexing and RLS policies
- Foreign key relationships to users table
- Automatic timestamp management

## 🚀 Setup Instructions

### 1. Database Setup
Run the SQL script in your Supabase SQL Editor:
```sql
-- Run the contents of database/setup-favorites.sql
```

### 2. Environment Variables
Ensure your `.env` file includes:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Component Integration
The components are automatically integrated into the layout. The favorites functionality is available on all product cards, and the user profile menu appears in the header when logged in.

## 📱 User Experience Flow

### For Authenticated Users
1. **Profile Menu**: Click user avatar in header
2. **Favorites**: Heart icon on products, or via profile menu
3. **Settings**: Account settings via profile menu
4. **Orders**: Order history via profile menu

### For Unauthenticated Users
1. **Favorites Attempt**: Shows login prompt
2. **Login**: Redirected to login flow
3. **Post-Login**: Full access to all features

## 🔧 Technical Implementation

### Favorites Store
```typescript
// Key methods
await favoritesStore.addToFavorites(productData)
await favoritesStore.removeFromFavorites(productId)
await favoritesStore.toggleFavorite(productData)
await favoritesStore.clearFavorites()
```

### Authentication Integration
```typescript
// Check if user is logged in
if (!authStore.isLoggedIn) {
  alert('Please login to add items to favorites')
  return
}
```

### Database Policies
- Users can only access their own favorites
- Automatic cleanup on user deletion
- Proper indexing for performance

## 🎨 UI/UX Features

### Visual Design
- **Consistent Branding**: Amber color scheme throughout
- **Responsive Design**: Works on all screen sizes
- **Loading States**: Smooth loading indicators
- **Error Handling**: User-friendly error messages
- **Confirmation Modals**: For destructive actions

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels
- **Focus Management**: Logical tab order
- **Color Contrast**: WCAG compliant

## 🔒 Security Features

### Row Level Security (RLS)
- Users can only access their own data
- Proper authentication checks
- Secure API endpoints

### Data Protection
- Session-based authentication
- Secure logout with cleanup
- Account deletion with complete data removal

## 📊 Performance Optimizations

### Database
- Proper indexing on frequently queried columns
- Efficient RLS policies
- Optimized queries with joins

### Frontend
- Lazy loading of favorites
- Efficient state management
- Minimal API calls

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Adding items to favorites
- [ ] Removing items from favorites
- [ ] Viewing favorites page
- [ ] Account settings updates
- [ ] Order history viewing
- [ ] Account deletion
- [ ] Logout functionality
- [ ] Unauthenticated user flows

### API Testing
Use the provided test scripts or test endpoints directly:
```bash
# Test favorites API
curl -X GET http://localhost:3000/api/favorites
```

## 🐛 Troubleshooting

### Common Issues

1. **RLS Errors**: Ensure database policies are properly set up
2. **Authentication Issues**: Check session management
3. **Favorites Not Loading**: Verify API endpoints and database connectivity
4. **Performance Issues**: Check database indexing

### Debug Steps
1. Check browser console for errors
2. Verify database policies in Supabase
3. Test API endpoints directly
4. Check authentication state

## 📈 Future Enhancements

### Planned Features
- **Favorites Sharing**: Share favorites with friends
- **Favorites Categories**: Organize favorites by category
- **Favorites Analytics**: Track most favorited items
- **Bulk Operations**: Select multiple items for actions
- **Favorites Export**: Export favorites list

### Technical Improvements
- **Real-time Updates**: WebSocket integration
- **Offline Support**: Service worker for offline favorites
- **Advanced Filtering**: Search and filter favorites
- **Performance Monitoring**: Analytics and monitoring

## 📝 API Documentation

### Favorites Endpoints

#### GET /api/favorites
Fetch user's favorites
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "productId": "product-1",
      "productName": "Diamond Necklace",
      "productImage": "url",
      "productPrice": 45000.00,
      "productCategory": "Necklaces"
    }
  ]
}
```

#### POST /api/favorites
Add item to favorites
```json
{
  "productId": "product-1",
  "productName": "Diamond Necklace",
  "productImage": "url",
  "productPrice": 45000.00,
  "productCategory": "Necklaces"
}
```

#### DELETE /api/favorites/[productId]
Remove item from favorites

#### DELETE /api/favorites/clear
Clear all favorites

### Authentication Endpoints

#### DELETE /api/auth/delete-account
Delete user account and all related data

## 🤝 Contributing

When adding new features:
1. Follow the existing code patterns
2. Add proper TypeScript types
3. Include error handling
4. Update this documentation
5. Test thoroughly

## 📞 Support

For technical issues:
1. Check the troubleshooting section
2. Review the API documentation
3. Test with the provided scripts
4. Contact the development team

---

**Last Updated**: December 2024
**Version**: 1.0.0 