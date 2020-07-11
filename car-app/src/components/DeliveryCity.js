import React from "react";
import "../style/CitySelect.css";

export default function DeliveryCity({
  street,
  postCode,
  firstChild,
  address,
}) {
  const cityFullName = ` ${street} , ${postCode} , ${address}`;

  return (
    <option className="option" value={cityFullName}>
      {cityFullName}
    </option>
  );
}
