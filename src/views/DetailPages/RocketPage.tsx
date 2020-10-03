import React from "react";
import { Redirect, useLocation } from "react-router-dom";

import { TableBody, TableCell, TableRow } from "@material-ui/core";

import { Rocket } from "../../types/apiTypes";

import { ColumnContainer } from "../../globalStyles";

import {
  StyledSection,
  ImageContainer,
  InfoContainer,
  StyledTable,
} from "./StyledDetailPages";

interface LocationState {
  item: Rocket;
}

const RocketPage: React.FC = () => {
  const location = useLocation();

  if (location.state === undefined) {
    return <Redirect to="/rockets" />;
  }

  const rocket = (location.state as LocationState).item;

  const {
    company,
    cost_per_launch,
    country,
    description,
    diameter,
    engines,
    first_stage,
    flickr_images,
    height,
    mass,
    rocket_name,
    second_stage,
    wikipedia,
  } = rocket;

  return (
    <ColumnContainer>
      <StyledSection data-testid="informations">
        <ImageContainer>
          <img src={flickr_images[0]} alt={rocket_name} />
        </ImageContainer>
        <InfoContainer>
          <h2>{rocket_name}</h2>
          <p>{description}</p>
          <h3>Additional Informations</h3>
          <StyledTable aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Company
                </TableCell>
                <TableCell align="right">{company}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Country
                </TableCell>
                <TableCell align="right">{country}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Cost Per Launch
                </TableCell>
                <TableCell align="right">{cost_per_launch}</TableCell>
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
          <h3>Rocket</h3>
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
                  Height
                </TableCell>
                <TableCell align="right">
                  {height.meters} m<span> / {height.feet} ft</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Mass
                </TableCell>
                <TableCell align="right">
                  {mass.kg} kg<span> / {mass.lb} lb</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </StyledTable>
        </InfoContainer>
        {flickr_images[1].length ? (
          <ImageContainer>
            <img src={flickr_images[1]} alt={rocket_name} />
          </ImageContainer>
        ) : (
          ""
        )}
      </StyledSection>
      <StyledSection data-testid="engines">
        <InfoContainer>
          <h3>Engines</h3>
          <h2>Overview</h2>
          <StyledTable aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Number
                </TableCell>
                <TableCell align="right">{engines.number}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Type
                </TableCell>
                <TableCell align="right">{engines.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Version
                </TableCell>
                <TableCell align="right">{engines.version}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Layout
                </TableCell>
                <TableCell align="right">{engines.layout}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Propellant 1
                </TableCell>
                <TableCell align="right">{engines.propellant_1}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Propellant 2
                </TableCell>
                <TableCell align="right">{engines.propellant_2}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Thrust sea level
                </TableCell>
                <TableCell align="right">
                  {engines.thrust_sea_level.kN} kN
                  <span> / {engines.thrust_sea_level.lbf} lbf</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Thrust vacuum
                </TableCell>
                <TableCell align="right">
                  {engines.thrust_vacuum.kN} kN
                  <span> / {engines.thrust_vacuum.lbf} lbf</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Thrust to weigth
                </TableCell>
                <TableCell align="right">{engines.thrust_to_weight}</TableCell>
              </TableRow>
            </TableBody>
          </StyledTable>
        </InfoContainer>
      </StyledSection>
      <StyledSection data-testid="first-stage">
        <InfoContainer>
          <h3>First Stage</h3>
          <h2>Overview</h2>
          <StyledTable aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Burn Time
                </TableCell>
                <TableCell align="right">
                  {first_stage.burn_time_sec} sec
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Engines
                </TableCell>
                <TableCell align="right">{first_stage.engines}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Fuel Amount
                </TableCell>
                <TableCell align="right">
                  {first_stage.fuel_amount_tons} tons
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Reusable
                </TableCell>
                <TableCell align="right">
                  {first_stage.reusable ? "Yes" : "No"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Thrust sea level
                </TableCell>
                <TableCell align="right">
                  {first_stage.thrust_sea_level.kN} kN
                  <span> / {first_stage.thrust_sea_level.lbf} lbf</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Thrust vacuum
                </TableCell>
                <TableCell align="right">
                  {first_stage.thrust_vacuum.kN} kN
                  <span> / {first_stage.thrust_vacuum.lbf} lbf</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </StyledTable>
        </InfoContainer>
      </StyledSection>
      <StyledSection data-testid="second-stage">
        <InfoContainer>
          <h3>Second Stage</h3>
          <h2>Overview</h2>
          <StyledTable aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Burn Time
                </TableCell>
                <TableCell align="right">
                  {second_stage.burn_time_sec} sec
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Engines
                </TableCell>
                <TableCell align="right">{second_stage.engines}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Fuel Amount
                </TableCell>
                <TableCell align="right">
                  {second_stage.fuel_amount_tons} tons
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Reusable
                </TableCell>
                <TableCell align="right">
                  {second_stage.reusable ? "Yes" : "No"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Thrust
                </TableCell>
                <TableCell align="right">
                  {second_stage.thrust.kN} kN
                  <span> / {second_stage.thrust.lbf} lbf</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </StyledTable>
        </InfoContainer>
      </StyledSection>
    </ColumnContainer>
  );
};

export default RocketPage;
