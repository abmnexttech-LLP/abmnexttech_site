import { Link } from '@tanstack/react-router';
import { FileText, Settings, Users, Lightbulb, ArrowRight, Wrench, HeadphonesIcon, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: FileText,
    title: 'Finance Operations Consulting',
    description:
      'Comprehensive analysis and optimization of your financial operations, from accounts payable to treasury management. We identify inefficiencies and design streamlined processes that reduce costs and improve accuracy.',
  },
  {
    icon: Settings,
    title: 'Reconciliation Process Design',
    description:
      'Expert design and implementation of robust reconciliation frameworks tailored to your business needs. We establish best practices, controls, and automation strategies to ensure accuracy and compliance.',
  },
  {
    icon: Wrench,
    title: 'Implementation Services',
    description:
      'End-to-end implementation support for financial systems and process transformations. We handle configuration, integration, data migration, and user training to ensure successful deployment and adoption.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support & Maintenance',
    description:
      'Ongoing technical support and system maintenance to keep your operations running smoothly. Our team provides troubleshooting, updates, optimization, and continuous improvement services.',
  },
  {
    icon: Code,
    title: 'Custom Development',
    description:
      'Tailored software development services to build solutions that fit your unique requirements. We develop custom integrations, automation tools, and fintech applications using modern technologies.',
  },
  {
    icon: Lightbulb,
    title: 'Product Engineering',
    description:
      'Full-cycle product development from concept to deployment. We build scalable, secure fintech applications that integrate seamlessly with your existing systems and workflows.',
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-background py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Expert Consulting Services
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              ABM Nexttech LLP combines deep financial operations expertise with cutting-edge technology to deliver
              transformative consulting services including implementation, support, and custom development that drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="h-12 w-12 mb-4 text-primary" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Consulting Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful outcomes and lasting transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery</h3>
              <p className="text-sm text-muted-foreground">
                Deep dive into your current processes, systems, and pain points
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-sm text-muted-foreground">
                Develop tailored solutions and roadmaps aligned with your goals
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Implement</h3>
              <p className="text-sm text-muted-foreground">Execute the plan with hands-on support and guidance</p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimize</h3>
              <p className="text-sm text-muted-foreground">
                Continuous improvement and ongoing support for sustained success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <img
                src="/assets/generated/bank-reconciliation-diagram.dim_1200x800.png"
                alt="Reconciliation Process Framework - ABM Nexttech LLP"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Specialized Reconciliation Expertise
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our reconciliation consulting services help organizations establish robust, automated processes that
                ensure accuracy, reduce risk, and free up valuable resources.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Bank and cash reconciliation frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Intercompany and GL reconciliation processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Automated matching and exception management</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Compliance and audit trail establishment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Let's Discuss Your Needs</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a consultation to explore how ABM Nexttech LLP can help transform your financial operations.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
