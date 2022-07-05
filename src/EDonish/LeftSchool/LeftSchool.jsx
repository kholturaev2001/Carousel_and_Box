import React from "react";
import style from "./LeftSchool.module.scss";

const LeftSchool = () => {
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
          <span>{e} </span>
          {["Сабаби аз мактаб баромада рафтан"].map((e, id) => (
            <div key={id} className={style.main}>
              <span>{e}</span>
              <header>
                <ul>
                  <li>Номи нишондиҳанда</li>
                </ul>

                <div>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((e, id) => (
                    <div key={id}>
                      <span>Синфи {e}</span>
                      <ul>
                        <li>
                          <span>Ҳамагӣ </span>
                        </li>
                        <span>Аз онҳо духтарон </span>
                      </ul>
                    </div>
                  ))}
                </div>
              </header>

              <main>
                {[
                  "Ба мактабҳо ва синфҳои бачагони имконияти тараққиёташ маҳдуд",
                  "Ба мактабҳои хусусӣ",
                  "Ба мактабҳои хусусӣ",
                  "Ба мактабҳои рӯзонаи таҳсилоти замагонӣ ҳамагӣ (ҷамъи сатрҳои 104ғ1008), аз он ҷумла",
                  "ноҳияҳои (шаҳри) мазкур",
                  "ноҳияҳои (шаҳрҳои) вилояти мазкур",
                  "дигар вилоятҳо",
                  "Иттиҳоди Давлатҳои Муттаҳид",
                  "берун аз Иттиҳоди Давлатҳои Муттаҳид",
                  "Ба мактабҳои шабона (бастии) таҳсилоти умумӣ",
                  "Ба муассисаҳои миёнаи касбӣ",
                  "аз он ҷумла тибқи квотаи Президентӣ",
                  "Ба муассисаҳои ибтидоии касбии тадбиқкунандаи таёрии таҳсилоти умумӣ",
                  "Ба бахшҳои гуногун",
                  "Аз сабаби маризӣ"
                ].map((e, id) => (
                  <>  
                    <ul key={id}>
                      <li>{e}</li>
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
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </>
                ))}
                <ul>
                  <li>
                    <span>Ҳамагӣ</span>
                  </li>
                </ul>
              </main>
            </div>
          ))}
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

export default LeftSchool;
