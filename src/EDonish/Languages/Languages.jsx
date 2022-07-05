import React from "react";
import style from "./Languages.module.scss";

const Languages = ({lgn = 1}) => {
  const total = [
    "Ҳамагӣ:",
    "74",
    "2352",
    "1159",
    "56",
    "2006",
    "875",
    "",
    "",
    "",
    "130",
    "4358",
    "2034"
  ];

  const totalInCity = [
    "Ҷамъ, дар шаҳри Душанбе:",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  return (
    <div className={style.table}>
      <div className={style.region}>
        <div className={style.container}>
          <header>
            <ul>
              <li>{lgn === 1 ? "Синфҳо" : "Классы"}</li>
            </ul>
            <div>
              <span>{lgn === 1 ? "Забонҳои таълимӣ" : "Языки обучения"}</span>

              <div>
                {[
                  `${lgn === 1 ? "Тоҷикӣ" : "Таджикский"}`,
                  `${lgn === 1 ? "Русӣ" : "Русский"}`,
                  `${lgn === 1 ? "Англисӣ" : "Английский"}`
                ].map((e, id) => (
                  <section key={id}>
                    <span>
                      <span>{e}</span>
                      <span>
                        ({lgn === 1 ? "забони таълим" : "язык обучения"})
                      </span>
                    </span>

                    {[
                      `${lgn === 1 ? "Миқдори синфҳо" : "Количество классов"}`,
                      `${lgn === 1 ? "Шумораи хонандагон" : "Ученики"}`,
                      `${lgn === 1 ? "Аз онҳо духтар" : "Из них девочек"}`
                    ].map((el, id) => (
                      <li key={id}>
                        {" "}
                        <span>{el}</span>
                      </li>
                    ))}
                  </section>
                ))}
                <section>
                  <div>{lgn === 1 ? "Ҳамагӣ" : "Итого"}</div>
                  {[
                    `${lgn === 1 ? "Миқдори синфҳо" : "Количество классов"}`,
                    `${lgn === 1 ? "Шумораи хонандагон" : "Ученики"}`,
                    `${lgn === 1 ? "Аз онҳо духтар" : "Из них девочек"}`
                  ].map((el, id) => (
                    <li key={id}>
                      <span>{el}</span>
                    </li>
                  ))}
                </section>
              </div>
            </div>
          </header>
          <main>
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"].map(
              (e, id) => (
                <ul key={id}>
                  <li>Синфи {e}</li>
                  <li>7</li>
                  <li>208</li>
                  <li>97</li>
                  <li>7</li>
                  <li>295</li>
                  <li>192</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li>14</li>
                  <li>503</li>
                  <li>229</li>
                </ul>
              )
            )}
          </main>
        </div>

        <ul>
          {total.map((e, id) => (
            <li key={id}>
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </div>
      <ul className={style.total}>
        {totalInCity.map((e, id) => (
          <li key={id}>
            <span>{e}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
