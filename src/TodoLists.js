import { useState } from "react";

function TodoLists(){
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);
    function addActivity(){
        // setListData([...listData, activity]);
        // console.log(listData);
        setListData((listData)=>{
            const updatedList =  [...listData, activity];
            console.log(updatedList);
            setActivity("");
            return updatedList;
        })
    }
    function removeActivity(i){
        const updatedListData = listData.filter((elem, id)=>{
            return i!==id;
        })
        setListData(updatedListData);
    }
    function removeAll(){
        setListData([]);
    }
    return(
    <>
        <div className="container">
            <div className="header">TODO LIST</div>
            <input type="text" placeholder="Add Activity" value={activity} onChange={(e)=> setActivity(e.target.value)} />
            <button onClick={addActivity}>Add</button>
            <p className="list-heading">Here is your List</p>
            {listData!==[] && listData.map((data, i)=>{
                return (
                    <>
                        <p key={i} className="list-item">
                            <div className="listData">{data}</div>
                            <div className="btn-position">
                                <button onClick={()=>removeActivity(i)}>Remove</button>
                            </div>
                        </p>
                    </>
                )
            })}
            {listData.length >= 1 && <button onClick={removeAll}>Remove All</button> }
            
        </div>
    </>
    )
}

export default TodoLists;