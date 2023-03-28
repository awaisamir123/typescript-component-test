import React, { useState } from "react";
import "../App.css";
import MultipleSelection from "./MultipleSelection";
import DatePickerComponent from "./DatePickerComponent";
import RangePickerComponent from "./RangePickerComponent";
import SingleSelection from "./SingleSelection";

type ListItem = "type" | "Status" | "Amount" | "Date";

type Selected = Record<ListItem, boolean>;

type ListProps = {
  selected: Selected;
};

const List: React.FC<ListProps> = ({ selected }) => {
  const [selectedMultipleValue, setSelectedMultipleValue] = useState<any>([]);
  const [selectedSingleValue, setSelectedSingleValue] = useState<string>("");

  return (
    <>
      <div style={{ display: "flex" }}>
        {Object.keys(selected)?.map((item: string, index: number) => {
          if (item === "type") {
            return (
              <MultipleSelection
                key={index}
                selectedMultipleValue={selectedMultipleValue}
                setSelectedMultipleValue={setSelectedMultipleValue}
              />
            );
          } else if (item === "Status") {
            return (
              <SingleSelection
                key={index}
                selectedSingleValue={selectedSingleValue}
                setSelectedSingleValue={setSelectedSingleValue}
              />
            );
          } else if (item === "Amount") {
            return <RangePickerComponent key={index} />;
          } else if (item === "Date") {
            return <DatePickerComponent key={index} />;
          }
          return null;
        })}
      </div>
    </>
  );
};

export default List;
