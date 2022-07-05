import React from "react";
import style from "./StudyYear.module.scss";

const StudyYear = () => {
  const mark = ["5", "%", "4", "%", "3", "%", "2", "%", "с/н", "%"];
  const data = [
    "2999",
    "2703",
    "194",
    "7,36%",
    "791",
    "30,02%",
    "1650",
    "62,62%",
    "67",
    "2,54%",
    "1",
    "0,04%",
    "97%",
    "37,38%",
    "3,5"
  ];
  const total = [
    "Ҳамагӣ:",
    "194",
    "7,36%",
    "791",
    "30,02%",
    "1650",
    "62,62%",
    "",
    "2,54%",
    "1",
    "0,04%",
    "",
    "37,38%",
    "3,5"
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
          {["1 - 4", "5 - 9", "10 - 11"].map((e, id) => (
            <div key={id} className={style.classes}>
              <span>Ҳисобот оид ба натиҷаи соли таҳсил дар синфҳои {e}</span>
              <header>
                <ul>
                  <li>Шумораи умумии хонандагон</li>
                  <li>Шумораи хонандагони иштирок карда</li>
                </ul>

                <ul>
                  <span>Баҳо</span>
                  <span>
                    {mark.map((el, index) => (
                      <li key={index}>{el}</li>
                    ))}
                  </span>
                </ul>

                <ul>
                  <li><span>Фоизи азхудкунӣ</span></li>
                  <li><span>Сифати дониш</span></li>
                  <li><span>Баҳои синфҳо</span></li>
                </ul>
              </header>
              <main>
                <ul>
                  {data.map((number, id) => (
                    <li key={id}>{number}</li>
                  ))}
                </ul>
              </main>
            </div>
          ))}
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

export default StudyYear;
