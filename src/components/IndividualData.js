import React from "react";

export const IndividualData = ({ individualExcelData }) => {
  return (
    <>
      <th>{individualExcelData.id}</th>
      <th>{individualExcelData.FirstName}</th>
      <th>{individualExcelData.LastName}</th>
      <th>{individualExcelData.Gender}</th>
      <th>{individualExcelData.Countery}</th>
      <th>{individualExcelData.Age}</th>
      <th>{individualExcelData.Date}</th>
    </>
  );
};
