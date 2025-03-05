export class PetList {
  // List of pets with their names and pet type IDs
  static petTypeList = [
    { name: "Shiba Inu", petTypeId: 2 },
    { name: "COQ INU", petTypeId: 12 },
    { name: "Dogecoin", petTypeId: 1 },
    { name: "dogwifhat", petTypeId: 15 },
    { name: "Bonk", petTypeId: 9 },
    { name: "Mog", petTypeId: 11 },
    { name: "Brett", petTypeId: 13 },
    { name: "Pepe", petTypeId: 14 },
    { name: "Floki", petTypeId: 5 },
    { name: "BOOK OF MEME", petTypeId: 8 },
    { name: "Slerf", petTypeId: 7 },
    { name: "cat in a dogs world", petTypeId: 3 },
    { name: "Myro", petTypeId: 10 },
    { name: "Smog", petTypeId: 6 },
    { name: "Wen", petTypeId: 4 },
  ];

  // List of pet companions categorized by type with data array referencing pet type IDs
  static petCompanion = [
    { type: "A", data: [1, 2, 12] },
    { type: "B", data: [9, 11, 15] },
    { type: "C", data: [5, 13, 14] },
    { type: "D", data: [3, 7, 8] },
    { type: "E", data: [4, 6, 10] },
  ];
}
