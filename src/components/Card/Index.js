import { selectWeatherData } from "@/store/weatherSlice";
import { useSelector } from "react-redux";

export default function Card() {
  const data = useSelector(selectWeatherData);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.weather && data.weather.length > 0 && (
        <div className="text-black p-5 m-3 rounded-lg bg-slate-200 max-w-[280px] cursor-pointer shadow-md">
          <p className="font-bold">
            City: <span className="uppercase font-normal">{data.name}</span>
          </p>
          <p className="font-bold">
            Weather:{" "}
            <span className="uppercase font-normal">
              {data.weather[0].description}
            </span>
          </p>
          <p className="font-bold">
            Wind Speed:
            <span className="uppercase font-normal">{data.wind.speed} KPH</span>
          </p>
        </div>
      )}
    </>
  );
}
