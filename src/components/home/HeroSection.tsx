import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/institutionalContent";
import heroImage from "@/assets/hero-bg.jpg";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const HeroSection = () => {
  const video = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    if (paused) video.current?.pause();
    else video.current?.play().catch(() => setPaused(true));
  }, [paused]);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => { if (preference.matches) setPaused(true); };
    preference.addEventListener("change", onChange);
    return () => preference.removeEventListener("change", onChange);
  }, []);
  return <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-authority px-6 pb-16 pt-32 text-authority-foreground md:min-h-[720px] md:px-12">
  <img src={heroImage} alt="" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
  <video ref={video} muted loop playsInline preload="metadata" poster={heroImage} aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover" src="/hero-video.webm" />
  <div className="hero-scrim absolute inset-0 -z-10" />
  <div className="mx-auto w-full max-w-6xl">
    <p className="mb-6 text-sm font-semibold">DAUGHTER OF ELLEN</p>
    <h1 className="max-w-3xl font-heading text-5xl leading-tight md:text-7xl">{brand.tagline}</h1>
    <p className="mt-7 max-w-2xl text-xl leading-relaxed md:text-2xl">{brand.descriptor}</p>
    <p className="mt-5 max-w-2xl text-base leading-relaxed text-authority-foreground/90">{brand.support}</p>
    <div className="mt-9 flex flex-wrap gap-3">
      <Button asChild variant="secondary" size="lg"><Link to="/get-support">Get Support</Link></Button>
      <Button asChild variant="outline" size="lg"><Link to="/learn">Learn &amp; Train</Link></Button>
      <Button asChild variant="outline" size="lg"><Link to="/partner">Partner With Us</Link></Button>
    </div>
  </div>
  <Button variant="outline" size="icon" className="absolute bottom-4 right-6" onClick={() => setPaused(!paused)} aria-label={paused ? "Play background video" : "Pause background video"} title={paused ? "Play background video" : "Pause background video"}>{paused ? <Play /> : <Pause />}</Button>
</section>;
};
export default HeroSection;
