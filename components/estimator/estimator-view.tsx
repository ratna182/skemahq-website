"use client";

import { useState, useMemo } from "react";
import {
  Layout,
  Zap,
  Store,
  Hammer,
  Check,
  Calculator,
  Send,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
  SlidersHorizontal,
  Layers,
  Building2,
  FileCheck,
  MessageSquare,
  HelpCircle,
} from "lucide-react";
import Container from "@/components/ui/container";
import { FadeIn } from "@/components/ui/motion-wrapper";
import {
  PROJECT_TYPES,
  SCALE_OPTIONS,
  MATERIAL_TIERS,
  ADDON_OPTIONS,
  ProjectTypeOption,
  ScaleOption,
  MaterialTier,
  AddonOption,
} from "@/data/business-data";

export default function EstimatorView() {
  const [selectedType, setSelectedType] = useState<string>(PROJECT_TYPES[0].id);
  const [selectedScale, setSelectedScale] = useState<string>(SCALE_OPTIONS[1].id);
  const [selectedMaterial, setSelectedMaterial] = useState<string>(MATERIAL_TIERS[1].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["3d-render"]);

  // Client Details Form for instant quote
  const [clientInfo, setClientInfo] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    eventDate: "",
    notes: "",
  });

  const [activeStep, setActiveStep] = useState<1 | 2>(1);

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="h-6 w-6" />;
      case "Zap":
        return <Zap className="h-6 w-6" />;
      case "Store":
        return <Store className="h-6 w-6" />;
      case "Hammer":
        return <Hammer className="h-6 w-6" />;
      default:
        return <Layers className="h-6 w-6" />;
    }
  };

  // Calculation Logic
  const calculation = useMemo(() => {
    const pType = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
    const pScale = SCALE_OPTIONS.find((s) => s.id === selectedScale) || SCALE_OPTIONS[1];
    const pMaterial = MATERIAL_TIERS.find((m) => m.id === selectedMaterial) || MATERIAL_TIERS[1];

    let addonsCost = 0;
    selectedAddons.forEach((addonId) => {
      const addon = ADDON_OPTIONS.find((a) => a.id === addonId);
      if (addon) addonsCost += addon.price;
    });

    const minTotal = Math.round((pType.basePriceMin * pScale.multiplier * pMaterial.multiplier) + addonsCost);
    const maxTotal = Math.round((pType.basePriceMax * pScale.multiplier * pMaterial.multiplier) + addonsCost);

    return {
      pType,
      pScale,
      pMaterial,
      addonsCost,
      minTotal,
      maxTotal,
    };
  }, [selectedType, selectedScale, selectedMaterial, selectedAddons]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedAddonNames = selectedAddons
      .map((id) => ADDON_OPTIONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text = `Halo Skema HQ,%0A%0ASaya telah membuat estimasi anggaran proyek di website Skema HQ:%0A%0A📌 *DETAIL ESTIMASI PROYEK:*%0A- Tipe Proyek: ${encodeURIComponent(calculation.pType.name)}%0A- Ukuran Area: ${encodeURIComponent(calculation.pScale.name)}%0A- Material Tier: ${encodeURIComponent(calculation.pMaterial.name)}%0A- Add-ons: ${encodeURIComponent(selectedAddonNames || "Tidak ada")}%0A- Estimasi Biaya Range: ${encodeURIComponent(formatCurrency(calculation.minTotal))} - ${encodeURIComponent(formatCurrency(calculation.maxTotal))}%0A%0A👤 *DATA KLIEN:*%0A- Nama: ${encodeURIComponent(clientInfo.name || "-")}%0A- Perusahaan: ${encodeURIComponent(clientInfo.company || "-")}%0A- Email: ${encodeURIComponent(clientInfo.email || "-")}%0A- No. HP: ${encodeURIComponent(clientInfo.phone || "-")}%0A- Target Tanggal Event: ${encodeURIComponent(clientInfo.eventDate || "Belum pasti")}%0A- Catatan Tambahan: ${encodeURIComponent(clientInfo.notes || "-")}%0A%0AMohon konfirmasi dan konsultasi kelanjutan proyek ini. Terima kasih!`;

    window.open(`https://wa.me/6287889527901?text=${text}`, "_blank");
  };

  return (
    <main className="pt-32 pb-32 bg-neutral-950 text-white min-h-screen relative overflow-hidden">
      {/* Background Decor Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-800/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-neutral-900/40 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        {/* Header Section */}
        <div className="max-w-3xl text-left">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>Interactive Business Tool</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Project Cost & Budget Estimator.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mt-5 text-lg text-neutral-400 font-normal leading-relaxed">
              Hitung perkiraan estimasi anggaran pengerjaan booth pameran, event activation, dan produksi kustom Skema HQ secara transparan dan realtime.
            </p>
          </FadeIn>
        </div>

        {/* Main Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Configuration Controls (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Step Switcher Header */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setActiveStep(1)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeStep === 1
                      ? "bg-white text-neutral-950 shadow-md"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>1. Konfigurasi Proyek</span>
                </button>

                <button
                  onClick={() => setActiveStep(2)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeStep === 2
                      ? "bg-white text-neutral-950 shadow-md"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`}
                >
                  <FileCheck className="h-4 w-4" />
                  <span>2. Data Klien & Pengajuan</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setSelectedType(PROJECT_TYPES[0].id);
                  setSelectedScale(SCALE_OPTIONS[1].id);
                  setSelectedMaterial(MATERIAL_TIERS[1].id);
                  setSelectedAddons(["3d-render"]);
                }}
                className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-400 transition-colors"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Reset Parameter</span>
              </button>
            </div>

            {activeStep === 1 ? (
              <div className="space-y-10">
                {/* 1. Project Type */}
                <FadeIn direction="up">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-xs text-white">1</span>
                        Pilih Tipe Proyek
                      </label>
                      <span className="text-xs text-neutral-500">Wajib dipilih</span>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {PROJECT_TYPES.map((pt) => {
                        const isSelected = selectedType === pt.id;
                        return (
                          <div
                            key={pt.id}
                            onClick={() => setSelectedType(pt.id)}
                            className={`group cursor-pointer rounded-2xl border p-5 transition-all relative overflow-hidden ${
                              isSelected
                                ? "border-white bg-neutral-900 shadow-xl ring-1 ring-white"
                                : "border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/70"
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div
                                className={`p-3 rounded-xl ${
                                  isSelected
                                    ? "bg-white text-neutral-950"
                                    : "bg-neutral-800 text-neutral-300 group-hover:bg-neutral-700"
                                }`}
                              >
                                {getIcon(pt.iconName)}
                              </div>
                              {isSelected && (
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-neutral-950">
                                  <Check className="h-4 w-4 stroke-[3]" />
                                </span>
                              )}
                            </div>
                            <h3 className="mt-4 font-bold text-white text-lg">{pt.name}</h3>
                            <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                              {pt.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </FadeIn>

                {/* 2. Scale / Area */}
                <FadeIn direction="up">
                  <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-xs text-white">2</span>
                      Pilih Ukuran Area / Skala
                    </label>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {SCALE_OPTIONS.map((scale) => {
                        const isSelected = selectedScale === scale.id;
                        return (
                          <div
                            key={scale.id}
                            onClick={() => setSelectedScale(scale.id)}
                            className={`cursor-pointer rounded-xl border p-4 transition-all flex items-center justify-between ${
                              isSelected
                                ? "border-white bg-neutral-900 shadow-md ring-1 ring-white"
                                : "border-neutral-800 bg-neutral-900/40 hover:border-neutral-700"
                            }`}
                          >
                            <div>
                              <p className="font-semibold text-sm text-white">{scale.name}</p>
                              <p className="text-xs text-neutral-500 mt-0.5">Factor: {scale.multiplier}x</p>
                            </div>
                            {isSelected && <Check className="h-4 w-4 text-white" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </FadeIn>

                {/* 3. Material Tier */}
                <FadeIn direction="up">
                  <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-xs text-white">3</span>
                      Pilih Spesifikasi & Tier Material
                    </label>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {MATERIAL_TIERS.map((tier) => {
                        const isSelected = selectedMaterial === tier.id;
                        return (
                          <div
                            key={tier.id}
                            onClick={() => setSelectedMaterial(tier.id)}
                            className={`cursor-pointer rounded-2xl border p-5 transition-all relative flex flex-col justify-between ${
                              isSelected
                                ? "border-white bg-neutral-900 ring-1 ring-white"
                                : "border-neutral-800 bg-neutral-900/40 hover:border-neutral-700"
                            }`}
                          >
                            {tier.badge && (
                              <span className="absolute top-3 right-3 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                                {tier.badge}
                              </span>
                            )}
                            <div>
                              <h4 className="font-bold text-white text-base">{tier.name}</h4>
                              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                                {tier.description}
                              </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between">
                              <span className="text-xs font-mono text-neutral-400">
                                multiplier {tier.multiplier}x
                              </span>
                              {isSelected && <Check className="h-4 w-4 text-white" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </FadeIn>

                {/* 4. Add-ons */}
                <FadeIn direction="up">
                  <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-xs text-white">4</span>
                      Layanan Tambahan (Add-ons)
                    </label>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {ADDON_OPTIONS.map((addon) => {
                        const isChecked = selectedAddons.includes(addon.id);
                        return (
                          <div
                            key={addon.id}
                            onClick={() => toggleAddon(addon.id)}
                            className={`cursor-pointer rounded-xl border p-4 transition-all flex items-start justify-between gap-3 ${
                              isChecked
                                ? "border-white bg-neutral-900 ring-1 ring-white"
                                : "border-neutral-800 bg-neutral-900/40 hover:border-neutral-700"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                                  isChecked
                                    ? "bg-white text-neutral-950 border-white"
                                    : "border-neutral-700 bg-neutral-900"
                                }`}
                              >
                                {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                              </div>
                              <div>
                                <p className="font-semibold text-sm text-white">{addon.name}</p>
                                <p className="text-xs text-neutral-400 mt-0.5">{addon.description}</p>
                                <p className="text-xs font-mono text-amber-400 mt-1">
                                  + {formatCurrency(addon.price)}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </FadeIn>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-neutral-950 transition-all hover:bg-neutral-200"
                  >
                    <span>Lanjut Ke Form Klien</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* Step 2: Client Info Form */
              <FadeIn direction="up">
                <form onSubmit={handleWhatsAppSend} className="space-y-6 rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8">
                  <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
                    <Building2 className="h-5 w-5 text-amber-400" />
                    <div>
                      <h3 className="font-bold text-lg text-white">Informasi Klien & Project Brief</h3>
                      <p className="text-xs text-neutral-400">
                        Isi detail Kontak Anda untuk menerima draf penawaran resmi dari Skema HQ via WhatsApp / Email.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Sarah Wijaya"
                        value={clientInfo.name}
                        onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                        className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                        Nama Brand / Perusahaan *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: PT KAO Indonesia"
                        value={clientInfo.company}
                        onChange={(e) => setClientInfo({ ...clientInfo, company: e.target.value })}
                        className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                        Email Resmi *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@brand.com"
                        value={clientInfo.email}
                        onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                        className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                        No. WhatsApp / Telepon *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="081234567890"
                        value={clientInfo.phone}
                        onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                        className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:border-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Perkiraan Tanggal Acara / Target Load-in
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: 20-25 Agustus 2026 di ICE BSD"
                      value={clientInfo.eventDate}
                      onChange={(e) => setClientInfo({ ...clientInfo, eventDate: e.target.value })}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:border-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Catatan Spesifik / Keperluan Tambahan
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Contoh: Perlu area interaktif videotron 3x2m, lighting warm white, dan SPG 4 orang..."
                      value={clientInfo.notes}
                      onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:border-white focus:outline-none"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveStep(1)}
                      className="text-xs text-neutral-400 hover:text-white underline"
                    >
                      &larr; Kembali ke Konfigurasi
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 px-8 py-4 text-sm font-bold text-neutral-950 transition-all shadow-lg shadow-emerald-500/20"
                    >
                      <Send className="h-4 w-4" />
                      <span>Kirim Estimasi via WhatsApp</span>
                    </button>
                  </div>
                </form>
              </FadeIn>
            )}
          </div>

          {/* Right Column: Live Summary Card ( Sticky 4 cols ) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <FadeIn direction="left" delay={0.2}>
              <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                {/* Top Accent Light */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-white to-emerald-500" />

                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2 text-white">
                    <Calculator className="h-5 w-5 text-amber-400" />
                    <span className="font-bold text-base">Ringkasan Estimasi</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold px-2 py-0.5">
                    Live Calculation
                  </span>
                </div>

                {/* Range Price Display */}
                <div className="my-6 rounded-2xl bg-neutral-950 p-5 border border-neutral-800/80">
                  <p className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
                    Perkiraan Total Anggaran
                  </p>
                  <div className="mt-2 text-2xl sm:text-3xl font-black text-amber-400 tracking-tight">
                    {formatCurrency(calculation.minTotal)}
                  </div>
                  <div className="text-xs font-semibold text-neutral-500 mt-1">
                    sampai dengan <span className="text-neutral-300 font-bold">{formatCurrency(calculation.maxTotal)}</span>
                  </div>
                  <p className="mt-3 text-[11px] text-neutral-500 leading-tight">
                    *Estimasi termasuk material, pabrikasi workshop, instalasi venue, dan bongkaran.
                  </p>
                </div>

                {/* Configuration Specs Breakdown */}
                <div className="space-y-3 text-xs border-b border-neutral-800 pb-5">
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-400">Tipe Proyek:</span>
                    <span className="font-bold text-right text-white">{calculation.pType.name}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-400">Ukuran Skala:</span>
                    <span className="font-bold text-right text-white">{calculation.pScale.name}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-400">Material Tier:</span>
                    <span className="font-bold text-right text-white">{calculation.pMaterial.name}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-400">Total Add-ons ({selectedAddons.length}):</span>
                    <span className="font-bold text-right text-amber-400">
                      + {formatCurrency(calculation.addonsCost)}
                    </span>
                  </div>
                </div>

                {/* Guarantee & Trust Badges */}
                <div className="mt-5 space-y-2.5 text-[11px] text-neutral-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Garansi Hasil Finishing Sesuai Render 3D</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>Respon Penawaran Resmi Maksimal 24 Jam</span>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6">
                  {activeStep === 1 ? (
                    <button
                      onClick={() => setActiveStep(2)}
                      className="w-full rounded-2xl bg-white hover:bg-neutral-200 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all"
                    >
                      Lanjut Konsultasi Klien
                    </button>
                  ) : (
                    <button
                      onClick={handleWhatsAppSend}
                      className="w-full rounded-2xl bg-emerald-500 hover:bg-emerald-400 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all shadow-lg shadow-emerald-500/20"
                    >
                      Kirim Brief ke WhatsApp
                    </button>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </main>
  );
}
