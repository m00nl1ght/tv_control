<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        Item
      </v-expansion-panel-header>
      <v-expansion-panel-content>
          <ActCard />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import ActCard from './ActCard'
export default {
    components: {
        ActCard
    },

    data: () => ({
        tableData: [
            {
                dates: [10-12-2020, 22-12-2020],

            contract: {
                number: {label: "Номер договора", name: "contract-number", value:"111"},
                url: {label: "Ссылка на договор", name: "contract-url", value:"ссылка на договор"}
            },

            tz: {
                number: {label: "Номер ТЗ", name: "tz-number", value:"222"},
                url: {label: "Ссылка на ТЗ", name: "tz-url", value:"Ссылка та техническое задание"}
            },

            firm: {
                form: {label: "Форма организации исполнителя", name: "firm-form", value:"ООО"},
                name: {label: "Название организации исполнителя", name: "firm-name", value:"Рога и копыта"}
            },

            work: {
                description: {label: "Описание работ", name: "work-description", value: ""},
                place: {label: "Место проведения работ", name: "work-place", value:"Склад сырья, пятый с краю"}
            },

            person: {
                coordinator: {
                    surname: {label: "Фамилия координатора проекта", name: "coordinator-surname", value:"Иванов"},
                    name: {label: "Имя координатора проекта", name: "coordinator-name", value:"Иван"},
                    patronymic: {label: "Отчество координатора проекта", name: "coordinator-patronymic", value:"Иванович"},
                    position: {label: "Должность координатора проекта", name: "coordinator-position", value:"Руководитерь проекта"},
                },

                representative: {
                    surname: {label: "Фамилия представителя КЛААС", name: "representative-surname", value:"Петров"},
                    name: {label: "Имя представителя КЛААС", name: "representative-name", value:"Петр"},
                    patronymic: {label: "Отчество представителя КЛААС", name: "representative-patronymic", value:"Петрович"},
                    position: {label: "Должность представителя КЛААС", name: "representative-position", value:"Представитель КЛААС"},
                },

                contractor: {
                    surname: {label: "Фамилия представителя подрядчика", name: "contractor-surname", value:"Сидоров"},
                    name: {label: "Имя представителя подрядчика", name: "contractor-name", value:"Сидор"},
                    patronymic: {label: "Отчество представителя подрядчика", name: "contractor-patronymic", value:"Сидорович"},
                    position: {label: "Должность представителя подрядчика", name: "contractor-position", value:"Представитель подрядчика"},
                }
            }

            },

            {
                dates: [],

                contract: {
                    number: {label: "Номер договора", name: "contract-number", value:""},
                    url: {label: "Ссылка на договор", name: "contract-url", value:""}
                },

                tz: {
                    number: {label: "Номер ТЗ", name: "tz-number", value:""},
                    url: {label: "Ссылка на ТЗ", name: "tz-url", value:""}
                },

                firm: {
                    form: {label: "Форма организации исполнителя", name: "firm-form", value:""},
                    name: {label: "Название организации исполнителя", name: "firm-name", value:""}
                },

                work: {
                    description: {label: "Описание работ", name: "work-description", value:""},
                    place: {label: "Место проведения работ", name: "work-place", value:""}
                },

                person: {
                    coordinator: {
                        surname: {label: "Фамилия координатора проекта", name: "coordinator-surname", value:""},
                        name: {label: "Имя координатора проекта", name: "coordinator-name", value:""},
                        patronymic: {label: "Отчество координатора проекта", name: "coordinator-patronymic", value:""},
                        position: {label: "Должность координатора проекта", name: "coordinator-position", value:""},
                    },

                    representative: {
                        surname: {label: "Фамилия представителя КЛААС", name: "representative-surname", value:""},
                        name: {label: "Имя представителя КЛААС", name: "representative-name", value:""},
                        patronymic: {label: "Отчество представителя КЛААС", name: "representative-patronymic", value:""},
                        position: {label: "Должность представителя КЛААС", name: "representative-position", value:""},
                    },

                    contractor: {
                        surname: {label: "Фамилия представителя подрядчика", name: "contractor-surname", value:""},
                        name: {label: "Имя представителя подрядчика", name: "contractor-name", value:""},
                        patronymic: {label: "Отчество представителя подрядчика", name: "contractor-patronymic", value:""},
                        position: {label: "Должность представителя подрядчика", name: "contractor-position", value:""},
                    }
                }

            }
        ]
    })
}
</script>