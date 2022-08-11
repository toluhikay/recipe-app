import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Popular from './popular'
const DummyPopular = () =>{
    return(
        <BrowserRouter>
            <Popular/>
        </BrowserRouter>
    )
}

describe('popular page', ()=>{
    it('renders recipe card index', async()=>{
        render(<DummyPopular/>);
        const recipeCardIndex = await screen.findByTestId(`recipe-number-0`)
        expect(recipeCardIndex).toBeInTheDocument()
    })
    it('has 24 rendered recipe cards', async()=>{
        render(<DummyPopular/>);
        const recipeCardLength = await screen.findAllByTestId(/recipe-number/i)
        expect(recipeCardLength.length).toBe(24)
    })
})