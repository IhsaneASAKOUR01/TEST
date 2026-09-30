import { ArrowRight, Check, Database, FileCheck2, Play, ScanSearch, Sparkles, Zap } from "lucide-react";
import { Logo } from "./logo";

export function Marketing({ onEnter }: { onEnter: () => void }) {
  return <main className="marketing">
    <nav className="marketing-nav shell">
      <Logo />
      <div className="nav-links"><a href="#platform">Platform</a><a href="#workflow">How it works</a><a href="#integrations">Integrations</a></div>
      <div className="nav-actions"><button className="link-btn">Sign in</button><button className="small-cta" onClick={onEnter}>Explore the audit <ArrowRight size={14}/></button></div>
    </nav>

    <section className="hero shell">
      <div className="eyebrow"><span className="live-dot"/> Revenue intelligence for modern SaaS</div>
      <h1>Your billing system tells you<br/>what you charged. <em>RevLeak tells you<br/>what you should have charged.</em></h1>
      <p className="hero-copy">Reconcile contracts, usage, CRM, and billing with AI—then surface every missed overage, expired discount, and pricing error before it becomes lost revenue.</p>
      <div className="hero-actions"><button className="primary-cta" onClick={onEnter}>Explore live revenue audit <ArrowRight size={17}/></button><a className="secondary-cta" href="#workflow"><Play size={14} fill="currentColor"/> See how it works</a></div>
      <div className="trust-row"><span><Check size={13}/> No setup required</span><span><Check size={13}/> Realistic sample data</span><span><Check size={13}/> 5-minute investigation</span></div>

      <div className="hero-console">
        <div className="console-top"><div className="window-dots"><i/><i/><i/></div><span>SEPTEMBER REVENUE RECONCILIATION</span><span className="verified"><Check size={12}/> AUDIT COMPLETE</span></div>
        <div className="console-body">
          <div className="audit-summary"><div><span>EXPECTED REVENUE</span><strong>$1,131,420</strong><small>Reconstructed from source data</small></div><div><span>BILLED REVENUE</span><strong>$1,080,000</strong><small>September close</small></div><div className="variance"><span>UNEXPLAINED VARIANCE</span><strong>−$51,420</strong><small><i/> 4 material discrepancies</small></div></div>
          <div className="forensic-grid">
            <div className="scan-panel"><div className="panel-label"><ScanSearch size={15}/> REVENUE RECONSTRUCTION <span>100%</span></div>
              {[['Contracts','146 / 146','done'],['Usage events','2.4B','done'],['Invoice line items','3,842','done'],['Pricing rules','518','done']].map(x=><div className="scan-row" key={x[0]}><span><i className={x[2]}/>{x[0]}</span><b>{x[1]}</b></div>)}
              <div className="reconcile-line"><span>CONTRACT TRUTH</span><i/><span>USAGE TRUTH</span><i/><span>BILLING TRUTH</span></div>
            </div>
            <div className="findings-preview"><div className="panel-label"><Sparkles size={15}/> MATERIAL FINDINGS <span>4</span></div>
              {[['Cortex Labs','Unbilled usage','$18,420'],['Vertex AI','Expired discount','$13,800'],['Nova Systems','Seat mismatch','$11,760'],['PolarStack','Missed uplift','$7,440']].map((x,i)=><button key={x[0]} onClick={onEnter}><i className={`avatar av-${i}`}>{x[0].split(' ').map(y=>y[0]).join('')}</i><span><b>{x[0]}</b><small>{x[1]}</small></span><strong>{x[2]}<ArrowRight size={14}/></strong></button>)}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="proof-strip"><div className="shell"><p>Built for the systems your revenue already runs on</p><div className="wordmarks"><b>stripe</b><b>salesforce</b><b>chargebee</b><b>ORB</b><b>METRONOME</b><b>NetSuite</b></div></div></section>

    <section className="problem shell" id="platform"><div className="section-kicker">THE REVENUE TRUTH GAP</div><div className="section-intro"><h2>Billing automation is not<br/>billing assurance.</h2><p>Your billing platform executes the rules it receives. It cannot tell you when the rules are wrong, a contract changed, or usage never arrived.</p></div>
      <div className="problem-grid">
        <article><span>01</span><Zap/><h3>Revenue logic is fragmented</h3><p>Pricing lives across contracts, CRM notes, usage meters, spreadsheets, and billing configuration.</p></article>
        <article><span>02</span><Database/><h3>Systems quietly diverge</h3><p>Seats grow, discounts expire, meters fail, and renewals pass—while invoices keep running as configured.</p></article>
        <article><span>03</span><FileCheck2/><h3>Manual audits don’t scale</h3><p>Finance teams sample accounts after close. RevLeak evaluates every charge against its evidence.</p></article>
      </div>
    </section>

    <section className="workflow" id="workflow"><div className="shell"><div className="section-kicker">CONTINUOUS REVENUE FORENSICS</div><div className="section-intro"><h2>Every dollar, reconstructed<br/>from first principles.</h2><p>RevLeak creates an independent expected-revenue ledger, then explains each difference with evidence your team can act on.</p></div>
      <div className="workflow-steps"><div><b>01</b><span className="step-icon"><Database/></span><h3>Connect revenue signals</h3><p>Contracts, usage, CRM, billing, and general ledger data normalized into one graph.</p></div><i/><div><b>02</b><span className="step-icon"><Sparkles/></span><h3>Reconstruct every charge</h3><p>AI extracts commercial terms and applies them to observed customer behavior.</p></div><i/><div><b>03</b><span className="step-icon"><ScanSearch/></span><h3>Investigate with evidence</h3><p>Prioritized discrepancies, source-level proof, and a clear recovery path.</p></div></div>
      <div className="bottom-cta"><div><span>See revenue forensics in action</span><h2>Find the $51,420 hiding in Axiom AI’s September close.</h2></div><button className="primary-cta" onClick={onEnter}>Explore live revenue audit <ArrowRight size={17}/></button></div>
    </div></section>
    <footer className="shell"><Logo/><span>© 2026 RevLeak AI. Revenue integrity, reconstructed.</span><span>Security · Privacy · Terms</span></footer>
  </main>
}
