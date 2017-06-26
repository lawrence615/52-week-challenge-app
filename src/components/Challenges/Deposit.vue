<template>
    <el-row :gutter="20">
        <el-col :span="8" v-for="i in columCount">
            <table class="table table-striped table-bordered table-sm table-responsive">
                <thead>
                <tr>
                    <th bgcolor="#FF4949">Week</th>
                    <th bgcolor="#F7BA2A">Date</th>
                    <th bgcolor="#13CE66">Deposit</th>
                    <th bgcolor="fuchsia">Total</th>
                    <th bgcolor="#eeeeee"><i class="el-icon-check"></i></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="savings, index in savings_template.slice((i - 1) * 18, i * 18)">
                    <td style="font-size: small;">{{ savings.week_counter }}</td>
                    <td style="font-size: small;">{{ savings.start + ' - ' + savings.end }}</td>
                    <td style="font-size: small;">{{ savings.deposit }}</td>
                    <td style="font-size: small;">{{ savings.total_deposited_amount }}</td>
                    <td><input class="checkbox" type="checkbox"/></td>
                </tr>
                </tbody>
            </table>
        </el-col>
    </el-row>
</template>

<script>

    export default{
        name: 'deposit',
        props: ['savings_template', 'actual_savings'],
        data(){
            return {
                itemsPerColumn: 18,
                items: this.savings_template
            }
        },
        computed: {
            columCount(){
                return Math.ceil(this.items.length / this.itemsPerColumn);
            }
        }
    }
</script>

<style>

    input[type="checkbox"]{
        width: 20px; /*Desired width*/
        height: 20px; /*Desired height*/
    }


</style>