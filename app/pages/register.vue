<template>
  <div class="h-screen bg-cover flex items-center justify-center bg-center"  >
    <div class="grid grid-cols-1 place-content-center gap-4 lg:grid-cols-2  md:max-w-[1000px]">
      
      <div class="aspect-square box-content size-100 p-1 border-3  lg:w-full">
        <div class="text-center justify-center justify-items-center font-normal antialiased ">
          <h1 class="text-center f-f-vazir font-extrabold text-2xl">ثبت نام</h1>

          <input v-model="name" 
            class=" text-gray-900 text-sm rounded-xl f-f-vazir-light block w-3/4 mt-8 p-5 dark:bg-gray-50 "
            type="text" placeholder="نام" />
          <input v-model="lastName" 
            class=" text-gray-900 text-sm rounded-xl f-f-vazir-light block w-3/4 mt-8 p-5 dark:bg-gray-50 "
            type="text" placeholder="نام خانوادگی"/>

          <input v-model="phone" 
            class=" text-gray-900 text-sm rounded-xl f-f-vazir-light block w-3/4 mt-8 p-5 dark:bg-gray-50 "
            type="number" placeholder="موبایل" />

          <input v-model="email" 
            class=" text-gray-900 text-sm rounded-xl f-f-vazir-light block w-3/4 mt-8 p-5 dark:bg-gray-50 "
            type="password" placeholder="رمزعبور"/>

          <div class="mt-8 flex justify-start w-3/4">
            <div class="font-600 ml-10 f-f-vazir font-bold text-md text-gray-600">جنسیت</div>
            <div  class="c-radio c-radio--checked ml-12">
              <input v-model="male"  name="gender_group" type="radio" value="0">
              <label class="mb-0 mr-2 f-f-vazir font-light text-md text-gray-600">آقا</label>
            </div>
            <div  class="c-radio c-radio--checked ml-12">
              <input v-model="femail"  name="gender_group" type="radio" value="0">
              <label class="mb-0 mr-2 f-f-vazir font-light text-md text-gray-600">خانم</label>
            </div>
          
          </div>
          
          <button @click="register()" class="w-3/4 mt-6 block p-4 dark:bg-blue-800 rounded-xl text-sm font-bold text-white f-f-vazir-light" >ادامه</button>

          <div class="w-3/4 text-md font-semibold mt-12" >
            حساب کاربری دارید؟ 
            <nuxt-link to="/login" class="dark:text-blue-800">وارد شوید</nuxt-link>
          </div>
        </div>
      </div>


      <div class="sticky top-10 hidden lg:block">
        <div class="aspect-square box-content w-full h-full " style="height: 600px; min-height: 600px;">
          <BackgroundImage imageURL="register.jpg" imageALT="register" class="w-full h-full object-cover rounded-[2rem]" />
        </div>
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

const register = async () => {
  const gender = 'male'
  const { data, error } = await useFetch('http://localhost:4000/register', {
    method: 'POST',
    body: {
      name:name.value,
      lastName:lastName.value,
      phone:phone.value,
      email:email.value,
      gender:gender,
    },
    headers: {
      'Authorization': 'Bearer my-jwt-token'
    }
  });
  console.log('data',data)
  console.log('error',error)
};
</script>