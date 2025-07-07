<template>
  <LayoutMain>
    <ClientOnly>
      <component :is="selectedComponent" :key="selectedComponentName" />
    </ClientOnly>
  </LayoutMain>
</template>

<script setup>
  import { useRouteQuery } from "@vueuse/router";
  import LayoutMain from "~/_components/LayoutMain.vue";

  import Autocomplete from "~/_components/Components/FormAutocomplete.vue";
  import CascadeSelect from "~/_components/Components/FormCascadeSelect.vue";
  import CheckBox from "~/_components/Components/FormCheckBox.vue";
  import ColorPicker from "~/_components/Components/FormColorPicker.vue";
  import DatePicker from "~/_components/Components/FormDatePicker.vue";
  import FloatLabel from "~/_components/Components/FormFloatLabel.vue";
  import IconField from "~/_components/Components/FormIconField.vue";
  import IftaLabel from "~/_components/Components/FormIftaLabel.vue";
  import InputGroup from "~/_components/Components/FormInputGroup.vue";
  import InputMask from "~/_components/Components/FormInputMask.vue";
  import InputNumber from "~/_components/Components/FormInputNumber.vue";
  import InputOtp from "~/_components/Components/FormInputOtp.vue";
  import InputText from "~/_components/Components/FormInputText.vue";
  import Knob from "~/_components/Components/FormKnob.vue";
  import ListBox from "~/_components/Components/FormListBox.vue";
  import MultiSelect from "~/_components/Components/FormMultiSelect.vue";
  import Password from "~/_components/Components/FormPassword.vue";
  import RadioButton from "~/_components/Components/FormRadioButton.vue";
  import Rating from "~/_components/Components/FormRating.vue";
  import Select from "~/_components/Components/FormSelect.vue";
  import SelectButton from "~/_components/Components/FormSelectButton.vue";
  import Slider from "~/_components/Components/FormSlider.vue";
  import TextArea from "~/_components/Components/FormTextArea.vue";
  import ToggleButton from "~/_components/Components/FormToggleButton.vue";
  import ToggleSwitch from "~/_components/Components/FormToggleSwitch.vue";
  import TreeSelect from "~/_components/Components/FormTreeSelect.vue";

  import Button from "~/_components/Components/ButtonButton.vue";
  import SpeedDial from "~/_components/Components/ButtonSpeedDial.vue";
  import SplitButton from "~/_components/Components/ButtonSplitButton.vue";

  import DataTable from "~/_components/Components/DataDataTable.vue";
  import DataView from "~/_components/Components/DataDataView.vue";
  import OrderList from "~/_components/Components/DataOrderList.vue";
  import OrganizationChart from "~/_components/Components/DataOrganizationChart.vue";
  import Paginator from "~/_components/Components/DataPaginator.vue";
  import PickList from "~/_components/Components/DataPickList.vue";
  import Timeline from "~/_components/Components/DataTimeline.vue";
  import Tree from "~/_components/Components/DataTree.vue";
  import TreeTable from "~/_components/Components/DataTreeTable.vue";
  import VirtualScroller from "~/_components/Components/DataVirtualScroller.vue";

  import Accordion from "~/_components/Components/PanelAccordion.vue";
  import Card from "~/_components/Components/PanelCard.vue";
  import Deferred from "~/_components/Components/PanelDeferred.vue";
  import Divider from "~/_components/Components/PanelDivider.vue";
  import Fieldset from "~/_components/Components/PanelFieldset.vue";
  import Panel from "~/_components/Components/PanelPanel.vue";
  import ScrollPanel from "~/_components/Components/PanelScrollPanel.vue";
  import Splitter from "~/_components/Components/PanelSplitter.vue";
  import Stepper from "~/_components/Components/PanelStepper.vue";
  import Tabs from "~/_components/Components/PanelTabs.vue";
  import Toolbar from "~/_components/Components/PanelToolbar.vue";

  import Dialog from "~/_components/Components/OverlayDialog.vue";
  import Drawer from "~/_components/Components/OverlayDrawer.vue";
  import Popover from "~/_components/Components/OverlayPopover.vue";
  import ToolTip from "~/_components/Components/OverlayToolTip.vue";

  import Upload from "~/_components/Components/FileUpload.vue";

  import BreadCrumb from "~/_components/Components/MenuBreadCrumb.vue";
  import ContextMenu from "~/_components/Components/MenuContextMenu.vue";
  import Dock from "~/_components/Components/MenuDock.vue";
  import Menu from "~/_components/Components/MenuMenu.vue";
  import MenuBar from "~/_components/Components/MenuMenuBar.vue";
  import MegaMenu from "~/_components/Components/MenuMegaMenu.vue";
  import PanelMenu from "~/_components/Components/MenuPanelMenu.vue";
  import TieredMenu from "~/_components/Components/MenuTieredMenu.vue";

  import Message from "~/_components/Components/MessageMessage.vue";

  import Carousel from "~/_components/Components/MediaCarousel.vue";
  import Galleria from "~/_components/Components/MediaGalleria.vue";
  import Image from "~/_components/Components/MediaImage.vue";
  import ImageCompare from "~/_components/Components/MediaImageCompare.vue";

  import Avatar from "~/_components/Components/MiscAvatar.vue";
  import Badge from "~/_components/Components/MiscBadge.vue";
  import BlockUI from "~/_components/Components/MiscBlockUI.vue";
  import Chip from "~/_components/Components/MiscChip.vue";
  import Fluid from "~/_components/Components/MiscFluid.vue";
  import Inplace from "~/_components/Components/MiscInplace.vue";
  import MeterGroup from "~/_components/Components/MiscMeterGroup.vue";
  import ProgressBar from "~/_components/Components/MiscProgressBar.vue";
  import ProgressSpinner from "~/_components/Components/MiscProgressSpinner.vue";
  import ScrollTop from "~/_components/Components/MiscScrollTop.vue";
  import Skeleton from "~/_components/Components/MiscSkeleton.vue";
  import Tag from "~/_components/Components/MiscTag.vue";

  import SnackBar from "~/_components/Components/OthersSnackBar.vue";
  import PhoneInput from "~/_components/Components/OthersPhoneInput.vue";

  import ICONS from "~/_components/Components/ICONS.vue";

  const selectedComponentName = useRouteQuery("r");

  const selectedComponent = computed(() => {
    switch (selectedComponentName.value) {
      case "Autocomplete": return Autocomplete;
      case "CascadeSelect": return CascadeSelect;
      case "CheckBox": return CheckBox;
      case "ColorPicker": return ColorPicker;
      case "DatePicker": return DatePicker;
      case "FloatLabel": return FloatLabel;
      case "IconField": return IconField;
      case "IftaLabel": return IftaLabel;
      case "InputGroup": return InputGroup;
      case "InputMask": return InputMask;
      case "InputNumber": return InputNumber;
      case "InputOtp": return InputOtp;
      case "InputText": return InputText;
      case "Knob": return Knob;
      case "ListBox": return ListBox;
      case "MultiSelect": return MultiSelect;
      case "Password": return Password;
      case "RadioButton": return RadioButton;
      case "Rating": return Rating;
      case "Select": return Select;
      case "SelectButton": return SelectButton;
      case "Slider": return Slider;
      case "TextArea": return TextArea;
      case "ToggleButton": return ToggleButton;
      case "ToggleSwitch": return ToggleSwitch;
      case "TreeSelect": return TreeSelect;

      case "Button": return Button;
      case "SpeedDial": return SpeedDial;
      case "SplitButton": return SplitButton;

      case "DataTable": return DataTable;
      case "DataView": return DataView;
      case "OrderList": return OrderList;
      case "OrganizationChart": return OrganizationChart;
      case "Paginator": return Paginator;
      case "PickList": return PickList;
      case "Timeline": return Timeline;
      case "Tree": return Tree;
      case "TreeTable": return TreeTable;
      case "VirtualScroller": return VirtualScroller;

      case "Accordion": return Accordion;
      case "Card": return Card;
      case "Deferred": return Deferred;
      case "Divider": return Divider;
      case "Fieldset": return Fieldset;
      case "Panel": return Panel;
      case "ScrollPanel": return ScrollPanel;
      case "Splitter": return Splitter;
      case "Stepper": return Stepper;
      case "Tabs": return Tabs;
      case "Toolbar": return Toolbar;

      case "Dialog": return Dialog;
      case "Drawer": return Drawer;
      case "Popover": return Popover;
      case "ToolTip": return ToolTip;

      case "Upload": return Upload;
      
      case "BreadCrumb": return BreadCrumb;
      case "ContextMenu": return ContextMenu;
      case "Dock": return Dock;
      case "Menu": return Menu;
      case "MenuBar": return MenuBar;
      case "MegaMenu": return MegaMenu;
      case "PanelMenu": return PanelMenu;
      case "TieredMenu": return TieredMenu;

      case "Message": return Message;
      
      case "Carousel": return Carousel;
      case "Galleria": return Galleria;
      case "Image": return Image;
      case "ImageCompare": return ImageCompare;
      
      case "Avatar": return Avatar;
      case "Badge": return Badge;
      case "BlockUI": return BlockUI;
      case "Chip": return Chip;
      case "Fluid": return Fluid;
      case "Inplace": return Inplace;
      case "MeterGroup": return MeterGroup;
      case "ProgressBar": return ProgressBar;
      case "ProgressSpinner": return ProgressSpinner;
      case "ScrollTop": return ScrollTop;
      case "Skeleton": return Skeleton;
      case "Tag": return Tag;

      case "SnackBar": return SnackBar;
      case "PhoneInput": return PhoneInput;

      case "ICONS": return ICONS;
    }

    return undefined;
  });
</script>
