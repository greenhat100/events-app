interface HistoricalEvent{
    id: number;
    title: string;
    description: string;
    position: [number, number];
    category: string;
    year: number;
}

 export const eventsData: HistoricalEvent[] = [
    {
        id: 1,
        title: 'Battle of the Somme',
        description: 'One of the largest battles of World War I fought by the British and French against the German Empire.',
        position: [50.0058, 2.6680], // Somme, France
        year: 1916, // Add the year for World War I events
        category: 'War', // Change the category to 'War'
      },
      {
        id: 2,
        title: 'Battle of Gallipoli',
        description: 'A campaign during World War I in which the Allies sought to control the sea route from Europe to Russia.',
        position: [40.3221, 26.4142], // Gallipoli, Turkey
        year: 1915, // Add the year for World War I events
        category: 'War', // Change the category to 'War'
      },
      // Add more events...
    
      // World War II
      {
        id: 3,
        title: 'D-Day (Normandy Invasion)',
        description: 'Allied forces landed on the beaches of Normandy in a critical turning point during World War II.',
        position: [49.4144, -0.8322], // Normandy, France
        year: 1944, // Add the year for World War II events
        category: 'War', // Change the category to 'War'
      },
      {
        id: 4,
        title: 'Battle of Kursk',
        description: 'One of the largest tank battles in history, fought between the Soviet Union and Nazi Germany during World War II.',
        position: [51.7150, 36.1939], // Kursk, Russia
        year: 1943, // Add the year for World War II events
        category: 'War', // Change the category to 'War'
      },
      // Add more events...
    
      // American Civil War
      {
        id: 5,
        title: 'Battle of Gettysburg',
        description: 'A pivotal battle fought during the American Civil War in 1863.',
        position: [39.8138, -77.2373], // Gettysburg, USA
        year: 1863, // Add the year for American Civil War events
        category: 'War', // Change the category to 'War'
      },
      // Add more events...
    
      // Vietnam War
      {
        id: 6,
        title: 'Tet Offensive',
        description: 'A series of surprise attacks by the Viet Cong and North Vietnamese forces during the Vietnam War.',
        position: [10.8231, 106.6297], // Ho Chi Minh City (formerly Saigon), Vietnam
        year: 1968, // Add the year for Vietnam War events
        category: 'War', // Change the category to 'War'
      },
      // Add more events...
    
      // Iraq War
      {
        id: 7,
        title: 'Battle of Fallujah',
        description: 'One of the major battles during the Iraq War in 2004.',
        position: [33.3538, 43.7864], // Fallujah, Iraq
        year: 2004, // Add the year for Iraq War events
        category: 'War', // Change the category to 'War'
      },
      // Add more events...
    
      // Korean War
      {
        id: 8,
        title: 'Battle of Inchon',
        description: 'A decisive amphibious invasion during the Korean War led by United Nations forces.',
        position: [37.9469, 126.6760], // Inchon, South Korea
        year: 1950, // Add the year for Korean War events
        category: 'War', // Change the category to 'War'
      },
      // Add more events...
    
      // Ancient Battles
      {
        id: 9,
        title: 'Battle of Gaugamela',
        description: 'A key battle between Alexander the Great and Persian King Darius III in 331 BCE.',
        position: [36.5372, 43.0870], // Near Mosul, Iraq
        year: 331, // Add the year for Ancient Battles events
        category: 'War', // Change the category to 'War'
      },
      // A
  {
    id: 10,
    title: 'Battle of Cannae',
    description: 'A famous battle during the Second Punic War between Rome and Carthage in 216 BCE.',
    position: [41.2679, 16.2931], // Canosa di Puglia, Italy
    year: 216, // Add the year for Ancient Battles events
    category: 'War', // Change the category to 'War'
  },
  // Add more ancient battles

  // World War II in North Africa
  {
    id: 11,
    title: 'Battle of El Alamein',
    description: 'A significant battle between the British Eighth Army and the Axis forces in North Africa during World War II.',
    position: [30.8170, 28.9514], // El Alamein, Egypt
    year: 1942, // Add the year for World War II in North Africa events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 12,
    title: 'Operation Torch',
    description: 'The Allied invasion of North Africa, marking the beginning of the end for Axis control in the region.',
    position: [35.7033, -0.9398], // Algiers, Algeria
    year: 1942, // Add the year for World War II in North Africa events
    category: 'War', // Change the category to 'War'
  },
  // Add more North Africa battles

  // World War II in Sicily
  {
    id: 13,
    title: 'Operation Husky',
    description: 'The Allied invasion of Sicily, a key step toward the liberation of Italy.',
    position: [37.5990, 14.0154], // Sicily, Italy
    year: 1943, // Add the year for World War II in Sicily events
    category: 'War', // Change the category to 'War'
  },
  // Add more Sicily battles

  // Submarine Battles in the North Atlantic
  {
    id: 14,
    title: 'Battle of the Atlantic',
    description: 'A prolonged naval conflict between German U-boats and Allied convoys in the North Atlantic.',
    position: [53.4906, -30.0586], // North Atlantic
    year: 1939, // Add the year for Submarine Battles in the North Atlantic events
    category: 'War', // Change the category to 'War'
  },
  // Add more submarine battles

  // Sea Battles in the Pacific
  {
    id: 15,
    title: 'Battle of Midway',
    description: 'A decisive naval battle between the United States and Japan in the Pacific Ocean during World War II.',
    position: [28.2140, -177.3777], // Midway Atoll
    year: 1942, // Add the year for Sea Battles in the Pacific events
    category: 'War', // Change the category to 'War'
  },
  // Add more Pacific sea battles

  // World War II in Russia
  {
    id: 16,
    title: 'Battle of Stalingrad',
    description: 'A major battle on the Eastern Front between the Soviet Union and Nazi Germany during World War II.',
    position: [48.7071, 44.5170], // Stalingrad, Russia (now Volgograd)
    year: 1942, // Add the year for World War II in Russia events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 17,
    title: 'Siege of Leningrad',
    description: 'A prolonged military blockade conducted by the German Army against the city of Leningrad (now Saint Petersburg).',
    position: [59.9343, 30.3351], // Saint Petersburg, Russia
    year: 1941, // Add the year for World War II in Russia events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 18,
    title: 'Battle of Kursk',
    description: 'One of the largest tank battles in history, fought between the Soviet Union and Nazi Germany during World War II.',
    position: [51.7311, 36.1934], // Kursk, Russia
    year: 1943, // Add the year for World War II in Russia events
    category: 'War', // Change the category to 'War'
  },

  // World War II - Pacific Theater
  {
    id: 19,
    title: 'Battle of Guadalcanal',
    description: 'A major campaign in the Pacific Theater of World War II, fought between the Allies and the Empire of Japan.',
    position: [-9.2020, 160.1562], // Guadalcanal, Solomon Islands
    year: 1942, // Add the year for World War II - Pacific Theater events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 20,
    title: 'Battle of Midway',
    description: 'A decisive naval battle in the Pacific Theater of World War II, fought between the United States and the Empire of Japan.',
    position: [28.2206, -177.3724], // Midway Atoll
    year: 1942, // Add the year for World War II - Pacific Theater events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 21,
    title: 'Attack on Pearl Harbor',
    description: 'A surprise military strike by the Imperial Japanese Navy against the United States naval base at Pearl Harbor, Hawaii.',
    position: [21.3445, -157.9746], // Pearl Harbor, Hawaii
    year: 1941, // Add the year for World War II - Pacific Theater events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 22,
    title: 'Battle of Leyte Gulf',
    description: 'Considered one of the largest naval battles in history, fought in the Pacific during World War II.',
    position: [10.9456, 124.0564], // Leyte Gulf, Philippines
    year: 1944, // Add the year for World War II - Pacific Theater events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 23,
    title: 'Battle of Iwo Jima',
    description: 'A major battle between the United States Marine Corps and the Imperial Japanese Army, part of the island-hopping campaign.',
    position: [24.7556, 141.2984], // Iwo Jima, Japan
    year: 1945, // Add the year for World War II - Pacific Theater events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 24,
    title: 'Battle of Okinawa',
    description: 'The largest amphibious assault in the Pacific Theater during World War II, fought between the U.S. and Japan.',
    position: [26.4312, 127.9522], // Okinawa, Japan
    year: 1945, // Add the year for World War II - Pacific Theater events
    category: 'War', // Change the category to 'War'
  },

  // American Civil War
  {
    id: 25,
    title: 'Battle of Gettysburg',
    description: 'A significant battle fought during the American Civil War, often considered a turning point in the conflict.',
    position: [39.8142, -77.2305], // Gettysburg, Pennsylvania, USA
    year: 1863, // Add the year for American Civil War events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 26,
    title: 'Battle of Antietam',
    description: 'The bloodiest single-day battle in American history, occurring during the American Civil War.',
    position: [39.4745, -77.7396], // Sharpsburg, Maryland, USA
    year: 1862, // Add the year for American Civil War events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 27,
    title: 'Battle of Leningrad',
    description: 'A prolonged siege of the city of Leningrad (now Saint Petersburg) by German and Finnish forces during World War II.',
    position: [59.9343, 30.3351], // Leningrad (Saint Petersburg), Russia
    year: 1941, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 28,
    title: 'Battle of Kiev',
    description: 'A strategic battle between the Soviet Union and Nazi Germany during the early stages of Operation Barbarossa.',
    position: [50.4501, 30.5234], // Kiev, Ukraine
    year: 1941, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 29,
    title: 'Siege of Sevastopol',
    description: 'A prolonged military blockade by German and Romanian forces against the Soviet Black Sea Fleet in the city of Sevastopol.',
    position: [44.6167, 33.5254], // Sevastopol, Crimea
    year: 1942, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 30,
    title: 'Battle of Rzhev',
    description: 'A series of battles on the Eastern Front near the town of Rzhev during World War II.',
    position: [56.2621, 34.3276], // Rzhev, Russia
    year: 1942, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 31,
    title: 'Battle of Tula',
    description: 'An important defense of the city of Tula against the German Army during the Russian-German War.',
    position: [54.1930, 37.6176], // Tula, Russia
    year: 1941, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 32,
    title: 'Operation Bagration',
    description: 'A major Soviet offensive on the Eastern Front that led to the liberation of Belarus from German occupation.',
    position: [53.7098, 27.9534], // Minsk, Belarus (central location for Operation Bagration)
    year: 1944, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 33,
    title: 'Battle of France',
    description: 'The German invasion of France and the Low Countries, leading to the rapid defeat of France and the evacuation of British forces from Dunkirk.',
    position: [48.8566, 2.3522], // Paris, France (central location for Battle of France)
    year: 1940, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 34,
    title: 'Battle of Dunkirk',
    description: 'The evacuation of Allied soldiers from the beaches and harbor of Dunkirk, France, during Operation Dynamo.',
    position: [51.0577, 2.3522], // Dunkirk, France
    year: 1940, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 35,
    title: 'Battle of Britain',
    description: 'The air campaign waged by the German Air Force (Luftwaffe) against the United Kingdom during the summer and autumn of 1940.',
    position: [51.5099, -0.1180], // London, United Kingdom (central location for Battle of Britain)
    year: 1940, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 36,
    title: 'Operation Barbarossa',
    description: 'The code name for the German invasion of the Soviet Union on the Eastern Front, but significant for Hitler\'s overall strategy.',
    position: [55.7558, 37.6176], // Moscow, Russia (central location for Operation Barbarossa)
    year: 1941, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 37,
    title: 'Normandy Invasion (D-Day)',
    description: 'The Allied invasion of Normandy on June 6, 1944, marking the beginning of the end of Nazi occupation in Western Europe.',
    position: [49.4144, -0.8322], // Normandy, France (central location for D-Day)
    year: 1944, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  
  // Vietnam War
  {
    id: 38,
    title: 'Battle of Huế',
    description: 'One of the longest and bloodiest battles of the Tet Offensive, fought in and around the city of Huế, South Vietnam.',
    position: [16.4637, 107.5909], // Huế, Vietnam
    year: 1968, // Add the year for Vietnam War events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 39,
    title: 'Battle of Khe Sanh',
    description: 'A protracted siege by North Vietnamese forces against a United States Marine Corps base in Khe Sanh, South Vietnam.',
    position: [16.6167, 106.7333], // Khe Sanh, Vietnam
    year: 1968, // Add the year for Vietnam War events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 40,
    title: 'Tet Offensive',
    description: 'A series of surprise attacks by the Viet Cong and North Vietnamese forces during the lunar new year, turning point in the Vietnam War.',
    position: [14.0583, 108.2772], // Various locations in South Vietnam
    year: 1968, // Add the year for Vietnam War events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 41,
    title: 'Battle of Ia Drang (LZ X-Ray)',
    description: 'The first major battle between the United States Army and the North Vietnamese Army, depicted in the book "We Were Soldiers Once... And Young".',
    position: [13.9831, 108.0005], // Ia Drang Valley, Vietnam
    year: 1965, // Add the year for Vietnam War events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 42,
    title: 'Gulf of Tonkin Incident',
    description: 'Two separate confrontations involving North Vietnamese torpedo boats and U.S. warships, leading to increased U.S. involvement in Vietnam.',
    position: [20.0776, 107.1373], // Gulf of Tonkin
    year: 1964, // Add the year for Vietnam War events
    category: 'War', // Change the category to 'War'
  },
  
  // World War II
  {
    id: 43,
    title: 'Attack on Pearl Harbor',
    description: 'A surprise military strike by the Imperial Japanese Navy against the United States naval base at Pearl Harbor, Hawaii.',
    position: [21.3445, -157.9749], // Pearl Harbor, Hawaii, USA
    year: 1941, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 44,
    title: 'Battle of Midway',
    description: 'A decisive naval battle fought between the United States and Japan, marking a turning point in the Pacific Theater of World War II.',
    position: [28.2000, -177.3750], // Midway Atoll
    year: 1942, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 45,
    title: 'Battle of Saipan',
    description: 'A battle in the Pacific War with the United States invading the island of Saipan, leading to a significant Allied victory.',
    position: [15.1833, 145.7500], // Saipan, Northern Mariana Islands
    year: 1944, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 46,
    title: 'Battle of the Coral Sea',
    description: 'A naval battle between the Imperial Japanese Navy and Allied naval and air forces, the first action in which aircraft carriers engaged each other.',
    position: [-15.0000, 155.0000], // Coral Sea
    year: 1942, // Add the year for World War II events
    category: 'War', // Change the category to 'War'
  },
  {
    id: 47,
    title: 'Battle of the Bulge',
    description: 'A major German offensive campaign on the Western Front during World War II.',
    position: [50.2496, 5.7910], // Ardennes, Belgium
    category: 'War',
    year: 1944,
  },

  // Battles of Alexander the Great
  {
    id: 48,
    title: 'Battle of Issus',
    description: 'A decisive battle between Alexander the Great and Darius III of Persia.',
    position: [36.8940, 35.8863], // Near Iskenderun, Turkey
    category: 'War',
    year: 333,
  },
  {
    id: 49,
    title: 'Siege of Tyre',
    description: 'Alexanders successful siege of the fortified city of Tyre during his campaign in the eastern Mediterranean.',
    position: [33.2670, 35.2057], // Tyre, Lebanon
    category: 'War',
    year: 332,
  },
  // Add more battles of Alexander the Great

  // Ancient Egyptian Wars
  {
    id: 50,
    title: 'Battle of Megiddo',
    description: 'One of the earliest recorded battles in history, fought near the ancient city of Megiddo.',
    position: [32.5831, 35.1794], // Megiddo, Israel
    category: 'War',
    year: 1457,
  },
  {
    id: 51,
    title: 'Battle of Kadesh',
    description: 'A famous battle between the forces of Ramesses II of Egypt and Muwatalli II of the Hittite Empire.',
    position: [32.6505, 36.0356], // Kadesh, Syria
    category: 'War',
    year: 1274,
  },
  {
    id: 52,
    title: 'Attack on Pearl Harbor',
    description: 'A surprise military strike by the Imperial Japanese Navy Air Service against the United States naval base at Pearl Harbor, Hawaii Territory.',
    position: [21.3445, -157.9748], // Pearl Harbor, Hawaii, USA
    category: 'War',
    year: 1941,
  },
  {
  id: 53,
    title: 'The Magna Carta',
    description: 'A charter signed by King John of England, establishing the principle that everyone, including the king, is subject to the law.',
    position: [51.9580, -0.9784], // Runnymede, England
    category: 'Politics',
    year: 1215,
  },
  {
    id: 54,
    title: 'The Renaissance',
    description: 'A period in European history marked by a revival of interest in the arts, culture, and learning.',
    position: [43.7732, 11.2550], // Florence, Italy
    category: 'Politics',
    year: 1600,
  },
  {
    id: 55,
    title: 'The Opium Wars',
    description: 'Two wars fought between China and Western powers over trade and diplomatic relations.',
    position: [30.6675, 104.0669], // Chengdu, China
    category: 'Politics',
    year: 1840,
  },
  {
    id: 56,
    title: 'The League of Nations',
    description: 'The first international organization established after World War I to promote peace and cooperation among nations.',
    position: [46.8182, 8.2275], // Switzerland (neutral location)
    category: 'Politics',
    year: 1920,
  },
  {
    id: 57,
    title: 'The Cuban Missile Crisis',
    description: 'A 13-day confrontation between the United States and the Soviet Union over Soviet ballistic missiles deployed in Cuba.',
    position: [23.1136, -82.3666], // Havana, Cuba
    category: 'Politics',
    year: 1962,
  },
  {
    id: 58,
    title: 'The Arab Spring',
    description: 'A series of anti-government protests, uprisings, and demonstrations across the Arab world, demanding political reform.',
    position: [30.0444, 31.2357], // Cairo, Egypt
    category: 'Politics',
    year: 2011,
  },
  {
    id: 59,
    title: 'Assassination of Archduke Franz Ferdinand',
    description: 'The assassination that triggered the start of World War I.',
    position: [43.8563, 18.4131], // Sarajevo, Bosnia
    category: 'Politics',
    year: 1914,
  },
  {
    id: 60,
    title: 'October Revolution',
    description: 'The Bolsheviks led a coup and seized power in Russia, leading to the establishment of the Soviet Union.',
    position: [55.7558, 37.6176], // Moscow, Russia
    category: 'Politics',
    year: 1917,
  },
  {
    id: 61,
    title: 'The Watergate Scandal',
    description: 'A political scandal in the United States that led to the resignation of President Richard Nixon.',
    position: [38.8977, -77.0370], // Washington, D.C., USA
    category: 'Politics',
    year: 1972,
  },
  {
    id: 62,
    title: 'Assassination of John F. Kennedy',
    description: 'The 35th President of the United States, John F. Kennedy, was assassinated in Dallas, Texas.',
    position: [32.7767, -96.7970], // Dallas, USA
    category: 'Politics',
    year: 1963,
},
{
    id: 63,
    title: 'Assassination of Robert F. Kennedy',
    description: 'Senator Robert F. Kennedy, brother of John F. Kennedy, was assassinated in Los Angeles, California.',
    position: [34.0522, -118.2437], // Los Angeles, USA
    category: 'Politics',
    year: 1968,
},
{
    id: 64,
    title: 'Assassination of Malcolm X',
    description: 'Civil rights leader Malcolm X was assassinated during a speech in New York City.',
    position: [40.7128, -74.0060], // New York City, USA
    category: 'Politics',
    year: 1965,
},
{
  id: 65,
  title: 'Assassination of Martin Luther King Jr.',
  description: 'Civil rights leader Martin Luther King Jr. was assassinated in Memphis, Tennessee.',
  position: [35.1495, -90.0490], // Memphis, USA
  category: 'Politics',
  year: 1968,
},
{
  id: 66,
  title: 'Miracle on Ice',
  description: 'The United States ice hockey team, composed of amateur and college players, defeated the heavily favored Soviet Union team at the Winter Olympics.',
  position: [40.7128, -74.0060], // Lake Placid, USA
  category: 'Sports',
  year: 1980,
},
{
  id: 67,
  title: 'Jesse Owens at the 1936 Berlin Olympics',
  description: 'African American athlete Jesse Owens won four gold medals in track and field events, challenging Hitlers notion of Aryan supremacy.',
  position: [52.5200, 13.4050], // Berlin, Germany
  category: 'Sports',
  year: 1936,
},
{
  id: 68,
  title: 'The Thrilla in Manila',
  description: 'The historic boxing match between Muhammad Ali and Joe Frazier in Manila, Philippines.',
  position: [14.5995, 120.9842], // Manila, Philippines
  category: 'Sports',
  year: 1975,
},
{
  id: 69,
  title: 'First Modern Olympic Games',
  description: 'The inaugural modern Olympic Games were held in Athens, Greece, reviving the ancient tradition.',
  position: [37.9838, 23.7275], // Athens, Greece
  category: 'Sports',
  year: 1896,
},
{
  id: 70,
  title: 'The Rumble in the Jungle',
  description: 'Muhammad Ali defeated George Foreman in a historic boxing match in Kinshasa, Zaire (now Democratic Republic of the Congo).',
  position: [-4.4419, 15.2663], // Kinshasa, DRC
  category: 'Sports',
  year: 1974,
},
{
  id: 71,
  title: 'The Hand of God',
  description: 'Diego Maradonas controversial goal during the 1986 FIFA World Cup quarter-final match between Argentina and England.',
  position: [-34.6099, -58.3656], // Buenos Aires, Argentina
  category: 'Sports',
  year: 1986,
},
{
  id: 72,
  title: 'Babe Ruths Called Shot',
  description: 'In the 1932 World Series, Babe Ruth supposedly pointed to the center-field bleachers and then hit a home run.',
  position: [41.8299, -87.6338], // Chicago, USA
  category: 'Sports',
  year: 1932,
},
{
  id: 73,
  title: 'The Shot - Michael Jordan',
  description: 'Michael Jordans game-winning shot during the 1989 NBA Playoffs against the Cleveland Cavaliers.',
  position: [41.4965, -81.6882], // Cleveland, USA
  category: 'Sports',
  year: 1989,
},
{
  id: 74,
  title: 'Tiger Woods Wins the 1997 Masters',
  description: 'Tiger Woods became the youngest player to win the Masters Tournament, dominating the field.',
  position: [33.5024, -82.0217], // Augusta, USA
  category: 'Sports',
  year: 1997,
},
{
  id: 75,
  title: 'Ayrton Sennas Imola Triumph',
  description: 'Ayrton Sennas legendary victory at the 1992 San Marino Grand Prix in Formula 1.',
  position: [44.3439, 11.7167], // Imola, Italy
  category: 'Sports',
  year: 1992,
},
{
  id: 76,
  title: 'The Shot Heard Round the World',
  description: 'Bobby Thomsons walk-off home run that won the National League pennant for the New York Giants in 1951.',
  position: [40.8296, -73.9262], // New York City, USA
  category: 'Sports',
  year: 1951,
},
{
  id: 77,
  title: 'Magic vs. Bird - 1979 NCAA Championship',
  description: 'The iconic showdown between Magic Johnson and Larry Bird in the NCAA Championship game.',
  position: [40.7128, -74.0060], // Philadelphia, USA
  category: 'Sports',
  year: 1979,
},
{
  id: 78,
  title: 'Usain Bolt Breaks World Records',
  description: 'Jamaican sprinter Usain Bolt breaks world records in the 100m and 200m sprints during the 2008 Beijing Olympics.',
  position: [39.9042, 116.4074], // Beijing, China
  category: 'Sports',
  year: 2008,
},
{
  id: 79,
  title: 'The Catch - Joe Montana and Dwight Clark',
  description: 'The iconic play during the 1981 NFC Championship game where Joe Montana threw a touchdown pass to Dwight Clark.',
  position: [37.4030, -121.9690], // San Francisco, USA
  category: 'Sports',
  year: 1981,
},
{
  id: 80,
  title: 'Jackie Robinson Breaks the Baseball Color Barrier',
  description: 'Jackie Robinson becomes the first African American to play in Major League Baseball, breaking the color barrier.',
  position: [40.8296, -73.9262], // New York City, USA
  category: 'Sports',
  year: 1947,
},
{
  id: 81,
  title: 'Nadia Comănecis Perfect 10',
  description: 'At the 1976 Montreal Olympics, gymnast Nadia Comăneci scored a perfect 10 on the uneven bars, the first in Olympic history.',
  position: [45.5088, -73.5542], // Montreal, Canada
  category: 'Sports',
  year: 1976,
},
{
  id: 82,
  title: 'The "Fight of the Century" - Ali vs. Frazier I',
  description: 'The first bout between Muhammad Ali and Joe Frazier in 1971, one of the most anticipated boxing matches in history.',
  position: [40.7492, -73.9935], // New York City, USA
  category: 'Sports',
  year: 1971,
},
{
  id: 83,
  title: 'Bjørn Borg vs. John McEnroe - Wimbledon 1980',
  description: 'The historic Wimbledon final between Bjørn Borg and John McEnroe, often regarded as one of the greatest tennis matches.',
  position: [51.4340, -0.2147], // Wimbledon, England
  category: 'Sports',
  year: 1980,
},
{
  id: 84,
  title: 'Jesse Owens at the 1936 Berlin Olympics',
  description: 'African American athlete Jesse Owens won four gold medals in track and field events, challenging Hitler\'s notion of Aryan supremacy.',
  position: [52.5200, 13.4050], // Berlin, Germany
  category: 'Sports',
  year: 1936,
},
{
  id: 85,
  title: 'The Perfect Game - Don Larsen',
  description: 'In the 1956 World Series, pitcher Don Larsen threw a perfect game for the New York Yankees against the Brooklyn Dodgers.',
  position: [40.8296, -73.9262], // New York City, USA
  category: 'Sports',
  year: 1956,
},
{
  id: 86,
  title: 'Discovery of Penicillin',
  description: 'Alexander Flemings discovery of the antibiotic properties of penicillin, revolutionizing medicine.',
  position: [51.5202, -0.1276], // London, England
  category: 'Science',
  year: 1928,
},
{
  id: 87,
  title: 'Apollo 11 Moon Landing',
  description: 'The first manned mission to land on the Moon, with astronauts Neil Armstrong and Buzz Aldrin taking historic steps on the lunar surface.',
  position: [0.6741, -23.4727], // Tranquility Base on the Moon
  category: 'Science',
  year: 1969,
},
{
  id: 88,
  title: 'Structure of DNA Discovered',
  description: 'James Watson and Francis Cricks discovery of the double helix structure of DNA, a fundamental breakthrough in genetics.',
  position: [52.2001, 0.1227], // Cambridge, England
  category: 'Science',
  year: 1953,
},
{
  id: 89,
  title: 'Hubble Space Telescope Launch',
  description: 'The launch of the Hubble Space Telescope, providing unprecedented views of the cosmos and contributing to various astronomical discoveries.',
  position: [28.5623, -80.5774], // Cape Canaveral, USA
  category: 'Science',
  year: 1990,
},
{
  id: 90,
  title: 'CRISPR-Cas9 Gene Editing Technology',
  description: 'The development of the CRISPR-Cas9 gene-editing technology, revolutionizing genetic engineering and medical research.',
  position: [37.7749, -122.4194], // San Francisco, USA
  category: 'Science',
  year: 2012,
},
{
  id: 91,
  title: 'Discovery of the Neanderthal Genome',
  description: 'The sequencing of the Neanderthal genome, providing insights into human evolution and genetic history.',
  position: [43.2965, 6.0802], // Vindija Cave, Croatia
  category: 'Science',
  year: 2010,
},
{
  id: 92,
  title: 'Flemings Right-Hand Rule',
  description: 'John Ambrose Flemings development of the right-hand rule, a principle widely used in electromagnetism and electronics.',
  position: [51.5202, -0.1276], // London, England
  category: 'Science',
  year: 1891,
},
{
  id: 93,
  title: 'Cloning of Dolly the Sheep',
  description: 'The successful cloning of a mammal, Dolly the Sheep, using somatic cell nuclear transfer.',
  position: [56.4907, -4.2026], // Roslin, Scotland
  category: 'Science',
  year: 1996,
},
{
  id: 94,
  title: 'Discovery of the Higgs Boson',
  description: 'The discovery of the Higgs boson particle at CERN, confirming the existence of the Higgs field.',
  position: [46.2335, 6.0516], // CERN, Switzerland/France
  category: 'Science',
  year: 2012,
},
{
  id: 95,
  title: 'Mapping the Human Genome',
  description: 'The completion of the Human Genome Project, providing a comprehensive map of human DNA.',
  position: [38.9072, -77.0370], // Washington, D.C., USA
  category: 'Science',
  year: 2003,
},
{
  id: 96,
  title: 'First Human Heart Transplant',
  description: 'Dr. Christiaan Barnard performs the world\'s first successful human-to-human heart transplant in Cape Town, South Africa.',
  position: [-33.9249, 18.4241], // Cape Town, South Africa
  category: 'Science',
  year: 1967,
},
{
  id: 97,
  title: 'Discovery of X-rays',
  description: 'Wilhelm Röntgen discovers X-rays, revolutionizing medical imaging and diagnostics.',
  position: [51.3397, 12.3731], // Würzburg, Germany
  category: 'Science',
  year: 1895,
},
{
  id: 98,
  title: 'Voyager 1 and 2 Missions',
  description: 'The Voyager spacecraft provide unprecedented data about the outer planets and continue their journey into interstellar space.',
  position: [33.6894, -118.0315], // NASA Jet Propulsion Laboratory, USA
  category: 'Science',
  year: 1977,
},
{
  id: 99,
  title: 'Discovery of the Electron',
  description: 'J.J. Thomson discovers the electron, laying the foundation for modern atomic theory.',
  position: [52.2033, 0.1244], // Cambridge, England
  category: 'Science',
  year: 1897,
},
{
  id: 100,
  title: 'CRISPR Babies Controversy',
  description: 'Chinese scientist He Jiankui claims to have created the world\'s first gene-edited babies using CRISPR technology, sparking ethical debates.',
  position: [23.1288, 113.2590], // Shenzhen, China
  category: 'Science',
  year: 2018,
},
{
  id: 101,
  title: 'Identification of the AIDS Virus',
  description: 'The identification of the human immunodeficiency virus (HIV), the cause of acquired immunodeficiency syndrome (AIDS).',
  position: [48.8566, 2.3522], // Paris, France
  category: 'Science',
  year: 1983,
},
{
  id: 102,
  title: 'Development of the Internet',
  description: 'The development of ARPANET, the precursor to the modern internet, connecting computers for the first time.',
  position: [37.7749, -122.4194], // San Francisco, USA
  category: 'Science',
  year: 1969,
},
{
  id: 103,
  title: 'Cassini-Huygens Mission to Saturn',
  description: 'The Cassini spacecraft explores Saturn and its moons, providing valuable data about the ringed planet.',
  position: [35.7289, -65.4327], // Saturn (not on Earth)
  category: 'Science',
  year: 1997,
},
{
  id: 104,
  title: 'Discovery of Dark Matter',
  description: 'Observational evidence for the existence of dark matter, a mysterious substance that makes up a significant portion of the universe.',
  position: [37.7749, -122.4194], // San Francisco, USA
  category: 'Science',
  year: 1933,
},
{
  id: 105,
  title: 'Identification of the Ebola Virus',
  description: 'The identification of the Ebola virus during an outbreak in Zaire (now Democratic Republic of the Congo).',
  position: [-4.0383, 21.7587], // Yambuku, DRC
  category: 'Science',
  year: 1976,
},
{
  id: 106,
  title: 'Discovery of the Cosmic Microwave Background Radiation',
  description: 'Arno Penzias and Robert Wilson discover the cosmic microwave background radiation, supporting the Big Bang theory.',
  position: [40.8202, -74.3655], // Holmdel, USA
  category: 'Science',
  year: 1965,
},
{
  id: 107,
  title: 'Development of the CRISPR-Cas12 Editing System',
  description: 'The development of the CRISPR-Cas12 gene-editing system, offering new possibilities for precision genetic modifications.',
  position: [37.7749, -122.4194], // San Francisco, USA
  category: 'Science',
  year: 2017,
},
{
  id: 108,
  title: 'First Successful In Vitro Fertilization (IVF)',
  description: 'The birth of Louise Brown, the first baby conceived through in vitro fertilization, marking a breakthrough in fertility treatment.',
  position: [52.2043, 0.1149], // Cambridge, England
  category: 'Science',
  year: 1978,
},
{
  id: 109,
  title: 'Discovery of the Neutrino',
  description: 'Wolfgang Pauli postulates the existence of the neutrino, a nearly massless subatomic particle.',
  position: [47.3769, 8.5417], // Zürich, Switzerland
  category: 'Science',
  year: 1930,
},
{
  id: 110,
  title: 'Mars Rover Missions',
  description: 'Various Mars rovers, including Opportunity and Curiosity, explore the Martian surface, providing valuable data about the Red Planet.',
  position: [-1.9463, 354.4734], // Mars (not on Earth)
  category: 'Science',
  year: 2004, // Opportunity Rover landing
},
{
  id: 111,
  title: 'Construction of Solomon\'s Temple',
  description: 'The construction of Solomon\'s Temple in Jerusalem, a significant religious site in Judaism.',
  position: [31.7784, 35.2290], // Jerusalem, Israel
  category: 'Religion',
  year: -957,
},
{
  id: 112,
  title: 'The Exodus',
  description: 'The biblical account of the Israelites\' escape from slavery in Egypt, led by Moses.',
  position: [30.5852, 32.2656], // Sinai Peninsula, Egypt
  category: 'Religion',
  year: -1446,
},
{
  id: 113,
  title: 'Sermon on the Mount',
  description: 'Jesus delivers the Sermon on the Mount, presenting key teachings and principles in Christianity.',
  position: [32.8575, 35.5050], // Mount of Beatitudes, Israel
  category: 'Religion',
  year: 30,
},
{
  id: 114,
  title: 'The Crucifixion of Jesus',
  description: 'The crucifixion of Jesus Christ, a central event in Christianity, marking his sacrifice for humanity.',
  position: [31.7784, 35.2290], // Golgotha, Jerusalem, Israel
  category: 'Religion',
  year: 30,
},
{
  id: 115,
  title: 'The Kaaba Construction',
  description: 'The construction of the Kaaba in Mecca, a sacred structure in Islam and the focal point of the Hajj pilgrimage.',
  position: [21.3891, 39.8579], // Mecca, Saudi Arabia
  category: 'Religion',
  year: 2000,
},
{
  id: 116,
  title: 'Buddha\'s Enlightenment',
  description: 'Siddhartha Gautama attains enlightenment under the Bodhi tree, becoming the Buddha and founding Buddhism.',
  position: [24.6950, 84.9865], // Bodh Gaya, India
  category: 'Religion',
  year: 500,
},
{
  id: 117,
  title: 'The Great Schism',
  description: 'The East-West Schism of 1054, leading to the split between the Eastern Orthodox Church and the Roman Catholic Church.',
  position: [41.9028, 12.4964], // Rome, Italy
  category: 'Religion',
  year: 1054,
},
{
  id: 118,
  title: 'The Siege of Jerusalem (1187)',
  description: 'Saladin captures Jerusalem, ending the Christian control of the city during the Crusades.',
  position: [31.7784, 35.2290], // Jerusalem, Israel
  category: 'Religion',
  year: 1187,
},
{
  id: 119,
  title: 'The Protestant Reformation',
  description: 'Martin Luther nails his 95 Theses to the door of the Castle Church in Wittenberg, marking the start of the Protestant Reformation.',
  position: [51.8660, 12.6429], // Wittenberg, Germany
  category: 'Religion',
  year: 1517,
},
{
  id: 120,
  title: 'The First Vatican Council',
  description: 'The First Vatican Council defines the doctrine of papal infallibility within the Catholic Church.',
  position: [41.9028, 12.4964], // Vatican City
  category: 'Religion',
  year: 1869,
},
{
  id: 121,
  title: 'The Báb\'s Declaration',
  description: 'The Báb declares his mission as a precursor to the founding of the Bahá\'í Faith.',
  position: [32.4279, 53.6880], // Shiraz, Iran
  category: 'Religion',
  year: 1844,
},
{
  id: 122,
  title: 'The Great Mosque of Djenné Construction',
  description: 'The construction of the Great Mosque of Djenné, an architectural marvel and a symbol of Islam in Mali.',
  position: [13.9064, -4.5529], // Djenné, Mali
  category: 'Religion',
  year: 1907,
},
{
  id: 123,
  title: 'The Second Vatican Council',
  description: 'The Second Vatican Council brings significant reforms to the Catholic Church, addressing modern challenges.',
  position: [41.9028, 12.4964], // Vatican City
  category: 'Religion',
  year: 1962,
},
{
  id: 124,
  title: 'The First Council of Nicaea',
  description: 'The First Council of Nicaea establishes key Christian doctrines and formulates the Nicene Creed.',
  position: [40.6401, 29.9792], // Nicaea, Turkey
  category: 'Religion',
  year: 325,
},
{
  id: 125,
  title: 'The Wailing Wall (Western Wall) Construction',
  description: 'The construction of the Wailing Wall in Jerusalem, a significant site for Jewish prayers and reflection.',
  position: [31.7784, 35.2290], // Jerusalem, Israel
  category: 'Religion',
  year: 19,
},
{
  id: 126,
  title: 'The Salem Witch Trials',
  description: 'The Salem witch trials in Massachusetts, a series of hearings and prosecutions that led to the execution of several accused witches.',
  position: [42.5204, -70.9003], // Salem, USA
  category: 'Religion',
  year: 1692,
},
{
  id: 127,
  title: 'The Edict of Milan',
  description: 'Emperors Constantine the Great and Licinius issue the Edict of Milan, granting religious tolerance to all religions in the Roman Empire.',
  position: [45.4654, 9.1859], // Milan, Italy
  category: 'Religion',
  year: 313,
},
{
  id: 128,
  title: 'The Pilgrimage of the Báb',
  description: 'The Báb undertakes a pilgrimage to Mecca, a significant event in the history of the Bahá\'í Faith.',
  position: [21.3891, 39.8579], // Mecca, Saudi Arabia
  category: 'Religion',
  year: 1844,
},
{
  id: 129,
  title: 'The First Crusade',
  description: 'The First Crusade is launched, marking the beginning of a series of religious wars between Christians and Muslims.',
  position: [41.9028, 12.4964], // Vatican City
  category: 'Religion',
  year: 1096,
},
{
  id: 130,
  title: 'The Protestant-Catholic Peace in Northern Ireland',
  description: 'The Good Friday Agreement brings an end to decades of conflict between Protestant and Catholic communities in Northern Ireland.',
  position: [54.5973, -5.9301], // Belfast, Northern Ireland
  category: 'Religion',
  year: 1998,
},
{
  id: 131,
  title: 'The Baptism of Jesus',
  description: 'The baptism of Jesus by John the Baptist in the Jordan River, marking the beginning of his public ministry.',
  position: [31.7195, 35.2053], // Jordan River, Israel
  category: 'Religion',
  year: 30,
},
{
  id: 132,
  title: 'The Last Supper',
  description: 'The Last Supper, a significant event in Christianity where Jesus shares a final meal with his disciples.',
  position: [32.6972, 35.2109], // Jerusalem, Israel
  category: 'Religion',
  year: 30,
},
{
  id: 133,
  title: 'The Garden of Gethsemane',
  description: 'Jesus prays in the Garden of Gethsemane, expressing his anguish before his arrest and crucifixion.',
  position: [31.7784, 35.2290], // Jerusalem, Israel
  category: 'Religion',
  year: 30,
},
{
  id: 134,
  title: 'The Resurrection of Jesus',
  description: 'The resurrection of Jesus Christ from the dead, a central event in Christian theology.',
  position: [31.7784, 35.2290], // Jerusalem, Israel
  category: 'Religion',
  year: 30,
},
{
  id: 135,
  title: 'The Ascension of Jesus',
  description: 'The ascension of Jesus into heaven, as described in the New Testament.',
  position: [31.7784, 35.2290], // Jerusalem, Israel
  category: 'Religion',
  year: 30,
},
{
  id: 136,
  title: 'The Transfiguration',
  description: 'The transfiguration of Jesus on a mountain, where he is seen in divine glory by Peter, James, and John.',
  position: [32.8492, 35.6997], // Mount Tabor, Israel
  category: 'Religion',
  year: 30,
},
{
  id: 137,
  title: 'The Sermon at Nazareth',
  description: 'Jesus delivers a sermon in his hometown of Nazareth, outlining his mission and purpose.',
  position: [32.7034, 35.3048], // Nazareth, Israel
  category: 'Religion',
  year: 30,
},
{
  id: 138,
  title: 'The Healing of the Paralytic',
  description: 'Jesus heals a paralyzed man, demonstrating his ability to forgive sins and perform miracles.',
  position: [32.7034, 35.3048], // Capernaum, Israel
  category: 'Religion',
  year: 30,
},
{
  id: 139,
  title: 'The Woman at the Well',
  description: 'Jesus encounters a Samaritan woman at Jacob\'s well, leading to a transformative conversation.',
  position: [32.2080, 35.2705], // Sychar, West Bank
  category: 'Religion',
  year: 30,
},
{
  id: 140,
  title: 'The Healing of the Blind Man',
  description: 'Jesus heals a blind man, illustrating his ability to bring spiritual and physical sight.',
  position: [31.7784, 35.2290], // Jerusalem, Israel
  category: 'Religion',
  year: 30,
},
{
  id: 141,
  title: 'The Treaty of Westphalia',
  description: 'The Peace of Westphalia, ending the Thirty Years\' War in the Holy Roman Empire, and the Eighty Years\' War between Spain and the Dutch Republic.',
  position: [51.9470, 7.6122], // Münster, Germany
  category: 'Other',
  year: 1648,
},
{
  id: 142,
  title: 'The Emancipation Proclamation',
  description: 'President Abraham Lincoln issues the Emancipation Proclamation, declaring slaves in Confederate states to be free.',
  position: [38.8951, -77.0364], // Washington, D.C., USA
  category: 'Other',
  year: 1863,
},
{
  id: 143,
  title: 'The Cuban Missile Crisis',
  description: 'The United States and the Soviet Union engage in a tense confrontation over the deployment of nuclear missiles in Cuba.',
  position: [23.1136, -82.3666], // Havana, Cuba
  category: 'Other',
  year: 1962,
},
{
  id: 144,
  title: 'The Great Fire of London',
  description: 'A devastating fire breaks out in London, destroying a large part of the city.',
  position: [51.5099, -0.1180], // London, England
  category: 'Other',
  year: 1666,
},
{
  id: 145,
  title: 'The Berlin Airlift',
  description: 'Allied forces conduct an airlift to supply West Berlin during the Soviet blockade, a pivotal event in the early Cold War.',
  position: [52.5200, 13.4050], // Berlin, Germany
  category: 'Other',
  year: 1948,
},
{
  id: 146,
  title: 'The Louisiana Purchase',
  description: 'The United States acquires a vast territory from France, doubling the size of the country.',
  position: [37.0902, -95.7129], // United States (approximate center)
  category: 'Other',
  year: 1803,
},
{
  id: 147,
  title: 'The Challenger Disaster',
  description: 'Space Shuttle Challenger disintegrates shortly after liftoff, resulting in the deaths of seven astronauts.',
  position: [28.5721, -80.6480], // Cape Canaveral, USA
  category: 'Other',
  year: 1986,
},
{
  id: 148,
  title: 'The Boxer Rebellion',
  description: 'An anti-foreign and anti-Christian uprising in China, leading to international intervention.',
  position: [39.9042, 116.4074], // Beijing, China
  category: 'Other',
  year: 1899,
},
{
  id: 149,
  title: 'The Tunguska Event',
  description: 'A massive explosion, possibly caused by the airburst of a meteoroid or comet, occurs near the Tunguska River in Siberia.',
  position: [60.4214, 101.8252], // Tunguska, Russia
  category: 'Other',
  year: 1908,
},
{
  id: 150,
  title: 'The Nuremberg Trials',
  description: 'The trials of prominent leaders of Nazi Germany for war crimes, held in the aftermath of World War II.',
  position: [49.4521, 11.0768], // Nuremberg, Germany
  category: 'Other',
  year: 1945,
},
{
  id: 151,
  title: 'The Space Race',
  description: 'The competition between the United States and the Soviet Union to achieve significant milestones in space exploration.',
  position: [38.9072, -77.0370], // Washington, D.C., USA
  category: 'Other',
  year: 1957,
},
{
  id: 152,
  title: 'The Siege of Leningrad',
  description: 'The prolonged military blockade of the city of Leningrad (now St. Petersburg) during World War II.',
  position: [59.9343, 30.3351], // St. Petersburg, Russia
  category: 'Other',
  year: 1941,
},
{
  id: 153,
  title: 'The Battle of Stalingrad',
  description: 'One of the largest battles of World War II, resulting in a decisive Soviet victory over German forces.',
  position: [48.7080, 44.5133], // Volgograd, Russia
  category: 'Other',
  year: 1942,
},
{
  id: 154,
  title: 'The Treaty of Versailles',
  description: 'The peace treaty that officially ended World War I and imposed harsh conditions on Germany.',
  position: [48.8014, 2.1306], // Versailles, France
  category: 'Other',
  year: 1919,
},
{
  id: 155,
  title: 'The Industrial Revolution',
  description: 'A period of significant economic, technological, and social changes, marking the transition to modern industrial society.',
  position: [51.5074, -0.1278], // London, England
  category: 'Other',
  year: 1760,
},
{
  id: 156,
  title: 'The Battle of Marathon',
  description: 'The Athenians defeat the Persian Empire, a pivotal moment in the Greco-Persian Wars.',
  position: [38.1069, 23.2295], // Marathon, Greece
  category: 'Other',
  year: 490,
},
{
  id: 157,
  title: 'The Black Death',
  description: 'A devastating pandemic that swept through Europe, causing widespread death and social upheaval.',
  position: [51.5099, -0.1180], // Europe (approximate)
  category: 'Other',
  year: 1347,
},
{
  id: 158,
  title: 'The Panama Canal Completion',
  description: 'The completion of the Panama Canal, connecting the Atlantic and Pacific Oceans and facilitating global maritime trade.',
  position: [9.1450, -79.7310], // Panama City, Panama
  category: 'Other',
  year: 1914,
},
{
  id: 159,
  title: 'The Siege of Orleans',
  description: 'Joan of Arc leads French forces to lift the siege of Orleans during the Hundred Years\' War.',
  position: [47.9029, 1.9098], // Orleans, France
  category: 'Other',
  year: 1429,
},
{
  id: 160,
  title: 'The Cultural Revolution',
  description: 'A sociopolitical movement in China initiated by Mao Zedong, leading to significant social and cultural upheaval.',
  position: [39.9042, 116.4074], // Beijing, China
  category: 'Other',
  year: 1966,
},

]