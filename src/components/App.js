import React from "react";

import '../styles/App.scss';
import productsData from '../data/productsData';
import {Products} from "./Products";
import {Basket} from "./Basket";

var myData = productsData.slice();

class App extends React.Component {

    state = {
        window: true
    };

    updateData = (value) => {
        this.setState({ window: value },() => {
            if(window) {
                return <Basket data={myData} updateData={this.updateData}/>
            } else {
                return <Products data={myData} updateData={this.updateData}/>
            }
        })
    };

    render() {
        const {window} = this.state;
        if(window) {
            return <Basket data={myData} updateData={this.updateData}/>
        } else {
            return <Products data={myData} updateData={this.updateData}/>
        }
    };


}

export default App;