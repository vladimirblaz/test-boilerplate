<template>
  <div class="flex flex-col gap-1">
    <label v-if="props.label" :for="props.name" class="font-medium" :class="{ 'text-red-500': !!errorMessage }">
      <span>{{ props.label }}</span>
      <span v-if="labelRequired" class="text-red-500"> *</span>
    </label>
    <InputGroup class="border border-black rounded-lg" :class="{ 'border border-red-500': !!errorMessage }">
      <div class="card flex justify-center">
        <Select v-model="selectedCountry" :options="allCountries" filter optionLabel="name" placeholder="Select a Country" 
        class="w-full md:w-56 border-none pl-[12px] py-[6px] " p-select-filter="border-2 border-gray-500" 
        :pt="{ 
          listContainer: { class: 'bg-white rounded-b-lg' },
          label: { class: 'p-0' },
          dropdown: { class: 'bg-[#F3F3F3] p-0' },
          header: { class: 'bg-[#FFFFFF] rounded-lg' },
          overlay: { class: 'border-1 border-[#CDCDCD] shadow-xl' },
          pcFilter: { class: 'border-2 border-solid border-red-500' }
          }">
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex items-center gap-2 bg-[#F3F3F3] p-1 rounded-l-lg ">
              <div :class="`iti-flag-small iti-flag ${slotProps.value.code.toLowerCase()}`" />
              <div><p>(+{{slotProps.value.phone}})</p></div>
            </div>
            <span v-else>
              <div class="flex items-center gap-2 bg-[#F3F3F3] p-1 rounded-l-lg ">
                <div :class="`iti-flag-small iti-flag ${selectedCountry.name.toLowerCase()}`" />
                <div><p>(+{{selectedCountry.phone}})</p></div>
              </div>
            </span>
          </template>
          <template #option="slotProps">
            <div class="flex items-center gap-2">
              <div :class="`iti-flag-small iti-flag ${slotProps.option.code.toLowerCase()}`" />
              <div><p>(+{{slotProps.option.phone}})</p></div>
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </Select>
      </div>
      <InputText v-bind="$attrs" :name="props.name" v-model="value" @keypress="onlynumbers" placeholder="Ingrese el numero" class="border-none pl-2 py-[6px]"/>
    </InputGroup>
    <Message v-if="errorMessage" severity="error" size="small" variant="simple">{{ errorMessage }}</Message>
  </div>
</template>
<script lang="ts" setup>
import { AsYouType, isValidPhoneNumber, parsePhoneNumberFromString  } from 'libphonenumber-js'
import { useField } from "vee-validate";

const props = defineProps<{
  name: string,
  modelValue: string | null | undefined,
  label?: string,
  labelRequired?: boolean,
  isValidate?:boolean
}>();

const emit = defineEmits<{
  (event: "update:modelValue", modelValue?: string | null): void;
}>();

const selectedCountry = ref(
  {
    name: 'Bolivia',
    code: 'bo',
    phone:'591'
  }
);

const { value, errorMessage } = useField(props.name || "", props.isValidate ? validatePhoneNumber : [])
watch(()=>props.modelValue, (v: string | null | undefined) => value.value = v)
watch(value, ()=> {
  const phoneNumber = parsePhoneNumberFromString(value.value)
  if (phoneNumber) {
    const internationalNumber = phoneNumber.formatInternational()
    const codeNumber = phoneNumber.country
    if (codeNumber) {
      const getcountryObject = getCountry(allCountries)
      const countrie = getcountryObject[codeNumber?.toLowerCase()]
      selectedCountry.value = countrie
    }
    value.value = new AsYouType(codeNumber).input(phoneNumber?.nationalNumber)
    emit("update:modelValue", internationalNumber)
  }else{
    value.value = new AsYouType(selectedCountry.value.code.toUpperCase()).input(value.value)
    emit("update:modelValue", value.value)
  }
})

//validation only number for inputTest
function onlynumbers(e) {
  const char = String.fromCharCode(e.keyCode || e.which)
  if (!/[0-9]/.test(char)) {
    e.preventDefault()
  }
}

// get country code of list all allCountries
function getCountry(countries){
  return countries.reduce((map, country) => {
        if (country && country.code) {
            map[country.code] = country;
        }
        return map;
    }, {});
}

//validate number with the country
function validatePhoneNumber(value:string){
  if (!isValidPhoneNumber(value || '',selectedCountry.value.code.toLocaleUpperCase())) {
    return 'El numero no es correcto'
  }
  return true 
}

const allCountries = [
  {
    name: 'Afghanistan (‫افغانستان‬‎)',
    code: 'af',
    phone:'93'
  },
  {
    name: 'Albania (Shqipëri)',
    code: 'al',
    phone:'355'
  },
  {
    name: 'Ageria (‫الجزائر‬‎)',
    code: 'dz',
    phone:'213'
  },
  {
    name: 'American Samoa',
    code: 'as',
    phone:'1684'
  },
  {
    name: 'Andorra',
    code: 'ad',
    phone:'376'
  },
  {
    name: 'Angola',
    code: 'ao',
    phone:'244'
  },
  {
    name: 'Anguilla',
    code: 'ai',
    phone:'1264'
  },
  {
    name: 'Antigua and Barbuda',
    code: 'ag',
    phone:'1268'
  },
  {
    name: 'Argentina',
    code: 'ar',
    phone:'54'
  },
  {
    name: 'Armenia (Հայաստան)',
    code: 'am',
    phone:'374'
  },
  {
    name: 'Aruba',
    code: 'aw',
    phone:'297'
  },
  {
   name: 'Australia',
   code: 'au',
   phone:'61',
   order: 0
  },
  {
    name:'Austria (Österreich)',
    code:'at',
    phone:'43'
  },
  {
    name: 'Azerbaijan (Azərbaycan)',
    code: 'az',
    phone:'994'
  },
  {
    name: 'Bahamas',
    code: 'bs',
    phone:'1242'
  },
  {
    name: 'Bahrain (‫البحرين‬‎)',
    code: 'bh',
    phone:'973'
  },
  {
    name: 'Bangladesh (বাংলাদেশ)',
    code: 'bd',
    phone:'880'
  },
  {
    name: 'Barbados',
    code: 'bb',
    phone:'1246'
  },
  {
    name: 'Belarus (Беларусь)',
    code: 'by',
    phone:'375'
  },
  {
    name: 'Belgium (België)',
    code: 'be',
    phone:'32'
  },
  {
    name: 'Belize',
    code: 'bz',
    phone:'501'
  },
  {
    name: 'Benin (Bénin)',
    code: 'bj',
    phone:'229'
  },
  {
    name: 'Bermuda',
    code: 'bm',
    phone:'1441'
  },
  {
    name: 'Bhutan (འབྲུག)',
    code: 'bt',
    phone:'975'
  },
  {
    name: 'Bolivia',
    code: 'bo',
    phone:'591'
  },
  {
    name: 'Bosnia and Herzegovina (Босна и Херцеговина)',
    code: 'ba',
    phone:'387'
  },
  {
    name: 'Botswana',
    code: 'bw',
    phone:'267'
  },
  {
    name: 'Brazil (Brasil)',
    code: 'br',
    phone:'55'
  },
  {
    name: 'British Indian Ocean Territory',
    code: 'io',
    phone:'246'
  },
  {
    name: 'British Virgin Islands',
    code: 'vg',
    phone:'1284'
  },
  {
    name: 'Brunei',
    code: 'bn',
    phone:'673'
  },
  {
    name: 'Bulgaria (България)',
    code: 'bg',
    phone:'359'
  },
  {
    name: 'Burkina Faso',
    code: 'bf',
    phone:'226'
  },
  {
    name: 'Burundi (Uburundi)',
    code: 'bi',
    phone:'257'
  },
  {
    name: 'Cambodia (កម្ពុជា)',
    code: 'kh',
    phone:'855'
  },
  {
    name: 'Cameroon (Cameroun)',
    code: 'cm',
    phone:'237'
  },
  {
    name: 'Canada',
    code: 'ca',
    phone:'1',
    order: 1,
    state: ['204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']
  },
  {
    name: 'Cape Verde (Kabu Verdi)',
    code: 'cv',
    phone:'238'
  },
  {
    name: 'Caribbean Netherlands',
    code: 'bq',
    phone:'599',
    order: 1
  },
  {
    name: 'Cayman Islands',
    code: 'ky',
    phone:'1345'
  },
  {
    name: 'Central African Republic (République centrafricaine)',
    code: 'cf',
    phone:'236'
  },
  {
    name: 'Chad (Tchad)',
    code: 'td',
    phone:'235'
  },
  {
    name: 'Chile',
    code: 'cl',
    phone:'56'
  },
  {
    name: 'China (中国)',
    code: 'cn',
    phone:'86'
  },
  {
    name: 'Christmas Island',
    code: 'cx',
    phone:'61',
    order: 2
  },
  {
    name: 'Cocos (Keeling) Islands',
    code: 'cc',
    phone:'61',
    order: 1
  },
  {
    name: 'Colombia',
    code: 'co',
    phone:'57'
  },
  {
    name: 'Comoros (‫جزر القمر‬‎)',
    code: 'km',
    phone:'269'
  },
  {
    name: 'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
    code: 'cd',
    phone:'243'
  },
  {
    name: 'Congo (Republic) (Congo-Brazzaville)',
    code: 'cg',
    phone:'242'
  },
  {
    name: 'Cook Islands',
    code: 'ck',
    phone:'682'
  },
  {
    name: 'Costa Rica',
    code: 'cr',
    phone:'506'
  },
  {
    name: 'Côte d’Ivoire',
    code: 'ci',
    phone:'225'
  },
  {
    name: 'Croatia (Hrvatska)',
    code: 'hr',
    phone:'385'
  },
  {
    name: 'Cuba',
    code: 'cu',
    phone:'53'
  },
  {
    name: 'Curaçao',
    code: 'cw',
    phone:'599',
    order: 0
  },
  {
    name: 'Cyprus (Κύπρος)',
    code: 'cy',
    phone:'357'
  },
  {
    name: 'Czech Republic (Česká republika)',
    code: 'cz',
    phone:'420'
  },
  {
    name: 'Denmark (Danmark)',
    code: 'dk',
    phone:'45'
  },
  {
    name: 'Djibouti',
    code: 'dj',
    phone:'253'
  },
  {
    name: 'Dominica',
    code: 'dm',
    phone:'1767'
  },
  {
    name: 'Dominican Republic (República Dominicana)',
    code: 'do',
    phone:'1',
    order: 2,
    state: ['809', '829', '849']
  },
  {
    name: 'Ecuador',
    code: 'ec',
    phone:'593'
  },
  {
    name: 'Egypt (‫مصر‬‎)',
    code: 'eg',
    phone:'20'
  },
  {
    name: 'El Salvador',
    code: 'sv',
    phone:'503'
  },
  {
    name: 'Equatorial Guinea (Guinea Ecuatorial)',
    code: 'gq',
    phone:'240'
  },
  {
    name: 'Eritrea',
    code: 'er',
    phone:'291'
  },
  {
    name: 'Estonia (Eesti)',
    code: 'ee',
    phone:'372'
  },
  {
    name: 'Ethiopia',
    code: 'et',
    phone:'251'
  },
  {
    name: 'Falkland Islands (Islas Malvinas)',
    code: 'fk',
    phone:'500'
  },
  {
    name: 'Faroe Islands (Føroyar)',
    code: 'fo',
    phone:'298'
  },
  {
    name: 'Fiji',
    code: 'fj',
    phone:'679'
  },
  {
    name: 'Finland (Suomi)',
    code: 'fi',
    phone:'358',
    order: 0
  },
  {
    name: 'France',
    code: 'fr',
    phone:'33'
  },
  {
    name: 'French Guiana (Guyane française)',
    code: 'gf',
    phone:'594'
  },
  {
    name: 'French Polynesia (Polynésie française)',
    code: 'pf',
    phone:'689'
  },
  {
    name: 'Gabon',
    code: 'ga',
    phone:'241'
  },
  {
    name: 'Gambia',
    code: 'gm',
    phone:'220'
  },
  {
    name: 'Georgia (საქართველო)',
    code: 'ge',
    phone:'995'
  },
  {
    name: 'Germany (Deutschland)',
    code: 'de',
    phone:'49'
  },
  {
    name: 'Ghana (Gaana)',
    code: 'gh',
    phone:'233'
  },
  {
    name: 'Gibraltar',
    code: 'gi',
    phone:'350'
  },
  {
    name: 'Greece (Ελλάδα)',
    code: 'gr',
    phone:'30'
  },
  {
    name: 'Greenland (Kalaallit Nunaat)',
    code: 'gl',
    phone:'299'
  },
  {
    name: 'Grenada',
    code: 'gd',
    phone:'1473'
  },
  {
    name: 'Guadeloupe',
    code: 'gp',
    phone:'590',
    order: 0
  },
  {
    name: 'Guam',
    code: 'gu',
    phone:'1671'
  },
  {
    name: 'Guatemala',
    code: 'gt',
    phone:'502'
  },
  {
    name: 'Guernsey',
    code: 'gg',
    phone:'44',
    order: 1
  },
  {
    name: 'Guinea (Guinée)',
    code: 'gn',
    phone:'224'
  },
  {
    name: 'Guinea-Bissau (Guiné Bissau)',
    code: 'gw',
    phone:'245'
  },
  {
    name: 'Guyana',
    code: 'gy',
    phone:'592'
  },
  {
    name: 'Haiti',
    code: 'ht',
    phone:'509'
  },
  {
    name: 'Honduras',
    code: 'hn',
    phone:'504'
  },
  {
    name: 'Hong Kong (香港)',
    code: 'hk',
    phone:'852'
  },
  {
    name: 'Hungary (Magyarország)',
    code: 'hu',
    phone:'36'
  },
  {
    name: 'Iceland (Ísland)',
    code: 'is',
    phone:'354'
  },
  {
    name: 'India (भारत)',
    code: 'in',
    phone:'91'
  },
  {
    name: 'Indonesia',
    code: 'id',
    phone:'62'
  },
  {
    name: 'Iran (‫ایران‬‎)',
    code: 'ir',
    phone:'98'
  },
  {
    name: 'Iraq (‫العراق‬‎)',
    code: 'iq',
    phone:'964'
  },
  {
    name: 'Ireland',
    code: 'ie',
    phone:'353'
  },
  {
    name: 'Isle of Man',
    code: 'im',
    phone:'44',
    order: 2
  },
  {
    name: 'Israel (‫ישראל‬‎)',
    code: 'il',
    phone:'972'
  },
  {
    name: 'Italy (Italia)',
    code: 'it',
    phone:'39',
    order: 0
  },
  {
    name: 'Jamaica',
    code: 'jm',
    phone:'1876'
  },
  {
    name: 'Japan (日本)',
    code: 'jp',
    phone:'81'
  },
  {
    name: 'Jersey',
    code: 'je',
    phone:'44',
    order: 3
  },
  {
    name: 'Jordan (‫الأردن‬‎)',
    code: 'jo',
    phone:'962'
  },
  {
    name: 'Kazakhstan (Казахстан)',
    code: 'kz',
    phone:'7',
    order: 1
  },
  {
    name: 'Kenya',
    code: 'ke',
    phone:'254'
  },
  {
    name: 'Kiribati',
    code: 'ki',
    phone:'686'
  },
  {
    name: 'Kosovo',
    code: 'xk',
    phone:'383'
  },
  {
    name: 'Kuwait (‫الكويت‬‎)',
    code: 'kw',
    phone:'965'
  },
  {
    name: 'Kyrgyzstan (Кыргызстан)',
    code: 'kg',
    phone:'996'
  },
  {
    name: 'Laos (ລາວ)',
    code: 'la',
    phone:'856'
  },
  {
    name: 'Latvia (Latvija)',
    code: 'lv',
    phone:'371'
  },
  {
    name: 'Lebanon (‫لبنان‬‎)',
    code: 'lb',
    phone:'961'
  },
  {
    name: 'Lesotho',
    code: 'ls',
    phone:'266'
  },
  {
    name: 'Liberia',
    code: 'lr',
    phone:'231'
  },
  {
    name: 'Libya (‫ليبيا‬‎)',
    code: 'ly',
    phone:'218'
  },
  {
    name: 'Liechtenstein',
    code: 'li',
    phone:'423'
  },
  {
    name: 'Lithuania (Lietuva)',
    code: 'lt',
    phone:'370'
  },
  {
    name: 'Luxembourg',
    code: 'lu',
    phone:'352'
  },
  {
    name: 'Macau (澳門)',
    code: 'mo',
    phone:'853'
  },
  {
    name: 'Macedonia (FYROM) (Македонија)',
    code: 'mk',
    phone:'389'
  },
  {
    name: 'Madagascar (Madagasikara)',
    code: 'mg',
    phone:'261'
  },
  {
    name: 'Malawi',
    code: 'mw',
    phone:'265'
  },
  {
    name: 'Malaysia',
    code: 'my',
    phone:'60'
  },
  {
    name: 'Maldives',
    code: 'mv',
    phone:'960'
  },
  {
    name: 'Mali',
    code: 'ml',
    phone:'223'
  },
  {
    name: 'Malta',
    code: 'mt',
    phone:'356'
  },
  {
    name: 'Marshall Islands',
    code: 'mh',
    phone:'692'
  },
  {
    name: 'Martinique',
    code: 'mq',
    phone:'596'
  },
  {
    name: 'Mauritania (‫موريتانيا‬‎)',
    code: 'mr',
    phone:'222'
  },
  {
    name: 'Mauritius (Moris)',
    code: 'mu',
    phone:'230'
  },
  {
    name: 'Mayotte',
    code: 'yt',
    phone:'262',
    order: 1
  },
  {
    name: 'Mexico (México)',
    code: 'mx',
    phone:'52'
  },
  {
    name: 'Micronesia',
    code: 'fm',
    phone:'691'
  },
  {
    name: 'Moldova (Republica Moldova)',
    code: 'md',
    phone:'373'
  },
  {
    name: 'Monaco',
    code: 'mc',
    phone:'377'
  },
  {
    name: 'Mongolia (Монгол)',
    code: 'mn',
    phone:'976'
  },
  {
    name: 'Montenegro (Crna Gora)',
    code: 'me',
    phone:'382'
  },
  {
    name: 'Montserrat',
    code: 'ms',
    phone:'1664'
  },
  {
    name: 'Morocco (‫المغرب‬‎)',
    code: 'ma',
    phone:'212',
    order: 0
  },
  {
    name: 'Mozambique (Moçambique)',
    code: 'mz',
    phone:'258'
  },
  {
    name: 'Myanmar (Burma) (မြန်မာ)',
    code: 'mm',
    phone:'95'
  },
  {
    name: 'Namibia (Namibië)',
    code: 'na',
    phone:'264'
  },
  {
    name: 'Nauru',
    code: 'nr',
    phone:'674'
  },
  {
    name: 'Nepal (नेपाल)',
    code: 'np',
    phone:'977'
  },
  {
    name: 'Netherlands (Nederland)',
    code: 'nl',
    phone:'31'
  },
  {
    name: 'New Caledonia (Nouvelle-Calédonie)',
    code: 'nc',
    phone:'687'
  },
  {
    name: 'New Zealand',
    code: 'nz',
    phone:'64'
  },
  {
    name: 'Nicaragua',
    code: 'ni',
    phone:'505'
  },
  {
    name: 'Niger (Nijar)',
    code: 'ne',
    phone:'227'
  },
  {
    name: 'Nigeria',
    code: 'ng',
    phone:'234'
  },
  {
    name: 'Niue',
    code: 'nu',
    phone:'683'
  },
  {
    name: 'Norfolk Island',
    code: 'nf',
    phone:'672'
  },
  {
    name: 'North Korea (조선 민주주의 인민 공화국)',
    code: 'kp',
    phone:'850'
  },
  {
    name: 'Northern Mariana Islands',
    code: 'mp',
    phone:'1670'
  },
  {
    name: 'Norway (Norge)',
    code: 'no',
    phone:'47',
    order: 0
  },
  {
    name: 'Oman (‫عُمان‬‎)',
    code: 'om',
    phone:'968'
  },
  {
    name: 'Pakistan (‫پاکستان‬‎)',
    code: 'pk',
    phone:'92'
  },
  {
    name: 'Palau',
    code: 'pw',
    phone:'680'
  },
  {
    name: 'Palestine (‫فلسطين‬‎)',
    code: 'ps',
    phone:'970'
  },
  {
    name: 'Panama (Panamá)',
    code: 'pa',
    phone:'507'
  },
  {
    name: 'Papua New Guinea',
    code: 'pg',
    phone:'675'
  },
  {
    name: 'Paraguay',
    code: 'py',
    phone:'595'
  },
  {
    name: 'Peru (Perú)',
    code: 'pe',
    phone:'51'
  },
  {
    name: 'Philippines',
    code: 'ph',
    phone:'63'
  },
  {
    name: 'Poland (Polska)',
    code: 'pl',
    phone:'48'
  },
  {
    name: 'Portugal',
    code: 'pt',
    phone:'351'
  },
  {
    name: 'Puerto Rico',
    code: 'pr',
    phone:'1',
    order: 3,
    state: ['787', '939']
  },
  {
    name: 'Qatar (‫قطر‬‎)',
    code: 'qa',
    phone:'974'
  },
  {
    name: 'Réunion (La Réunion)',
    code: 're',
    phone:'262',
    order: 0
  },
  {
    name: 'Romania (România)',
    code: 'ro',
    phone:'40'
  },
  {
    name: 'Russia (Россия)',
    code: 'ru',
    phone:'7',
    order: 0
  },
  {
    name: 'Rwanda',
    code: 'rw',
    phone:'250'
  },
  {
    name: 'Saint Barthélemy',
    code: 'bl',
    phone:'590',
    order: 1
  },
  {
    name: 'Saint Helena',
    code: 'sh',
    phone:'290'
  },
  {
    name: 'Saint Kitts and Nevis',
    code: 'kn',
    phone:'1869'
  },
  {
    name: 'Saint Lucia',
    code: 'lc',
    phone:'1758'
  },
  {
    name: 'Saint Martin (Saint-Martin (partie française))',
    code: 'mf',
    phone:'590',
    order: 2
  },
  {
    name: 'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
    code: 'pm',
    phone:'508'
  },
  {
    name: 'Saint Vincent and the Grenadines',
    code: 'vc',
    phone:'1784'
  },
  {
    name: 'Samoa',
    code: 'ws',
    phone:'685'
  },
  {
    name: 'San Marino',
    code: 'sm',
    phone:'378'
  },
  {
    name: 'São Tomé and Príncipe (São Tomé e Príncipe)',
    code: 'st',
    phone:'239'
  },
  {
    name: 'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
    code: 'sa',
    phone:'966'
  },
  {
    name: 'Senegal (Sénégal)',
    code: 'sn',
    phone:'221'
  },
  {
    name: 'Serbia (Србија)',
    code: 'rs',
    phone:'381'
  },
  {
    name: 'Seychelles',
    code: 'sc',
    phone:'248'
  },
  {
    name: 'Sierra Leone',
    code: 'sl',
    phone:'232'
  },
  {
    name: 'Singapore',
    code: 'sg',
    phone:'65'
  },
  {
    name: 'Sint Maarten',
    code: 'sx',
    phone:'1721'
  },
  {
    name: 'Slovakia (Slovensko)',
    code: 'sk',
    phone:'421'
  },
  {
    name: 'Slovenia (Slovenija)',
    code: 'si',
    phone:'386'
  },
  {
    name: 'Solomon Islands',
    code: 'sb',
    phone:'677'
  },
  {
    name: 'Somalia (Soomaaliya)',
    code: 'so',
    phone:'252'
  },
  {
    name: 'South Africa',
    code: 'za',
    phone:'27'
  },
  {
    name: 'South Korea (대한민국)',
    code: 'kr',
    phone:'82'
  },
  {
    name: 'South Sudan (‫جنوب السودان‬‎)',
    code: 'ss',
    phone:'211'
  },
  {
    name: 'Spain (España)',
    code: 'es',
    phone:'34'
  },
  {
    name: 'Sri Lanka (ශ්‍රී ලංකාව)',
    code: 'lk',
    phone:'94'
  },
  {
    name: 'Sudan (‫السودان‬‎)',
    code: 'sd',
    phone:'249'
  },
  {
    name: 'Suriname',
    code: 'sr',
    phone:'597'
  },
  {
    name: 'Svalbard and Jan Mayen',
    code: 'sj',
    phone:'47',
    order: 1
  },
  {
    name: 'Swaziland',
    code: 'sz',
    phone:'268'
  },
  {
    name: 'Sweden (Sverige)',
    code: 'se',
    phone:'46'
  },
  {
    name: 'Switzerland (Schweiz)',
    code: 'ch',
    phone:'41'
  },
  {
    name: 'Syria (‫سوريا‬‎)',
    code: 'sy',
    phone:'963'
  },
  {
    name: 'Taiwan (台灣)',
    code: 'tw',
    phone:'886'
  },
  {
    name: 'Tajikistan',
    code: 'tj',
    phone:'992'
  },
  {
    name: 'Tanzania',
    code: 'tz',
    phone:'255'
  },
  {
    name: 'Thailand (ไทย)',
    code: 'th',
    phone:'66'
  },
  {
    name: 'Timor-Leste',
    code: 'tl',
    phone:'670'
  },
  {
    name: 'Togo',
    code: 'tg',
    phone:'228'
  },
  {
    name: 'Tokelau',
    code: 'tk',
    phone:'690'
  },
  {
    name: 'Tonga',
    code: 'to',
    phone:'676'
  },
  {
    name: 'Trinidad and Tobago',
    code: 'tt',
    phone:'1868'
  },
  {
    name: 'Tunisia (‫تونس‬‎)',
    code: 'tn',
    phone:'216'
  },
  {
    name: 'Turkey (Türkiye)',
    code: 'tr',
    phone:'90'
  },
  {
    name: 'Turkmenistan',
    code: 'tm',
    phone:'993'
  },
  {
    name: 'Turks and Caicos Islands',
    code: 'tc',
    phone:'1649'
  },
  {
    name: 'Tuvalu',
    code: 'tv',
    phone:'688'
  },
  {
    name: 'U.S. Virgin Islands',
    code: 'vi',
    phone:'1340'
  },
  {
    name: 'Uganda',
    code: 'ug',
    phone:'256'
  },
  {
    name: 'Ukraine (Україна)',
    code: 'ua',
    phone:'380'
  },
  {
    name: 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
    code: 'ae',
    phone:'971'
  },
  {
    name: 'United Kingdom',
    code: 'gb',
    phone:'44',
    order: 0
  },
  {
    name: 'United States',
    code: 'us',
    phone:'1',
    order: 0
  },
  {
    name: 'Uruguay',
    code: 'uy',
    phone:'598'
  },
  {
    name: 'Uzbekistan (Oʻzbekiston)',
    code: 'uz',
    phone:'998'
  },
  {
    name: 'Vanuatu',
    code: 'vu',
    phone:'678'
  },
  {
    name: 'Vatican City (Città del Vaticano)',
    code: 'va',
    phone:'39',
    order: 1
  },
  {
    name: 'Venezuela',
    code: 've',
    phone:'58'
  },
  {
    name: 'Vietnam (Việt Nam)',
    code: 'vn',
    phone:'84'
  },
  {
    name: 'Wallis and Futuna (Wallis-et-Futuna)',
    code: 'wf',
    phone:'681'
  },
  {
    name: 'Western Sahara (‫الصحراء الغربية‬‎)',
    code: 'eh',
    phone:'212',
    order: 1
  },
  {
    name: 'Yemen (‫اليمن‬‎)',
    code: 'ye',
    phone:'967'
  },
  {
    name: 'Zambia',
    code: 'zm',
    phone:'260'
  },
  {
    name: 'Zimbabwe',
    code: 'zw',
    phone:'263'
  },
  {
    name: 'Åland Islands',
    code: 'ax',
    phone:'358',
    order: 1
  }
]


</script>
<style scoped>
.iti-flag {
  width: 20px;
}
.iti-flag.be {
  width: 18px;
}
.iti-flag.ch {
  width: 15px;
}
.iti-flag.mc {
  width: 19px;
}
.iti-flag.ne {
  width: 18px;
}
.iti-flag.np {
  width: 13px;
}
.iti-flag.va {
  width: 15px;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min--moz-device-pixel-ratio: 2),
  only screen and (-o-min-device-pixel-ratio: 2),
  only screen and (min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx) {
  .iti-flag {
    background-size: 5630px 15px;
  }
}
.iti-flag.ac {
  height: 10px;
  background-position: 0px 0px;
}
.iti-flag.ad {
  height: 14px;
  background-position: -22px 0px;
}
.iti-flag.ae {
  height: 10px;
  background-position: -44px 0px;
}
.iti-flag.af {
  height: 14px;
  background-position: -66px 0px;
}
.iti-flag.ag {
  height: 14px;
  background-position: -88px 0px;
}
.iti-flag.ai {
  height: 10px;
  background-position: -110px 0px;
}
.iti-flag.al {
  height: 15px;
  background-position: -132px 0px;
}
.iti-flag.am {
  height: 10px;
  background-position: -154px 0px;
}
.iti-flag.ao {
  height: 14px;
  background-position: -176px 0px;
}
.iti-flag.aq {
  height: 14px;
  background-position: -198px 0px;
}
.iti-flag.ar {
  height: 13px;
  background-position: -220px 0px;
}
.iti-flag.as {
  height: 10px;
  background-position: -242px 0px;
}
.iti-flag.at {
  height: 14px;
  background-position: -264px 0px;
}
.iti-flag.au {
  height: 10px;
  background-position: -286px 0px;
}
.iti-flag.aw {
  height: 14px;
  background-position: -308px 0px;
}
.iti-flag.ax {
  height: 13px;
  background-position: -330px 0px;
}
.iti-flag.az {
  height: 10px;
  background-position: -352px 0px;
}
.iti-flag.ba {
  height: 10px;
  background-position: -374px 0px;
}
.iti-flag.bb {
  height: 14px;
  background-position: -396px 0px;
}
.iti-flag.bd {
  height: 12px;
  background-position: -418px 0px;
}
.iti-flag.be {
  height: 15px;
  background-position: -440px 0px;
}
.iti-flag.bf {
  height: 14px;
  background-position: -460px 0px;
}
.iti-flag.bg {
  height: 12px;
  background-position: -482px 0px;
}
.iti-flag.bh {
  height: 12px;
  background-position: -504px 0px;
}
.iti-flag.bi {
  height: 12px;
  background-position: -526px 0px;
}
.iti-flag.bj {
  height: 14px;
  background-position: -548px 0px;
}
.iti-flag.bl {
  height: 14px;
  background-position: -570px 0px;
}
.iti-flag.bm {
  height: 10px;
  background-position: -592px 0px;
}
.iti-flag.bn {
  height: 10px;
  background-position: -614px 0px;
}
.iti-flag.bo {
  height: 14px;
  background-position: -636px 0px;
}
.iti-flag.bq {
  height: 14px;
  background-position: -658px 0px;
}
.iti-flag.br {
  height: 14px;
  background-position: -680px 0px;
}
.iti-flag.bs {
  height: 10px;
  background-position: -702px 0px;
}
.iti-flag.bt {
  height: 14px;
  background-position: -724px 0px;
}
.iti-flag.bv {
  height: 15px;
  background-position: -746px 0px;
}
.iti-flag.bw {
  height: 14px;
  background-position: -768px 0px;
}
.iti-flag.by {
  height: 10px;
  background-position: -790px 0px;
}
.iti-flag.bz {
  height: 14px;
  background-position: -812px 0px;
}
.iti-flag.ca {
  height: 10px;
  background-position: -834px 0px;
}
.iti-flag.cc {
  height: 10px;
  background-position: -856px 0px;
}
.iti-flag.cd {
  height: 15px;
  background-position: -878px 0px;
}
.iti-flag.cf {
  height: 14px;
  background-position: -900px 0px;
}
.iti-flag.cg {
  height: 14px;
  background-position: -922px 0px;
}
.iti-flag.ch {
  height: 15px;
  background-position: -944px 0px;
}
.iti-flag.ci {
  height: 14px;
  background-position: -961px 0px;
}
.iti-flag.ck {
  height: 10px;
  background-position: -983px 0px;
}
.iti-flag.cl {
  height: 14px;
  background-position: -1005px 0px;
}
.iti-flag.cm {
  height: 14px;
  background-position: -1027px 0px;
}
.iti-flag.cn {
  height: 14px;
  background-position: -1049px 0px;
}
.iti-flag.co {
  height: 14px;
  background-position: -1071px 0px;
}
.iti-flag.cp {
  height: 14px;
  background-position: -1093px 0px;
}
.iti-flag.cr {
  height: 12px;
  background-position: -1115px 0px;
}
.iti-flag.cu {
  height: 10px;
  background-position: -1137px 0px;
}
.iti-flag.cv {
  height: 12px;
  background-position: -1159px 0px;
}
.iti-flag.cw {
  height: 14px;
  background-position: -1181px 0px;
}
.iti-flag.cx {
  height: 10px;
  background-position: -1203px 0px;
}
.iti-flag.cy {
  height: 14px;
  background-position: -1225px 0px;
}
.iti-flag.cz {
  height: 14px;
  background-position: -1247px 0px;
}
.iti-flag.de {
  height: 12px;
  background-position: -1269px 0px;
}
.iti-flag.dg {
  height: 10px;
  background-position: -1291px 0px;
}
.iti-flag.dj {
  height: 14px;
  background-position: -1313px 0px;
}
.iti-flag.dk {
  height: 15px;
  background-position: -1335px 0px;
}
.iti-flag.dm {
  height: 10px;
  background-position: -1357px 0px;
}
.iti-flag.do {
  height: 13px;
  background-position: -1379px 0px;
}
.iti-flag.dz {
  height: 14px;
  background-position: -1401px 0px;
}
.iti-flag.ea {
  height: 14px;
  background-position: -1423px 0px;
}
.iti-flag.ec {
  height: 14px;
  background-position: -1445px 0px;
}
.iti-flag.ee {
  height: 13px;
  background-position: -1467px 0px;
}
.iti-flag.eg {
  height: 14px;
  background-position: -1489px 0px;
}
.iti-flag.eh {
  height: 10px;
  background-position: -1511px 0px;
}
.iti-flag.er {
  height: 10px;
  background-position: -1533px 0px;
}
.iti-flag.es {
  height: 14px;
  background-position: -1555px 0px;
}
.iti-flag.et {
  height: 10px;
  background-position: -1577px 0px;
}
.iti-flag.eu {
  height: 14px;
  background-position: -1599px 0px;
}
.iti-flag.fi {
  height: 12px;
  background-position: -1621px 0px;
}
.iti-flag.fj {
  height: 10px;
  background-position: -1643px 0px;
}
.iti-flag.fk {
  height: 10px;
  background-position: -1665px 0px;
}
.iti-flag.fm {
  height: 11px;
  background-position: -1687px 0px;
}
.iti-flag.fo {
  height: 15px;
  background-position: -1709px 0px;
}
.iti-flag.fr {
  height: 14px;
  background-position: -1731px 0px;
}
.iti-flag.ga {
  height: 15px;
  background-position: -1753px 0px;
}
.iti-flag.gb {
  height: 10px;
  background-position: -1775px 0px;
}
.iti-flag.gd {
  height: 12px;
  background-position: -1797px 0px;
}
.iti-flag.ge {
  height: 14px;
  background-position: -1819px 0px;
}
.iti-flag.gf {
  height: 14px;
  background-position: -1841px 0px;
}
.iti-flag.gg {
  height: 14px;
  background-position: -1863px 0px;
}
.iti-flag.gh {
  height: 14px;
  background-position: -1885px 0px;
}
.iti-flag.gi {
  height: 10px;
  background-position: -1907px 0px;
}
.iti-flag.gl {
  height: 14px;
  background-position: -1929px 0px;
}
.iti-flag.gm {
  height: 14px;
  background-position: -1951px 0px;
}
.iti-flag.gn {
  height: 14px;
  background-position: -1973px 0px;
}
.iti-flag.gp {
  height: 14px;
  background-position: -1995px 0px;
}
.iti-flag.gq {
  height: 14px;
  background-position: -2017px 0px;
}
.iti-flag.gr {
  height: 14px;
  background-position: -2039px 0px;
}
.iti-flag.gs {
  height: 10px;
  background-position: -2061px 0px;
}
.iti-flag.gt {
  height: 13px;
  background-position: -2083px 0px;
}
.iti-flag.gu {
  height: 11px;
  background-position: -2105px 0px;
}
.iti-flag.gw {
  height: 10px;
  background-position: -2127px 0px;
}
.iti-flag.gy {
  height: 12px;
  background-position: -2149px 0px;
}
.iti-flag.hk {
  height: 14px;
  background-position: -2171px 0px;
}
.iti-flag.hm {
  height: 10px;
  background-position: -2193px 0px;
}
.iti-flag.hn {
  height: 10px;
  background-position: -2215px 0px;
}
.iti-flag.hr {
  height: 10px;
  background-position: -2237px 0px;
}
.iti-flag.ht {
  height: 12px;
  background-position: -2259px 0px;
}
.iti-flag.hu {
  height: 10px;
  background-position: -2281px 0px;
}
.iti-flag.ic {
  height: 14px;
  background-position: -2303px 0px;
}
.iti-flag.id {
  height: 14px;
  background-position: -2325px 0px;
}
.iti-flag.ie {
  height: 10px;
  background-position: -2347px 0px;
}
.iti-flag.il {
  height: 15px;
  background-position: -2369px 0px;
}
.iti-flag.im {
  height: 10px;
  background-position: -2391px 0px;
}
.iti-flag.in {
  height: 14px;
  background-position: -2413px 0px;
}
.iti-flag.io {
  height: 10px;
  background-position: -2435px 0px;
}
.iti-flag.iq {
  height: 14px;
  background-position: -2457px 0px;
}
.iti-flag.ir {
  height: 12px;
  background-position: -2479px 0px;
}
.iti-flag.is {
  height: 15px;
  background-position: -2501px 0px;
}
.iti-flag.it {
  height: 14px;
  background-position: -2523px 0px;
}
.iti-flag.je {
  height: 12px;
  background-position: -2545px 0px;
}
.iti-flag.jm {
  height: 10px;
  background-position: -2567px 0px;
}
.iti-flag.jo {
  height: 10px;
  background-position: -2589px 0px;
}
.iti-flag.jp {
  height: 14px;
  background-position: -2611px 0px;
}
.iti-flag.ke {
  height: 14px;
  background-position: -2633px 0px;
}
.iti-flag.kg {
  height: 12px;
  background-position: -2655px 0px;
}
.iti-flag.kh {
  height: 13px;
  background-position: -2677px 0px;
}
.iti-flag.ki {
  height: 10px;
  background-position: -2699px 0px;
}
.iti-flag.km {
  height: 12px;
  background-position: -2721px 0px;
}
.iti-flag.kn {
  height: 14px;
  background-position: -2743px 0px;
}
.iti-flag.kp {
  height: 10px;
  background-position: -2765px 0px;
}
.iti-flag.kr {
  height: 14px;
  background-position: -2787px 0px;
}
.iti-flag.kw {
  height: 10px;
  background-position: -2809px 0px;
}
.iti-flag.ky {
  height: 10px;
  background-position: -2831px 0px;
}
.iti-flag.kz {
  height: 10px;
  background-position: -2853px 0px;
}
.iti-flag.la {
  height: 14px;
  background-position: -2875px 0px;
}
.iti-flag.lb {
  height: 14px;
  background-position: -2897px 0px;
}
.iti-flag.lc {
  height: 10px;
  background-position: -2919px 0px;
}
.iti-flag.li {
  height: 12px;
  background-position: -2941px 0px;
}
.iti-flag.lk {
  height: 10px;
  background-position: -2963px 0px;
}
.iti-flag.lr {
  height: 11px;
  background-position: -2985px 0px;
}
.iti-flag.ls {
  height: 14px;
  background-position: -3007px 0px;
}
.iti-flag.lt {
  height: 12px;
  background-position: -3029px 0px;
}
.iti-flag.lu {
  height: 12px;
  background-position: -3051px 0px;
}
.iti-flag.lv {
  height: 10px;
  background-position: -3073px 0px;
}
.iti-flag.ly {
  height: 10px;
  background-position: -3095px 0px;
}
.iti-flag.ma {
  height: 14px;
  background-position: -3117px 0px;
}
.iti-flag.mc {
  height: 15px;
  background-position: -3139px 0px;
}
.iti-flag.md {
  height: 10px;
  background-position: -3160px 0px;
}
.iti-flag.me {
  height: 10px;
  background-position: -3182px 0px;
}
.iti-flag.mf {
  height: 14px;
  background-position: -3204px 0px;
}
.iti-flag.mg {
  height: 14px;
  background-position: -3226px 0px;
}
.iti-flag.mh {
  height: 11px;
  background-position: -3248px 0px;
}
.iti-flag.mk {
  height: 10px;
  background-position: -3270px 0px;
}
.iti-flag.ml {
  height: 14px;
  background-position: -3292px 0px;
}
.iti-flag.mm {
  height: 14px;
  background-position: -3314px 0px;
}
.iti-flag.mn {
  height: 10px;
  background-position: -3336px 0px;
}
.iti-flag.mo {
  height: 14px;
  background-position: -3358px 0px;
}
.iti-flag.mp {
  height: 10px;
  background-position: -3380px 0px;
}
.iti-flag.mq {
  height: 14px;
  background-position: -3402px 0px;
}
.iti-flag.mr {
  height: 14px;
  background-position: -3424px 0px;
}
.iti-flag.ms {
  height: 10px;
  background-position: -3446px 0px;
}
.iti-flag.mt {
  height: 14px;
  background-position: -3468px 0px;
}
.iti-flag.mu {
  height: 14px;
  background-position: -3490px 0px;
}
.iti-flag.mv {
  height: 14px;
  background-position: -3512px 0px;
}
.iti-flag.mw {
  height: 14px;
  background-position: -3534px 0px;
}
.iti-flag.mx {
  height: 12px;
  background-position: -3556px 0px;
}
.iti-flag.my {
  height: 10px;
  background-position: -3578px 0px;
}
.iti-flag.mz {
  height: 14px;
  background-position: -3600px 0px;
}
.iti-flag.na {
  height: 14px;
  background-position: -3622px 0px;
}
.iti-flag.nc {
  height: 10px;
  background-position: -3644px 0px;
}
.iti-flag.ne {
  height: 15px;
  background-position: -3666px 0px;
}
.iti-flag.nf {
  height: 10px;
  background-position: -3686px 0px;
}
.iti-flag.ng {
  height: 10px;
  background-position: -3708px 0px;
}
.iti-flag.ni {
  height: 12px;
  background-position: -3730px 0px;
}
.iti-flag.nl {
  height: 14px;
  background-position: -3752px 0px;
}
.iti-flag.no {
  height: 15px;
  background-position: -3774px 0px;
}
.iti-flag.np {
  height: 15px;
  background-position: -3796px 0px;
}
.iti-flag.nr {
  height: 10px;
  background-position: -3811px 0px;
}
.iti-flag.nu {
  height: 10px;
  background-position: -3833px 0px;
}
.iti-flag.nz {
  height: 10px;
  background-position: -3855px 0px;
}
.iti-flag.om {
  height: 10px;
  background-position: -3877px 0px;
}
.iti-flag.pa {
  height: 14px;
  background-position: -3899px 0px;
}
.iti-flag.pe {
  height: 14px;
  background-position: -3921px 0px;
}
.iti-flag.pf {
  height: 14px;
  background-position: -3943px 0px;
}
.iti-flag.pg {
  height: 15px;
  background-position: -3965px 0px;
}
.iti-flag.ph {
  height: 10px;
  background-position: -3987px 0px;
}
.iti-flag.pk {
  height: 14px;
  background-position: -4009px 0px;
}
.iti-flag.pl {
  height: 13px;
  background-position: -4031px 0px;
}
.iti-flag.pm {
  height: 14px;
  background-position: -4053px 0px;
}
.iti-flag.pn {
  height: 10px;
  background-position: -4075px 0px;
}
.iti-flag.pr {
  height: 14px;
  background-position: -4097px 0px;
}
.iti-flag.ps {
  height: 10px;
  background-position: -4119px 0px;
}
.iti-flag.pt {
  height: 14px;
  background-position: -4141px 0px;
}
.iti-flag.pw {
  height: 13px;
  background-position: -4163px 0px;
}
.iti-flag.py {
  height: 11px;
  background-position: -4185px 0px;
}
.iti-flag.qa {
  height: 8px;
  background-position: -4207px 0px;
}
.iti-flag.re {
  height: 14px;
  background-position: -4229px 0px;
}
.iti-flag.ro {
  height: 14px;
  background-position: -4251px 0px;
}
.iti-flag.rs {
  height: 14px;
  background-position: -4273px 0px;
}
.iti-flag.ru {
  height: 14px;
  background-position: -4295px 0px;
}
.iti-flag.rw {
  height: 14px;
  background-position: -4317px 0px;
}
.iti-flag.sa {
  height: 14px;
  background-position: -4339px 0px;
}
.iti-flag.sb {
  height: 10px;
  background-position: -4361px 0px;
}
.iti-flag.sc {
  height: 10px;
  background-position: -4383px 0px;
}
.iti-flag.sd {
  height: 10px;
  background-position: -4405px 0px;
}
.iti-flag.se {
  height: 13px;
  background-position: -4427px 0px;
}
.iti-flag.sg {
  height: 14px;
  background-position: -4449px 0px;
}
.iti-flag.sh {
  height: 10px;
  background-position: -4471px 0px;
}
.iti-flag.si {
  height: 10px;
  background-position: -4493px 0px;
}
.iti-flag.sj {
  height: 15px;
  background-position: -4515px 0px;
}
.iti-flag.sk {
  height: 14px;
  background-position: -4537px 0px;
}
.iti-flag.sl {
  height: 14px;
  background-position: -4559px 0px;
}
.iti-flag.sm {
  height: 15px;
  background-position: -4581px 0px;
}
.iti-flag.sn {
  height: 14px;
  background-position: -4603px 0px;
}
.iti-flag.so {
  height: 14px;
  background-position: -4625px 0px;
}
.iti-flag.sr {
  height: 14px;
  background-position: -4647px 0px;
}
.iti-flag.ss {
  height: 10px;
  background-position: -4669px 0px;
}
.iti-flag.st {
  height: 10px;
  background-position: -4691px 0px;
}
.iti-flag.sv {
  height: 12px;
  background-position: -4713px 0px;
}
.iti-flag.sx {
  height: 14px;
  background-position: -4735px 0px;
}
.iti-flag.sy {
  height: 14px;
  background-position: -4757px 0px;
}
.iti-flag.sz {
  height: 14px;
  background-position: -4779px 0px;
}
.iti-flag.ta {
  height: 10px;
  background-position: -4801px 0px;
}
.iti-flag.tc {
  height: 10px;
  background-position: -4823px 0px;
}
.iti-flag.td {
  height: 14px;
  background-position: -4845px 0px;
}
.iti-flag.tf {
  height: 14px;
  background-position: -4867px 0px;
}
.iti-flag.tg {
  height: 13px;
  background-position: -4889px 0px;
}
.iti-flag.th {
  height: 14px;
  background-position: -4911px 0px;
}
.iti-flag.tj {
  height: 10px;
  background-position: -4933px 0px;
}
.iti-flag.tk {
  height: 10px;
  background-position: -4955px 0px;
}
.iti-flag.tl {
  height: 10px;
  background-position: -4977px 0px;
}
.iti-flag.tm {
  height: 14px;
  background-position: -4999px 0px;
}
.iti-flag.tn {
  height: 14px;
  background-position: -5021px 0px;
}
.iti-flag.to {
  height: 10px;
  background-position: -5043px 0px;
}
.iti-flag.tr {
  height: 14px;
  background-position: -5065px 0px;
}
.iti-flag.tt {
  height: 12px;
  background-position: -5087px 0px;
}
.iti-flag.tv {
  height: 10px;
  background-position: -5109px 0px;
}
.iti-flag.tw {
  height: 14px;
  background-position: -5131px 0px;
}
.iti-flag.tz {
  height: 14px;
  background-position: -5153px 0px;
}
.iti-flag.ua {
  height: 14px;
  background-position: -5175px 0px;
}
.iti-flag.ug {
  height: 14px;
  background-position: -5197px 0px;
}
.iti-flag.um {
  height: 11px;
  background-position: -5219px 0px;
}
.iti-flag.us {
  height: 11px;
  background-position: -5241px 0px;
}
.iti-flag.uy {
  height: 14px;
  background-position: -5263px 0px;
}
.iti-flag.uz {
  height: 10px;
  background-position: -5285px 0px;
}
.iti-flag.va {
  height: 15px;
  background-position: -5307px 0px;
}
.iti-flag.vc {
  height: 14px;
  background-position: -5324px 0px;
}
.iti-flag.ve {
  height: 14px;
  background-position: -5346px 0px;
}
.iti-flag.vg {
  height: 10px;
  background-position: -5368px 0px;
}
.iti-flag.vi {
  height: 14px;
  background-position: -5390px 0px;
}
.iti-flag.vn {
  height: 14px;
  background-position: -5412px 0px;
}
.iti-flag.vu {
  height: 12px;
  background-position: -5434px 0px;
}
.iti-flag.wf {
  height: 14px;
  background-position: -5456px 0px;
}
.iti-flag.ws {
  height: 10px;
  background-position: -5478px 0px;
}
.iti-flag.xk {
  height: 15px;
  background-position: -5500px 0px;
}
.iti-flag.ye {
  height: 14px;
  background-position: -5522px 0px;
}
.iti-flag.yt {
  height: 14px;
  background-position: -5544px 0px;
}
.iti-flag.za {
  height: 14px;
  background-position: -5566px 0px;
}
.iti-flag.zm {
  height: 14px;
  background-position: -5588px 0px;
}
.iti-flag.zw {
  height: 10px;
  background-position: -5610px 0px;
}
.iti-flag {
  width: 20px;
  height: 15px;
  background-image: url('../assets/flags.png');
  background-repeat: no-repeat;
  background-color: #dbdbdb;
  background-position: 20px 0;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min--moz-device-pixel-ratio: 2),
  only screen and (-o-min-device-pixel-ratio: 2),
  only screen and (min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx) {
  .iti-flag {
    background-image: url('../assets/flags.png');
  }
}
.iti-flag.np {
  background-color: transparent;
}
</style>