import React, { useState } from 'react'

const Index3 = () => {

  const intialData = "Remember, for this to work, you need to have a JavaScript or JSX file open and the ES7 React/Redux/GraphQL/React-Native snippets extension installed in Visual Studio Code.";  
  
//   const [data, setData] = useState(null);
//   const [buttonName, setButtonName] = useState("show");
//   const showData = () => {
//     if (data == null){
//         setData(intialData);
//         setButtonName("hide");
//     }
//     else {
//         setData(null);
//         setButtonName("show");
//     } }

const [showData, setShowData] = useState(false);

const showDataFunction = () => {
    setShowData(!showData);
}

  return (
    <div>
    <br/>
    <button onClick = {showDataFunction}> {(showData) ? "hide":"show" } </button>
    <span>    </span>
    
    {/* <div className='content' style={{color:"yellow", backgroundColor:"crimson"}}>
        {showData && intialData}</div> */}

    {
        showData ? <div>{intialData}</div>:<div>Data is Hidden</div>
    }
    </div>
  )
}

export default Index3
