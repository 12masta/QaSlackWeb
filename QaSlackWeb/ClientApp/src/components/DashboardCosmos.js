import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

export class DashboardCosmos extends Component {
    static displayName = DashboardCosmos.name;

    constructor(props) {
        super(props);
        this.state = { slackMessages: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(slackMessages) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>id</th>
                    <th>channel_name</th>
                    <th>user_name</th>
                    <th>text</th>
                </tr>
                </thead>
                <tbody>
                {slackMessages.map(slackMessage =>
                    <tr key={slackMessage.id}>
                        <td>{slackMessage.id}</td>
                        <td>{slackMessage.channel_name}</td>
                        <td>{slackMessage.user_name}</td>
                        <td>{slackMessage.text}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : DashboardCosmos.renderForecastsTable(this.state.slackMessages);

        return (
            <div>
                <h1 id="tabelLabel" >Your defectst</h1>
                <p>All your defects</p>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const token = await authService.getAccessToken();
        const response = await fetch('dashboardcosmos', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ slackMessages: data, loading: false });
    }
}
