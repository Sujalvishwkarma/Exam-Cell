import React from "react";
import { Exam, Grid_3 } from "../../components/utils";

function Homepage() {
  return (
    <>
    <div className="max-md:p-10">

      <Grid_3>
        <>
          <Exam
            title="DSA"
            duration="2 Hours 30 Mins"
            link="#"
            date="00/00/0000"
            time="00:00 AM"
            />
          <Exam
            title="DSA"
            duration="2 Hours 30 Mins"
            link="#"
            date="00/00/0000"
            time="00:00 AM"
            />
          <Exam
            title="DSA"
            duration="2 Hours 30 Mins"
            link="#"
            date="00/00/0000"
            time="00:00 AM"
          />
        </>
      </Grid_3>
            </div>
    </>
  );
}
export default Homepage;
