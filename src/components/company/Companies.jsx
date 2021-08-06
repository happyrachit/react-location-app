import React, { useState, useEffect } from "react";
import TableHeader from "../layout/TableHeader";
import { baseUrl } from "../shared/platform-api";
import CompanyList from "../company/CompanyList";
import Modal from "../common/Modal";

function Companies() {
  const tableHeader = ["Business ID", "Business Name", "Website", "Address"];
  const [companies, setCompanies] = useState([]);
  const [companyDetails,setCompanyDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    // You can await here
    let response = await fetch(`${baseUrl}/api.json`, {
      method: "Get",
    });
    var data = await response.json();
    setCompanies(data);
  }

  return (
    <>
      <h4>Company List</h4>
      <table className="table table-border">
        <TableHeader tableHeader={tableHeader}></TableHeader>
        <tbody>
          {companies.map((company) => {
            return (
              <CompanyList
                key={company.id}
                company={company}
                onCompanyClick={handleCompanyClick}
              />
            );
          })}
        </tbody>
      </table>

    {companyDetails !== null ?
      <Modal
        companyDetails={companyDetails}
      />
      : ""
    }
    </>
  );

  function handleCompanyClick(company) {
    console.log(company);
    setCompanyDetails(company);
  }


}

export default Companies;
