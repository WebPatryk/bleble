import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div style={{ margin: "2rem auto", textAlign: "center", height: "100vh" }}>
      <ClipLoader size={150} color={"#123abc"} />
    </div>
  );
}
