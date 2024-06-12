import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "Donors",
    "User",
    "Events",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
    "CurrentItems",
    "ReleaseItems",
    "Items",
    "Items_out",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),

    getDonors: build.query({
      query: () => `donors/gets`,
      providesTags: ["Donors"],
    }),
    getDonor: build.query({
      query: (id) => `donors/donors/${id}`,
      providesTags: ["Donors"],
    }),
    deleteDonor: build.mutation({
      query: (donorId) => ({
        url: `donors/delete/${donorId}`,
        method: "Delete",
      }),
      invalidatesTags: ["Donors"], // Invalidate the cache for "Donors" after deletion
    }),
    addDonor: build.mutation({
      query: ({ name, email, phone, password }) => ({
        url: `donors/add`,
        method: "POST",
        body: { name, email, phone, password },
      }),
      providesTags: ["Donors"],
    }),
    updateDonor: build.mutation({
      query: ({ donorId, name, email, phone, password }) => ({
        url: `donors/update/${donorId}`,
        method: "PUT",
        body: { name, email, phone, password },
      }),
      providesTags: ["Donors"],
    }),

    //Donation Events Start
    getDEvents: build.query({
      query: () => `events/gets`,
      providesTags: ["Events"],
    }),
    getDEvent: build.query({
      query: (id) => `events/events/${id}`,
      providesTags: ["Events"],
    }),
    deleteDEvent: build.mutation({
      query: (donorId) => ({
        url: `events/delete/${donorId}`,
        method: "Delete",
      }),
      invalidatesTags: ["Events"], // Invalidate the cache for "Donors" after deletion
    }),
    addDEvent: build.mutation({
      query: ({ eventDetails }) => ({
        url: `events/add`,
        method: "POST",
        body: { eventDetails },
      }),
      providesTags: ["Events"],
    }),
    updateDEvent: build.mutation({
      query: ({ donorId, name, email, phone, password }) => ({
        url: `events/update/${donorId}`,
        method: "PUT",
        body: { name, email, phone, password },
      }),
      providesTags: ["Events"],
    }),

    //Donation Events End

    //treeplantationEvent Start

    getTreeEvents: build.query({
      query: () => `events/gets`,
      providesTags: ["Events"],
    }),
    getTreeEvent: build.query({
      query: (id) => `events/events/${id}`,
      providesTags: ["Events"],
    }),
    deleteTreeEvent: build.mutation({
      query: (eventId) => ({ 
        url: `events/delete/${eventId}`,
        method: "Delete",
      }),
      invalidatesTags: ["Events"], // Invalidate the cache for "Events" after deletion
    }),
    addTreeEvent: build.mutation({
      query: (eventDetails) => ({
        url: `treePlantationEvent/add`,
        method: "POST",
        body: eventDetails, // Prepare form data for file upload
      }),
      providesTags: ["Events"],
    }),
    updateTreeEvent: build.mutation({
      query: (eventDetails) => ({
        url: `events/update/${eventDetails.eventId}`,
        method: "PUT",
        body: {eventDetails}, // Prepare form data for file upload
      }),
      providesTags: ["Events"],
    }),

    //treeplantationEvent End


    //Items...

    getItemss: build.query({
      query: () => `items/gets`,
      providesTags: ["Items"],
    }),
    getItems: build.query({
      query: (id) => `items/items/${id}`,
      providesTags: ["Items"],
    }),
    deleteItems: build.mutation({
      query: (itemID) => ({
        url: `items/delete/${itemID}`,
        method: "Delete",
      }),
      invalidatesTags: ["Items"], // Invalidate the cache for "Items" after deletion
    }),
    addItems: build.mutation({
      query: ({ itemID, itemName, quantity, donorId, date }) => ({
        url: `items/add`,
        method: "POST",
        body: { itemID, itemName, quantity, donorId, date },
      }),
      providesTags: ["Items"],
    }),
    updateItems: build.mutation({
      query: ({ itemID, itemName, quantity, donorId, date }) => ({
        url: `items/update/${itemID}`,
        method: "PUT",
        body: { itemID, itemName, quantity, donorId, date },
      }),
      providesTags: ["Items"],
    }),

    //...

    //Items_out...

    getItemss_out: build.query({
      query: () => `items_out/gets`,
      providesTags: ["Items_out"],
    }),
    getItems_out: build.query({
      query: (id) => `items_out/items_out/${id}`,
      providesTags: ["Items_out"],
    }),
    deleteItems_out: build.mutation({
      query: (itemID) => ({
        url: `items_out/delete/${itemID}`,
        method: "Delete",
      }),
      invalidatesTags: ["Items_out"], // Invalidate the cache for "Items" after deletion
    }),
    addItems_out: build.mutation({
      query: ({ itemID, quantity, eventId, date }) => ({
        url: `items_out/add`,
        method: "POST",
        body: { itemID, quantity, eventId, date },
      }),
      providesTags: ["Items_out"],
    }),
    updateItems_out: build.mutation({
      query: ({ itemID, quantity, eventId, date }) => ({
        url: `items_out/update/${itemID}`,
        method: "PUT",
        body: { itemID, quantity, eventId, date },
      }),
      providesTags: ["Items_out"],
    }),

    //...

    getCurrentItems: build.query({
      query: () => `general/currentItems`,
      providesTags: ["CurrentItems"],
    }),
    getCurrentItem: build.query({
      query: (id) => `general/currentItems/${id}`,
      providesTags: ["CurrentItems"],
    }),

    getReleaseItems: build.query({
      query: () => `general/releaseItems`,
      providesTags: ["ReleaseItems"],
    }),
    getReleaseItem: build.query({
      query: (id) => `general/releaseItems/${id}`,
      providesTags: ["ReleaseItems"],
    }),

    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),

    deleteCurrentItems: build.mutation({
      query: (itemId) => ({
        url: `general/currentItems/${itemId}`,
        method: "Delete",
      }),
      invalidatesTags: ["CurrentItems"], // Invalidate the cache for "Items" after deletion
    }),
    addCurrentItem: build.mutation({
      query: () => ({
        url: `general/currentItems`,
        method: "post",
      }),
      providesTags: ["CurrentItems"],
    }),

    deleteReleaseItems: build.mutation({
      query: (itemId) => ({
        url: `general/releaseItems/${itemId}`,
        method: "Delete",
      }),
      invalidatesTags: ["ReleaseItems"], // Invalidate the cache for "Items" after deletion
    }),
    addReleaseItem: build.mutation({
      query: () => ({
        url: `general/releaseItems`,
        method: "post",
      }),
      providesTags: ["ReleaseItems"],
    }),
  }),
});

export const {
  useGetDonorsQuery,
  useDeleteDonorMutation,
  useGetDonorQuery,
  useAddDonorMutation,
  useUpdateDonorMutation,

  useGetDEventsQuery,
  useDeleteDEventMutation,
  useGetDEventQuery,
  useAddDEventMutation,
  useUpdateDEventMutation,

  useGetTreeEventsQuery,
  useDeleteTreeEventMutation,
  useGetTreeEventQuery,
  useAddTreeEventMutation,
  useUpdateTreeEventMutation,

  useGetItemssQuery,
  useDeleteItemsMutation,
  useGetItemsQuery,
  useAddItemsMutation,
  useUpdateItemsMutation,

  useGetItemss_outQuery,
  useDeleteItems_outMutation,
  useGetItems_outQuery,
  useAddItems_outMutation,
  useUpdateItems_outMutation,

  useGetCurrentItemsQuery,
  useGetReleaseItemsQuery,

  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,

  useDeleteCurrentItemsMutation,
  useDeleteReleaseItemsMutation,

  useGetCurrentItemQuery,
  useGetReleaseItemQuery,

  useAddCurrentItemMutation,
  useAddReleaseItemMutation,
} = api;
