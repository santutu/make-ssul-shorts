import { User } from '@renderer/models/User'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { acceptHMRUpdate } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({
    name: 'user name',
    age: 5
  })

  return { user }
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
