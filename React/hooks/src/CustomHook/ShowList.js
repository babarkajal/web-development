import React, { useEffect } from "react";
import { useData } from "./CommonDetails";

export function ShowList(props) {
  const [data, setData] = useData(true);
  return data ? (
    <React.Fragment>
      <p>Custom hooks in React</p>
      <ul>
        <li key={data.id}>
          {data.status ? "Online" : "Offline"} - {data.name}
        </li>
      </ul>
    </React.Fragment>
  ) : (
    <div>No data found</div>
  );
}

{
  /* <ul>
  {data &&
    data.map((data) => {
      return (
        <li key={data.id}>
          {data.status ? "Online" : "Offline"} - {data.name}
        </li>
      );
    })}
</ul>; */
}
