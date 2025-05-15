import React from 'react'

function page() {
  return (
     <section className="px-4 sm:px-24 sm:py-14 text-gray-800">
            <h1 className="text-5xl font-semibold mb-4">Cookie Policy </h1>
            

            <section>
                <h2 className="text-4xl font-semibold mt-16">Introduction</h2>
                <p className="text-lg leading-relaxed mt-6">
                    This Cookie Policy page explains how Kavelogics (we, us, or our) uses cookies and similar technologies on our website. By using our Website, you give consent to the use of cookies in accordance with this Cookie Policy.
                </p>

                <h2 className="text-4xl font-semibold mt-10">What Are Cookies?</h2>
                <p className="text-lg leading-relaxed mt-6">
                   Cookies are small text files that are placed on your device (computer, smartphone, or other electronic devices) when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
                </p>
                <h2 className="text-4xl font-semibold mt-10">How We Use Cookies?</h2>
                <p className="text-lg leading-relaxed mt-6">
                   We use cookies to improve your experience on our Website, including:
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-3xl font-semibold mt-10">1. Essential Cookies</h2>
                <p className="mt-8 text-lg">
                   These cookies are necessary for the Website to function properly. They enable you to navigate the site and use its features.
                </p>
                <h2 className="text-3xl font-semibold mt-10">2. Performance Cookies</h2>
                <p className="mt-8 text-lg">
                    These cookies collect information about how you use our Website, such as which pages you visit most often. This data helps us improve the Websites performance.
                </p>

                <h2 className="text-3xl font-semibold mt-10">3. Functionality Cookies</h2>
                <p className="mt-8 text-lg">
                   These cookies allow the Website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personalized features.
                </p>

                <h2 className="text-3xl font-semibold mt-10">4. Targeting Cookie</h2>
                <p className="mt-8 text-lg">
                    These cookies are used to deliver content that is more relevant to you and your interests. They may be used to deliver targeted advertisements or limit the number of times you see an advertisement.
                </p>
            </section>

            <section className="mt-10">
                <h1 className="text-4xl font-semibold mt-16">Types of Cookies We Use
                </h1>
                <h1 className="text-3xl font-semibold mt-10">1. Session Cookies
                </h1>
                <p className="mt-8 text-lg">These are temporary cookies that expire when you close your browser.</p>

                <h2 className="text-3xl font-semibold mt-10">2. Persistent Cookies</h2>
                <p className="mt-8 text-lg">
                   Sharing information with our affiliates, including our parent company and subsidiaries, is subject to them adhering to this privacy policy.
                </p>

                <h2 className="text-3xl font-semibold mt-10">3. Third-Party Cookies </h2>
                <p className="mt-8 text-lg">
                   We may also use third-party cookies from service providers such as Google Analytics to help us understand how visitors interact with our Website. These cookies are managed by the third parties and we do not control their use.
                </p>

                <h2 className="text-3xl font-semibold mt-10">4. Managing Cookies</h2>
                <p className="mt-8 text-lg">
                    You can control and manage cookies in various ways. Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. <br /> <br /> 
                    Please note that blocking all cookies will have a negative impact upon the usability of many websites. If you block cookies, you may not be able to use all the features on our Website.
                </p>   
            </section>
    
            <section>
                <h1 className="text-4xl font-semibold mt-16">Changes to This Cookie Policy</h1>
                <p className="mt-6 text-lg leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices and services. We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies and related technologies.
                </p>
            </section>

            <section>
                <h1 className="text-4xl font-bold mt-16">Contact Us</h1>
                <p className="mt-4 text-lg leading-relaxed">
                    If you have questions about this Privacy Policy, you may contact us:
                </p>
                <ul className="leading-relaxed text-lg space-y-1 mt-4 list-none">
                    <li className="mt-6">
                        By email
                        <a href="mailto:info@kavelogics.com" className="text-[#00D280] ml-2" >info@kavelogics.com</a>
                    </li>
                    <li className="mt-6">
                        By visiting
                        <a href="https://www.kavelogics.com" className="text-[#00D280] underline ml-2">this</a> on our website.
                    </li>
                </ul>
            </section>
        </section>
  )
}

export default page
