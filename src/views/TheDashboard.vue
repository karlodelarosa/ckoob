<template>
  <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
    <div class="grid grid-cols-7 grid-flow-row gap-[25px]">
      <div class="flex flex-col gap-[20px] mb-[25px] col-span-2 max-h-[700px] pr-3 overflow-auto">
        <div v-for="i in 6" :key="i"
          class="flex-1 bg-gradient-to-t from-[#FEAC5E] to-[#4BC0C8] min-h-[150px] transition-all duration-75 hover:to-[#237177] rounded-2xl p-[15px]  cursor-pointer flex flex-col justify-between">
          <div>
            <h2 class="text-white text-4xl font-bold">89% <span class="text-sm">System health</span></h2>

            <p class="text-xl font-bold text-white">Project {{ i }}</p>
          </div>
          <p class="text-xs flex flex-row items-center gap-1 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4 ">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>

            Last update: 1 day ago
          </p>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-[15px] min-h-[300px] col-span-5 text-gray-400">
        <template v-if="false">
          <div class="flex flex-col items-center justify-center h-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-24 h-24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
            </svg>

            <h2>Click project cards to check details</h2>
          </div>
        </template>

        <template v-else>
          <section class="container px-4 mx-auto py-[20px]">
            <div class="mb-[20px]">
              <PanelHeader class="text-black" text="PROJECT" />
              <div class="flex flex-row items-center justify-between">
                <h2 class="text-3xl text-black mb-2 font-bold">Project 1</h2>
                <div class="flex flex-row items-center gap-1 text-sm text-gray-500">
                  <div class="h-2 w-2 bg-green-500 rounded-full"></div>
                  <div>Active</div>
                </div>
              </div>

              <p class="text-gray-400 text-sm flex-1">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
              </p>
            </div>

            <div class="flex flex-row flex-wrap gap-1 mb-[20px]">
              <div class="bg-blue-600 text-white px-3 py-1 text-xs w-fit rounded">Vue</div>
              <div class="bg-blue-600 text-white px-3 py-1 text-xs w-fit rounded">Node JS</div>
              <div class="bg-blue-600 text-white px-3 py-1 text-xs w-fit rounded">Docker</div>
              <div class="bg-blue-600 text-white px-3 py-1 text-xs w-fit rounded">PHP</div>
              <div class="bg-blue-600 text-white px-3 py-1 text-xs w-fit rounded">Sanity</div>
            </div>

            <div class="mb-[20px] text-center border-b border-gray-300 pb-[30px]">
              <h2 class="text-2xl text-black font-bold">89%</h2>
              <div class="relative">
                <div class="w-full h-[10px] rounded-full bg-gray-200 "></div>
                <div class="w-2/3 h-[10px] rounded-full bg-blue-500 absolute top-0 left-0 animate-pulse"></div>
              </div>
              <h2 class="text-gray-400 text-xs font-bold">SYSTEM HEALTH</h2>
            </div>

            <div class="overflow-x-auto">
              <div class="  bg-gray-100 font-sans overflow-hidden">
                <div class="w-full">
                  <PanelHeader class="text-black" text="SUMMARY OF REPORTS" />
                  <div class="bg-white shadow-md rounded">
                    <table class="w-full table-auto rounded-xl mb-[40px] overflow-hidden">
                      <thead>
                        <tr class="bg-black text-white uppercase text-sm leading-normal">
                          <th class="py-3 px-6 text-left">Date</th>
                          <th class="py-3 px-6 text-left">Description</th>
                          <th class="py-3 px-6 text-center">Reporter</th>
                          <th class="py-3 px-6 text-center">Status</th>
                          <th class="py-3 px-6 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody class="text-gray-600 text-sm font-light">
                        <tr v-for="i in 10" :key="i" class="border-b border-gray-200 hover:bg-gray-100">
                          <td class="py-3 px-6 text-left whitespace-nowrap">
                            10-10-2023
                          </td>
                          <td class="py-3 px-6 text-left">
                            Bug information is here
                          </td>
                          <td class="py-3 px-6 text-center">
                            <div class="flex flex-row items-center">
                              <img class="w-6 h-6 mr-2 rounded-full"
                                src="https://randomuser.me/api/portraits/men/1.jpg" />
                              John doe
                            </div>
                          </td>
                          <td class="py-3 px-6 text-center">
                            <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Bug</span>
                          </td>
                          <td class="py-3 px-6 text-center">
                            <div class="flex item-center justify-center">
                              <div class="w-4 mr-2 transform hover:text-black cursor-pointer hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </div>
                              <div class="w-4 mr-2 transform hover:text-black cursor-pointer hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              </div>
                              <div class="w-4 mr-2 transform hover:text-black cursor-pointer hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="flex justify-center">
                      <nav aria-label="Page navigation example">
                        <ul class="flex list-style-none">
                          <li class="page-item disabled"><a
                              class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                              href="#" tabindex="-1" aria-disabled="true">Previous</a></li>
                          <li class="page-item"><a
                              class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                              href="#">1</a></li>
                          <li class="page-item active"><a
                              class="page-link relative block py-1.5 px-3 rounded border-0 bg-black outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-gray-900 shadow-md focus:shadow-md"
                              href="#">2 <span class="visually-hidden"></span></a></li>
                          <li class="page-item"><a
                              class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                              href="#">3</a></li>
                          <li class="page-item"><a
                              class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                              href="#">Next</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>





          </section>
        </template>
      </div>
    </div>


  </div>
</template>
  
<script lang="ts">
import PanelHeader from '@/components/atom/text/PanelHeader.vue'

export default {
  name: 'Dashboard',
  components: {
    PanelHeader,
  }
}
</script>

<style scoped></style>