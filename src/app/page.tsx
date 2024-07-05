import { BestBusiness } from "@/components/BestBusiness";
import { Cards } from "@/components/Cards";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { ControlBilling } from "@/components/ControlBilling";
import { CounterData } from "@/components/CounterData";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OurHelp } from "@/components/OurHelp";
import { PaymentsMethods } from "@/components/PaymentsMethods";
import { Team } from "@/components/Team";
import Testimonials from "@/components/Testimonials/Testimonials";
import { TrackRecord } from "@/components/TrackRecord";
import WppFloating from "@/components/WppFloating/WppFloating";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <Cards/>
      <FirstBlock/>
      <OurHelp/>
      <BestBusiness />
      <TrackRecord/>
      <Testimonials/>
      <Team/>
      <WppFloating/>
      <PaymentsMethods />
      <CounterData />
      <ChooseYourCards />
      <ControlBilling />
      <Footer />
    </>
  )
}
