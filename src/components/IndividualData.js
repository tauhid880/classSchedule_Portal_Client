import React from "react";

export const IndividualData = ({ individualExcelData, index }) => {
  return (
    <>
      <th className="text-center">{index + 1}</th>
      <th className="text-center">{individualExcelData.Faculty_Name}</th>
      <th className="text-center">{individualExcelData.Semester}</th>
      <th className="text-center">{individualExcelData.Year}</th>
      <th className="text-center">{individualExcelData.Batch}</th>
      <th className="text-center">{individualExcelData.Room_Number}</th>
      <th className="text-center">{individualExcelData.Subject}</th>
      <th className="text-center">{individualExcelData.Course_Code}</th>
      <th className="text-center">{individualExcelData.Day}</th>
      <th className="text-center">{individualExcelData.Time}</th>
    </>
  );
};
