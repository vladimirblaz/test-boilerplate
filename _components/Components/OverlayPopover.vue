<template>
  <Panel
    header="Popover"
    :pt="{
      root: { class: 'shadow-xl mb-5' },
      header: { class: 'bg-gray-800 text-white' },
      content: { class: 'mt-4' },
    }"
  >
    <div class="card flex justify-center">
      <Button
        type="button"
        :label="selectedMember ? selectedMember.name : 'Select Member'"
        class="min-w-48"
        @click="toggle($event)"
      />
      <Popover ref="op">
        <div class="flex flex-col gap-4">
          <div>
            <span class="font-medium block mb-2">Team Members</span>
            <ul class="list-none p-0 m-0 flex flex-col">
              <li
                v-for="member in members"
                :key="member.name"
                class="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border"
                @click="selectMember(member)"
              >
                <img
                  :src="`https://primefaces.org/cdn/primevue/images/avatar/${member.image}`"
                  style="width: 32px"
                />
                <div>
                  <span class="font-medium">{{ member.name }}</span>
                  <div class="text-sm text-surface-500 dark:text-surface-400">
                    {{ member.email }}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Popover>
    </div>
  </Panel>
</template>

<script setup lang="ts">
  const op = ref();
  const selectedMember = ref<{ name: string; image: string; email: string; role: string }>();
  const members = ref([
    { name: "Amy Elsner", image: "amyelsner.png", email: "amy@email.com", role: "Owner" },
    {
      name: "Bernardo Dominic",
      image: "bernardodominic.png",
      email: "bernardo@email.com",
      role: "Editor",
    },
    { name: "Ioni Bowcher", image: "ionibowcher.png", email: "ioni@email.com", role: "Viewer" },
  ]);

  const toggle = (event: unknown) => {
    op.value.toggle(event);
  };

  const selectMember = (member: { name: string; image: string; email: string; role: string }) => {
    selectedMember.value = member;
    op.value.hide();
  };
</script>
