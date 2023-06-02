import { rtkApi } from '@/shared/api/rtkApi'
import { Notification } from '../model/types/notification'

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getANotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
  overrideExisting: false,
})

export const useNotifications = notificationApi.useGetANotificationsQuery
