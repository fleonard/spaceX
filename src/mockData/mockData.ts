const dragon = {
  id: "dragon1",
  name: "Dragon 1",
  type: "capsule",
  active: true,
  crew_capacity: 0,
  sidewall_angle_deg: 15,
  orbit_duration_yr: 2,
  dry_mass_kg: 4200,
  dry_mass_lb: 9300,
  first_flight: "2010-12-8",
  flickr_images: [
    "https://imgur.com/DaCfMsj.jpg",
    "https://imgur.com/azYafd8.jpg",
  ],
  heat_shield: {
    material: "PICA-X",
    size_meters: 3.6,
    temp_degrees: 3000,
    dev_partner: "NASA",
  },
  thrusters: [
    {
      type: "Draco",
      amount: 18,
      pods: 4,
      isp: 300,
      fuel_1: "nitrogen tetroxide",
      fuel_2: "monomethylhydrazine",
      thrust: {
        kN: 0.4,
        lbf: 90,
      },
    },
  ],
  launch_payload_mass: {
    kg: 6000,
    lb: 13228,
  },
  launch_payload_vol: {
    cubic_meters: 25,
    cubic_feet: 883,
  },
  return_payload_mass: {
    kg: 3000,
    lb: 6614,
  },
  return_payload_vol: {
    cubic_meters: 11,
    cubic_feet: 388,
  },
  pressurized_capsule: {
    payload_volume: {
      cubic_meters: 11,
      cubic_feet: 388,
    },
  },
  trunk: {
    trunk_volume: {
      cubic_meters: 14,
      cubic_feet: 494,
    },
    cargo: {
      solar_array: 2,
      unpressurized_cargo: true,
    },
  },
  height_w_trunk: {
    meters: 7.2,
    feet: 23.6,
  },
  diameter: {
    meters: 3.7,
    feet: 12,
  },
  wikipedia: "https://en.wikipedia.org/wiki/SpaceX_Dragon",
  description:
    "Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).",
};

const rocket = {
  id: 1,
  active: false,
  stages: 2,
  boosters: 0,
  cost_per_launch: 6700000,
  success_rate_pct: 40,
  first_flight: "2006-03-24",
  country: "Republic of the Marshall Islands",
  company: "SpaceX",
  height: {
    meters: 22.25,
    feet: 73,
  },
  diameter: {
    meters: 1.68,
    feet: 5.5,
  },
  mass: {
    kg: 30146,
    lb: 66460,
  },
  payload_weights: [
    {
      id: "leo",
      name: "Low Earth Orbit",
      kg: 450,
      lb: 992,
    },
  ],
  first_stage: {
    reusable: false,
    engines: 1,
    fuel_amount_tons: 44.3,
    burn_time_sec: 169,
    thrust_sea_level: {
      kN: 420,
      lbf: 94000,
    },
    thrust_vacuum: {
      kN: 480,
      lbf: 110000,
    },
  },
  second_stage: {
    reusable: false,
    engines: 1,
    fuel_amount_tons: 3.38,
    burn_time_sec: 378,
    thrust: {
      kN: 31,
      lbf: 7000,
    },
    payloads: {
      option_1: "composite fairing",
      composite_fairing: {
        height: {
          meters: 3.5,
          feet: 11.5,
        },
        diameter: {
          meters: 1.5,
          feet: 4.9,
        },
      },
    },
  },
  engines: {
    number: 1,
    type: "merlin",
    version: "1C",
    layout: "single",
    engine_loss_max: 0,
    propellant_1: "liquid oxygen",
    propellant_2: "RP-1 kerosene",
    thrust_sea_level: {
      kN: 420,
      lbf: 94000,
    },
    thrust_vacuum: {
      kN: 480,
      lbf: 110000,
    },
    thrust_to_weight: 96,
  },
  landing_legs: {
    number: 0,
    material: null,
  },
  wikipedia: "https://en.wikipedia.org/wiki/Falcon_1",
  description:
    "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
  rocket_id: "falcon1",
  rocket_name: "Falcon 1",
  rocket_type: "rocket",
  flickr_images: [
    "https://imgur.com/DaCfMsj.jpg",
    "https://imgur.com/azYafd8.jpg",
  ],
};

export { rocket, dragon };
