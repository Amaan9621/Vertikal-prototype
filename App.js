

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
  
  
  const patienttilstande = [
    { cprNummer: "010190-1234", ews: 2, plejetid: "selvhjulpen" },
    { cprNummer: "020280-2345", ews: 4, plejetid: "moderat hjælp" },
    { cprNummer: "150376-3456", ews: 3, plejetid: "moderat hjælp" },
    { cprNummer: "311289-4567", ews: 1, plejetid: "selvhjulpen" },
    { cprNummer: "120193-5678", ews: 0, plejetid: "selvhjulpen" },
    { cprNummer: "080576-6789", ews: 6, plejetid: "maksimal hjælp" },
    { cprNummer: "250870-7890", ews: 3, plejetid: "moderat hjælp" },
    { cprNummer: "040684-8901", ews: 2, plejetid: "selvhjulpen" },
    { cprNummer: "170991-9012", ews: 5, plejetid: "maksimal hjælp" },
    { cprNummer: "311276-1123", ews: 4, plejetid: "moderat hjælp" },
    { cprNummer: "221084-2234", ews: 1, plejetid: "selvhjulpen" },
    { cprNummer: "110688-3345", ews: 3, plejetid: "moderat hjælp" },
    { cprNummer: "050179-4456", ews: 7, plejetid: "maksimal hjælp" },
    { cprNummer: "300991-5567", ews: 4, plejetid: "selvhjulpen" },
    { cprNummer: "090493-6678", ews: 3, plejetid: "moderat hjælp" },
    { cprNummer: "210180-7789", ews: 8, plejetid: "maksimal hjælp" },
    { cprNummer: "010185-8890", ews: 5, plejetid: "moderat hjælp" },
    { cprNummer: "161294-9901", ews: 2, plejetid: "selvhjulpen" },
    { cprNummer: "080477-1012", ews: 7, plejetid: "maksimal hjælp" },
    { cprNummer: "030388-2123", ews: 4, plejetid: "moderat hjælp" },
    { cprNummer: "120190-3234", ews: 5, plejetid: "moderat hjælp" },
    { cprNummer: "200692-4345", ews: 2, plejetid: "selvhjulpen" },
    { cprNummer: "300983-5456", ews: 1, plejetid: "selvhjulpen" },
    { cprNummer: "220196-6567", ews: 6, plejetid: "maksimal hjælp" }
  ];

  const behandlingshistorik = [
    { behandlingsID: "BH001", sygeplejerskeID: 1, cprNummer: "010190-1234", dato: "2021-05-12" },
    { behandlingsID: "BH002", sygeplejerskeID: 2, cprNummer: "020280-2345", dato: "2020-08-23" },
    { behandlingsID: "BH003", sygeplejerskeID: 3, cprNummer: "150376-3456", dato: "2019-11-15" },
    { behandlingsID: "BH004", sygeplejerskeID: 4, cprNummer: "311289-4567", dato: "2023-03-08" },
    { behandlingsID: "BH005", sygeplejerskeID: 5, cprNummer: "120193-5678", dato: "2022-07-29" },
    { behandlingsID: "BH006", sygeplejerskeID: 6, cprNummer: "080576-6789", dato: "2021-02-17" },
    { behandlingsID: "BH007", sygeplejerskeID: 1, cprNummer: "250870-7890", dato: "2020-10-10" },
    { behandlingsID: "BH008", sygeplejerskeID: 4, cprNummer: "250870-7890", dato: "2021-06-14" },
    { behandlingsID: "BH009", sygeplejerskeID: 7, cprNummer: "040684-8901", dato: "2023-05-01" },
    { behandlingsID: "BH010", sygeplejerskeID: 3, cprNummer: "170991-9012", dato: "2022-11-22" },
    { behandlingsID: "BH011", sygeplejerskeID: 8, cprNummer: "311276-1123", dato: "2024-02-13" },
    { behandlingsID: "BH012", sygeplejerskeID: 6, cprNummer: "221084-2234", dato: "2020-06-05" },
    { behandlingsID: "BH013", sygeplejerskeID: 5, cprNummer: "110688-3345", dato: "2021-09-17" },
    { behandlingsID: "BH014", sygeplejerskeID: 2, cprNummer: "050179-4456", dato: "2022-03-20" },
    { behandlingsID: "BH015", sygeplejerskeID: 1, cprNummer: "300991-5567", dato: "2023-01-08" },
    { behandlingsID: "BH016", sygeplejerskeID: 4, cprNummer: "090493-6678", dato: "2020-12-04" },
    { behandlingsID: "BH017", sygeplejerskeID: 6, cprNummer: "210180-7789", dato: "2021-07-25" },
    { behandlingsID: "BH018", sygeplejerskeID: 7, cprNummer: "010185-8890", dato: "2023-09-30" },
    { behandlingsID: "BH019", sygeplejerskeID: 8, cprNummer: "161294-9901", dato: "2022-05-11" },
    { behandlingsID: "BH020", sygeplejerskeID: 2, cprNummer: "080477-1012", dato: "2021-04-03" },
    { behandlingsID: "BH021", sygeplejerskeID: 3, cprNummer: "030388-2123", dato: "2023-06-14" },
    { behandlingsID: "BH022", sygeplejerskeID: 1, cprNummer: "120190-3234", dato: "2022-02-28" },
    { behandlingsID: "BH023", sygeplejerskeID: 5, cprNummer: "200692-4345", dato: "2023-12-03" },
    { behandlingsID: "BH024", sygeplejerskeID: 3, cprNummer: "300983-5456", dato: "2021-11-19" },
    { behandlingsID: "BH025", sygeplejerskeID: 7, cprNummer: "220196-6567", dato: "2024-04-20" },
    { behandlingsID: "BH026", sygeplejerskeID: 8, cprNummer: "080576-6789", dato: "2022-12-10" },
    { behandlingsID: "BH027", sygeplejerskeID: 2, cprNummer: "020280-2345", dato: "2023-10-01" },
    { behandlingsID: "BH028", sygeplejerskeID: 4, cprNummer: "010190-1234", dato: "2024-01-15" }
  ];


  // Grænse for EWS: 15 
  // Grænse for plejetid: 1 med maksimal hjælp

  function harHistorik(patientId, sygeplejerskeId, historik) {
    return historik.some(entry =>
      entry.patientId === patientId && entry.sygeplejerskeId === sygeplejerskeId
    );
  }



  function mergePatientData(patienter, patienttilstande) {
    return patienter.map((patient) => {
      const tilstand = patienttilstande.find(
        (t) => t.cprNummer === patient.cprNummer
      );
      return {
        ...patient,
        ews: tilstand?.ews ?? 0,
        plejetid: tilstand?.plejetid ?? "ukendt",
        senestOpdateret: tilstand?.senestOpdateret ?? null
      };
    });
  }
  function fordelPatienterAvanceret(patienter, sygeplejersker, behandlingshistorik) {
    const tildeling = {}; // sygeplejerskeID -> patienter
    const status = {};    // sygeplejerskeID -> tilstand
    const historikMap = {}; // CPR -> set of sygeplejerskeID
  
    // Initialiser tildeling og status
    for (const s of sygeplejersker) {
      tildeling[s.sygeplejerskeID] = [];
      status[s.sygeplejerskeID] = {
        ewsSum: 0,
        antal: 0,
        harMaksimalHjælp: false
      };
      //console.log(tildeling, status)
    }

  
    // Byg historikMap
    for (const entry of behandlingshistorik) {
      const { cprNummer, sygeplejerskeID } = entry;
      if (!historikMap[cprNummer]) {
        historikMap[cprNummer] = new Set();
      }
      historikMap[cprNummer].add(sygeplejerskeID);
      
    }
  
    // Sorter patienter så de mest krævende (maksimal hjælp og høj EWS) fordeles først
    patienter.sort((a, b) => {
      const plejePrioritet = (p) => p.plejetid === "maksimal hjælp" ? 2 : (p.plejetid === "moderat hjælp" ? 1 : 0);
      return (plejePrioritet(b) - plejePrioritet(a)) || (b.ews - a.ews);
    });

  
    for (const patient of patienter) {
      const historikIDs = historikMap[patient.cprNummer] || new Set();
  
      // Prio 1: Sygeplejersker med historik
      const kandidaterHistorik = sygeplejersker
        .filter(s => historikIDs.has(s.sygeplejerskeID))
        .filter(s => kanTildele(patient, status[s.sygeplejerskeID]));
  
      // Prio 2: Øvrige gyldige sygeplejersker
      const kandidaterAndre = sygeplejersker
        .filter(s => !historikIDs.has(s.sygeplejerskeID))
        .filter(s => kanTildele(patient, status[s.sygeplejerskeID]));
  
      const kandidat = [...kandidaterHistorik, ...kandidaterAndre][0];
  
      if (kandidat) {
        tildeling[kandidat.sygeplejerskeID].push(patient);
        const st = status[kandidat.sygeplejerskeID];
        st.ewsSum += patient.ews;
        st.antal++;
        if (patient.plejetid === "maksimal hjælp") {
          st.harMaksimalHjælp = true;
        }
      } else {
        console.error(`Ingen mulig tildeling for patient med CPR: ${patient.cprNummer}`);
      }
    }
    for (const [nurseId, patients] of Object.entries(tildeling)) {
      const samletEWS = patients.reduce((sum, p) => sum + p.ews, 0);
      console.log(`Sygeplejerske ${nurseId} (Samlet EWS: ${samletEWS}):`);
      for (const patient of patients) {
        console.log(`  - ${patient.navn} (CPR: ${patient.cprNummer}, Plejetid: ${patient.plejetid}, EWS: ${patient.ews})`);
      }
    }
    console.log(tildeling)
  
    return tildeling;
  
    // Helper: Tjek om en sygeplejerske kan få en bestemt patient
    function kanTildele(patient, s) {
      if (s.antal >= 3) return false;
      if (s.ewsSum + patient.ews > 15) return false;
      if (patient.plejetid === "maksimal hjælp" && s.harMaksimalHjælp) return false;
      return true;
    }
  }


  function visTildelingPåSide(tildeling, behandlingshistorik, sygeplejersker) {
    const container = document.getElementById("output");
    container.innerHTML = ""; // Clear previous output
  
    for (const [nurseId, patients] of Object.entries(tildeling)) {
      // Find sygeplejerskens navn
      const nurse = sygeplejersker.find(s => s.sygeplejerskeID == nurseId);
      const nurseNavn = nurse ? nurse.navn : `Ukendt navn`;
  
      const nurseDiv = document.createElement("div");
      nurseDiv.innerHTML = `<h3>Sygeplejerske ${nurseNavn} (ID: ${nurseId}) – Samlet EWS: ${patients.reduce((sum, p) => sum + p.ews, 0)}:</h3>`;
      
      const ul = document.createElement("ul");
  
      for (const patient of patients) {
        const li = document.createElement("li");
        li.textContent = `${patient.navn} (CPR: ${patient.cprNummer}, Plejetid: ${patient.plejetid}, EWS: ${patient.ews})`;
  
        // Tjek om der er historik
        const harHistorik = behandlingshistorik.some(entry =>
          entry.cprNummer === patient.cprNummer && entry.sygeplejerskeID == nurseId
        );
  
        // Tilføj farve
        li.style.backgroundColor = harHistorik ? "lightgreen" : "lightcoral";
        li.style.padding = "5px";
        li.style.margin = "3px 0";
  
        ul.appendChild(li);
      }
  
      nurseDiv.appendChild(ul);
      container.appendChild(nurseDiv);
    }
  }


// Kald funktionen efter tildelingen
const mergedPatienter = mergePatientData(patienter, patienttilstande);
const tildeling = fordelPatienterAvanceret(mergedPatienter, sygeplejersker, behandlingshistorik);
function startVisning() {
  // Vis loading-tekst
  document.getElementById("loading").style.display = "block";
  document.getElementById("output").innerHTML = "";

  // 2 sekunders forsinkelse før kaldet
  setTimeout(() => {
    visTildelingPåSide(tildeling, behandlingshistorik, sygeplejersker);
    
    // Skjul loading-tekst igen
    document.getElementById("loading").style.display = "none";
  }, 2000);
}
startVisning(); 