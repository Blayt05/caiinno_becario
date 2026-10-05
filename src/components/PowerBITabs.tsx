"use client";

import { useState } from "react";

export type PowerBIReport = { title: string; url: string };

export default function PowerBITabs({ title, reports }: { title: string; reports: PowerBIReport[] }) {
  const [active, setActive] = useState(0);
  const report = reports[active];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-2xl md:text-3xl font-bold">{title}</h1>

      <div role="tablist" className="mb-6 flex flex-wrap justify-center gap-2">
        {reports.map((r, i) => (
          <button
            key={r.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
              i === active ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {r.title}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg bg-white p-4 shadow-lg">
        <iframe
          key={report.url + active}
          src={report.url}
          title={report.title}
          allowFullScreen
          className="aspect-[16/10] w-full border-0"
        />
      </div>
    </div>
  );
}
