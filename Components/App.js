import React, { Component } from 'react';
import DefectTable from './DefectTable';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <h1>This is a defect Tracker</h1>
                <DefectTable/>
            </React.Fragment>
        )
    }
}

export default App;