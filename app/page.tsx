import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  TrendingUp,
  Shield,
  Workflow,
  Users,
  Package,
} from "lucide-react";
import Link from "next/link";
import PageLayout from "@/components/page-layout";
import HeroSection from "@/components/hero-section";
import FeatureCard from "@/components/feature-card";

export default function HomePage() {
  return (
    <PageLayout currentPage="home" footerVariant="amber">
      {/* Enhanced Hero Banner */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-50 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Trusted by Bullion Professionals
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                The Only CRM Built for{" "}
                <span className="text-amber-500 relative">
                  Bullion
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C60 2 140 2 198 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-amber-300"
                    />
                  </svg>
                </span>{" "}
                Trading
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Stop juggling spreadsheets and sticky notes. Manage customers,
                track inventory, and monitor live spot prices—all in one
                powerful platform designed specifically for your business.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                  >
                    Start Free Trial
                    <span className="ml-2">→</span>
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-8 py-4 text-lg transition-all duration-200"
                  >
                    Watch Demo
                  </Button>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-500" />
                  <span>Setup in 15 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Right Column - Dashboard Preview */}
            <div className="relative lg:ml-8">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        VerifiedCRM
                      </h3>
                      <p className="text-sm text-gray-500">Dashboard</p>
                    </div>
                  </div>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                    LIVE
                  </span>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Today's Sales</p>
                    <p className="text-2xl font-bold text-gray-900">$47,230</p>
                    <p className="text-sm text-amber-600">+12.5% ↗</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Active Customers</p>
                    <p className="text-2xl font-bold text-gray-900">1,247</p>
                    <p className="text-sm text-amber-600">+8.2% ↗</p>
                  </div>
                </div>

                {/* Live Prices */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">
                    Live Spot Prices
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-amber-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        <span className="text-sm font-medium">Gold</span>
                      </div>
                      <span className="text-sm font-bold">$1,987.50</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-sm font-medium">Silver</span>
                      </div>
                      <span className="text-sm font-bold">$24.85</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center shadow-lg">
                <Users className="h-8 w-8 text-amber-700" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg">
                <Package className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Coin & Bullion Traders
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Running a bullion business comes with challenges—managing clients,
              tracking inventory, monitoring spot prices, and keeping workflows
              in order. Our CRM is designed specifically for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={TrendingUp}
              title="Real-Time Spot Pricing"
              description="Stay ahead with accurate, live market data."
            />
            <FeatureCard
              icon={Workflow}
              title="Integrated Workflows"
              description="Streamline gold buying, selling, and refining."
            />
            <FeatureCard
              icon={Shield}
              title="Secure Multi-User Access"
              description="Control permissions and protect sensitive data."
            />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All the Tools You Need, One Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              From customer management to sales automation, everything you need
              is in one secure dashboard:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureCard
              icon={CheckCircle}
              title="Customer management & CRM workflows"
              description=""
              variant="compact"
            />
            <FeatureCard
              icon={CheckCircle}
              title="Bullion integration with spot pricing & dynamic controls"
              description=""
              variant="compact"
            />
            <FeatureCard
              icon={CheckCircle}
              title="Inventory tracking with detailed reporting"
              description=""
              variant="compact"
            />
            <FeatureCard
              icon={CheckCircle}
              title="Multi-user logins with role-based permissions"
              description=""
              variant="compact"
            />
            <div className="md:col-span-2 flex justify-center">
              <FeatureCard
                icon={CheckCircle}
                title="Built-in messaging (SMS/email) for easy communication"
                description=""
                variant="compact"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Run Your Bullion Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              From customer acquisition to inventory management, our platform
              handles every aspect of your bullion operations with precision and
              ease.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Customer Management */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Advanced Customer Management
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Track every customer interaction, purchase history, and
                preferences. Build stronger relationships with detailed customer
                profiles and automated follow-ups.
              </p>
              <div className="space-y-3">
                <FeatureCard
                  icon={CheckCircle}
                  title="Complete customer profiles with purchase history"
                  description=""
                  variant="compact"
                />
                <FeatureCard
                  icon={CheckCircle}
                  title="Automated email and SMS communication"
                  description=""
                  variant="compact"
                />
                <FeatureCard
                  icon={CheckCircle}
                  title="Customer segmentation and targeting"
                  description=""
                  variant="compact"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-600 font-semibold text-sm">
                        JD
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">John Doe</p>
                      <p className="text-sm text-gray-500">Premium Customer</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">$45,230</p>
                    <p className="text-sm text-amber-600">+12% this month</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Total Orders</p>
                    <p className="font-bold text-gray-900">127</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Avg. Order</p>
                    <p className="font-bold text-gray-900">$2,340</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Last Visit</p>
                    <p className="font-bold text-gray-900">2 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-black">
                    Live Market Prices
                  </h4>
                  <span className="text-xs text-black bg-amber-200 px-2 py-1 rounded-full">
                    LIVE
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                      <span className="font-medium">Gold (XAU)</span>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-black">$1,987.50</p>
                      <p className="text-xs text-amber-600">+$12.30 (0.6%)</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <span className="font-medium">Silver (XAG)</span>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-black">$24.85</p>
                      <p className="text-xs text-gray-600">-$0.45 (1.8%)</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <span className="font-medium">Platinum (XPT)</span>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-black">$1,045.20</p>
                      <p className="text-xs text-amber-600">+$8.90 (0.9%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Real-time Pricing */}
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Real-Time Market Integration
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Stay ahead of the market with live spot prices and automated
                pricing updates. Set custom margins and pricing rules that
                adjust automatically.
              </p>
              <div className="space-y-3">
                <FeatureCard
                  icon={CheckCircle}
                  title="Live gold, silver, platinum, and palladium prices"
                  description=""
                  variant="compact"
                />
                <FeatureCard
                  icon={CheckCircle}
                  title="Custom pricing rules and margin controls"
                  description=""
                  variant="compact"
                />
                <FeatureCard
                  icon={CheckCircle}
                  title="Price alerts and market notifications"
                  description=""
                  variant="compact"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Inventory Management */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg">
                  <Package className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Smart Inventory Control
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Track every ounce with precision. Monitor purity, weight, lot
                numbers, and storage locations. Get alerts when inventory runs
                low.
              </p>
              <div className="space-y-3">
                <FeatureCard
                  icon={CheckCircle}
                  title="Detailed tracking by weight, purity, and lot"
                  description=""
                  variant="compact"
                />
                <FeatureCard
                  icon={CheckCircle}
                  title="Low stock alerts and reorder notifications"
                  description=""
                  variant="compact"
                />
                <FeatureCard
                  icon={CheckCircle}
                  title="Multi-location inventory management"
                  description=""
                  variant="compact"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-black">
                    Current Inventory
                  </h4>
                  <span className="text-xs text-black bg-amber-200 px-2 py-1 rounded-full">
                    24 Items
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div>
                      <p className="font-medium text-black">1oz Gold Eagles</p>
                      <p className="text-sm text-gray-500">
                        99.9% Pure • Lot #GE2024
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-black">47 oz</p>
                      <p className="text-xs text-amber-600">In Stock</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div>
                      <p className="font-medium text-black">Silver Bars 10oz</p>
                      <p className="text-sm text-gray-500">
                        99.9% Pure • Lot #SB1024
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-black">230 oz</p>
                      <p className="text-xs text-amber-600">In Stock</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div>
                      <p className="font-medium text-black">Platinum Coins</p>
                      <p className="text-sm text-gray-500">
                        99.95% Pure • Lot #PT0824
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-black">12 oz</p>
                      <p className="text-xs text-gray-600">Low Stock</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gray-300/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-500/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-200/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance leading-tight">
              Ready to Transform Your Bullion Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">
              Stop juggling spreadsheets, sticky notes, and outdated systems.
              Get the CRM built specifically for your bullion business and see
              results in your first week.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                Get Your Free Demo
                <span className="ml-2">→</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-8 py-4 text-lg transition-all duration-200"
              >
                Talk to an Expert
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-amber-400" />
              <span>Setup in under 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-amber-400" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-amber-400" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
