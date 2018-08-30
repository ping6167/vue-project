
let option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Forest', 'Steppe', 'Desert', 'Wetland']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['2012', '2013', '2014', '2015', '2016']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Forest',
            type: 'bar',
            barGap: 0,

            data: [320, 332, 301, 334, 390]
        },
        {
            name: 'Steppe',
            type: 'bar',

            data: [220, 182, 191, 234, 290]
        },
        {
            name: 'Desert',
            type: 'bar',

            data: [150, 232, 201, 154, 190]
        },
        {
            name: 'Wetland',
            type: 'bar',

            data: [98, 77, 101, 99, 40]
        }
    ]
}
export default option