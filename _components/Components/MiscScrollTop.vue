<template>
  <Panel
    header="ScrollTop"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <ScrollPanel style="width: 250px; height: 200px">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit
          dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet
          sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies
          integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor
          augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt
          arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin
          aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet.
          Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id
          porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus
          viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis
          aliquam faucibus purus in massa tempor nec.
        </p>
        <XScrollTop
          target="parent"
          :threshold="100"
          icon="pi pi-arrow-up"
          :button-props="{ severity: 'contrast', raised: true, rounded: true }"
        />
      </ScrollPanel>
    </div>
  </Panel>
</template>

<script setup lang="ts"></script>
