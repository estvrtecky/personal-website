import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import type { Wish } from "@/schemas/wish";
import Card from "@/components/ui/Card";

export default function WishCard({ wish }: { wish: Wish }) {
  const locale = useLocale();
  const t = useTranslations("wishlist");

  const translation = wish.translations.find((t) => t.locale === locale)!;

  return (
    <Card className="p-3">
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
        <p className="mb-2 text-sm text-fg-muted">{translation.description}</p>
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
}
