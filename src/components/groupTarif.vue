<template>
    <div id="groupTarif">
        <div>Тариф: {{groupTarif.title}}</div>
        <ul v-for="tarif in groupTarif.tarifs">
            <li>{{tarif.price/tarif.pay_period}} Р/м</li>
            <li>{{tarif.pay_period}} месяц</li>
            <li>Разовый платеж:{{tarif.price}} </li>
            <li v-if="tarif.pay_period != 1">Скидка: {{getSale(tarif.pay_period, tarif.price)}} P/Мес</li>
            <li><a @click="chooseTarif(tarif.ID)">выбрать Тариф</a></li>
            <li><br></li>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "groupTarif",
        props:['groupId'],

        data() {
            return {
                groupTarif: Object,// id тарифа
            }
        },
        computed: {
            ...mapState('groups', {
                groups_tarifs: 'groups_tarifs'
            }),
            ...mapGetters('groups', ['getMaxPrice']),
        },
        methods:{
            chooseTarif: function(tarifId){
                 this.$emit('chooseTarif', {"tarifId" : tarifId})
            },
            getSale(pay_period, price){
                return this.getMaxPrice(this.groupId)*pay_period-price
            }
        },
        mounted(){
            this.groupTarif = this.groups_tarifs[this.groupId];
            this.groupTarif.tarifs.sort(function(a, b){
                return a.pay_period-b.pay_period
            });
        }
    }
</script>

<style scoped>

</style>
