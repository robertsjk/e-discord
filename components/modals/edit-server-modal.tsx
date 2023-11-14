"use client";
<<<<<<< HEAD
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { useForm } from "react-hook-form";
=======
import { useModal } from "@/hooks/use-modal-store";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
>>>>>>> v-2
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
<<<<<<< HEAD
=======
import { Button } from "../ui/button";
>>>>>>> v-2
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
<<<<<<< HEAD
import { Button } from "../ui/button";
import FileUpload from "../file-upload";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
=======
import FileUpload from "../file-upload";
>>>>>>> v-2
import { useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(1, {
<<<<<<< HEAD
    message: "Server name is required",
=======
    message: "Server name is requires",
>>>>>>> v-2
  }),
  imageUrl: z.string().min(1, {
    message: "Server image is required",
  }),
});

<<<<<<< HEAD
export const EditServerModal = () => {
  const router = useRouter();
  const { isOpen, type, onClose, data } = useModal();

  const isModalOpen = isOpen && type === "editServer";
  const { server } = data;
=======
const EditServerModal = () => {
  const router = useRouter();
  const {
    isOpen,
    type,
    onClose,
    data: { server },
  } = useModal();

  const isModalOpen = isOpen && type === "editServer";
>>>>>>> v-2

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  useEffect(() => {
    if (server) {
      form.setValue("name", server.name);
      form.setValue("imageUrl", server.imageUrl);
    }
  }, [server, form]);

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/servers/${server?.id}`, values);

      form.reset();
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden rounded-md">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Customize your server
          </DialogTitle>
<<<<<<< HEAD
          <DialogDescription className="text-center text-zinc-500">
=======
          <DialogDescription className="text-center text-stone-600">
>>>>>>> v-2
            Give your server a personality with a name and an image. You can
            always change it later.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
<<<<<<< HEAD
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <div className="flex items-center justify-center text-center">
=======
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-8 px-6">
              <div className="flex items-center justify-center">
>>>>>>> v-2
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FileUpload
                          endpoint="serverImage"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
<<<<<<< HEAD
=======
                      <FormMessage />
>>>>>>> v-2
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
<<<<<<< HEAD
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
=======
                    <FormLabel className="uppercase text-sm font-bold text-stone-600">
>>>>>>> v-2
                      Server Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
<<<<<<< HEAD
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter server name"
=======
                        placeholder="Enter server name"
                        className="bg-stone-200 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
>>>>>>> v-2
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
<<<<<<< HEAD
            <DialogFooter className="bg-gray-100 px-6 py-4">
=======
            <DialogFooter className="mt-5 px-6 py-4">
>>>>>>> v-2
              <Button disabled={isLoading} variant="primary">
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
<<<<<<< HEAD
=======

export default EditServerModal;
>>>>>>> v-2
