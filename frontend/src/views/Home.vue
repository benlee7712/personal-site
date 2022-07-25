<template>
    <body>
        <full-page>
            <div class="section section-1 h-screen">
                <div class="w-full flex fade-slide-in-top">
                    <h2 class="py-1 mx-[10%] sm:mx-[10%] font-open text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-slate text-left align-middle corner-borders-coral leading-normal">
                        Hi. I'm <h2 class="inline bg-coral rounded px-[2px]">Ben Lee,</h2> a Software Developer at <a href="https://kayenta.io" class="text-lapis link-underline">Kayenta.</a> Nice to meet you.
                    </h2>
                </div>
                <div class="w-full mt-auto h-[10vh] bottom-0 absolute">
                    <img class="move-up-down m-auto w-[20vw] h-[5vh]" src="../assets/icons/down-arrow.svg">
                </div>
            </div>
            <div class="section section-2 h-screen bg-slate">
                <div class="w-full flex justify-center items-center">
                    <h2 class="py-1 mx-[15%] sm:mx-[25%] translate-y-[-25%] font-open text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-white text-left align-middle leading-normal">
                        I <h2 class="inline bg-coral rounded px-[2px]">love</h2> working with all different kinds of technology... and learning new ones.
                    </h2>
                </div>
                <div class="scrolling-icons-wheel w-full h-[20vh]">
                    <div class="scrolling-icons-slide">
                        <img class="icon" src="@/assets/logos/skills/airflow.png">
                        <img class="icon" src="@/assets/logos/skills/docker.svg">
                        <img class="icon" src="@/assets/logos/skills/django.svg">
                        <img class="icon" src="@/assets/logos/skills/github.svg">
                        <img class="icon" src="@/assets/logos/skills/fastapi.svg">
                    </div>
                    <div class="scrolling-icons-slide delay">
                        <img class="icon" src="@/assets/logos/skills/postgresql.svg">
                        <img class="icon" src="@/assets/logos/skills/AWS.svg">
                        <img class="icon" src="@/assets/logos/skills/python.svg">
                        <img class="icon" src="@/assets/logos/skills/rust.svg">
                        <img class="icon" src="@/assets/logos/skills/azure.svg">
                    </div>
                </div>
            </div>
        </full-page>
    </body>
</template>