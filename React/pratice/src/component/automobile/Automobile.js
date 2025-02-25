import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import "./Style.css";


const Automobile = () => {
    const { name } = useParams();
  
    // two button
    const [overview, setOverView] = useState(true);
    const [tagName, setTagName] = useState("");

    const [description, setDescription] = useState("");
    const [items, setItems] = useState([]);
    // modal show
    const [showModal, setShowModal] = useState(false);
    // alert message 
    const [successMessage, setSuccessMessage] = useState("");

    // // child add tyare use karyo
    const [activeParentId, setActiveParentId] = useState(null);
    // input value filter
    const [filtervalue, setFilterValue] = useState("");

    // //Delete 
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);
    const [tagToDelete, setTagToDelete] = useState(null);

    // // move
    const [moveModal, setMoveModal] = useState(false);   // model show
    const [itemToMove, setItemToMove] = useState(null);  // store of move item
    const [targetCategory, setTargetCategory] = useState("");
    const [parentTag, setParentTag] = useState("");
    const [filteredParentTags, setFilteredParentTags] = useState([]);

    // overview ma count  show
    const [selectedTag, setSelectedTag] = useState(null);

    // merge
    const [mergeModal, setMergeModal] = useState(false);
    const [tagToMerge, setTagToMerge] = useState(null); // store of move item
    const [mergeTargetCategory, setMergeTargetCategory] = useState("");
    const [ mergeParentTag, setMergeParentTag] = useState("");
    const [filteredMergeParentTags, setFilteredMergeParentTags] = useState([]);
      
   
    // State for categories to populate the select dropdown
    const [categories, setCategories] = useState([]);
    ; 
  

    useEffect(() => {
        // Load data from localStorage based on the 'name' parameter
        const storedData = JSON.parse(localStorage.getItem('data')) || [];
        const categoryData = storedData.find(data => data[name]);
        // console.log(categoryData);
        if (categoryData) {
            setItems(categoryData[name]);
        }
    }, [name]);

    useEffect(() => {
        // Save data to localStorage when items change
        const dataToStore = JSON.parse(localStorage.getItem('data')) || [];
        const newData = dataToStore.filter(data => !data[name]);
        newData.push({ [name]: items });
        localStorage.setItem('data', JSON.stringify(newData));
    }, [items, name]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('data')) || [];
        const categoriesFromData = saved.map(data => Object.keys(data)[0]);
        setCategories(categoriesFromData);
    }, []);
 

        useEffect(() => {
        if (mergeTargetCategory) {
            const saved = localStorage.getItem('data');
            const parents = getParentsByCategory(JSON.parse(saved) || [], mergeTargetCategory);
            setFilteredMergeParentTags(parents);
        }else {
            setFilteredMergeParentTags([]);
        }
    }, [mergeTargetCategory, items]);
        
    //message display
    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => setSuccessMessage(''), 2000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);
       
    const handleTargetCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setTargetCategory(selectedCategory);
           
        if (selectedCategory) {
            const saved = JSON.parse(localStorage.getItem('data')) || [];
            
            const parents = getParentsByCategory(saved,selectedCategory);
            setFilteredParentTags(parents);
        } else {
            setFilteredParentTags([]);
        }
    };
  

   const  handleMergeTargetCategoryChange  = (e) => {
    const selectedCategory = e.target.value;
    setMergeTargetCategory(selectedCategory);
     
    if (selectedCategory) {
        const saved = JSON.parse(localStorage.getItem('data')) || []
        const parents =  getParentsByCategory(saved, selectedCategory);
        setFilteredMergeParentTags(parents);
    }else {
        setFilteredMergeParentTags([]);
    }
   }

   const getParentsByCategory = (items, selectedCategory) => {
      let children;
       
       items.forEach(item => {
           if (Object.keys(item)[0] === selectedCategory) {
               children = Object.values(item)[0];
            }
        })
        
        const findParents = (items) => {
            const result = [];
    
            items.forEach(item => {
                if (item.name) {
                    result.push(item);
                }
                if (item.children && item.children.length > 0) {
                    result.push(...findParents(item.children));
                }
            });
            return result;
        };
        return findParents(children).map(item => item.name).filter(name => name !== itemToMove?.name);
    };
    
    const handleClick = (parentId) => {
        setActiveParentId(parentId);
        setShowModal(true);
    };

    const addChild = (items, parentId, newItem) => {
        return items.map(item => {
            if (item.id === parentId) {
                return {
                    ...item,
                    children: [...(item.children || []), newItem]
                };
            }
            if (item.children) {
                return {
                    ...item,
                    children: addChild(item.children, parentId, newItem)
                };
            }
            return item;
        });
    };

    const handleSave = () => {
        if (tagName && description) {
            const newItem = {
                id:  Math.random().toString(15),
                name: tagName,
                description,
                parent_id : activeParentId || 0,
            };

            if (activeParentId) {
                setItems(prevItems => addChild(prevItems, activeParentId, newItem));
            }
            else {
                setItems(prevItems => [...prevItems, newItem]);
            }
            setTagName("");
            setDescription("");
            setSelectedTag(newItem);
            setShowModal(false);
            setSuccessMessage('Tag added successfully');
        }
    };

    const handleCancel = () => {
        setTagName("");
        setDescription("");
        setShowModal(false);
        setActiveParentId(null);
    };

    const handleDelete = (name) => {
        setTagToDelete(name);
        setShowConfirmDelete(true);

    };

    const handleConfirmDelete = () => {
        const Delete = (items, nameToDelete) => {
            return items.map((item) => ({ ...item, children: Delete(item.children || [], nameToDelete) }))
                .filter((item) => item.name !== nameToDelete);
        };
        setItems(Delete(items, tagToDelete));
        setShowConfirmDelete(false);
        setTagToDelete(null);
    };

    const handleCancelDelete = () => {
        setShowConfirmDelete(false);
        setTagToDelete(null);
    };

    const removeItem = (items, itemToRemoveId) => {
        return items.reduce((acc, item) => {
            if (item.id === itemToRemoveId) {
                return acc;     
            }
            return acc.concat({
                ...item,
                children: removeItem(item.children || [], itemToRemoveId)
            });
        }, []);
    };

    const addItemToTarget = (items, newItem,parentTag) => {
             return items
            .map(item => {
                if (item.name === parentTag) {
                    return {
                        ...item,
                        children: [...(item.children || []), newItem]
                    };
                }
                return {
                    ...item,
                    children: addItemToTarget(item.children || [], newItem,parentTag)
                };
            });
    };

    const handleMove = (item) => {
        setItemToMove(item);
        setMoveModal(true);
        setTargetCategory("");
        setParentTag("");
    };

 
    const moveItem = () => {

        setItems(prevItems => {


            const updatedItems = removeItem(prevItems, itemToMove.id);

            const saved = JSON.parse(localStorage.getItem('data')) || [];

            const targetCategoryItems = saved.find(item => Object.keys(item)[0] === targetCategory);
            const targetCategoryData = targetCategoryItems ? Object.values(targetCategoryItems)[0] : [];
            
            const updatedTargetItems = addItemToTarget(targetCategoryData, itemToMove, parentTag);
        
             const newData = saved.filter(item => Object.keys(item)[0] !== targetCategory);

        if (targetCategoryItems) {
            newData.push({ [targetCategory]: updatedTargetItems });
        } else {
            newData.push({ [targetCategory]: [itemToMove] });
        }
        localStorage.setItem('data', JSON.stringify(newData));

        return updatedItems;

        }); 
    

        setMoveModal(false);
        setItemToMove(null);
        setTargetCategory("");
        setParentTag("");
        setSuccessMessage('Tag moved successfully');
    };

    const handleMerge = (item) => {
        // console.log(item);   
        setTagToMerge(item);
        setMergeModal(true);
        setMergeTargetCategory("");
        setMergeParentTag("");
    }
    const mergeTag = (tagToMerge) => {
        
        setItems(prevItems => {
            
            const itemsAfterRemoval = removeItem(prevItems, tagToMerge.id);

            const saved = JSON.parse(localStorage.getItem('data')) || [];
            const updatedData = saved.find(item => Object.keys(item)[0] === mergeTargetCategory);
            
            const targetItems = updatedData ? Object.values(updatedData)[0] : [];

            const addChildrenMergeToTarget = (items, children, parentTag) => {
                return items.map(item => {
                    if (item.name === parentTag) {
                        return {
                            ...item,
                            children: [
                                ...(item.children || []),
                                ...children 
                            ]
                        };
                    }
                    return {
                        ...item,
                        children: addChildrenMergeToTarget(item.children || [], children, parentTag)
                    };
                });
            };
            const childrenToAdd = tagToMerge.children || [];

            const newTargetItems = addChildrenMergeToTarget(targetItems, childrenToAdd, mergeParentTag);
            

            const filteredData = saved.filter(item => Object.keys(item)[0] !== mergeTargetCategory);
             
            filteredData.push({ [mergeTargetCategory]: newTargetItems });
    
            localStorage.setItem('data', JSON.stringify(filteredData));
            
            return itemsAfterRemoval;
        });

        setMergeModal(false);
        setTagToMerge(null); 
        setMergeTargetCategory("");
        setMergeParentTag("");
        setSuccessMessage('Tag merged successfully');
    };

    const filteredItems = (items, filterValue) => {
       
        const filterItem = (item) => {
            const name = item.name || '';
            const matchesFilter = name.toLowerCase().includes(filterValue.toLowerCase());
        
            const filteredChildren = item.children ? filteredItems(item.children, filterValue) : [];
             
            return matchesFilter || filteredChildren.length > 0 ? {
                ...item,
                children: filteredChildren
            } : null;
        };

        return items.map(filterItem).filter(item => item !== null);

    }


    const countTags = (items) => {
        return items.reduce((acc, item) => {
            const childCount = item.children ? countTags(item.children) : 0;
            return acc + 1 + childCount;
        }, 0);
    };


    const renderItem = (item, index) => (
        <li className='item-container' key={index}>
            {item.name}
            <div className='three-dots' onClick={() => setSelectedTag(item)}>...</div>
            <div className='options-menu'>
                <button onClick={() => handleClick(item.id)}>Add Child</button>
                <button onClick={() => handleDelete(item.name)}>Delete</button>
                <button onClick={() => handleMove(item)}>Move</button>
                <button onClick={() => handleMerge(item)}>Merge</button>
            </div>
            {item.children && item.children.length > 0 && (
                <ul className='child-tags'>
                    {item.children.map((child, i) => renderItem(child, i))}
                </ul>
            )}
        </li>
    );
  
    return (
        <div className='newComponent'>
            <div id='name'>Welcome, {name}</div>
            <div id='border'></div>

            <div className="tab">
                <input
                    type='button'
                    id='overview'
                    value="OVERVIEW"
                    onClick={() => setOverView(true)}
                />
                <input
                    type='button'
                    id="tags"
                    value="TAGS"
                    onClick={() => setOverView(false)}
                />
                <div id="border"></div>
            </div>

            <div className="bottom">
                <div className='left'>
                    {overview ? (
                        <div>Overview</div>
                    ) : (
                        <>
                            <div className='header'>
                                <p id='tag'>Tags</p>
                                <button id='btn' onClick={() => handleClick(null)}>Add</button>
                            </div>
                            <div className="filterValue">
                                <input
                                    type='text'
                                    placeholder='Filter Tags'
                                    value={filtervalue}
                                    onChange={(e) => setFilterValue(e.target.value)}
                                />
                            </div>
                            <div className="addfiled">
                                <ul>
                                    {filteredItems(items, filtervalue).length === 0 ? (
                                        <div>No tags</div>
                                    ) : filteredItems(items, filtervalue).map((item, i) => renderItem(item, i))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
                <div className='right'>
                    {overview ? (
                        <>
                            <div className='OverviewRight'>{name} Overview</div>
                            <div className='box'>Automobile Tag Count {countTags(items)}</div>
                        </>
                    ) : selectedTag && (
                        <div className='tag-details'>
                            <div>{selectedTag.name}</div>
                            <p>Description</p>
                            <p id='description'>{selectedTag.description}</p>
                        </div>
                    )}
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{activeParentId !== null ? 'Add Child Tag' : 'Add New Tag'}</h2>
                        <label>
                            Tag Name:
                            <input
                                type="text"
                                placeholder='Enter Tag Name'
                                value={tagName}
                                onChange={(e) => setTagName(e.target.value)}
                            />
                        </label>
                        <label>
                            Description:
                            <input
                                type="text"
                                placeholder='Add your description here.'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </label>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            )}
           
             {moveModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Move Tag</h2>
                        <label>
                            Target Category:
                            <select
                                value={targetCategory}
                                onChange={handleTargetCategoryChange}
                            >
                                <option value="">Select a Target Category:</option>
                                {categories.map((category, i) => (
                                    <option key={i} value={category}>{category}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Parent Tag:
                            <select
                                value={parentTag}
                                onChange={(e) => setParentTag(e.target.value)}
                            > 
                             <option value="" disabled>Select a parent tag</option>
                            {filteredParentTags.map((parent, i) => (
                                <option key={i} value={parent}>{parent}</option>
                            ))}
                            </select>
                        </label>
                        <button onClick={() => moveItem()}>Move</button>
                        <button onClick={() => setMoveModal(false)}>Cancel</button>
                    </div>
                </div>
            )}


            {mergeModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Merge Tag</h2>
                        <label>
                            Target Category:
                            <select
                                value={mergeTargetCategory}
                                onChange={handleMergeTargetCategoryChange}
                            >
                                 <option value="" disabled>Select a Target tag</option>
                                {categories.map((category, i) => (
                                    <option key={i} value={category}>{category}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Parent Tag:
                            <select
                                value={mergeParentTag}
                                onChange={(e) => setMergeParentTag(e.target.value)}
                            > 

                             <option value="" disabled>Select a parent tag</option>
                            {filteredMergeParentTags.map((parent, i) => (
                                <option key={i} value={parent}>{parent}</option>
                            ))}
                            </select>
                            </label>
                        <button onClick={() => mergeTag(tagToMerge)}>Merge</button>
                        <button onClick={() => setMergeModal(false)}>Cancel</button>
                    </div>
                </div>
            )}

      
            {showConfirmDelete && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Delete {tagToDelete} Tag?</h2>
                        <p>This action will delete the tag completely and all its children. Are you sure?</p>
                        <button onClick={() => handleConfirmDelete()}>Yes</button>
                        <button onClick={() => handleCancelDelete()}>No</button>
                    </div>
                </div>
            )}

            {successMessage && (
                <div className="success-message">
                    {successMessage}</div>
            )}
        </div>
    );
};

export default Automobile;
