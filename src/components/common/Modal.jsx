import React from "react";

function Modal(props) {
  const { companyDetails } = props;
  return (
    <>
      <div className="modal" id="myModal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Show Details</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={companyDetails.image}
                    width="500"
                    height="500"
                  ></img>
                </div>
                <div className="col-md-6">
                  <table>
                    <tr>
                      <td>Business Name:</td>
                      <td>{companyDetails.company_name}</td>
                    </tr>
                    <tr>
                      <td>Address:</td>
                      <td>{companyDetails.address}</td>
                    </tr>
                    <tr>
                      <td>Website:</td>
                      <td>{companyDetails.website}</td>
                    </tr>
                    <tr>
                      <td>Hours:</td>
                      <td>{companyDetails.hours.map((hour) => {
                          return (<ul><li key={hour.day}>{hour.day} : {hour.open} - {hour.close}</li></ul>);
                      })}</td>
                    </tr>
                  </table> 
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
