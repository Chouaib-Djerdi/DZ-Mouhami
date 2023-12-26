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

const CategoryOptions = [
  { value: "civil", label: "Civil Law" },
  { value: "criminal", label: "Criminal Law" },
  { value: "family", label: "Family Law" },
];

const WorkingDaysOptions = [
  { value: "dimanche", label: "Dimanche" },
  { value: "lundi", label: "Lundi" },
  { value: "mardi", label: "Mardi" },
  { value: "mercredi", label: "Mercredi" },
  { value: "jeudi", label: "Jeudi" },
  { value: "venderedi", label: "Venderedi" },
  { value: "samedi", label: "Samedi" },
];

const WorkingHoursOptions = [
  { value: "8-10", label: "8h-10h" },
  { value: "10-12", label: "10h-12h" },
  { value: "14-16", label: "14h-16h" },
  { value: "16-18", label: "16h-18h" },
  { value: "18-20", label: "18h-20h" },
];

const multiSelectSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const formSchema = z
  .object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    emailAddress: z.string().email(),
    phoneNumber: z.string().min(8),
    description: z.string().min(100),
    password: z.string().min(8),
    passwordConfirm: z.string(),
    pfp: z.any(),
    categories: z.array(multiSelectSchema),
    workingDays: z.array(multiSelectSchema),
    workingHours: z.array(multiSelectSchema),
    urls: z
      .array(
        z.object({
          value: z.string().url({ message: "Please enter a valid URL." }),
        })
      )
      .optional(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    { message: "Passwords do not match", path: ["passwordConfirm"] }
  );

const SignInPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      description: "",
      password: "",
      passwordConfirm: "",
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
    <div className="flex justify-center m-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-4xl w-full grid grid-cols-2 gap-5"
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
                    defaultValue={[CategoryOptions[0]]}
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
                    defaultValue={[
                      WorkingDaysOptions[0],
                      WorkingDaysOptions[1],
                    ]}
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
                    defaultValue={[
                      WorkingHoursOptions[0],
                      WorkingHoursOptions[1],
                    ]}
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de Passe</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Mot de Passe"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmer Mot de Passe</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirmer Mot de Passe"
                    type="password"
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
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignInPage;
