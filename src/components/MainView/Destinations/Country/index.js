import React from 'react'
import * as s from './Country.styled'

const Country = props => {
    const country = props.match.params.country;
    console.log(country);
    const countries = {
        canada: {
            img: '/images/canada.jpg',
            description: 'it`s Canada'
        },
        china: {
            img: '/images/china.jpg',
            description: 'it`s China'
        },
        vietnam: {
            img: '/images/vietnam.jpg',
            description: 'it`s Viet nam'
        },
        laos: {
            img: '/images/laos.jpg',
            description: 'it`s Laos'
        },
        india: {
            img: '/images/india.jpg',
            description: 'it`s India'
        }
    }
    return (
        <s.CountryContainer>
            <s.CountryImage src={countries[country].img}/>
            <s.CountryDescription>{countries[country].description}</s.CountryDescription>
        </s.CountryContainer>
    )
}

export default Country
