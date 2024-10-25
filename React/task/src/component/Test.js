import React, { useState, useEffect } from 'react';
import './style.css';

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

        const newItem = { id: Date.now(), field: selectField, condition: selectCondition, value: inputValue };
        const updatedGroups = [...groups];
        updatedGroups[groupIndex] = {
            ...group,
            items: [...group.items, newItem],
            selectField: '',
            selectCondition: '',
            inputValue: '',
        };
        setGroups(updatedGroups);
    };

    const handleAddGroup = () => {
        setGroups([...groups, { id: Date.now(), items: [], selectField: '', selectCondition: '', inputValue: '' }]);
    };

    const handleDelete = (groupId, idx) => {
        const groupIndex = groups.findIndex(group => group.id === groupId);
        const updatedGroups = [...groups];
        updatedGroups[groupIndex].items = updatedGroups[groupIndex].items.filter((val, i) => i !== idx);
        setGroups(updatedGroups);
    };

    const handleSelectField = (groupId, e) => {
        const groupIndex = groups.findIndex(group => group.id === groupId);
        const updatedGroups = [...groups];
        updatedGroups[groupIndex] = { ...updatedGroups[groupIndex], selectField: e.target.value, selectCondition: '', inputValue: '' };
        setGroups(updatedGroups);
    };

    const handleSelectCondition = (groupId, e) => {
        const groupIndex = groups.findIndex(group => group.id === groupId);
        const updatedGroups = [...groups];
        updatedGroups[groupIndex] = { ...updatedGroups[groupIndex], selectCondition: e.target.value };
        setGroups(updatedGroups);
    };

    const handleChangeValue = (groupId, e) => {
        const groupIndex = groups.findIndex(group => group.id === groupId);
        const updatedGroups = [...groups];
        updatedGroups[groupIndex] = { ...updatedGroups[groupIndex], inputValue: e.target.value };
        setGroups(updatedGroups);
    };

    const handleRemoveGroup = (groupId) => {
        if (groups.length > 1) {
            setGroups(groups.filter(group => group.id !== groupId));
        }
    };

    return (
        <div className='container'>
            {groups.map((group) => (
                <div key={group.id} className='group'>
                    <div className="navbar">
                        <div id='name'>And</div>
                        <button onClick={() => handleAddCondition(group.id)}>Add Condition</button>
                        <button onClick={() => handleAddGroup}>Add Group</button>
                        {groups.length > 1 && group.id !== groups[0].id && (
                            <button onClick={() => handleRemoveGroup(group.id)}>Remove Group</button>
                        )}
                    </div>

                    {group.items.length > 0 && (
                        <table className='add-field'>
                            <tbody>
                                {group.items.map((item, idx) => (
                                    <tr key={item.id}>
                                        <td>
                                            <select
                                                value={item.field}
                                                onChange={(e) => {
                                                    const newItems = [...group.items];
                                                    newItems[idx] = { ...item, field: e.target.value };
                                                    const updatedGroups = [...groups];
                                                    updatedGroups[groups.findIndex(g => g.id === group.id)] = { ...group, items: newItems };
                                                    setGroups(updatedGroups);
                                                }}
                                            >
                                                <option value="" disabled>Select field</option>
                                                {Object.keys(object).map((category, i) => (
                                                    <option key={i} value={category}>{category}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td>
                                            <select
                                                value={item.condition}
                                                onChange={(e) => {
                                                    const newItems = [...group.items];
                                                    newItems[idx] = { ...item, condition: e.target.value };
                                                    const updatedGroups = [...groups];
                                                    updatedGroups[groups.findIndex(g => g.id === group.id)] = { ...group, items: newItems };
                                                    setGroups(updatedGroups);
                                                }}
                                            >
                                                <option value="" disabled>Select Condition</option>
                                                {object[item.field] && object[item.field].map((condition, i) => (
                                                    <option key={i} value={condition}>{condition}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td>
                                            <input
                                                type='text'
                                                placeholder='Enter value'
                                                value={item.value}
                                                onChange={(e) => {
                                                    const newItems = [...group.items];
                                                    newItems[idx] = { ...item, value: e.target.value };
                                                    const updatedGroups = [...groups];
                                                    updatedGroups[groups.findIndex(g => g.id === group.id)] = { ...group, items: newItems };
                                                    setGroups(updatedGroups);
                                                }}
                                            />
                                        </td>
                                        <td><button onClick={() => handleDelete(group.id, idx)}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    <div className='table-field'>
                        <select
                            value={group.selectField}
                            onChange={(e) => handleSelectField(group.id, e)}
                        >
                            <option value="" disabled>Select field</option>
                            {Object.keys(object).map((category, i) => (
                                <option key={i} value={category}>{category}</option>
                            ))}
                        </select>
                        <select
                            value={group.selectCondition}
                            onChange={(e) => handleSelectCondition(group.id, e)}
                        >
                            <option value="" disabled>Select Condition</option>
                            {object[group.selectField] && object[group.selectField].map((condition, i) => (
                                <option key={i} value={condition}>{condition}</option>
                            ))}
                        </select>
                        <input
                            type='text'
                            placeholder='Enter value'
                            value={group.inputValue}
                            onChange={(e) => handleChangeValue(group.id, e)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Test;
    