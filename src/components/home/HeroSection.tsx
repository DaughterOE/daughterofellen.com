import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/institutionalContent";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-poster.jpg";
import familyImage from "@/assets/hero-family.jpg";
import highFiveImage from "@/assets/hero-students-highfive.jpg";
import lawnImage from "@/assets/hero-students-lawn.jpg";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const SLIDE_DELAY = 5000;

const SLIDES = [
  { key: "video", label: "Show the background film" },
  { key: "family", label: "Show the family photo" },
  { key: "highfive", label: "Show the students photo" },
  { key: "lawn", label: "Show the study group photo" },
];

const HeroSection = () => {
  const video = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [viewport, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: SLIDE_DELAY, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);

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

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins() as unknown as { autoplay?: { play?: () => void; stop?: () => void } };
    const player = autoplay.autoplay;
    if (!player) return;
    if (paused) player.stop?.();
    else player.play?.();
  }, [emblaApi, paused]);

  return <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-authority px-6 pb-16 pt-32 text-authority-foreground md:min-h-[720px] md:px-12">
  <div ref={viewport} aria-label="Daughter of Ellen introduction photos" className="absolute inset-0 -z-20 overflow-hidden">
    <div className="flex h-full">
      <div className="relative h-full min-w-0 flex-[0_0_100%] overflow-hidden">
        <video ref={video} muted loop playsInline preload="auto" poster={heroImage} aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" src="/hero-video.webm" />
      </div>
      <div className="relative h-full min-w-0 flex-[0_0_100%] overflow-hidden">
        <img src={familyImage} alt="A parent and young child looking at a laptop screen together at home" className="absolute inset-0 h-full w-full object-cover" decoding="async" />
      </div>
      <div className="relative h-full min-w-0 flex-[0_0_100%] overflow-hidden">
        <img src={highFiveImage} alt="Students celebrating with a high five outside a university building" className="absolute inset-0 h-full w-full object-cover" decoding="async" />
      </div>
      <div className="relative h-full min-w-0 flex-[0_0_100%] overflow-hidden">
        <img src={lawnImage} alt="Students sitting in a circle on a lawn, studying together around a laptop" className="absolute inset-0 h-full w-full object-cover" decoding="async" />
      </div>
    </div>
  </div>
  <div className="hero-scrim absolute inset-0 -z-10" />
  <div className="mx-auto w-full max-w-6xl">
    <p className="mb-6 text-sm font-semibold">DAUGHTER OF ELLEN</p>
    <h1 className="max-w-3xl font-heading text-5xl leading-tight md:text-7xl">{brand.tagline}</h1>
    <p className="mt-7 max-w-2xl text-xl leading-relaxed md:text-2xl">{brand.descriptor}</p>
    <p className="mt-5 max-w-2xl text-base leading-relaxed text-authority-foreground/90">{brand.support}</p>
    <div className="mt-9 flex flex-wrap gap-3">
      <Button asChild variant="secondary" size="lg"><Link to="/get-support">Get Support</Link></Button>
      <Button asChild variant="outline" size="lg" className="text-secondary"><Link to="/learn">Learn &amp; Train</Link></Button>
      <Button asChild variant="outline" size="lg" className="text-secondary"><Link to="/partner">Partner With Us</Link></Button>
    </div>
  </div>
  <div className="absolute bottom-5 right-6 z-10 flex items-center gap-4">
    <div className="flex items-center gap-2">
      {SLIDES.map((slide, i) => <button
        key={slide.key}
        type="button"
        onClick={() => emblaApi?.scrollTo(i)}
        aria-label={slide.label}
        aria-current={selected === i}
        className={cn(
          "h-2 w-2 rounded-full border border-authority-foreground/70 transition-opacity",
          selected === i ? "bg-authority-foreground opacity-100" : "bg-transparent opacity-60 hover:opacity-100"
        )}
      />)}
    </div>
    <Button variant="outline" size="icon" onClick={() => setPaused(!paused)} aria-label={paused ? "Play background video" : "Pause background video"} title={paused ? "Play background video" : "Pause background video"}>{paused ? <Play /> : <Pause />}</Button>
  </div>
</section>;
};
export default HeroSection;
