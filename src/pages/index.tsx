import type { NextPage } from 'next'
import { Container, FlexBtn, FlexBtnPrice, Wrapper, Colum, ButtonOptions, Select, Header,SpanTable,SpanFibe } from '../styles/Styles'
import React, { useContext, useState } from 'react'
import { ConsultPriceContext } from '../Context/ConsultPrice'
import Link from 'next/link'
import { FaCarSide } from "react-icons/fa";


const Home: NextPage = () => {


  const { brands,
    models,
    years,
    setYearCode,
    handleRequestModels,
    handleRequestVehicle,
    handleRequestYear,
    handleResultsValue,
    codeBrand,
    codeModel,
    yearCode,
    vehicle
  } = useContext(ConsultPriceContext)

  let isBollean = codeBrand.length > 0 && codeModel.length > 0 && yearCode.length > 0;

  let selectCar = vehicle === "carros";
  let selectMoto = vehicle === "motos";
  let selectTruck = vehicle === "caminhoes";
  return (
    <>
      <Header className="header">
        <div>< FaCarSide/></div>
        <div className="table-fipe"><SpanTable>Tabela</SpanTable> <SpanFibe>.Fipe</SpanFibe></div>
      </Header>
      <Container>

        <h1><SpanTable>Tabela</SpanTable> <SpanFibe>.Fipe</SpanFibe></h1>
        <p>Consulte um valor de um veículo de forma gratuita</p>
        <Wrapper>
          <FlexBtn>
            <ButtonOptions isActive={selectCar} type="button" onClick={() => handleRequestVehicle('carros')}>Carros</ButtonOptions>
            <ButtonOptions isActive={selectMoto} type="button" onClick={() => handleRequestVehicle('motos')}>Motos</ButtonOptions>
            <ButtonOptions isActive={selectTruck} type="button" onClick={() => handleRequestVehicle('caminhoes')}>Caminhões</ButtonOptions>
          </FlexBtn>
          <Colum>
            <Select name="select" onChange={(event) => handleRequestModels(event.target.value)}>
              <option>Marca</option>
              {
                brands.map(brand => {
                  return <option key={brand.codigo} value={brand.codigo}>{brand.nome}</option>
                }
                )}
            </Select>
            <br />
            <Select name="select" onChange={(event) => handleRequestYear(event.target.value)}>
              <option>Modelo</option>
              {
                models.map(model => {
                  return <option key={model.codigo} value={model.codigo}>{model.nome}</option>
                }
                )}
            </Select>
            <br />
            <Select name="select" onChange={(event) => setYearCode(event.target.value)}>
              <option>Ano</option>
              {
                years.map(year => {
                  return <option key={year.codigo} value={year.codigo}>{year.nome}</option>
                }
                )}
            </Select>
          </Colum>
          <FlexBtnPrice>
            <Link href='/results'>
              <ButtonOptions type="button" disabled={!isBollean} onClick={handleResultsValue}>Consultar preço</ButtonOptions>
            </Link>
          </FlexBtnPrice>
        </Wrapper>
      </Container>
    </>
  )
}

export default Home
