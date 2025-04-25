"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  birthdate: z.string().refine(
    (date) => {
      const birthdate = new Date(date);
      const age = new Date().getFullYear() - birthdate.getFullYear();
      return age >= 18;
    },
    {
      message: "You must be at least 18 years old",
    }
  ),
  startdate: z.string().refine(
    (date) => {
      const startdate = new Date(date);
      return startdate > new Date();
    },
    {
      message: "Start date must be in the future",
    }
  ),
  gender: z.enum(["Male", "Female", "Other"], {
    required_error: "Please select  a gender",
  }),
  jobtype: z.array(z.enum(["Remote", "Hybrid", "Office"])).min(1, {
    message: "Please select at least one job type",
  }),
});

const RegisterPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      username: "",
      password: "",
      email: "",
      birthdate: "",
      startdate: "",
      gender: undefined,
      jobtype: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 w-4/5"
        >
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fullname:</FormLabel>
                <FormControl>
                  <Input placeholder="Fullname" {...field} />
                </FormControl>

                <FormMessage className="dark:text-amber-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username:</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>

                <FormMessage className="dark:text-amber-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>

                <FormMessage className="dark:text-amber-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthdate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Birthdate:</FormLabel>
                <FormControl>
                  <Input type="date" placeholder="Birthdate" {...field} />
                </FormControl>

                <FormMessage className="dark:text-amber-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startdate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Startdate:</FormLabel>
                <FormControl>
                  <Input type="date" placeholder="Birthdate" {...field} />
                </FormControl>

                <FormMessage className="dark:text-amber-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="validatLabel">gender</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    {...field}
                    className="flex flex-row space-x-2"
                  >
                    <RadioGroupItem value="Male" id="gender-male" />
                    <Label htmlFor="gender-male">Male</Label>
                    <RadioGroupItem value="Female" id="gender-female" />
                    <Label htmlFor="gender-female">Female</Label>
                    <RadioGroupItem value="Other" id="gender-other" />
                    <Label htmlFor="gender-other">Other</Label>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="validatError" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobtype"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jobtype:</FormLabel>
                <FormControl>
                  <div className="flex flex-row space-x-2 space-y-2">
                    <Checkbox
                      checked={field.value.includes("Remote")}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...field.value, "Remote"]
                          : field.value.filter(
                              (value: string) => value !== "Remote"
                            );
                        field.onChange(newValue);
                      }}
                    />
                    <Label>Remote</Label>
                    <Checkbox
                      checked={field.value.includes("Hybrid")}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...field.value, "Hybrid"]
                          : field.value.filter(
                              (value: string) => value !== "Hybrid"
                            );
                        field.onChange(newValue);
                      }}
                    />
                    <Label>Hybrid</Label>
                    <Checkbox
                      checked={field.value.includes("Office")}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...field.value, "Office"]
                          : field.value.filter(
                              (value: string) => value !== "Office"
                            );
                        field.onChange(newValue);
                      }}
                    />
                    <Label>Office</Label>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-black text-white dark:bg-amber-400"
            type="submit"
          >
            Submit
          </Button>
          <div className="flex flex-row space-x-2 mb-4">
            <Label>Already an account?</Label>
            <Link href="/login" className="text-amber-400">
              Login
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegisterPage;
