"use client";

import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "@formspree/react";

import {Toaster,toast} from 'sonner'



const Form = () => {
  const [state, handleSubmit] = useForm("xgegryyp");  //work.vishalmeti@gmail.com
  // const [state, handleSubmit] = useForm("mdoqyzzk");  //vishalmeti8@gmail.com

  if (state.succeeded) {
    toast.success("Thanks for contacting! We will get in touch very soon")
  }
  else if (state.errors) {
    toast.error("Error connecting with developer. Please try later!")
  }
  return (
    <form
      className="flex flex-col gap-y-4"
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="relative flex items-center">
        <Input
          name="Name"
          type="name"
          id="userName"
          placeholder="Name"
          required={true}

        />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          name="Email"
          type="email"
          id="email"
          placeholder="Email"
          required={true}

        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea
          name="Message"
          id="message"
          placeholder="Type Your Message Here"

        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button
        className="flex items-center gap-x-1 max-w-[166px]"
        disabled={state.submitting}
        type="submit"
      >
        Let's Talk <ArrowRightIcon size={20} />
      </Button>
      <Toaster position="top-center"  richColors/>
    </form>
  );
};

export default Form;
