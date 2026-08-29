"use client";
import Image from "next/image";
import Head from "next/head"; // ✅ SEO ADD

export default function AboutPage() {
  return (
    <>
      {/* ✅ SEO META DATA */}
      <Head>
        <title>About | Alok Narmada Shivling | Original Narmadeshwar Shivling</title>

        <meta
          name="description"
          content="Shubham Narmada Shivling provides original Narmadeshwar Shivling sourced from Narmada river. Buy authentic Shivling for home puja, temple installation, and spiritual worship with worldwide delivery."
        />

        {/* 100+ Keyword SEO Boost */}
        <meta
          name="keywords"
          content="
          shubham narmada shivling,narmada shivling,shivling,narmadeshwar shivling,
          original shivling,buy shivling online,temple shivling,home puja shivling,
          natural shivling,swayambhu shivling,banana lingam,janeudhari shivling,
          tilakdhari shivling,white shivling,small shivling,big shivling,
          shivling india,mahadev shivling,bholenath shivling,
          religious items store,spiritual shop india,hindu puja items,
          authentic shivling supplier,narmada river stone,holy stone shivling,
          vedic puja products,traditional shivling worship,
          narmada stone idol,temple installation shivling,
          export shivling worldwide,online puja store,
          premium shivling,certified shivling,spiritual ecommerce,
          hindu temple products,shiv devotion items,
          sacred stone worship,mahakal shivling,
          original hindu spiritual items,
          natural narmadeshwar shivling seller,
          best shivling price india,
          narmada shivling shop,
          authentic shivling seller india
          "
        />

        {/* Open Graph */}
        <meta property="og:title" content="Shubham Narmada Shivling" />
        <meta property="og:description" content="Original Narmada Shivling supplier" />
        <meta property="og:url" content="https://shubhamnarmadashivling.com/about" />
        <meta property="og:type" content="website" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://shubhamnarmadashivling.com/about"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shubham Narmada Shivling",
              url: "https://shubhamnarmadashivling.com",
              logo: "https://shubhamnarmadashivling.com/logo.png",
              description:
                "Original Narmadeshwar Shivling supplier providing authentic spiritual products worldwide.",
              sameAs: [
                "https://www.facebook.com/share/16nQ9SpdD5/",
                "https://www.instagram.com/narmadashivling09/",
                "https://www.youtube.com/@narmadashivling09"
              ]
            }),
          }}
        />
      </Head>

      {/* ======= YOUR ORIGINAL CODE (UNCHANGED) ======= */}

      <div className="about-page px-4 py-10 bg-white text-gray-800">
        <main className="container mx-auto max-w-6xl mt-24 space-y-10">

        {/* IMAGE 1 FULL WIDTH */}
        <section className="w-full mb-8">
          <Image
            src="/alok2.png"
            alt="Special Narmada Shivling Top"
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </section>

        {/* Welcome Section */}
        <section className="welcome-section text-lg leading-relaxed space-y-4">
          <p>
            <strong>बकावां की प्रसिद्ध Shubham Narmada Shivling Shop</strong> — यहाँ आपको
            Original Narmada Shivling, Banana Lingam, Swayambhu Shivling,
            Divya Narmada Shivling और Temple Shivling जैसे सभी प्रकार के
            शिवलिंग मिलते हैं। हम Worldwide delivery और 24×7 support प्रदान
            करते हैं ताकि हर भक्त तक भगवान शिव का आशीर्वाद पहुँच सके।
            चाहे आप Shivling for home puja चाहते हों या Shivling for temple
            installation, हमारी दुकान ही सबसे विश्वसनीय और पवित्र स्थान है।
          </p>
          <p>
            साथ ही यहाँ आपको{" "}
            <em>Janeudhari Narmada Shivling</em>,{" "}
            <em>Tilakdhari Narmada Shivling</em>,{" "}
            <em>Swayambhu Narmada Shivling</em>,{" "}
            <em>Natural Narmada Shivling</em>,{" "}
            <em>Original (100%) Narmada Shivling</em>,{" "}
            <em>Antique White Shivling</em>,{" "}
            <em>Small Shivling</em> और{" "}
            <em>Big Temple Pooja Shivling</em> भी उपलब्ध हैं। 
            हम <strong>1 इंच से लेकर 15 फीट</strong> तक के आकार में Shivling उपलब्ध कराते हैं।
          </p>
        </section>

        {/* Mission Section */}
        <section className="mission-section space-y-3">
          <h2 className="text-2xl font-semibold">📖 Our Mission</h2>
          <p className="leading-relaxed text-gray-700">
            हमारा लक्ष्य है कि <strong>Narmadeshwar Shivling</strong> की पवित्रता और
            आध्यात्मिक ऊर्जा को विश्वभर में पहुँचाया जाए।
            हम <em>Traditional Narmadeshwar Shivling export</em> और{" "}
            <em>Worldwide home delivery</em> के माध्यम से भक्तों को सुविधा और
            विश्वास प्रदान करते हैं।
            हमारी टीम हर समय उपलब्ध है ताकि आपकी भक्ति और सुविधा दोनों का ध्यान
            रखा जा सके।
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section space-y-3">
          <h2 className="text-2xl font-semibold">🌍 Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>✔️ 100% Original Narmadeshwar Shivling</li>
            <li>✔️ Worldwide Delivery & 24×7 Support</li>
            <li>✔️ Wholesale & Retail Availability</li>
            <li>✔️ Trusted by thousands of devotees</li>
          </ul>
        </section>

        {/* IMAGE 2 FULL WIDTH */}
        <section className="w-full mb-8">
          <Image
            src="/shubham1.png"
            alt="Special Narmada Shivling Top"
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </section>

      </main>
    </div>
    </>
  );
}
