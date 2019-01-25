import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Breadcrumb from "reactstrap/es/Breadcrumb";
import BreadcrumbItem from "reactstrap/es/BreadcrumbItem";

export default class Main extends Component {
    render() {
        return (
            <>
                <Breadcrumb>
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>Library</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                    <BreadcrumbItem active>Data</BreadcrumbItem>
                </Breadcrumb>
            </>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
