<template>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- <a href="#" class="flex flex-row items-center gap-1 group text-gray-700 font-medium mb-[10px] transition-all duration-75 ease-in hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 group-hover:animate-ping">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Projects
        </a> -->
        <BackButton 
            buttonLabel="Back to Project page" 
            buttonRedirection="Projects" 
        />


      <div class="flex flex-row gap-4">
         <div class="overflow-hidden bg-white shadow sm:rounded-lg flex-grow">
            <div class="px-4 py-5 sm:px-6">
               <h3 class="text-base font-semibold leading-6 text-gray-900">New Project</h3>
               <div class="flex flex-row items-center gap-1 text-sm text-gray-500">
                  Provide all necessary details of the project
               </div>
            </div>
            <div class="border-t border-gray-200">
               <dl class="pb-[15px]">
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt class="text-sm font-medium text-gray-500">Project name</dt>
                     <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <input type="text" class="border  rounded-lg px-3 py-2 mt-1 text-sm w-full"/>
                     </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt class="text-sm font-medium text-gray-500">Repository</dt>
                     <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <input type="text" class="border  rounded-lg px-3 py-2 mt-1 text-sm w-full"/>
                     </dd>
                  </div>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt class="text-sm font-medium text-gray-500">Tech Stack</dt>
                     <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <input type="text" class="border  rounded-lg px-3 py-2 mt-1 text-sm w-full mb-1"/>
                        <p class="text-xs text-gray-500 italic flex flex-row">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                           </svg>
                           Seperate items by comma
                        </p>
                     </dd>
                  </div>
                  
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt class="text-sm font-medium text-gray-500">Description</dt>
                     <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <textarea class="border resize-none rounded-lg px-3 py-2 mt-1 text-sm w-full" rows="4"></textarea>
                     </dd>
                  </div>

                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt class="text-sm font-medium text-gray-500">Status</dt>
                     <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <label for="active_status">
                           <input type="radio" name="status" id="active_status">
                           Active
                        </label>
                        <label for="inactive_status">
                           <input type="radio" name="status" id="inactive_status">
                           Inactive
                        </label>
                     </dd>
                  </div>
                  
               </dl>
            </div>
         </div>

         <div class="min-w-[280px]">
               <div class="flex flex-col items-center gap-2 p-3">
                  <solid-button
                     text="Save Project" 
                     buttonType="success"
                  />
                  <solid-button
                     text="Cancel" 
                     buttonType="neutral"
                  />
               </div>
         </div>
      </div>

      <ConfirmationModal/>
   </div>
</template>
<script lang="ts">
import BackButton from '@/components/atom/button/BackButton.vue'
import SolidButton from '@/components/atom/button/SolidButton.vue'
import ConfirmationModal from '@/components/molecule/modal/ConfirmationModal.vue'

export default {
    name: 'AddProject',
    components: {
        SolidButton,
        BackButton,
        ConfirmationModal,
    }
}
</script>
<style lang="">
    
</style>