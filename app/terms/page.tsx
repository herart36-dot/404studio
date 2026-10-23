import type { Metadata } from 'next'
import { pageMeta } from '@/lib/meta'
import TLink from '@/components/TLink'

export const metadata: Metadata = pageMeta('terms', '/terms')

export default function TermsPage() {
  return (
    <section className="orc on" data-page="terms">
      <h2><span className="o">Terms of</span><span className="in">service.</span></h2>
      <p className="lm">Last updated: October 18, 2026</p>
      <p className="lead">These terms are the agreement between you and Orchid when you use Orchid CRM. Please read them. By creating an account or using Orchid, you agree to them.</p>
      <h3>1. The service</h3>
      <p>Orchid is a web-based CRM for managing inquiries, clients, tasks and cases, with optional Google Calendar and Gmail connections, an AI assistant and automations. It is built and operated by Kean Carl Donato (404 Studio), Quezon City, Philippines.</p>
      <h3>2. Accounts and approved members</h3>
      <ul>
        <li>Only people your workspace admin has added can log in. Use the email address your admin added.</li>
        <li>Keep your password and security answer private, and tell us if you think your account was used without your permission.</li>
        <li>You are responsible for what happens under your account. Admins are responsible for who they add and what access they give.</li>
        <li>You must give accurate information and be old enough to enter a binding agreement in your country.</li>
      </ul>
      <h3>3. Your data</h3>
      <p>You own the information you put into Orchid. You give us permission to store and process it only to run Orchid for you, as described in the <TLink href="/privacy">Privacy Policy</TLink>. You are responsible for having the right to enter your clients’ and contacts’ information, and for following the privacy and marketing laws that apply to you.</p>
      <h3>4. Google and other connections</h3>
      <p>If you connect Google Calendar or Gmail, you allow Orchid to act on your behalf in the ways described in the Privacy Policy. Your use of Google services is also subject to Google’s own terms. You can disconnect at any time inside Orchid or from your Google Account permissions page. Some features will stop working if you disconnect.</p>
      <h3>5. AI suggestions</h3>
      <p>AI features create suggestions that may be wrong or incomplete. Review every suggestion before you use or send it. You are responsible for the messages you send and the actions you confirm.</p>
      <h3>6. Acceptable use</h3>
      <p>Do not use Orchid to:</p>
      <ul>
        <li>break the law or infringe anyone’s rights;</li>
        <li>send spam or unwanted bulk messages, or deceive people;</li>
        <li>attempt to access accounts or data that are not yours, or disrupt or probe the security of the service;</li>
        <li>upload malicious code, or misuse Google services through Orchid in a way that breaks Google’s terms.</li>
      </ul>
      <h3>7. Subscription and payment</h3>
      <p>Orchid CRM is offered for a monthly fee, shown on our site (currently $8 a month, with no per-seat charges). Fees are billed monthly through our payment provider. You can cancel at any time and the cancellation takes effect at the end of the period you have paid for. We may change prices with notice before the change applies to you.</p>
      <h3>8. Availability and changes</h3>
      <p>We work to keep Orchid available, but it may be unavailable at times for maintenance or reasons outside our control. We may improve, change or remove features. If we make a change that significantly reduces what you paid for, we will tell you.</p>
      <h3>9. Ending your use</h3>
      <p>You can stop using Orchid and ask us to delete your account at any time. We may suspend or end access if you break these terms or put the service or other users at risk. After an account ends, we handle your data as described in the Privacy Policy.</p>
      <h3>10. Disclaimers</h3>
      <p>Orchid is provided “as is” and “as available”. To the extent the law allows, we do not promise that it will be uninterrupted, error-free or fit for a particular purpose.</p>
      <h3>11. Limits of liability</h3>
      <p>To the extent the law allows, we are not liable for indirect or consequential losses, lost profits or lost data, and our total liability for any claim relating to Orchid is limited to the amount you paid us in the three months before the claim. Nothing in these terms limits liability that cannot be limited by law.</p>
      <h3>12. Changes to these terms</h3>
      <p>We may update these terms. When we make an important change we will update the date above and, where appropriate, notify you. If you keep using Orchid after a change takes effect, you accept the updated terms.</p>
      <h3>13. Governing law</h3>
      <p>These terms are governed by the laws of the Republic of the Philippines.</p>
      <h3>14. Contact</h3>
      <p>Questions about these terms: <a href="mailto:keandonato@404studio.click">keandonato@404studio.click</a>, Kean Carl Donato (404 Studio), Quezon City, Philippines.</p>
      <div className="acts"><TLink className="go alt" href="/privacy">Privacy policy</TLink><TLink className="go alt" href="/orchid">What is Orchid?</TLink></div>
    </section>
  )
}
