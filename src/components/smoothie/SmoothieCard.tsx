import React from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useDeleteSmoothie } from "../../hooks/useSmoothie";
import { SmoothieType } from "../../types/smoothie";

const SmoothieCard = ({
  smoothie,
  orderBy,
}: {
  smoothie: SmoothieType;
  orderBy: string;
}) => {
  const deleteSmoothieMutation = useDeleteSmoothie(orderBy);
  const deleteHandler = () => {
    deleteSmoothieMutation.mutate(smoothie.id);
  };
  return (
    <div className="relative p-8 bg-white rounded-md shadow-sm">
      <Link to={`/smoothie/${smoothie.id}`}>
        <h3 className="text-xl font-semibold">{smoothie.title}</h3>
        <p className="text-lg">{smoothie.method}</p>
        <div className="absolute -right-3 -top-3 bg-secondary text-white px-2.5 py-1 rounded-md">
          {smoothie.rating}
        </div>
      </Link>
      {deleteSmoothieMutation.isSuccess && <p>Delete Success</p>}
      {deleteSmoothieMutation.isError && (
        // @ts-expect-error
        <p>{deleteSmoothieMutation.error.message}</p>
      )}
      <button
        className="absolute flex items-center justify-center px-2 py-1 text-white bg-red-400 rounded-md bottom-2 right-2 gap-x-2"
        onClick={deleteHandler}
      >
        {deleteSmoothieMutation.isLoading && <ClipLoader size={25} />}
        Delete
      </button>
    </div>
  );
};

export default SmoothieCard;
