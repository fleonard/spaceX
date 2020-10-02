export interface Rocket {
  id: number;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  height: Diameter;
  diameter: Diameter;
  mass: Mass;
  payload_weights: PayloadWeight[];
  first_stage: FirstStage;
  flickr_images: string[];
  second_stage: SecondStage;
  engines: Engines;
  landing_legs: LandingLegs;
  wikipedia: string;
  description: string;
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

export interface Dragon {
  id: string;
  name: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  sidewall_angle_deg: number;
  orbit_duration_yr: number;
  dry_mass_kg: number;
  dry_mass_lb: number;
  first_flight: string;
  flickr_images: string[];
  heat_shield: HeatShield;
  thrusters: Thruster[];
  launch_payload_mass: PayloadMass;
  launch_payload_vol: LaunchPayloadVol;
  return_payload_mass: PayloadMass;
  return_payload_vol: LaunchPayloadVol;
  pressurized_capsule: PressurizedCapsule;
  trunk: Trunk;
  height_w_trunk: Diameter;
  diameter: Diameter;
  wikipedia: string;
  description: string;
}

export type SpaceXType = Rocket[] & Dragon[];

interface Diameter {
  meters: number;
  feet: number;
}

interface Engines {
  number: number;
  type: string;
  version: string;
  layout: string;
  engine_loss_max: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: Thrust;
  thrust_vacuum: Thrust;
  thrust_to_weight: number;
}

interface Thrust {
  kN: number;
  lbf: number;
}

interface FirstStage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust_sea_level: Thrust;
  thrust_vacuum: Thrust;
}

interface LandingLegs {
  number: number;
  material: null;
}

interface Mass {
  kg: number;
  lb: number;
}

interface PayloadWeight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

interface SecondStage {
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust: Thrust;
  payloads: Payloads;
}

interface Payloads {
  option_1: string;
  composite_fairing: CompositeFairing;
}

interface CompositeFairing {
  height: Diameter;
  diameter: Diameter;
}

interface HeatShield {
  material: string;
  size_meters: number;
  temp_degrees: number;
  dev_partner: string;
}

interface PayloadMass {
  kg: number;
  lb: number;
}

interface LaunchPayloadVol {
  cubic_meters: number;
  cubic_feet: number;
}

interface PressurizedCapsule {
  payload_volume: LaunchPayloadVol;
}

interface Thruster {
  type: string;
  amount: number;
  isp: number;
  pods: number;
  fuel_1: string;
  fuel_2: string;
  thrust: Thrust;
}

interface Trunk {
  trunk_volume: LaunchPayloadVol;
  cargo: Cargo;
}

interface Cargo {
  solar_array: number;
  unpressurized_cargo: boolean;
}
