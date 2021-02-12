<template>
  <v-card class="mx-auto d-flex">
    <div class="col-6">
        <v-card-title>{{`${item.firm.form.value} ${item.firm.name.value}`}}</v-card-title>

        <v-card-text>
            <div class="d-flex flex-column">
        
                <div class="pb-3">
                    <span>Номер договора {{item.contract.number.value}}</span>

                    <a class="ml-5" :href="item.contract.url.value">Открыть в Sharepoint</a>
                </div>

                <div class="pb-3">
                    <span>Номер ТЗ {{item.tz.number.value}}</span>

                    <a class="ml-5" :href="item.contract.url.value">Открыть в Sharepoint</a>
                </div>

                <v-divider class="mx-4"></v-divider>

                <div class="d-flex flex-column py-3">
                    <span>
                        <strong>Руководитель проекта: </strong>
                        {{item.person.coordinator.surname.value}}
                    </span>

                    <span><strong>Координатор проекта со стороны КЛААС: </strong>{{item.person.representative.surname.value}}</span>
                    <span><strong>Представитель подрядной организации: </strong>{{item.person.contractor.surname.value}}</span>
                </div>

                <v-divider class="mx-4"></v-divider>

                <h3 class="mt-4">Место провердения работ</h3>
                <p class="mb-0 mt-1">{{ item.work.place.value }}</p>

                <h3 class="mt-4">Описание работ</h3>
                <p class="mb-0 mt-1">{{ item.work.description.value }}</p>

            </div>
        </v-card-text>

        <v-card-actions>
            <v-btn outlined color="green darken-2">Согласовать</v-btn>
            <v-btn class="ml-5" outlined color="red darken-2">Отклонить</v-btn>
        </v-card-actions>
    </div>

    <div class="col-6">
        <v-img
            class="mx-auto"
            src="@/assets/map.jpg"
        ></v-img>
    </div>
    
  </v-card>
</template>

<script>
  export default {
    data: () => ({
        item: {
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
                description: {label: "Описание работ", name: "work-description", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"},
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
    }),
  }
</script>