const CREATE_BANDS = 'CREATE_BANDS';
let id = 6;

const payload1 = {
    name: 'Eminem',
    origin: 'Saint Joseph, Missouri, United States',
    functionDate: '26-10-2022',
    description:
       'Eminem, byname of Marshall Bruce Mathers III, (born October 17, 1972, St. Joseph, Missouri, U.S.), American rapper, record producer, and actor who was known as one of the most-controversial and best-selling artists of the early 21st century. Mathers had a turbulent childhood, marked by poverty and allegations of abuse.',
    members: ['Marshall Bruce Mathers III'],
    image: 'https://sites.google.com/site/tiposdemusicaes/_/rsrc/1470786772862/emi/rap_god_by_fiddy90d6t2g3f.jpg?height=225&width=400',
    tickets: 12500,
 };
 const payload2 = {
    name: 'Soda Stereo',
    origin: 'Buenos Aires, Argentina',
    functionDate: '12-09-2023',
    description: `Soda Stereo is an Argentinian rock band formed in Buenos Aires in 1982 by Gustavo Cerati (lead vocals, guitar), Héctor "Zeta" Bosio (bass) and Carlos Alberto Ficicchia "Charly Alberti" (drums).`,
    members: ['Zeta Bosio', 'Charly Alberti'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/CeratiAlbertiBosio.jpg/500px-CeratiAlbertiBosio.jpg',
    tickets: 5500,
 };




export const createBands = (bands) => {
    
    return { type: CREATE_BANDS, payload: {id: id++, ...bands} }
};


console.log(createBands(payload1));


