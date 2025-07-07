<template>
  <Panel
    header="Card"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="flex flex-col-2 gap-4">
      <div>
        <XCard :role="'testCard1'" class="p-6" :pt="{ body: { class: 'p-0' } }">
          <template #content>
            <div class="flex flex-row gap-2">
              <div>
                <Avatar
                  label="AB"
                  size="large"
                  class="mr-2 bg-[#7866CB] w-[72px] h-[69px]"
                  shape="circle"
                />
              </div>
              <div>
                <h2 class="font-bold">1. Card Information</h2>
                <p class="font-bold pl-[19px]">
                  Text: <Tag severity="success" value="Success"></Tag>
                </p>
                <div class="pl-[19px]">
                  <div class="flex flex-row gap-1">
                    <p class="font-bold">Text:</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam qui earum eius
                      nesciunt nam, tempore voluptatibus dolores reiciendis reprehenderit commodi
                      voluptatem nemo iure vitae sit exercitationem laborum, laboriosam repudiandae!
                      Dolore culpa harum voluptatibus corporis illum et amet quasi doloremque sunt
                      quo, reiciendis iure commodi est? Debitis maiores hic quisquam quasi.
                    </p>
                  </div>
                  <div class="flex flex-row gap-1">
                    <p class="font-bold">Text:</p>
                    <p>Lorem ipsum dolor</p>
                  </div>
                  <div class="flex flex-row gap-1">
                    <p class="font-bold">Text:</p>
                    <p>Lorem ipsum dolor</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </XCard>
      </div>
      <div>
        <XCard
          :role="'testCard2'"
          class="p-5 pt-7 shadow-xl w-[225px] h-[289px]"
          :pt="{
            body: { class: 'p-0 pt-[12px] gap-3' },
            footer: { class: 'self-end' },
          }"
        >
          <template #header>
            <Icon name="x:bnb-seguro-cesantia" class="w-[44px] h-[38px]" />
          </template>
          <template #title> Advanced Card </template>
          <template #content>
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </template>
          <template #footer>
            <div class="pt-8">
              <XButton rounded class="border-none">
                <Icon name="x:arrow-right" class="text-[#686868]" />
              </XButton>
            </div>
          </template>
        </XCard>
      </div>
    </div>
  </Panel>
</template>

<script setup lang="ts"></script>
