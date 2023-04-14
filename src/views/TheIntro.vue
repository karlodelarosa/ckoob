<template>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class="min-h-screen px-[25px] lg:px-0 py-[50px] lg:py-[100px] w-full lg:w-1/2">
            <section class="mb-5">
                <h1 class="text-7xl font-bold break-words mb-2">Ckoob</h1>
                <h1 class="text-5xl font-bold break-words mb-2">Visualize.Track.Report</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ipsam aperiam facilis quas natus vero exercitationem, explicabo ducimus cumque est!</p>
            </section>

            <section class="mb-8">
                <h2 class="font-bold text-xl">Features</h2>
                <ul class="list-disc pl-5">
                    <li>Add projects</li>
                    <li>Report Issue</li>
                    <li>Visualize Project Health</li>
                    <li>Generate Reports</li>
                    <li>Customize Profile</li>
                </ul>
            </section>

            <section>
                <router-link :to="{ name: 'Dashboard' }" class="bg-black text-white rounded-lg px-5 py-3">
                    Go to Dashboard
                </router-link>
            </section>
        </div>
    </div>
</template>