"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm, useWatch, Control } from "react-hook-form";

function Error({ message }: { message: string }) {
    return (
        <div className="rounded  border border-red-600 bg-red-50 p-1 text-red-600">
            {message}
        </div>
    );
}

export default function Index() {
  const { register, handleSubmit, watch, formState: {errors} } = useForm<any>();

  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log(data)
  }
  // list of restaurants
  return (
    <>  <div
    className=" h-screen w-full items-center ">
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-2/3 flex-col gap-2 rounded-lg  p-8 shadow">
        <label htmlFor="email">Restaurant Name</label>
        <input
            className="rounded border border-neutral-200  p-1"
            type="name"
            id="name"
            name="name"
            {...register("name", {
              required: { value: true, message: 'name Required' },
            })}
            
        />
         {errors.name && <Error message={errors.name.message!} />}


        <label htmlFor="rest-desc">Restaurant Desc</label>
        <input
            className="rounded border border-neutral-200  p-1"
            type="text"
            id="desc"
            name="desc"
            {...register("description", {
              required: { value: true, message: 'desc Required' },
            })}
        />
         {errors.description && <Error message={errors.description.message!} />}


        <label htmlFor="restaurant-logo">Restaurant Logo</label>
        <input
            className="rounded border border-neutral-200  p-1"
            type="text"
            id="logo"
            name="logo"
            {...register("logo", {
              required: { value: true, message: 'logo Required' },
            })}
        />
        {errors.logo && <Error message={errors.logo.message!} />}


        <label htmlFor="Type">Restaurant Type</label>
        <input
            className="rounded border border-neutral-200  p-1"
            type="text"
            id="type"
            name="type"
            placeholder="restaurant type"
            {...register("type", {
              required: { value: true, message: 'type Required' },
            })}
        />
         {errors.type && <Error message={errors.type.message!} />}


        <label htmlFor="cost for two">cost For Two</label>
        <input
            className="rounded border border-neutral-200  p-1"
            type="text"
            id="costfortwo"
            name="costfortwo"
            {...register("cost_for_two")}
        />
        <button className="mt-5 rounded bg-green-500 p-2 text-neutral-50    ">
            Submit
        </button>
    </form>
</div> </>
  );
}

