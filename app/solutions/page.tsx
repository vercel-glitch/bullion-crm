import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  TrendingUp,
  Package,
  BarChart3,
  Shield,
  Workflow,
  Store,
  CreditCard,
  Calculator,
  MessageSquare,
  FileCheck,
  Globe,
} from "lucide-react"
import Link from "next/link"
import PageLayout from "@/components/page-layout"
import HeroSection from "@/components/hero-section"
import FeatureCard from "@/components/feature-card"

export default function SolutionsPage() {
  return (
    <PageLayout currentPage="solutions">
      <HeroSection
        title="Smart Tools for Smarter Bullion Businesses"
        subtitle="Our platform is engineered exclusively for coin and bullion professionals—combining powerful CRM features with trading integrations, real-time pricing, and workflow automation."
      />

      {/* Core Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Users}
              title="CRM & Customer Management"
              description="Track every customer, every deal, and every interaction with ease."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Bullion & Spot Price Integration"
              description="Access live pricing data and apply custom pricing rules instantly."
            />
            <FeatureCard
              icon={Package}
              title="Inventory & Stock Control"
              description="Manage gold, silver, and coins—track purity, weight, and lots all in one system."
            />
            <FeatureCard
              icon={BarChart3}
              title="Reports & Analytics"
              description="Gain actionable insights that maximize profits and minimize risks."
            />
            <FeatureCard
              icon={Shield}
              title="User Roles & Permissions"
              description="Multi-user logins with secure, role-based access for teams of any size."
            />
            <FeatureCard
              icon={Workflow}
              title="Workflow Automation"
              description="Automate routine buying, selling, and compliance processes."
            />
          </div>
        </div>
      </section>

      {/* Extended Integrations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Extended Integrations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Connect with the tools you already use. Our system integrates seamlessly with:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-4 p-6 bg-card rounded-lg border">
              <Store className="h-8 w-8 text-orange-500 flex-shrink-0" />
              <span className="font-medium">E-commerce stores</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-card rounded-lg border">
              <CreditCard className="h-8 w-8 text-orange-500 flex-shrink-0" />
              <span className="font-medium">Payment systems</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-card rounded-lg border">
              <Calculator className="h-8 w-8 text-orange-500 flex-shrink-0" />
              <span className="font-medium">QuickBooks & accounting software</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-card rounded-lg border">
              <MessageSquare className="h-8 w-8 text-orange-500 flex-shrink-0" />
              <span className="font-medium">Messaging platforms (SMS/email)</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-card rounded-lg border">
              <FileCheck className="h-8 w-8 text-orange-500 flex-shrink-0" />
              <span className="font-medium">Compliance and AML tools</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-card rounded-lg border">
              <Globe className="h-8 w-8 text-orange-500 flex-shrink-0" />
              <span className="font-medium">Global trading platforms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Professionals */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Trusted by Professionals</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Whether you're running a local coin shop or an international bullion operation, our platform adapts to your
            business.
          </p>
          <Link href="/demo">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              Schedule a Demo
            </Button>
          </Link>
        </div>
      </section>

    </PageLayout>
  )
}
