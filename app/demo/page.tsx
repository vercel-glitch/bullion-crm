import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TrendingUp, Users, Workflow, BarChart3, CheckCircle, Calendar, Clock, Video } from "lucide-react"
import Link from "next/link"
import PageLayout from "@/components/page-layout"
import HeroSection from "@/components/hero-section"
import FeatureCard from "@/components/feature-card"

export default function DemoPage() {
  return (
    <PageLayout currentPage="demo">
      <HeroSection
        title="See It in Action Before You Commit"
        subtitle="Get a live walkthrough of how our CRM can revolutionize your bullion operations."
      />

      {/* Demo Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What You'll See in the Demo</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={TrendingUp}
              title="Real-time Pricing in Action"
              description="Watch live spot prices update automatically and see how custom pricing rules are applied instantly to your inventory."
            />
            <FeatureCard
              icon={Users}
              title="Customer & Inventory Management"
              description="Explore how easy it is to track customers, manage deals, and monitor your gold, silver, and coin inventory in one place."
            />
            <FeatureCard
              icon={Workflow}
              title="Automated Workflows"
              description="See how routine buying, selling, and compliance processes can be automated to save you time and reduce errors."
            />
            <FeatureCard
              icon={BarChart3}
              title="Reporting Dashboards"
              description="Discover powerful analytics and reporting tools that provide actionable insights to maximize your profits."
            />
          </div>
        </div>
      </section>

      {/* Demo Scheduling */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Demo Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Schedule a Demo?</h2>

              <div className="space-y-4 mb-8">
                <FeatureCard
                  icon={CheckCircle}
                  title="Personalized Walkthrough"
                  description="Get a customized demo tailored to your specific bullion business needs."
                  variant="compact"
                />
                <FeatureCard
                  icon={CheckCircle}
                  title="Ask Questions Live"
                  description="Get immediate answers from our bullion CRM experts during the session."
                  variant="compact"
                />
                <FeatureCard
                  icon={CheckCircle}
                  title="See Real Data"
                  description="Experience the platform with realistic bullion trading scenarios and data."
                  variant="compact"
                />
                <FeatureCard
                  icon={CheckCircle}
                  title="No Commitment Required"
                  description="Explore all features with zero pressure and no strings attached."
                  variant="compact"
                />
              </div>
            </div>

            {/* Demo Scheduling Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Video className="h-6 w-6 text-orange-500" />
                  Schedule Your Demo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="demo-name">Name</Label>
                      <Input id="demo-name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="demo-business">Business</Label>
                      <Input id="demo-business" placeholder="Your business name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="demo-email">Email</Label>
                    <Input id="demo-email" type="email" placeholder="your@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="demo-phone">Phone</Label>
                    <Input id="demo-phone" type="tel" placeholder="Your phone number" />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Demo sessions typically last 30-45 minutes</span>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule My Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </PageLayout>
  )
}
