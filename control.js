let myChart
let myChart2
let myChart3
let myChart4
let myChart5
let myChart6
let myChart7
let myChart8
let myChart9

function openDropDown(num) {
    console.log('document.getElementsByClassName')
    let dd_1 = document.getElementById(`dd_1`)
    let dd_2 = document.getElementById(`dd_2`)
    let angle_1 = document.getElementById(`angle_1`)
    let angle_2 = document.getElementById(`angle_2`)

    if (num === 1) {
        dd_1.classList.toggle("visible")
        angle_1.classList.toggle("sb-icon-up")
        dd_2.classList.remove('visible')
        angle_2.classList.remove('sb-icon-up')
    } else {
        dd_2.classList.toggle("visible")
        angle_2.classList.toggle("sb-icon-up")
        dd_1.classList.remove('visible')
        angle_1.classList.remove('sb-icon-up')
    }
}
function openTab(id) {
    let item_1 = document.getElementById('tab_1').classList
    let item_2 = document.getElementById('tab_2').classList
    let div1 = document.getElementById('box_tab_1').classList
    let div2 = document.getElementById('box_tab_2').classList

    item_1.remove('active')
    item_2.remove('active')
    if (id === 1) {
        div1.remove('hide')
        item_1.toggle('active')
        div2.add('hide')
        tabOne()
    } else {
        div2.remove('hide')
        item_2.toggle('active')
        div1.add('hide')
        tabTwo()
    }
}
function tabOne() {
    var dom = document.getElementById('chart_1')
    myChart = echarts.init(dom);
    myChart.clear()
    myChart.resize()
    option = {
        responsive: false,
        // maintainAspectRatio: true,
        grid: {
            left: '0',
            bottom: '0',
            width: "100%",
            height: "90%",
        },
        tooltip: {
            formatter: '<p style="color:black"> {b} </p>  <p style="color:#ea9661"> uv : {c}',
            trigger: "axis",
            axisPointer: {
                type: "line"
            }
            ,backgroundColor:"rgba(255, 255, 255, 1)",
            borderColor:  "rgba(220, 218, 218, 1)",
            borderWidth: 1
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            show: false
        },
        yAxis: {
            // splitLine: {
            //     show: false
            // },
            show: false
        },
        series: [{
            data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 2000, 4780, 2890, 1390, 3490],
            type: 'line',
            showSymbol: false,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(231, 136, 76, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(248, 218, 198, 1)'
                    // color: 'rgba(255, 255, 255, 1)'
                }])
            },
            smooth: true
        }]
    };
    myChart.setOption(option);
}
function tabTwo() {
    var dom = document.getElementById('chart_2')
    myChart2 = echarts.init(dom);
    myChart2.clear()
    myChart2.resize()
    option = {
        responsive: true,
        maintainAspectRatio: false,
        grid: {
            bottom: '0',
            left: '0',
            width: "100%",
            // height: "90%",
            // right: '15px'
        },
        xAxis: [
            {
                type: 'category',
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                axisTick: {
                    alignWithLabel: true
                }
                , show: false
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false
            }

        ],
        series: [
            {
                name: 'test',
                type: 'line',
                areaStyle: {},
                data: [10, 25, 50, 25, 55, 30, 55, 40, 25],
                color: ["#faffe3"],
                showSymbol: false,
                lineStyle: {
                    color: "#033c73",
                    width: 1,
                    opacity: .5
                },
                smooth: true
            },
            {
                name: 'test1',
                type: 'bar',
                barWidth: '30%',
                data: [40, 30, 70, 35, 65, 60, 15, 20, 25],
                color: ["#033c73"]
            },
            {
                name: 'test2',
                type: 'line',
                data: [40, 60, 70, 45, 35, 70, 10, 25, 35],
                color: ["#c71c22"],
                smooth: true,
                symbolSize: 7,
                itemStyle: {
                    borderWidth: 3
                },
                lineStyle: {
                    color: "#c71c22",
                    width: 3,
                },
            }
        ]
    };
    myChart2.setOption(option);
}
function chartBox() {
    var dom = document.getElementById('chart_3')
    console.log(dom)
    myChart3 = echarts.init(dom);
    myChart3.clear()
    myChart3.resize()
    option = {
        responsive: true,
        maintainAspectRatio: false,
        grid: {
            bottom: '0',
            left: '0',
            right: '0',
            // width: "100%",

            // height: "90%",
            // right: '15px'
        },
        xAxis: [
            {
                type: 'category',
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                axisTick: {
                    alignWithLabel: true
                }
                , show: false
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false
            }

        ],
        series: [
            {
                name: 'test2',
                type: 'line',
                data: [40, 60, 70, 45, 35, 70, 10, 25, 35],
                color: ["#ff6281"],
                smooth: true,
                symbolSize: 8,
                symbol: 'roundRect',

                lineStyle: {
                    color: "#ff6281",
                    width: 3,
                },
            }
        ]
    };
    myChart3.setOption(option);

    //chart 4
    myChart4 = echarts.init(document.getElementById('chart_4'));
    option = {
        responsive: true,
        maintainAspectRatio: false,
        grid: {
            bottom: '0',
            left: '0',
            width: "100%",
            height: "90%"
        },
        xAxis: [
            {
                type: 'category',
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                axisTick: {
                    alignWithLabel: true
                }
                , show: false
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false
            }

        ],
        series: [
            {
                name: 'test2',
                type: 'line',
                data: [40, 60, 150, 45, 35, 60, 10, 25, 35],
                color: ["#3ac47d"],
                smooth: true,
                symbolSize: 8,
                itemStyle: {
                    borderWidth: 3
                },
                lineStyle: {
                    color: "#3ac47d",
                    width: 3,
                },
                cursor: 'auto'
            }
        ]
    };
    myChart4.setOption(option);

    //chart 5
    myChart5 = echarts.init(document.getElementById('chart_5'));
    option = {
        responsive: true,
        maintainAspectRatio: false,
        grid: {
            bottom: '0',
            left: '0',
            width: "100%",
            height: "90%"
        },
        xAxis: [
            {
                type: 'category',
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                axisTick: {
                    alignWithLabel: true
                }
                , show: false
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false
            }

        ],
        series: [
            {
                name: 'test2',
                type: 'bar',
                data: [40, 60, 150, 45, 35, 70, 10, 25, 35],
                color: ["#81a4ff"],
                smooth: true,
                symbolSize: 8,
                itemStyle: {
                    borderWidth: 3,
                    borderColor: "#3f6ad8"
                },
                lineStyle: {
                    color: "#3ac47d",
                    width: 3,
                },
                cursor: 'auto'
            }
        ]
    };
    myChart5.setOption(option);
    //chart 6
    myChart6 = echarts.init(document.getElementById('chart_6'));
    option = {
        responsive: true,
        maintainAspectRatio: false,
        grid: {
            bottom: '0',
            left: '0',
            width: "100%",
            height: "90%"
        },
        xAxis: [
            {
                type: 'category',
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                axisTick: {
                    alignWithLabel: true
                }
                , show: false
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false
            }

        ],
        series: [
            {
                name: 'test2',
                type: 'line',
                data: [40, 60, 150, 45, 35, 70, 10, 25, 35],
                color: ["#a75fff"],
                smooth: true,
                symbolSize: 8,
                itemStyle: {
                    borderWidth: 3
                },
                lineStyle: {
                    color: "#a75fff",
                    width: 3,
                },
            },
            {
                name: 'test2',
                type: 'line',
                data: [35, 70, 10, 25, 35, 40, 60, 150, 45],
                color: ["#d6b5ff"],
                smooth: true,
                symbolSize: 8,
                itemStyle: {
                    borderWidth: 3
                },
                lineStyle: {
                    color: "#d6b5ff",
                    width: 3,
                },
            }
        ]
    };
    myChart6.setOption(option);
    //chart 7
    myChart7 = echarts.init(document.getElementById('chart_7'));
    option = {
        responsive: true,
        maintainAspectRatio: false,
        grid: {
            // bottom: '0',
            // left:'0',
            // width: "100%",
            // height:"90%"
            bottom: '0%',
            left: '-5%',
            width: "110%",
        },
        xAxis: [
            {
                type: 'category',
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                axisTick: {
                    alignWithLabel: true
                }
                , show: false
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false
            }

        ],
        series: [
            {
                name: 'test2',
                type: 'line',
                data: [40, 60, 150, 45, 35, 60, 10, 25, 35],
                color: ["#cef0df"],
                smooth: true,
                symbolSize: 8,
                itemStyle: {
                    borderWidth: 3
                },
                lineStyle: {
                    color: "#cef0df",
                    width: 3,
                },
                cursor: 'auto'
            }
        ]
    };
    myChart7.setOption(option);
    //chart 8
    myChart8 = echarts.init(document.getElementById('chart_8'));
    option = {
        //  responsive: true,
        //  maintainAspectRatio: false,
        grid: {
            bottom: '0%',
            left: '-6%',
            width: "112%",
            //  height:"90%"
        },
        xAxis: [
            {
                type: 'category',
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                axisTick: {
                    alignWithLabel: true
                }
                , show: false
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false
            }

        ],
        series: [
            {
                name: 'test2',
                type: 'line',
                data: [40, 60, 150, 45, 35, 60, 10, 25, 35],
                color: ["#fff4eb"],
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    color: "#cef0df",
                    width: 3,
                },
                areaStyle: {},
                cursor: 'auto'
            }
        ]
    };
    myChart8.setOption(option);
    //chart 9
    myChart9 = echarts.init(document.getElementById('chart_9'));
    option = {
        responsive: true,
        maintainAspectRatio: false,
        grid: {
            bottom: '0',
            left: '0',
            width: "100%",
            height: "90%",

        },
        xAxis: [
            {
                type: 'category',
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                axisTick: {
                    alignWithLabel: true
                }
                , show: false
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false
            }

        ],
        series: [
            {
                name: 'test2',
                type: 'bar',
                data: [40, 60, 150, 45, 35, 70, 10, 25, 35],
                color: ["#81a4ff"],
                smooth: true,
                symbolSize: 8,
                itemStyle: {
                    borderWidth: 3,
                    borderColor: "#3f6ad8"
                },
                lineStyle: {
                    color: "#3ac47d",
                    width: 3,
                },
                opacity: .7,
                cursor: 'auto',
            }
        ]
    };
    myChart9.setOption(option);
}
document.getElementById('tab_1').click()
chartBox()
function resizeChart(){
    setTimeout(function () {
        echarts.init(document.getElementById("chart_1")).resize();
        echarts.init(document.getElementById("chart_2")).resize();
        echarts.init(document.getElementById("chart_3")).resize();
        echarts.init(document.getElementById("chart_4")).resize();
        echarts.init(document.getElementById("chart_5")).resize();
        echarts.init(document.getElementById("chart_6")).resize();
        echarts.init(document.getElementById("chart_7")).resize();
        echarts.init(document.getElementById("chart_8")).resize();
        echarts.init(document.getElementById("chart_9")).resize();
    }, 500);
}
window.onresize = function () {
    resizeChart()
}
$(document).mouseup(function (e) {
    var container = $("#popupBox");
    console.log(container.css('visibility') === 'visible')
    if (container.css('visibility') === 'visible')
        if (!container.is(e.target) && container.has(e.target).length === 0 && !$('#openPopup').is(e.target)) {
            container.toggleClass('box-profile-transfrom')
        }
    var container_nav = $("#popupBoxNav");
    if (container_nav.css('visibility') === 'visible')
        if (!container_nav.is(e.target) && container_nav.has(e.target).length === 0 && !$('#openPopNav').is(e.target)) {
            container_nav.toggleClass('box-profile-transfrom')
        }
});
$('#openPopNav').click(function (e) {
    $('#popupBoxNav').toggleClass('box-profile-transfrom')
})
$('#openPopup').click(function (e) {
    $('#popupBox').toggleClass('box-profile-transfrom')
})

$('#btnSearch').click(function (e){
    $('#inputSearch').toggleClass('width-input')
    $('#btnSearch2').toggleClass('styleXef')
})
$('#btnSearch2').click(function (e){
    $('#inputSearch').toggleClass('width-input')
    $('#btnSearch2').toggleClass('styleXef')
})
$('#boxLogo2').click(function (e){
    $('#boxLogoNavBar').toggleClass('closed-side-bar')
    $('#boxSideBar').toggleClass('closed-side-bar')
    $('#boxContent').toggleClass('closed-side-bar')
    resizeChart()
})
$('#openBoxLogo2').click(function (e){
    $('#boxLogoNavBar').toggleClass('closed-side-bar')
    $('#boxSideBar').toggleClass('closed-side-bar')
    $('#boxContent').toggleClass('closed-side-bar')
    resizeChart()
})
