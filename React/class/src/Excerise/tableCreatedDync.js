import React, { Component } from 'react';
import "./style.css";

class TableCreatedDync extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            firstName: "",
            lastName: "",
            editMode: false,
            editIndex: -1,
        };
    }

    nameChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    addTask = () => {
        const { items, firstName, lastName } = this.state;
        if (firstName.trim() === "" || lastName.trim() === "") {
            alert("Please add data");
            this.setState({
                firstName: "",
                lastName: "",
            })
            return;
        }
        const duplicate = items.some((item) => item.firstName == firstName && item.lastName == lastName)
        if (duplicate) {
            alert("Already Exit");
            this.setState({
                firstName: "",
                lastName: "",
            })
            return;
        }
        const newItem = {
            firstName: firstName,
            lastName: lastName
        };
        this.setState({
            items: [...items, newItem],
            firstName: '',
            lastName: ''
        });
    }

    deleteButton = (index) => {
        const { items } = this.state;
        const deleteItem = items.filter((item, idx) => idx != index);
        this.setState({
            items: deleteItem,
        })
    }

    editButton = (index) => {
        const { items } = this.state;
        const editValue = items[index];

        this.setState({
            firstName: editValue.firstName,
            lastName: editValue.lastName,
            editMode: true,
            editIndex: index
        })
    }

    updateButton = () => {
        const { items, firstName, lastName, editIndex } = this.state;
        const updatedItems = items.map((item, index) => {
            if (index === editIndex) {
                if (firstName == "" && lastName == "") {
                    alert("Not Empty Filed");
                }
                else {
                    return { firstName, lastName };
                }
            }
            return item;
        });
        this.setState({
            items: updatedItems,
            firstName: '',
            lastName: '',
            editMode: false,
            editIndex: null
        });
    }

    render() {
        const { firstName, lastName, items, editMode } = this.state;
        return (
            <div className='container'>
                <input type='text' id='firstName' placeholder='First Name' value={firstName} onChange={this.nameChange} />
                <input type='text' id='lastName' placeholder='Last Name' value={lastName} onChange={this.nameChange} />
                {editMode ? (
                    <>
                        <button onClick={this.updateButton}>Update</button>
                    </>
                ) : (
                    <>
                        <button id='Btn' onClick={this.addTask}>Add</button>
                    </>
                )}
                <table>
                    <tbody id='table'>
                        {
                            items.map((item, idx) => (
                                <tr key={idx}>
                                    <td><input value={item.firstName} disabled /></td>
                                    <td><input value={item.lastName} disabled /></td>
                                    <td><button onClick={() => this.editButton(idx)} disabled={editMode}>Edit</button></td>
                                    <td><button onClick={() => this.deleteButton(idx)} disabled={editMode}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableCreatedDync;
