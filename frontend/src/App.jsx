// import { useState } from 'react';
// import Navbar from './components/Navbar';
// import LeaveForm from './components/LeaveForm';
// import LeaveTable from './components/LeaveTable';
// import LeaveBalance from './components/LeaveBalance';

// // Multi-year, multi-month structure
// const initialBalance = {
//   2024: {
//     January: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   February: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   March: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   April: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   May: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   June: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   July: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   August: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   September: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   October: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   November: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   December: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   },
//   2025: {
//     January: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   February: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   March: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   April: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   May: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   June: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   July: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   August: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   September: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   October: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   November: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   December: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
//   },
// };

// function App() {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [leaveBalance, setLeaveBalance] = useState(initialBalance);

//   // Selected month & year for viewing
//   const [selectedMonth, setSelectedMonth] = useState(
//     new Date().toLocaleString('en-US', { month: 'long' })
//   );
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

//   // Called when user applies for leave
//   const applyLeave = ({ employeeName, leaveType, fromDate, toDate, days }) => {
//     // Use fromDate to figure out which month & year to deduct from
//     const dateObj = new Date(fromDate);
//     const year = dateObj.getFullYear();
//     const monthName = dateObj.toLocaleString('en-US', { month: 'long' });

//     const typeKey = leaveType.replace(/\s/g, ''); // e.g. "SickLeave"

//     // Validate month/year in the leaveBalance
//     if (!leaveBalance[year] || !leaveBalance[year][monthName]) {
//       alert(`No leave balance found for ${monthName} ${year}`);
//       return;
//     }

//     // Check if that leave type is valid
//     if (leaveBalance[year][monthName][typeKey] === undefined) {
//       alert(`Invalid leave type: ${leaveType}`);
//       return;
//     }

//     // Check if enough leaves remain for the entire range
//     if (leaveBalance[year][monthName][typeKey] >= days) {
//       // Add new request
//       setLeaveRequests((prev) => [
//         ...prev,
//         {
//           employeeName,
//           leaveType,
//           fromDate,
//           toDate,
//           daysTaken: days, // We'll display this in the table
//           status: 'Pending',
//         },
//       ]);

//       // Deduct from the correct year & month
//       setLeaveBalance((prev) => ({
//         ...prev,
//         [year]: {
//           ...prev[year],
//           [monthName]: {
//             ...prev[year][monthName],
//             [typeKey]: prev[year][monthName][typeKey] - days,
//           },
//         },
//       }));
//     } else {
//       alert(`❌ Not enough ${leaveType} in ${monthName} ${year}!`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6">
//       <Navbar />

//       <div className="max-w-5xl mx-auto">
//         {/* Show leave balances for the selectedMonth & selectedYear */}
//         <LeaveBalance
//           leaveBalance={leaveBalance}
//           selectedMonth={selectedMonth}
//           selectedYear={selectedYear}
//           setSelectedMonth={setSelectedMonth}
//           setSelectedYear={setSelectedYear}
//         />

//         {/* Apply for leave (deduct from the date's month & year) */}
//         <LeaveForm applyLeave={applyLeave} />

//         {/* Show leave requests filtered by selectedMonth & selectedYear */}
//         <LeaveTable
//           leaveRequests={leaveRequests}
//           selectedMonth={selectedMonth}
//           selectedYear={selectedYear}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import Navbar from "./components/Navbar";
import LeaveForm from "./components/LeaveForm";
import LeaveTable from "./components/LeaveTable";
import LeaveBalance from "./components/LeaveBalance";

// Multi-year, multi-month structure
const initialBalance = {
  2024: {
    January: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    February: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    March: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    April: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    May: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    June: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    July: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    August: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    September: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    October: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    November: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    December: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
  },
  2025: {
    January: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    February: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    March: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    April: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    May: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    June: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    July: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    August: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    September: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    October: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    November: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
    December: { SickLeave: 3, CasualLeave: 2, PaidLeave: 5, UnpaidLeave: 3 },
  },
};

function App() {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [leaveBalance, setLeaveBalance] = useState(initialBalance);

  // Selected month & year for viewing
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toLocaleString("en-US", { month: "long" })
  );
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Called when user applies for leave
  const applyLeave = async ({
    employeeName,
    leaveType,
    fromDate,
    toDate,
    days,
  }) => {
    try {
      // Send leave request to the backend
      const leaveRequestResponse = await fetch(
        "http://localhost:5000/api/leave-request",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            employeeName,
            leaveType,
            fromDate,
            toDate,
            daysTaken: days,
          }),
        }
      );

      if (!leaveRequestResponse.ok) {
        throw new Error("Failed to submit leave request");
      }

      const leaveRequestData = await leaveRequestResponse.json();
      console.log("Leave request submitted:", leaveRequestData);

      // Update leave balance in the backend
      const dateObj = new Date(fromDate);
      const year = dateObj.getFullYear();
      const monthName = dateObj.toLocaleString("en-US", { month: "long" });

      const leaveBalanceResponse = await fetch(
        "http://localhost:5000/api/leave-balance",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            employeeName,
            year,
            month: monthName,
            leaveType,
            days,
          }),
        }
      );

      if (!leaveBalanceResponse.ok) {
        throw new Error("Failed to update leave balance");
      }

      const leaveBalanceData = await leaveBalanceResponse.json();
      console.log("Leave balance updated:", leaveBalanceData);

      // Update local state for leave requests
      setLeaveRequests((prev) => [
        ...prev,
        {
          employeeName,
          leaveType,
          fromDate,
          toDate,
          daysTaken: days,
          status: "Pending",
        },
      ]);

      // Update local state for leave balance
      setLeaveBalance((prev) => ({
        ...prev,
        [year]: {
          ...prev[year],
          [monthName]: {
            ...prev[year][monthName],
            [leaveType]: prev[year][monthName][leaveType] - days,
          },
        },
      }));

      alert("Leave request submitted successfully!");
    } catch (error) {
      console.error("Error submitting leave request:", error);
      alert("Failed to submit leave request. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6">
      <Navbar />

      <div className="max-w-5xl mx-auto">
        {/* Show leave balances for the selectedMonth & selectedYear */}
        <LeaveBalance
          leaveBalance={leaveBalance}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          setSelectedMonth={setSelectedMonth}
          setSelectedYear={setSelectedYear}
        />

        {/* Apply for leave (deduct from the date's month & year) */}
        <LeaveForm applyLeave={applyLeave} />

        {/* Show leave requests filtered by selectedMonth & selectedYear */}
        <LeaveTable
          leaveRequests={leaveRequests}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
        />
      </div>
    </div>
  );
}

export default App;
