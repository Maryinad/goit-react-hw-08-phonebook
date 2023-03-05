import styled from 'styled-components';

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 600px;
  margin: 50px auto;
  align-items: flex-start;
  padding: 20px 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: center;
`;

export const TitleName = styled.label`
  display: flex;
  font-size: 32px;
  color: #fd7272;
  font-weight: 700;
  gap: 10px;
  align-items: center;
`;

export const InputName = styled.input`
  border: 3px solid #2c3a47;
  min-width: 200px;
  min-height: 30px;
  border-radius: 4px;
`;

export const Btn = styled.button`
  display: inline-block;
  margin-top: 20px;
  padding: 15px 25px;
  font-size: 22px;
  font-weight: 700;
  background-color: #fd7272;
  color: white;
  border-radius: 4px;
  border: none;
  width: 100%;
`;

export const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-top: 50px;
`;
