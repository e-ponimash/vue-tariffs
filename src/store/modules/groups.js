import axios from 'axios'
const state = {
    groups_tarifs:[
        {
            "title": "Земля",
            "tarifs": [
                {
                    "ID": 2,
                    "title": "Земля (3 месяца)",
                    "price": 1350,
                    "price_add": 0,
                    "pay_period": "3",
                    "new_payday": "1452891600+0300",
                    "speed": 50
                },
                {
                    "ID": 1,
                    "title": "Земля",
                    "price": 480,
                    "price_add": 0,
                    "pay_period": "1",
                    "new_payday": "1450213200+0300",
                    "speed": 50
                },
                {
                    "ID": 3,
                    "title": "Земля (6 месяцев)",
                    "price": 2460,
                    "price_add": 0,
                    "pay_period": "6",
                    "new_payday": "1460754000+0300",
                    "speed": 50
                },
                {
                    "ID": 4,
                    "title": "Земля (12 месяцев)",
                    "price": 4200,
                    "price_add": 0,
                    "pay_period": "12",
                    "new_payday": "1476565200+0300",
                    "speed": 50
                }
            ],
            "link": "http://www.sknt.ru/tarifi_internet/in/1.htm",
            "speed": 50,
            "price_add": 0
        },
        {
            "title": "Вода",
            "tarifs": [
                {
                    "ID": 5,
                    "title": "Вода",
                    "price": 600,
                    "price_add": 0,
                    "pay_period": "1",
                    "new_payday": "1450213200+0300",
                    "speed": 100
                },
                {
                    "ID": 6,
                    "title": "Вода (3 месяца)",
                    "price": 1650,
                    "price_add": 0,
                    "pay_period": "3",
                    "new_payday": "1452891600+0300",
                    "speed": 100
                },
                {
                    "ID": 7,
                    "title": "Вода (6 месяцев)",
                    "price": 3060,
                    "price_add": 0,
                    "pay_period": "6",
                    "new_payday": "1460754000+0300",
                    "speed": 100
                },
                {
                    "ID": 8,
                    "title": "Вода (12 месяцев)",
                    "price": 5400,
                    "price_add": 0,
                    "pay_period": "12",
                    "new_payday": "1476565200+0300",
                    "speed": 100
                }
            ],
            "link": "http://www.sknt.ru/tarifi_internet/in/2.htm",
            "speed": 100,
            "price_add": 0,
            "free_options": [
                "ТВ пакет \"Социальный ТВ\"",
                "Антивирус Agnitum Outpost"
            ]
        },
        {
            "title": "Огонь",
            "tarifs": [
                {
                    "ID": 9,
                    "title": "Огонь",
                    "price": 800,
                    "price_add": 0,
                    "pay_period": "1",
                    "new_payday": "1450213200+0300",
                    "speed": 200
                },
                {
                    "ID": 10,
                    "title": "Огонь (3 месяца)",
                    "price": 2250,
                    "price_add": 0,
                    "pay_period": "3",
                    "new_payday": "1452891600+0300",
                    "speed": 200
                },
                {
                    "ID": 11,
                    "title": "Огонь (6 месяцев)",
                    "price": 4260,
                    "price_add": 0,
                    "pay_period": "6",
                    "new_payday": "1460754000+0300",
                    "speed": 200
                },
                {
                    "ID": 12,
                    "title": "Огонь (12 месяцев)",
                    "price": 7800,
                    "price_add": 0,
                    "pay_period": "12",
                    "new_payday": "1476565200+0300",
                    "speed": 200
                }
            ],
            "link": "http://www.sknt.ru/tarifi_internet/in/3.htm",
            "speed": 200,
            "price_add": 0,
            "free_options": [
                "ТВ пакет \"Социальный ТВ\"",
                "Антивирус Agnitum Outpost",
                "Доменное имя в зоне sknt.ru"
            ]
        },
        {
            "title": "Вода HD",
            "tarifs": [
                {
                    "ID": 13,
                    "title": "Вода HD",
                    "price": 800,
                    "price_add": 0,
                    "pay_period": "1",
                    "new_payday": "1450213200+0300",
                    "speed": 100
                },
                {
                    "ID": 14,
                    "title": "Вода HD (3 месяца)",
                    "price": 2250,
                    "price_add": 0,
                    "pay_period": "3",
                    "new_payday": "1452891600+0300",
                    "speed": 100
                },
                {
                    "ID": 15,
                    "title": "Вода HD (6 месяцев)",
                    "price": 4260,
                    "price_add": 0,
                    "pay_period": "6",
                    "new_payday": "1460754000+0300",
                    "speed": 100
                },
                {
                    "ID": 16,
                    "title": "Вода HD (12 месяцев)",
                    "price": 7800,
                    "price_add": 0,
                    "pay_period": "12",
                    "new_payday": "1476565200+0300",
                    "speed": 100
                }
            ],
            "link": "http://www.sknt.ru/sky-tv/in/2.htm",
            "speed": 100,
            "price_add": 0,
            "free_options": [
                "ТВ пакет \"ТВ\"",
                "Антивирус Agnitum Outpost",
                "Доменное имя в зоне sknt.ru"
            ]
        },
        {
            "title": "Огонь HD",
            "tarifs": [
                {
                    "ID": 17,
                    "title": "Огонь HD",
                    "price": 1000,
                    "price_add": 0,
                    "pay_period": "1",
                    "new_payday": "1450213200+0300",
                    "speed": 200
                },
                {
                    "ID": 18,
                    "title": "Огонь HD (3 месяца)",
                    "price": 2700,
                    "price_add": 0,
                    "pay_period": "3",
                    "new_payday": "1452891600+0300",
                    "speed": 200
                },
                {
                    "ID": 19,
                    "title": "Огонь HD (6 месяцев)",
                    "price": 5160,
                    "price_add": 0,
                    "pay_period": "6",
                    "new_payday": "1460754000+0300",
                    "speed": 200
                },
                {
                    "ID": 20,
                    "title": "Огонь HD (12 месяцев)",
                    "price": 9600,
                    "price_add": 0,
                    "pay_period": "12",
                    "new_payday": "1476565200+0300",
                    "speed": 200
                }
            ],
            "link": "http://www.sknt.ru/sky-tv/in/3.htm",
            "speed": 200,
            "price_add": 0,
            "free_options": [
                "ТВ пакет \"ТВ\"",
                "Антивирус Agnitum Outpost",
                "Доменное имя в зоне sknt.ru"
            ]
        }
    ],
    errors:[]
};

