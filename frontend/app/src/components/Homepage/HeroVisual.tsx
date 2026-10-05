import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function HeroVisual() {
  return (
          <div className="relative mx-auto w-full max-w-[600px]">
            {/* Outer Circle */}

            <div className="relative aspect-square">
              {/* Large Background Circle */}

              <div
                className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border"
                style={{
                  borderColor: "rgba(196,109,141,0.18)",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.8), rgba(241,244,248,0.8))",
                  boxShadow:
                    "0 30px 100px rgba(23,32,51,0.10)",
                }}
              />

              {/* Inner Circle */}

              <div
                className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(196,109,141,0.12), rgba(78,97,124,0.12))",
                }}
              />

              {/* Pink Orb */}

              <div
                className="animate-floating absolute left-[8%] top-[20%] h-16 w-16 rounded-full border border-white/70 shadow-xl backdrop-blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #e7a8bd, #c46d8d)",
                }}
              />

              {/* Blue Orb */}

              <div
                className="animate-floating absolute bottom-[17%] right-[7%] h-20 w-20 rounded-full border border-white/70 shadow-xl backdrop-blur-xl"
                style={{
                  animationDelay: "1.5s",
                  background:
                    "linear-gradient(135deg, #8c9caf, #4e617c)",
                }}
              />

              {/* Connection Line */}

              <div className="absolute left-[19%] right-[18%] top-1/2 h-px -translate-y-1/2 rotate-[-25deg] bg-gradient-to-r from-transparent via-[#c46d8d]/40 to-[#4e617c]/50" />

              {/* Logo Card */}

              <div className="glass absolute left-1/2 top-1/2 flex h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[38px] p-8">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[28px]">
                  {/* Soft Glow */}

                  <div
                    className="absolute h-44 w-44 rounded-full blur-3xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(196,109,141,0.18), rgba(78,97,124,0.18))",
                    }}
                  />

                  {/* Logo */}

                  <Image
                    src="/logo.png"
                    alt="Company Logo"
                    width={300}
                    height={300}
                    priority
                    className="relative z-10 h-auto w-[72%] object-contain drop-shadow-[0_20px_30px_rgba(23,32,51,0.12)]"
                  />
                </div>
              </div>

              {/* Floating Experience Card */}

              <div className="glass absolute -bottom-2 left-[2%] rounded-2xl px-5 py-4 shadow-lg sm:left-[5%]">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                    style={{
                      background: "var(--gradient-brand)",
                    }}
                  >
                    <Sparkles size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[#8791a1]">
                      Our Approach
                    </p>

                    <p className="text-sm font-semibold text-[#172033]">
                      Human + Technology
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Project Card */}

              <div className="glass absolute -right-2 top-[8%] rounded-2xl px-5 py-4 shadow-lg sm:right-[2%]">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <span
                      className="h-8 w-8 rounded-full border-2 border-white"
                      style={{
                        background: "#c46d8d",
                      }}
                    />

                    <span
                      className="h-8 w-8 rounded-full border-2 border-white"
                      style={{
                        background: "#4e617c",
                      }}
                    />

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-white text-xs font-bold text-[#596477]">
                      +
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[#8791a1]">
                      Collaboration
                    </p>

                    <p className="text-sm font-semibold text-[#172033]">
                      Built Together
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}
