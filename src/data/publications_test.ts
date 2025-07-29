import { Publication } from "@/models/Publication";

export const publications: Publication[] = [
    {
        id: '1',
        slug: 'green-patents',
        date: '2024',
        media: [
            {
                type: 'image',
                url: '/publications/patentes-verdes-en-mexico.png',
                alt: 'Patentes verdes en México'
            }
        ],
        downloadLink: {
            'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2024/10/Patentes-verdes-final-CAIINNO.pdf',
            'english-version': 'https://www.caiinno.org/wp-content/uploads/2024/10/fi-Green-Patents-and-Gender-Identification-in-Mexi_241028_162912.pdf' 
        },
        multilingual: {
            es: {
                title: 'Patentes verdes en México',
                description: 'Análisis de las patentes verdes en México',
                content: [
                    {
                        type: 'paragraph',
                        content: 'Análisis de las patentes verdes en México'
                    },
                    {
                        type: 'heading',
                        content: 'Descarga nuestra publicación en este link',
                        downloadKey: 'spanish-version'
                    },
                    {
                        type: 'heading',
                        content: 'Download the English version of the publication in this link',
                        downloadKey: 'english-version'
                    }
                ],
                tags: ['Patentes', 'Sustentabilidad', 'Innovación']
            },
            en: {
                title: 'Green patents in Mexico',
                description: 'Analysis of green patents in Mexico',
                content: [
                    {
                        type: 'paragraph',
                        content: 'Analysis of green patents in Mexico'
                    },
                    {
                        type: 'heading',
                        content: 'Download the English version of the publication in this link',
                        downloadKey: 'english-version'
                    },
                    {
                        type: 'heading',
                        content: 'Download the Spanish version of the publication in this link',
                        downloadKey: 'spanish-version'
                    }
                ],
                tags: ['Patents', 'Sustainability', 'Innovation']
            }
        }
    },
    {
        id: '2',
        slug: 'mujeres-inventoras-latam',
        date: '2024',
        media: [
            {
                type: 'image',
                url: '/publications/glipa_pres.png',
                alt: 'Mujeres Inventoras América Latina'
            }
        ],
        downloadLink: {
            'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2023/08/Mujeres-CAIINNO-GLIPA.pdf',
            'english-version': 'https://www.caiinno.org/wp-content/uploads/2024/01/INGLES-CAIINNO-GLIPA.pdf',
            'portugues-version': 'https://www.caiinno.org/wp-content/uploads/2024/01/PORTUGUES-CAIINNO-GLIPA.pdf'
        },
        multilingual: {
            es: {
                title: 'Mujeres inventoras América Latina',
                description: 'Estudio sobre mujeres inventoras en América Latina',
                content: [
                    {
                        type: 'paragraph',
                        content: 'Estudio sobre mujeres inventoras en América Latina'
                    },
                    {
                        type: 'heading',
                        content: 'Descarga nuestra publicación en este link',
                        downloadKey: 'spanish-version'
                    },
                    {
                        type: 'heading',
                        content: 'Download the English version of the publication in this link',
                        downloadKey: 'english-version'
                    },
                    {
                        type: 'heading',
                        content: 'Baixe a versão em português da publicação neste link',
                        downloadKey: 'portugues-version'
                    }
                ],
                tags: ['Mujeres Inventoras', 'América Latina', 'Innovación']
            },
            en: {
                title: 'Women inventors latin america',
                description: 'Study on women inventors in Latin America',
                content: [
                    {
                        type: 'paragraph',
                        content: 'Study on women inventors in Latin America'
                    },
                    {
                        type: 'heading',
                        content: 'Download the English version of the publication in this link',
                        downloadKey: 'english-version'
                    },
                    {
                        type: 'heading',
                        content: 'Download the Spanish version of the publication in this link',
                        downloadKey: 'spanish-version'
                    },
                    {
                        type: 'heading',
                        content: 'Baixe a versão em português da publicação neste link',
                        downloadKey: 'portugues-version'
                    }
                ],
                tags: ['Women Inventors', 'Latin America', 'Innovation']
            }
        }
    },
    {
        id: '3',
        slug: 'automatizacion-empleos-covid',
        date: '2024',
        media: [
          {
            type: 'image',
            url: '/publications/automat.jpg',
            alt: 'Automatización de empleos en la economía creativa'
          }
        ],
        downloadLink: {
          'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2023/02/Automatizacion-COVID-y-Economia-creativa-Final-.pdf',
          'english-version': 'https://www.caiinno.org/wp-content/uploads/2023/02/PROBABILITY-OF-JOB-AUTOMATION-IN-THE-MEXICAN-CREATIVE-ECONOMY.pdf'
        },
        multilingual: {
          es: {
            title: 'Probabilidad y efecto del COVID-19 en la automatización de empleos en la economía creativa de México',
            description: 'Análisis del impacto del COVID-19 en la automatización de empleos del sector creativo',
            content: [
              {
                type: 'paragraph',
                content: 'Análisis del impacto del COVID-19 en la automatización de empleos del sector creativo'
              },
              {
                type: 'heading',
                content: 'Descarga nuestra publicación en este link',
                downloadKey: 'spanish-version'
              },
              {
                type: 'heading',
                content: 'Download the English version of the publication in this link',
                downloadKey: 'english-version'
              }
            ],
            tags: ['COVID-19', 'Automatización', 'Economía Creativa']
          },
          en: {
            title: 'Probability and effect of COVID-19 on job automation in Mexico’s creative ecomony',
            description: 'Analysis of the impact of COVID-19 on job automation in the creative sector',
            content: [
              {
                type: 'paragraph',
                content: 'Analysis of the impact of COVID-19 on job automation in the creative sector'
              },
              {
                type: 'heading',
                content: 'Download the English version of the publication in this link',
                downloadKey: 'english-version'
              },
              {
                type: 'heading',
                content: 'Download the Spanish version of the publication in this link',
                downloadKey: 'spanish-version'
              }
            ],
            tags: ['COVID-19', 'Automation', 'Creative Economy']
          }
        }
      },
      {
        id: '4',
        slug: 'economia-creativa-mexico',
        date: '2024',
        media: [
          {
            type: 'image',
            url: '/publications/ecm-1.png',
            alt: 'Economía Creativa México'
          }
        ],
        downloadLink: {
          'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2022/09/Economia-Creativa.pdf',
          'english-version': 'https://www.caiinno.org/wp-content/uploads/2022/10/Creative-Economy-final.pdf'
        },
        multilingual: {
          es: {
            title: 'Economía creativa: México y su impacto en la economía nacional',
            description: 'Análisis del impacto de la economía creativa en México',
            content: [
              {
                type: 'paragraph',
                content: 'Análisis del impacto de la economía creativa en México'
              },
              {
                type: 'heading',
                content: 'Descarga nuestra publicación en este link',
                downloadKey: 'spanish-version'
              },
              {
                type: 'heading',
                content: 'Download the English version of the publication in this link',
                downloadKey: 'english-version'
              }
            ],
            tags: ['Economía Creativa', 'México', 'Impacto Económico']
          },
          en: {
            title: 'Creative economy: Mexico and its impact on the national economy',
            description: 'Analysis of the impact of the creative economy in Mexico',
            content: [
              {
                type: 'paragraph',
                content: 'Analysis of the impact of the creative economy in Mexico'
              },
              {
                type: 'heading',
                content: 'Download the English version of the publication in this link',
                downloadKey: 'english-version'
              },
              {
                type: 'heading',
                content: 'Download the Spanish version of the publication in this link',
                downloadKey: 'spanish-version'
              }
            ],
            tags: ['Creative Economy', 'Mexico', 'Economic Impact']
          }
        }
      },
      {
        id: '5',
        slug: 'economia-creativa',
        date: '2024',
        media: [
          {
            type: 'image',
            url: '/publications/bi_slider.jpg',
            alt: 'Economía Creativa'
          },
          {
            type: 'image',
            url: '/publications/convocatoria-a-investigadores.png',
            alt: 'Economía Creativa'
          },
          {
            type: 'youtube',
            url: '0M7YtW3MTjs',
            alt: 'Economía Creativa'
          }
        ],
        downloadLink: {
          'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2022/01/Economia-Conocimiento-y-Creativa-CAIINNO-BID.pdf',
          'english-version': 'https://www.caiinno.org/wp-content/uploads/2022/01/Knowledge-economy-and-creative-economy-CAIINNO-BID.pdf'
        },
        multilingual: {
          es: {
            title: 'Economía del conocimiento y economía creativa como herramientas para salir de la crisis generada por el COVID-19 en América Latina y el Caribe: un enfoque hacía la Alianza del Pacífico', 
            description: 'Estudio sobre la economía creativa',
            content: [
              {
                type: 'paragraph',
                content: 'Estudio sobre la economía creativa'
              },
              {
                type: 'heading',
                content: 'Descarga nuestra publicación en este link',
                downloadKey: 'spanish-version'
              },
              {
                type: 'heading',
                content: 'Download the English version of the publication in this link',
                downloadKey: 'english-version'
              }
            ],
            tags: ['Economía Creativa', 'Innovación']
          },
          en: {
            title: 'Knowledge economy and creative economy as tools to overcome the crisis generated by COVID-19 in Latin America and the Caribbean: a focus on the Pacific Alliance',
            description: 'Study on the creative economy',
            content: [
              {
                type: 'paragraph',
                content: 'Study on the creative economy'
              },
              {
                type: 'heading',
                content: 'Download the English version of the publication in this link',
                downloadKey: 'english-version'
              },
              {
                type: 'heading',
                content: 'Download the Spanish version of the publication in this link',
                downloadKey: 'spanish-version'
              }
            ],
            tags: ['Creative Economy', 'Innovation']
          }
        }
      },
      /*{
        id: '6',
        slug: 'industrias-creativas',
        date: '2024-03-20',
        media: [
          {
            type: 'image',
            url: '/publications/indcreat.png',
            alt: 'Industrias Creativas'
          }
        ],
        multilingual: {
          es: {
            title: 'Industrias Creativas',
            description: '...',
            content: [
              {
                type: 'paragraph',
                content: '...'
              }
            ],
            tags: ['Industrias Creativas']
          },
          en: {
            title: 'Creative Industries',
            description: '...',
            content: [
              {
                type: 'paragraph',
                content: '...'
              }
            ],
            tags: ['Creative Industries']
          }
        }
      },*/
      {
        id: '7',
        slug: 'mujeres-inventoras',
        date: '2024',
        media: [
          {
            type: 'image',
            url: '/publications/mujeres-inventoras.png',
            alt: 'Imagen Mujeres Inventoras'
          },
          {
            type: 'youtube',
            url: 'ocekswReZIA',
            alt: 'Video sobre Mujeres Inventoras'
          }
        ],
        downloadLink: {
          'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2022/04/Mujeres-Inventoras-2017-2020_CAIINNO.pdf',
          'english-version': 'https://www.caiinno.org/wp-content/uploads/2022/04/Mexican-women-inventors-CAIINNO.pdf'
        },
        multilingual: {
          es: {
            title: 'Mujeres Inventoras: Patentando en México',
            description: 'Investigación sobre mujeres inventoras y patentes en México, incluyendo análisis de los períodos 2014-2016 y 2017-2020.',
            content: [
              {
                type: 'heading',
                content: 'Publicación 2017-2020 (Versión Español)',
                downloadKey: 'spanish-version'
              },
              {
                type: 'paragraph',
                content: 'Para descargar nuestra publicación sobre Mujeres Inventoras 2017-2020 (Versión Español): Patentando en México'
              },
              {
                type: 'heading',
                content: 'Publicación 2017-2020 (Versión Inglés)',
                downloadKey: 'english-version'
              },
              {
                type: 'paragraph',
                content: 'Para descargar nuestra publicación sobre Mujeres Inventoras 2017-2020 (Versión Inglés): Patentando en México'
              }
            ],
            tags: ['Mujeres Inventoras', 'Patentes', 'Investigación', 'PatentesRosas']
          },
          en: {
            title: 'Women Inventors: Patenting in Mexico',
            description: 'Research on women inventors and patents in Mexico, including analysis for the periods 2014–2016 and 2017–2020.',
            content: [
              {
                type: 'heading',
                content: 'Publication 2017-2020 (Spanish Version)',
                downloadKey: 'spanish-version'
              },
              {
                type: 'paragraph',
                content: 'Download our Spanish-language publication on Women Inventors 2017-2020: Patenting in Mexico'
              },
              {
                type: 'heading',
                content: 'Publication 2017-2020 (English Version)',
                downloadKey: 'english-version'
              },
              {
                type: 'paragraph',
                content: 'Download our English-language publication on Women Inventors 2017-2020: Patenting in Mexico'
              }
            ],
            tags: ['Women Inventors', 'Patents', 'Research', 'PinkPatents']
          }
        }
      },
      /*{
        id: '11',
        slug: 'alumni-engagement-innovation-found',
        date: '2017',
        media: [
          {
            type: 'image',
            url: '/publications/alumni.png',
            alt: 'ALUMNI ENGAGEMENT INNOVATION FOUND'
          }
        ],
        multilingual: {
          es: {
            title: 'Fondo de Innovación para la Participación de Alumni 2017',
            description: 'Fondo destinado a fortalecer la innovación y el compromiso de exalumnos.',
            content: [],
            tags: ['Alumni', 'Innovación']
          },
          en: {
            title: 'ALUMNI ENGAGEMENT INNOVATION FUND 2017',
            description: 'Fund to strengthen innovation and engagement among alumni.',
            content: [],
            tags: ['Alumni', 'Innovation']
          }
        }
      },*/
      {
        id: '13',
        slug: 'propiedad-intelectual-creatividad',
        date: '2017',
        media: [
          {
            type: 'image',
            url: '/publications/fesf.png',
            alt: 'Propiedad Intelectual para el Desarrollo de México'
          }
        ],
        multilingual: {
          es: {
            title: 'Propiedad Intelectual, Creatividad e Innovación para el Desarrollo de México',
            description: '',
            content: [
              {
                type: 'heading',
                content: 'Descarga nuestra publicación en este link',
                downloadKey: 'spanish-version'
              }
            ],
            tags: ['Propiedad Intelectual', 'Creatividad', 'Innovación']
          },
          en: {
            title: 'Intellectual Property, Creativity and Innovation for Mexico\'s Development',
            description: '',
            content: [
              {
                type: 'heading',
                content: 'Download our publication in this link',
                downloadKey: 'spanish-version'
              }
            ],
            tags: ['Intellectual Property', 'Creativity', 'Innovation']
          }
        },
        downloadLink: {
          'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2018/07/PI-Algunas-Propuestas-CAIINNO.pdf'
        }
      },  
    {
    id: '16',
    slug: 'formacion-ciudadana-para-emprendedores',
    date: '2018',
    media: [
      {
        type: 'image',
        url: '/publications/formacion-ciudadana-emprendedores.jpg',
        alt: 'Formación Ciudadana para Emprendedores'
      },
      {
        type: 'youtube',
        url: 'lS12Y_OW3nE',
        alt: 'Video sobre Formación Ciudadana para Emprendedores'
      }
    ],
    multilingual: {
      es: {
        title: 'Formación ciudadana para emprendedores',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'FOMACIÓN CÍVICA Y ÉTICA EN MÉXICO',
            downloadKey: 'formacion-civica-etica'
          },
          {
            type: 'heading',
            content: 'Resumen Ejecutivo "FORMACIÓN CÍVICA Y ÉTICA PARA EMPRENDEDORES"',
            downloadKey: 'resumen-ejecutivo'
          },
          {
            type: 'heading',
            content: 'EMPRENDIMIENTO Y GÉNERO EN MÉXICO',
            downloadKey: 'emprendimiento-genero-mexico'
          },
          {
            type: 'heading',
            content: 'VALORES EN LOS NEGOCIOS Y EMPRENDIMIENTO',
            downloadKey: 'valores-negocios-emprendimiento'
          },
          {
            type: 'heading',
            content: 'EMPRENDIMIENTO Y GÉNERO',
            downloadKey: 'emprendimiento-genero'
          },
          {
            type: 'heading',
            content: 'EVALUACIÓN PARTICIPATIVA',
            downloadKey: 'evaluacion-participativa'
          },
          {
            type: 'heading',
            content: 'METODOLOGÍA DEL TALLER DE "FORMACIÓN CÍVICA Y ÉTICA PARA EMPRENDEDORES"',
            downloadKey: 'metodologia-taller'
          },
          {
            type: 'heading',
            content: 'IMPLEMENTACIÓN DEL TALLER DE "FORMACIÓN CÍVICA Y ÉTICA PARA EMPRENDEDORES"',
            downloadKey: 'implementacion-taller'
          }
        ],
        tags: ['Formación Ciudadana', 'Emprendedores']
      },
      en: {
        title: 'Civic Training for Entrepreneurs',
        description: '',
        content: [],
        tags: ['Civic Training', 'Entrepreneurs']
      }
    },
    downloadLink: {
      'formacion-civica-etica': 'https://www.caiinno.org/wp-content/uploads/2017/07/formacion-civica1.pdf',
      'resumen-ejecutivo': 'https://www.caiinno.org/wp-content/uploads/2017/07/Resumen-ejecutivo.pdf',
      'emprendimiento-genero-mexico': 'https://www.caiinno.org/wp-content/uploads/2017/05/emprendimiento-y-g%C3%A9nero.pdf',
      'valores-negocios-emprendimiento': 'https://www.caiinno.org/wp-content/uploads/2017/07/valores-en-los-negocios.pdf',
      'emprendimiento-genero': 'https://www.caiinno.org/wp-content/uploads/2017/07/emprendimiento-y-genero.pdf',
      'evaluacion-participativa': 'https://www.caiinno.org/wp-content/uploads/2017/07/EVALUACO%C3%ACN-1.pdf',
      'metodologia-taller': 'https://www.caiinno.org/wp-content/uploads/2017/07/Metodolog%C3%ADa-del-proyecto-Taller-Emprendimiento-con-Valores.pdf',
      'implementacion-taller': 'https://www.caiinno.org/wp-content/uploads/2017/07/Implementaci%C3%B3n-Taller-Emprendimiento-con-Valores.pdf'
    }
  },
  {
    id: '18',
    slug: 'habilidades-para-la-innovacion',
    date: '2016',
    media: [
      {
        type: 'image',
        url: '/publications/habilidad-innovacion.png',
        alt: 'Habilidades para la Innovación'
      }
    ],
    multilingual: {
      es: {
        title: 'Habilidades para la Innovación',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Habilidades', 'Innovación']
      },
      en: {
        title: 'Skills for Innovation',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication in this link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Skills', 'Innovation']
      }
    },
    downloadLink: {
      'spanish-version': 'https://www.britishcouncil.org.mx/sites/default/files/resumen_ejecutivo_habilidades_para_la_innovacion.pdf'
    }
  },
  {
    id: '19',
    slug: 'indice-nacional-de-ciencia-tecnologia-e-innvacion',
    date: '2025',
    media: [
      {
        type: 'image',
        url: '/publications/IndiceNacionalPublication.png',
        alt: 'INDICE-NACIONAL-DE-CIENCIA-TECNOLOGÍA-E-INNOVACIÓN-2025'
      }
    ],
    multilingual: {
      es: {
        title: 'Índice nacional de ciencia, tecnología e innovación 2025',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Habilidades', 'Innovación']
      },
      en: {
        title: 'National index of science, technology and innovation 2025',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication in this link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Skills', 'Innovation']
      }
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2025/05/CAIINNO-INDICE-2025.pdf'
    }
  }, 
  {
    id: '20',
    slug: 'indice-nacional-de-ciencia-tecnologia-e-innovacion-2018',
    date: '2018',
    media: [
      {
        type: 'image',
        url: '/publications/ÍNDICE-NACIONAL-DE-CIENCIA-TECNOLOGÍA-E-INNOVACIÓN-2018.png',
        alt: 'INDICE-NACIONAL-DE-CIENCIA-TECNOLOGÍA-E-INNOVACIÓN-2018'
      },
      {
        type: 'youtube',
        url: '2pqrob4I6iU',
        alt: '#INCTI-CAIINNO2018'
      }
    ],
    multilingual: {
      es: {
        title: 'Índice nacional de ciencia, tecnología e innovación 2018',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          },
          {
            type: 'heading',
            content: 'Descarga la versión anterior en este link',
            downloadKey: 'spanish-version-previous'
          }
        ],
        tags: ['Habilidades', 'Innovación']
      },
      en: {
        title: 'National Index of Science, Technology and Innovation 2018',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication in this link',
            downloadKey: 'english-version'
          },
          {
            type: 'heading',
            content: 'Download the previous version at this link',
            downloadKey: 'spanish-version-previous'
          }
        ],
        tags: ['Skills', 'Innovation']
      }
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2018/12/INDICE-2018.pdf',
      'english-version': 'https://www.caiinno.org/wp-content/uploads/2020/06/1.2ENINDICE-CTI-2018-2018-briefing.pdf',
      'spanish-version-previous': 'https://www.caiinno.org/wp-content/uploads/2016/01/INCTI-CAIINNO2015.pdf'
    }
  },
  {
    id: '21',
    slug: 'indice-nacional-de-ciencia-tecnologia-e-innovacion-2015',
    date: '2015',
    media: [
      {
        type: 'image',
        url: '/publications/indice-nacional-de-ciencia-2015.png',
        alt: 'INDICE-NACIONAL-DE-CIENCIA-TECNOLOGÍA-E-INNOVACIÓN-2015'
      }
    ],
    multilingual: {
      es: {
        title: 'Índice nacional de ciencia, tecnología e innovación 2015',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Habilidades', 'Innovación']
      },
      en: {
        title: 'National index of science, technology and innovation 2015',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication in this link',
            downloadKey: 'english-version'
          }
        ],
        tags: ['Skills', 'Innovation']
      }
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2016/01/INCTI-CAIINNO2015.pdf',
      'english-version': 'https://www.caiinno.org/wp-content/uploads/2020/06/EN-Briefing-INCTI-CAIINNO-2015.pdf'
    }
  },
  {
    id: '22',
    slug: 'panorama-de-la-propiedad-intelectual-en-mexico-otra-perspectiva',
    date: '2016',
    media: [
      {
        type: 'image',
        url: '/publications/PanoramaPropiedadIntelectualMexico.png',
        alt: 'PANORAMA DE LA PROPIEDAD INTELECTUAL EN MÉXICO: OTRA PERSPECTIVA'
      }
    ],
    multilingual: {
      es: {
        title: 'Panorama de la propiedad intelectual en México: otra perspectiva',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Habilidades', 'Innovación']
      },
      en: {
        title: 'Intellectual property landscape in Mexico: another perspective',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication in this link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Skills', 'Innovation']
      }
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2016/08/Estado-general-de-la-propiedad-intelectual-en-M%C3%A9xico.pdf'
    }
  },
  {
    id: '23',
    slug: 'emprendimiento-y-genero-en-mexico',
    date: '2017',
    media: [
      {
        type: 'image',
        url: '/publications/EmprendimientoYGeneroEnMexico.png',
        alt: 'EMPRENDIMIENTO Y GÉNERO EN MÉXICO'
      }
    ],
    multilingual: {
      es: {
        title: 'Emprendimiento y género en México',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Habilidades', 'Innovación']
      },
      en: {
        title: 'Entrepreneurship and gender in Mexico',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication in this link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Skills', 'Innovation']
      }
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2017/05/emprendimiento-y-g%C3%A9nero.pdf'
    }
  },
  {
    id: '24',
    slug: 'patentes-verdes-en-el-pais',
    date: '2025',
    media: [
      {
        type: 'image',
        url: '/publications/PatentesVerdesEnElPais.png',
        alt: 'PATENTES VERDES EN  EL PAÍS'
      }
    ],
    multilingual: {
      es: {
        title: 'Patentes verdes en el país',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Patentes', 'Innovación', 'Sustentabilidad', 'Medio Ambiente']
      },
      en: {
        title: 'Green patents in the country',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication in this link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Innovation',  'Sustainability', 'Environment', 'Patents']
      }
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2025/06/patentesverdesenelpais.pdf'
    }
  },
  {
    id: '25',
    slug: 'mujeres-inventoras-patentando-en-mexico',
    date: '2015',
    media: [
      {
        type: 'image',
        url: '/publications/mujeres-inventoras-patentando-en-mexico.png',
        alt: 'Mujeres Inventoras: Patentando en México'
      }
    ],
    multilingual: {
      es: {
        title: 'Mujeres inventoras: Patentando en México ¿Cómo vamos?',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          },
          {
            type: 'heading',
            content: 'Download the English version of the publication in this link',
            downloadKey: 'english-version'
          }
        ],
        tags: ['Patentes', 'Innovación', 'Mujeres', 'Inventoras']
      },
      en: {
        title: 'Women Inventors: Patenting in Mexico How are we doing?',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download the English version of the publication in this link',
            downloadKey: 'english-version'
          }
        ],
        tags: ['Innovation',  'Women', 'Patents', 'Inventors']
      
      },
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2018/12/Mujeres-Inventoras.pdf',
      'english-version': 'https://www.caiinno.org/wp-content/uploads/2020/07/Women-inventors.pdf'
    }
  },
    {
    id: '26',
    slug: 'formacion-civica-y-etica-en-mexico',
    date: '2017',
    media: [
      {
        type: 'image',
        url: '/publications/FormacionCivicaYEticaEnMexico.png',
        alt: 'Formación Cívica y Ética en México'
      }
    ],
    multilingual: {
      es: {
        title: 'Formación cívica y ética en México',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Formación Cívica', 'Ética', 'Educación', 'Innovación']
      },
      en: {
        title: 'Civic and Ethical Education in Mexico',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication in this link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Innovation', 'Civic Education', 'Ethics', 'Education']
      
      },
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2017/07/formacion-civica1.pdf'
    }
  },
  {
    id: '27',
    slug: 'observatorio-electoral-ciencia-tecnologia-2014-2015',
    date: '2015',
    media: [
      {
        type: 'image',
        url: '/publications/ObservatorioElectoralDeCienciaTecnologiaRamo381415.png',
        alt: 'Observatorio Electoral de Ciencia y Tecnología Ramo 38'
      }
    ],
    multilingual: {
      es: {
        title: 'Observatorio Electoral de Ciencia y Tecnología Ramo 38 (2014-2015)',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Observatorio Electoral', 'Ciencia', 'Tecnología', 'Ramo 38']
      },
      en: {
        title: 'Electoral Observatory of Science and Technology Branch 38 (2014-2015)',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication in this link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Electoral Observatory', 'Science', 'Technology', 'Branch 38']
      
      },
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2016/03/Publicaci%C3%B3n-ramo38.pdf'
    }
  },
  {
    id: '28',
    slug: 'observatorio-electoral-ciencia-tecnologia-2016-2017',
    date: '2017',
    media: [
      {
        type: 'image',
        url: '/publications/ObservatorioElectoralDeCienciaTecnologiaRamo381617.png',
        alt: 'Observatorio Electoral de Ciencia y Tecnología Ramo 38'
      }
    ],
    multilingual: {
      es: {
        title: 'Observatorio Electoral de Ciencia y Tecnología Ramo 38 (2016-2017)',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Descarga nuestra publicación en este link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Observatorio Electoral', 'Ciencia', 'Tecnología', 'Ramo 38']
      },
      en: {
        title: 'Electoral Observatory of Science and Technology Branch 38 (2016-2017)',
        description: '',
        content: [
          {
            type: 'heading',
            content: 'Download our publication in this link',
            downloadKey: 'spanish-version'
          }
        ],
        tags: ['Electoral Observatory', 'Science', 'Technology', 'Branch 38']
      
      },
    },
    downloadLink: {
      'spanish-version': 'https://www.caiinno.org/wp-content/uploads/2018/12/RAMO-38-2016-2017.pdf'
    }
  }
];





