import React, { Component } from 'react';
import TableRow from './TableRow';

class DefectTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            defectData: []
        };
        this.changeDefectStatus = this.changeDefectStatus.bind(this);
    }

    componentWillMount() {
        console.log("Inside component will mount");
        // var appDefects = JSON.parse(localStorage.getItem('defects'));
        // this.setState({defectData:appDefects});
    }

    componentDidMount() {
        console.log('Inside component did mount');
        var appDefects = JSON.parse(localStorage.getItem('defects'));
        this.setState({defectData:appDefects});
    }


    componentWillReceiveProps() {
        console.log('Inside componentWillReceiveProps');
    }

    shouldComponentUpdate() {
        console.log('Inside shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('Inside componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('Inside componentDidUpdate');
    }

    changeDefectStatus(defectId) {
        console.log('Inside parent component for status change calling from child.');
        let currentData = this.state.defectData;
        currentData.forEach((item)=>{
            if(defectId == item.id) {
                item.status = "closed";
            }
        });

        this.setState({defectData:currentData});
    }

    render() {
        console.log("Inside render method");
        var rows = [];
        this.state.defectData.forEach((item, index)=> {
            rows.push(<TableRow
                uniqueId={item.id}
                // category={item.category}
                description={item.description}
                priority={item.priority}
                status={item.status}
                onClosing={this.changeDefectStatus}
                key={index}
            />);
        })
        return (
            <React.Fragment>
                
            <table>
                <thead>
                    <tr>
                        <th> Category </th>
                        <th> Description </th>
                        <th> Priority </th>
                        <th> Status </th>
                        <th> Change Status </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                    {/* <TableRow ddefect={this.props.defect}/> */}
                </tbody>
            </table>
            </React.Fragment>
        );
    }
}

export default DefectTable;