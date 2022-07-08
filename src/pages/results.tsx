import Link from 'next/link'
import { useContext } from 'react'
import { ConsultPriceContext } from '../Context/ConsultPrice'
import { Wrapper, Container, ButtonOptions, FlexBtnPrice } from '../styles/Styles'

export default function Results() {
    const { results } = useContext(ConsultPriceContext)

    console.log(results)

    

    return (
        <>
            <Container>
                <Wrapper>
                    <h1>Tabela Fipe: Preço <span>{results.Marca}</span> <span>{results.AnoModelo}</span></h1>
                    <FlexBtnPrice>
                        <span>{results.Valor}</span>
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