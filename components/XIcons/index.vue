<template>
    <div class="min-h-screen flex flex-col">
        <div class="w-full fixed top-0 left-0 right-0 z-50">
            <Menubar :model="itemsMenubar"
                :pt="{
                    root: { class: 'bg-gray-900 shadow-lg p-2 text-white' },
                    item: ({ context }) => ({
                        class: [
                        'relative mx-1 my-0 bg-gray-900',
                        context.active ? 'bg-gray-700' : 'hover:bg-gray-800'
                        ]
                    }),
                }"
            >
            </Menubar>
        </div>

        <div class="h-[56px]"></div>

        <div class="flex-grow pt-4 px-4">
            <div class="w-full max-w-7xl mx-auto">
                    <div class="font-bold text-center">
                        <h1 class="text-[6rem] font-bold text-gray-800">ICONS</h1>
                    </div>
                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mr-16 ml-16">
                <!-- Icons Actions -->
                <Panel id="actions" :header="iconCategories.actions.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.actions" 
                            type="text" 
                            placeholder="Buscar iconos de actions"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.actions.length === 0 && searchTerms.actions" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.actions }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.actions" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Activities -->
                <Panel id="activities" :header="iconCategories.activities.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.activities" 
                            type="text" 
                            placeholder="Buscar iconos de activities"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.activities.length === 0 && searchTerms.activities" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.activities }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.activities" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Analytics -->
                <Panel id="analytics" :header="iconCategories.analytics.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.analytics" 
                            type="text" 
                            placeholder="Buscar iconos de analytics"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.analytics.length === 0 && searchTerms.analytics" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.analytics }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.analytics" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Audio -->
                <Panel id="audio" :header="iconCategories.audio.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.audio" 
                            type="text" 
                            placeholder="Buscar iconos de audio"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.audio.length === 0 && searchTerms.audio" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.audio }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.audio" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Buildings -->
                <Panel id="buildings" :header="iconCategories.buildings.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.buildings" 
                            type="text" 
                            placeholder="Buscar iconos de buildings"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.buildings.length === 0 && searchTerms.buildings" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.buildings }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.buildings" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Clothing -->
                <Panel id="clothing" :header="iconCategories.clothing.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.clothing" 
                            type="text" 
                            placeholder="Buscar iconos de clothing"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.clothing.length === 0 && searchTerms.clothing" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.clothing }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.clothing" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Cloud -->
                <Panel id="cloud" :header="iconCategories.cloud.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.cloud" 
                            type="text" 
                            placeholder="Buscar iconos de cloud"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.cloud.length === 0 && searchTerms.cloud" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.cloud }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.cloud" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Communication -->
                <Panel id="communication" :header="iconCategories.communication.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.communication" 
                            type="text" 
                            placeholder="Buscar iconos de communication"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.communication.length === 0 && searchTerms.communication" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.communication }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.communication" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Connectivity -->
                <Panel id="connectivity" :header="iconCategories.connectivity.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.connectivity" 
                            type="text" 
                            placeholder="Buscar iconos de connectivity"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.connectivity.length === 0 && searchTerms.connectivity" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.connectivity }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.connectivity" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Development -->
                <Panel id="development" :header="iconCategories.development.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.development" 
                            type="text" 
                            placeholder="Buscar iconos de development"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.development.length === 0 && searchTerms.development" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.development }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.development" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Devices -->
                <Panel id="devices" :header="iconCategories.devices.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.devices" 
                            type="text" 
                            placeholder="Buscar iconos de devices"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.devices.length === 0 && searchTerms.devices" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.devices }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.devices" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Docs -->
                <Panel id="docs" :header="iconCategories.docs.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.docs" 
                            type="text" 
                            placeholder="Buscar iconos de docs"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.docs.length === 0 && searchTerms.docs" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.docs }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.docs" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Editor -->
                <Panel id="editor" :header="iconCategories.editor.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.editor" 
                            type="text" 
                            placeholder="Buscar iconos de editor"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.editor.length === 0 && searchTerms.editor" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.editor }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.editor" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Emojis -->
                <Panel id="emojis" :header="iconCategories.emojis.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.emojis" 
                            type="text" 
                            placeholder="Buscar iconos de emojis"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.emojis.length === 0 && searchTerms.emojis" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.emojis }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.emojis" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Finance -->
                <Panel id="finance" :header="iconCategories.finance.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.finance" 
                            type="text" 
                            placeholder="Buscar iconos de finance"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.finance.length === 0 && searchTerms.finance" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.finance }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.finance" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Food -->
                <Panel id="food" :header="iconCategories.food.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.food" 
                            type="text" 
                            placeholder="Buscar iconos de food"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.food.length === 0 && searchTerms.food" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.food }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.food" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Gaming -->
                <Panel id="gaming" :header="iconCategories.gaming.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.gaming" 
                            type="text" 
                            placeholder="Buscar iconos de gaming"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.gaming.length === 0 && searchTerms.gaming" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.gaming }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.gaming" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Gestures -->
                <Panel id="gestures" :header="iconCategories.gestures.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.gestures" 
                            type="text" 
                            placeholder="Buscar iconos de gestures"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.gestures.length === 0 && searchTerms.gestures" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.gestures }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.gestures" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Health -->
                <Panel id="health" :header="iconCategories.health.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.health" 
                            type="text" 
                            placeholder="Buscar iconos de health"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.health.length === 0 && searchTerms.health" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.health }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.health" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Home -->
                <Panel id="home" :header="iconCategories.home.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.home" 
                            type="text" 
                            placeholder="Buscar iconos de home"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.home.length === 0 && searchTerms.home" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.home }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.home" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Identity -->
                <Panel id="identity" :header="iconCategories.identity.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.identity" 
                            type="text" 
                            placeholder="Buscar iconos de identity"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.identity.length === 0 && searchTerms.identity" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.identity }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.identity" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Maps -->
                <Panel id="maps" :header="iconCategories.maps.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.maps" 
                            type="text" 
                            placeholder="Buscar iconos de maps"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.maps.length === 0 && searchTerms.maps" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.maps }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.maps" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Music -->
                <Panel id="music" :header="iconCategories.music.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.music" 
                            type="text" 
                            placeholder="Buscar iconos de music"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.music.length === 0 && searchTerms.music" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.music }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.music" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Nature -->
                <Panel id="nature" :header="iconCategories.nature.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.nature" 
                            type="text" 
                            placeholder="Buscar iconos de nature"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.nature.length === 0 && searchTerms.nature" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.nature }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.nature" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                  <div class="flex flex-col gap-3 items-center justify-center">
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-green-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                  </div>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Navegation -->
                <Panel id="navigate" :header="iconCategories.navigate.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.navigate" 
                            type="text" 
                            placeholder="Buscar iconos de navigation"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.navigate.length === 0 && searchTerms.navigate" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.navigate }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.navigate" 
                                    :key="'nav-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`"  class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- Icons Organization -->
                <Panel id="organization" :header="iconCategories.organization.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="organization"
                            v-model="searchTerms.organization" 
                            type="text" 
                            placeholder="Buscar iconos de organization"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.organization.length === 0 && searchTerms.organization" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.organization }}"
                    </div>
                    <XScrollPanel class="h-[200px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.organization" 
                                    :key="'oth-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <!-- Icons Other -->
                <Panel id="other" :header="iconCategories.other.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.other" 
                            type="text" 
                            placeholder="Buscar iconos de other"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.other.length === 0 && searchTerms.other" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.other }}"
                    </div>
                    <XScrollPanel class="h-[200px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.other" 
                                    :key="'org-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- Icons Photos and Videos -->
                <Panel id="photosVideos" :header="iconCategories.photosVideos.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.photosVideos" 
                            type="text" 
                            placeholder="Buscar iconos de phothos and videos"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.photosVideos.length === 0 && searchTerms.photosVideos" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.photosVideos }}"
                    </div>
                    <XScrollPanel class="h-[200px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.photosVideos" 
                                    :key="'pho-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- Icons Security -->
                <Panel id="security" :header="iconCategories.security.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.security" 
                            type="text" 
                            placeholder="Buscar iconos de security"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.security.length === 0 && searchTerms.security" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.security }}"
                    </div>
                    <XScrollPanel class="h-[200px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.security" 
                                    :key="'sec-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- Icons Shopping -->
                <Panel id="shopping" :header="iconCategories.shopping.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.shopping" 
                            type="text" 
                            placeholder="Buscar iconos de shopping"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.shopping.length === 0 && searchTerms.shopping" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.shopping }}"
                    </div>
                    <XScrollPanel class="h-[100px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.shopping" 
                                    :key="'sec-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- Icons Science -->
                <Panel id="science" :header="iconCategories.science.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.science" 
                            type="text" 
                            placeholder="Buscar iconos de science"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.science.length === 0 && searchTerms.science" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.science }}"
                    </div>
                    <XScrollPanel class="h-[100px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.science" 
                                    :key="'sec-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- Icons Security -->
                <Panel id="system" :header="iconCategories.system.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.system" 
                            type="text" 
                            placeholder="Buscar iconos de system"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.system.length === 0 && searchTerms.system" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.system }}"
                    </div>
                    <XScrollPanel class="h-[200px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.system" 
                                    :key="'sec-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- Icons Transport -->
                <Panel id="transport" :header="iconCategories.transport.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.transport" 
                            type="text" 
                            placeholder="Buscar iconos de transport"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.transport.length === 0 && searchTerms.transport" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.transport }}"
                    </div>
                    <XScrollPanel class="h-[200px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.transport" 
                                    :key="'tran-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- Icons Users -->
                <Panel id="users" :header="iconCategories.users.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.users" 
                            type="text" 
                            placeholder="Buscar iconos de users"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.users.length === 0 && searchTerms.users" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.users }}"
                    </div>
                    <XScrollPanel class="h-[200px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.users" 
                                    :key="'tran-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- Icons Weather -->
                <Panel id="weather" :header="iconCategories.weather.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.weather" 
                            type="text" 
                            placeholder="Buscar iconos de weather"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.weather.length === 0 && searchTerms.weather" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.weather }}"
                    </div>
                    <XScrollPanel class="h-[150px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.weather" 
                                    :key="'tran-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- Icons BNB -->
                <Panel id="bnb" :header="iconCategories.bnb.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.bnb" 
                            type="text" 
                            placeholder="Buscar iconos de BNB"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.bnb.length === 0 && searchTerms.bnb" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.bnb }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.bnb" 
                                    :key="'bnb-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- Icons Tarjetas BNB -->
                <Panel id="bnbTarjetas" :header="iconCategories.bnbTarjetas.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.bnbTarjetas" 
                            type="text" 
                            placeholder="Buscar iconos de tarjetas BNB"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.bnbTarjetas.length === 0 && searchTerms.bnbTarjetas" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.bnbTarjetas }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.bnbTarjetas" 
                                    :key="'bnb-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- BNB Icons without Background -->
                <Panel id="bnbwithoutBb" :header="iconCategories.bnbwithoutBb.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="bnbwithoutBb"
                            v-model="searchTerms.bnbwithoutBb" 
                            type="text" 
                            placeholder="Buscar iconos de BNB without background"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.bnbwithoutBb.length === 0 && searchTerms.bnbwithoutBb" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.bnbwithoutBb }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.bnbwithoutBb" 
                                    :key="'bnb-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- BNB Empresas -->
                <Panel id="bnbEmpresa" :header="iconCategories.bnbEmpresa.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.bnbEmpresa" 
                            type="text" 
                            placeholder="Buscar iconos de BNB empresas"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.bnbEmpresa.length === 0 && searchTerms.bnbEmpresa" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.bnbEmpresa }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.bnbEmpresa" 
                                    :key="'bnb-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- BNB Bancos -->
                <Panel id="bnbBancos" :header="iconCategories.bnbBancos.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.bnbBancos" 
                            type="text" 
                            placeholder="Buscar iconos de BNB bancos"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.bnbBancos.length === 0 && searchTerms.bnbBancos" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.bnbBancos }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.bnbBancos" 
                                    :key="'bnb-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- BNB Social -->
                <Panel id="bnbSocial" :header="iconCategories.bnbSocial.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.bnbSocial" 
                            type="text" 
                            placeholder="Buscar iconos de BNB social"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.bnbSocial.length === 0 && searchTerms.bnbSocial" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.bnbSocial }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.bnbSocial" 
                                    :key="'bnb-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- BNB Imagenes -->
                <Panel id="bnbImagenes" :header="iconCategories.bnbImagenes.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.bnbImagenes" 
                            type="text" 
                            placeholder="Buscar iconos de BNB imagenes"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.bnbImagenes.length === 0 && searchTerms.bnbImagenes" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.bnbImagenes }}"
                    </div>
                    <XScrollPanel class="h-[150px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.bnbImagenes" 
                                    :key="'bnb-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- BNB SubMarcas -->
                <Panel id="bnbSubmarcas" :header="iconCategories.bnbSubmarcas.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.bnbSubmarcas" 
                            type="text" 
                            placeholder="Buscar iconos de BNB sub marcas"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.bnbSubmarcas.length === 0 && searchTerms.bnbSubmarcas" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.bnbSubmarcas }}"
                    </div>
                    <XScrollPanel class="h-[150px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.bnbSubmarcas" 
                                    :key="'bnb-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- Otros -->
                <Panel id="otros" :header="iconCategories.otros.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="other"
                            v-model="searchTerms.otros" 
                            type="text" 
                            placeholder="Buscar iconos de otros"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.otros.length === 0 && searchTerms.otros" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.otros }}"
                    </div>
                    <XScrollPanel class="h-[150px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.otros" 
                                    :key="'bnb-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <!-- BNB Icons with Background -->
                <Panel id="bnbwithBg" :header="iconCategories.bnbwithBg.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="bnbwithBg"
                            v-model="searchTerms.bnbwithBg" 
                            type="text" 
                            placeholder="Buscar iconos de BNB with background"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.bnbwithBg.length === 0 && searchTerms.bnbwithBg" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.bnbwithBg }}"
                    </div>
                    <XScrollPanel class="h-[250px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.bnbwithBg" 
                                    :key="'bnb-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>

                <Panel id="textEditor" :header="iconCategories.textEditor.name" :pt="{
                    root: { class: 'shadow-xl border-none' },
                    header: { class: 'bg-gray-800 text-white' },
                    content: { class: 'mt-4' }
                }">
                    <div class="relative mb-8">
                        <XInputText
                            name="bnbwithBg"
                            v-model="searchTerms.textEditor" 
                            type="text" 
                            placeholder="Buscar iconos de BNB with background"
                            class="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div v-if="filteredIcons.textEditor.length === 0 && searchTerms.textEditor" class="text-center py-12 text-gray-500">
                        No se encontraron iconos para "{{ searchTerms.textEditor }}"
                    </div>
                    <XScrollPanel class="h-[200px]">
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                <div 
                                    v-for="icon in filteredIcons.textEditor" 
                                    :key="'bnb-'+icon"
                                    class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                                    @click="copyIconName(icon)"
                                >
                                    <Icon :name="`x:${ icon }`" class="w-8 h-8 text-red-400" />
                                    <span class="text-xs text-center text-gray-600">{{ icon }}</span>
                                </div>
                            </div>
                    </XScrollPanel>
                </Panel>
                <Toast />
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';
const router = useRouter();
const toast = useToast();

