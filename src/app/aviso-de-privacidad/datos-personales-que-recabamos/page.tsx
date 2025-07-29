export default function datosPersonalesQueRecabamos() {
  return (
    <section className="w-full max-w-4xl px-4 my-12 flex flex-col items-center mx-auto">
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">DATOS PERSONALES QUE RECABAMOS</h2>
        <p className="mb-4 text-justify">
          Usted puede navegar por nuestro sitio web sin proporcionar datos personales, sin embargo, existen determinadas secciones dentro del mismo en donde puede proporcionar voluntariamente sus datos. Sus datos pueden ser recabados en diferentes situaciones, por ejemplo, cuando decide proporcionarnos sus datos de contacto e información para solicitar algún tipo de información, al enviarnos un correo electrónico, al registrarse para recibir información de interés o a nuestro boletín informativo, así como aquellos que nos proporcione con miras al establecimiento de una relación jurídica. Los datos personales que podemos recabar, pertenecen a las siguientes categorías:
        </p>
        <ul className="list-disc pl-6 mb-4 text-justify">
          <li>
            <strong>Datos de identificación:</strong> nombre, domicilio particular, fecha de nacimiento, número de teléfono fijo y/o móvil, fax, correo electrónico, imagen.
          </li>
          <li>
            <strong>Datos académicos:</strong> trayectoria educativa, título, número de cédula profesional, especialidad, certificados.
          </li>
          <li>
            <strong>Datos laborales:</strong> puesto, domicilio, correo electrónico, número de teléfono fijo o móvil y fax.
          </li>
          <li>
            <strong>Datos de facturación:</strong> entidad a la que se hará el cargo, domicilio fiscal, RFC.
          </li>
          <li>
            <strong>Datos financieros:</strong> información de cuentas bancarias, forma de pago.
          </li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-center">Menores e incapaces</h2>
        <p className="text-justify">
          En respeto a la privacidad de los menores e incapaces, no recabamos intencionalmente ni tratamos datos personales de menores e incapaces cuando no se cuenta con el consentimiento expreso de sus padres, tutores o representantes legales. Si Usted es padre, tutor o representante legal de un menor o incapaz y sabe que nos ha proporcionado datos personales sin su consentimiento, podrá solicitar que los mismos sean cancelados a la siguiente dirección de correo electrónico <a href="mailto:contacto@caiinno.org" className="text-blue-600 underline">contacto@caiinno.org</a>
        </p>
      </div>
    </section>
  )
}
