// Shared types for PropertyHub Nigeria monorepo

// Property Types
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  propertyType: "apartment" | "house" | "land" | "commercial";
  bedrooms?: number;
  bathrooms?: number;
  area: number; // in square meters
  amenities: string[];
  images: string[];
  isVerified: boolean;
  agentId: string;
  agentName: string;
  createdAt: string;
  updatedAt: string;
}

export interface SearchFilters {
  location?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  propertyType?: string[];
  bedrooms?: number;
  bathrooms?: number;
  amenities?: string[];
  verifiedOnly?: boolean;
}

// User Types
export interface User {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  userType: "buyer" | "seller" | "agent" | "developer";
  isVerified: boolean;
  profileImage?: string;
  preferences: {
    preferredLocations: string[];
    priceRange: {
      min: number;
      max: number;
    };
    propertyTypes: string[];
  };
  createdAt: string;
  updatedAt: string;
}

// Messaging Types
export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderType: "buyer" | "seller" | "agent" | "developer";
  content: string;
  messageType: "text" | "image" | "file" | "location";
  timestamp: string;
  isRead: boolean;
  attachments?: string[];
}

export interface Conversation {
  id: string;
  participants: {
    id: string;
    name: string;
    type: "buyer" | "seller" | "agent" | "developer";
    profileImage?: string;
  }[];
  propertyId?: string;
  propertyTitle?: string;
  lastMessage?: Message;
  unreadCount: number;
  createdAt: string;
  updatedAt: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  totalCount: number;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}

// Authentication Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  phone: string;
  firstName: string;
  lastName: string;
  userType: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Payment Types
export interface Payment {
  id: string;
  amount: number;
  currency: "NGN";
  status: "pending" | "completed" | "failed";
  paymentMethod: "card" | "bank_transfer" | "mobile_money";
  propertyId?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

// Verification Types
export interface VerificationRequest {
  id: string;
  propertyId: string;
  agentId: string;
  status: "pending" | "approved" | "rejected";
  documents: string[];
  inspectorNotes?: string;
  createdAt: string;
  updatedAt: string;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  isRead: boolean;
  data?: Record<string, unknown>;
  createdAt: string;
}

// Common Types
export type LoadingState = "idle" | "loading" | "succeeded" | "failed";

export interface ErrorState {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
}
