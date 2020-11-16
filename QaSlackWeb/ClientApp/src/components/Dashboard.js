import React, {Component} from 'react';
import {ResponsiveBar} from '@nivo/bar'
import {generateCountriesData} from '@nivo/generators'
import {colors} from '../constants'
import { ResponsiveSunburst } from '@nivo/sunburst'
import ReactTooltipDefaultExport from 'react-tooltip';
export class Dashboard extends Component {
    static displayName = Dashboard.name;
    data = [
        {
            "country": "AD",
            "hot dog": 128,
            "hot dogColor": "hsl(258, 70%, 50%)",
            "burger": 177,
            "burgerColor": "hsl(195, 70%, 50%)",
            "sandwich": 149,
            "sandwichColor": "hsl(78, 70%, 50%)",
            "kebab": 64,
            "kebabColor": "hsl(109, 70%, 50%)",
            "fries": 180,
            "friesColor": "hsl(191, 70%, 50%)",
            "donut": 7,
            "donutColor": "hsl(230, 70%, 50%)"
        },
        {
            "country": "AE",
            "hot dog": 23,
            "hot dogColor": "hsl(171, 70%, 50%)",
            "burger": 127,
            "burgerColor": "hsl(170, 70%, 50%)",
            "sandwich": 99,
            "sandwichColor": "hsl(277, 70%, 50%)",
            "kebab": 83,
            "kebabColor": "hsl(236, 70%, 50%)",
            "fries": 137,
            "friesColor": "hsl(4, 70%, 50%)",
            "donut": 187,
            "donutColor": "hsl(338, 70%, 50%)"
        },
        {
            "country": "AF",
            "hot dog": 193,
            "hot dogColor": "hsl(190, 70%, 50%)",
            "burger": 16,
            "burgerColor": "hsl(237, 70%, 50%)",
            "sandwich": 145,
            "sandwichColor": "hsl(252, 70%, 50%)",
            "kebab": 71,
            "kebabColor": "hsl(228, 70%, 50%)",
            "fries": 100,
            "friesColor": "hsl(333, 70%, 50%)",
            "donut": 197,
            "donutColor": "hsl(141, 70%, 50%)"
        },
        {
            "country": "AG",
            "hot dog": 27,
            "hot dogColor": "hsl(20, 70%, 50%)",
            "burger": 87,
            "burgerColor": "hsl(155, 70%, 50%)",
            "sandwich": 132,
            "sandwichColor": "hsl(41, 70%, 50%)",
            "kebab": 53,
            "kebabColor": "hsl(177, 70%, 50%)",
            "fries": 193,
            "friesColor": "hsl(296, 70%, 50%)",
            "donut": 152,
            "donutColor": "hsl(164, 70%, 50%)"
        },
        {
            "country": "AI",
            "hot dog": 44,
            "hot dogColor": "hsl(153, 70%, 50%)",
            "burger": 58,
            "burgerColor": "hsl(194, 70%, 50%)",
            "sandwich": 103,
            "sandwichColor": "hsl(31, 70%, 50%)",
            "kebab": 53,
            "kebabColor": "hsl(87, 70%, 50%)",
            "fries": 197,
            "friesColor": "hsl(41, 70%, 50%)",
            "donut": 138,
            "donutColor": "hsl(319, 70%, 50%)"
        },
        {
            "country": "AL",
            "hot dog": 20,
            "hot dogColor": "hsl(343, 70%, 50%)",
            "burger": 161,
            "burgerColor": "hsl(190, 70%, 50%)",
            "sandwich": 53,
            "sandwichColor": "hsl(115, 70%, 50%)",
            "kebab": 141,
            "kebabColor": "hsl(241, 70%, 50%)",
            "fries": 19,
            "friesColor": "hsl(224, 70%, 50%)",
            "donut": 83,
            "donutColor": "hsl(97, 70%, 50%)"
        },
        {
            "country": "AM",
            "hot dog": 148,
            "hot dogColor": "hsl(142, 70%, 50%)",
            "burger": 97,
            "burgerColor": "hsl(261, 70%, 50%)",
            "sandwich": 45,
            "sandwichColor": "hsl(359, 70%, 50%)",
            "kebab": 99,
            "kebabColor": "hsl(225, 70%, 50%)",
            "fries": 153,
            "friesColor": "hsl(70, 70%, 50%)",
            "donut": 18,
            "donutColor": "hsl(217, 70%, 50%)"
        }
    ]
    
    
    sunburstData = {
        "name": "nivo",
        "color": "hsl(115, 70%, 50%)",
        "children": [
            {
                "name": "viz",
                "color": "hsl(32, 70%, 50%)",
                "children": [
                    {
                        "name": "stack",
                        "color": "hsl(53, 70%, 50%)",
                        "children": [
                            {
                                "name": "chart",
                                "color": "hsl(334, 70%, 50%)",
                                "loc": 104342
                            },
                            {
                                "name": "xAxis",
                                "color": "hsl(256, 70%, 50%)",
                                "loc": 80795
                            },
                            {
                                "name": "yAxis",
                                "color": "hsl(305, 70%, 50%)",
                                "loc": 11077
                            },
                            {
                                "name": "layers",
                                "color": "hsl(237, 70%, 50%)",
                                "loc": 127963
                            }
                        ]
                    },
                    {
                        "name": "pie",
                        "color": "hsl(200, 70%, 50%)",
                        "children": [
                            {
                                "name": "chart",
                                "color": "hsl(95, 70%, 50%)",
                                "children": [
                                    {
                                        "name": "pie",
                                        "color": "hsl(296, 70%, 50%)",
                                        "children": [
                                            {
                                                "name": "outline",
                                                "color": "hsl(58, 70%, 50%)",
                                                "loc": 108874
                                            },
                                            {
                                                "name": "slices",
                                                "color": "hsl(264, 70%, 50%)",
                                                "loc": 159845
                                            },
                                            {
                                                "name": "bbox",
                                                "color": "hsl(50, 70%, 50%)",
                                                "loc": 174112
                                            }
                                        ]
                                    },
                                    {
                                        "name": "donut",
                                        "color": "hsl(208, 70%, 50%)",
                                        "loc": 147935
                                    },
                                    {
                                        "name": "gauge",
                                        "color": "hsl(309, 70%, 50%)",
                                        "loc": 169086
                                    }
                                ]
                            },
                            {
                                "name": "legends",
                                "color": "hsl(158, 70%, 50%)",
                                "loc": 104300
                            }
                        ]
                    }
                ]
            },
            {
                "name": "colors",
                "color": "hsl(351, 70%, 50%)",
                "children": [
                    {
                        "name": "rgb",
                        "color": "hsl(256, 70%, 50%)",
                        "loc": 53569
                    },
                    {
                        "name": "hsl",
                        "color": "hsl(29, 70%, 50%)",
                        "loc": 6307
                    }
                ]
            },
            {
                "name": "utils",
                "color": "hsl(84, 70%, 50%)",
                "children": [
                    {
                        "name": "randomize",
                        "color": "hsl(22, 70%, 50%)",
                        "loc": 81014
                    },
                    {
                        "name": "resetClock",
                        "color": "hsl(201, 70%, 50%)",
                        "loc": 68538
                    },
                    {
                        "name": "noop",
                        "color": "hsl(20, 70%, 50%)",
                        "loc": 57323
                    },
                    {
                        "name": "tick",
                        "color": "hsl(46, 70%, 50%)",
                        "loc": 160892
                    },
                    {
                        "name": "forceGC",
                        "color": "hsl(311, 70%, 50%)",
                        "loc": 22400
                    },
                    {
                        "name": "stackTrace",
                        "color": "hsl(346, 70%, 50%)",
                        "loc": 171744
                    },
                    {
                        "name": "dbg",
                        "color": "hsl(328, 70%, 50%)",
                        "loc": 149220
                    }
                ]
            },
            {
                "name": "generators",
                "color": "hsl(222, 70%, 50%)",
                "children": [
                    {
                        "name": "address",
                        "color": "hsl(184, 70%, 50%)",
                        "loc": 135261
                    },
                    {
                        "name": "city",
                        "color": "hsl(126, 70%, 50%)",
                        "loc": 120283
                    },
                    {
                        "name": "animal",
                        "color": "hsl(2, 70%, 50%)",
                        "loc": 160828
                    },
                    {
                        "name": "movie",
                        "color": "hsl(123, 70%, 50%)",
                        "loc": 151724
                    },
                    {
                        "name": "user",
                        "color": "hsl(105, 70%, 50%)",
                        "loc": 92023
                    }
                ]
            },
            {
                "name": "set",
                "color": "hsl(11, 70%, 50%)",
                "children": [
                    {
                        "name": "clone",
                        "color": "hsl(95, 70%, 50%)",
                        "loc": 35408
                    },
                    {
                        "name": "intersect",
                        "color": "hsl(56, 70%, 50%)",
                        "loc": 148953
                    },
                    {
                        "name": "merge",
                        "color": "hsl(333, 70%, 50%)",
                        "loc": 56097
                    },
                    {
                        "name": "reverse",
                        "color": "hsl(302, 70%, 50%)",
                        "loc": 748
                    },
                    {
                        "name": "toArray",
                        "color": "hsl(217, 70%, 50%)",
                        "loc": 42986
                    },
                    {
                        "name": "toObject",
                        "color": "hsl(76, 70%, 50%)",
                        "loc": 92156
                    },
                    {
                        "name": "fromCSV",
                        "color": "hsl(8, 70%, 50%)",
                        "loc": 190505
                    },
                    {
                        "name": "slice",
                        "color": "hsl(209, 70%, 50%)",
                        "loc": 24965
                    },
                    {
                        "name": "append",
                        "color": "hsl(204, 70%, 50%)",
                        "loc": 9809
                    },
                    {
                        "name": "prepend",
                        "color": "hsl(207, 70%, 50%)",
                        "loc": 130564
                    },
                    {
                        "name": "shuffle",
                        "color": "hsl(70, 70%, 50%)",
                        "loc": 13228
                    },
                    {
                        "name": "pick",
                        "color": "hsl(47, 70%, 50%)",
                        "loc": 183477
                    },
                    {
                        "name": "plouc",
                        "color": "hsl(95, 70%, 50%)",
                        "loc": 176427
                    }
                ]
            },
            {
                "name": "text",
                "color": "hsl(152, 70%, 50%)",
                "children": [
                    {
                        "name": "trim",
                        "color": "hsl(4, 70%, 50%)",
                        "loc": 79264
                    },
                    {
                        "name": "slugify",
                        "color": "hsl(9, 70%, 50%)",
                        "loc": 152237
                    },
                    {
                        "name": "snakeCase",
                        "color": "hsl(335, 70%, 50%)",
                        "loc": 73301
                    },
                    {
                        "name": "camelCase",
                        "color": "hsl(131, 70%, 50%)",
                        "loc": 28091
                    },
                    {
                        "name": "repeat",
                        "color": "hsl(287, 70%, 50%)",
                        "loc": 23656
                    },
                    {
                        "name": "padLeft",
                        "color": "hsl(25, 70%, 50%)",
                        "loc": 117414
                    },
                    {
                        "name": "padRight",
                        "color": "hsl(169, 70%, 50%)",
                        "loc": 181938
                    },
                    {
                        "name": "sanitize",
                        "color": "hsl(314, 70%, 50%)",
                        "loc": 151851
                    },
                    {
                        "name": "ploucify",
                        "color": "hsl(259, 70%, 50%)",
                        "loc": 91713
                    }
                ]
            },
            {
                "name": "misc",
                "color": "hsl(257, 70%, 50%)",
                "children": [
                    {
                        "name": "greetings",
                        "color": "hsl(214, 70%, 50%)",
                        "children": [
                            {
                                "name": "hey",
                                "color": "hsl(287, 70%, 50%)",
                                "loc": 197777
                            },
                            {
                                "name": "HOWDY",
                                "color": "hsl(284, 70%, 50%)",
                                "loc": 31961
                            },
                            {
                                "name": "aloha",
                                "color": "hsl(185, 70%, 50%)",
                                "loc": 131121
                            },
                            {
                                "name": "AHOY",
                                "color": "hsl(198, 70%, 50%)",
                                "loc": 171073
                            }
                        ]
                    },
                    {
                        "name": "other",
                        "color": "hsl(93, 70%, 50%)",
                        "loc": 191885
                    },
                    {
                        "name": "path",
                        "color": "hsl(278, 70%, 50%)",
                        "children": [
                            {
                                "name": "pathA",
                                "color": "hsl(189, 70%, 50%)",
                                "loc": 77749
                            },
                            {
                                "name": "pathB",
                                "color": "hsl(345, 70%, 50%)",
                                "children": [
                                    {
                                        "name": "pathB1",
                                        "color": "hsl(157, 70%, 50%)",
                                        "loc": 123216
                                    },
                                    {
                                        "name": "pathB2",
                                        "color": "hsl(5, 70%, 50%)",
                                        "loc": 74935
                                    },
                                    {
                                        "name": "pathB3",
                                        "color": "hsl(177, 70%, 50%)",
                                        "loc": 196116
                                    },
                                    {
                                        "name": "pathB4",
                                        "color": "hsl(260, 70%, 50%)",
                                        "loc": 168841
                                    }
                                ]
                            },
                            {
                                "name": "pathC",
                                "color": "hsl(158, 70%, 50%)",
                                "children": [
                                    {
                                        "name": "pathC1",
                                        "color": "hsl(89, 70%, 50%)",
                                        "loc": 60240
                                    },
                                    {
                                        "name": "pathC2",
                                        "color": "hsl(133, 70%, 50%)",
                                        "loc": 131510
                                    },
                                    {
                                        "name": "pathC3",
                                        "color": "hsl(167, 70%, 50%)",
                                        "loc": 182730
                                    },
                                    {
                                        "name": "pathC4",
                                        "color": "hsl(11, 70%, 50%)",
                                        "loc": 144386
                                    },
                                    {
                                        "name": "pathC5",
                                        "color": "hsl(169, 70%, 50%)",
                                        "loc": 12535
                                    },
                                    {
                                        "name": "pathC6",
                                        "color": "hsl(12, 70%, 50%)",
                                        "loc": 107700
                                    },
                                    {
                                        "name": "pathC7",
                                        "color": "hsl(218, 70%, 50%)",
                                        "loc": 100118
                                    },
                                    {
                                        "name": "pathC8",
                                        "color": "hsl(355, 70%, 50%)",
                                        "loc": 165563
                                    },
                                    {
                                        "name": "pathC9",
                                        "color": "hsl(209, 70%, 50%)",
                                        "loc": 84046
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
    
    
    
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <h2>Graph 1</h2>
                <div style={{height: 200}}>
                    <ResponsiveBar
                        margin={{
                            top: 1.5,
                            right: 10,
                            bottom: 1.5,
                            left: 1.5,
                        }}
                        padding={0.2}
                        data={generateCountriesData(['rock', 'jazz', 'hip-hop', 'reggae', 'folk'], {size: 9})}
                        indexBy="country"
                        enableGridX={false}
                        enableGridY={false}
                        keys={['rock', 'jazz', 'hip-hop', 'reggae', 'folk']}
                        colors={colors}
                        axisBottom={null}
                        axisLeft={null}
                        borderWidth={3}
                        borderColor="#000"
                        enableLabel={true}
                        labelSkipHeight={24}
                        isInteractive={false}
                        animate={false}
                    />

                </div>
                <br />
                <h2>Graph 2</h2>
                <div style={{height: 400}}>
                    
                    <ResponsiveBar
                        data={this.data}
                        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
                        indexBy="country"
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        padding={0.3}
                        valueScale={{ type: 'linear' }}
                        colors={{ scheme: 'nivo' }}
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: '#38bcb2',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: '#eed312',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        fill={[
                            {
                                match: {
                                    id: 'fries'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'sandwich'
                                },
                                id: 'lines'
                            }
                        ]}
                        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'country',
                            legendPosition: 'middle',
                            legendOffset: 32
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'food',
                            legendPosition: 'middle',
                            legendOffset: -40
                        }}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 120,
                                translateY: 0,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                    />
                </div>







                
                <h2>Graph 3</h2>
                <div style={{height: 400}}>
                    <ResponsiveSunburst
                        data={this.sunburstData}
                        margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
                        identity="name"
                        value="loc"
                        cornerRadius={2}
                        borderWidth={1}
                        borderColor="white"
                        colors={{ scheme: 'nivo' }}
                        childColor={{ from: 'color' }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                        isInteractive={true}
                    />
                </div>
                
                
                
                
                
                
            </div>
        );
    }
}
