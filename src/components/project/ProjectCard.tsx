import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandSupabase,
  TbBrandTypescript,
} from "react-icons/tb";

import Card from "@/components/ui/Card";

export default function ProjectCard({
  name,
  description,
  status,
  imageUrl,
  imageAlt,
  link,
}: {
  name: string;
  description: string;
  status: "done" | "in progress";
  imageUrl?: string;
  imageAlt?: string;
  link?: string;
}) {
  const t = useTranslations("home.projects");
  const statusText =
    status === "done" ? t("status.done") : t("status.inProgress");

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div
          className="flex gap-1 px-4 py-3.5"
          aria-hidden>
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        {link && (
          <span className="mr-4 font-mono text-xs text-fg-muted">{link}</span>
        )}
      </div>
      <div className="relative overflow-hidden flex items-center justify-center aspect-video border-y border-(--border) font-mono bg-bg text-fg-muted">
        {imageUrl && imageAlt && (
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        )}
        {status === "in progress" && t("comingSoon")}
      </div>
      <div className="px-4 py-3">
        <h3 className="mb-1 font-heading font-semibold text-xl">{name}</h3>
        <p className="mb-4 text-fg-muted">{description}</p>
        <div className="flex items-center justify-between pt-3 border-t border-(--border)">
          <div className="inline-flex items-center">
            <div className="relative w-4 h-4 mr-1.5">
              <div
                className={`absolute w-4 h-4 rounded-full ${status === "done" ? "bg-green-500/25" : "bg-amber-500/25"} animate-pulse`}></div>
              <div
                className={`absolute top-1 left-1 w-2 h-2 rounded-full ${status === "done" ? "bg-green-500" : "bg-amber-500"}`}></div>
            </div>
            <span
              className={`font-mono text-xs ${status === "done" ? "text-green-500" : "text-amber-500"}`}>
              {statusText}
            </span>
          </div>
          <div className="flex">
            <div className="flex items-center justify-center p-2 border border-(--border) rounded-full bg-bg">
              <TbBrandTypescript />
            </div>
            <div className="flex items-center justify-center -ml-2 p-2 border border-(--border) rounded-full bg-bg">
              <TbBrandNextjs />
            </div>
            <div className="flex items-center justify-center -ml-2 p-2 border border-(--border) rounded-full bg-bg">
              <TbBrandReact />
            </div>
            <div className="flex items-center justify-center -ml-2 p-2 border border-(--border) rounded-full bg-bg">
              <TbBrandSupabase />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
