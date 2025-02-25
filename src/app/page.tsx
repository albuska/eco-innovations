import BusinessServices from "@/components/BusinessServices/BusinessServices";
import { ComprehensiveSolutions } from "@/components/ComprehensiveSolutions";
import { GetCommercialOffer } from "@/components/GetCommercialOffer";
import { HeroSection } from "@/components/HeroSection";
import { HowItWork } from "@/components/HowItWork";
import { LegalSupport } from "@/components/LegalSupport";
import { LegalSupportForEnergySector } from "@/components/LegalSupportForEnergySector";
import { OurServices } from "@/components/OurServices";
import { PermitProcessing } from "@/components/PermitProcessing";
import { WhatDoWeOffer } from "@/components/WhatDoWeOffer";
import { WhatWeProvide } from "@/components/WhatWeProvide";
import { WhyIsThisBeneficial } from "@/components/WhyIsThisBeneficial";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LegalSupport />
      <WhyIsThisBeneficial />
      <HowItWork />
      <WhatWeProvide />
      <GetCommercialOffer />
      <BusinessServices />
      <OurServices />
      <ComprehensiveSolutions />
      <GetCommercialOffer
        type="second"
        subtitle=<>
          “Статус “Активний споживач електроенергії/ <br /> “Виробник
          електроенергії”
        </>
      />
      <PermitProcessing />
      <LegalSupportForEnergySector />
      <WhatDoWeOffer/>
      <GetCommercialOffer
        subtitle=<>
          “Статус “Активний споживач електроенергії/ <br /> “Виробник
          електроенергії”
        </>
      />
    </>
  );
}