// 1. Definimos nuestros iconos por categorías
const iconCategories = {
    actions: {
        name: "Actions",
        icons: [ 
            'download','download-square','share-ios','share-android','menu','undo', 'redo', 'warning-triangle', 'warning-circle', 'info-empty',
            'plus','minus', 'cancel', 'cancel-circle', 'check', 'check-circle', 'refresh-double', 'refresh', 'upload', 'upload-square',
            'prohibition', 'help', 'help-circle', 'double-check', 'open-in-window', 'eye-empty', 'eye-off', 'trash', 'paste-clipboard', 'clean',
            'tools', 'erase', 'home', 'all-elements', 'change', 'think-plus', 'think-minus', 'think-cancel', 'think-check'
        ],
    },
    activities: {
        name: "Activities",
        icons: [
            'target', 'leaderboard', 'leaderboard-star', '1st-medal', 'medal', 'trophy', 'open-book', 'book', 'bookmark-book', 'birthday-cake',
            'running', 'basketball-field', 'ball', 'dumbbell', 'maracas', 'microphone', 'ticket', 'shower', 'turism'
        ],
    },
    analytics: {
        name: "Analytics",
        icons: [
            'percentage', 'percentage-square', 'reports', 'stats-up', 'stats-down', 'graph-up', 'graph-down', 'presentation'
        ],
    },
    audio: {
        name: "Audio",
        icons: [
            'mic', 'mic-mute', 'sound-off', 'sound-low', 'sound-high'
        ],
    },
    buildings: {
        name: "Buildings",
        icons: [
            'hospital', 'small-shop-alt', 'building', 'building-bigger', 'industry', 'farm', 'neighbourhood', 'planimetry', 'home-shop', 'other-shops'
        ],
    },
    clothing: {
        name: "Clothing",
        icons: [
            'glasses', 'large-suitcase', 'handbag', 'umbrella', 'mirror', 't-shirt', 'chef-hat', 'heel', 'luggage'
        ],
    },
    cloud: {
        name: "Cloud",
        icons: [
            'cloud', 'cloud-upload', 'cloud-download', 'cloud-error', 'cloud-check'
        ],
    },
    communication: {
        name: "Communication",
        icons: [
            'message-chat', 'message-text', 'message-error', 'message-check', 'message-alert', 'message-question', 'phone', 'phone-outcome', 'phone-income', 'phone-disabled',
            'bubble-text', 'bubble-chat', 'bubble-error', 'bubble-check', 'bubble-warning', 'bubble-question', 'bubble', 'message', 'mail-opened', 'mail',
            'bell', 'bell-off', 'headset-help', 'facetime', 'globe', 'internet', 'send-diagonal', 'at-sign'
        ],
    },
    connectivity: {
        name: "Connectivity",
        icons: [
            'wifi', 'wifi-off', 'bluetooth', 'network-alt', 'antenna'
        ],
    },
    development: {
        name: "Development",
        icons: [
            'dev-mode-phone', 'dev-mode-laptop', 'developer', 'code', 'database'
        ],
    },
    devices: {
        name: "Devices",
        icons: [
            'printing-page', 'smartphone', 'modern-tv', 'computer', 'laptop', 'wristwatch', 'vr-symbol', 'ar-symbol', 'save' 
        ],
    },
    docs: {
        name: "Docs",
        icons: [
            'page', 'attachment', 'archive', 'folder', 'page-edit', 'privacy-policy', 'file-search', 'file-heck', 'file-see', 'file-r',
            'file-pagination', 'signature', 'file-personalized-campaign', 'file-upload-campaign'
        ],
    },
    editor: {
        name: "Editor",
        icons: [
            'scissor', 'edit-pencil'
        ],
    },
    emojis: {
        name: "Emojis",
        icons: [
            'emoji-ball', 'emoji-sad', 'emoji-quite', 'emoji-happy', 'emoji-satisfaid', 'emoji-ball-fill', 'emoji-sad-fill', 'emoji-quite-fill', 'emoji-happy-fill', 'emoji-satisfied-fill'
        ],
    },
    finance: {
        name: "Finance",
        icons: [
            'coin-dollar', 'coin-bs', 'cash-dollar', 'cash-bs', 'lot-of-cash-dollar', 'lot-of-cash-bs', 'credit-card', 'credit-cards', 'card-security', 'card-issue',
            'card-locked', 'bank', 'piggy-bank', 'empty-wallet', 'wallet', 'lot-of-coins-dollar', 'lot-of-coins-bs', 'avance-efectivo', 'transfer-canceled', 'check'
        ],
    },
    food: {
        name: "Food",
        icons: [
            'coffee', 'drink', 'ice-cream', 'pizza', 'apple', 'popcorn', 'products-restaurante', 'eating-cutlery-2', 'food'
        ],
    },
    gaming: {
        name: "Gaming",
        icons: [
            'bright-star', 'bright-crown', 'crown', 'gamepad', 'king-chess', 'queen-chess', 'castle-chess', 'bishop-chess', 'knight-chess', 'pawn-chess' 
        ],
    },
    gestures: {
        name: "Gestures",
        icons: [
            'good-hand', 'bad-hand', 'rights-hand', 'rock-hand', 'peace-hand', 'give-hand-1', 'give-hand-2', 'touch-hand-1', 'touch-hand-2', 'deal'
        ],
    },
    health: {
        name: "Health",
        icons: [
            'heart', 'female', 'male', 'non-binary', 'pharmacy', 'healthcare', 'donate', 'medicine', 'baby-carriage', 'health'
        ],
    },
    home: {
        name: "Home",
        icons: [
            'empty-box', 'box', 'house', 'light-bulb', 'sleeper-chair', 'bed'
        ],
    },
    identity: {
        name: "Identity",
        icons: [
            'face-id', 'fingerprint', 'scanning', 'user-scan'
        ],
    },
    maps: {
        name: "Editor",
        icons: [
            'maps-arrow', 'maps-arrow-diagonal', 'navigator', 'navigator-alt', 'location', 'map', 'gps', '2x', 'advance-15-seconds', 'go-back-15-seconds'
        ],
    },
    music: {
        name: "Music",
        icons: [
            'music-note', 'headset', 'play', 'forward', 'pause', 'skip-prev', 'skip-next', 'rewind'
        ],
    },
    nature: {
        name: "Nature",
        icons: [
            'pine-tree', 'tree', 'plant', 'flower', 'drop', 'leaf'
        ],
    },
    navigate: {
        name: "Navigation",
        icons: [ 
            'arrow-left','arrow-right','arrow-up', 'arrow-down', 'arrow-tr', 'arrow-tl','arrow-br','arrow-bl', 'arrow-left-circle', 'arrow-right-circle',
            'arrow-up-circle','arrow-down-circle','arrow-tr-circle', 'arrow-tl-circle', 'arrow-br-circle','arrow-bl-circle','nav-arrow-left', 'nav-arrow-right','nav-arrow-up','nav-arrow-down',
            'page-left','page-right','page-up','page-down','more-horiz','more-horiz-circle','more-vert','more-vert-circle','drag','filter-list',
            'filter-list-circle','arrow-fall','arrow-rise','caret-up-stroke','caret-down-stroke','caret-up-fill','caret-down','thik-nav-arrow-up','thik-nav-arrow-down','thik-nav-arrow-right',
            'thik-nav-arrow-left','thick-nav-double-arrow-left','thin-nav-double-arrow-left','thick-nav-double-arrow-right','thin-nav-double-arrow-right','sort','filter',
        ],
    },
    organization:{
        name: "Organization",
        icons: [
            'star','star-fill','label','bookmark-empty', 'star-dashed', 'star-half-dashed','search','zoom-in','zoom-out','pin','remove-pin'
        ],
    },
    other: {
        name: "Other",
        icons:[
            'translate', 'timer', 'timer-off','clock','alarm','language','activity','triangle-flag','page-flip','link',
            'note','celebration','gift','qr-code','scan-qr-code-1','scan-qr-code-2'
        ]
    },
    photosVideos: {
        name: "Photos and Videos",
        icons:[
            'video-camera', 'video-camera-off', 'camera','rotate-camera-right','rotate-camera-left','expand','collapse','media-image','media-image-list','media-video',
            'media-video-list','flash','clapperboard'
        ]
    },
    security:{
        name: "Security",
        icons:[
            'shield', 'shield-alert', 'shield-error','key-alt','lock','no-lock','ip-address','vpn-adress','shield-check'
        ]
    },
    shopping:{
        name: "Shopping",
        icons:[
            'cart', 'shopping-bag', 'offer'
        ]
    },
    science:{
        name: "Science",
        icons:[
            'rocket', 'graduation-cap', 'brain', 'planet-alt','infinite','half-moon', 'atom', 'molecule',
        ]
    },
    system:{
        name: "System",
        icons:[
            'setting', 'cursor-pointer', 'calculator', 'calendar-1','calendar-2','log-out', 'log-in', 'on-tag',
            'off-tag','lock-key','system-restart','cookie','app-window'
        ]
    },
    transport:{
        name: "Transport",
        icons:[
            'car', 'airplane', 'airplane-off', 'bus','bicycle','cableway', 'motorcycle', 'motorcycle-delivery','wheel','gasoline',
            'truck','delivery-truck','ev-plug','ev-charge'
        ]
    },
    users:{
        name: "Users",
        icons:[
            'user', 'add-user', 'remove-user', 'profile-circle','group','user-love', 'user-star', 'verified-user','verified-user','community','user-transfer',
            'parent-and-child','man','woman','kid','user-setting'
        ]
    },
    weather:{
        name: "Weather",
        icons:[
            'winter', 'rain', 'thunderstorm', 'sun','wind'
        ]
    },
    bnb:{
        name: "BNB",
        icons:[
            'prefered', 'pulsable', 'tapable', 'face','change-dollar','change-bs','change-global','sound-alert-phone','grow-dollar','grow-bs',
            'grow-dollar-plus','grow-bs-plus','bag-dollar','bag-bs','coins-dollar','coins-bs','atm-dollar','atm-bs','check-dollar','check-bs',
            'check-page','papers-dollar','papers-bs','newspaper','vault','door','input-money','output-money','cross','flag',
            'touchable','donation','menu-app','transfer','atm','desmaterializacion','aplicar-gravamen','levantar-gravamen','fusionar','fusionar-2',
            'reposicion','cashback','pos','tranfer-dollar','transfer-bs','seguro-desempleo','pay','pay-bs','classifiy','bitcoin',
            'to-process','doc-desmaterializado','doc-fisico','comp-accionistas'
        ]
    },
    bnbTarjetas:{
        name: "BNB Tarjetas",
        icons:[
            'caja-de-ahorro-bs', 'safi', 'dpf', 'tarjeta-credito','vivienda','auto','consumo','cuenta-corriente','en-accion','futuro-asegurado',
            'portafolio','oportuno','efectivo','opcion','icon-1','caja-de-ahorro-usd','presto','adelanto-de-sueldo','credito'
        ]
    },
    bnbwithoutBb:{
        name: "BNB Icons without Background",
        icons:[
            'bnb-transferencias', 'bnb-consultas', 'bnb-autorizaciones', 'bnb-servicios', 'bnb-mis-debitos', 'bnb-video-banca', 'bnb-transf-exterior', 'bnb-agregar', 'bnb-seguimiento-credito',
            'bnb-solicitar-dpf','bnb-remesas','bnb-retiro','bnb-pago-tc','bnb-pago','bnb-movimientos-tarjeta','bnb-movimientos-qr','bnb-mis-servicios','bnb-liimite-de-gastos','bnb-facturas','bnb-vehiculo','bnb-casa','bnb-consumo','bnb-config-qr','bnb-compras-por-internet',
            'bnb-bloqueo-temporal','bnb-billetera','bnb-avion','bnb-apertura-de-cuenta','bnb-exterior','bnb-extractos','bnb-seguro','bnb-conf-de-equipo','bnb-puntos-de-atencion','bnb-notififaciones','bnb-token-digital','bnb-informacion',
            'bnb-fingerprint','bnb-llamadas','bnb-consulta','bnb-cerrar-sesion','bnb-guardados','bnb-adm-cuenta','bnb-face-id','bnb-bienes-adjudicados','bnb-token','token','bnb-pago','bnb-boleta',
            'bnb-persona-natural','bnb-persona-juridica','bnb-seguro-cesantia','bnb-seguro-telemedicina','bnb-pagar-qr','bnb-cobro-qr','bnb-mis-debitos','bnb-seguimiento-qr','bnb-tarjeta-de-credito','paga-con-qr','bnb-cobro-con-qr',
            'registrar-abonado','abonados-registrados','cuentas-propias','modificar-cuenta','bnb-cashback','ampliacion-de-limite','bnb-rescate-de-cuotas','pago-cuotas','poliza','market'
        ]
    },
    bnbEmpresa:{
        name: "BNB Empresas",
        icons:[
            'bnb', 'tigo', 'entel', 'golochtel', 'cotas', 'comteco', 'tigo-hogar', 'ende-beni', 'ende-oruro', 'elfec', 'delapaz', 
            'bnb-viva', 'banco-alimentos', 'sepsa','cre','finup', 'logo-innovation', 'padelbo', 'work-flow', 'bnb-core','bolivianos-que-ayudan', 'world-vision-black', 'world-vision-white',
            'unilink', 'accl', 'suzuki'
        ]
    },
    bnbBancos:{
        name: "BNB Bancos",
        icons:[
            'banco-sol','banco-union',  'banco-mercantil-sc', 'banco-ganadero', 'banco-prodem', 'banco-economico', 'banco-ecofuturo','banco-bcp', 'banco-fortaleza',
            'banco-central-de-bolivia', 
        ]
    },
    bnbSocial:{
        name: "BNB Social media",
        icons:[
            'linkedin-square', 'instagram-square', 'youtube-square', 'facebook-square', 'x-square', 'whatsapp-square', 'linkedin-circle', 'instagram-circle', 'youtube-circle', 'facebook-circle',
            'x-circle','whatsapp-circle','youtube'
        ]    
    },
    bnbImagenes:{
        name: "BNB Imagenes",
        icons:[
            'qr-simple', 'qr'
        ]    
    },
    bnbSubmarcas:{
        name: "BNB sub marcas",
        icons:[
            'banca-joven', 'banca-joven-logo-bnb','primary-bille-logo-positive', 'primary-bille-logo-negative'
        ]    
    },
    otros:{
        name: "Otros",
        icons:[
            'excel', 'excel-1','pdf', 'pdf-1'
        ]    
    },
    bnbwithBg:{
        name: "BNB Icons with Background",
        icons:[
            'bnb-billetera-sus-bg', 'bnb-billetera-bs-bg','bnb-billetera-sus-bg','bnb-pago-bs-bg','bnb-transferencias-bg','cashback-bg','bnb-servicios-bg','bnb-extractos-bg','bnb-mis-debitos-bg','bnb-compras-por-internet-bg','bnb-compras-por-internet-bs-bg','bnb-avion-bg','bnb-cobro-qr-bg',
            'bnb-facturas-bg','bnb-rescate-de-cuotas-bs-bg'
        ]    
    },
    textEditor:{
        name: "Text Editor",
        icons:[
            'bold', 'italic','underline', 'align-left', 'align-right', 'align-center', 'align-just', 'bullet-list', 'number-list', 'text-color', 'text-highlight'
        ]    
    }
};

