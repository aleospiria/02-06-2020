import React from "react";
import Description from "../Components/Description";
import Cards from "../Components/Cards";
import dataPricing from "../utils/mocks/dataPricing";

function Pricing() {
  return (
    <>
    
      <Description
        title="Precios"
        description="Los mejores precios del mercado para comprar frutas"
      />
      <Cards 
      data = {dataPricing}  />
    </>
  );
}

export default Pricing;
