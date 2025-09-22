"use client";

import { useId } from "react";
import { UserRoundPlus, UserPlus } from "lucide-react";
import { subjects } from "@/lib/Subject";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dropdown } from "./dropdown-menu";
import { useState } from "react";

export function AddForm() {
  const id = useId();
  const [role, setRole] = useState("");
  function getTheRole(_role) {
    setRole(_role);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="m-2 mt-5">
          <span>
            <UserPlus />
          </span>
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-2 ">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border "
            aria-hidden="true"
          >
            <UserRoundPlus className="opacity-80" size={16} />
          </div>
          <DialogHeader>
            <DialogTitle className="text-left">Create a new user</DialogTitle>
            <DialogDescription className="text-left">
              Add new student,admin, or teacher.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className=" space-y-4">
            <div className="flex min-w-full">
              <div className="*:not-first:mt-2 col-start w-full pr-2">
                <Label htmlFor={`name-${id}`}>Role of user</Label>
                <Dropdown setRole={getTheRole} />
              </div>
              <div
                className={
                  role == "admin"
                    ? "hidden"
                    : "*:not-first:mt-2 col-start w-full pl-2"
                }
              >
                <Label htmlFor={`name-${id}`}>
                  {role.charAt(0).toUpperCase() + role.slice(1)} ID
                </Label>
                <Input id={`name-${id}`} type="text" required />
              </div>
            </div>

            <div className="flex min-w-full">
              <div className="*:not-first:mt-2 col-start w-full pr-2">
                <Label htmlFor={`name-${id}`}>First Name</Label>
                <Input id={`name-${id}`} type="text" required />
              </div>

              <div className="*:not-first:mt-2 col-end-1 w-full pl-2">
                <Label htmlFor={`name-${id}`}>Middle Name</Label>
                <Input id={`name-${id}`} type="text" required />
              </div>
            </div>

            <div className="flex min-w-full">
              <div className="*:not-first:mt-2 col-start w-full pr-2">
                <Label htmlFor={`name-${id}`}>Last Name</Label>
                <Input id={`name-${id}`} type="text" required />
              </div>

              <div className="*:not-first:mt-2 col-end-1 w-full pl-2">
                <Label htmlFor={`name-${id}`}>Birth Date</Label>
                <Input id={`name-${id}`} type="date" required />
              </div>
            </div>
          </div>
          <div>
            <Label htmlFor={`name-${id}`}>Choose the subject</Label>
            {subjects.map((subject) => (
              <div className="flex items-center  gap-2">
                <div className="flex">
                  <Checkbox id={`primary-${id}`} />
                  <Label
                    htmlFor={`primary-${id}`}
                    className="text-muted-foreground font-normal"
                  >
                    {subject}
                  </Label>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id={`primary-${id}`} />
            <Label
              htmlFor={`primary-${id}`}
              className="text-muted-foreground font-normal"
            >
              confirm details
            </Label>
          </div>
          <Button type="button" className="w-full">
            Create account
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
