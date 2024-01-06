import * as z from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

import { Textarea } from "@/components/ui/textarea";
import Select from "react-select";
import { cn } from "@/lib/utils";

import {
  WorkingDaysOptions,
  WorkingHoursOptions,
  CategoryOptions,
} from "../../utils";

const multiSelectSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const formSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  emailAddress: z.string().email(),
  phoneNumber: z.string().min(8),
  description: z.string().min(100),
  pfp: z.any(),
  categories: z.array(multiSelectSchema).min(1),
  workingDays: z.array(multiSelectSchema).min(1),
  workingHours: z.array(multiSelectSchema).min(1),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
});

const Settings = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      description: "",
      categories: [CategoryOptions[0]],
      workingDays: [WorkingDaysOptions[0], WorkingDaysOptions[1]],
      workingHours: [WorkingHoursOptions[0], WorkingHoursOptions[1]],
      urls: [],
    },
  });

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="md:grid md:grid-cols-2 gap-5"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prenom</FormLabel>
                <FormControl>
                  <Input placeholder="Prenom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input placeholder="Nom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numero de Telephone</FormLabel>
                <FormControl>
                  <Input placeholder="Numero de Telephone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Votre Biographie" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="pfp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Joindre une photo de profil</FormLabel>
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categories"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Choisir vos categories</FormLabel>
                <FormControl>
                  <Select
                    isMulti
                    name="categories"
                    options={CategoryOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workingDays"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Choisir vos jours de travail</FormLabel>
                <FormControl>
                  <Select
                    isMulti
                    name="workingDays"
                    options={WorkingDaysOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workingHours"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Choisir vos heures de Travail</FormLabel>
                <FormControl>
                  <Select
                    isMulti
                    name="workingHours"
                    options={WorkingHoursOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            {fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`urls.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                      URLs
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      Add links to your website, blog, or social media profiles.
                    </FormDescription>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => append({ value: "" })}
            >
              Add URL
            </Button>
          </div>
          <div className="col-span-2">
            <Button type="submit" className="w-full">
              Soumettre
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Settings;
