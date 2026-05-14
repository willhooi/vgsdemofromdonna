import { useEffect, useState } from "react";
import { MessageCircle, X, Send, ArrowLeft, ExternalLink } from "lucide-react";

// TODO: replace with your real Zalo Official Account URL
const ZALO_OA_URL = "https://zalo.me/vietguys";

type View = "choose" | "web";

export const ChatBubble = () => {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("choose");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-50 md:bottom-6 md:right-6">
      {open && (
        <div className="mb-3 w-[320px] overflow-hidden rounded-3xl border border-border bg-background shadow-[var(--shadow-card)] animate-fade-up">
          <div className="flex items-center justify-between border-b border-border bg-[var(--gradient-brand)] px-4 py-3 text-primary-foreground">
            <div className="flex items-center gap-2">
              {view === "web" && (
                <button
                  onClick={() => setView("choose")}
                  aria-label="Back"
                  className="rounded-full p-1 hover:bg-white/10"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
              )}
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] opacity-80">
                  VietGuys
                </div>
                <div className="text-sm font-bold">
                  {view === "choose" ? "How would you like to chat?" : "Chat with us"}
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {view === "choose" ? (
            <div className="space-y-3 p-4">
              <button
                onClick={() => setView("web")}
                className="flex w-full items-center gap-3 rounded-2xl border border-border bg-background p-3 text-left transition-colors hover:border-primary hover:bg-[hsl(var(--primary-soft))]/40"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(var(--primary-soft))] text-[hsl(var(--primary-deep))]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-foreground">Chat on this site</span>
                  <span className="block text-xs text-muted-foreground">Talk to our AI assistant now</span>
                </span>
              </button>

              <a
                href={ZALO_OA_URL}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center gap-3 rounded-2xl border border-border bg-background p-3 text-left transition-colors hover:border-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-soft))]/40"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(var(--accent-soft))] text-[hsl(var(--accent-deep))] font-display text-sm font-extrabold">
                  Zalo
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-bold text-foreground">Chat via Zalo</span>
                  <span className="block text-xs text-muted-foreground">Open our Zalo Official Account</span>
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          ) : (
            <>
              <div className="space-y-2 p-4">
                <div className="rounded-2xl bg-secondary p-3 text-sm text-foreground">
                  👋 Hi! I&apos;m VietGuys&apos; AI assistant. What are you looking for today?
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Book a demo", "SMS pricing", "PangoCDP", "Talk to sales"].map((t) => (
                    <button
                      key={t}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 border-t border-border p-3">
                <input
                  placeholder="Type your message…"
                  className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary"
                />
                <button
                  className="grid h-9 w-9 place-items-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
      <button
        onClick={() => {
          setOpen((o) => !o);
          if (!open) setView("choose");
        }}
        aria-label="Open chat"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] shadow-[var(--shadow-cta)] transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full" />
      </button>
    </div>
  );
};
