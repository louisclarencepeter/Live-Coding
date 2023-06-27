import styled from "styled-components";
import img from "../images/Profile.png";

const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  background-color: lightblue;
  border-radius: 5px;
`;

const StyledProfileImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const StyledProfileName = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const StyledProfileDescription = styled.p`
  font-weight: bold;
  color: #fff;
`;

const StyledProfileCardButton = styled.button`
background-color: #ff0000;
color: #ffffff;
padding: 10px 20px;
border: none;
border-radius: 4px;
cursor: pointer;

&:hover {
  background-color: #ff3333;
}
`


const ProfileCard = () => {
  return (
    <StyledProfileCard>
      <StyledProfileImage src={img} alt="..." />
      <StyledProfileName>John Doe</StyledProfileName>
      <StyledProfileDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ab omnis
        ducimus at voluptas repudiandae excepturi eaque laborum necessitatibus
        beatae ipsa, veniam dolore quisquam cum laboriosam pariatur ullam!
        Fugiat, quisquam!
      </StyledProfileDescription>
      <StyledProfileCardButton>Contact</StyledProfileCardButton>
    </StyledProfileCard>
  );
};

export default ProfileCard;
