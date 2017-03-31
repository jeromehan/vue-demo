<style scoped>
</style>
<template>
    <div ref="chart" class="chart">

    </div>
</template>
<script>
    import echarts from 'echarts';

   export default {
        props: {
            right: {
                type: Boolean,
                default: false
            }
        },
        data: function() {
            return {
                data: {}
            }
        },
        mounted: function() {
        },
        beforeDestroy: function() {
            this.myChart.dispose;
        },
        methods: {
            initChart: function() {
                this.myChart = echarts.init(this.$refs.chart);
                var series = [
                    {
                        type: 'bar',
                        name: 'chart',
                        data: this.data.value
                    }
                ];
                var option = {
                    yAxis: {
                        type: 'value'
                    },
                    xAxis: {
                        type: 'category',
                        data: this.data.key
                    },
                    itemStyle: {
                        normal: {
                            color: this.right ? 'blue' : 'red'
                        }
                    },
                    series: series
                };

                this.myChart.setOption(option);
            },
            flash:function(data){
                this.data = data;
                this.initChart();
            }
        }
    }
</script>
