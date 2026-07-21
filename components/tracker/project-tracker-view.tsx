"use client";

import { useState } from "react";
import {
  Search,
  CheckCircle2,
  Clock,
  Circle,
  MapPin,
  Calendar,
  UserCheck,
  Phone,
  Mail,
  Camera,
  ShieldCheck,
  Building,
  ArrowUpRight,
  Sparkles,
  Layers,
  AlertCircle,
} from "lucide-react";
import Container from "@/components/ui/container";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { MOCK_CLIENT_PROJECTS, ClientProjectTrackData } from "@/data/business-data";

export default function ProjectTrackerView() {
  const [searchCode, setSearchCode] = useState<string>("SKM-2026-KAO");
  const [activeProject, setActiveProject] = useState<ClientProjectTrackData | null>(
    MOCK_CLIENT_PROJECTS["SKM-2026-KAO"]
  );
  const [searchError, setSearchError] = useState<boolean>(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = searchCode.trim().toUpperCase();
    if (MOCK_CLIENT_PROJECTS[formatted]) {
      setActiveProject(MOCK_CLIENT_PROJECTS[formatted]);
      setSearchError(false);
    } else {
      setActiveProject(null);
      setSearchError(true);
    }
  };

  const quickLookup = (code: string) => {
    setSearchCode(code);
    setActiveProject(MOCK_CLIENT_PROJECTS[code]);
    setSearchError(false);
  };

  return (
    <main className="pt-32 pb-32 bg-neutral-950 text-white min-h-screen relative overflow-hidden">
      {/* Background Decor Ambient Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-neutral-900/40 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        {/* Header */}
        <div className="max-w-3xl text-left">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>Real-Time Client Portal</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Project Status & Milestone Tracker.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mt-5 text-lg text-neutral-400 font-normal leading-relaxed">
              Pantau progres pengerjaan booth dan event activation Anda secara realtime dari tahap desain 3D, pabrikasi workshop, hingga instalasi di venue.
            </p>
          </FadeIn>
        </div>

        {/* Search Bar & Demo Quick Chips */}
        <div className="mt-10 max-w-3xl">
          <FadeIn direction="up" delay={0.4}>
            <form onSubmit={handleSearch} className="relative flex items-center">
              <input
                type="text"
                placeholder="Masukkan Kode Proyek (contoh: SKM-2026-KAO)"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                className="w-full rounded-2xl border border-neutral-800 bg-neutral-900/90 pl-12 pr-36 py-4 text-sm text-white placeholder-neutral-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all shadow-xl"
              />
              <Search className="absolute left-4 h-5 w-5 text-neutral-400" />
              <button
                type="submit"
                className="absolute right-2 rounded-xl bg-white hover:bg-neutral-200 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all"
              >
                Cari Proyek
              </button>
            </form>

            {/* Quick Demo Chips */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-neutral-500">Coba kode sampel:</span>
              {Object.keys(MOCK_CLIENT_PROJECTS).map((code) => (
                <button
                  key={code}
                  onClick={() => quickLookup(code)}
                  className={`rounded-lg px-3 py-1 border transition-all ${
                    searchCode.toUpperCase() === code
                      ? "border-amber-400 bg-amber-400/10 text-amber-300 font-bold"
                      : "border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-white"
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Search Error State */}
        {searchError && (
          <div className="mt-10 max-w-3xl rounded-2xl border border-rose-500/30 bg-rose-500/10 p-6 flex items-start gap-4 text-rose-300">
            <AlertCircle className="h-6 w-6 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-base">Kode Proyek Tidak Ditemukan</h3>
              <p className="text-xs text-rose-300/80 mt-1">
                Pastikan Anda memasukkan kode proyek yang benar sesuai pada dokumen penawaran atau invoice. Silakan klik salah satu contoh kode di atas.
              </p>
            </div>
          </div>
        )}

        {/* Active Project Dashboard */}
        {activeProject && (
          <div className="mt-12 space-y-12">
            {/* Project Overview Banner Card */}
            <FadeIn direction="up">
              <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-white to-emerald-500" />

                <div className="grid gap-8 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-neutral-800 border border-neutral-700 text-amber-400 text-xs font-mono font-bold px-3 py-1">
                        {activeProject.projectCode}
                      </span>
                      <span className="rounded-full bg-neutral-800 text-neutral-300 text-xs font-semibold px-3 py-1">
                        {activeProject.clientName}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {activeProject.projectName}
                    </h2>

                    <div className="grid gap-3 sm:grid-cols-2 text-xs text-neutral-300 pt-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                        <span>{activeProject.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-amber-400 shrink-0" />
                        <span>{activeProject.eventDates}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Gauge */}
                  <div className="lg:col-span-4 rounded-2xl bg-neutral-950 p-6 border border-neutral-800 text-center">
                    <p className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                      Total Progres Pabrikasi
                    </p>
                    <div className="mt-2 text-4xl sm:text-5xl font-black text-amber-400">
                      {activeProject.overallProgress}%
                    </div>
                    <div className="mt-4 w-full bg-neutral-800 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-amber-400 to-emerald-400 h-2.5 rounded-full transition-all duration-700"
                        style={{ width: `${activeProject.overallProgress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Stepper Timeline & PM Card Grid */}
            <div className="grid gap-10 lg:grid-cols-12">
              {/* Stepper Timeline (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Layers className="h-5 w-5 text-amber-400" />
                  <span>Tahapan & Milestone Proyek</span>
                </h3>

                <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 space-y-8">
                  {activeProject.milestones.map((ms, idx) => {
                    const isLast = idx === activeProject.milestones.length - 1;
                    return (
                      <div key={ms.stepNumber} className="relative flex items-start gap-5">
                        {/* Connecting Vertical Line */}
                        {!isLast && (
                          <div
                            className={`absolute left-5 top-10 bottom-0 w-0.5 -ml-px ${
                              ms.status === "completed"
                                ? "bg-emerald-500/80"
                                : "bg-neutral-800"
                            }`}
                          />
                        )}

                        {/* Status Icon */}
                        <div className="relative z-10 shrink-0">
                          {ms.status === "completed" ? (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                              <CheckCircle2 className="h-6 w-6" />
                            </div>
                          ) : ms.status === "in-progress" ? (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 animate-pulse">
                              <Clock className="h-6 w-6" />
                            </div>
                          ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-neutral-600 border border-neutral-800">
                              <Circle className="h-6 w-6" />
                            </div>
                          )}
                        </div>

                        {/* Milestone Content */}
                        <div className="space-y-1 pt-1">
                          <div className="flex items-center gap-3">
                            <h4
                              className={`font-bold text-base ${
                                ms.status === "completed"
                                  ? "text-white"
                                  : ms.status === "in-progress"
                                  ? "text-amber-400"
                                  : "text-neutral-500"
                              }`}
                            >
                              {ms.stepNumber}. {ms.title}
                            </h4>
                            {ms.dateCompleted && (
                              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                Selesai: {ms.dateCompleted}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed max-w-xl">
                            {ms.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right PM Contact & Photos (4 cols) */}
              <div className="lg:col-span-4 space-y-8">
                {/* PM Contact Card */}
                <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-800 text-amber-400 border border-neutral-700">
                      <UserCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-500">
                        Dedicated Project Manager
                      </p>
                      <h4 className="font-bold text-white text-base">
                        {activeProject.projectManager.name}
                      </h4>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-neutral-300 pt-2 border-t border-neutral-800">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-neutral-400" />
                      <span>{activeProject.projectManager.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-neutral-400" />
                      <span>{activeProject.projectManager.email}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const text = `Halo Pak ${activeProject.projectManager.name},%0A%0ASaya ingin menanyakan update terkini untuk kode proyek: ${activeProject.projectCode} (${activeProject.projectName}).`;
                      window.open(`https://wa.me/6287889527901?text=${text}`, "_blank");
                    }}
                    className="w-full rounded-2xl bg-emerald-500 hover:bg-emerald-400 py-3 text-center text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20"
                  >
                    <span>Hubungi PM via WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Fabrication Photos Preview */}
                {activeProject.fabricationPhotos && activeProject.fabricationPhotos.length > 0 && (
                  <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-4">
                    <div className="flex items-center gap-2 text-white">
                      <Camera className="h-5 w-5 text-amber-400" />
                      <h4 className="font-bold text-base">Dokumentasi Workshop</h4>
                    </div>

                    <div className="space-y-4">
                      {activeProject.fabricationPhotos.map((photo, i) => (
                        <div
                          key={i}
                          className="rounded-2xl border border-neutral-800 bg-neutral-950 p-3 space-y-2"
                        >
                          <img
                            src={photo.url}
                            alt={photo.caption}
                            className="w-full h-40 object-cover rounded-xl border border-neutral-800"
                          />
                          <p className="text-xs text-neutral-300 font-medium">{photo.caption}</p>
                          <p className="text-[10px] text-neutral-500 font-mono">{photo.timestamp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}
