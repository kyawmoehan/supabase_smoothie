import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputForm from "../../components/form/InputForm";
import { useCreateSmoothie } from "../../hooks/useSmoothie";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

export const SmoothieSchema = yup.object({
  title: yup.string().required(),
  method: yup.string().required(),
  rating: yup.number().required(),
});

export type SmoothieFormData = {
  title: string;
  method: string;
  rating: string;
};

const index = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SmoothieFormData>({
    resolver: yupResolver(SmoothieSchema),
  });

  const createSmoothieMutation = useCreateSmoothie();

  const onSubmit = (data: SmoothieFormData) => {
    console.log(data);
    createSmoothieMutation.mutate(data);
  };

  useEffect(() => {
    if (createSmoothieMutation.isSuccess) {
      navigate("/");
    }
  }, [createSmoothieMutation.isSuccess]);

  return (
    <div className="w-1/2 px-5 py-3 mx-auto my-10 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-center">Create Smoothie</h2>
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

        <button className="flex items-center justify-center w-1/3 py-2 my-10 ml-auto text-lg text-white rounded-sm bg-primary gap-x-2">
          {createSmoothieMutation.isLoading && <ClipLoader size={20} />}
          Create
        </button>
      </form>
    </div>
  );
};

export default index;
