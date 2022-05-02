import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./profile.css";

function Profile() {
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/profile").then((response) => {
      setCustomer(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div className="account__setting">
      <div className="account__div">
        <h2 class="margin--bottom-4 text-color--primary">Account</h2>
        <div className="prof__section jDcTkg">
          <div className="prof__head">
            <p class="body-copy margin--0 truncate text-color--section-header">
              Account Details
            </p>
          </div>
          <div className="prof__mail">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell">
              <div class="sc-fNHLbd enGimF">
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  {/* {customer[2].Email} */}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil edit__icon"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </div>
          </div>
          <div className="prof__pass">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell">
              <div class="sc-fNHLbd enGimF">
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  {/* {customer[2].Password} */}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil edit__icon"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </div>
          </div>
          <div className="prof__pass">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell">
              <div class="sc-fNHLbd enGimF">
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  {/* {customer[2].Address} */}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil edit__icon"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </div>
          </div>
          <div className="prof__pass">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell">
              <div class="sc-fNHLbd enGimF">
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  ********2433
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil edit__icon"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </div>
          </div>
          <div className="prof__logout">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell prof__logout__in">
              <div class="sc-fNHLbd enGimF">
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  Logout of account
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="prof__section jDcTkg">
          <div className="prof__head">
            <p class="body-copy margin--0 truncate text-color--section-header">
              Order Summary
            </p>
          </div>
          <div className="prof__mail">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell">
              <div class="sc-fNHLbd enGimF">
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  deepmistry753@gmail.com
                </p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="prof__pass">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell">
              <div class="sc-fNHLbd enGimF">
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  deepmistry753@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="prof__pass">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell">
              <div class="sc-fNHLbd enGimF">
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  deepmistry753@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="prof__pass">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell">
              <div class="sc-fNHLbd enGimF">
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  deepmistry753@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
