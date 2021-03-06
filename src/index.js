/**
 * Created by korman on 06.02.18.
 */

import React from 'react';
import { render } from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//weui
// import 'weui/dist/style/weui.css';

//system pages
import Login from './pages/Login';

//admin pages
import AdminShopperDetail from './pages/admin/shopper/ShopperDetail';
import AdminShopperForm from './pages/admin/shopper/ShopperForm';
import AdminShopperList from './pages/admin/shopper/ShopperList';
import AdminDeviceList from './pages/admin/device/DeviceList';
import DeviceShopperList from './pages/admin/device/DeviceShopperList';
import AdminDeviceDetail from './pages/admin/device/DeviceDetail';
import AdminStatementList from './pages/admin/statement/StatementList';

import AdminDeviceStatementList from './pages/admin/device/DeviceStatementList';
import AdminDeviceLogList from './pages/admin/device/DeviceLogList';
import AdminTesterForm from './pages/admin/tester/TesterForm';
import AdminTesterList from './pages/admin/tester/TesterList';

import AdminCouponForm from './pages/admin/coupon/CouponForm';
import AdminCouponList from './pages/admin/coupon/CouponList';
//consumer pages
// import ConsumerBuyHistory from './pages/consumer/buy_history/BuyHistory';
// import ConsumerConfirmationSelectSlot from './pages/consumer/buy_time/ConfirmationSelectSlot';
// import ConsumerBuyTimeSlots from './pages/consumer/buy_time/TimeSlots';

//shopper pages
// import ShopperDeviceList from './pages/shopper/device/DeviceList';
// import ShopperDeviceDetail from './pages/shopper/device/DeviceDetail';
// import ShopperStatementList from './pages/shopper/statement/StatementList';


import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class Index extends React.Component {


    render(){
        return(
            <MuiThemeProvider>
                    <Router history={history}>
                        <div>
                            <Route exact path="/" component={Login}/>
                            <Route exact path="/login" component={Login}/>

                            <Route exact path="/admin/shopper-detail/:id" component={AdminShopperDetail}/>
                            <Route exact path="/admin/shopper-form" component={AdminShopperForm}/>
                            <Route exact path="/admin/shopper-form/:id" component={AdminShopperForm}/>
                            <Route exact path="/admin/shopper-list" component={AdminShopperList}/>
                            <Route exact path="/admin/device-shopper-list" component={DeviceShopperList}/>
                            <Route exact path="/admin/device-list" component={AdminDeviceList}/>
                            <Route exact path="/admin/device-list/:shopperId" component={AdminDeviceList}/>
                            <Route exact path="/admin/device-detail/:id" component={AdminDeviceDetail}/>
                            <Route exact path="/admin/device/statement-list/:deviceId/:shopperId" component={AdminDeviceStatementList}/>
                            <Route exact path="/admin/device/log-list/:deviceId/:shopperId" component={AdminDeviceLogList}/>
                            <Route exact path="/admin/statement-list" component={AdminStatementList}/>
                            <Route exact path="/admin/invoice-list" component={AdminStatementList}/>

                            <Route exact path="/admin/tester-form" component={AdminTesterForm}/>
                            <Route exact path="/admin/tester-form/:id" component={AdminTesterForm}/>
                            <Route exact path="/admin/tester-list" component={AdminTesterList}/>

                            <Route exact path="/admin/coupon-form" component={AdminCouponForm}/>
                            <Route exact path="/admin/coupon-list" component={AdminCouponList}/>

                            {/*<Route exact path="/consumer/buy-history" component={ConsumerBuyHistory}/>*/}
                            {/*<Route exact path="/consumer/buy-time-confirmation-select-slot" component={ConsumerConfirmationSelectSlot}/>*/}
                            {/*<Route exact path="/consumer/buy-time-slots" component={ConsumerBuyTimeSlots}/>*/}
                            {/*<Route exact path="/consumer/buy-time-slots/:deviceId" component={ConsumerBuyTimeSlots}/>*/}

                            {/*<Route exact path="/shopper/device-list" component={ShopperDeviceList}/>*/}
                            {/*<Route exact path="/shopper/device-detail/:id" component={ShopperDeviceDetail}/>*/}
                            {/*<Route exact path="/shopper/statement-list" component={ShopperStatementList}/>*/}
                        </div>
                    </Router>
            </MuiThemeProvider>
        );
    }
}

render(<Index />, document.querySelector('#root'));