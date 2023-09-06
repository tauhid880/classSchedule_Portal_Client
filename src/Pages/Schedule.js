import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../components/Loading";
import SchedulesData from "../components/SchedulesData";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const Schedule = () => {
  const { user } = useContext(AuthContext);

  const { data: schedules = [], isLoading } = useQuery({
    queryKey: ["schedules", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://schedule-app-server.vercel.app/schedules?Faculty_Email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="p-5 lg:p-8 rounded-lg min-h-screen">
      <div className="">
        {isLoading && <Loading></Loading>}
        <Table className="table table-compact w-full relative">
          <Thead className="text-center normal-cas">
            <Tr>
              <Th className="normal-case text-sm">SL</Th>
              <Th className="normal-case text-sm">Faculty Name</Th>
              <Th className="normal-case text-sm">Semester</Th>
              <Th className="normal-case text-sm">Year</Th>
              <Th className="normal-case text-sm">Batch</Th>
              <Th className="normal-case text-sm">Room Number</Th>
              <Th className="normal-case text-sm">Subject</Th>
              <Th className="normal-case text-sm">Course Code</Th>
              <Th className="normal-case text-sm">Date</Th>
              <Th className="normal-case text-sm">Day</Th>
              <Th className="normal-case text-sm">Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            <SchedulesData schedules={schedules} />
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Schedule;
