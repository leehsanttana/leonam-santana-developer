import styled from "styled-components";

export const Contacts = styled.section`
  padding: 50px 160px;
`;

export const SocialLinks = styled.ul`
  margin-top: 60px;
  display: flex;
  gap: 2rem;

  li {
    list-style-type: none;
    background: var(--purple);
    transition: 0.3s ease-in-out;

    .icons {
      padding: 1.2rem 1.5rem;
      width: 45px;
      height: 45px;
    }

    &:hover {
      transform: scale(0.9);
    }
  }
`;
