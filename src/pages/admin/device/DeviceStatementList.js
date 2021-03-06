/**
 * Created by korman on 07.02.18.
 */
import React from 'react';
import injectSheet from 'react-jss';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import SearchBar from 'material-ui-search-bar'
import LangStrings from '../../../translations/admin/device/DeviceStatementList';

import axios from 'axios';
import Core from '../Core';
import Config from '../../../Config';

const styles = {
    page: {
        backgroundColor: '#EEE',
        paddingBottom: '100px'
    }
};

@injectSheet(styles)

export default class DeviceStatementList extends React.Component {

    constructor(props){
        super(props);
        const config = new Config();

        this.state = {
            items: [],
            deviceId: props.match.params.deviceId,
            shopperId: props.match.params.shopperId,
            baseUrl: config.baseUrl
        };
    }

    componentWillMount(){
        axios.get(this.state.baseUrl + 'statement/items', {
            params: {
                deviceId: this.state.deviceId,
                shopperId: this.state.shopperId
            }
        })
            .then(response => {
                this.setState({
                    items: response.data
                });
            })
            .catch(response => {

            });
    }

    changeSearch(){

    }

    render() {
        const {classes, children} = this.props;

        return (
            <Core>
                <Toolbar style={{marginTop: '15px', paddingTop: '15px', paddingBottom: '15px'}}>
                    <ToolbarGroup>
                        <h4></h4>
                    </ToolbarGroup>
                </Toolbar>
                <Table selectable={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>{LangStrings.startTime}</TableHeaderColumn>
                            <TableHeaderColumn>{LangStrings.endTime}</TableHeaderColumn>
                            <TableHeaderColumn>{LangStrings.totalHourUsed}</TableHeaderColumn>
                            <TableHeaderColumn>{LangStrings.rate}</TableHeaderColumn>
                            <TableHeaderColumn>{LangStrings.revenue}</TableHeaderColumn>
                            <TableHeaderColumn>{LangStrings.paymentMethod}</TableHeaderColumn>
                            {/*<TableHeaderColumn>Revenue</TableHeaderColumn>*/}
                            {/*<TableHeaderColumn>Paid</TableHeaderColumn>*/}
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} showRowHover={true}>
                        { this.state.items.map((item, key) => {
                                const startTime = item.timeStart.split(' ');
                                const endTime   = item.timeEnd.split(' ');

                                const paymentSystem = item[0].paymentSystem ? item[0].paymentSystem : 0;
                                let paymentSystemString = '';

                                switch (parseInt(paymentSystem))
                                {
                                    case 0:
                                        paymentSystemString = 'N/A';
                                        break;
                                    case 2:
                                        paymentSystemString = LangStrings.wechat;
                                        break;
                                    case 3:
                                        paymentSystemString = LangStrings.alipay;
                                        break;
                                    case 4:
                                        paymentSystemString = LangStrings.coupon
                                        break;
                                }

                                return (
                                    <TableRow key={key} onClick={ id => this.openDetailShopper(item.id) }>
                                        <TableRowColumn>{startTime[0]} <br/> {startTime[1]}</TableRowColumn>
                                        <TableRowColumn>{endTime[0]} <br/> {endTime[1]}</TableRowColumn>
                                        <TableRowColumn>{item[0].hours}</TableRowColumn>
                                        <TableRowColumn>{`¥` + item[0].rate + `/HR`}</TableRowColumn>
                                        <TableRowColumn>{`¥` + item[0].revenue}</TableRowColumn>
                                        <TableRowColumn>{paymentSystemString }</TableRowColumn>
                                        {/*<TableRowColumn>/!*revenue*!/</TableRowColumn>*/}
                                        {/*<TableRowColumn>/!*paid*!/</TableRowColumn>*/}
                                    </TableRow>
                                )
                            }
                        )}
                    </TableBody>
                </Table>
            </Core>
        );
    };
}