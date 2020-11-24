import React, {Component} from 'react';
import authService from './api-authorization/AuthorizeService'
import {ResponsiveBar} from "@nivo/bar";

export class DashboardCosmosChart extends Component {
    static displayName = DashboardCosmosChart.name;

    constructor(props) {
        super(props);
        this.state = {slackMessages: [], loading: true};
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(slackMessages) {
        return (
        <div style={{height: 400, width: 800}}>
            
            
            <h2>Graph 3</h2>
            <ResponsiveBar
                data={slackMessages}
                keys={[ 'value' ]}
                indexBy="channel_name"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'channel_name',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'value',
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
                            id: 'channel_name'
                        },
                        id: 'channel_name'
                    },
                    {
                        match: {
                            id: 'value'
                        },
                        id: 'value'
                    }
                ]}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'channel_name',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'value',
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
    )
        ;
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : DashboardCosmosChart.renderForecastsTable(this.state.slackMessages);

        return (
            <div>
                <h1 id="tabelLabel">Your defects visualised</h1>
                <p>All your defects</p>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const token = await authService.getAccessToken();
        const response = await fetch('dashboardcosmos', {
            headers: !token ? {} : {'Authorization': `Bearer ${token}`}
        });
        const data = await response.json();
        this.setState({slackMessages: data, loading: false});
    }
}
