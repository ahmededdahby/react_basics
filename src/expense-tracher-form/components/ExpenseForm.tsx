import React from "react";
import Cateogories from "../Categories";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Props{
    onSubmit : (data : ExpenseFormData) => void;
}


const shema = z.object({
    description: z.string().min(3, {}).max(1000),
    amount: z.number({ invalid_type_error: "amount is required" }).min(0.01).max(1000),
    category: z.enum(Cateogories, {
        errorMap: () => ({ message: "Category is required" })
    })
})
type ExpenseFormData = z.infer<typeof shema>



const ExpenseForm = ({onSubmit}:Props) => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm<ExpenseFormData>({ resolver: zodResolver(shema) })
    return (
        <form onSubmit={handleSubmit(data => {
            onSubmit(data);
            reset();
        }
        )}>
            <div className="py-2">
                <label htmlFor="Discription" className="form-label">
                    Discription :{" "}
                </label>
                <input {...register('description')} id="Discription" type="text" className="form-control" />
                {errors.description && <p className="text-danger">{errors.description.message}</p>}
            </div>
            <div className="py-2">
                <label htmlFor="Amount" className="form-label">
                    Amount :{" "}
                </label>
                <input {...register('amount', { valueAsNumber: true })} id="Amount" type="text" className="form-control" />
                {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
            </div>
            <div className="py-2">
                <label htmlFor="Category" className="form-label">
                    Category :{" "}
                </label>
                <select {...register('category')} id="Category" className="form-select">
                    <option value="">Select Category</option>
                    {Cateogories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                {errors.category && <p className="text-danger">{errors.category.message}</p>}
            </div>
            <div className="d-flex">
                <button type="submit" className="btn btn-primary mt-3 mx-auto">submit</button>
            </div>

        </form>
    );
};

export default ExpenseForm;
