import { ReactNode, createContext, useState, Dispatch, SetStateAction } from 'react';
import { api } from '../services/api';
interface BrandsState { nome: string, codigo: number }
interface ModelsState { nome: string, codigo: number }
interface YearState { nome: string, codigo: string }
interface ObjectResult {
  AnoModelo: number;
  Marca: string;
  Valor: string;
}

// tipagem do contexto
interface ConsultPriceProps {
  handleRequestVehicle: (vehicle: string) => Promise<void>
  handleRequestModels: (codeBrand: string) => Promise<void>
  handleRequestYear: (codeModel: string) => Promise<void>
  handleResultsValue: () => Promise<void>,
  setYearCode: Dispatch<SetStateAction<string>>,
  brands: BrandsState[],
  models: ModelsState[],
  years: YearState[],
  results: ObjectResult,
  codeBrand: string,
  yearCode: string,
  codeModel: string,
  vehicle: string,

}

export const ConsultPriceContext = createContext<ConsultPriceProps>({} as ConsultPriceProps);

interface TransactionsProviderProps {
  children: ReactNode;
}




export function ConsultPriceProvider({ children }: TransactionsProviderProps) {
  const [brands, setBrands] = useState<BrandsState[]>([])
  const [models, setModels] = useState<ModelsState[]>([])
  const [years, setYears] = useState<YearState[]>([])
  const [results, setResults] = useState<ObjectResult>({} as ObjectResult)

  const [vehicle, setVehicle] = useState('')
  const [codeBrand, setCodeBrand] = useState('')
  const [yearCode, setYearCode] = useState('')
  const [codeModel, setCodeModel] = useState('')
  

  async function handleRequestVehicle(vehicle: string) {
    setVehicle(vehicle)

    let resp = await api.get(`/fipe/api/v1/${vehicle}/marcas`);
    let { data } = resp
    data = data.map((value: BrandsState) => {
      return {
        nome: value.nome,
        codigo: Number(value.codigo)
      }
    })
    setBrands([...data])
  }

  async function handleRequestModels(codeBrand: string) {
    setCodeBrand(codeBrand)
    let resp = await api.get(`/fipe/api/v1/${vehicle}/marcas/${codeBrand}/modelos`);
    let { data } = resp
    data = data.modelos.map((value: ModelsState) => {
      return {
        nome: value.nome,
        codigo: Number(value.codigo)
      }
    })
    setModels([...data])
  }

  async function handleRequestYear(codeModel: string) {
    setCodeModel(codeModel)
    let resp = await api.get(`/fipe/api/v1/${vehicle}/marcas/${codeBrand}/modelos/${codeModel}/anos`);
    let { data } = resp
    data = data.map((value: YearState) => {
      return {
        nome: value.nome,
        codigo: value.codigo
      }
    })
    setYears([...data])
  }

  async function handleResultsValue() {
    try {

      let resp = await api.get(`/fipe/api/v1/${vehicle}/marcas/${codeBrand}/modelos/${codeModel}/anos/${yearCode}`);
      let { data } = resp
      console.log(data)
  
      let resultado = {
        Marca: String(data.Marca),
        AnoModelo: Number(data.AnoModelo),
        Valor: String(data.Valor),
      }
      console.log(resultado)
  
      setResults(resultado)
      setVehicle('')
      setCodeBrand('')
      setCodeModel('')
      setYearCode('')
      setBrands([])
      setModels([])
      setYears([])
     

    }catch (e) {
      console.log(e)
    }

  }

  return (
    <ConsultPriceContext.Provider value={{
      handleRequestModels,
      handleRequestYear,
      handleResultsValue,
      handleRequestVehicle,
      setYearCode,
      brands,
      models,
      years,
      results,
      codeBrand,
      codeModel,
      yearCode,
      vehicle
    }}>
      {children}
    </ConsultPriceContext.Provider>
  )

}