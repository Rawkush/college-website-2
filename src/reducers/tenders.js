const tendersDefaultState = [
  {
    title:
      'Providing the service of installation of 05 projectors with items for classrooms at CBPGEC',
    file: 'http://gecdelhi.ac.in/pdf_files/tender/projector.pdf',
  },
  {
    title:
      'Procurement of Lab Equipments of Civil Engineering and Environmental Engineering Department',
    file: 'http://gecdelhi.ac.in/pdf_files/tender/civil.pdf',
  },
  {
    title: 'Tender for Providing 10 Mbps Wireless Internet Leased Line',
    file: 'http://gecdelhi.ac.in/pdf_files/tender/tenderdocument.pdf',
  },
];

export default (state = tendersDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
