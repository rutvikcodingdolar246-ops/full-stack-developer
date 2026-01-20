//! TanStack Query

// It's a library that helps you manage the state

// of data you fetch from servers, like APIs, in

// your React applications.

// One of the most powerful tools for managi

// server-side state in React.



//! Advantages

// Data Fetching Made Easy: With a simple useQuery hook, fetching data
// becomes super easy.

// Built-in Loading and Error States: No need to write custom code for handling
// loading, errors, or success states.

// Automatic Caching: React Query automatically caches your data.

// Background Refetching: If your data gets stale or out of date, TanStack Query
// can refetch it in the background.

// Pagination and Infinite Scrolling: Handling pagination or infinite scrolling?
// React Query has you covered with tools specifically designed for those
// complex use cases.



//! Verdict

// TanStack Query makes working with server-side data

// in React a breeze. It's fast, efficient, and reduces the

// amount of boilerplate code you need to write. If

// you're working on any app that relies on API data, this

// tool is an absolute game-changer. 



//! QueryClient

// QueryClient: It is the core pairt of the react-auery library. It manages the caching,

// background fetching, data synchronization, and other query-related logic. It provides a

// centralized store for managing and caching asynchronous data in your application.

// new QueryClient(): This creates a new QueryClient instance with default settings. You
// can configure it with options if needed (e.g., setting cache time, stale time, etc.).

// QueryClientProvider: This component is part of react-query and is used to provide the

// QueryClient instance to your entire React app (or a portion of it). This makes the qu
// client available via React's context API so that all the components in the tree can

// the useQuery, useMutation, and other hooks provided by react-query. 