import React, { useState ,useEffect} from "react";
import Axios from "axios";
// import "react-datepicker/dist/react-datepicker.css";

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";


import {
Link
} from "react-router-dom";



// import WidgetsBrand from "../widgets/WidgetsBrand";
// import WidgetsDropdown from "../widgets/WidgetsDropdown";

const Stats = () => {

  const [mostFrequentlySoldItem,mostFrequentlySoldItemFun]=useState();
  const [startDate, startDateFun] = useState("")
  const [endDate, endDateFun] = useState("")

  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  


  
  const handleSubmit = (evt) => {
    evt.preventDefault();
  
    Axios.post(`http://localhost:3001/api/sales`,{
      
      startDate: startDate,
     endDate: endDate,
   }).then((response) => {
     mostFrequentlySoldItemFun(response.data);
     console.log(response.data);
   });
}
  
  useEffect(() => {
    
    Axios.post(`http://localhost:3001/api/sales`,{
      
       startDate:'2022-05-03' ,
       endDate: '',
    }).then((response) => {
      mostFrequentlySoldItemFun(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <>
    

      <CRow style={{ width: "65%", marginLeft: "auto", marginRight: "auto" }}>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Statistics</CCardHeader>
            <CCardBody>
         
              {/* <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={state}
                onChange={(item) => handleChangeOfDate([item.selection])}
              /> */}
              <br></br>
             <Link to="/frequentlySoldProducts">Frequently Sold Products</Link> <br></br>
             <Link to="/bestCustomers">Best Customers</Link> {" "}{" "}{" "}<br></br>
             <Link to="/maxBasketTotal">Max Basket Total</Link> {" "}{" "}{" "}<br></br>
             <Link to="/averageSellingProduct">Average selling product price </Link> {" "}{" "}{" "}<br></br>
         
              <br></br>
              <br></br>
             
           
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Stats;
