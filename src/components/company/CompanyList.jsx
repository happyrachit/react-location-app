import React from "react";

function CompanyList(props) {
  const { company,onCompanyClick } = props;

  return (
    <tr>
      <th scope="row">{company.id}</th>
      <td>
        <a href="javascript:void(0)" data-toggle="modal"
            data-target="#myModal" onClick={(event) => {
              event.preventDefault();
              onCompanyClick(company);
            }}>{company.company_name}</a>
      </td>
      <td>{company.website}</td>
      <td>{company.address}</td>
    </tr>
  );
}



export default CompanyList;
