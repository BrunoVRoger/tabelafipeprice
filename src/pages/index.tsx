import type { NextPage } from 'next'
import { Container, FlexBtn, FlexBtnPrice, Wrapper, Colum, ButtonOptions, Select, Header,SpanTable,SpanFibe } from '../styles/Styles'
import React, { useContext, useState } from 'react'
import { ConsultPriceContext } from '../Context/ConsultPrice'
import Link from 'next/link'

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
        <div>
          <svg width="165" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M155 2c-5.506 0-10 4.466-10 10 0 5.506 4.466 10 10 10 5.506 0 10-4.466 10-10s-4.466-10-10-10zm0 14.972c-2.753 0-5-2.247-5-5s2.247-5 5-5 5 2.247 5 5c0 2.78-2.247 5-5 5zM140.472 2H125.5a2.508 2.508 0 00-2.5 2.504 2.508 2.508 0 002.5 2.503h5v12.49A2.508 2.508 0 00133 22c1.376 0 2.5-1.125 2.5-2.503V7.007h5c1.376 0 2.5-1.125 2.5-2.503C142.972 3.125 141.848 2 140.472 2z" fill="#00B2A9"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M102.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm15 2c-1.376 0-2.5 1.168-2.5 2.6 0 2.863-2.247 5.2-5 5.2s-5-2.337-5-5.2c0-1.431-1.124-2.6-2.5-2.6s-2.5 1.168-2.5 2.6c0 5.726 4.466 10.4 10 10.4 5.506 0 10-4.645 10-10.4 0-1.46-1.124-2.6-2.5-2.6zm2.5-4.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill="#00B2A9"></path><path d="M87 2c-5.506 0-10 4.466-10 10 0 5.506 4.466 10 10 10 1.91 0 3.708-.534 5.225-1.489.393.871 1.264 1.489 2.275 1.489 1.376 0 2.5-1.124 2.5-2.5v-7.528C97 6.466 92.534 2 87 2zm0 14.972c-2.753 0-5-2.247-5-5s2.247-5 5-5 5 2.247 5 5c0 2.78-2.247 5-5 5z" fill="#00B2A9"></path><path d="M71.5 2A2.507 2.507 0 0069 4.504v14.993A2.507 2.507 0 0071.5 22c1.376 0 2.5-1.125 2.5-2.503V4.504A2.507 2.507 0 0071.5 2zM56 2.444c-1.826 0-3.511.495-5 1.319V2.444C51 1.1 49.876 0 48.5 0S46 1.099 46 2.444v9.778C46 17.605 50.466 22 56 22c5.506 0 10-4.367 10-9.778-.028-5.41-4.494-9.778-10-9.778zm0 14.64c-2.753 0-5-2.198-5-4.89 0-2.69 2.247-4.888 5-4.888s5 2.197 5 4.889c-.028 2.719-2.247 4.889-5 4.889zM33 2c-5.534 0-10 4.473-10 9.986C23 17.527 27.466 22 33 22c5.506 0 10-4.473 10-10.014C42.972 6.473 38.506 2 33 2zm0 14.993c-2.753 0-5-2.25-5-5.007 0-2.757 2.247-5.007 5-5.007s5 2.25 5 5.007c-.028 2.785-2.247 5.007-5 5.007zM13.736 2A6.175 6.175 0 0010 3.264 6.175 6.175 0 006.264 2 6.228 6.228 0 000 8.236v11.236c0 1.376 1.124 2.5 2.5 2.5s2.5-1.124 2.5-2.5V8.236c0-.702.562-1.264 1.236-1.264.702 0 1.264.562 1.264 1.264v11.236c0 1.376 1.124 2.5 2.5 2.5s2.5-1.124 2.5-2.5V8.208A1.241 1.241 0 0113.736 7C14.438 7 15 7.562 15 8.264V19.5c0 1.376 1.124 2.5 2.5 2.5s2.5-1.124 2.5-2.5V8.236C19.972 4.781 17.191 2 13.736 2z" fill="#333"></path></svg>
        </div>
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
