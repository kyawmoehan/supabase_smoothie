import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import SmoothieCard from "../../components/smoothie/SmoothieCard";
import SmoothiesLayout from "../../components/smoothie/SmoothiesLayout";
import { useSmoothiesData } from "../../hooks/useSmoothie";

const index = () => {
  const [orderBy, setOrderBy] = useState("updated_at");
  const { isLoading, isError, error, data } = useSmoothiesData(orderBy);

  const orderHandler = (e: any) => {
    setOrderBy(e.target.value);
  };

  if (isLoading) {
    return (
      <div className="container grid w-screen h-screen mx-auto place-content-center">
        <ClipLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container grid w-screen h-screen mx-auto place-content-center">
        {/* @ts-expect-error */}
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-14">
      <div className="my-5">
        <select
          name="order"
          className="w-1/6 px-1 py-2 bg-white border rounded-md"
          onChange={(e) => orderHandler(e)}
          value={orderBy}
        >
          <option value="updated_at">Latest</option>
          <option value="title">Title</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <SmoothiesLayout>
        {data.map((smoothie: any, key: number) => (
          <SmoothieCard smoothie={smoothie} key={key} orderBy={orderBy} />
        ))}
      </SmoothiesLayout>
    </div>
  );
};

export default index;
