interface HistoricalEvent{
    id: number;
    title: string;
    description: string;
    position: [number, number];
    category: string;
    year: number;
}

const eventsData: HistoricalEvent[] = [
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
    year: 333 BCE,
  },
  {
    id: 49,
    title: 'Siege of Tyre',
    description: 'Alexander's successful siege of the fortified city of Tyre during his campaign in the eastern Mediterranean.',
    position: [33.2670, 35.2057], // Tyre, Lebanon
    category: 'War',
    year: 332 BCE,
  },
  // Add more battles of Alexander the Great

  // Ancient Egyptian Wars
  {
    id: 50,
    title: 'Battle of Megiddo',
    description: 'One of the earliest recorded battles in history, fought near the ancient city of Megiddo.',
    position: [32.5831, 35.1794], // Megiddo, Israel
    category: 'War',
    year: 1457 BCE,
  },
  {
    id: 51,
    title: 'Battle of Kadesh',
    description: 'A famous battle between the forces of Ramesses II of Egypt and Muwatalli II of the Hittite Empire.',
    position: [32.6505, 36.0356], // Kadesh, Syria
    category: 'War',
    year: 1274 BCE,
  },
]