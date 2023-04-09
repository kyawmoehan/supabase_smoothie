import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { SmoothieFormData, SmoothieSchema } from "../create";
import InputForm from "../../components/form/InputForm";
import { ClipLoader } from "react-spinners";
import { useSmoothieData, useUpdateSmoothie } from "../../hooks/useSmoothie";

const index = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, error, isSuccess, data } = useSmoothieData(
    parseInt(id!)
  );
  const updateSmoothieMutation = useUpdateSmoothie();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SmoothieFormData>({
    resolver: yupResolver(SmoothieSchema),
  });

  useEffect(() => {
    if (isSuccess) {
      setValue("title", data.title);
      setValue("method", data.method);
      setValue("rating", data.rating);
    }
  }, [isSuccess]);

  const onSubmit = (data: SmoothieFormData) => {
    updateSmoothieMutation.mutate({ ...data, id: parseInt(id!) });
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
    <div className="w-1/2 px-5 py-3 mx-auto my-10 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-center">Update Smoothie</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          title="Title"
          name="title"
          errors={errors}
          placeholder="Type smoothie title"
          register={register}
        />
        <InputForm
          title="Method"
          name="method"
          errors={errors}
          placeholder="Type smoothie method"
          register={register}
        />
        <InputForm
          title="Rating"
          name="rating"
          errors={errors}
          placeholder="Type smoothie rating"
          register={register}
          type="number"
        />
        {updateSmoothieMutation.isSuccess && <p>Update Success</p>}
        {updateSmoothieMutation.isError && (
          // @ts-expect-error
          <p>{updateSmoothieMutation.error.message}</p>
        )}
        <button className="flex items-center justify-center w-1/3 py-2 my-10 ml-auto text-lg text-white rounded-sm bg-primary gap-x-2">
          {updateSmoothieMutation.isLoading && <ClipLoader size={25} />}
          Update
        </button>
      </form>
    </div>
  );
};

export default index;
