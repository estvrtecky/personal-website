import { cn } from "@/lib/shared/utils";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Card({ className, children, ...props }: Props) {
  return (
    <div
      className={cn(
        "w-full max-w-7xl border border-(--border) rounded-2xl bg-(--bg)",
        className,
      )}
      {...props}>
      {children}
    </div>
  );
}
