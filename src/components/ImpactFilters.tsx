'use client';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';

type Props = {
  onChange: (filtros: {
    año: string[]; 
    documento: string;
    tipoUsuario: string;
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
    });
  }, [añosSeleccionados, documento, tipoUsuario]);

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
  'Índice Nacional de Ciencia 2015, Aguascalientes',
  'Índice Nacional de Ciencia 2015, Baja California',
  'Índice Nacional de Ciencia 2015, Baja California Sur',
  'Índice Nacional de Ciencia 2015, Campeche',
  'Índice Nacional de Ciencia 2015, Chiapas',
  'Índice Nacional de Ciencia 2015, Chihuahua',
  'Índice Nacional de Ciencia 2015, Ciudad de México',
  'Índice Nacional de Ciencia 2015, Coahuila',
  'Índice Nacional de Ciencia 2015, Colima',
  'Índice Nacional de Ciencia 2015, Durango',
  'Índice Nacional de Ciencia 2015, Estado de México',
  'Índice Nacional de Ciencia 2015, Guanajuato',
  'Índice Nacional de Ciencia 2015, Guerrero',
  'Índice Nacional de Ciencia 2015, Hidalgo',
  'Índice Nacional de Ciencia 2015, Jalisco',
  'Índice Nacional de Ciencia 2015, Morelos',
  'Índice Nacional de Ciencia 2015, Nayarit',
  'Índice Nacional de Ciencia 2015, Nuevo León',
  'Índice Nacional de Ciencia 2015, Oaxaca',
  'Índice Nacional de Ciencia 2015, Puebla',
  'Índice Nacional de Ciencia 2015, Querétaro',
  'Índice Nacional de Ciencia 2015, Quintana Roo',
  'Índice Nacional de Ciencia 2015, San Luis Potosí',
  'Índice Nacional de Ciencia 2015, Sinaloa',
  'Índice Nacional de Ciencia 2015, Sonora',
  'Índice Nacional de Ciencia 2015, Tabasco',
  'Índice Nacional de Ciencia 2015, Tamaulipas',
  'Índice Nacional de Ciencia 2015, Tlaxcala',
  'Índice Nacional de Ciencia 2015, Veracruz',
  'Índice Nacional de Ciencia 2015, Yucatán',
  'Índice Nacional de Ciencia 2015, Zacatecas',
  'Adición fracción XXXV Ley Propiedad Industrial',
  'Adiciones a Ley de Ciencia y Tecnología',

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



      <select  className="bg-[#003366] text-white font-semibold rounded-full px-4 py-2 focus:outline-none"
      onChange={e => setDocumento(e.target.value)} value={documento}>
        <option value="">DOCUMENTO</option>
        {documentos.map((d, i) => (
          <option key={i} value={d}>{d}</option>
        ))}
      </select>

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
    </div>
  );
};

export default ImpactFilters;
