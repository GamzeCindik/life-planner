import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import UserService from '../services/UserService'

export function UseUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const result = await UserService.getUsers()
      return result
    },
  })
}
