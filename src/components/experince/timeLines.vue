<template>
  <v-timeline
    align="start"
    side="end"
    class="time-line"
    justify="center"
    line-color="#1D2939"
    truncate-line="both"
  >
    <v-timeline-item dot-color="#FD853A">
      <template v-slot:opposite>
        <div class="flex flex-col gap-2 max-w-[450px]">
          <h2 class="text-[32px] font-extrabold">University Projects(academic)</h2>
          <p class="text-gray-thin text-[18px]">May 2019- February 2019</p>
        </div>
      </template>
      <div class="flex flex-col gap-3 max-w-[450px]">
        <h2 class="text-[32px] font-extrabold">Begining</h2>
        <p class="text-gray-thin">
          At the university of tabriz, i started programming with Java language which on of the best
          options for practicing OOP and programming logic, then i continue with javascript,html,css
          to enter the world of web programming.
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item dot-color="#1D2939">
      <template v-slot:opposite>
        <div class="flex flex-col gap-2 max-w-[450px]">
          <h2 class="text-[32px] font-extrabold">Udemy Courses,Online</h2>
          <p class="text-gray-thin text-[18px]">March 2019- March 2020</p>
        </div>
      </template>
      <div class="flex flex-col gap-3 max-w-[450px]">
        <h2 class="text-[32px] font-extrabold">Learning and Practicing</h2>
        <p class="text-gray-thin">
          Thanks to udemy, I was able to learn Javascript,html and css professionally and practice concurrently, Then i interested in JavaSvript freamworks like React and Vue and i started to learn them professionally.
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item dot-color="#FD853A">
      <template v-slot:opposite>
        <div class="flex flex-col gap-2 max-w-[450px]">
          <h2 class="text-[32px] font-extrabold">G2 holding, Tabriz</h2>
          <p class="text-gray-thin text-[18px]">April 2021- Present</p>
        </div>
      </template>
      <div class="flex flex-col gap-3 max-w-[450px]">
        <h2 class="text-[32px] font-extrabold">Frontend Developer</h2>
        <p class="text-gray-thin">
          In April 2021, I was hired by G2 holding company in Tabriz,Iran as a front-end developer. I have been working in this holding for 3years. During this time, i have done many projects that i have explained in project section and i have faced many challenges.i experienced team work for first time in this holding and i have practiced problem solving.
        </p>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<style lang="scss">
.time-line {
  row-gap: 50px !important;
  --v-timeline-line-size-offset: 220px !important;
}
</style>
