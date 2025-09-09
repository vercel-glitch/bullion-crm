"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [workspaceError, setWorkspaceError] = useState("");
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.currentTarget);
    const workspace = formData.get("workspace") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Clear previous errors
    setWorkspaceError("");

    // Check if all fields are filled
    if (!workspace) {
      setWorkspaceError("Please enter your workspace name");
      return;
    }

    // Check if workspace contains "priority"
    if (!workspace.toLowerCase().includes("priority")) {
      setWorkspaceError("Invalid workspace name");
      return;
    }

    // Redirect to VerifiedCRM login
    window.location.href = "https://priority.verifiedcrm.com/login";
  };
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Back to Home Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to VerifiedCRM
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg border p-8">
          <div className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full">
                <Shield className="h-8 w-8 text-orange-500" />
              </div>
            </div>
            <h1 className="text-2xl font-bold">Secure Access to Your CRM</h1>
            <p className="text-muted-foreground mt-2">
              Welcome back! Go to your app to manage your bullion business.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="workspace">Workspace</Label>
              <Input
                id="workspace"
                name="workspace"
                type="text"
                placeholder="Enter your workspace name"
                className={`h-12 ${workspaceError ? "border-red-500" : ""}`}
                required
              />
              {workspaceError && (
                <p className="text-sm text-red-500 mt-1">{workspaceError}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
            >
              Go To App
            </Button>
          </form>

          <div className="border-t mt-6 pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Don't have an account yet?
              </p>
              <Link href="/demo">
                <Button variant="outline" className="w-full bg-transparent">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Your data is protected with enterprise-grade security.
            <br />
            All connections are encrypted and monitored.
          </p>
        </div>
      </div>
    </div>
  );
}
