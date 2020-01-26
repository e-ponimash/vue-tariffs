<template>
    <div class="groups">
        <div v-for="(group, index) in groups" class="item">
            <div class = "title">Тариф "{{group.title}}"</div>
            <div class = "tarif">
                <div class="row">
                    <div><p class="speed">{{group.speed}} Мбит/c </p></div>
                    <div class="price">{{getMinPrice(index)}} - {{getMaxPrice(index)}}Р/мес</div>
                    <div>
                        <p v-for="option in group.free_options">
                            {{option}}
                        </p>
                    </div>
                </div>
                <!--<div class="row" @click="chooseGroup(index)">
                    >>
                </div>-->
            </div>
            <div class="link"><a :href="group.link">узнать подробней на сайте www.skynet.ru</a></div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "groups",
        data() {
            return {
                groups: Array,// id тарифа
            }
        },
        computed: {
            now: function () {
                let date = new Date();
                let now_str = ('0' + (date.getMonth() + 1)).slice(-2) + '.' + ('0' + date.getDate()).slice(-2) +'.'+date.getFullYear();
                return now_str;
            },
            ...mapState('groups', {
                groups_tarifs: 'groups_tarifs'
            }),
            ...mapGetters('groups', ['getMinPrice', 'getMaxPrice', 'getTarifsByGroup']),
        },
        methods: {
            chooseGroup: function(index) {
                this.$emit('chooseGroup', {"groupId":index});
            }
        },
        created(){
            this.groups = this.groups_tarifs;
            console.log("this.groups",this.groups);
        }
    }
</script>

<style scoped>
    .groups{
        font-family: Arial;
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
        color: grey;
    }
    a, a:visited, a:hover {
        text-decoration: none;
        font-family: inherit;
        color: dodgerblue;
    }
   /* @media (min-width: 320px) {*/
        .item {
            background: white;
            width: 100%;
            margin-bottom: 20px;
            border-bottom: 1px solid #abb0b2;
            border-top: 1px solid #abb0b2;
            padding-left: 20px;
        }
    .title {
        color: #6fb316;
        text-decoration: none;
        border-bottom: 1px solid #abb0b2;
        padding: 10px 0px 10px 0px;
        font-size: 1.2em;
        font-weight: bold;
    }

    .speed {
        color: white;
        text-decoration: none;
        background: black;
        padding: 5px 10px 5px 10px;
        display: inline-block;
        margin: 0 -10px;
        clear:both;
        font-weight: bold;
    }

    .row div{
        margin: 5px 0px 5px 0px;
    }
    p{
        margin: 0px;
    }


    /*}*/
    /*

    .item {
        background: white;
        width: 22%;
        margin: 2%;
        border: 1px #abb0b2;
        box-sizing: border-box;
        padding: 20px;
    }

    .row {
        display: inline-block;
    }
    .tarif{
        border-bottom: .0625rem solid #abb0b2;
        padding: 20px;
    }
    a {
        text-decoration: none;  Отменяем подчеркивание у ссылки
    }*/

    /*
        .title {
            color: #6fb316;
            border-bottom: 1px solid #abb0b2;
            padding: 10px;

        }

        .tarif{
            padding: 10px;
        }
        .link{
            border-top: 1px solid #abb0b2;
        }
        .price{
            padding: 10px;
        }
    }*/



</style>
