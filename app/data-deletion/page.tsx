import type { Metadata } from 'next'
import { pageMeta } from '@/lib/meta'
import TLink from '@/components/TLink'

export const metadata: Metadata = pageMeta('data-deletion', '/data-deletion')

export default function DataDeletionPage() {
  return (
    <section className="orc on" data-page="data-deletion">
      <h2><span className="o">Data</span><span className="in">deletion.</span></h2>
      <p className="lm">Last updated: October 22, 2026</p>
      <p className="lead">You can ask Orchid to delete the personal information it holds about you at any time. This page explains how to do it, what gets deleted, and how long it takes. It covers your Orchid account and anything you connected to it, including Google and Facebook (Meta).</p>
      <h3>1. Ask us to delete your data</h3>
      <ol>
        <li>Email <a href="mailto:keandonato@404studio.click?subject=Data%20deletion%20request">keandonato@404studio.click</a> with the subject <b>Data deletion request</b>.</li>
        <li>Send it from the email address on your Orchid account, so we can confirm it is you. If your request is about Facebook, also give us your Facebook name or a link to your profile or Page.</li>
        <li>Tell us what you want removed: your whole account and its data, or only a connection (Google or Facebook).</li>
      </ol>
      <div className="note"><p>If we cannot confirm that the request comes from you, we may ask for a little more information before we delete anything. This protects you from someone else deleting your data.</p></div>
      <h3>2. Remove Orchid’s access yourself</h3>
      <p>You can cut off Orchid’s access right away, without waiting for us:</p>
      <ul>
        <li><b>In Orchid.</b> Disconnect Google Calendar or Gmail from inside Orchid.</li>
        <li><b>In Google.</b> Remove Orchid from your <a href="https://myaccount.google.com/permissions" rel="noopener">Google Account permissions</a> page.</li>
        <li><b>In Facebook.</b> Open your Facebook settings, find <b>Business Integrations</b> (also shown as Apps and Websites), choose Orchid and remove it. Menu names can differ slightly between versions of Facebook.</li>
      </ul>
      <p>Removing access stops any new information from being shared with Orchid. It does not by itself delete what Orchid has already stored, so send the email in step 1 as well if you want that removed.</p>
      <h3>3. What we delete</h3>
      <ul>
        <li>Your Orchid account details: email address, name, sign-in details and the hashed answer to your security question.</li>
        <li>Your Google connection, including the stored credential used to send and sync Gmail, and any Calendar access.</li>
        <li>Information we received through Facebook that identifies you, such as your Facebook name or ID and Facebook messages linked to your records.</li>
        <li>Information you entered or created in Orchid that belongs to you personally.</li>
      </ul>
      <h3>4. What we may keep</h3>
      <ul>
        <li><b>Team records.</b> Inquiries, clients, tasks and cases in a shared workspace belong to that workspace. Where we cannot delete them without harming your team’s records, we remove or anonymise the details that identify you instead.</li>
        <li><b>Legal and payment records.</b> We keep what the law requires us to keep. Our payment provider keeps its own billing records under its own policy.</li>
      </ul>
      <p>If your account is the only admin of a workspace, we will check with you first about what should happen to your team’s records.</p>
      <h3>5. How long it takes</h3>
      <p>We reply within 7 days to confirm we received your request, and we complete the deletion within 30 days. We email you when it is done.</p>
      <h3>6. Your rights</h3>
      <p>Under the Philippine Data Privacy Act of 2012 (Republic Act No. 10173) you may ask to access, correct or erase your personal data, and you may complain to the National Privacy Commission. The full details are in the <TLink href="/privacy">Privacy Policy</TLink>.</p>
      <h3>7. Contact</h3>
      <p>Questions or requests about your data: <a href="mailto:keandonato@404studio.click">keandonato@404studio.click</a>, Kean Carl Donato (404 Studio), Quezon City, Philippines.</p>
      <div className="acts"><TLink className="go alt" href="/privacy">Privacy policy</TLink><TLink className="go alt" href="/terms">Terms of service</TLink><TLink className="go alt" href="/orchid">What is Orchid?</TLink></div>
    </section>
  )
}
