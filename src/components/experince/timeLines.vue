<template>
    <v-timeline align="start" side="end" class="time-line" justify="center" line-color="#1D2939" truncate-line="both">
      <v-timeline-item dot-color="#FD853A"
      >
        <template v-slot:opposite>
            <div class="flex flex-col gap-2 max-w-[450px]">
                <h2 class="text-[32px] font-extrabold"> Cognizant, Mumbai </h2>
                <p class=" text-gray-thin text-[18px]">
                    Sep 2016- July 2020                </p>
              </div>
        </template>
        <div class="flex flex-col gap-3 max-w-[450px]">
          <h2 class="text-[32px] font-extrabold"> Experince Designer</h2>
          <p class=" text-gray-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-timeline-item>
  
      <v-timeline-item dot-color="#1D2939"
      >
        <template v-slot:opposite>
            <div class="flex flex-col gap-2 max-w-[450px]">
                <h2 class="text-[32px] font-extrabold"> Cognizant, Mumbai </h2>
                <p class=" text-gray-thin text-[18px]">
                    Sep 2016- July 2020                </p>
              </div>
        </template>
        <div class="flex flex-col gap-3 max-w-[450px]">
          <h2 class="text-[32px] font-extrabold"> Experince Designer</h2>
          <p class=" text-gray-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item dot-color="#FD853A"
      >
        <template v-slot:opposite>
            <div class="flex flex-col gap-2 max-w-[450px]">
                <h2 class="text-[32px] font-extrabold"> Cognizant, Mumbai </h2>
                <p class=" text-gray-thin text-[18px]">
                    Sep 2016- July 2020                </p>
              </div>
        </template>
        <div class="flex flex-col gap-3 max-w-[450px]">
          <h2 class="text-[32px] font-extrabold"> Experince Designer</h2>
          <p class=" text-gray-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </template>

  <style lang="scss">
  .time-line{

        row-gap: 50px !important;
        --v-timeline-line-size-offset: 220px !important;
    
  }
</style>