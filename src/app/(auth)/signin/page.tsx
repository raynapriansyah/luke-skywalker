"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useSession } from "~/hooks/use-session";

export default function SignInPage() {
  const router = useRouter();
  const { signIn } = useSession();

  const [email, setEmail] = useState<string>("");

  function handleLogin() {
    if (email.length) {
      signIn(email);
      router.replace("/");
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div className=" bg-white w-[612px] h-[789px] mt-28 rounded-2xl flex justify-center items-center">
        <Card className="w-[500px] h-[348px] border-transparent shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl">Sign in</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  className="rounded-3xl"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <Button
                onClick={handleLogin}
                className="bg-[#888888] w-full rounded-3xl"
              >
                Sign in
              </Button>
              <div className="flex justify-center mt-4">
                <Link href="#" className="text-md text-[#0249A6]">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="mt-4 text-center text-md">
              Don&apos;t have an account?{" "}
              <Link href="#" className=" text-[#0249A6]">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
