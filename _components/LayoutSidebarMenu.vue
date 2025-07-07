<template>
  <XMenu :pt="{ list: 'gap-0' }" :model="items" class="border-none">
    <template #submenulabel="{ item }">
      <span class="text-secondary text-lg font-bold">{{ item.label }}</span>
    </template>
    <template #item="{ item, props }">
      <a
        class="flex items-center hover:bg-gray-100 border-none py-0"
        :class="{ 'bg-gray-200': hash == item.label }"
        v-bind="props.action"
      >
        <div class="border-0 border-l border-l-gray-500 py-2 pl-3 ml-3 h-full">{{ item.label }}</div>
      </a>
    </template>
  </XMenu>
</template>

<script setup lang="ts">
  import { useRouteQuery } from "@vueuse/router";

  const hash = useRouteQuery("r");

  const items = [
    {
      label: "FORM",
      items: [
        { label: "Autocomplete", command: () => navigate("Autocomplete") },
        { label: "CascadeSelect", command: () => navigate("CascadeSelect") },
        { label: "CheckBox", command: () => navigate("CheckBox") },
        { label: "ColorPicker", command: () => navigate("ColorPicker") },
        { label: "DatePicker", command: () => navigate("DatePicker") },
        { label: "FloatLabel", command: () => navigate("FloatLabel") },
        { label: "IconField", command: () => navigate("IconField") },
        { label: "IftaLabel", command: () => navigate("IftaLabel") },
        { label: "InputGroup", command: () => navigate("InputGroup") },
        { label: "InputMask", command: () => navigate("InputMask") },
        { label: "InputNumber", command: () => navigate("InputNumber") },
        { label: "InputOtp", command: () => navigate("InputOtp") },
        { label: "InputText", command: () => navigate("InputText") },
        { label: "Knob", command: () => navigate("Knob") },
        { label: "ListBox", command: () => navigate("ListBox") },
        { label: "MultiSelect", command: () => navigate("MultiSelect") },
        { label: "Password", command: () => navigate("Password") },
        { label: "RadioButton", command: () => navigate("RadioButton") },
        { label: "Rating", command: () => navigate("Rating") },
        { label: "Select", command: () => navigate("Select") },
        { label: "SelectButton", command: () => navigate("SelectButton") },
        { label: "Slider", command: () => navigate("Slider") },
        { label: "TextArea", command: () => navigate("TextArea") },
        { label: "ToggleButton", command: () => navigate("ToggleButton") },
        { label: "ToggleSwitch", command: () => navigate("ToggleSwitch") },
        { label: "TreeSelect", command: () => navigate("TreeSelect") },
      ],
    },
    {
      label: "BUTTON",
      items: [
        { label: "Button", command: () => navigate("Button") },
        { label: "SpeedDial", command: () => navigate("SpeedDial") },
        { label: "SplitButton", command: () => navigate("SplitButton") },
      ],
    },
    {
      label: "DATA",
      items: [
        { label: "DataTable", command: () => navigate("DataTable") },
        { label: "DataView", command: () => navigate("DataView") },
        { label: "OrderList", command: () => navigate("OrderList") },
        { label: "OrganizationChart", command: () => navigate("OrganizationChart") },
        { label: "Paginator", command: () => navigate("Paginator") },
        { label: "PickList", command: () => navigate("PickList") },
        { label: "Timeline", command: () => navigate("Timeline") },
        { label: "Tree", command: () => navigate("Tree") },
        { label: "TreeTable", command: () => navigate("TreeTable") },
        { label: "VirtualScroller", command: () => navigate("VirtualScroller") },
      ],
    },
    {
      label: "PANEL",
      items: [
        { label: "Accordion", command: () => navigate("Accordion") },
        { label: "Card", command: () => navigate("Card") },
        { label: "Deferred", command: () => navigate("Deferred") },
        { label: "Divider", command: () => navigate("Divider") },
        { label: "Fieldset", command: () => navigate("Fieldset") },
        { label: "Panel", command: () => navigate("Panel") },
        { label: "ScrollPanel", command: () => navigate("ScrollPanel") },
        { label: "Splitter", command: () => navigate("Splitter") },
        { label: "Stepper", command: () => navigate("Stepper") },
        { label: "Tabs", command: () => navigate("Tabs") },
        { label: "Toolbar", command: () => navigate("Toolbar") },
      ],
    },
    {
      label: "OVERLAY",
      items: [
        { label: "Dialog", command: () => navigate("Dialog") },
        { label: "Drawer", command: () => navigate("Drawer") },
        { label: "Popover", command: () => navigate("Popover") },
        { label: "ToolTip", command: () => navigate("ToolTip") },
      ],
    },
    {
      label: "FILE",
      items: [{ label: "Upload", command: () => navigate("Upload") }],
    },
    {
      label: "MENU",
      items: [
        { label: "BreadCrumb", command: () => navigate("BreadCrumb") },
        { label: "ContextMenu", command: () => navigate("ContextMenu") },
        { label: "Dock", command: () => navigate("Dock") },
        { label: "Menu", command: () => navigate("Menu") },
        { label: "MenuBar", command: () => navigate("MenuBar") },
        { label: "MegaMenu", command: () => navigate("MegaMenu") },
        { label: "PanelMenu", command: () => navigate("PanelMenu") },
        { label: "TieredMenu", command: () => navigate("TieredMenu") },
      ],
    },
    {
      label: "MESSAGES",
      items: [{ label: "Message", command: () => navigate("Message") }],
    },
    {
      label: "MEDIA",
      items: [
        { label: "Carousel", command: () => navigate("Carousel") },
        { label: "Galleria", command: () => navigate("Galleria") },
        { label: "Image", command: () => navigate("Image") },
        { label: "ImageCompare", command: () => navigate("ImageCompare") },
      ],
    },
    {
      label: "MISC",
      items: [
        { label: "Avatar", command: () => navigate("Avatar") },
        { label: "Badge", command: () => navigate("Badge") },
        { label: "BlockUI", command: () => navigate("BlockUI") },
        { label: "Chip", command: () => navigate("Chip") },
        { label: "Fluid", command: () => navigate("Fluid") },
        { label: "Inplace", command: () => navigate("Inplace") },
        { label: "MeterGroup", command: () => navigate("MeterGroup") },
        { label: "ProgressBar", command: () => navigate("ProgressBar") },
        { label: "ProgressSpinner", command: () => navigate("ProgressSpinner") },
        { label: "ScrollTop", command: () => navigate("ScrollTop") },
        { label: "Skeleton", command: () => navigate("Skeleton") },
        { label: "Tag", command: () => navigate("Tag") },
      ],
    },
    {
      label: "OTROS",
      items: [
        { label: "SnackBar", command: () => navigate("SnackBar") },
        { label: "PhoneInput", command: () => navigate("PhoneInput") },
      ],
    },
    {
      label: "ICONS",
      command: () => navigate("ICONS"),
    },
  ];

  /**
   *
   */
  function navigate(route: string) {
    hash.value = route;
    return false;
  }
</script>
