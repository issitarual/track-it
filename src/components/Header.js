import styled from 'styled-components';

export default function Header (){
    return(
        <Div>
            <Title>TrackIt</Title>
            <Image src="https://data.whicdn.com/images/346284176/original.jpg"></Image>
        </Div>
    )
}

const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const Title = styled.p`
    font-family: 'Playball', cursive;
    font-size: 40px;
    color: #fff;
`;

const Image = styled.img`
    border-radius: 50%50%;
    height: 51px;
    width: 51px;
`;