import { useEffect } from "react";
import { useData } from "./CommonDetails";

export function ShowList(props) {
  const [data, setData] = useData(true);

  //   console.log(data);
  return data ? (
    <ul>
      <li key={data.id}>
        {data.status ? "Online" : "Offline"} - {data.name}
      </li>
    </ul>
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
