function snapShotCharts() {


    //echart Funnel
    var colorPalette = [
        // DA Primary Colors
        '#008b94', // Teal				index:0
        '#B5BF35', // Acid Green	index:1
        '#aeaeb7', // Cool Gray 1	index:2
        '#78777A', // Cool Gray 9	index:3
        '#000018', // Black 6			index:4
        // DA Accent Colors
        '#D5215E', // Rubine Red	index:5
        '#8E1E3A', // Burgandy		index:6
        '#94388D', // LightPurple index:7
        '#F8971D', // Orange			index:8
        '#F7EC00' // Yellow			index:9
    ];
    var funnelColors = [
        '#008b94', // Teal				index:0
        '#B5BF35', // Acid Green	index:1
        '#F8971D', // Orange			index:8
        '#D5215E' // Rubine Red	index:5
    ];
    var pieColors = [
        '#B5BF35', // Acid Green	index:1
        '#F8971D', // Orange			index:8
        '#D5215E' // Rubine Red	index:5
    ];

    var detailPieColors = [
        // DA Primary Colors
        '#008b94', // Teal				print
        '#aeaeb7', // Cool Gray 1	hide
        '#B5BF35', // Acid Green	print
        '#78777A', // Cool Gray 9	hide
        '#F8971D', // Orange			print
        '#000018', // Black 6			hide
        // DA Accent Colors
        '#D5215E', // Rubine Red	print
        '#8E1E3A', // Burgandy		hide
        '#94388D', // LightPurple print
        '#F8971D', // Orange			hide
        '#F7EC00' // Yellow			print
    ];
    var toolboxOptions = {
        color: colorPalette,
        show: true,
        orient: 'horizontal',
        right: '25%',
        itemSize: 15,
        itemGap: 10,
        showTitle: true,
        feature: {
            saveAsImage: {
                show: true,
                type: 'png',
                title: 'Save as Image'
            },
            restore: {
                show: true,
                title: 'Restore'
            },
            dataView: {
                show: true,
                title: 'Data View',
                readOnly: false,
                lang: ['Data View', 'Exit', 'Update'],
                buttonColor: colorPalette[1],
                buttonTextColor: colorPalette[4] //'#ffffff'
            }
        }
    };

    var theme = {
        color: funnelColors,


        title: {
            itemGap: 8,
            textStyle: {
                fontSize: 14,
                fontWeight: 'normal',
                color: colorPalette[0]
            }
        },

        dataRange: {
            color: [colorPalette[0], colorPalette[1]]
        },


        tooltip: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#408829',
                    type: 'dashed'
                },
                crossStyle: {
                    color: '#408829'
                },
                shadowStyle: {
                    color: 'rgba(200,200,200,0.3)'
                }
            }
        },

        dataZoom: {
            dataBackgroundColor: '#eee',
            fillerColor: 'rgba(64,136,41,0.2)',
            handleColor: colorPalette[5]
        },
        grid: {
            borderWidth: 0
        },

        categoryAxis: {
            axisLine: {
                lineStyle: {
                    color: colorPalette[0]
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#eee']
                }
            }
        },

        valueAxis: {
            axisLine: {
                lineStyle: {
                    color: colorPalette[1]
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#eee']
                }
            }
        },


        textStyle: {
            fontFamily: 'Arial, Verdana, sans-serif'
        }
    };
    var optionFunnel = {

        title: {
            text: 'Profile Submission Progress',
            subtext: 'Guests Submitted to Match Social Networking Database'
        },
        legend: {
            data: ['Available', 'Eligible', 'Submitted', 'Matched'],
            orient: 'horizontal',
            left: 'center',
            top: 'bottom'
        },
        calcuable: true,
        toolbox: toolboxOptions,
        tooltip: {
            trigger: 'item',
            formatter: "{a} {b}:<br/> {c}"
        },
        series: {
            name: 'Profiles',
            type: 'funnel',
            sort: 'descending',
            left: 'center',
            //width: '50%',
            label: {
                normal: {
                    position: 'outside',
                    formatter: '{b}: {c}'
                },
                emphasis: {
                    position: 'inside',
                    formatter: '{b}: {c}'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.7
                }
            },
            data: [{
                name: 'Available',
                value: 255

            },
                {
                    value: 204,
                    name: 'Eligible'
                },
                {
                    value: 132,
                    name: 'Submitted'
                },
                {
                    value: 86,
                    name: 'Matched'
                }
            ]
            //animationDuration: '1500',
            //animationEasing: 'quadraticInOut'
        }


    };
    var optionPie = {
        color: colorPalette,
        title: {
            text: 'Profile Submission Results',
            subtext: 'Social Networking Accounts Matched to Guests'
        },
        legend: {
            data: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'YouTube', 'Google+', 'Pinterest'],
            orient: 'horizontal',
            left: 'center',
            top: 'bottom'
        },
        calcuable: true,
        toolbox: toolboxOptions,
        tooltip: {
            trigger: 'item',
            formatter: "{b}: <br/> {d}%"
        },
        series: {
            name: 'Profiles',
            type: 'pie',
            left: 'center',
            //width: '70%',
            label: {
                normal: {
                    position: 'outside',
                    formatter: '{b}: {c}'
                },
                emphasis: {
                    position: 'inside',
                    formatter: '{b}: {c}'
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.7
                }
            },
            data: [{
                value: 20,
                name: 'Facebook'

            },
                {
                    value: 12,
                    name: 'Instagram'
                },
                {
                    value: 15,
                    name: 'LinkedIn'
                },
                {
                    value: 17,
                    name: 'Twitter'

                },
                {
                    value: 5,
                    name: 'YouTube'
                },
                {
                    value: 4,
                    name: 'Google+'
                },
                {
                    value: 18,
                    name: 'Pinterest'
                }
            ]
        }


    };
    
    
    var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        }
    };

    var placeHolderStyle = {
        normal: {
            color: 'rgba(0,0,0,0)',
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var detaiPieOption = {
        color: detailPieColors,
        title: {
            text: 'Guest Profiles',
            subtext: 'Matched in SnapShot',
            x: 'center',
            y: 'center',
            //width: '90%',
            itemGap: 10,
            textStyle: {
                color: colorPalette[0],
                fontFamily: 'sans-serif',
                fontSize: 20,
                fontWeight: 'normal'
            }
        },
        tooltip: {
            show: true,
            formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
            orient: 'horizontal',
            left: 'center',
            top: 'bottom',
            itemGap: 12,
            data: ['Social Data', 'Demographic Data', 'Not Found'],
        },
        toolbox: toolboxOptions,
        series: [{
            name: 'Profiles with',
            type: 'pie',
            clockWise: false,
            radius: [105, 130],
            itemStyle: dataStyle,
            data: [{
                value: 68,
                name: 'Social Data'
            }, {
                value: 32,
                name: 'invisible',
                itemStyle: placeHolderStyle
            }]
        }, {
            name: 'Profiles with',
            type: 'pie',
            clockWise: false,
            radius: [80, 105],
            itemStyle: dataStyle,
            data: [{
                value: 29,
                name: 'Demographic Data'
            }, {
                value: 71,
                name: 'invisible',
                itemStyle: placeHolderStyle
            }]
        }, {
            name: 'Profile Data',
            type: 'pie',
            clockWise: false,
            radius: [25, 80],
            itemStyle: dataStyle,
            data: [{
                value: 3,
                name: 'Not Found'
            }, {
                value: 73,
                name: 'invisible',
                itemStyle: placeHolderStyle
            }]
        }]
    };
    
    var echartSnapShotFunnel = echarts.init(document.getElementById('echart_SnapShotFunnel'), theme);
    var echartSnapShotPie = echarts.init(document.getElementById('echart_SnapShotPie'), theme);
    var echartSnapShotDetailPie = echarts.init(document.getElementById('echart_SnapShotDetailPie'), theme);


    echartSnapShotPie.setOption(optionPie);
    echartSnapShotFunnel.setOption(optionFunnel);
    echartSnapShotDetailPie.setOption(detaiPieOption);

    window.onresize = echartSnapShotDetailPie.resize;
    window.onresize = echartSnapShotFunnel.resize;
    window.onresize = echartSnapShotPie.resize;
};