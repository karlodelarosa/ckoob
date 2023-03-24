<template>
   <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div class="flex flex-row gap-4">
         <div v-if="!addingNewContent"  class="min-w-[280px]">
            <div class="bg-white rounded p-5 mb-[20px]">
               <PanelHeader text="PROJECTS" />
               <SideMenu :items="sideMenuItems" />
            </div>

            <div class="flex flex-col gap-1">
               <solid-button
                  @click="addProject()"
                  text="Add Project" 
                  buttonType="success"
               >
                  <template #icon>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                     </svg>
                  </template>
               </solid-button>
            </div>
         </div>
         <div v-if="addingNewContent" class="overflow-hidden bg-white shadow sm:rounded-lg flex-grow">
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
                        <input type="text" class="border  rounded-lg px-3 py-2 mt-1 text-sm w-full"/>
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
                        Set active
                     </dd>
                  </div>
                  
               </dl>
            </div>

            
         </div>
         <div v-if="!addingNewContent" class="overflow-hidden bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
               <h3 class="text-base font-semibold leading-6 text-gray-900">Deborah</h3>
               <div class="flex flex-row items-center gap-1 text-sm text-gray-500">
                  <div class="h-2 w-2 bg-green-500 rounded-full"></div>
                  <div>Active</div>
               </div>
            </div>
            <div class="border-t border-gray-200">
               <dl class="pb-[15px]">
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt class="text-sm font-medium text-gray-500">Project name</dt>
                     <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt class="text-sm font-medium text-gray-500">Repository</dt>
                     <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                  </div>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt class="text-sm font-medium text-gray-500">Tech Stack</dt>
                     <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        Vuejs, nodeapi
                     </dd>
                  </div>
                  
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt class="text-sm font-medium text-gray-500">Description</dt>
                     <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute
                        sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint.
                        Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad
                        adipisicing reprehenderit deserunt qui eu.</dd>
                  </div>

                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt class="text-sm font-medium text-gray-500">Status</dt>
                     <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Active</dd>
                  </div>
                  
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt class="text-sm font-medium text-gray-500"></dt>
                     <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <solid-button
                           class="w-fit px-3"
                           text="Report downtime" 
                           buttonType="error"
                        >
                           <template #icon>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                              </svg>
                           </template>
                        </solid-button>
                     </dd>
                  </div>
               </dl>
            </div>
         </div>
         <div v-if="addingNewContent" class="min-w-[280px]">
               <div class="flex flex-col items-center gap-2 p-3">
                  <solid-button
                     text="Save Project" 
                     buttonType="success"
                  />
                  <solid-button
                     @click="cancelAddingNewContent()"
                     text="Cancel" 
                     buttonType="neutral"
                  />
               </div>
         </div>
      </div>
   </div>
</template>
 
<script lang="ts">
import { ref } from 'vue'
import PanelHeader from '@/components/atom/text/PanelHeader.vue'
import SideMenu from '@/components/molecule/menu/SideMenu.vue'
import SolidButton from '@/components/atom/button/SolidButton.vue'

import { PROJECT_PAGE_SIDE_MENU } from '@/js/BaseConstants'

export default {
   name: 'Projects',
   components: {
      PanelHeader,
      SideMenu,
      SolidButton
   },
   setup() {
      const isActive = ref(true)
      const addingNewContent = ref(false)

      const addProject = () => {
         addingNewContent.value = true
      }

      const cancelAddingNewContent = () => {
         addingNewContent.value = false
      }

      return {
         isActive,
         addingNewContent,
         addProject,
         sideMenuItems: PROJECT_PAGE_SIDE_MENU,
         cancelAddingNewContent
      }
   }
}
</script>