const searchTerms = ref(
    Object.keys(iconCategories).reduce((acc, category) =>{
        acc[category] = '';
        return acc;
    }, {})
);

// Función genérica para filtrar iconos de una categoría
const filterIconsByCategory = (category) => {
    if (!searchTerms.value[category]) return iconCategories[category].icons;
    
    return iconCategories[category].icons.filter(icon => 
        icon.toLowerCase().includes(searchTerms.value[category].toLowerCase())
    );
};

// Computed para cada categoría filtrada
const filteredIcons = computed(() => {
    const result = {};
    for(const category in iconCategories){
        result[category] = filterIconsByCategory(category);
    }
    return result;
});

// Función para copiar el nombre del icono
const copyIconName = async (iconName) => {
    try {
        await navigator.clipboard.writeText(iconName);
        toast.add({ 
            severity: 'success', 
            summary: 'Copiado', 
            detail: `Nombre del icono "${iconName}" copiado al portapapeles`, 
            life: 3000 
        });
    } catch (err) {
        console.error('Error al copiar:', err);
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se pudo copiar el nombre del icono',
            life: 3000
        });
    }
};

// Items para el menubar
const itemsMenubar = ref([
    {
        label: 'Components',
        icon: 'pi pi-link',
        command: () => {
            router.push('/');
        }
    },
])
</script>
