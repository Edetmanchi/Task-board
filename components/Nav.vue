<template>
    <div>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 py-1 items-center justify-center border-b border-gray-200 dark:border-gray-600 px-2">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <!-- Logo Section -->
          <div v-if="showLogo" class="flex items-center">
            <nuxt-link to="/">
              <i size={48} class="material-icons pr-1 items-center w-auto text-white">
                library_books
              </i>
              <span class="font-extrabold text-white text-2xl whitespace-nowrap">Blog Ease</span>
            </nuxt-link>
          </div>
  
          <!-- Navigation Links -->
          <div v-if="showNavLinks" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li v-for="(link, index) in navLinks" :key="index">
                <nuxt-link :to="link.to" class="block text-xl py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  {{ link.text }}
                </nuxt-link>
              </li>
            </ul>
          </div>
  
          <!-- Right Section (Dropdown and Buttons) -->
          <div class="flex md:order-2 space-x-3">
            <!-- Profile Dropdown -->
            <div v-if="showProfileDropdown" class="flex gap-2 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse p-3">
              <button
                type="button"
                class="flex text-sm bg-gray-800 mx-2 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                @click="toggleDropdown"
              >
                <img class="w-12 h-12 rounded-full" src="/images/2.jpg" alt="user photo" />
              </button>
                </div>
              <!-- Dropdown Menu -->
              <div
                v-if="isDropdownOpen"
                class="z-50 absolute top-20 w-40 right-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
              >
                <div class="px-4 py-3">
                  <span class="block text-sm text-gray-900 dark:text-white">{{ name }}</span>
                </div>
                <ul class="py-2 items-center justify-center">
                  <li v-for="(dropdownLink, index) in dropdownLinks" :key="index">
                    <nuxt-link
                      :to="dropdownLink.to"
                      class="block px-6 py-3 text-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      {{ dropdownLink.text }}
                    </nuxt-link>
                  </li>
                  <li @click="logout" class="block px-6 py-3 text-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</li>
                </ul>
              </div>
  
          
              <nuxt-link v-if="showGetStarted" to="/auth/signin" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3.5 text-center inline-flex items-center">Get Started</nuxt-link>
              <nuxt-link v-if="showAddPost" to="/blogs/addpost" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3.5 text-center inline-flex items-center">Add Post</nuxt-link>
  
            <!-- Buttons Slot -->
            <slot name="buttons"></slot>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  

  </script>