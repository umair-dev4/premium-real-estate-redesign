/**
 * Build an optimized Pexels image URL at a given size.
 * Keeps the catalog centralised so imagery stays consistent across the site.
 */
export function px(id: number, w = 1600, h = 1000): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;
}

/** Image catalogue — curated photography for the brand. */
export const IMG = {
  hero: px(28054849, 2200, 1450),
  heroAlt: px(31817160, 2000, 1300),
  villaTwilight: px(28054849, 1500, 1100),
  villaSea: px(29702291, 1500, 1100),
  villaPool: px(19075385, 1500, 1100),
  poolMediterranean: px(29702290, 1400, 1050),
  seasideSunny: px(35069530, 1400, 1050),
  villaPatio: px(20975726, 1400, 1050),
  patioRattan: px(19075379, 1400, 1050),
  oceanviewSunset: px(31817160, 1400, 1050),
  // Architecture / stone
  creteVillaGarden: px(14506522, 1400, 1050),
  mediterraneanHouse: px(23880098, 1400, 1050),
  villaTerracotta: px(37283016, 1400, 1050),
  villaOrangeRoof: px(36298680, 1400, 1050),
  stoneAlley: px(27371481, 1400, 1050),
  stoneHouse: px(38017217, 1400, 1050),
  cobblestoneStreet: px(27371479, 1400, 1050),
  whitewashed: px(15241825, 1400, 1050),
  // Chania
  chaniaHarbor: px(34882066, 1600, 1100),
  chaniaLighthouse: px(30426068, 1400, 1050),
  chaniaWaterfront: px(13900749, 1400, 1050),
  chaniaMountains: px(33557913, 1400, 1050),
  // Interiors
  suiteDaylight: px(7031731, 1400, 1050),
  elegantBedroom: px(2725675, 1400, 1050),
  cabana: px(10610442, 1400, 1050),
  // Apartments / urban
  aptGlassBalcony: px(27459248, 1400, 1050),
  aptBlueSky: px(37224965, 1400, 1050),
  aptGeometric: px(27570328, 1400, 1050),
  urbanArch: px(5674684, 1400, 1050),
  // Team portraits
  p1: px(31880922, 700, 840),
  p2: px(38889914, 700, 840),
  p3: px(18032391, 700, 840),
  p4: px(38677835, 700, 840),
  p5: px(34592823, 700, 840),
  p6: px(12311544, 700, 840),
  p7: px(26728094, 700, 840),
  p8: px(30468636, 700, 840),
};

export type ImgKey = keyof typeof IMG;
