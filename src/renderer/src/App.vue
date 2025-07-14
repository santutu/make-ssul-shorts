<script setup lang="ts">
import { instanceToPlain } from 'class-transformer'
import { User } from './models/User'
import { useUserStore } from './store/useUserStore'

const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

const userStore = useUserStore()

function test(): void {
  const user = new User()
  user.name = 'John Doe'
  console.log(user)
  var plain = instanceToPlain(user)

  console.log(plain);

  
  console.log(userStore.user)
}
</script>

<template>
  <RouterLink to="/">Go to Home</RouterLink>
  <RouterLink to="/about">Go to About</RouterLink>
  
  <main>
    <RouterView />
  </main>
  
  <input type="text" v-model="userStore.user.name">
  {{ userStore.user.name }}
  <button @click="test">test</button>
  <button @click="ipcHandle">test2</button>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!asdsㅁㄴㅇ
    </h1>


    <div class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-800 mb-4">테스트 페이지</h1>
          <p class="text-gray-600 mb-6">Tailwind CSS가 정상적으로 작동하는지 확인해보세요</p>

          <div class="space-y-4">
            <button
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
              기본 버튼
            </button>

            <button
              class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
              성공 버튼
            </button>

            <button
              class="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
              경고 버튼
            </button>
          </div>

          <div class="mt-8 p-4 bg-gray-100 rounded-lg">
            <p class="text-sm text-gray-700">
              이 페이지가 정상적으로 표시된다면 Tailwind CSS가 올바르게 설정된 것입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
