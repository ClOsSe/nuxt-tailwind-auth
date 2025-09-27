<template>
  <!-- <div class="columns-1 gap-1 sm:columns-2  "> -->
  <div class="grid grid-cols-1 place-content-center gap-4 lg:grid-cols-2  md:max-w-[1000px]">
    
    <div class="aspect-square box-content size-100 p-1 border-3  lg:w-full">
      <div class="flex f-f-vazir font-thin text-gray-600 text-sm">
        <nuxt-link to="/login" class="flex">
          <Icon name="mdi:chevron-right" class="w-7 h-7" color="text-gray-600" />
          <p class="p-1">
            بازگشت
          </p>
        </nuxt-link>
      </div>
      <div class="mt-[35%] justify-items-center font-normal antialiased ">
        <h1 class="text-center f-f-vazir font-extrabold text-2xl">فراموشی رمز عبور</h1>
        <div class="w-3/4 mt-10 block ">

          <label class="mb-0 mr-2 f-f-vazir font-thin text-md text-gray-600 flex">
            شماره موبایل خود را وارد کنید  
            <span class="text-red-500 text-md mr-2">*</span>
          </label>

          <input v-model="phone" 
            class="w-full text-gray-900 text-sm rounded-xl f-f-vazir-light block w-3/4 mt-1 p-4 dark:bg-gray-50 "
            type="number" placeholder="موبایل" />
        </div>

        <button class="w-3/4 mt-6 block p-4 dark:bg-blue-800 rounded-xl text-sm font-bold text-white f-f-vazir-light" >ارسال کد</button>
      </div>
    </div>


     <div class="sticky top-10 hidden lg:block">
      <div class="aspect-square box-content w-full h-full " style="height: 600px; min-height: 600px;">
        <BackgroundImage imageURL="forget.jpg" imageALT="forget" class="w-full h-full object-cover rounded-[2rem]" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BackgroundImage from '~/components/auth/BackgroundImage.vue';

definePageMeta({
  layout: "auth-layout",
})

const name = ref();
const lastName = ref();
const phone = ref();
const email = ref();
const male = ref();
const femail = ref();
</script>