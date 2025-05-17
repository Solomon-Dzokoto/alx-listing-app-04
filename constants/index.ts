export const APP_CONFIG = {
  name: 'ALX Listing App',
  description: 'Find and post listings for anything',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
};

export const CATEGORIES = [
  { id: 'all', name: 'All Categories', icon: 'globe.svg' },
  { id: 'real-estate', name: 'Real Estate', icon: 'window.svg' },
  { id: 'vehicles', name: 'Vehicles', icon: 'file.svg' },
  { id: 'electronics', name: 'Electronics', icon: 'file.svg' },
  { id: 'furniture', name: 'Furniture', icon: 'file.svg' },
  { id: 'jobs', name: 'Jobs', icon: 'file.svg' },
  { id: 'services', name: 'Services', icon: 'file.svg' },
];

export const SORT_OPTIONS = [
  { id: 'newest', name: 'Newest First' },
  { id: 'oldest', name: 'Oldest First' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
];

export const ITEMS_PER_PAGE = 12;

export const API_ENDPOINTS = {
  listings: '/api/listings',
  categories: '/api/categories',
  search: '/api/search',
  user: '/api/user',
};

export const FORM_VALIDATION = {
  title: {
    required: 'Title is required',
    minLength: { value: 3, message: 'Title must be at least 3 characters' },
    maxLength: { value: 100, message: 'Title must not exceed 100 characters' },
  },
  description: {
    required: 'Description is required',
    minLength: { value: 10, message: 'Description must be at least 10 characters' },
    maxLength: { value: 1000, message: 'Description must not exceed 1000 characters' },
  },
  price: {
    required: 'Price is required',
    min: { value: 0, message: 'Price must be greater than or equal to 0' },
  },
};

export const UI_MESSAGES = {
  success: {
    listing_created: 'Listing created successfully!',
    listing_updated: 'Listing updated successfully!',
    listing_deleted: 'Listing deleted successfully!',
  },
  error: {
    general: 'Something went wrong. Please try again.',
    not_found: 'The requested resource was not found.',
    unauthorized: 'You need to be logged in to perform this action.',
  },
  loading: {
    listings: 'Loading listings...',
    submission: 'Submitting your listing...',
    deletion: 'Deleting listing...',
  },
};

export const IMAGE_CONFIG = {
  maxSize: 5 * 1024 * 1024, // 5MB
  acceptedTypes: ['image/jpeg', 'image/png', 'image/webp'],
  dimensions: {
    thumbnail: { width: 200, height: 200 },
    preview: { width: 600, height: 400 },
    full: { width: 1200, height: 800 },
  },
};

export const CONTACT_INFO = {
  email: 'support@alxlisting.com',
  phone: '+1 (234) 567-8900',
  address: '123 Listing Street, City, Country',
  socialMedia: {
    facebook: 'https://facebook.com/alxlisting',
    twitter: 'https://twitter.com/alxlisting',
    instagram: 'https://instagram.com/alxlisting',
  },
};