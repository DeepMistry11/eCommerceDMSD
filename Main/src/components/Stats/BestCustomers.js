import React, { useState ,useEffect} from "react";
import Axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

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
import { Breadcrumb } from "semantic-ui-react";



// import WidgetsBrand from "../widgets/WidgetsBrand";
// import WidgetsDropdown from "../widgets/WidgetsDropdown";

const BestCustomers = () => {

  const [mostFrequentlySoldItem,mostFrequentlySoldItemFun]=useState();
  const [startDate, startDateFun] = useState("")
  const [endDate, endDateFun] = useState("")

  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  


  
  const handleSubmit = (evt) => {
    evt.preventDefault();
  
    Axios.post(`http://localhost:3001/api/sales3`,{
      
      startDate: startDate,
     endDate: endDate,
   }).then((response) => {
     mostFrequentlySoldItemFun(response.data);
     console.log(response.data);
   });
}
  
  useEffect(() => {
    
    Axios.post(`http://localhost:3001/api/sales3`,{
      
       startDate:'2022-05-03' ,
       endDate: '',
    }).then((response) => {
      mostFrequentlySoldItemFun(response.data);
      console.log(response.data);
    });
  }, []);
  const handleHomeClick =()=>{
      console.log('in handlehome click')
      window.location.pathname('/')
  }
  return (
    <>
    

      <CRow style={{ width: "65%", marginLeft: "auto", marginRight: "auto" }}>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
               
             
                <Breadcrumb>
    <Breadcrumb.Section onCLick ={handleHomeClick} link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>Best Customers</Breadcrumb.Section>
 
  </Breadcrumb>
            </CCardHeader>
            <CCardBody>
            <form onSubmit={handleSubmit}>
      <label>
        Start Date:
        <input
          type="text"
          value={startDate}
          onChange={e => startDateFun(e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="text"
          value={endDate}
          onChange={e => endDateFun(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
              {/* <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={state}
                onChange={(item) => handleChangeOfDate([item.selection])}
              /> */}
            
           

              <br></br>
              <br></br>
              <h3>{"Best Customers in terms of money spent"}</h3>

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                    
                    </CTableHeaderCell>
                    <CTableHeaderCell>First Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Last Name
                    </CTableHeaderCell>
                    <CTableHeaderCell>Amount Spent</CTableHeaderCell>
                   
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {mostFrequentlySoldItem&&mostFrequentlySoldItem.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.FName}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                       <div>{item.LName}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                       <div>{item.TotalAmount}</div>
                        
                      </CTableDataCell>
                     
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default BestCustomers;
