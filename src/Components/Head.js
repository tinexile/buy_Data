import React from "react";

const Head = () => {
  return (
    <>
      <div className="max-w-[1000px] mx-auto p-10 grid md:grid-cols-2 items-center justify-center" >
        <div>
          <img
          className="w-[400px] h-[400px]"
            src="https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg?t=st=1709415449~exp=1709419049~hmac=83a59efdae75e949ee4efbedba194c069efe061d92994ffe3d93e78aabf86316&w=826"
            alt="Anylytics"
          />
        </div>

        <div>
          <h3 className="text-green-600 font-bold " >DATA ANALYTICS DASHBOARD</h3>
          <h1 className="text-2xl sm:text-3xl font-bold my-2" >Manage Data Analytics Centrally</h1>
          <p className="font-semibold my-3" >
            In a statement reported by Agence France-Presse, health ministry
            spokesperson Ashraf al-Qudra said that a paramedic was among those
            killed and that children were also wounded in the strikes which
            occurred near the Emirati maternity hospital.
          </p>
          <button className="text-green-500 font-bold bg-black px-8 py-2 rounded-md mt-3" >Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Head;
