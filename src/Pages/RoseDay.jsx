// import React from "react";
// import Navbar from "../Components/Globalcomp/Navbar";
// import RoseDayContent from "../Components/RoseDayComp/RoseDayContent";

// const RoseDay = () => {
//   return (
//     <section className="bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200">
//       <Navbar />
//       <RoseDayContent />
//     </section>
//   );
// };

// export default RoseDay;


import React ,{useEffect} from "react";
import Navbar from "../Components/Globalcomp/Navbar";
import RoseDayContent from "../Components/RoseDayComp/RoseDayContent";
import WhyYouAreSpecial from "../Components/RoseDayComp/WhyYouAreSpecial";


const RoseDay = () => {
    useEffect(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, []);
  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200">
      <Navbar />

      {/* 🌹 MAIN ROSE DAY HERO + ANIMATIONS */}
      <RoseDayContent />

      {/* 💖 WHY YOU’RE SPECIAL SECTION */}
      <WhyYouAreSpecial />

      {/* 🌹 SEND A VIRTUAL ROSE */}
 
    </section>
  );
};

export default RoseDay;
