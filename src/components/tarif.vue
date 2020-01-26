<template>
    <div class="tarif">
        <div @click="chooseTarifs" class="title">Выбор тарифа</div>
        <div> Тариф: {{tarif.title}}</div>
        <div class="period">Период оплаты:{{tarif.pay_period}}</div>
        <div>Цена: {{get_priceInMonth(tarif.price, tarif.pay_period)}} P/Мес</div>
        <div>Разовый платеж: {{tarif.price}}P</div>
            <div>Со счета спишется: {{tarif.price}}P</div>
        <div>Активно до: {{now}}</div>
        <div @click="setTarif" class = "btn">Выбрать</div>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "tarif",
        props: ['tarifId'],
        data() {
            return {
                tarif: Object,// id тарифа
            }
        },
        computed: {
            ...mapGetters('groups', ['getTarifById']),
            now: function () {
                let date = new Date();
                let day = date.getDate();
                let month = date.getMonth();
                let year = date.getFullYear();
                if (day < 10) {
                    day = '0' + day;
                }
                if (month < 10) {
                    month = '0' + month;
                }

                return day + '-' + month + '-' + year;
            }
        },
        methods:{
            chooseTarifs(){
                this.$emit('chooseTarifs');
            },
            get_priceInMonth: function(price, pay_period) {
                return price/pay_period;
            },
            setTarif(){
                alert("Установить тариф");
            }
        },
        mounted(){
            this.tarif = this.getTarifById(this.tarifId);
        }
    }
</script>

<style scoped>
    .btn {
        z-index: 2;
        position: relative;
        display: inline-block;
        width: 9.75rem;
        background: #6fb316;
        text-align: center;
        float: right;
        height: 2.125rem;
    }


    .title {
        background: #abb0b2;
        padding: 20px;
        text-align: center;
    }
    .period{
        color: #6fb316;
    }

    .tarif {
        border: 1px;
        background: #efeff4;
        width: 100%;
        margin: 10%;
        border: 1px #abb0b2;
        box-sizing: border-box;
        padding: 20px;
    }
    .main{
        margin: 0 -1.5px;
    }
</style>
