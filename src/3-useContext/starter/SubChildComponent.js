import React, {useContext} from "react";
import { MainDataContext } from "../../context/mainDataContext";

const SubChildComponent = () => {

  //const data = useContext(UserContext);
  const mainData = useContext(MainDataContext);
  const arr = mainData.data;
  console.log(arr);

    return (
      <div>
        <h3>Sub Child Component</h3>
        <div>
            First Name: {arr[0].firstName} <br/>
            Last Name: {arr[1].lastName}<br/>
            EmailId: {arr[2].email}<br/> 
        </div>
      </div>
    )
}

export default SubChildComponent;