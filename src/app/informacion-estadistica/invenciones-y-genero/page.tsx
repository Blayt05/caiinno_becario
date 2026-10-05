import PowerBITabs from "@/components/PowerBITabs";

// "Invenciones y Género" and "Desglose por Estado" use the same report, as on caiinno.org
const reports = [
  { title: "Invenciones y Género", url: "https://app.powerbi.com/view?r=eyJrIjoiMDgzNWM2ZGYtYmE5OS00YjExLWE2OWItMDllZjYzNzc5ZTBmIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9" },
  { title: "Desglose por Estado", url: "https://app.powerbi.com/view?r=eyJrIjoiMDgzNWM2ZGYtYmE5OS00YjExLWE2OWItMDllZjYzNzc5ZTBmIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9" },
  { title: "Mujeres patentado", url: "https://app.powerbi.com/view?r=eyJrIjoiOTAxZWI1M2YtNzhjMS00ZTBlLTkxYWYtMjBkMGNjNTIyZDllIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9" },
  { title: "Proporción de patentes", url: "https://app.powerbi.com/view?r=eyJrIjoiNTI0NzllMzYtYjk4OC00YjNiLWI3ODYtMjU0N2Y3OWE3M2UxIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9" },
  { title: "Mapa de invenciones", url: "https://app.powerbi.com/view?r=eyJrIjoiZWFiNWY5MjgtZTBiYy00NDg5LTliN2MtNmM4ZDQ1ZDc1ZjhjIiwidCI6IjQ2ODM5NThlLTBkMDgtNDZmNi04MjRlLTkzOGY0MjBlZWJlYSIsImMiOjR9" },
];

export default function InvencionesYGenero() {
  return <PowerBITabs title="Invenciones y Género en México" reports={reports} />;
}
