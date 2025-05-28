import React from 'react'

function page() {
    return (
        <>
            <section className="spacing-secton py-8 sm:py-14 text-gray-800">
                <h1 className="text-3xl sm:text-5xl font-semibold sm:text-bold mb-4">Terms and Conditions </h1>

                <section>
                    <h2 className="text-3xl sm:text-4xl font-semibold sm:text-bold mt-18">Introduction</h2>
                    <p className="text-lg leading-relaxed mt-6">
                        Welcome to mindsees! These terms and conditions outline the rules and regulations for the use of mindsees website. By accessing this website, we assume you accept these terms and conditions. Do not continue to use mindsees if you do not agree to all of the terms and conditions stated on this page.
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-semibold sm:text-bold mt-14">Definitions</h2>
                    <p className="text-lg leading-relaxed mt-6">
                        <ul className="text-lg leading-relaxed list-disc ml-6 space-y-2 my-6">
                            <li className='mt-6'>Client, You, and Your refer to you, the person accessing this website and accepting the Company’s terms and conditions.</li>
                            <li className='mt-6'>Company, Ourselves, We, Our, and Us refer to mindsees.</li>
                            <li className='mt-6'>Parties, refers to both the Client and Ourselves.</li>

                        </ul>
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-3xl sm:text-4xl font-semibold sm:text-bold mt-14">Intellectual Property</h2>
                    <p className="mt-8 text-lg">
                        All content and materials on this website, including but not limited to text, graphics, logos, images, and software, are the intellectual property of mindsees or its licensors. You may not reproduce, distribute, or create derivative works from any of the content without explicit permission.
                    </p>


                    <h2 className="text-3xl sm:text-4xl font-semibold sm:text-bold mt-14">User Accounts</h2>
                    <p className="mt-8 text-lg">
                        To access certain features of our website, you may be required to create an account. You agree to provide accurate and complete information and to update your account information as necessary. You are responsible for maintaining the confidentiality of your account login details and for all activities that occur under your account.
                    </p>


                    <h2 className="text-3xl sm:text-4xl font-semibold sm:text-bold mt-14">User Content</h2>
                    <p className="mt-8 text-lg">
                        Users may have the opportunity to post content, such as comments and reviews, on our website. mindsees does not pre-screen, edit, or endorse user content and is not responsible for any user-generated content. By posting content, you grant mindsees a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute your content in any media.
                    </p>



                    <h2 className="text-3xl sm:text-4xl font-semibold sm:text-bold mt-14">Limitation of Liability</h2>
                    <p className="mt-8 text-lg">
                        To the fullest extent permitted by law, mindsees, its affiliates, and their respective directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the website or services.
                    </p>



                    <h2 className="text-3xl sm:text-4xl font-semibold sm:text-bold mt-14">Indemnification</h2>
                    <p className="mt-8 text-lg">
                        You agree to indemnify and hold mindsees, its affiliates, and their respective directors, employees, and agents harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the website or services, your violation of these terms, or your infringement of any third-party rights.
                    </p>




                    <h2 className="text-3xl sm:text-4xl font-semibold sm:text-bold mt-14">Governing Law</h2>
                    <p className="mt-8 text-lg">
                        These terms and conditions are governed by and construed in accordance with the laws of Pakistan. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of the United States.
                    </p>


                    <h2 className="text-3xl sm:text-4xl font-semibold sm:text-bold mt-14">Modifications to Terms</h2>
                    <p className="mt-8 text-lg">
                        mindsees reserves the right to revise these terms at any time. Your continued use of the website and services after the new terms take effect constitutes your acceptance of the new terms.
                    </p>
                </section>
                <section>
                    <h1 className="text-3xl sm:text-4xl font-semibold sm:text-bold mt-16">Contact Us</h1>
                    <p className="mt-4 text-lg leading-relaxed">
                        If you have questions about this Privacy Policy, you may contact us:
                    </p>
                    <ul className="leading-relaxed text-lg space-y-1 mt-4 list-none">
                        <li className="mt-6">
                            By email
                            <a href="mailto:info@mindsees.com" className="text-[#00D280] ml-2" >info@mindsees.com</a>
                        </li>
                        <li className="mt-6">
                            By visiting
                            <a href="https://www.mindsees.com" className="text-[#00D280] underline ml-2">this</a> on our website.
                        </li>
                    </ul>
                </section>
            </section>
        </>
    )
}

export default page
