import type { Metadata } from 'next'
import { pageMeta } from '@/lib/meta'
import TLink from '@/components/TLink'
import CopyButton from '@/components/CopyButton'

export const metadata: Metadata = pageMeta('orchid', '/orchid')

export default function OrchidPage() {
  return (
    <section className="orc on" data-page="orchid">
      <h1 className="sr-only">Orchid CRM</h1>
      <p className="lead">Orchid is a calm, web-based CRM (customer relationship manager) that keeps every inquiry, client and task for a small team in one place, so nobody waits too long for a reply and nothing gets forgotten.</p>
      <p>It is built for small teams, studios, shops and service businesses that answer customer inquiries every day. Orchid CRM works in the browser on a computer or a phone, and costs $8 a month with no per-seat charges. You can cancel any time.</p>
      <div className="acts"><TLink className="go" href="/privacy">Privacy policy</TLink><TLink className="go alt" href="/terms">Terms of service</TLink><a className="go alt" href="mailto:keandonato@404studio.click">Contact</a></div>
      <h3>What Orchid does</h3>
      <div className="cards">
        <div className="card"><small>INQUIRIES</small><h4>Nobody waits unseen</h4><p>Every new inquiry shows a live waiting timer. A going-cold alert appears when a conversation has been quiet for five days or more.</p></div>
        <div className="card"><small>CLIENTS AND CASES</small><h4>One record per client</h4><p>Keep each client’s details, tasks and cases together. Cases are routed to the right person with service-level (SLA) tracking, and every client has a team chat log.</p></div>
        <div className="card"><small>TASKS</small><h4>Follow-ups that get done</h4><p>Assign tasks with due dates and priorities, see what is due soon, and let the team work from the same list.</p></div>
        <div className="card"><small>ASSISTANT AND AUTOMATIONS</small><h4>Less repeat work</h4><p>An AI assistant drafts replies and suggestions for you to review, and simple rules can create a task, send an email or add a calendar event when something happens.</p></div>
      </div>
      <h3>How Orchid uses your Google account</h3>
      <p>Orchid works with a Google account in three optional ways. You choose which to use, and each can be switched off at any time.</p>
      <table><tbody>
        <tr><th>Feature</th><th>What Orchid can do</th><th>When it applies</th></tr>
        <tr><td><b>Sign in with Google</b></td><td>Read your name, email address and profile picture to sign you in to your Orchid account.</td><td>Only when you choose “Continue with Google”.</td></tr>
        <tr><td><b>Google Calendar</b></td><td>Show events from your calendar inside Orchid, and add or change events you ask Orchid to create (for example a follow-up call).</td><td>Only after you press Connect on the Calendar tab.</td></tr>
        <tr><td><b>Gmail</b></td><td>Send emails you write from your own Gmail address, and bring replies to those emails into the matching client’s message log.</td><td>Only after you connect your Google account for email.</td></tr>
      </tbody></table>
      <p>Orchid does not sell your Google data, does not use it for advertising, and does not use it to train AI models. The details are in the <TLink href="/privacy">Privacy Policy</TLink>. To remove Orchid’s access at any time, disconnect inside Orchid or visit your <a href="https://myaccount.google.com/permissions" rel="noopener">Google Account permissions</a> page.</p>
      <h3>Meet the developer</h3>
      <div className="prof">
        <div className="idc" aria-hidden="true"><div className="idh"><span>404studio.click</span><span>Developer</span></div><div className="idp">KD</div><div className="idn">Kean Carl Donato</div><div className="idr">Founder, 404 Studio</div><div className="ida"><i className="live"></i>Builder of Orchid CRM</div></div>
        <div>
          <h4>Kean Carl Donato</h4>
          <p className="role">Founder and web developer at 404 Studio, Quezon City, Philippines</p>
          <p className="bio">Hi, I’m Kean. I design and build custom websites and web apps: responsive design, front-end development, interactive interfaces and e-commerce concepts. I designed and built Orchid to help small teams answer inquiries faster and follow up better, and I run it myself, so a question about Orchid or about your data goes straight to the person who made it.</p>
          <div className="crows">
            <div className="crow"><span>Email</span><a href="mailto:keandonato@404studio.click">keandonato@404studio.click</a><CopyButton text="keandonato@404studio.click" /></div>
            <div className="crow"><span>Viber</span><a href="viber://chat?number=%2B639619679095">+63 961 967 9095</a><CopyButton text="+63 961 967 9095" /></div>
            <div className="crow"><span>Based in</span><b>Quezon City, Philippines</b><i></i></div>
            <div className="crow"><span>Website</span><b>404studio.click</b><CopyButton text="404studio.click" /></div>
          </div>
          <h4>Find me online</h4>
          <div className="ll">
            <a href="https://www.linkedin.com/in/kean-carl-donato-8178b43b9" target="_blank" rel="noopener">LinkedIn <span>+</span></a>
            <a href="https://www.facebook.com/kean.concepcion.12/" target="_blank" rel="noopener">Facebook <span>+</span></a>
            <TLink href="/me">About me <span>+</span></TLink>
            <TLink href="/samples">My other work <span>+</span></TLink>
          </div>
        </div>
      </div>
      <h3>Questions about Orchid or your data</h3>
      <p>Write to <a href="mailto:keandonato@404studio.click">keandonato@404studio.click</a> for help, access requests or to have your data deleted. Orchid is operated by Kean Carl Donato (404 Studio), Quezon City, Philippines.</p>
      <div className="acts"><TLink className="go" href="/privacy">Privacy policy</TLink><TLink className="go alt" href="/terms">Terms of service</TLink><TLink className="go alt" href="/contact">Contact page</TLink></div>
    </section>
  )
}
