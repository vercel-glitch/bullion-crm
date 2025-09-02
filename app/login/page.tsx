import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
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
            <p className="text-muted-foreground mt-2">Welcome back! Log in to manage your bullion business.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" className="h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" className="h-12" />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-12 bg-amber-500 hover:bg-amber-600 text-white font-semibold"
            >
              Login
            </Button>
          </form>

          <div className="flex items-center justify-center space-x-4 text-sm mt-6">
            <Link href="/forgot-password" className="text-orange-500 hover:text-orange-600 transition-colors">
              Forgot Password?
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/request-access" className="text-orange-500 hover:text-orange-600 transition-colors">
              Request Access
            </Link>
          </div>

          <div className="border-t mt-6 pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">Don't have an account yet?</p>
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
  )
}
