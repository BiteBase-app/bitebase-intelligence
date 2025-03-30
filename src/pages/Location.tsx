
import { Layout } from "@/components/Layout";
import { LocationFeatures } from "@/components/LocationFeatures";

const Location = () => {
  return (
    <Layout>
      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Location Analysis</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Understand your restaurant's location, surrounding market, and competition to make data-driven decisions.
          </p>
          
          <LocationFeatures />
        </div>
      </div>
    </Layout>
  );
};

export default Location;
