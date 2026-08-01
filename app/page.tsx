import Hero from "@/components/Hero";
import Lightfall from "@/components/Lightfall";
import PillNav from "@/components/PillNav";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex justify-center absolute -z-10">
        <Lightfall
          colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
          backgroundColor="#0A29FF"
          speed={0.5}
          streakCount={2}
          streakWidth={1}
          streakLength={1}
          glow={1}
          density={0.6}
          twinkle={1}
          zoom={3}
          backgroundGlow={0.5}
          opacity={1}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={1}
          color1="#A6C8FF"
          color2="#5227FF"
          color3="#FF9FFC"
        />
      </div>
      <main className="flex justify-center items-center">
        <PillNav
          logo="/teslaLogo.png"
          logoAlt="Tesla EG Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          initialLoadAnimation
        />
        <Hero />
      </main>
    </>
  );
}
