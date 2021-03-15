import styled from "styled-components";

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
`;

export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-container {
    background: var(--mainWhite);
    outline: 2px solid black;
  }
  .modal-product {
    font-size: 1.25rem;
  }
  .modal-img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    margin: 2rem auto;
  }
`;

export const ProductInfo = styled.p`
  line-height: 1.8;
  text-align: justify;
`;

export const BackToProducts = styled.button`
  border-radius: 0;
  border: 1px solid black;
  background-color: var(--mainDark);
  color: var(--mainWhite);
  padding: 1rem 3rem;
  height: ${(props) => (props.inModal ? "auto" : "100%")};
  &:hover {
    background-color: var(--mainWhite);
    color: var(--mainDark);
    transition: all 0.5s linear;
  }
`;

export const AddBtn = styled.button`
  border-radius: 0;
  border: 1px solid black;
  background-color: var(--mainWhite);
  color: var(--mainDark);
  padding: 0.6rem 3rem;
  &:disabled {
    color: #aaa;
    border-color: #aaa;
    &:hover {
      background-color: var(--mainWhite);
      color: #aaa;
      border-color: #aaa;
    }
  }
  &:hover {
    background-color: var(--mainDark);
    color: var(--mainWhite);
    transition: all 0.5s linear;
  }
  svg {
    position: relative;
    bottom: 0.2em;
  }
`;

export const CartIcon = () => (
  <svg
    className="w-6 h-6"
    width="36px"
    fill="none"
    stroke="currentcolor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    ></path>
  </svg>
);

export const TrashIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    ></path>
  </svg>
);
