import PowerBITabs from "@/components/PowerBITabs";

const reports = [
  { title: "Evolución de la Propiedad Industrial", url: "https://app.powerbi.com/view?r=eyJrIjoiZDllYWFmMzgtODgwOC00NjA2LTljNDktNDIyZWQ3MjUxZDFkIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9" },
  { title: "Radiografía Estatal", url: "https://app.powerbi.com/view?r=eyJrIjoiMjU4ZWE4ODAtZTlmNC00MzRmLWIwN2YtMDQyN2YxMzQ4YjgxIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9" },
  { title: "Mapa Dinámico", url: "https://app.powerbi.com/view?r=eyJrIjoiMmY2OTI3M2MtN2Q5YS00NTA2LTg4N2EtZmZlM2Q3NmQ4NTFiIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9" },
  { title: "Evolución de la propiedad Industrial", url: "https://app.powerbi.com/view?r=eyJrIjoiNzk1ZDFkNTctZTNmZS00ODhjLWExMTAtMmY1ZDE0YjcwODNiIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9" },
  { title: "Variedades Vegetales en México", url: "https://app.powerbi.com/view?r=eyJrIjoiNmMxMmZhNjItNjg0YS00ODBiLTkwMjctZTc0MWUzNDhlZWYzIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9" },
  { title: "Variedades Protegidas Mediante Derecho de Obtentor", url: "https://app.powerbi.com/view?r=eyJrIjoiMzlhYWMwZWEtYjBmMC00ZTYzLTgwZTItYmM4MTdjNmNiNDk2IiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9" },
];

export default function PropiedadIndustrial() {
  return <PowerBITabs title="Información estadística nacional sobre Propiedad Industrial" reports={reports} />;
}
