import React, { useState, useEffect } from 'react';
import "./style.css";

const Test = () => {
    const object = {
        "fruit": ["banana", "apple", "guava", "kiwi", "strawberry", "blueberry"],
        "bird": ["peacock", "sparrow", "eagle", "black Drongo"],
        "chinese food": ["manchurian", "noodle", "spring roll"],
        "car": ["maruti Suzuki alto", "maruti Suzuki Swift", "hyundai Creta", "maruti Suzuki Dzire", "toyota Innova Crysta"]
    };

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const savedGroups = JSON.parse(localStorage.getItem('groups'));
        if (savedGroups) {
            setGroups(savedGroups);
        } else {
            setGroups([{ id: Date.now(), items: [], selectField: '', selectCondition: '', inputValue: '' }]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('groups', JSON.stringify(groups));
    }, [groups]);

    const handleAddCondition = (groupId) => {
        const groupIndex = groups.findIndex(group => group.id === groupId);
        const group = groups[groupIndex];
        const { selectField, selectCondition, inputValue } = group;

        if (selectField && selectCondition && inputValue) {
            const newItem = { field: selectField, condition: selectCondition, value: inputValue };
            const updatedGroups = [...groups];
            updatedGroups[groupIndex] = {
                ...group,
                items: [...group.items, newItem],
                selectField: '', 
                selectCondition: '',  
                inputValue: '',
            };
            setGroups(updatedGroups);
        } else {
            alert('Please fill in all fields before adding');
        }
    };

    const handleAddGroup = () => {
        setGroups([...groups, { id: Date.now(), items: [], selectField: '', selectCondition: '', inputValue: '' }]);
    };

    const handleDelete = (groupId, idx) => {
        const groupIndex = groups.findIndex(group => group.id === groupId);
        const updatedGroups = [...groups];
        updatedGroups[groupIndex].items = updatedGroups[groupIndex].items.filter((_, i) => i !== idx);
        setGroups(updatedGroups);
    };

    const handleSelectField = (groupId, e) => {
        const groupIndex = groups.findIndex(group => group.id === groupId);
        const updatedGroups = [...groups];
        updatedGroups[groupIndex] = { 
            ...updatedGroups[groupIndex], 
            selectField: e.target.value, 
            selectCondition: '', 
            inputValue: '' 
        };
        setGroups(updatedGroups);
    };

    const handleSelectCondition = (groupId, e) => {
        const groupIndex = groups.findIndex(group => group.id === groupId);
        const updatedGroups = [...groups];
        updatedGroups[groupIndex] = { 
            ...updatedGroups[groupIndex], 
            selectCondition: e.target.value 
        };
        setGroups(updatedGroups);
    };

    const handleChangeValue = (groupId, e) => {
        const groupIndex = groups.findIndex(group => group.id === groupId);
        const updatedGroups = [...groups];
        updatedGroups[groupIndex] = { 
            ...updatedGroups[groupIndex], 
            inputValue: e.target.value 
        };
        setGroups(updatedGroups);
    };

    const handleRemoveGroup = (groupId) => {
        setGroups(groups.filter(group => group.id !== groupId));
    };

    return (
        <div className='container'>
            {groups.map((group) => (
                <div key={group.id} className='group'>
                    <div className="navbar">
                        <div id='name'>And</div>
                        <button onClick={() => handleAddCondition(group.id)}>Add Condition</button>
                        <button onClick={handleAddGroup}>Add Group</button>
                        {groups.length > 1 && (
                            <button onClick={() => handleRemoveGroup(group.id)}>Remove Group</button>
                        )}
                    </div>
                    <div className='table-field'>
                        <select value={group.selectField} onChange={(e) => handleSelectField(group.id, e)}>
                            <option value="" disabled>Select field</option>
                            {Object.keys(object).map((category, i) => (
                                <option key={i} value={category}>{category}</option>
                            ))}
                        </select>
                        <select value={group.selectCondition} onChange={(e) => handleSelectCondition(group.id, e)}>
                            <option value="" disabled>Select Condition</option>
                            {object[group.selectField] && object[group.selectField].map((condition, i) => (
                                <option key={i} value={condition}>{condition}</option>
                            ))}
                        </select>
                        <input type='text' placeholder='Enter value' value={group.inputValue} onChange={(e) => handleChangeValue(group.id, e)} />
                    </div>

                    {group.items.length > 0 && (
                        <table className='add-field'>
                            <tbody>
                                {group.items.map((item, idx) => (
                                    <tr key={idx}>
                                        <td><input type='text' value={item.field} readOnly /></td>
                                        <td><input type='text' value={item.condition} readOnly /></td>
                                        <td><input type='text' value={item.value} readOnly /></td>
                                        <td><button onClick={() => handleDelete(group.id, idx)}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Test;
