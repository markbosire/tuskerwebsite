import React from "react";
import Table from "./tables";
const Schedule = () => {
  return (
    <div className="schedule">
      <div className="scheduleTitle">
        <span>Schedule</span>
        <div className="hclrtickets">VIEW ALL</div>
      </div>
      <Table />
    </div>
  );
};

export default Schedule;
