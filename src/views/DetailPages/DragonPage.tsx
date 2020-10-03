import React from "react";
import { Redirect, useLocation } from "react-router-dom";

import { TableBody, TableCell, TableRow } from "@material-ui/core";

import { Dragon } from "../../types/apiTypes";

import { ColumnContainer } from "../../globalStyles";

import {
  StyledSection,
  ImageContainer,
  InfoContainer,
  StyledTable,
} from "./StyledDetailPages";

interface LocationState {
  item: Dragon;
}

const DragonPage: React.FC = () => {
  const location = useLocation();

  if (location.state === undefined) {
    return <Redirect to="/dragons" />;
  }

  const dragon = (location.state as LocationState).item;

  const {
    crew_capacity,
    description,
    diameter,
    dry_mass_kg,
    dry_mass_lb,
    first_flight,
    flickr_images,
    heat_shield,
    height_w_trunk,
    launch_payload_mass,
    launch_payload_vol,
    name,
    return_payload_mass,
    return_payload_vol,
    thrusters,
    trunk,
    type,
    wikipedia,
  } = dragon;

  return (
    <ColumnContainer>
      <StyledSection data-testid="informations">
        <ImageContainer>
          <img src={flickr_images[0]} alt={name} />
        </ImageContainer>
        <InfoContainer>
          <h2>{name}</h2>
          <p>{description}</p>
          <h3>Additional Informations</h3>
          <StyledTable aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Crew capacity
                </TableCell>
                <TableCell align="right">{crew_capacity}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Frist flight
                </TableCell>
                <TableCell align="right">{first_flight}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Type
                </TableCell>
                <TableCell align="right">{type}</TableCell>
              </TableRow>
            </TableBody>
          </StyledTable>
          <a href={wikipedia} target="_blank" rel="noopener noreferrer">
            Checkout wikipidia page for more.
          </a>
        </InfoContainer>
      </StyledSection>
      <StyledSection data-testid="overview">
        <InfoContainer>
          <h3>Dragon</h3>
          <h2>Overview</h2>
          <StyledTable aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Diameter
                </TableCell>
                <TableCell align="right">
                  {diameter.meters} m<span> / {diameter.feet} ft</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Height with trunk
                </TableCell>
                <TableCell align="right">
                  {height_w_trunk.meters} m
                  <span> / {height_w_trunk.feet} ft</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Dry Mass
                </TableCell>
                <TableCell align="right">
                  {dry_mass_kg} kg<span> / {dry_mass_lb} lb</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Launch payload mass
                </TableCell>
                <TableCell align="right">
                  {launch_payload_mass.kg} kg
                  <span> / {launch_payload_mass.lb} lb</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Launch payload volume
                </TableCell>
                <TableCell align="right">
                  {launch_payload_vol.cubic_meters} m³
                  <span> / {launch_payload_vol.cubic_feet} ft³</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Return payload mass
                </TableCell>
                <TableCell align="right">
                  {return_payload_mass.kg} kg
                  <span> / {return_payload_mass.lb} lb</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Return payload volume
                </TableCell>
                <TableCell align="right">
                  {return_payload_vol.cubic_meters} m³
                  <span> / {return_payload_vol.cubic_feet} ft³</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </StyledTable>
        </InfoContainer>
        {flickr_images[1].length ? (
          <ImageContainer>
            <img src={flickr_images[1]} alt={name} />
          </ImageContainer>
        ) : (
          ""
        )}
      </StyledSection>
      <StyledSection data-testid="trunk">
        <InfoContainer>
          <h3>Trunk</h3>
          <h2>Overview</h2>
          <StyledTable aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  {trunk.cargo.unpressurized_cargo ? "Unpressurized " : ""}Cargo
                </TableCell>
                <TableCell align="right">
                  Solar array: {trunk.cargo.solar_array}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Volume
                </TableCell>
                <TableCell align="right">
                  {trunk.trunk_volume.cubic_meters} m³
                  <span> / {trunk.trunk_volume.cubic_feet} ft³</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </StyledTable>
        </InfoContainer>
      </StyledSection>
      <StyledSection data-testid="heat-shield">
        <InfoContainer>
          <h3>Heat Shield</h3>
          <h2>Overview</h2>
          <StyledTable aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Dev Partner
                </TableCell>
                <TableCell align="right">{heat_shield.dev_partner}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Material
                </TableCell>
                <TableCell align="right">{heat_shield.material}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Size
                </TableCell>
                <TableCell align="right">{heat_shield.size_meters} m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Temperature
                </TableCell>
                <TableCell align="right">{heat_shield.temp_degrees}°</TableCell>
              </TableRow>
            </TableBody>
          </StyledTable>
        </InfoContainer>
      </StyledSection>
      <StyledSection data-testid="thrusters">
        <InfoContainer>
          <h3>Thrusters</h3>
          <h2>Overview</h2>
          {thrusters.map((t) => (
            <div key={`id_${t.type}`}>
              <h4>{t.type}</h4>
              <StyledTable aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Pods
                    </TableCell>
                    <TableCell align="right">{t.pods}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      isp
                    </TableCell>
                    <TableCell align="right">{t.isp}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Amount
                    </TableCell>
                    <TableCell align="right">{t.amount}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Fuel 1
                    </TableCell>
                    <TableCell align="right">{t.fuel_1}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Fuel 2
                    </TableCell>
                    <TableCell align="right">{t.fuel_2}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Thrust
                    </TableCell>
                    <TableCell align="right">
                      {t.thrust.kN} kN
                      <span> / {t.thrust.lbf} lbf</span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </StyledTable>
            </div>
          ))}
        </InfoContainer>
      </StyledSection>
    </ColumnContainer>
  );
};

export default DragonPage;
