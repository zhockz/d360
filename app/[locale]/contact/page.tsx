import { useTranslations } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import {getStrapiData} from "@/lib/StrapiApis";

// export async function generateMetadata({ params: { locale } }) {
//   const strapiDataGlobal =  await getStrapiData("/api/global?locale=" + locale);
//   console.log(strapiDataGlobal.data.siteName);
//   return {
//     title: strapiDataGlobal.data.siteName,
//     description: strapiDataGlobal.data.siteDescription 
//   };
// }



export default function Home() {
  const t = useTranslations("HomePage");

  
  return (
    <section>
      <div className="spacer-40"></div>
      <div className="container">
        <div className="flex w-full items-center justify-center">
          <h1>{t("title")}</h1>
        </div>
      </div>
    </section>
  );
}
