import { selectsearchHistory } from "@/store/historySlice";
import React from "react";
import { useSelector } from "react-redux";

const SearchHistory = () => {
  const history = useSelector(selectsearchHistory);
  return (
    <div className="max-w-lg">
      <h4 className="font-bold m-3">Seach History</h4>
      {history && (
        <div className="m-3 p-1">
          {history.map((data, index) => (
            <div
              className="flex flex-col p-2 cursor-pointer hover:bg-slate-200 rounded-lg"
              key={index}
            >
              {data}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchHistory;
