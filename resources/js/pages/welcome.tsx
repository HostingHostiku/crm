import { Head, Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Layers,
  Users,
  Settings,
  BarChartHorizontalBig,
  ChevronDown,
} from "lucide-react";

/**
 * ✨  Monochrome landing — palette strictly ⚫️⚪️ + greys.
 */

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

/**
 * Top navigation with Login / Register buttons.
 */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-white">
          Hostiku
        </Link>
        <nav className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <Link href="#features" className="hover:text-white">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="#faqs" className="hover:text-white">
            FAQs
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href={route("login")}>Login</Link>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <Link href={route("register")}>Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 pt-32 text-white md:px-12 lg:pt-40">
      {/* radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(0,0,0,1)_70%)]" />
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={fade.hidden}
        animate={fade.show()}
      >
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Presenting the <span className="text-white">Next‑Gen</span> CRM
          Platform
        </h1>
        <p className="mt-6 text-lg text-zinc-400">
          Build your pipeline, automate follow‑ups and drive decisions with a
          truly modular platform.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200" asChild>
            <Link href={route("register")}>Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href={route("login")}>Login</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

/** Stats bar */
function Stats() {
  const data = [
    { value: "20M+", label: "API req /day" },
    { value: "94%", label: "Success rate" },
    { value: "10K+", label: "Users /month" },
  ];
  return (
    <section className="bg-zinc-950 py-14 text-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-around gap-12 px-6 text-center md:gap-24">
        {data.map((s, i) => (
          <motion.div key={s.value} custom={i} initial={fade.hidden} whileInView={fade.show(i)} viewport={{ once: true }}>
            <p className="text-3xl font-bold text-white">{s.value}</p>
            <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: Rocket, title: "Deploy in minutes", desc: "Workspace ready out‑of‑the‑box." },
  { icon: Users, title: "Realtime collaboration", desc: "Notes, mentions & live editing." },
  { icon: Layers, title: "Modular architecture", desc: "Enable only what you need." },
  { icon: Settings, title: "Powerful automations", desc: "Unlimited triggers & actions." },
];

function Features() {
  return (
    <section id="features" className="bg-black py-24 text-white">
      <motion.h2 className="mx-auto mb-16 max-w-xl px-6 text-center text-3xl font-bold sm:text-4xl" initial={fade.hidden} whileInView={fade.show()} viewport={{ once: true }}>
        Everything a modern CRM needs
      </motion.h2>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={title} custom={i} initial={fade.hidden} whileInView={fade.show(i)} viewport={{ once: true }}>
            <Card className="h-full bg-zinc-900 shadow">
              <CardHeader className="space-y-2">
                <Icon className="h-6 w-6 text-white" />
                <CardTitle className="text-lg font-semibold text-white">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-400">{desc}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function InsightSection() {
  return (
    <section className="bg-zinc-950 py-28 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center">
        <motion.img
          src="/images/chart-example-dark.png"
          alt="Analytics chart"
          className="w-full rounded-lg border border-zinc-800 shadow-xl lg:w-1/2"
          initial={fade.hidden}
          whileInView={fade.show(0)}
          viewport={{ once: true }}
        />
        <motion.div
          className="space-y-6 lg:w-1/2"
          initial={fade.hidden}
          whileInView={fade.show(1)}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold">Keep the sales awesome features</h3>
          <p className="text-zinc-400">
            Focus on product growth instead of infrastructure. Zero‑config
            deploys, blazing speed and exhaustive auditing tools in one place.
          </p>
          <div className="space-y-3 text-sm text-zinc-400">
            {[
              "Load time <1s",
              "Zero‑config deployments",
              "Granular access controls",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2">
                <BarChartHorizontalBig className="h-4 w-4" /> {f}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/** FAQ accordion (simple) */
function Faqs() {
  const faqs = [
    { q: "Is there a free trial?", a: "Yes, 14 days full‑feature trial no credit card required." },
    { q: "Can I cancel anytime?", a: "Absolutely — cancel or downgrade directly in your dashboard." },
    { q: "Do you offer support?", a: "We provide community and email support for all plans." },
  ];
  return (
    <section id="faqs" className="bg-black py-24 text-white">
      <motion.h2 className="mx-auto mb-12 max-w-xl px-6 text-center text-3xl font-bold sm:text-4xl" initial={fade.hidden} whileInView={fade.show()} viewport={{ once: true }}>
        Frequently Asked Questions
      </motion.h2>
      <div className="mx-auto max-w-2xl divide-y divide-zinc-800 px-6">
        {faqs.map((f) => (
          <details key={f.q} className="group py-6">
            <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-white">
              {f.q}
              <ChevronDown className="h-5 w-5 text-zinc-400 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-sm text-zinc-400">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: "Starter", price: 0, features: ["3 users", "1 module", "Community support"] },
    { name: "Growth", price: 29, features: ["Unlimited users", "Core modules", "Automations"] },
    { name: "Enterprise", price: 79, features: ["Premium modules", "Dedicated SLA", "Priority support"], highlight: true },
  ];
  return (
    <section id="pricing" className="bg-zinc-950 py-28 text-white">
      <motion.h2 className="mx-auto mb-16 max-w-xl px-6 text-center text-3xl font-bold sm:text-4xl" initial={fade.hidden} whileInView={fade.show()} viewport={{ once: true }}>
        Simple, transparent pricing
      </motion.h2>
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div key={p.name} custom={i} initial={fade.hidden} whileInView={fade.show(i)} viewport={{ once: true }}>
            <Card className={`h-full rounded-2xl bg-zinc-900 shadow ${p.highlight ? "border-2 border-white" : "border border-zinc-800"}`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl font-semibold text-white">
                  {p.name}
                  {p.highlight && <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs">Most popular</span>}
                </CardTitle>
                <p className="mt-4 text-4xl font-extrabold text-white">
                  ${p.price}
                  <span className="ml-1 text-base font-medium text-zinc-400">/mo</span>
                </p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-zinc-400">
                {p.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <Layers className="h-4 w-4" /> {f}
                  </div>
                ))}
                <Button className="mt-6 w-full" variant="outline">
                  Choose plan
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-black py-24 text-center text-white">
      <motion.h2 className="mx-auto max-w-2xl px-6 text-3xl font-bold sm:text-4xl" initial={fade.hidden} whileInView={fade.show()} viewport={{ once: true }}>
        Ready to accelerate your growth?
      </motion.h2>
      <p className="mx-auto mt-4 max-w-md px-6 text-zinc-400">
        Create an account today — 14‑day trial, no credit card required.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <Button size="lg" className="bg-white text-black hover:bg-zinc-200" asChild>
          <Link href={route("register")}>Start free trial</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href={route("login")}>Login</Link>
        </Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 text-zinc-400">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">Hostiku</h3>
          <p className="text-sm">© {new Date().getFullYear()} Hostiku Inc.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="#features" className="hover:text-white">Features</Link>
          <Link href="#pricing" className="hover:text-white">Pricing</Link>
          <Link href="#faqs" className="hover:text-white">FAQs</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href={route("login")}>Login</Link>
          <Link href={route("register")}>Register</Link>
        </div>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <>
      <Head title="Next‑Gen CRM" />
      <Nav />
      <Hero />
      <Stats />
      <Features />
      <InsightSection />
      <Pricing />
      <Faqs />
      <CTA />
      <Footer />
    </>
  );
}
