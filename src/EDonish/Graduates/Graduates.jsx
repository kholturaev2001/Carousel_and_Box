import React from "react";
import style from "./Graduates.module.scss";

const Graduates = ({ lgn = 1 }) => {
    const total = [
        "Ҳамагӣ:",
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
        "",
        "",
        "",
        "",
        ""
      ];

      const totalInCity = [
        "Ҷамъ, шаҳри Душанбе:",
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
        "",
        "",
        "",
        "",
        ""
      ];

  return (
    <div className={style.table}>
      {[
        "Ноҳияи Исмоили Сомонӣ",
        "Ноҳияи Шоҳмансур",
        "Ноҳияи Сино",
        "Ноҳияи Фирдавсӣ",
        "Муассисаҳои шаҳр"
      ].map((e, id) => (
      <div key={id} className={style.region}>
        <span>{e}</span>
        <div className={style.classes}>
          <span>
            {lgn === 1
              ? "Маълумот оида ба хонандагоне, ки синфи мазкурро дар соли таҳсили гузашта хатм карданд"
              : "Информация об учениках, окончивших данный класс в текущем году"}
          </span>
          <header>
            <span>{lgn === 1 ? "Синфҳо" : "Классы"}</span>
            <section>
              <span className={style.title}>
                {lgn === 1
                  ? "Хонандагоне, ки ба синфи болои:"
                  : "Ученики, которые перешли/не перешли в следующий класс"}
              </span>
              <div>
                <section className={style.passed}>
                  <p>{lgn === 1 ? "Гузаштаанд" : "Перешли"}</p>
                  <ul>
                    <li>
                      <span>{lgn === 1 ? "Ҳамагӣ" : "Итого"}</span>
                    </li>
                    <li>
                      <span>
                        {lgn === 1 ? "Аз онҳо духтар" : "Из них девочек"}
                      </span>
                    </li>
                    <div>
                      <span>{lgn === 1 ? "аълочиён" : "отличники"}</span>
                      <ul>
                        <li>
                          <span>{lgn === 1 ? "Ҳамагӣ" : "Итого"}</span>
                        </li>
                        <li>
                          <span>
                            {lgn === 1 ? "Аз онҳо духтар" : "Из них девочек"}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <span>
                        {lgn === 1 ? "хубу аъло" : "хоршисты и отличники"}
                      </span>
                      <ul>
                        <li>
                          <span>{lgn === 1 ? "Ҳамагӣ" : "Итого"}</span>
                        </li>
                        <li>
                          <span>
                            {lgn === 1 ? "Аз онҳо духтар" : "Из них девочек"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </section>
                <section className={style.notPassed}>
                  <p>{lgn === 1 ? "Нагузаштаанд" : "Не перешли"}</p>
                  <ul>
                    <li>
                      <span>{lgn === 1 ? "Ҳамагӣ" : "Итого"}</span>
                    </li>
                    <li>
                      <span>
                        {lgn === 1 ? "Аз онҳо духтар" : "Из них девочек"}
                      </span>
                    </li>
                  </ul>
                </section>
              </div>
            </section>
            <section className={style.secondPart}>
              <span className={style.title}>
                {lgn === 1
                  ? "Хонандагоне, ки дар соли хониш гузашта ба мактаб наомаданд"
                  : "Ученики, переведенные в текущем году, но не пришедшие в школу"}
              </span>
              <div>
                <section>
                  <p>
                    {" "}
                    {lgn === 1
                      ? "Ҳамаги 20 руз ва зиёд аз он"
                      : "Всего 20 дней и более "}
                  </p>
                  <div>
                    <div>
                      <span>{lgn === 1 ? "бо сабаб" : "по причине"}</span>
                      <ul>
                        <li>
                          <span>{lgn === 1 ? "Ҳамагӣ" : "Итого"}</span>
                        </li>
                        <li>
                          <span>
                            {lgn === 1 ? "Аз онҳо духтар" : "Из них девочек"}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <span>{lgn === 1 ? "бе сабаб" : "без причины"}</span>
                      <ul>
                        <li>
                          <span>{lgn === 1 ? "Ҳамагӣ" : "Итого"}</span>
                        </li>
                        <li>
                          <span>
                            {lgn === 1 ? "Аз онҳо духтар" : "Из них девочек"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section>
                  <p>
                    {lgn === 1
                      ? "40 рӯз ва зиёда аз он (пай дар пай)"
                      : "40 дней и более (беспрерывно)"}
                  </p>
                  <div>
                    <div>
                      <span>{lgn === 1 ? "бо сабаб" : "по причине"}</span>
                      <ul>
                        <li>
                          <span>{lgn === 1 ? "Ҳамагӣ" : "Итого"}</span>
                        </li>
                        <li>
                          <span>
                            {lgn === 1 ? "Аз онҳо духтар" : "Из них девочек"}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <span>{lgn === 1 ? "бе сабаб" : "без причины"}</span>
                      <ul>
                        <li>
                          <span>{lgn === 1 ? "Ҳамагӣ" : "Итого"}</span>
                        </li>
                        <li>
                          <span>
                            {lgn === 1 ? "Аз онҳо духтар" : "Из них девочек"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </header>
          <main>
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"].map(
              (e, id) => (
                <ul key={id}>
                  <li>{`${lgn === 1 ? "Синфи" : "Класс"} ${e}`}</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
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
      ))}
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

export default Graduates;
