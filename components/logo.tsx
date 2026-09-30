import { Sparkles } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return <div className="logo"><span className="logo-mark"><Sparkles size={15} /></span>{!compact && <span>RevLeak <b>AI</b></span>}</div>;
}
