import Link from 'next/link'
import { useContext } from 'react'
import { ConsultPriceContext } from '../Context/ConsultPrice'
import { Wrapper, Container, ButtonOptions, FlexBtnPrice,Header,SpanTable,SpanFibe,SpanPrice,Mobi,Auto} from '../styles/Styles'

export default function Results() {
    const { results } = useContext(ConsultPriceContext)
    
    return (
        <>
        <Header >
        <div><Mobi>Mobi</Mobi> <Auto>Auto</Auto></div>
        <div ><SpanTable>Tabela</SpanTable> <SpanFibe>.Fipe</SpanFibe></div>
      </Header>
      <Container></Container>
            <Container>
                <Wrapper>
                    <h1><SpanTable>Tabela</SpanTable> <SpanFibe>Fipe:</SpanFibe> Preço <span>{results.Marca}</span> <span>{results.AnoModelo}</span></h1>
                    <FlexBtnPrice>
                        <SpanPrice>{results.Valor}</SpanPrice>
                    </FlexBtnPrice>
                    <FlexBtnPrice>
                        <Link href="/">
                            <ButtonOptions>Fazer uma nova consulta</ButtonOptions>
                        </Link>
                    </FlexBtnPrice>
                </Wrapper>
            </Container>
        </>
    )
}