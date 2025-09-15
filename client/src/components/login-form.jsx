import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";
import { useState } from "react";

export function LoginForm({ className, ...props }) {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your usename and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="username">User Id</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="A202109921"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <div className="relative w-full ">
                  <Input
                    id="password"
                    type={showPassword ? "password" : "text"}
                    required
                    className="pr-10"
                  />
                  {showPassword ? (
                    <EyeOff
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <Eye
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
