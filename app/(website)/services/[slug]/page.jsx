// app/(website)/services/[slug]/page.jsx
import { notFound } from 'next/navigation';
import serviceDetails from '../../../../data/serviceDetails'; 

import ServiceHero from '../../../../components/service-details/ServiceHero';
import ServiceOverview from '../../../../components/service-details/ServiceOverview';
import ServiceHighlights from '../../../../components/service-details/ServiceHighlights';
import ServiceFeatures from '../../../../components/service-details/ServiceFeatures';
import ServiceBenefits from '../../../../components/service-details/ServiceBenefits';
import ServiceProcess from '../../../../components/service-details/ServiceProcess';
import ServiceMaterials from '../../../../components/service-details/ServiceMaterials';
import ServiceApplications from '../../../../components/service-details/ServiceApplications';
import ServiceStatistics from '../../../../components/service-details/ServiceStatistics';
import ServiceIndustries from '../../../../components/service-details/IndustriesServed';
import ServiceGallery from '../../../../components/service-details/ServiceGallery';
import ServiceFAQ from '../../../../components/service-details/ServiceFAQ';
import RelatedServices from '../../../../components/service-details/RelatedServices';
import ServiceCTA from '../../../../components/service-details/ServiceCTA';

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;   // ← This is the fix

  console.log("🔍 Received slug:", slug);

  const service = serviceDetails[slug];

  if (!service) {
    console.error("❌ Service not found for slug:", slug);
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero data={service.hero} />
      <ServiceOverview data={service.overview} />
      <ServiceStatistics data={service.statistics} />
      <ServiceHighlights data={service.highlights} />
      <ServiceFeatures data={service.features} />
      <ServiceBenefits data={service.benefits} />
      <ServiceProcess data={service.process} />
      <ServiceMaterials data={service.materials} />
      <ServiceApplications data={service.applications} />
      <ServiceIndustries data={service.industries} />
      <ServiceGallery data={service.gallery} />
      <ServiceFAQ data={service.faqs} />
      <RelatedServices services={service.relatedServices} />
      <ServiceCTA data={service.cta} />
    </div>
  );
}