import React from "react";
import { Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const IndividualSchedulesData = ({ individualExcelData, index }) => {
  return (
    <>
      <Th className="text-center whitespace-nowrap">{index + 1}</Th>
      <Th className="text-center whitespace-nowrap">
        {individualExcelData.Faculty_Name}
      </Th>
      <Th className="text-center whitespace-nowrap">
        {individualExcelData.Semester}
      </Th>
      <Th className="text-center whitespace-nowrap">
        {individualExcelData.Year}
      </Th>
      <Th className="text-center whitespace-nowrap">
        {individualExcelData.Batch}
      </Th>
      <Th className="text-center whitespace-nowrap">
        {individualExcelData.Room_Number}
      </Th>
      <Th className="text-center whitespace-nowrap">
        {individualExcelData.Subject}
      </Th>
      <Th className="text-center whitespace-nowrap">
        {individualExcelData.Course_Code}
      </Th>
      <Th className="text-center whitespace-nowrap">
        {individualExcelData.Day}
      </Th>
      <Th className="text-center whitespace-nowrap">
        {individualExcelData.Time}
      </Th>
    </>
  );
};

export default IndividualSchedulesData;
