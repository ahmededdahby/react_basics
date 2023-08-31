import React, { FormEvent } from "react";
import { useForm, FieldValues } from "react-hook-form";
import Form from "./Form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//z used to manage the validation errors

const schema = z.object({
    name: z.string().min(3, { message: "this is not the default message" }),
    age: z
        .number({ invalid_type_error: "age field is required " })
        .min(13, { message: "this is not the defaul above of 13" }),
});
//define an interface type from z : hover mouse over formdata
type FormData = z.infer<typeof schema>;

const ReactForms = () => {
    const {
        register,
        handleSubmit,
        formState: { errors , isValid},
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name :
                </label>
                <input
                    id="name"
                    type="text"
                    className="form-control"
                    {...register("name")}
                />
                {/* error validation using zod */}
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="Age" className="form-label">
                    Age :
                </label>
                <input
                    {...register("age", { valueAsNumber: true , required: true})}
                    type="number"
                    id="Age"
                    className="form-control"
                />
                {/* error validation using zod */}
                {errors.age?.type === "invalid_type" && <p className="text-danger">thats a normal required error message</p>}
            </div>
            <button disabled={!isValid} className="btn btn-primary" type="submit">
                submit
            </button>
        </form>
    );
};

export default ReactForms;
