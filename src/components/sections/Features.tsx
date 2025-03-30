
import {
  Search,
  MapPin,
  TrendingUp,
  Users,
  DollarSign,
  LineChart,
  Target,
  Coffee,
} from "lucide-react";

const features = [
  {
    name: "Location Intelligence",
    description:
      "Analyze foot traffic, competition, and demographics to find the perfect location for your restaurant.",
    icon: MapPin,
  },
  {
    name: "Market Analysis",
    description:
      "Research local market trends, identify gaps, and discover untapped opportunities in your area.",
    icon: Search,
  },
  {
    name: "Consumer Insights",
    description:
      "Understand customer preferences, dining habits, and expectations for your target demographic.",
    icon: Users,
  },
  {
    name: "Price Optimization",
    description:
      "Set competitive prices that maximize profit margins while remaining attractive to your target audience.",
    icon: DollarSign,
  },
  {
    name: "Trend Forecasting",
    description:
      "Stay ahead of the curve with AI-powered predictions on upcoming food trends and consumer preferences.",
    icon: TrendingUp,
  },
  {
    name: "Competitive Analysis",
    description:
      "Benchmark against competitors and identify your unique selling proposition in the market.",
    icon: Target,
  },
  {
    name: "Performance Tracking",
    description:
      "Monitor key business metrics and get actionable insights to improve your restaurant's performance.",
    icon: LineChart,
  },
  {
    name: "Menu Engineering",
    description:
      "Design data-driven menus that highlight profitable items and cater to customer preferences.",
    icon: Coffee,
  },
];

export function Features() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-bite-600">
            Comprehensive Analytics
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to build a successful restaurant
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            BiteBaseAI provides restaurateurs with actionable insights across all aspects of the business, from location selection to menu optimization.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-bite-100 text-bite-600">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Features;
