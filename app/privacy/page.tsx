import type { Metadata } from 'next'
import { pageMeta } from '@/lib/meta'
import TLink from '@/components/TLink'

export const metadata: Metadata = pageMeta('privacy', '/privacy')

export default function PrivacyPage() {
  return (
    <section className="orc on" data-page="privacy">
      <h2><span className="o">Privacy</span><span className="in">policy.</span></h2>
      <p className="lm">Last updated: October 18, 2026</p>
      <p className="lead">This policy explains what information Orchid collects, how it is used, and the choices you have. It covers Orchid CRM and the pages on 404studio.click that describe it.</p>
      <h3>1. Who we are</h3>
      <p>Orchid is built and operated by Kean Carl Donato (404 Studio), Quezon City, Philippines. In this policy “Orchid”, “we” and “us” mean that operator. You can reach us at <a href="mailto:keandonato@404studio.click">keandonato@404studio.click</a>.</p>
      <h3>2. Information we collect</h3>
      <ul>
        <li><b>Account details.</b> Your email address, your name if you give it, and your password. Passwords are handled by our authentication provider and stored in a protected (hashed) form. If you set a security question to reset a forgotten password, only a scrambled (hashed) version of your answer is stored.</li>
        <li><b>Work you put in Orchid.</b> Inquiries, clients, tasks, cases, notes, messages and similar records that you or your team add, or that arrive through an inquiry form.</li>
        <li><b>Inquiry form messages.</b> If you send us an inquiry, we receive the name, email address and message you type.</li>
        <li><b>Google information</b>, only if you use Google features. See section 3.</li>
        <li><b>Payment.</b> Card or wallet details are entered on the payment provider’s secure page. Orchid does not see or store them.</li>
        <li><b>Technical data.</b> Our hosting and infrastructure providers may log basic technical data such as IP address, browser type and time of request.</li>
      </ul>
      <h3>3. Google user data</h3>
      <p>Orchid offers three optional Google features. We ask only for the access each one needs.</p>
      <h4>Sign in with Google</h4>
      <p>If you choose “Continue with Google”, Google shares your name, email address and profile picture with us (the standard <code>openid</code>, <code>email</code> and <code>profile</code> permissions). We use them to create and recognise your Orchid account.</p>
      <h4>Google Calendar</h4>
      <p>If you connect Google Calendar, Orchid can see and edit events on your calendars (the <code>calendar.events</code> permission). We use this only to show your events inside Orchid, and to create or update events that you ask for, such as a follow-up call with a client. The short-lived Google access token is kept in your browser session.</p>
      <h4>Gmail</h4>
      <p>If you connect your Google account for email, Orchid uses that connection to send emails that you write from your own Gmail address, and to bring replies to those emails into the matching client’s message log. The connection credential is stored securely on our server so that sending and syncing keep working until you disconnect.</p>
      <h4>How we handle Google data</h4>
      <ul>
        <li>We use Google user data only to provide and improve the user-facing features described above.</li>
        <li>We do not sell Google user data, and we do not use it for advertising, including retargeting or interest-based ads.</li>
        <li>We do not use Google user data to develop, improve or train generalized artificial intelligence or machine learning models.</li>
        <li>We do not allow people to read your Google data unless you give permission for a specific item, it is needed for security or to follow the law, or the data is combined and anonymised for internal operations.</li>
        <li>We do not transfer Google user data to others except to provide the features you use, to comply with law, or as part of a merger or sale of the service with notice to you.</li>
      </ul>
      <div className="note"><p>Orchid’s use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" rel="noopener">Google API Services User Data Policy</a>, including the Limited Use requirements.</p></div>
      <h3>4. How we use information</h3>
      <ul>
        <li>To run Orchid: sign you in, show your records, send the emails you ask us to send, and create the tasks and events you ask for.</li>
        <li>To keep Orchid secure, prevent misuse and fix problems.</li>
        <li>To answer your questions and inquiries.</li>
        <li>To manage your subscription.</li>
      </ul>
      <h3>5. AI assistance</h3>
      <p>Orchid includes an AI assistant and drafting tools. When you use them, the text you submit and the record details needed for that request are sent to an AI service provider that works for us, to produce a suggestion for you. Suggestions are shown to you to review. Nothing is sent to anyone automatically. As stated in section 3, we do not use Google user data to train generalized AI or machine learning models.</p>
      <h3>6. Who we share information with</h3>
      <p>We do not sell personal information. We share it only with:</p>
      <ul>
        <li><b>Service providers</b> that help us run Orchid: our database, authentication and server-function host (Supabase), our AI service provider, and our payment provider. They may process information only to provide their service to us.</li>
        <li><b>Your workspace.</b> Records in Orchid are visible to the members of your team that your admin has approved.</li>
        <li><b>Authorities or others</b> when the law requires it, or to protect the rights and safety of users and the service.</li>
      </ul>
      <h3>7. Storage, security and retention</h3>
      <p>Information is stored with our hosting provider, which may process it in countries outside the Philippines. Data is sent over encrypted (HTTPS) connections, and access to records is limited to approved members. No online service is perfectly secure, so we cannot guarantee absolute security.</p>
      <p>We keep your information while your account is active and as long as needed to provide Orchid. When you ask us to delete your account or data, we delete or anonymise it within a reasonable time, unless we must keep something to meet legal duties.</p>
      <h3>8. Your choices and rights</h3>
      <ul>
        <li><b>Disconnect Google.</b> You can disconnect Calendar or Gmail inside Orchid at any time. You can also remove Orchid’s access from your <a href="https://myaccount.google.com/permissions" rel="noopener">Google Account permissions</a> page.</li>
        <li><b>Access, correct or delete.</b> Email <a href="mailto:keandonato@404studio.click">keandonato@404studio.click</a> to see, correct or delete your personal information, or to delete your account. You can also follow the steps on the <TLink href="/data-deletion">data deletion page</TLink>.</li>
        <li><b>Philippine privacy law.</b> We aim to handle personal information in line with the Philippine Data Privacy Act of 2012 (Republic Act No. 10173). You may object to processing, ask for a copy of your data, and complain to the National Privacy Commission.</li>
      </ul>
      <h3>9. Cookies, browser storage and third parties</h3>
      <p>Orchid keeps your sign-in session and a few settings in your browser’s storage so you stay signed in. Orchid does not run advertising or analytics trackers. Our pages load fonts, images and code libraries from third-party hosts (for example Google Fonts and content delivery networks), which may receive your IP address when your browser fetches them.</p>
      <h3>10. Children</h3>
      <p>Orchid is made for businesses and is not directed to children. We do not knowingly collect information from children. If you believe a child has given us information, contact us and we will delete it.</p>
      <h3>11. Changes to this policy</h3>
      <p>We may update this policy. When we make an important change we will update the date above and, where appropriate, tell you inside Orchid or by email.</p>
      <h3>12. Contact</h3>
      <p>Questions or requests about privacy: <a href="mailto:keandonato@404studio.click">keandonato@404studio.click</a>, Kean Carl Donato (404 Studio), Quezon City, Philippines.</p>
      <div className="acts"><TLink className="go alt" href="/terms">Terms of service</TLink><TLink className="go alt" href="/orchid">What is Orchid?</TLink></div>
    </section>
  )
}
