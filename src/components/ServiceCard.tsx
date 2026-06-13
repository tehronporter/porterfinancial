import Icon from "./Icon";
import type { Service } from "@/lib/content";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gold/50 hover:shadow-md">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>

      <h3 className="mt-5 text-lg leading-snug">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {service.description}
      </p>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">
          Key Areas Include
        </p>
        <ul className="mt-3 space-y-2">
          {service.keyAreas.map((area) => (
            <li
              key={area}
              className="flex items-start gap-2 text-sm text-ink"
            >
              <svg
                viewBox="0 0 20 20"
                className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8.5 13.6 4.9 10l-1.2 1.2 4.8 4.8 9-9L16.3 6z" />
              </svg>
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-line pt-4">
        <p className="text-xs leading-relaxed text-muted">
          <span className="font-semibold uppercase tracking-[0.12em] text-navy">
            Ideal for:
          </span>{" "}
          {service.idealFor}
        </p>
      </div>
    </article>
  );
}
