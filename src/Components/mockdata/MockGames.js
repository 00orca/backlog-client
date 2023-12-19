const mockGames = [
  {
    id: 106819,
    cover: { id: 77570, image_id: "co1nuq" },
    name: "Final Fantasy XIV: Complete Edition",
  },
  {
    id: 427,
    cover: { id: 120422, image_id: "co2kx2" },
    name: "Final Fantasy VII",
  },
  {
    id: 19334,
    cover: { id: 71359, image_id: "co1j27" },
    name: "Final Fantasy: Brave Exvius",
  },
  {
    id: 144024,
    cover: { id: 227691, image_id: "co4vor" },
    name: "Final Fantasy VII Remake Intergrade",
  },
  {
    id: 426,
    cover: { id: 141698, image_id: "co31c2" },
    name: "Final Fantasy VI",
  },
  {
    id: 31551,
    cover: { id: 274880, image_id: "co5w3k" },
    name: "Final Fantasy XVI",
  },
  {
    id: 421,
    cover: { id: 133032, image_id: "co2unc" },
    name: "Final Fantasy IX",
  },
  {
    id: 418,
    cover: { id: 85213, image_id: "co1tr1" },
    name: "Final Fantasy X",
  },
  {
    id: 428,
    cover: { id: 138568, image_id: "co2yx4" },
    name: "Final Fantasy Tactics",
  },
  {
    id: 398,
    cover: { id: 175605, image_id: "co3rhx" },
    name: "Final Fantasy XII",
  },
  {
    id: 14144,
    cover: { id: 139593, image_id: "co2zpl" },
    name: "Final Fantasy X/X-2 HD Remaster",
  },
  {
    id: 410,
    cover: { id: 87754, image_id: "co1vpm" },
    name: "Final Fantasy Legend III",
  },
  {
    id: 2407,
    cover: { id: 85223, image_id: "co1trb" },
    name: "Crisis Core: Final Fantasy VII",
  },
  {
    id: 403,
    cover: { id: 127209, image_id: "co2q5l" },
    name: "Final Fantasy Legend II",
  },
  {
    id: 16587,
    cover: { id: 141696, image_id: "co31c0" },
    name: "Final Fantasy IV",
  },
  {
    id: 2408,
    cover: { id: 101633, image_id: "co26f5" },
    name: "Final Fantasy Tactics A2: Grimoire of the Rift",
  },
  {
    id: 414,
    cover: { id: 89377, image_id: "co1wyp" },
    name: "Final Fantasy Tactics Advance",
  },
  {
    id: 425,
    cover: { id: 138937, image_id: "co2z7d" },
    name: "Final Fantasy VIII",
  },
  {
    id: 386,
    cover: { id: 197999, image_id: "co48rz" },
    name: "Final Fantasy XIV Online",
  },
  {
    id: 5679,
    cover: { id: 129185, image_id: "co2roh" },
    name: "Theatrhythm Final Fantasy: Curtain Call",
  },
  {
    id: 423,
    cover: { id: 127206, image_id: "co2q5i" },
    name: "Final Fantasy Anthology",
  },
  {
    id: 417,
    cover: { id: 239623, image_id: "co54w7" },
    name: "Final Fantasy Origins",
  },
  {
    id: 90563,
    cover: { id: 87808, image_id: "co1vr4" },
    name: "Final Fantasy XI: Ultimate Collection - Seekers Edition",
  },
  {
    id: 407,
    cover: { id: 87752, image_id: "co1vpk" },
    name: "Final Fantasy Adventure",
  },
  {
    id: 24288,
    cover: { id: 93513, image_id: "co205l" },
    name: "Dissidia 012: Duodecim Final Fantasy",
  },
  {
    id: 6902,
    cover: { id: 136283, image_id: "co2x5n" },
    name: "Theatrhythm Final Fantasy",
  },
  {
    id: 411,
    cover: { id: 93525, image_id: "co205x" },
    name: "Final Fantasy XI Online",
  },
  {
    id: 17463,
    cover: { id: 87539, image_id: "co1vjn" },
    name: "Final Fantasy: The 4 Heroes of Light",
  },
  {
    id: 7413,
    cover: { id: 87541, image_id: "co1vjp" },
    name: "Final Fantasy: Explorers",
  },
  { id: 385, cover: { id: 137204, image_id: "co2xv8" }, name: "Final Fantasy" },
  {
    id: 419,
    cover: { id: 239643, image_id: "co54wr" },
    name: "Final Fantasy V",
  },
  {
    id: 359,
    cover: { id: 311005, image_id: "co6nz1" },
    name: "Final Fantasy XV",
  },
  {
    id: 415,
    cover: { id: 137387, image_id: "co2y0b" },
    name: "Final Fantasy: Mystic Quest",
  },
  {
    id: 21779,
    cover: { id: 137802, image_id: "co2ybu" },
    name: "Final Fantasy IV: The Complete Collection",
  },
  {
    id: 389,
    cover: { id: 132928, image_id: "co2ukg" },
    name: "Final Fantasy XIII",
  },
  {
    id: 384,
    cover: { id: 85221, image_id: "co1tr9" },
    name: "Final Fantasy XIII-2",
  },
  {
    id: 23016,
    cover: { id: 101628, image_id: "co26f0" },
    name: "Final Fantasy: Crystal Chronicles - Echoes of Time",
  },
  {
    id: 16474,
    cover: { id: 137272, image_id: "co2xx4" },
    name: "Final Fantasy II",
  },
  {
    id: 391,
    cover: { id: 93510, image_id: "co205i" },
    name: "Dissidia Final Fantasy",
  },
  {
    id: 152250,
    cover: { id: 212920, image_id: "co4kag" },
    name: "Stranger of Paradise: Final Fantasy Origin",
  },
  {
    id: 11214,
    cover: { id: 99216, image_id: "co24k0" },
    name: "World of Final Fantasy",
  },
  {
    id: 2449,
    cover: { id: 85227, image_id: "co1trf" },
    name: "Lightning Returns: Final Fantasy XIII",
  },
  {
    id: 383,
    cover: { id: 132920, image_id: "co2uk8" },
    name: "Final Fantasy Type-0",
  },
  {
    id: 41848,
    cover: { id: 87770, image_id: "co1vq2" },
    name: "Dissidia Duodecim Prologus: Final Fantasy",
  },
  {
    id: 9585,
    cover: { id: 127204, image_id: "co2q5g" },
    name: "Final Fantasy: Crystal Chronicles - Ring of Fates",
  },
  {
    id: 19600,
    cover: { id: 98244, image_id: "co23t0" },
    name: "A King's Tale: Final Fantasy XV",
  },
  {
    id: 408,
    cover: { id: 137362, image_id: "co2xzm" },
    name: "Final Fantasy I \u0026 II: Dawn of Souls",
  },
  {
    id: 41830,
    cover: { id: 87626, image_id: "co1vm2" },
    name: "Final Fantasy Fables: Chocobo Tales",
  },
  {
    id: 21054,
    cover: { id: 127210, image_id: "co2q5m" },
    name: "Final Fantasy: Crystal Chronicles - My Life as a King",
  },
  {
    id: 412,
    cover: { id: 87536, image_id: "co1vjk" },
    name: "Final Fantasy: Crystal Chronicles",
  },
  {
    id: 77234,
    cover: { id: 94687, image_id: "co2127" },
    name: "Final Fantasy III",
  },
  {
    id: 413,
    cover: { id: 136252, image_id: "co2x4s" },
    name: "Final Fantasy X-2",
  },
  {
    id: 18068,
    cover: { id: 93506, image_id: "co205e" },
    name: "Dirge of Cerberus: Final Fantasy VII",
  },
  {
    id: 392,
    cover: { id: 199351, image_id: "co49tj" },
    name: "Final Fantasy XII: Revenant Wings",
  },
  {
    id: 396,
    cover: { id: 129074, image_id: "co2rle" },
    name: "The Final Fantasy Legend",
  },
  {
    id: 401,
    cover: { id: 87537, image_id: "co1vjl" },
    name: "Final Fantasy: Crystal Chronicles - The Crystal Bearers",
  },
  {
    id: 36831,
    cover: { id: 87538, image_id: "co1vjm" },
    name: "Dissidia Final Fantasy NT",
  },
  {
    id: 21628,
    cover: { id: 320353, image_id: "co6v6p" },
    name: "Mobius Final Fantasy",
  },
  {
    id: 388,
    cover: { id: 87522, image_id: "co1vj6" },
    name: "Final Fantasy IV: The After Years",
  },
  {
    id: 14729,
    cover: { id: 85228, image_id: "co1trg" },
    name: "Final Fantasy XIV Online",
  },
  {
    id: 8549,
    cover: { id: 87594, image_id: "co1vl6" },
    name: "Final Fantasy: All the Bravest",
  },
  {
    id: 41052,
    cover: { id: 87532, image_id: "co1vjg" },
    name: "Final Fantasy XV: A New Empire",
  },
  {
    id: 279665,
    cover: { id: 348944, image_id: "co7h8w" },
    name: "Final Fantasy XVI Expansion Pass",
  },
  {
    id: 274411,
    cover: { id: 340757, image_id: "co7axh" },
    name: "Final Fantasy Sonic X: Episode 6",
  },
  {
    id: 274410,
    cover: { id: 340756, image_id: "co7axg" },
    name: "Final Fantasy Sonic X: Episode 5",
  },
  {
    id: 274409,
    cover: { id: 340755, image_id: "co7axf" },
    name: "Final Fantasy Sonic X: Episode 4",
  },
  {
    id: 274408,
    cover: { id: 340751, image_id: "co7axb" },
    name: "Final Fantasy Sonic X: Episode 3",
  },
  {
    id: 274407,
    cover: { id: 340749, image_id: "co7ax9" },
    name: "Final Fantasy Sonic X: Episode 2",
  },
  {
    id: 269470,
    cover: { id: 334644, image_id: "co767o" },
    name: "Final Fantasy 2.0",
  },
  {
    id: 269413,
    cover: { id: 334087, image_id: "co75s7" },
    name: "Final Fantasy XI: Ultimate Collection",
  },
  {
    id: 266863,
    cover: { id: 340750, image_id: "co7axa" },
    name: "Final Fantasy Sonic X: Episode 1",
  },
  {
    id: 266738,
    cover: { id: 330556, image_id: "co7324" },
    name: "Final Fantasy VII Remake \u0026 Rebirth: Digital Deluxe Twin Pack",
  },
  {
    id: 266737,
    cover: { id: 330555, image_id: "co7323" },
    name: "Final Fantasy VII Remake \u0026 Rebirth: Twin Pack",
  },
  {
    id: 266735,
    cover: { id: 330552, image_id: "co7320" },
    name: "Final Fantasy VII Rebirth: Collector's Edition",
  },
  {
    id: 266734,
    cover: { id: 330551, image_id: "co731z" },
    name: "Final Fantasy VII Rebirth: Deluxe Edition",
  },
  {
    id: 266733,
    cover: { id: 330550, image_id: "co731y" },
    name: "Final Fantasy VII Rebirth: Digital Deluxe Edition",
  },
  { id: 266285, name: "Final Fantasy X: Fantasy War" },
  {
    id: 262006,
    cover: { id: 324352, image_id: "co6y9s" },
    name: "Final Fantasy: Sky Warriors",
  },
  {
    id: 247245,
    cover: { id: 299660, image_id: "co6f7w" },
    name: "Final Fantasy X-2: Last Mission",
  },
  {
    id: 244795,
    cover: { id: 314937, image_id: "co6r09" },
    name: "Final Fantasy I-VI Bundle",
  },
  {
    id: 233846,
    cover: { id: 282958, image_id: "co62by" },
    name: "Final Fantasy VII: Re-Imagined",
  },
  {
    id: 231406,
    cover: { id: 280175, image_id: "co606n" },
    name: "Final Fantasy XV: War for Eos",
  },
  {
    id: 228738,
    cover: { id: 283066, image_id: "co62ey" },
    name: "Final Fantasy XVI: Deluxe Edition",
  },
  {
    id: 222978,
    cover: { id: 266091, image_id: "co5pbf" },
    name: "Final Fantasy: Legend of Balance",
  },
  {
    id: 220439,
    cover: { id: 278351, image_id: "co5yrz" },
    name: "Crisis Core: Final Fantasy VII: Reunion - Digital Deluxe Edition",
  },
  {
    id: 210030,
    cover: { id: 305684, image_id: "co6jv8" },
    name: "Final Fantasy: Blackmoon Prophecy II",
  },
  {
    id: 210027,
    cover: { id: 305685, image_id: "co6jv9" },
    name: "Final Fantasy: Blackmoon Prophecy",
  },
  {
    id: 205260,
    cover: { id: 306100, image_id: "co6k6s" },
    name: "Final Fantasy XV: Special Edition",
  },
  {
    id: 201028,
    cover: { id: 305682, image_id: "co6jv6" },
    name: "Stranger of Paradise: Final Fantasy Origin - Collector's Edition",
  },
  {
    id: 186630,
    cover: { id: 213118, image_id: "co4kfy" },
    name: "Final Fantasy Type-0 HD: Limited Edition",
  },
  { id: 176843, name: "Final Fantasy XI Braver" },
  {
    id: 173775,
    cover: { id: 183290, image_id: "co3xfe" },
    name: "Stranger of Paradise: Final Fantasy Origin - Digital Deluxe Edition",
  },
  {
    id: 172829,
    cover: { id: 182699, image_id: "co3wyz" },
    name: "Final Fantasy XI: Adventure",
  },
  {
    id: 167116,
    cover: { id: 232969, image_id: "co4zrd" },
    name: "Final Fantasy XIV: Stormblood - Collector's Edition",
  },
  {
    id: 167106,
    cover: { id: 189949, image_id: "co42kd" },
    name: "Final Fantasy XIV: Shadowbringers - Collector's Edition",
  },
  {
    id: 159253,
    cover: { id: 311024, image_id: "co6nzk" },
    name: "Final Fantasy: Pixel Remaster Collection",
  },
  {
    id: 152343,
    cover: { id: 189960, image_id: "co42ko" },
    name: "Final Fantasy XIV: Endwalker - Collector's Edition",
  },
  {
    id: 147086,
    cover: { id: 139837, image_id: "co2zwd" },
    name: "Final Fantasy X/X-2 HD Remaster: Collector's Edition",
  },
  {
    id: 147061,
    cover: { id: 139812, image_id: "co2zvo" },
    name: "Final Fantasy X/X-2 HD Remaster: Limited Edition",
  },
  {
    id: 147011,
    cover: { id: 139724, image_id: "co2zt8" },
    name: "Final Fantasy X/X-2 HD Remaster Twin Pack",
  },
  {
    id: 146852,
    cover: { id: 139382, image_id: "co2zjq" },
    name: "Final Fantasy X-2 International + Last Mission",
  },
  {
    id: 146617,
    cover: { id: 138851, image_id: "co2z4z" },
    name: "Final Fantasy Awakening",
  },
  {
    id: 146428,
    cover: { id: 189919, image_id: "co42jj" },
    name: "Dirge of Cerberus Lost Episode: Final Fantasy VII",
  },
  {
    id: 146214,
    cover: { id: 137987, image_id: "co2ygz" },
    name: "Final Fantasy Anthology",
  },
  {
    id: 144040,
    cover: { id: 322831, image_id: "co6x3j" },
    name: "Final Fantasy VII: Ever Crisis",
  },
  {
    id: 144038,
    cover: { id: 132155, image_id: "co2tyz" },
    name: "Final Fantasy VII: The First Soldier",
  },
  {
    id: 141504,
    cover: { id: 122283, image_id: "co2mcr" },
    name: "Crisis Core: Final Fantasy VII - Collector's Edition",
  },
  {
    id: 137130,
    cover: { id: 122658, image_id: "co2mn6" },
    name: "Collection of SaGa: Final Fantasy Legend",
  },
  {
    id: 136364,
    cover: { id: 189952, image_id: "co42kg" },
    name: "Final Fantasy XII: The Zodiac Age - Collector's Edition",
  },
  {
    id: 136353,
    cover: { id: 120424, image_id: "co2kx4" },
    name: "Final Fantasy VII Remake: 1st Class Edition",
  },
  {
    id: 136333,
    cover: { id: 305683, image_id: "co6jv7" },
    name: "Dissidia Final Fantasy NT: Steelbook Brawler Edition",
  },
  {
    id: 136224,
    cover: { id: 140608, image_id: "co30hs" },
    name: "Final Fantasy XIV Online: Starter Edition",
  },
  {
    id: 136173,
    cover: { id: 189948, image_id: "co42kc" },
    name: "Final Fantasy XII: The Zodiac Age - Limited Steelbook Edition",
  },
  {
    id: 134226,
    cover: { id: 120410, image_id: "co2kwq" },
    name: "Final Fantasy VII Remake: Deluxe Edition",
  },
  {
    id: 133299,
    cover: { id: 189917, image_id: "co42jh" },
    name: "Final Fantasy VII Remake: Digital Deluxe Upgrade",
  },
  {
    id: 129157,
    cover: { id: 213575, image_id: "co4ksn" },
    name: "Final Fantasy XV Mobile",
  },
  {
    id: 127879,
    cover: { id: 87662, image_id: "co1vn2" },
    name: "Final Fantasy VII \u0026 Final Fantasy VIII Remastered Twin Pack",
  },
  {
    id: 127876,
    cover: { id: 87592, image_id: "co1vl4" },
    name: "Final Fantasy: World Wide Words",
  },
  {
    id: 127832,
    cover: { id: 87520, image_id: "co1vj4" },
    name: "Final Fantasy VII Snowboarding",
  },
  {
    id: 123476,
    cover: { id: 127205, image_id: "co2q5h" },
    name: "Final Fantasy Brave Exvius Chocobo Run!",
  },
  {
    id: 119576,
    cover: { id: 120423, image_id: "co2kx3" },
    name: "Final Fantasy VII Remake: Digital Deluxe Edition",
  },
  {
    id: 113632,
    cover: { id: 87732, image_id: "co1vp0" },
    name: "Final Fantasy Digital Card Game",
  },
  {
    id: 112885,
    cover: { id: 215877, image_id: "co4mkl" },
    name: "War of the Visions: Final Fantasy Brave Exvius",
  },
  {
    id: 112093,
    cover: { id: 189924, image_id: "co42jo" },
    name: "Final Fantasy XIII Trilogy",
  },
  {
    id: 89895,
    cover: { id: 283065, image_id: "co62ex" },
    name: "Theatrhythm Final Fantasy: Curtain Call - Collector's Edition",
  },
  {
    id: 89894,
    cover: { id: 305686, image_id: "co6jva" },
    name: "Theatrhythm Final Fantasy: Curtain Call - Limited Edition",
  },
  { id: 89874, name: "Final Fantasy Anthology Collector's Package" },
  { id: 84188, name: "Final Fantasy for Android" },
  {
    id: 84174,
    cover: { id: 87524, image_id: "co1vj8" },
    name: "Final Fantasy Grandmasters",
  },
  {
    id: 80589,
    cover: { id: 55947, image_id: "yz6wv5ttevpflvnw6bxb" },
    name: "Final Fantasy XI Online: Wings of the Goddess",
  },
  {
    id: 80033,
    cover: { id: 138480, image_id: "co2yuo" },
    name: "Before Crisis: Final Fantasy VII",
  },
  {
    id: 76160,
    cover: { id: 87688, image_id: "co1vns" },
    name: "World of Final Fantasy: Meli-Melo",
  },
  {
    id: 75681,
    cover: { id: 87645, image_id: "co1vml" },
    name: "Final Fantasy XV: Day One Edition",
  },
  {
    id: 75680,
    cover: { id: 87812, image_id: "co1vr8" },
    name: "Final Fantasy XV: Ultimate Collector's Edition",
  },
  {
    id: 74965,
    cover: { id: 84486, image_id: "co1t6u" },
    name: "Final Fantasy: Dimensions II",
  },
  {
    id: 69176,
    cover: { id: 219504, image_id: "co4pdc" },
    name: "Dragon Quest \u0026 Final Fantasy in Itadaki Street Portable",
  },
  {
    id: 66433,
    cover: { id: 136285, image_id: "co2x5p" },
    name: "Final Fantasy: Unlimited with U",
  },
  {
    id: 63408,
    cover: { id: 87542, image_id: "co1vjq" },
    name: "Final Fantasy: Airborne Brigade",
  },
  {
    id: 63312,
    cover: { id: 87530, image_id: "co1vje" },
    name: "Final Fantasy Tactics S",
  },
  {
    id: 60600,
    cover: { id: 40369, image_id: "llnjuv53pc5ez0faezd5" },
    name: "Final Fantasy Legends: Toki no Suisho",
  },
  {
    id: 57793,
    cover: { id: 221455, image_id: "co4qvj" },
    name: "Theatrhythm Final Fantasy: All-Star Carnival",
  },
  {
    id: 55049,
    cover: { id: 87661, image_id: "co1vn1" },
    name: "Final Fantasy VII + VIII Double Pack",
  },
  {
    id: 54550,
    cover: { id: 93520, image_id: "co205s" },
    name: "Itadaki Street: Dragon Quest \u0026 Final Fantasy 30th Anniversary",
  },
  {
    id: 51532,
    cover: { id: 87817, image_id: "co1vrd" },
    name: "Final Fantasy XIV: Heavensward - Collector's Edition",
  },
  {
    id: 41856,
    cover: { id: 198218, image_id: "co48y2" },
    name: "Final Fantasy: Crystal Chronicles - My Life as a Darklord",
  },
  {
    id: 41855,
    cover: { id: 136282, image_id: "co2x5m" },
    name: "Final Fantasy Collection",
  },
  {
    id: 41854,
    cover: { id: 87659, image_id: "co1vmz" },
    name: "Final Fantasy XIV: Collector's Edition",
  },
  {
    id: 41853,
    cover: { id: 87687, image_id: "co1vnr" },
    name: "Final Fantasy XI: Vana'diel Collection 2008",
  },
  {
    id: 41852,
    cover: { id: 87823, image_id: "co1vrj" },
    name: "Final Fantasy XI: The Vana'diel Collection",
  },
  {
    id: 41851,
    cover: { id: 87612, image_id: "co1vlo" },
    name: "Final Fantasy XII: Collector's Edition",
  },
  {
    id: 41845,
    cover: { id: 87807, image_id: "co1vr3" },
    name: "Final Fantasy XIII-2: Limited Collector's Edition",
  },
  {
    id: 41843,
    cover: { id: 87737, image_id: "co1vp5" },
    name: "Final Fantasy XIII-2: Steelbook Edition",
  },
  {
    id: 41842,
    cover: { id: 132921, image_id: "co2uk9" },
    name: "Final Fantasy Type-0 HD: Collector's Edition",
  },
  {
    id: 41841,
    cover: { id: 87761, image_id: "co1vpt" },
    name: "World of Final Fantasy: Limited Edition",
  },
  {
    id: 41840,
    cover: { id: 87675, image_id: "co1vnf" },
    name: "Final Fantasy XIII: Limited Collector's Edition",
  },
  {
    id: 41839,
    cover: { id: 87806, image_id: "co1vr2" },
    name: "Final Fantasy XIV: A Realm Reborn - Collector's Edition",
  },
  {
    id: 41838,
    cover: { id: 87667, image_id: "co1vn7" },
    name: "Lightning Returns: Final Fantasy XIII - Steelbook Edition",
  },
  {
    id: 41837,
    cover: { id: 87773, image_id: "co1vq5" },
    name: "Lightning Returns: Final Fantasy XIII - Target Steelbook Edition",
  },
  {
    id: 41836,
    cover: { id: 139594, image_id: "co2zpm" },
    name: "Final Fantasy X/X-2 HD Remaster: Limited Edition",
  },
  {
    id: 41835,
    cover: { id: 136280, image_id: "co2x5k" },
    name: "Final Fantasy I \u0026 II",
  },
  {
    id: 41834,
    cover: { id: 87743, image_id: "co1vpb" },
    name: "Final Fantasy XIII-2: Collector's Edition",
  },
  {
    id: 41833,
    cover: { id: 87664, image_id: "co1vn4" },
    name: "Lightning Returns: Final Fantasy XIII - Collector's Edition",
  },
  {
    id: 41831,
    cover: { id: 87613, image_id: "co1vlp" },
    name: "Final Fantasy: Explorers - Collector's Edition",
  },
  {
    id: 41638,
    cover: { id: 132922, image_id: "co2uka" },
    name: "Final Fantasy Type-0 HD: Fr4me Limited Edition",
  },
  {
    id: 38492,
    cover: { id: 311015, image_id: "co6nzb" },
    name: "Final Fantasy XV: Deluxe Edition",
  },
  {
    id: 37087,
    cover: { id: 136278, image_id: "co2x5i" },
    name: "Monster of the Deep: Final Fantasy XV",
  },
  {
    id: 36998,
    cover: { id: 87768, image_id: "co1vq0" },
    name: "Pictlogica: Final Fantasy",
  },
  {
    id: 27410,
    cover: { id: 87654, image_id: "co1vmu" },
    name: "Final Fantasy Explorers-Force",
  },
  {
    id: 26981,
    cover: { id: 87593, image_id: "co1vl5" },
    name: "Final Fantasy: Record Keeper",
  },
  {
    id: 24405,
    cover: { id: 136281, image_id: "co2x5l" },
    name: "Dissidia Final Fantasy Arcade",
  },
  {
    id: 24400,
    cover: { id: 85525, image_id: "co1tzp" },
    name: "Dissidia Final Fantasy Opera Omnia",
  },
  {
    id: 19080,
    cover: { id: 87535, image_id: "co1vjj" },
    name: "Final Fantasy Dimensions",
  },
  {
    id: 18069,
    cover: { id: 315284, image_id: "co6r9w" },
    name: "Final Fantasy Fables: Chocobo's Dungeon",
  },
  {
    id: 7400,
    cover: { id: 138845, image_id: "co2z4t" },
    name: "Final Fantasy Agito",
  },
  {
    id: 7398,
    cover: { id: 87523, image_id: "co1vj7" },
    name: "Final Fantasy VII G-Bike",
  },
  {
    id: 2406,
    cover: { id: 93501, image_id: "co2059" },
    name: "Final Fantasy VII",
  },
  {
    id: 420,
    cover: { id: 93526, image_id: "co205y" },
    name: "Final Fantasy Chronicles",
  },
];

export default mockGames;
