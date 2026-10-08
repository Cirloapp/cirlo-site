import React from 'react';

const EMAIL='hello@cirloapp.com';
const updated='October 8, 2026';
const sections={
 '/privacy-policy':{
 title:'Privacy Policy',
 items:[
 ['About Cirlo','Cirlo is a women-focused platform for listening to lived-experience wisdom, discovering contributors (“Cirlos”), and, where available, exchanging private voice notes. Cirlo is operated by Origin & Co. This policy describes the website and app. Some described features may not yet be available.'],
 ['Information we collect','Depending on features you use, information may include your name, email, login and profile details, questions, voice recordings and transcripts if enabled, responses, reports, support correspondence, purchase and entitlement records, and device, usage, diagnostic and approximate location information inferred from IP address. We do not need your precise location to deliver the core experience. Please avoid including highly sensitive information in voice notes unless necessary.'],
 ['How information is collected and used','We receive information directly from you, from your interactions with Cirlo, and from service providers supporting sign-in, hosting, analytics, support and billing. We use it to operate accounts, deliver and moderate public wisdom and private connections, process subscriptions, communicate with you, detect abuse, maintain security, and improve reliability. We do not represent private voice notes as public contributions.'],
 ['Voice notes, public content and people who hear them','Approved Daily Wisdom answers and contributor profile information are intended to be publicly accessible and may be promoted with contributor permission. Private voice notes are intended for the sender, intended recipient, and authorized personnel or vendors when reasonably needed for safety, support, legal compliance or abuse investigation. Do not record another person without appropriate consent. Audio or transcripts may be processed by infrastructure providers to deliver the service. Any use of AI transcription, summarization, moderation or generation must be disclosed in the relevant product experience before it is enabled; this policy does not claim that those features are active.'],
 ['Sharing and service providers','Information may be shared with intended recipients, vetted contributors when you contact them, hosting/storage and authentication providers, app-store or payment providers, analytics/support/security providers, and authorities when legally required. The previously published policy identified Google Firebase as a possible infrastructure provider; the actual production vendor and SDK inventory must be confirmed before submission. We do not claim that data is never accessed by processors. We do not sell personal information as a business practice; if advertising or tracking practices change, we will update disclosures and obtain required choices or consent.'],
 ['Legal grounds and international rights','Where applicable, processing may rely on performance of a contract, legitimate interests, consent, or legal obligations. Depending on your location, you may request access, correction, deletion, portability, or object to or restrict processing. European or UK residents may have additional rights and may contact their regulator. International transfers, if applicable, require appropriate safeguards; contact us for details about actual providers and transfers.'],
 ['Retention, deletion and security','We keep information for as long as needed for the purposes described, subject to legal, accounting, fraud-prevention and dispute requirements. We delete or de-identify account data and associated user content following a verified deletion request, except information that must lawfully be retained; backups may expire on their normal cycle. Actual retention periods and deletion automation must be verified against the production backend. We use reasonable security safeguards, but no service can guarantee absolute security.'],
 ['Your choices and account deletion','You may contact '+EMAIL+' to request access, correction or deletion. Visit /delete-account for the external account-deletion request process. If account creation is offered in the app, an in-app deletion option must also be implemented before release. Deleting an account does not automatically cancel a subscription billed through Apple or Google; see /subscription-terms.'],
 ['Age eligibility','Cirlo is designed for adults aged 18 and older. We do not knowingly permit children to register. Contact us if you believe a minor provided personal data. The app age gate and store age rating must reflect the actual product.'],
 ['Changes and contact','We may revise this policy and publish a new date. Privacy questions and requests: '+EMAIL+'.']
 ]},
 '/terms-of-service':{
 title:'Terms of Service',
 items:[
 ['Service and acceptance','Cirlo, operated by Origin & Co., connects adults with stories and lived-experience wisdom from women (“Cirlos”). Some features are free; private connections and other features may require a paid membership. By using Cirlo you agree to these Terms, the Privacy Policy and any purchase terms shown at checkout.'],
 ['Eligibility and accounts','You must be at least 18 years old and provide accurate information. Protect your account and do not share access. Cirlo may verify contributor eligibility and remove accounts that violate safety rules.'],
 ['Not professional advice','Cirlos share personal experiences, not individualized medical, mental-health, legal, financial or emergency advice. Cirlo does not verify professional credentials or guarantee outcomes. For emergencies or immediate danger contact local emergency services or a qualified crisis resource.'],
 ['Community safety and moderation','Do not harass, threaten, exploit, impersonate, discriminate against or solicit unlawful content from others. Do not share another person’s confidential information or record without consent. Cirlo may review reports, remove content, restrict communications and suspend accounts to protect users. Users must have accessible in-app tools to report objectionable content and users, and to block unwanted contacts before user-generated messaging launches. Contact '+EMAIL+' to report safety concerns.'],
 ['Public and private content','You retain ownership of your original submissions. For content you intentionally submit for public publication, you grant Cirlo a nonexclusive, worldwide, royalty-free license to host, reproduce, display and distribute it to operate and promote the service, subject to any separate contributor agreement. Private messages are licensed only as needed to transmit, store, protect and moderate the service; they are not licensed for public marketing without separate permission. You warrant you have the necessary rights and consents. Deletion requests are governed by the Privacy Policy and applicable law.'],
 ['Subscriptions and purchases','Any paid plan, trial, recurring price, included connections, rollover policy, renewal schedule and cancellation method must be clearly shown before purchase and in /subscription-terms. App purchases may be subject to Apple or Google billing rules. No price or trial is guaranteed until offered at checkout.'],
 ['Contributor relationships','Contributor payment, approval standards, intellectual-property permissions and taxes must be set out in a separate written contributor agreement. These consumer Terms do not establish employment or independent-contractor status.'],
 ['Availability and termination','We may change features, remove harmful content, or suspend accounts for abuse or violations. We do not guarantee a specific contributor, response time or outcome unless expressly promised in the purchase terms.'],
 ['Disclaimers and liability','The service is provided as available, subject to rights that cannot be excluded by law. To the extent permitted by law, Cirlo and Origin & Co. disclaim implied warranties and are not liable for indirect or consequential damages. Nothing here limits liability that cannot legally be limited. Specific liability caps and dispute provisions should be finalized with counsel before paid launch.'],
 ['Governing law and contact','These Terms are governed by Missouri law, subject to mandatory consumer protections that apply in your location. Questions: '+EMAIL+'.']
 ]},
 '/eula':{
 title:'End User License Agreement',
 items:[
 ['License','Origin & Co. grants adults a limited, revocable, nonexclusive, nontransferable license to use the Cirlo app for lawful personal purposes, subject to the Terms of Service.'],
 ['Ownership and restrictions','Cirlo owns its app software and branding; contributors retain rights in their original submissions subject to licenses and agreements. Do not reverse engineer where prohibited, attack the service, circumvent payment controls, or use it unlawfully.'],
 ['User content and privacy','Content rights, privacy, reporting and account deletion are described in the Terms of Service and Privacy Policy. Public contributor content and private member voice notes have different visibility and permissions.'],
 ['No professional advice','Cirlo facilitates lived-experience conversations, not medical, mental-health, legal or financial services.'],
 ['Third-party stores','Apple and Google are not responsible for providing support for Cirlo. Applicable app-store terms and mandatory rights continue to apply. Store-specific licensed application provisions should be reviewed with counsel.'],
 ['Contact','For support or license questions: '+EMAIL+'.']
 ]},
 '/accessibility':{
 title:'Accessibility Statement',
 items:[
 ['Our commitment','Cirlo aims to make its website and mobile experiences accessible to people with disabilities. We use WCAG guidance as a target and are continuing to assess the product. We do not claim that a complete independent accessibility audit has been performed.'],
 ['Areas under review','We are evaluating keyboard navigation, focus visibility, readable contrast, labels for controls, text resizing, reduced motion, screen-reader support, and accessible alternatives for audio content. These items require testing in the actual web and mobile products.'],
 ['Feedback and assistance','If you experience an accessibility barrier, contact '+EMAIL+' with the page, device and issue. We will work with you to provide a reasonable alternative where possible.']
 ]},
 '/subscription-terms':{
 title:'Membership & Cancellation',
 items:[
 ['Plans and trial','Cirlo may offer a membership with private Cirlo Connections, listening access and saved content. A proposed plan has included a seven-day trial, $24.99 monthly renewal, three monthly private connections and a limited rollover period; these are planning terms, not an active offer unless the exact terms appear at checkout. The actual purchase screen controls the price, trial eligibility, allowances and renewal frequency.'],
 ['Recurring billing','If you accept an auto-renewing subscription, the applicable store or payment provider charges the disclosed amount at the disclosed interval until cancellation. Any introductory offer and conversion price must be clearly displayed before confirmation.'],
 ['How to cancel','For Apple-billed subscriptions, use iPhone Settings > your name > Subscriptions or https://apps.apple.com/account/subscriptions. For Google Play subscriptions, use Google Play > Payments & subscriptions > Subscriptions or https://play.google.com/store/account/subscriptions. For any direct-web billing, use the account billing controls offered at purchase or contact '+EMAIL+'. Uninstalling the app or deleting an account does not necessarily cancel store billing.'],
 ['Refunds and access','Apple and Google generally manage refunds for purchases billed by their stores under their applicable rules. Direct purchases are subject to the refund terms displayed at checkout and mandatory consumer rights. Access after cancellation and handling of unused connections must match the actual product and checkout disclosures.'],
 ['Help','For billing assistance contact '+EMAIL+'.']
 ]},
 '/delete-account':{
 title:'Delete Your Cirlo Account',
 items:[
 ['Request deletion','To request deletion of your Cirlo account and associated data, email '+EMAIL+' from the email address associated with your account, with the subject “Delete my Cirlo account.” If you cannot access that email, explain this in your request so we can verify ownership. Do not send passwords or payment card details.'],
 ['What happens next','We will verify your request, explain any information we must retain for legal or security reasons, and confirm completion. Account data and associated user-generated content should be removed or de-identified unless retention is legally required. This page is a human-assisted request channel, not a claim that deletion is already automated.'],
 ['Important subscription reminder','Account deletion does not automatically stop billing by Apple or Google. Cancel separately through your app-store subscription settings. See /subscription-terms.'],
 ['App requirement','If Cirlo allows account creation in its mobile app, it must also offer a readily discoverable in-app account-deletion initiation flow. This website page alone is not sufficient for app-store approval.']
 ]},
 '/support':{
 title:'Cirlo Support & Safety',
 items:[
 ['Contact','For account help, subscription questions, privacy requests, accessibility issues or safety reports, contact '+EMAIL+'. Include the email linked to your account and a description of the issue; do not include passwords or sensitive voice-note contents unless necessary.'],
 ['Report or block','If you encounter harassment, objectionable content or an unsafe interaction, use the in-app report or block controls when available and email '+EMAIL+'. These controls must be implemented and tested before user-to-user features launch.'],
 ['Emergencies','Cirlo is not an emergency service or crisis hotline. For immediate danger, contact local emergency services.']
 ]}
};
export default function LegalPages(){
 const path=window.location.pathname.replace(/\/$/,'')||'/';
 const page=sections[path]||sections['/support'];
 return <div style={{background:'#F3F5EC',color:'#242A20',minHeight:'100vh',fontFamily:'Arial,sans-serif',lineHeight:1.65}}>
  <header style={{maxWidth:880,margin:'auto',padding:'28px 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
   <a href="/" style={{fontWeight:800,letterSpacing:5,color:'#242A20',textDecoration:'none'}}>CIRLO</a>
   <a href="/" style={{color:'#242A20'}}>Back to Cirlo</a>
  </header>
  <main style={{maxWidth:880,margin:'auto',padding:'28px 24px 80px'}}>
   <h1 style={{fontFamily:'Georgia,serif',fontSize:'clamp(36px,6vw,58px)',fontWeight:400}}>{page.title}</h1>
   <p style={{color:'#5B6257'}}>Last updated: {updated}</p>
   {page.items.map(([heading,body])=><section key={heading} style={{marginTop:32}}><h2 style={{fontSize:21}}>{heading}</h2><p>{body}</p></section>)}
  </main>
  <footer style={{borderTop:'1px solid #CBD2C3',padding:'28px 24px',maxWidth:880,margin:'auto',display:'flex',gap:16,flexWrap:'wrap'}}>
   {Object.entries(sections).map(([url,p])=><a key={url} href={url} style={{fontSize:13,color:'#242A20'}}>{p.title}</a>)}
  </footer>
 </div>
}
