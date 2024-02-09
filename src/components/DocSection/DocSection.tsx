import Beginner from "../../assets/0-beginner.svg";
import Card from "./Card";
import Title from "./Title";
import Bookshelf from "../../assets/bookshelf.svg";

const DocSection = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20">
      <div className="flex items-center justify-center">
        <img src={Beginner} alt="Beginner icon" className="mr-3" />
        <Title title="Guia para iniciar en Accesibilidad Web" />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-10">
        <Card
          icon={Bookshelf}
          title="Introducción a las Pautas de Accesibilidad para el Contenido Web (WCAG)"
          link="https://www.w3.org/WAI/standards-guidelines/wcag/es"
        >
          <p className="text-lg">
            Se desarrollan en cooperación con personas y organizaciones de todo
            el mundo, con el fin de ofrecer un estándar único y compartido que
            satisfaga las necesidades de las personas, organizaciones y
            gobiernos a nivel internacional.
          </p>
        </Card>
        <div className="row-span-2">
          <Card
            icon={Bookshelf}
            title="W3C"
            link="https://www.w3.org/WAI/standards-guidelines/wcag/es"
          >
            <>
              <p>
                Las pautas de accesibilidad web internacionalmente adoptadas son
                las definidas por la W3C y se denominan en castellano: "Pautas
                de Accesibilidad de Contenido Web 2.0", WCAG 2.0 por sus siglas
                en inglés.
              </p>
              <br />
              <p>
                La versión original y normativa en inglés se denomina, "Web
                Content Accessibility Guidelines (WCAG) 2.0". Las WCAG 2.0 se
                han convertido además en el estándar internacional ISO/IEC
                40500:2012.
              </p>
              <br />
              <p>
                El contenido de las WCAG 2.0 se estructura a partir de cuatro
                conceptos importantes: principios, pautas, criterios de
                conformidad y técnicas suficientes y recomendables.
              </p>
              <br />
              <ul>
                <li>
                  <b>Principios:</b> son cuatro principios que proporcionan los
                  fundamentos de la accesibilidad web, a saber: perceptible,
                  operable, comprensible y robusto.
                </li>
                <li>
                  <b>Pautas:</b>para cada uno de los cuatro principios se han
                  definido pautas. En total son doce pautas que poseen un nivel
                  de abstracción menor que los principios, aunque no son
                  totalmente verificables como sí lo son los criterios de
                  conformidad.
                </li>
                <li>
                  <b>Criterios de conformidad:</b> para cada pauta se
                  proporcionan criterios de conformidad verificables que
                  permiten emplear las WCAG 2.0 en la práctica. Con el fin de
                  cubrir las diferentes necesidades de las personas que navegan
                  la web se han defindo tres niveles de conformidad; de menor a
                  mayor exigencia estos niveles son:
                  <ul style={{ listStyleType: "circle" }}>
                    <li>A: Deben cumplirse 25 criterios de conformidad.</li>
                    <li>
                      AA: Se agregan 13 criterios de conformidad a los 25 del
                      nivel A; total 38 criterios.
                    </li>
                    <li>
                      AAA: Se agregan 23 criterios de conformidad a los 38 de
                      los demás niveles; total 61 criterios.
                    </li>
                  </ul>
                </li>
              </ul>
              <p>
                "Verificable" significa en este contexto que cada criterio puede
                ser evaluado de forma directa, pudiendo ser los resultados de
                cada verificación los siguientes: “cumple”, “no cumple”, “no
                aplica”.
              </p>
            </>
          </Card>
        </div>
        <Card
          icon={Bookshelf}
          title="Accesibilidad Web en Argentina"
          link="https://github.com/argob/accesibilidad-web/blob/master/docs/recomendaciones_pautas_accesibilidad_web.md#las-pautas-de-accesibilidad-web-en-la-argentina"
        >
          <p className="text-lg">
            La normativa técnica que adopta las WCAG 2.0 de la W3C en Argentina
            es la Disposición ONTI 6/2019, siendo "A" y "AA" los niveles de
            conformidad requeridos.
            <br />
            <br />
            Además de adoptar las pautas, la Disposición aprueba los "niveles
            mínimos de conformidad" que deben cumplir las páginas web de las
            organizaciones alcanzadas por la norma, siendo 30 criterios mínimos
            considerando una totalidad de 38 criterios.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default DocSection;
