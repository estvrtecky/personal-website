import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { FaArrowUpRightFromSquare, FaHeartCircleXmark } from "react-icons/fa6";

import { createClient } from "@/lib/supabase/client";
import { wishSchema } from "@/schemas/wish";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("wishlist");

  return {
    title: t("title"),
    robots: "noindex, nofollow",
  };
}

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations("wishlist");

  const supabase = createClient();
  const { data, error } = await supabase
    .from("wishlist")
    .select("*, translations:wishlist_translations(*)");

  if (error) {
    console.error("Error while fetching from Supabase");
  }

  const parsed = wishSchema.array().safeParse(data);
  if (!parsed.success) {
    console.error(parsed.error);
  }

  return (
    <main>
      <Section className="min-h-dvh mt-[-64.8px] mb-0 pt-[128.8px] pb-16">
        <div className="w-full max-w-7xl">
          <h1 className="mb-4 font-heading font-bold text-5xl">{t("title")}</h1>
          <p className="max-w-2xl text-fg-muted">{t("description")}</p>
        </div>
        <div className="w-full max-w-7xl">
          {!parsed.data && (
            <Card className="flex flex-col items-center justify-center max-w-2xl h-64 mx-auto">
              <FaHeartCircleXmark
                className="mb-3 text-fg-muted text-7xl"
                aria-hidden
              />
              <h2 className="mb-2 font-heading font-bold text-3xl">
                {t("empty.title")}
              </h2>
              <p className="text-fg-muted">{t("empty.description")}</p>
            </Card>
          )}
          {parsed.data && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {parsed.data.map((wish) => {
                const translation = wish.translations.find(
                  (t) => t.locale === locale,
                )!;

                return (
                  <Card
                    key={wish.id}
                    className="p-3">
                    <div className="relative overflow-hidden flex items-center justify-center aspect-square rounded text-fg-muted bg-bg">
                      {wish.image_url && (
                        <Image
                          src={wish.image_url}
                          alt={translation.name}
                          fill
                          className="object-cover"
                        />
                      )}
                      {!wish.image_url && "No image"}
                    </div>
                    <div className="pt-2">
                      <p className="mb-1 font-heading font-medium text-xl">
                        {translation.name}
                      </p>
                      <p className="mb-2 text-sm text-fg-muted">
                        {translation.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-2xl">
                          {new Intl.NumberFormat(locale, {
                            style: "currency",
                            currency: "EUR",
                          }).format(wish.price / 100)}
                        </p>
                        <Link
                          href={wish.link}
                          target="_blank"
                          className="p-2 rounded text-btn bg-fg">
                          <FaArrowUpRightFromSquare aria-hidden />
                          <span className="sr-only">{t("link")}</span>
                        </Link>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </Section>
    </main>
  );
}
