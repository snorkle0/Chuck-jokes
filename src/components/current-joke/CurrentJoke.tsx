import React from 'react'
import Controls from '../common/Controls';
import * as S from './CurrentJoke.styles';
import ChuckNorrisPhoto from '../../assets/chuck-norris-photo.jpg';
import RandomPhoto from '../../assets/random-photo.jpg';


const CurrentJoke = () =>{
    return (
        <S.Image src={ChuckNorrisPhoto}></S.Image>
    )
}


export default CurrentJoke;