import { Link } from '@tanstack/react-router';
import { Brain, Clock, CheckCircle2, BarChart3, Shield, Rocket, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Matching',
    description: 'Advanced machine learning algorithms automatically match transactions with high accuracy',
  },
  {
    icon: Clock,
    title: 'Real-Time Processing',
    description: 'Process reconciliations continuously, not just at month-end',
  },
  {
    icon: BarChart3,
    title: 'Intelligent Reporting',
    description: 'Comprehensive dashboards and analytics for complete visibility',
  },
  {
    icon: Shield,
    title: 'Audit-Ready',
    description: 'Complete audit trails and compliance documentation built-in',
  },
];

const benefits = [
  'Reduce reconciliation time by up to 90%',
  'Eliminate manual data entry and matching',
  'Improve accuracy and reduce errors',
  'Scale effortlessly as transaction volumes grow',
  'Gain real-time visibility into cash positions',
  'Ensure compliance and audit readiness',
];

export default function ProductPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-background py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="gap-1.5 px-3 py-1">
                  <Rocket className="h-3.5 w-3.5" />
                  Launching Soon
                </Badge>
                <Badge variant="outline" className="gap-1.5 px-3 py-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  In Development
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                AI-Driven Bank Reconciliation
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl mb-6">
                Transform your reconciliation process with intelligent automation. Our AI-powered platform eliminates
                manual work, reduces errors, and provides real-time visibility into your financial data.
              </p>
              <p className="text-base text-muted-foreground mb-8 font-medium">
                🚀 Product development is currently in progress. Demo will be available soon!
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">
                  Express Interest <CheckCircle2 className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div>
              <img
                src="/assets/generated/bank-reconciliation-diagram.dim_1200x800.png"
                alt="AI Bank Reconciliation Platform - ABM Nexttech LLP"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">The Reconciliation Challenge</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Finance teams spend countless hours manually matching transactions, chasing down discrepancies, and
              preparing reconciliation reports. This manual process is time-consuming, error-prone, and doesn't scale
              with growing transaction volumes.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>There's a better way.</strong> Our AI-driven platform automates the entire reconciliation
              process, freeing your team to focus on strategic analysis and decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, powerful workflow that transforms reconciliation from a burden into a strategic advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold mb-4">
                  1
                </div>
                <CardTitle>Connect Your Data</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Seamlessly integrate with your bank feeds, ERP systems, and payment platforms. Our platform supports
                  all major financial systems and data formats.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold mb-4">
                  2
                </div>
                <CardTitle>AI Matches Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our machine learning engine automatically matches transactions across systems, learning from your
                  patterns and improving accuracy over time.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold mb-4">
                  3
                </div>
                <CardTitle>Review & Report</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Focus only on exceptions that need attention. Generate comprehensive reports and maintain complete
                  audit trails with a single click.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to automate and optimize your reconciliation process.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <Icon className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Key Benefits</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Organizations using our AI-driven reconciliation platform experience dramatic improvements in
                efficiency, accuracy, and financial visibility.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">90%</div>
                  <p className="text-muted-foreground">Reduction in reconciliation time</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-muted-foreground">Matching accuracy rate</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Continuous processing and monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Be Among the First to Experience It</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Our AI-powered platform is launching soon. Contact us to express your interest and be notified when the demo becomes available.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get Early Access</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
