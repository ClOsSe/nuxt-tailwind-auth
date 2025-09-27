<template>
  <div class="h-screen bg-cover flex items-center justify-center bg-center"  >
    <div class="grid grid-cols-1 place-content-center gap-4 lg:grid-cols-2  md:max-w-[1000px]">
      
      <div class="aspect-square box-content size-100 p-1 border-3  lg:w-full">
        <div class="text-center justify-center justify-items-center font-normal antialiased ">
          <h1 class="text-center f-f-vazir font-extrabold text-2xl">ورود به پنل</h1>

          <input v-model="phone" 
          class=" text-gray-900 text-sm rounded-xl f-f-vazir-light block w-3/4 mt-12 p-4 dark:bg-gray-100 "
          type="number" placeholder="موبایل" />
          <input v-model="password" 
          class=" text-gray-900 text-sm rounded-xl f-f-vazir-light block w-3/4 mt-2 p-4 dark:bg-gray-100 "
          type="password" placeholder="رمزعبور"/>

          <button @click="onLoginClick()" class="w-3/4 mt-6 block p-4 dark:bg-blue-800 rounded-xl text-sm font-bold text-white f-f-vazir-light" >ورود به پنل</button>
          <div class="flex w-3/4 mt-6 block">
            <nuxt-link to="/forget" class="w-full p-3  rounded-xl font-bold text-sm dark:text-blue-800 f-f-vazir " >
                <svg style="display: unset;" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                <path d="M6.18001 22.7499C6.08001 22.7499 5.97002 22.7399 5.88001 22.7299L3.71001 22.4299C2.67001 22.2899 1.73001 21.3599 1.57001 20.2999L1.27001 18.1099C1.17001 17.4099 1.47001 16.4999 1.97001 15.9899L6.36001 11.5999C5.65001 8.75992 6.47002 5.75992 8.56002 3.68992C11.8 0.459923 17.07 0.449923 20.32 3.68992C21.89 5.25992 22.75 7.34992 22.75 9.56992C22.75 11.7899 21.89 13.8799 20.32 15.4499C18.22 17.5299 15.23 18.3499 12.41 17.6299L8.01002 22.0199C7.59001 22.4599 6.84001 22.7499 6.18001 22.7499ZM14.43 2.75992C12.68 2.75992 10.94 3.41992 9.61001 4.74992C7.81001 6.53992 7.16001 9.15992 7.91001 11.5999C7.99001 11.8699 7.92001 12.1499 7.72001 12.3499L3.02001 17.0499C2.85001 17.2199 2.71001 17.6599 2.74001 17.8899L3.04001 20.0799C3.10001 20.4599 3.51002 20.8899 3.89001 20.9399L6.07001 21.2399C6.31001 21.2799 6.75001 21.1399 6.92001 20.9699L11.64 16.2599C11.84 16.0599 12.13 15.9999 12.39 16.0799C14.8 16.8399 17.43 16.1899 19.23 14.3899C20.51 13.1099 21.22 11.3899 21.22 9.56992C21.22 7.73992 20.51 6.02992 19.23 4.74992C17.93 3.42992 16.18 2.75992 14.43 2.75992Z" fill="#404EB2"></path>
                <path d="M9.18996 20.5397C8.99996 20.5397 8.80996 20.4697 8.65996 20.3197L6.35996 18.0197C6.06996 17.7297 6.06996 17.2497 6.35996 16.9597C6.64996 16.6697 7.12996 16.6697 7.41996 16.9597L9.71996 19.2597C10.01 19.5497 10.01 20.0297 9.71996 20.3197C9.56996 20.4697 9.37996 20.5397 9.18996 20.5397Z" fill="#404EB2"></path>
                <path d="M14.5 11.75C13.26 11.75 12.25 10.74 12.25 9.5C12.25 8.26 13.26 7.25 14.5 7.25C15.74 7.25 16.75 8.26 16.75 9.5C16.75 10.74 15.74 11.75 14.5 11.75ZM14.5 8.75C14.09 8.75 13.75 9.09 13.75 9.5C13.75 9.91 14.09 10.25 14.5 10.25C14.91 10.25 15.25 9.91 15.25 9.5C15.25 9.09 14.91 8.75 14.5 8.75Z" fill="#404EB2"></path>
                </svg>
              فراموشی رمزعبور
            </nuxt-link>
          </div>

          <div class="flex w-3/4 mt-10 block ">
            <a class="w-full p-4  rounded-xl font-bold text-sm dark:text-blue-800 f-f-vazir border border-blue-800" >
              <svg style="display: unset;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M16.24 2H7.76C5 2 4 3 4 5.81V18.19C4 21 5 22 7.76 22H16.23C19 22 20 21 20 18.19V5.81C20 3 19 2 16.24 2Z" fill="#404EB2"></path>
                <path d="M14 6.25H10C9.59 6.25 9.25 5.91 9.25 5.5C9.25 5.09 9.59 4.75 10 4.75H14C14.41 4.75 14.75 5.09 14.75 5.5C14.75 5.91 14.41 6.25 14 6.25Z" fill="#404EB2"></path>
                <path d="M12 19.3008C12.9665 19.3008 13.75 18.5173 13.75 17.5508C13.75 16.5843 12.9665 15.8008 12 15.8008C11.0335 15.8008 10.25 16.5843 10.25 17.5508C10.25 18.5173 11.0335 19.3008 12 19.3008Z" fill="#404EB2"></path>
              </svg>
              ورود با کد یک بار مصرف
            </a>
          </div>

          <button class="w-3/4 mt-6 p-4 border border-gray-300 rounded-xl text-sm font-bold text-gray-600 f-f-vazir-light" >
            <img class="inline-block ml-2" src="https://startup.trigate.ir/_nuxt/google.ba50264c.svg" alt="google">
            ورود با گوگل
          </button>

          <div class="w-3/4 text-md font-semibold mt-12" >
            حساب کاربری ندارید؟ 
            <nuxt-link to="/register" class="dark:text-blue-800">ثبت نام کنید</nuxt-link>
          </div>
        </div>
      </div>


      <div class="sticky top-10 hidden lg:block">
        <div class="aspect-square box-content w-full h-full " style="height: 600px; min-height: 600px;">
          <BackgroundImage imageURL="login.jpg" imageALT="login" class="w-full h-full object-cover rounded-[2rem]" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BackgroundImage from '~/components/auth/BackgroundImage.vue';
import { login } from '~/scripts/services/authService';

definePageMeta({
  layout: "auth-layout",
})
const phone = ref('');
const password = ref('');

const onLoginClick = async () => {
  try{
    if(phone.value.length<4 || password.value.length<8) return; // todo : use notify to show wrong data notif
    const res = login(phone.value,password.value)
    console.log('res',res)
  }catch(error:any){
    console.error('error in onLoginClick',error)
  }

};

</script>