const getters = {
    getTarifsByGroup: (state) => (groupId) => {
        return state.groups_tarifs[groupId].tarifs
    },
    // вернуть тариф по ID
    getTarifById: (state) => (tarifId) => {
        return state.groups_tarifs[index].tarifs.find(tarif => tarif.id === tarifId)
    },
    //вернуть минимальную цену в группе тарифов
    getMinPrice: state => groupId => {
        return state.groups_tarifs[groupId].tarifs.reduce(function(a, b) {
            let b_priceInMouth = b.price/b.pay_period;
            if (!a){
                a = b_priceInMouth
            }
            return ( a < b_priceInMouth ? a : b_priceInMouth );
        }, 0);
    },
    //вернуть максимальную цену в группе тарифов
    getMaxPrice: (state) => (groupId) => {
        return state.groups_tarifs[groupId].tarifs.reduce(function(a, b) {
            let b_priceInMouth = b.price/b.pay_period;
            if (!a){
                a = b
            }
            return ( a > b_priceInMouth ? a : b_priceInMouth );
        }, 0)
    },
    getTarifById: (state) => (id) => {
        return state.groups_tarifs.reduce(function(accum, current){

            let tarif = current.tarifs.find(tarif => tarif.ID == id);

            if (typeof tarif == "object"){
                accum = tarif;
            }
            return accum;
        }, 0);

    },
    getGroups: state =>{
        return state.groups_tarifs;
    }
};

const mutations = {
    SET_FILES (state, tarif) {
        state.files = tarif;
    },
    SET_ERRORS(state, errors){
        state.errors = errors;
    }
};

const actions = {
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}