import styled from 'styled-components';

export const ProductCard = styled.div`
    .card-img-top {
        border-radius: 0;
        width: 100%;
        height: 30vw;
        object-fit: cover;
    }
    .card {
        // height: 300px;
        border-color: black;
        border-radius: 0;
        // transition: all 0.5s linear;
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        // transition: all 0.5s linear;
    }
    &:hover {
        .card {
            outline: 2px solid var(--mainDark);
            // transition: all 0.5s ease-in;
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .img-container:hover .card-img-top {
        object-fit: contain;
        transform: scale(3);
        transition: all 1.5s linear; 
    }
    .img-container:hover .cart-btn {
        transform: translate(0, 0);
        transition: all 0.25s linear;
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--mainWhite);
        outline: none;
        border-top: 1px solid black;
        border-right: 1px solid black;
        border-left: none;
        border-bottom: none;
        padding: 1rem;
        transform: translate(-100%, 100%);
        // z-index: 10;
        &:hover {
            background-color: var(--mainDark);
            color: var(--mainWhite);
        }
    }
`