<template>
    <div class="flex flex-col mt-10 justify-center px-6 py-15 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="flex  items-center">
            <i class="material-icons pr-1 items-center w-auto text-white">
                library_books
            </i>
            <span class="font-extrabold text-white">Blog Ease</span>
        </div>
        <h2 class=" text-center text-3xl font-bold tracking-tight text-gray-900">Hello, Sign up for free Here</h2>
      </div>
  
      <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="signup">
          <div>
            <label for="name" class="block text-sm/6 font-medium text-gray-900">Name</label>
            <div class="mt-2">
              <input v-model="name" type="text" name="name"  required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
            <div class="mt-2">
              <input v-model="email" type="email" name="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
    
                <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
            </div>
            <div class="mt-2">
              <input v-model="password" type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
  
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
  
      
      </div>
    </div>
  </template>
  
  
  
  
  <script setup>
  const name = ref('');
  const email = ref('');
  const password = ref('');
  
  const signup = async () => {
        navigateTo('/landing');
  };
  </script>
  
  
  
  
  
  