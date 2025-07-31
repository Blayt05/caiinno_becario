'use client';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const tipoDocOptions = [
   { value: 1, label: 'Índice Nacional de Ciencia, Tecnología e Innovación 2015' },
   { value: 2, label: 'Índice Nacional de Ciencia, Tecnología e Innovación 2018' }
];

type Props = {
  onChange: (filtros: {
    año: string[]; 
    documento: string;
    tipoUsuario: string;
    tipoDoc : string;
  }) => void;
};

const tiposUsuario = [
  'Legislativo',
  'Gubernamental',
  'Privado/Académico',
  'Internacional',
];



const ImpactFilters = ({ onChange }: Props) => {
  const [añosSeleccionados, setAñosSeleccionados] = useState<{ value: string; label: string }[]>([]);
  const [documento, setDocumento] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [tipoDoc, setTipoDoc] = useState('');
  
  // const [año, setAño] = useState('');
  // const [documento, setDocumento] = useState('');
  // const [tipoUsuario, setTipoUsuario] = useState('');

  // useEffect(() => {
  //   onChange({ año, documento, tipoUsuario });
  // }, [año, documento, tipoUsuario]);
    useEffect(() => {
    onChange({
      año: añosSeleccionados.map(a => a.value),
      documento,
      tipoUsuario,
      tipoDoc,
    });
  }, [añosSeleccionados, documento, tipoUsuario,tipoDoc]);

  //valores estaticos
// const años = [
//   '2015',
//   '2016',
//   '2017',
//   '2018',
//   '2019',
//   '2020'
// ];

const años = [
  { value: '2015', label: '2015' },
  { value: '2016', label: '2016' },
  { value: '2017', label: '2017' },
  { value: '2018', label: '2018' },
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' },
  { value: '2022', label: '2022' },
];
const documentos = [
  'Información Económica Estatal - Aguascalientes',
  'Información Económica Estatal - Baja California',
  'Información Económica Estatal - Baja California Sur',
  'Información Económica Estatal - Campeche',
  'Información Económica Estatal - Chiapas',
  'Información Económica Estatal - Chihuahua',
  'Información Económica Estatal - Ciudad de México',
  'Información Económica Estatal - Coahuila',
  'Información Económica Estatal - Colima',
  'Información Económica Estatal - Durango',
  'Información Económica Estatal - Estado de México',
  'Información Económica Estatal - Guanajuato',
  'Información Económica Estatal - Guerrero',
  'Información Económica Estatal - Hidalgo',
  'Información Económica Estatal - Jalisco',
  'Información Económica Estatal - Morelos',
  'Información Económica Estatal - Nayarit',
  'Información Económica Estatal - Nuevo León',
  'Información Económica Estatal - Oaxaca',
  'Información Económica Estatal - Puebla',
  'Información Económica Estatal - Querétaro',
  'Información Económica Estatal - Quintana Roo',
  'Información Económica Estatal - San Luis Potosí',
  'Información Económica Estatal - Sinaloa',
  'Información Económica Estatal - Sonora',
  'Información Económica Estatal - Tabasco',
  'Información Económica Estatal - Tamaulipas',
  'Información Económica Estatal - Tlaxcala',
  'Información Económica Estatal -  Veracruz',
  'Información Económica Estatal - Yucatán',
  'Información Económica Estatal - Zacatecas',
  'Maestría en Proyectos Productivos Sustentables',
  'En busca de un vínculo con la ciudadanía',
  'Análisis comparativo con referencia a la metodología de RIS3',
  'Minimonografía de Yucatán. Censos Económicos 2014 INEGI',
  'Factores que inciden en la productividad de México',
  'La innovación en el comercio exterior de San Luis Potosí',
  'Manufactura del sector autopartes en Tlaxcala',
  'APROXIMACIONES A LA MEDICIÓN DEL SISTEMA DE INNOVACIÓN EN MÉXICO',
  'Programa especial de ciencia de Zacatecas 2017-2021',
  'APROXIMACIONES A LA MEDICIÓN DEL SISTEMA DE INNOVACIÓN EN MÉXICO',
  'Gaceta Parlamentaria, año XXI, número 5029',
  'INICIATIVA FRACCIÓN XII DEL ARTÍCULO 6º DE LA LEY DE LA PROPIEDAD INDUSTRIAL',
  'Impacto social de la ciencia y la tecnología en el sector automotriz en Querétaro',
  'Analysis of the ICT user Profile',
  'Diagnóstico y Diseño del Programa Presupuestario S278',
  'AGENDA DIGITAL COLIMA',
  'Madurez tecnológica e innovación en empresas mexicanas',
  '“Fomento Regional de las Capacidades Científicas, Tecnológicas y de Innovación”',
  'Efecto del empowerment grupal en la proactividad',
  'ANÁLISIS DE LA PRODUCTIVIDAD DE LAS EMPRESAS DEL ESTADO DE TABASCO',
  'San Luis Potosí: De los rebozos a la industria automotriz',
  'Reflexiones sobre desarrollo empresarial',
  'Tamaulipas en la I+D+I, una experiencia regional',
  'FONDO MIXTO CONACYT - GOBIERNO DEL ESTADO DE HIDALGO CONVOCATORIA HGO-2018-03',
  'Programa Académico de: Especialidad En Medicina Del Trabajo Y Ambiental',
  'Plan Veracruzano de Desarrollo 2019 - 2024',
  'Exposición de Motivos',
  'Morelos: Plan Estatal de Desarrollo 2019 - 2024.',
  'Gaceta Oficial',
  'La Agenda Digital Colima “Impulsando la Inclusión y el Desarrollo de la Sociedad”',
  'Informe de la Gestión Gubernamental 2019',
  'La cooperación tecnológica entre start-ups de Israel y Jalisco',
  'Plan estatal de Desarrollo 2019 - 2024',
  'Plan Municipal de Desarrollo 2019-2021',
  'Proyecto Rescatemos Tabasco 2019 - 2024 Juntos Haremos Historia',
  'Violencia de género de lo social a espacios universitarios',
  'Agenda 2030 Veracruz: Ruta de Implementación',
  'INICIATIVA CON PROYECTO DE DECRETO DIP. ANTONIO DE JESÚS MADRIZ',
  'Gaceta Parlamentaria',
  'La internacionalización de la Universidad de Sonora',
  'Propuesta de creación que presenta la Facultad de Pedagogía e Innovación Educativa, Mexicali',
  'Plan de Estudios Maestría en Biotecnología',
  'Estructura organizacional de las empresas desarrolladoras de software radicadas en la Ciudad de San Francisco de Campeche',
  'Plan Municipal de Desarrollo 2022 - 2025',
  'Journal Computer Technology',
  'Desarrollo de la investigación de alto nivel en académicos e investigadores del SNI del área VIII-Ingenierías y desarrollo tecnológico en Chiapas: condiciones y perspectivas desde lo regional',
  'Sustainability and Development at Northwestern Municipalities in Mexico: Chihuahua Region',


];

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      {/* <select className="border rounded p-2" onChange={e => setAño(e.target.value)} value={año}>
        <option value="">AÑO</option>
        {años.map((a, i) => (
          <option key={i} value={a}>{a}</option>
        ))}
      </select> */}
     <Select
  isMulti
  options={años}
  value={añosSeleccionados}
  onChange={(selected) =>
    setAñosSeleccionados(selected as { value: string; label: string }[])
  }
  placeholder="AÑO"
  className="w-48"
  styles={{
    control: (base, state) => ({
      ...base,
      backgroundColor: '#003366',
      borderRadius: '9999px',
      padding: '2px 8px',
      border: 'none',
      boxShadow: state.isFocused ? '0 0 0 2px #0055aa' : 'none',
      minHeight: '48px',
      maxHeight: '48px',
      overflowY: 'hidden', 
      display: 'flex',
      flexWrap: 'nowrap', 
      alignItems: 'center',
    }),
    valueContainer: (base) => ({
      ...base,
      overflowX: 'auto',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: '#0055aa',
      borderRadius: '9999px',
      marginRight: '4px',
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: 'white',
      fontWeight: 'bold',
      padding: '0 6px',
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: 'white',
      ':hover': {
        backgroundColor: '#003366',
        color: 'white',
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: 'white',
      fontWeight: 600,
    }),
    placeholder: (base) => ({
      ...base,
      color: 'white',
      fontWeight: 600,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: 'white',
    }),
    menu: (base) => ({
      ...base,
      zIndex: 999,
    }),
  }}
/>


{/* ESTE ES EL BUENO  */}
      {/* <select  className="bg-[#003366] text-white font-semibold rounded-full px-4 py-2 focus:outline-none"
      onChange={e => setDocumento(e.target.value)} value={documento}>
        <option value="">DOCUMENTO</option>
        {documentos.map((d, i) => (
          <option key={i} value={d}>{d}</option>
        ))}
      </select> */}

      {/* <select className="w-full whitespace-normal break-words">
        <option value="">DOCUMENTO</option>
      {documentos.map((doc, i) => (
        <option key={i} value={doc} className="whitespace-normal">
          {doc}
        </option>
      ))}
    </select> */}


      <select  className="bg-[#003366] text-white font-semibold rounded-full px-4 py-2 focus:outline-none"
       onChange={e => setTipoUsuario(e.target.value)} value={tipoUsuario}>
        <option value="">TIPO DE USUARIO</option>
        {tiposUsuario.map((t, i) => (
          <option key={i} value={t}>{t}</option>
        ))}
      </select>

      {/* DOCUMENTO */}
        <select
          className="bg-[#003366] text-white font-semibold rounded-full px-4 py-2 focus:outline-none"
          onChange={e => setTipoDoc(e.target.value)}
          value={tipoDoc}
        >
          <option value="">PUBLICACIONES</option>
          {tipoDocOptions.map((t, i) => (
            <option key={i} value={t.value}>{t.label}</option>
          ))}
        </select>

    </div>
  );
};

export default ImpactFilters;
