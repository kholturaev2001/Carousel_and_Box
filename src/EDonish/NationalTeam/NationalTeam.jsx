import React from "react";
import style from "./NationalTeam.module.scss";

const NationalTeam = ({ lgn = 1 }) => {

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
  ];

  const data = [
    {
      class: 1,
      total: {
        students: 511,
        girls: 272,
        tajiks: 420,
        tajikgirls: 189,
        uzbeks: 4,
        uzbekgirls: 3,
        other: 7,
        othergirls: 6
      },
      groups: [
        {
          lang: "1 Тоҷикӣ",
          rows: [
            {
              rowNumber: 1,
              group: "1Ғ",
              studentsCount: 32,
              girls: 18,
              tajiks: 30,
              tajikGirls: 13,
              uzbeks: 1,
              uzbekGirls: 1,
              other: 0,
              otherGirls: 0
            },
            {
              rowNumber: 2,
              group: "1Е",
              studentsCount: 34,
              girls: 14,
              tajiks: 29,
              tajikGirls: 17,
              uzbeks: 0,
              uzbekGirls: 0,
              other: 0,
              otherGirls: 0
            },
            {
              rowNumber: 3,
              group: "1Ж",
              studentsCount: 30,
              girls: 16,
              tajiks: 29,
              tajikGirls: 14,
              uzbeks: 0,
              uzbekGirls: 0,
              other: 0,
              otherGirls: 0
            }
          ],
          sum_gl: {
            students: 280,
            girls: 140,
            tajiks: 260,
            tajikgirls: 129,
            uzbeks: 2,
            uzbekgirls: 2,
            other: 0,
            othergirls: 0
          }
        },
        {
          lang: "1 Русӣ",
          rows: [
            {
              rowNumber: 1,
              group: "1А",
              studentsCount: 40,
              girls: 26,
              tajiks: 38,
              tajikGirls: 13,
              uzbeks: 0,
              uzbekGirls: 0,
              other: 2,
              otherGirls: 1
            },
            {
              rowNumber: 2,
              group: "1Б",
              studentsCount: 39,
              girls: 21,
              tajiks: 35,
              tajikGirls: 17,
              uzbeks: 0,
              uzbekGirls: 0,
              other: 0,
              otherGirls: 0
            },
            {
              rowNumber: 3,
              group: "1В",
              studentsCount: 38,
              girls: 22,
              tajiks: 24,
              tajikGirls: 8,
              uzbeks: 0,
              uzbekGirls: 0,
              other: 3,
              otherGirls: 3
            }
          ],
          sum_gl: {
            students: 231,
            girls: 132,
            tajiks: 160,
            tajikgirls: 60,
            uzbeks: 2,
            uzbekgirls: 1,
            other: 7,
            othergirls: 6
          }
        }
      ]
    }
  ];

  return (
    <div className={style.container}>
      {[
        "Ноҳияи Исмоили Сомонӣ",
        "Ноҳияи Шоҳмансур",
        "Ноҳияи Сино",
        "Ноҳияи Фирдавсӣ",
        "Муассисаҳои шаҳр"
      ].map((name, id) => (
        <div key={id} className={style.region}>
          <span>{name}</span>
          <div className={style.table}>
            <span className={`${style.title}`}>
              {lgn === 1 ? "Ҳайати миллӣ" : "Национальный состав"}
            </span>
            <div>
              <div className={`${style.tableHeight}`}>
                <table
                  className={`${style.tableBordered} ${style.tableSticky}`}
                >
                  <thead>
                    <tr>
                      <th rowSpan="3">№ п/п</th>
                      <th rowSpan="3">{lgn === 1 ? "Cинф" : "Класс"}</th>
                      <th rowSpan="3">
                        {lgn === 1
                          ? "Миқдори хонандагон"
                          : "Количество учеников"}
                      </th>
                      <th rowSpan="3">{lgn === 1 ? "Духтар" : "Девочки"}</th>
                      <th colSpan="2">{lgn === 1 ? "Тоҷик" : "Таджик"}</th>
                      <th colSpan="2">Узбек</th>
                      <th colSpan="2">{lgn === 1 ? "Дигар" : "Другое"}</th>
                    </tr>
                    <tr>
                      <th style={{ top: 60 }}>
                        {lgn === 1 ? "Ҳамагӣ" : "Всего"}
                      </th>
                      <th style={{ top: 60 }}>
                        {lgn === 1 ? "Духтар" : "Девочки"}
                      </th>
                      <th style={{ top: 60 }}>
                        {lgn === 1 ? "Ҳамагӣ" : "Всего"}
                      </th>
                      <th style={{ top: 60 }}>
                        {lgn === 1 ? "Духтар" : "Девочки"}
                      </th>
                      <th style={{ top: 60 }}>
                        {lgn === 1 ? "Ҳамагӣ" : "Всего"}
                      </th>
                      <th style={{ top: 60 }}>
                        {lgn === 1 ? "Духтар" : "Девочки"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <>
                      {data.length &&
                        data.map((item, id) => (
                          <>
                            {item.groups.map((elem, id) => (
                              <>
                                {elem.rows.map((e, id) => (
                                  <tr key={id}>
                                    <td>{e.rowNumber}</td>
                                    <td>{e.group}</td>
                                    <td>{e.studentsCount}</td>
                                    <td>{e.girls}</td>
                                    <td>{e.tajiks}</td>
                                    <td>{e.tajikGirls}</td>
                                    <td>{e.uzbeks}</td>
                                    <td>{e.uzbekGirls}</td>
                                    <td>{e.other}</td>
                                    <td>{e.otherGirls}</td>
                                  </tr>
                                ))}
                                <tr key={new Date().toISOString()}>
                                  <td colSpan="2">
                                    {lgn === 1 ? "Ҳамагӣ" : "Всего"}{" "}
                                    {elem.rows.length}
                                    {elem.lang.slice(1).toLowerCase()}
                                  </td>
                                  <td>{elem.sum_gl.students}</td>
                                  <td>{elem.sum_gl.girls}</td>
                                  <td>{elem.sum_gl.tajiks}</td>
                                  <td>{elem.sum_gl.tajikgirls}</td>
                                  <td>{elem.sum_gl.uzbeks}</td>
                                  <td>{elem.sum_gl.uzbekgirls}</td>
                                  <td>{elem.sum_gl.other}</td>
                                  <td>{elem.sum_gl.othergirls}</td>
                                </tr>
                              </>
                            ))}
                            <tr className={style.blue} key={id}>
                              <td colSpan="2">
                                {lgn === 1 ? "Ҳамаги" : "Всего"}{" "}
                              </td>
                              <td>{item.total.students}</td>
                              <td>{item.total.girls}</td>
                              <td>{item.total.tajiks}</td>
                              <td>{item.total.tajikgirls}</td>
                              <td>{item.total.uzbeks}</td>
                              <td>{item.total.uzbekgirls}</td>
                              <td>{item.total.other}</td>
                              <td>{item.total.othergirls}</td>
                            </tr>
                          </>
                        ))}
                    </>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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

export default NationalTeam;
