'use client';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { UseFormReturn, FieldValues } from "react-hook-form";
import { Input } from "./input";
import { Password } from "./password";

interface InputFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: any;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

export default function InputField<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  type = "text",
}: InputFieldProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {type === "password" ? <Password {...field} placeholder={placeholder} type={type} className="py-4" /> :
              <Input {...field} placeholder={placeholder} type={type} className="py-4" />
            }
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
