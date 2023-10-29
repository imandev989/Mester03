"use client";

import { useTranslations } from "next-intl";
import WonderfullSuggestion from "@/components/wonderfullSuggestion";
import PictureAdvertise from "@/components/pictureAdvertise";
import CardScrollType from "@/components/cardscrolltype";
import CardGridType from "@/components/cardgridtype";
import Stories from "@/components/Stories/index";
// import Sidebar from "@/components/sidebarMobileRTL/Sidebar";
import Slider from "@/components/imagesliders/Slider";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main>
      
      <section>
        <Stories />
      </section>
      <section>
        <Slider/>
      </section>
      <section>
        <WonderfullSuggestion />
      </section>
      <section>
        <PictureAdvertise count="1" />
      </section>
      <section>
        <PictureAdvertise count="2" />
      </section>
      <section>
        <PictureAdvertise count="4" />
      </section>
      <section>
        <CardScrollType />
      </section>
      <section>
        <CardGridType />
      </section>

    </main>
  );
}
