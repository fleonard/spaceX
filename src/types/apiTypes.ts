export interface Rocket {
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  diameter: Diameter;
  engines: Engines;
  first_flight: string;
  first_stage: FirstStage;
  flickr_images: string[];
  height: Diameter;
  id: number;
  landing_legs: LandingLegs;
  mass: Mass;
  payload_weights: PayloadWeight[];
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  second_stage: SecondStage;
  stages: number;
  success_rate_pct: number;
  wikipedia: string;
}

export interface Dragon {
  active: boolean;
  crew_capacity: number;
  description: string;
  diameter: Diameter;
  dry_mass_kg: number;
  dry_mass_lb: number;
  first_flight: string;
  flickr_images: string[];
  heat_shield: HeatShield;
  height_w_trunk: Diameter;
  id: string;
  launch_payload_mass: PayloadMass;
  launch_payload_vol: LaunchPayloadVol;
  name: string;
  orbit_duration_yr: number;
  pressurized_capsule: PressurizedCapsule;
  return_payload_mass: PayloadMass;
  return_payload_vol: LaunchPayloadVol;
  sidewall_angle_deg: number;
  thrusters: Thruster[];
  trunk: Trunk;
  type: string;
  wikipedia: string;
}

export type SpaceXType = Rocket[] & Dragon[];

interface Diameter {
  feet: number;
  meters: number;
}

interface Engines {
  engine_loss_max: number;
  layout: string;
  number: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: Thrust;
  thrust_to_weight: number;
  thrust_vacuum: Thrust;
  type: string;
  version: string;
}

interface Thrust {
  kN: number;
  lbf: number;
}

interface FirstStage {
  burn_time_sec: number;
  engines: number;
  fuel_amount_tons: number;
  reusable: boolean;
  thrust_sea_level: Thrust;
  thrust_vacuum: Thrust;
}

interface LandingLegs {
  material: null;
  number: number;
}

interface Mass {
  kg: number;
  lb: number;
}

interface PayloadWeight {
  id: string;
  kg: number;
  lb: number;
  name: string;
}

interface SecondStage {
  burn_time_sec: number;
  engines: number;
  fuel_amount_tons: number;
  payloads: Payloads;
  reusable: boolean;
  thrust: Thrust;
}

interface Payloads {
  composite_fairing: CompositeFairing;
  option_1: string;
}

interface CompositeFairing {
  diameter: Diameter;
  height: Diameter;
}

interface HeatShield {
  dev_partner: string;
  material: string;
  size_meters: number;
  temp_degrees: number;
}

interface PayloadMass {
  kg: number;
  lb: number;
}

interface LaunchPayloadVol {
  cubic_feet: number;
  cubic_meters: number;
}

interface PressurizedCapsule {
  payload_volume: LaunchPayloadVol;
}

interface Thruster {
  amount: number;
  fuel_1: string;
  fuel_2: string;
  isp: number;
  pods: number;
  thrust: Thrust;
  type: string;
}

interface Trunk {
  cargo: Cargo;
  trunk_volume: LaunchPayloadVol;
}

interface Cargo {
  solar_array: number;
  unpressurized_cargo: boolean;
}
