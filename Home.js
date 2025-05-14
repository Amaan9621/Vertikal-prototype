
const sygeplejersker = [
    { sygeplejerskeID: 1, navn: "Anna Hansen", alder: 29, ansættelsesdato: "2019-03-01" },
    { sygeplejerskeID: 2, navn: "Kristina Ahmed", alder: 34, ansættelsesdato: "2020-07-15" },
    { sygeplejerskeID: 3, navn: "Louise Nielsen", alder: 41, ansættelsesdato: "2015-11-22" },
    { sygeplejerskeID: 4, navn: "Joahnne Knudsen", alder: 37, ansættelsesdato: "2018-05-09" },
    { sygeplejerskeID: 5, navn: "Camilla Madsen", alder: 32, ansættelsesdato: "2021-02-17" },
    { sygeplejerskeID: 6, navn: "Isabella Hussein", alder: 45, ansættelsesdato: "2010-09-30" },
    { sygeplejerskeID: 7, navn: "Maria Thomsen", alder: 28, ansættelsesdato: "2023-01-05" },
    { sygeplejerskeID: 8, navn: "Aisha Khan", alder: 39, ansættelsesdato: "2017-12-11" }
  ];


  const patienter = [
    { cprNummer: "010190-1234", navn: "Peter Jensen", alder: 67, aktionsdiagnose: "Diabetes", behandlingsniveau: "Almindelig", postnummer: 2200, stueNummer: "A101", kommunekode: 101, smitterisiko: false },
    { cprNummer: "020280-2345", navn: "Lise Pedersen", alder: 45, aktionsdiagnose: "KOL", behandlingsniveau: "Intensiv", postnummer: 2200, stueNummer: "A102", kommunekode: 102, smitterisiko: true },
    { cprNummer: "150376-3456", navn: "Henrik Sørensen", alder: 49, aktionsdiagnose: "Hjerteproblemer", behandlingsniveau: "Akut", postnummer: 2200, stueNummer: "A103", kommunekode: 103, smitterisiko: false },
    { cprNummer: "311289-4567", navn: "Karen Larsen", alder: 35, aktionsdiagnose: "Astma", behandlingsniveau: "Almindelig", postnummer: 2200, stueNummer: "A104", kommunekode: 104, smitterisiko: false },
    { cprNummer: "120193-5678", navn: "Thomas Mikkelsen", alder: 32, aktionsdiagnose: "Brækket ben", behandlingsniveau: "Almindelig", postnummer: 2200, stueNummer: "A105", kommunekode: 105, smitterisiko: false },
    { cprNummer: "080576-6789", navn: "Nina Johansen", alder: 48, aktionsdiagnose: "COVID-19", behandlingsniveau: "Isolation", postnummer: 2200, stueNummer: "A106", kommunekode: 106, smitterisiko: true },
    { cprNummer: "250870-7890", navn: "Allan Kristensen", alder: 54, aktionsdiagnose: "Kræft", behandlingsniveau: "Langvarig", postnummer: 2200, stueNummer: "A107", kommunekode: 107, smitterisiko: false },
    { cprNummer: "040684-8901", navn: "Sofie Lund", alder: 40, aktionsdiagnose: "Migræne", behandlingsniveau: "Almindelig", postnummer: 2200, stueNummer: "A108", kommunekode: 108, smitterisiko: false },
    { cprNummer: "170991-9012", navn: "Mads Lauritsen", alder: 33, aktionsdiagnose: "Forbrænding", behandlingsniveau: "Akut", postnummer: 2200, stueNummer: "B101", kommunekode: 109, smitterisiko: true },
    { cprNummer: "311276-1123", navn: "Lone Rasmussen", alder: 48, aktionsdiagnose: "Pneumoni", behandlingsniveau: "Almindelig", postnummer: 2200, stueNummer: "B102", kommunekode: 110, smitterisiko: true },
    { cprNummer: "221084-2234", navn: "Bo Petersen", alder: 40, aktionsdiagnose: "Hjernerystelse", behandlingsniveau: "Observation", postnummer: 2200, stueNummer: "B103", kommunekode: 111, smitterisiko: false },
    { cprNummer: "110688-3345", navn: "Tina Holm", alder: 36, aktionsdiagnose: "Knogleskade", behandlingsniveau: "Almindelig", postnummer: 2200, stueNummer: "B104", kommunekode: 112, smitterisiko: false },
    { cprNummer: "050179-4456", navn: "Martin Krog", alder: 46, aktionsdiagnose: "Infektion", behandlingsniveau: "Intensiv", postnummer: 2200, stueNummer: "B105", kommunekode: 113, smitterisiko: true },
    { cprNummer: "300991-5567", navn: "Emilie Bæk", alder: 31, aktionsdiagnose: "Allergisk reaktion", behandlingsniveau: "Akut", postnummer: 2200, stueNummer: "B106", kommunekode: 114, smitterisiko: true },
    { cprNummer: "090493-6678", navn: "Jonas Jeppesen", alder: 32, aktionsdiagnose: "Nyresvigt", behandlingsniveau: "Langvarig", postnummer: 2200, stueNummer: "B107", kommunekode: 115, smitterisiko: false },
    { cprNummer: "210180-7789", navn: "Birgit Mortensen", alder: 45, aktionsdiagnose: "Hofteoperation", behandlingsniveau: "Rehabilitering", postnummer: 2200, stueNummer: "B108", kommunekode: 116, smitterisiko: false },
    { cprNummer: "010185-8890", navn: "Per Simonsen", alder: 40, aktionsdiagnose: "Tuberkulose", behandlingsniveau: "Isolation", postnummer: 2200, stueNummer: "C101", kommunekode: 117, smitterisiko: true },
    { cprNummer: "161294-9901", navn: "Cecilie Dam", alder: 30, aktionsdiagnose: "Graviditet", behandlingsniveau: "Observation", postnummer: 2200, stueNummer: "C102", kommunekode: 118, smitterisiko: false },
    { cprNummer: "080477-1012", navn: "Mads Bro", alder: 47, aktionsdiagnose: "Hjertestop", behandlingsniveau: "Akut", postnummer: 2200, stueNummer: "C103", kommunekode: 119, smitterisiko: true },
    { cprNummer: "030388-2123", navn: "Sarah Bruun", alder: 36, aktionsdiagnose: "Blindtarmsbetændelse", behandlingsniveau: "Kirurgi", postnummer: 2200, stueNummer: "C104", kommunekode: 120, smitterisiko: false },
    { cprNummer: "120190-3234", navn: "Michael Dahl", alder: 35, aktionsdiagnose: "Lungebetændelse", behandlingsniveau: "Almindelig", postnummer: 2200, stueNummer: "C105", kommunekode: 121, smitterisiko: true },
    { cprNummer: "200692-4345", navn: "Julie Dalsgaard", alder: 32, aktionsdiagnose: "Fødevareforgiftning", behandlingsniveau: "Observation", postnummer: 2200, stueNummer: "C106", kommunekode: 122, smitterisiko: false },
    { cprNummer: "300983-5456", navn: "Rasmus Birk", alder: 41, aktionsdiagnose: "Hjernerystelse", behandlingsniveau: "Almindelig", postnummer: 2200, stueNummer: "C107", kommunekode: 123, smitterisiko: false },
    { cprNummer: "220196-6567", navn: "Mette Vang", alder: 29, aktionsdiagnose: "Influenza", behandlingsniveau: "Almindelig", postnummer: 2200, stueNummer: "C108", kommunekode: 124, smitterisiko: true }
  ];





// Indsæt sygeplejersker
document.addEventListener("DOMContentLoaded", () => {
    const nurseContainer = document.querySelector(".nurse-section");
    sygeplejersker.forEach(n => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <p><strong>Navn:</strong> ${n.navn}</p>
            <p><strong>Alder:</strong> ${n.alder}</p>
            <p><strong>Ansat siden:</strong> ${n.ansættelsesdato}</p>
        `;
        nurseContainer.appendChild(div);
    });

    // Patienter
    const patientContainer = document.querySelector(".patient-section");
    patienter.forEach(p => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <p><strong>Navn:</strong> ${p.navn}</p>
            <p><strong>Alder:</strong> ${p.alder}</p>
            <p><strong>Diagnose:</strong> ${p.aktionsdiagnose}</p>
        `;
        patientContainer.appendChild(div);
    });
});