import React, { useRef, useState } from "react";
// import { Data } from "../components/Data";
import * as XLSX from "xlsx";
import { toast } from "react-hot-toast";

const AddClass = () => {
  // on change states
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);
  const fileInputRef = useRef(null);
  // submit
  const [excelData, setExcelData] = useState(null);
  // it will contain array of objects
  //   console.log(excelData);
  // handle File
  const fileType = [
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/csv",
  ];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      //   console.log(selectedFile.type);
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("plz select your file");
    }
  };

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
      const newArray = data.map(({ __rowNum__, SL, ...rest }) => rest);

      //   const datas = data.find();
      console.log(newArray);

      //   Save excel data into database
      fetch("https://schedule-app-server.vercel.app/schedules", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newArray),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Data Save Successfully");
            fileInputRef.current.value = "";
          }
        });
    } else {
      setExcelData(null);
    }
  };
  return (
    <div className="h-screen flex flex-row justify-center items-center">
      {/* upload file section */}
      <div className="form px-2 lg:px-0 md:px-0 ">
        <form className="form-group" autoComplete="off" onSubmit={handleSubmit}>
          <label className="text-center text-xl font-semibold">
            <h5>Upload Excel file</h5>
          </label>
          <br></br>
          <div className="flex flex-col gap-2 justify-center items-center">
            <input
              ref={fileInputRef}
              type="file"
              className="form-control file-input file-input-bordered rounded-md w-full max-w-xs"
              onChange={handleFile}
              required
            ></input>
            {excelFileError && (
              <div className="text-red-600 font-semibold flex flex-row justify-center items-center">
                {excelFileError}
              </div>
            )}

            <button
              type="submit"
              className="bg-red-400 hover:bg-red-500 text-white text-sm px-12 mt-3 py-2  border rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* <br></br> */}
      {/* <hr className="my-3"></hr> */}

      {/* view file section */}
      {/* <label className="text-center text-xl font-semibold">
        <h5 className="my-2">View Excel file</h5>
      </label>
      <div className="viewer">
        {excelData === null && <>No file selected</>}
        {excelData !== null && (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th scope="col">SL</th>
                  <th scope="col">Faculty Name</th>
                  <th scope="col">Semester</th>
                  <th scope="col">Year</th>
                  <th scope="col">Batch</th>
                  <th scope="col">Room Number</th>
                  <th>Subject</th>
                  <th scope="col">Course Code</th>
                  <th scope="col">Day</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                <Data excelData={excelData} />
              </tbody>
            </table>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default AddClass;
